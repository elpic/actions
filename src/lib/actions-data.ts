import raw from "@/data/actions.json";

export interface ActionInput {
  name: string;
  description: string;
  required: boolean;
  default: string | number | boolean | null;
}

export interface ActionDef {
  slug: string;
  path: string;
  category: string;
  subcategory: string | null;
  name: string;
  description: string;
  inputs: ActionInput[];
}

export const ACTIONS: ActionDef[] = raw as ActionDef[];

export function getAction(slug: string): ActionDef | undefined {
  return ACTIONS.find((a) => a.slug === slug);
}

export function actionsByCategory(): Record<string, ActionDef[]> {
  const out: Record<string, ActionDef[]> = {};
  for (const a of ACTIONS) {
    (out[a.category] ||= []).push(a);
  }
  return out;
}

export const REPO_URL = "https://github.com/elpic/actions";
export const SITE_URL = "https://elpic.github.io/actions";

export function actionRepoUrl(a: ActionDef): string {
  return `${REPO_URL}/tree/main/${a.path}`;
}
