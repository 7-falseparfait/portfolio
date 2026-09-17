import type { LinkRef } from "./types";

export const profile = {
  name: "Wisdom C Osuji",
  role: "Frontend Developer · Technical Writer",
  location: "Nigeria",
  timezone: "UTC+1",
  email: "weezdomosuji@gmail.com",
  phone: "+234 808 189 3835",
} as const;

export const links: LinkRef[] = [
  { label: "GitHub", href: "https://github.com/7-falseparfait" },
  { label: "X", href: "https://x.com/falseparfaitt" },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const statement: string[] = [
  "Frontend developer working in React and TypeScript, with a growing body of Rust contributions to Bitcoin infrastructure — Ride The Lightning, Frostsnap, Floresta and ghostKey.",
  "I have shipped client products across healthcare, internet services and AI tooling, and I write technical articles for a developer audience. Most of that writing is ghostwritten and published without my byline, so the demonstration repositories sit beside it as the evidence.",
];

export const thesis =
  "The work has a consistent shape: understand a system properly, build something against it, then explain it clearly enough that someone else can use it.";

export const facts = [
  { label: "Based in", value: "Kaduna, Nigeria · UTC+1" },
  { label: "Open source", value: "6 merged PRs · 4 in review" },
  { label: "Technical writing", value: "9 articles for developer audiences" },
  { label: "Working in", value: "TypeScript · React · Rust" },
  { label: "Away from the desk", value: "Chess" },
] as const;
