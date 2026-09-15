export type LinkRef = {
  label: string;
  href: string;
};

export type PullRequestState = "merged" | "in-review";

export type PullRequest = {
  number: number;
  url: string;
  title: string;
  state: PullRequestState;
  mergedAt?: string;
  stats?: string;
  summary?: string;
};

export type Contribution = {
  slug: string;
  project: string;
  repository: string;
  language: string;
  about: string;
  focus: string;
  pullRequests: PullRequest[];
};

export type LedgerItem = {
  label: string;
  detail: string;
  href?: string;
};

export type ProjectStatus = "live" | "in-development" | "not-shipped";

export type Project = {
  slug: string;
  name: string;
  kind: string;
  role: string;
  period: string;
  summary: string;
  contributions: string[];
  stack?: string[];
  status: ProjectStatus;
  link?: LinkRef;
};

export type WritingStatus = "published" | "awaiting-publication";

export type WritingEntry = {
  slug: string;
  subject: string;
  headline: string;
  status: WritingStatus;
  publishedAt?: string;
  summary: string;
  concepts: string[];
  stack: string[];
  repository: LinkRef;
  demo?: LinkRef;
};

export type Role = {
  slug: string;
  org: string;
  role: string;
  start: string;
  end: string;
  period: string;
  concurrent?: boolean;
  summary: string[];
  link?: LinkRef;
};
