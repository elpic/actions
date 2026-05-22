import { T as jsxRuntimeExports } from "./server-DdUa7k2n.js";
import { A as ACTIONS, L as Link } from "./router-CKv4OAvd.js";
import { T as Terminal, G as Github, A as ArrowRight, C as Check } from "./terminal-B5O-ER9H.js";
import { c as createLucideIcon } from "./createLucideIcon-BuqL2Sx9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$7 = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode$6);
const __iconNode$5 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
];
const Workflow = createLucideIcon("workflow", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const REPO = "https://github.com/elpic/actions";
const categoryMeta = {
  integration: {
    icon: Workflow,
    blurb: "PR integration: test, lint, build, security"
  },
  delivery: {
    icon: Package,
    blurb: "Release and publish to registries"
  },
  github: {
    icon: Github,
    blurb: "GitHub-specific composite actions"
  },
  utilities: {
    icon: Wrench,
    blurb: "General-purpose composite actions"
  }
};
const categoryOrder = ["integration", "delivery", "github", "utilities"];
const categories = categoryOrder.map((name) => {
  const items = ACTIONS.filter((a) => a.category === name);
  return {
    name,
    icon: categoryMeta[name].icon,
    blurb: categoryMeta[name].blurb,
    items
  };
});
const features = [{
  icon: Layers,
  title: "Composite by design",
  body: "Each action ships a single action.yml. Drop it into any job and it handles checkout and tooling internally."
}, {
  icon: Tag,
  title: "Semantic versioning",
  body: "Pin to v1, v1.2, or v1.2.3. Floating major tags move forward, immutable point releases stay put."
}, {
  icon: Shield,
  title: "Security baked in",
  body: "Lint, test, and security jobs ship as separate steps so you can compose the pipeline that fits your repo."
}, {
  icon: Zap,
  title: "Zero glue code",
  body: "You define runs-on, triggers, and job graph. The actions do the rest. No bash scaffolding required."
}];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center gap-2 font-mono text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4", strokeWidth: 2.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "elpic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "actions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#categories", className: "transition-colors hover:text-foreground", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#usage", className: "transition-colors hover:text-foreground", children: "Usage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#versioning", className: "transition-colors hover:text-foreground", children: "Versioning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#templates", className: "transition-colors hover:text-foreground", children: "Templates" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REPO, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "View on GitHub" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-60", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-hero", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-primary" }),
          "v1.4.0 - released today"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl", children: [
          "Reusable GitHub Actions,",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "composed for real pipelines." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground", children: "A curated set of composite actions for integration, release, and repo automation. Reference them from your workflow in a single line. No bash scaffolding, no glue code." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REPO, target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
            "Browse the repo",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#usage", className: "inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary", children: "See usage" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-14 max-w-2xl overflow-hidden rounded-xl border border-border bg-card text-left shadow-2xl shadow-black/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-destructive/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-chart-3/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-primary/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 font-mono text-xs text-muted-foreground", children: ".github/workflows/integration.yml" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { dangerouslySetInnerHTML: {
            __html: '<span class="text-muted-foreground">jobs:</span>\n  <span class="text-foreground">test:</span>\n    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n    <span class="text-muted-foreground">steps:</span>\n      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/go/test@v1</span>'
          } }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.body })
    ] }, f.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "categories", className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "/ categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl", children: [
            ACTIONS.length,
            " actions, organized by intent."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${REPO}#categories`, target: "_blank", rel: "noreferrer", className: "hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:items-center sm:gap-1", children: [
          "View all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cat.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-mono text-lg font-semibold", children: [
                cat.name,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: cat.blurb })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground", children: cat.items.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: cat.items.map((it) => {
          const label = it.subcategory ? `${it.subcategory}/${it.path.split("/").pop()}` : it.path.split("/").pop();
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/actions/$slug", params: {
            slug: it.slug
          }, className: "inline-block rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary", children: label }) }, it.slug);
        }) })
      ] }, cat.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "usage", className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "/ usage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl", children: "Reference an action. That's the whole setup." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-muted-foreground", children: [
          "Every action is a composite action with its own",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-secondary px-1.5 py-0.5 font-mono text-sm", children: "action.yml" }),
          ". You control ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "rounded bg-secondary px-1.5 py-0.5 font-mono text-sm", children: "runs-on" }),
          ", triggers, and job dependencies. Each action handles its own checkout and tooling setup internally."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: ["Drop-in composite steps. No custom runners required", "Consistent inputs across language ecosystems", "Conventional-commits release flow via release-please"].map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 flex-none text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: line })
        ] }, line)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: ".github/workflows/pr.yml" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { dangerouslySetInnerHTML: {
          __html: '<span class="text-muted-foreground">name:</span> <span class="text-accent">PR</span>\n<span class="text-muted-foreground">on:</span> [<span class="text-accent">pull_request</span>]\n\n<span class="text-muted-foreground">jobs:</span>\n  <span class="text-foreground">lint:</span>\n    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n    <span class="text-muted-foreground">steps:</span>\n      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/python/lint@v1</span>\n  <span class="text-foreground">test:</span>\n    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n    <span class="text-muted-foreground">steps:</span>\n      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/python/test@v1</span>\n  <span class="text-foreground">security:</span>\n    <span class="text-muted-foreground">runs-on:</span> <span class="text-accent">ubuntu-latest</span>\n    <span class="text-muted-foreground">steps:</span>\n      <span class="text-muted-foreground">-</span> <span class="text-muted-foreground">uses:</span> <span class="text-primary">elpic/actions/integration/python/security@v1</span>'
        } }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "versioning", className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary", children: "/ versioning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl", children: "Pin to the precision you need." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-3", children: [{
        tag: "v1",
        label: "Floating major",
        desc: "Latest v1.x release. Moves forward with non-breaking changes."
      }, {
        tag: "v1.2",
        label: "Floating minor",
        desc: "Latest v1.2.x patch. Bug fixes only inside this minor line."
      }, {
        tag: "v1.2.3",
        label: "Immutable",
        desc: "Exact point-in-time release. Never moves. Maximum reproducibility."
      }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-lg font-semibold", children: v.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-medium text-foreground", children: v.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: v.desc })
      ] }, v.tag)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "templates", className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
        "sibling project"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-2xl font-semibold tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono", children: "elpic/templates" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Blueprint-rendered templates for Dockerfiles and GitHub Actions workflows. Declare versions once, render every file, and detect drift automatically in CI." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://elpic.github.io/templates/", target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary", children: [
        "Visit elpic/templates",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl font-semibold tracking-tight sm:text-4xl", children: "Ship pipelines, not boilerplate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: [
        "Open the repo, copy a single ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: "uses:" }),
        " line, and your workflow is wired up."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REPO, target: "_blank", rel: "noreferrer", className: "mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
        "Open elpic/actions",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono", children: "elpic/actions · MIT licensed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: REPO, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 transition-colors hover:text-foreground", children: [
        "github.com/elpic/actions ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) })
  ] });
}
export {
  Landing as component
};
