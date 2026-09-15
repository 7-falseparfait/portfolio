import { SectionHeading } from "@/components/section-heading";
import { writing, writingDisclaimer, writingStatus } from "@/content/writing";
import type { WritingEntry } from "@/content/types";

function WritingEntryRow({ entry }: { entry: WritingEntry }) {
  return (
    <article className="grid gap-x-12 gap-y-5 border-b border-rule py-9 last:border-b-0 md:grid-cols-[15rem_minmax(0,1fr)]">
      <header>
        <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.01em] text-ink">
          {entry.subject}
        </h3>
        <p className="mt-2.5 font-mono text-meta uppercase tracking-[0.12em] text-accent">
          {writingStatus[entry.status]}
        </p>
        {entry.publishedAt ? (
          <p className="mt-1.5 font-mono text-small tnum text-muted">
            {entry.publishedAt}
          </p>
        ) : null}
        <a
          href={entry.repository.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block font-mono text-small text-ink link-quiet"
        >
          {entry.repository.label} ↗
        </a>
      </header>

      <div className="max-w-[62ch]">
        <p className="font-display text-[1.1875rem] leading-snug text-ink">
          {entry.headline}
        </p>
        <p className="mt-3.5 text-body text-ink-soft">{entry.summary}</p>

        <dl className="mt-6 space-y-2.5 border-t border-rule pt-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
            <dt className="w-24 shrink-0 font-mono text-meta uppercase tracking-[0.12em] text-muted">
              Concepts
            </dt>
            <dd className="font-mono text-meta leading-relaxed tracking-[0.03em] text-ink-soft">
              {entry.concepts.join(" · ")}
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-5">
            <dt className="w-24 shrink-0 font-mono text-meta uppercase tracking-[0.12em] text-muted">
              Built with
            </dt>
            <dd className="font-mono text-meta leading-relaxed tracking-[0.03em] text-ink-soft">
              {entry.stack.join(" · ")}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function WritingGroup({
  title,
  entries,
}: {
  title: string;
  entries: WritingEntry[];
}) {
  if (entries.length === 0) return null;

  return (
    <div className="mt-14">
      <h3 className="font-mono text-meta uppercase tracking-[0.16em] text-muted">
        {title}
        <span className="ml-3 tnum text-muted">{entries.length}</span>
      </h3>
      <div className="mt-2 border-t border-rule">
        {entries.map((entry) => (
          <WritingEntryRow key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}

export function Writing() {
  const published = writing.filter((entry) => entry.status === "published");
  const pending = writing.filter(
    (entry) => entry.status === "awaiting-publication",
  );

  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          id="writing"
          index="03"
          title="Writing"
          note={`${writing.length} articles`}
        />

        <div className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-[15rem_minmax(0,1fr)]">
          <p className="font-mono text-meta uppercase tracking-[0.14em] text-accent">
            On attribution
          </p>
          <p className="max-w-[62ch] border-l border-accent pl-6 text-body text-ink-soft">
            {writingDisclaimer}
          </p>
        </div>

        <WritingGroup title="Published" entries={published} />
        <WritingGroup
          title="Accepted, awaiting publication"
          entries={pending}
        />
      </div>
    </section>
  );
}
