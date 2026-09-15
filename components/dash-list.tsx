export function DashList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span
            aria-hidden
            className="mt-[0.82em] h-px w-5 shrink-0 bg-rule-strong"
          />
          <span className="text-body text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}
