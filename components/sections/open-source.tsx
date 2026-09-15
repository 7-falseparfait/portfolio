import { SectionHeading } from "@/components/section-heading";
import {
  bitcoinLearning,
  contributions,
  openSourceStats,
} from "@/content/open-source";
import type { Contribution, PullRequest } from "@/content/types";

function StateMark({ state }: { state: PullRequest["state"] }) {
  return (
    <span
      aria-hidden
      className={
        state === "merged"
          ? "inline-block size-[5px] translate-y-[-2px] bg-accent"
          : "inline-block size-[5px] translate-y-[-2px] border border-rule-strong"
      }
    />
  );
}

function PullRequestRow({ pr }: { pr: PullRequest }) {
  return (
    <li className="border-b border-rule last:border-b-0">
      <a
        href={pr.url}
        target="_blank"
        rel="noreferrer"
        className="group grid gap-x-12 gap-y-2 py-4 md:grid-cols-[15rem_minmax(0,1fr)] md:items-baseline"
      >
        <span className="flex items-baseline gap-3 font-mono text-small tnum text-muted">
          <StateMark state={pr.state} />
          <span className="group-hover:text-accent">#{pr.number}</span>
          <span className="font-mono text-meta uppercase tracking-[0.12em]">
            {pr.state === "merged" ? "Merged" : "In review"}
          </span>
        </span>

        <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="max-w-[54ch] text-body text-ink group-hover:text-accent">
            {pr.title}
          </span>
          {pr.mergedAt ? (
            <span className="font-mono text-meta tracking-[0.06em] text-muted">
              {pr.mergedAt}
            </span>
          ) : null}
          {pr.stats ? (
            <span className="font-mono text-meta tnum tracking-[0.06em] text-muted">
              {pr.stats}
            </span>
          ) : null}
        </span>
      </a>
    </li>
  );
}

function ContributionBlock({ contribution }: { contribution: Contribution }) {
  return (
    <article className="mt-14">
      <header className="grid gap-x-12 gap-y-4 md:grid-cols-[15rem_minmax(0,1fr)]">
        <div>
          <h3 className="font-display text-[1.75rem] leading-tight tracking-[-0.01em] text-ink">
            {contribution.project}
          </h3>
          <p className="mt-2 font-mono text-meta uppercase tracking-[0.12em] text-muted">
            {contribution.language}
          </p>
          <a
            href={contribution.repository}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block font-mono text-small text-ink link-quiet"
          >
            Repository ↗
          </a>
        </div>

        <div className="max-w-[62ch]">
          <p className="text-body text-ink-soft">{contribution.about}</p>
          <p className="mt-4 border-l border-rule-strong pl-5 font-mono text-meta leading-relaxed tracking-[0.04em] text-muted">
            {contribution.focus}
          </p>
        </div>
      </header>

      <ul className="mt-8 border-t border-rule">
        {contribution.pullRequests.map((pr) => (
          <PullRequestRow key={pr.number} pr={pr} />
        ))}
      </ul>
    </article>
  );
}

export function OpenSource() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          id="open-source"
          index="02"
          title="Open source & Bitcoin"
          note={`${openSourceStats.merged} merged · ${openSourceStats.inReview} in review`}
        />

        <p className="mt-8 max-w-[62ch] text-body text-ink-soft">
          Contributions to Bitcoin infrastructure: Lightning node tooling in
          TypeScript, FROST threshold-multisig firmware in Rust, and a
          lightweight embeddable Bitcoin client. Every entry links to the pull
          request, so the work can be read rather than taken on trust.
        </p>

        {contributions.map((contribution) => (
          <ContributionBlock key={contribution.slug} contribution={contribution} />
        ))}

        <div className="mt-20 border-t border-rule pt-10">
          <h3 className="font-mono text-meta uppercase tracking-[0.16em] text-muted">
            Learning & community
          </h3>
          <ul className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2">
            {bitcoinLearning.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer" className="group block link-plain">
                  <span className="text-body text-ink group-hover:text-accent">
                    {item.label}
                  </span>
                  <span className="mt-1.5 block font-mono text-meta leading-relaxed tracking-[0.04em] text-muted">
                    {item.detail}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
