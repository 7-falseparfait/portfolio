type SectionHeadingProps = {
  id?: string;
  index: string;
  title: string;
  note?: string;
};

export function SectionHeading({ id, index, title, note }: SectionHeadingProps) {
  return (
    <div
      id={id}
      className="flex scroll-mt-28 items-baseline gap-x-4 gap-y-1 border-b border-rule pb-3"
    >
      <span className="font-mono text-meta tnum tracking-[0.14em] text-accent">
        {index}
      </span>
      <h2 className="font-mono text-meta uppercase tracking-[0.16em] text-ink">
        {title}
      </h2>
      {note ? (
        <span className="ml-auto hidden font-mono text-meta tracking-[0.08em] text-muted sm:block">
          {note}
        </span>
      ) : null}
    </div>
  );
}
