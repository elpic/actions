import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Github, Terminal, Check, Minus } from "lucide-react";
import {
  ACTIONS,
  REPO_URL,
  SITE_URL,
  actionRepoUrl,
  getAction,
  type ActionDef,
} from "@/lib/actions-data";

export const Route = createFileRoute("/actions/$slug")({
  loader: ({ params }) => {
    const action = getAction(params.slug);
    if (!action) throw notFound();
    return { action };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.action;
    if (!a) return {};
    const title = `${a.name} - elpic/actions`;
    const desc = a.description;
    const url = `${SITE_URL}/actions/${a.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Action not found</h1>
        <p className="mt-2 text-muted-foreground">That action doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  ),
  component: ActionPage,
});

function neighbors(slug: string): { prev?: ActionDef; next?: ActionDef } {
  const i = ACTIONS.findIndex((a) => a.slug === slug);
  return { prev: ACTIONS[i - 1], next: ACTIONS[i + 1] };
}

function ActionPage() {
  const { action } = Route.useLoaderData();
  const { prev, next } = neighbors(action.slug);
  const ref = `elpic/actions/${action.path}@v1`;

  const exampleInputs = action.inputs.filter((i) => i.required).slice(0, 3);
  const usageYaml = [
    "jobs:",
    `  ${action.path.split("/").pop()}:`,
    "    runs-on: ubuntu-latest",
    "    steps:",
    `      - uses: ${ref}`,
    ...(exampleInputs.length
      ? [
          "        with:",
          ...exampleInputs.map(
            (i) => `          ${i.name}: ${i.default ?? "<value>"}`,
          ),
        ]
      : []),
  ].join("\n");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
              <Terminal className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-foreground">elpic</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">actions</span>
          </Link>
          <a
            href={actionRepoUrl(action)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">View source</span>
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All actions
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-muted-foreground">
            {action.category}
            {action.subcategory ? ` / ${action.subcategory}` : ""}
          </span>
          <span className="rounded-full border border-border bg-card px-2.5 py-1 text-foreground/90">
            v1
          </span>
        </div>

        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          {action.name}
        </h1>
        <p className="mt-3 text-pretty text-lg text-muted-foreground">
          {action.description}
        </p>

        <div className="mt-4 flex items-center gap-2 font-mono text-sm text-muted-foreground">
          <span className="rounded bg-secondary px-2 py-1 text-foreground">{ref}</span>
        </div>

        {/* Usage */}
        <section className="mt-10">
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary">/ usage</h2>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-chart-3/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                .github/workflows/{action.category}.yml
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
              <code>{usageYaml}</code>
            </pre>
          </div>
        </section>

        {/* Inputs */}
        <section className="mt-12">
          <h2 className="text-sm font-mono uppercase tracking-widest text-primary">/ inputs</h2>
          {action.inputs.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              This action takes no inputs.
            </p>
          ) : (
            <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-secondary/40 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Required</th>
                    <th className="px-4 py-3">Default</th>
                  </tr>
                </thead>
                <tbody>
                  {action.inputs.map((input) => (
                    <tr key={input.name} className="border-b border-border/60 last:border-0 align-top">
                      <td className="px-4 py-3">
                        <div className="font-mono text-foreground">{input.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {input.description}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {input.required ? (
                          <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-0.5 text-xs text-primary">
                            <Check className="h-3 w-3" /> yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Minus className="h-3 w-3" /> no
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                        {input.default === null || input.default === undefined ? (
                          <span className="opacity-50">-</span>
                        ) : (
                          String(input.default)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* Links */}
        <section className="mt-12 grid gap-3 sm:grid-cols-2">
          <a
            href={actionRepoUrl(action)}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <Github className="h-4 w-4" /> Source on GitHub
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              View action.yml and full README.
            </p>
          </a>
          <a
            href={`${REPO_URL}/releases`}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              Releases <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Check the changelog and pin to a specific version.
            </p>
          </a>
        </section>

        {/* Prev / Next */}
        <nav className="mt-14 flex items-stretch justify-between gap-4 border-t border-border/60 pt-6">
          {prev ? (
            <Link
              to="/actions/$slug"
              params={{ slug: prev.slug }}
              className="group flex-1 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <ArrowLeft className="h-3 w-3" /> Previous
              </div>
              <div className="mt-1 font-mono text-sm">{prev.name}</div>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/actions/$slug"
              params={{ slug: next.slug }}
              className="group flex-1 rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                Next <ArrowRight className="h-3 w-3" />
              </div>
              <div className="mt-1 font-mono text-sm">{next.name}</div>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p className="font-mono">elpic/actions · MIT licensed</p>
          <a
            href={REPO_URL}
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
