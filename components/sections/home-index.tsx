import Link from "next/link";

import { contributions } from "@/content/open-source";
import { projects, statusLabel } from "@/content/projects";
import { roles } from "@/content/experience";
import { writing, writingStatus } from "@/content/writing";

type Row = { title: string; detail: string };

const blocks: {
  index: string;
  title: string;
  href: string;
  blurb: string;
  rows: Row[];
}[] = [
  {
    index: "01",
    title: "Selected work",
    href: "/work",
    blurb:
      "Client and product engagements — what shipped, what my role was, and where it is live.",
    rows: projects.map((project) => ({
      title: project.name,
      detail: `${project.kind} · ${statusLabel[project.status]}`,
    })),
  },
  {
    index: "02",
    title: "Open source & protocol engineering",
    href: "/open-source",
    blurb:
      "Merged and in-review contributions to production protocol and distributed-systems codebases, each linked to the pull request.",
    rows: contributions.map((contribution) => {
      const merged = contribution.pullRequests.filter(
        (pr) => pr.state === "merged",
      ).length;
      const inReview = contribution.pullRequests.length - merged;
      return {
        title: contribution.project,
        detail: `${contribution.language} · ${merged} merged${
          inReview ? ` · ${inReview} in review` : ""
        }`,
      };
    }),
  },
  {
    index: "03",
    title: "Writing",
    href: "/writing",
    blurb:
      "Technical articles written for developer audiences, each built alongside a public demonstration repository.",
    rows: writing.map((entry) => ({
      title: entry.subject,
      detail: `${writingStatus[entry.status]}${
        entry.publishedAt ? ` · ${entry.publishedAt}` : ""
      }`,
    })),
  },
  {
    index: "04",
    title: "Experience",
    href: "/experience",
    blurb:
      "Agency, contract and product engagements — including three concurrent contracts across one quarter.",
    rows: roles.map((role) => ({ title: role.org, detail: role.period })),
  },
];

export function HomeIndex() {
  return (
    <>
      {blocks.map((block) => (
        <section key={block.href} className="border-b border-rule">
          <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
            <div className="flex items-baseline gap-x-4 border-b border-rule pb-3">
              <span className="font-mono text-meta tnum tracking-[0.14em] text-accent">
                {block.index}
              </span>
              <h2 className="font-mono text-meta uppercase tracking-[0.16em] text-ink">
                {block.title}
              </h2>
              <Link
                href={block.href}
                className="ml-auto font-mono text-meta uppercase tracking-[0.12em] text-muted link-plain hover:text-ink"
              >
                View all →
              </Link>
            </div>

            <p className="mt-5 max-w-[62ch] text-body text-ink-soft">
              {block.blurb}
            </p>

            <ul className="mt-6 border-t border-rule">
              {block.rows.map((row) => (
                <li key={row.title} className="border-b border-rule last:border-b-0">
                  <Link
                    href={block.href}
                    className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3.5 link-plain"
                  >
                    <span className="font-display text-[1.125rem] leading-snug text-ink group-hover:text-accent">
                      {row.title}
                    </span>
                    <span className="font-mono text-meta leading-relaxed tracking-[0.04em] text-muted">
                      {row.detail}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
