import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GitBranch,
  Workflow,
  Package,
  Wrench,
  Github,
  ArrowRight,
  Check,
  Tag,
  Terminal,
  Shield,
  Zap,
  Layers,
} from "lucide-react";
import { ACTIONS } from "@/lib/actions-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "elpic/actions - Reusable GitHub Actions for integration & delivery" },
      {
        name: "description",
        content:
          "A curated collection of composite GitHub Actions for integration, delivery, and repo utilities. Drop-in steps for Go, Python, and PyPI pipelines.",
      },
      { property: "og:title", content: "elpic/actions - Reusable GitHub Actions" },
      {
        property: "og:description",
        content:
          "Composite GitHub Actions for integration, release, and delivery. Reference them from your workflow in a single line.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elpic.github.io/actions/" },
      { name: "twitter:title", content: "elpic/actions - Reusable GitHub Actions" },
      {
        name: "twitter:description",
        content:
          "Composite GitHub Actions for integration, release, and delivery.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://elpic.github.io/actions/" },
    ],
  }),
  component: Landing,
});

const REPO = "https://github.com/elpic/actions";

const categoryMeta: Record<string, { icon: typeof Workflow; blurb: string }> = {
  integration: {
    icon: Workflow,
    blurb: "PR integration: test, lint, build, security",
  },
  delivery: {
    icon: Package,
    blurb: "Release and publish to registries",
  },
  github: {
    icon: Github,
    blurb: "GitHub-specific composite actions",
  },
  utilities: {
    icon: Wrench,
    blurb: "General-purpose composite actions",
  },
};

const categoryOrder = ["integration", "delivery", "github", "utilities"] as const;

const categories = categoryOrder.map((name) => {
  const items = ACTIONS.filter((a) => a.category === name);
  return {
    name,
    icon: categoryMeta[name].icon,
    blurb: categoryMeta[name].blurb,
    items,
  };
});

const features = [
  {
    icon: Layers,
    title: "Composite by design",
    body: "Each action ships a single action.yml. Drop it into any job and it handles checkout and tooling internally.",
  },
  {
    icon: Tag,
    title: "Semantic versioning",
    body: "Pin to v1, v1.2, or v1.2.3. Floating major tags move forward, immutable point releases stay put.",
  },
  {
    icon: Shield,
    title: "Security baked in",
    body: "Lint, test, and security jobs ship as separate steps so you can compose the pipeline that fits your repo.",
  },
  {
    icon: Zap,
    title: "Zero glue code",
    body: "You define runs-on, triggers, and job graph. The actions do the rest. No bash scaffolding required.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-mono text-sm">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Terminal className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-foreground">elpic</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">actions</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#categories" className="transition-colors hover:text-foreground">Categories</a>
            <a href="#usage" className="transition-colors hover:text-foreground">Usage</a>
            <a href="#versioning" className="transition-colors hover:text-foreground">Versioning</a>
          </nav>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">View on GitHub</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
        <div className="absolute inset-0 bg-hero" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              v1.0.1 - released today
            </div>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Reusable GitHub Actions,{" "}
              <span className="text-gradient">composed for real pipelines.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              A curated set of composite actions for integration, release, and repo
              automation. Reference them from your workflow in a single line.
              No bash scaffolding, no glue code.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
              >
                <Github className="h-4 w-4" />
                Browse the repo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#usage"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
              >
                See usage
              </a>
            </div>

            {/* Terminal card */}
            <div className="mx-auto mt-14 max-w-2xl overflow-hidden rounded-xl border border-border bg-card text-left shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-chart-3/70" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  .github/workflows/integration.yml
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
                <code dangerouslySetInnerHTML={{ __html:
                  '<span class="text-muted-foreground">jobs:</span>\n' +
                  '  <span class="text-foreground">test:</span>\n' +
                  '    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n' +
                  '    <span class="text-muted-foreground">steps:</span>\n' +
                  '      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/go/test@v1</span>'
                }} />
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                / categories
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Eleven actions, organized by intent.
              </h2>
            </div>
            <a
              href={`${REPO}#categories`}
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:items-center sm:gap-1"
            >
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg font-semibold">
                        {cat.name}<span className="text-muted-foreground">/</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">{cat.blurb}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {cat.items.length}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-foreground/90"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section id="usage" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                / usage
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Reference an action. That&apos;s the whole setup.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every action is a composite action with its own{" "}
                <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">
                  action.yml
                </code>
                . You control <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">runs-on</code>,
                triggers, and job dependencies. Each action handles its own
                checkout and tooling setup internally.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Drop-in composite steps. No custom runners required",
                  "Consistent inputs across language ecosystems",
                  "Conventional-commits release flow via release-please",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <span className="text-foreground/90">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
                <GitBranch className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">
                  .github/workflows/pr.yml
                </span>
              </div>
              <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
                <code dangerouslySetInnerHTML={{ __html:
                  '<span class="text-muted-foreground">name:</span> <span class="text-accent">PR</span>\n' +
                  '<span class="text-muted-foreground">on:</span> [<span class="text-accent">pull_request</span>]\n' +
                  '\n' +
                  '<span class="text-muted-foreground">jobs:</span>\n' +
                  '  <span class="text-foreground">lint:</span>\n' +
                  '    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n' +
                  '    <span class="text-muted-foreground">steps:</span>\n' +
                  '      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/python/lint@v1</span>\n' +
                  '  <span class="text-foreground">test:</span>\n' +
                  '    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n' +
                  '    <span class="text-muted-foreground">steps:</span>\n' +
                  '      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/python/test@v1</span>\n' +
                  '  <span class="text-foreground">security:</span>\n' +
                  '    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n' +
                  '    <span class="text-muted-foreground">steps:</span>\n' +
                  '      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/python/security@v1</span>'
                }} />
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Versioning */}
      <section id="versioning" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            / versioning
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pin to the precision you need.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { tag: "v1", label: "Floating major", desc: "Latest v1.x release. Moves forward with non-breaking changes." },
              { tag: "v1.2", label: "Floating minor", desc: "Latest v1.2.x patch. Bug fixes only inside this minor line." },
              { tag: "v1.2.3", label: "Immutable", desc: "Exact point-in-time release. Never moves. Maximum reproducibility." },
            ].map((v) => (
              <div
                key={v.tag}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="font-mono text-lg font-semibold">{v.tag}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{v.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Ship pipelines, not boilerplate.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open the repo, copy a single <span className="font-mono text-foreground">uses:</span> line,
            and your workflow is wired up.
          </p>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
          >
            <Github className="h-4 w-4" />
            Open elpic/actions
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-mono">elpic/actions · MIT licensed</p>
          <a
            href={REPO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            github.com/elpic/actions <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
