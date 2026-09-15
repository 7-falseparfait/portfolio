import { facts, profile, statement, thesis } from "@/content/profile";

export function Intro() {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20">
        <p className="font-mono text-meta uppercase tracking-[0.16em] text-muted">
          {profile.role}
        </p>

        <h1 className="mt-7 font-display text-[clamp(2.75rem,1.4rem+6vw,5.75rem)] leading-[0.94] tracking-[-0.025em] text-ink">
          {profile.name}
        </h1>

        <p className="mt-6 font-mono text-small tnum tracking-[0.04em] text-muted">
          {profile.location} · {profile.timezone}
        </p>

        <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="max-w-[62ch]">
            {statement.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-lead text-ink"
                    : "mt-6 text-body text-ink-soft"
                }
              >
                {paragraph}
              </p>
            ))}

            <p className="mt-10 border-l border-accent pl-6 text-body text-ink italic">
              {thesis}
            </p>
          </div>

          <dl className="grid gap-y-6 self-start border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-meta uppercase tracking-[0.14em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-mono text-small tnum leading-relaxed text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
