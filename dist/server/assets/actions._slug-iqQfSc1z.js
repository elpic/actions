import { T as jsxRuntimeExports } from "./server-DdUa7k2n.js";
import { R as Route, L as Link, a as actionRepoUrl, b as REPO_URL, A as ACTIONS } from "./router-CKv4OAvd.js";
import { T as Terminal, G as Github, C as Check, A as ArrowRight } from "./terminal-B5O-ER9H.js";
import { A as ArrowLeft } from "./arrow-left-Ceky5Vrh.js";
import { c as createLucideIcon } from "./createLucideIcon-BuqL2Sx9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode);
function neighbors(slug) {
  const i = ACTIONS.findIndex((a) => a.slug === slug);
  return {
    prev: ACTIONS[i - 1],
    next: ACTIONS[i + 1]
  };
}
function ActionPage() {
  const {
    action
  } = Route.useLoaderData();
  const {
    prev,
    next
  } = neighbors(action.slug);
  const ref = `elpic/actions/${action.path}@v1`;
  const exampleInputs = action.inputs.filter((i) => i.required).slice(0, 3);
  const usageYaml = ["jobs:", `  ${action.path.split("/").pop()}:`, "    runs-on: ubuntu-latest", "    steps:", `      - uses: ${ref}`, ...exampleInputs.length ? ["        with:", ...exampleInputs.map((i) => `          ${i.name}: ${i.default ?? "<value>"}`)] : []].join("\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-5xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-mono text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "elpic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "actions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: actionRepoUrl(action), target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "View source" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-3xl px-6 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        " All actions"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-2 font-mono text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-muted-foreground", children: [
          action.category,
          action.subcategory ? ` / ${action.subcategory}` : ""
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-2.5 py-1 text-foreground/90", children: "v1" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl", children: action.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-pretty text-lg text-muted-foreground", children: action.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center gap-2 font-mono text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-secondary px-2 py-1 text-foreground", children: ref }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-mono uppercase tracking-widest text-primary", children: "/ usage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-destructive/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-chart-3/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-primary/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-3 font-mono text-xs text-muted-foreground", children: [
              ".github/workflows/",
              action.category,
              ".yml"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: usageYaml }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-mono uppercase tracking-widest text-primary", children: "/ inputs" }),
        action.inputs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "This action takes no inputs." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 overflow-hidden rounded-xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-border bg-secondary/40 font-mono text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Default" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: action.inputs.map((input) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 last:border-0 align-top", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-foreground", children: input.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: input.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: input.required ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
              " yes"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" }),
              " no"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: input.default === null || input.default === void 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "-" }) : String(input.default) })
          ] }, input.name)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 grid gap-3 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: actionRepoUrl(action), target: "_blank", rel: "noreferrer", className: "group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
            " Source on GitHub"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "View action.yml and full README." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${REPO_URL}/releases`, target: "_blank", rel: "noreferrer", className: "group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
            "Releases ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Check the changelog and pin to a specific version." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-14 flex items-stretch justify-between gap-4 border-t border-border/60 pt-6", children: [
        prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/actions/$slug", params: {
          slug: prev.slug
        }, className: "group flex-1 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3 w-3" }),
            " Previous"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-sm", children: prev.name })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {}),
        next ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/actions/$slug", params: {
          slug: next.slug
        }, className: "group flex-1 rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1 text-xs text-muted-foreground", children: [
            "Next ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-sm", children: next.name })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono", children: "elpic/actions · MIT licensed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REPO_URL, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 transition-colors hover:text-foreground", children: [
        "github.com/elpic/actions ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) })
  ] });
}
export {
  ActionPage as component
};
