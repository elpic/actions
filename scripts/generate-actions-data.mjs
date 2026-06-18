#!/usr/bin/env node
/**
 * Regenerates src/data/actions.json from the composite action.yml files
 * that live in the elpic/actions repository.
 *
 * It walks the repo root for `<dir>/.../action.yml` (or action.yaml) files,
 * parses each one, and derives the slug / category / subcategory from the
 * directory path. The website reads the resulting JSON at build time.
 *
 * Run locally:   node scripts/generate-actions-data.mjs
 * In CI:         executed by .github/workflows/update-actions.yml every 2 days.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const OUT_FILE = join(REPO_ROOT, "src", "data", "actions.json");

// Top-level directories that may contain composite actions. Anything outside
// these is ignored so we never pick up the website's own tooling.
const ACTION_ROOTS = ["delivery", "integration", "github", "utilities"];
// Never descend into these (defensive even though they sit outside ACTION_ROOTS).
const IGNORE = new Set(["node_modules", "dist", "src", "public", ".git", ".github"]);

/** Recursively collect every action.yml / action.yaml under `dir`. */
function findActionFiles(dir, found = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return found;
  }
  for (const entry of entries) {
    if (IGNORE.has(entry)) continue;
    const full = join(dir, entry);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      findActionFiles(full, found);
    } else if (entry === "action.yml" || entry === "action.yaml") {
      found.push(full);
    }
  }
  return found;
}

function normalizeInputs(rawInputs) {
  if (!rawInputs || typeof rawInputs !== "object") return [];
  return Object.entries(rawInputs).map(([name, spec]) => {
    const s = spec && typeof spec === "object" ? spec : {};
    const hasDefault = Object.prototype.hasOwnProperty.call(s, "default");
    return {
      name,
      description: String(s.description ?? "").trim(),
      required: s.required === true || s.required === "true",
      default: hasDefault ? s.default : null,
    };
  });
}

function buildAction(filePath) {
  const rel = relative(REPO_ROOT, dirname(filePath));
  const parts = rel.split(sep).filter(Boolean);
  if (parts.length === 0) return null;

  const category = parts[0];
  const subcategory = parts.length >= 3 ? parts[1] : null;
  const slug = parts.join("-");

  const doc = parseYaml(readFileSync(filePath, "utf8")) ?? {};

  return {
    slug,
    path: parts.join("/"),
    category,
    subcategory,
    name: String(doc.name ?? slug).trim(),
    description: String(doc.description ?? "").trim(),
    inputs: normalizeInputs(doc.inputs),
  };
}

function main() {
  const files = ACTION_ROOTS.flatMap((root) => {
    const dir = join(REPO_ROOT, root);
    return existsSync(dir) ? findActionFiles(dir) : [];
  });

  const actions = files
    .map(buildAction)
    .filter(Boolean)
    .sort((a, b) => a.path.localeCompare(b.path));

  if (actions.length === 0) {
    console.error(
      "No action.yml files found under: " + ACTION_ROOTS.join(", ") + ".\n" +
        "Refusing to overwrite src/data/actions.json with an empty list."
    );
    process.exit(1);
  }

  writeFileSync(OUT_FILE, JSON.stringify(actions, null, 2) + "\n");
  console.log(`Wrote ${actions.length} actions to ${relative(REPO_ROOT, OUT_FILE)}`);
}

main();
