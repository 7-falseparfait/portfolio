import { DashList } from "@/components/dash-list";
import { SectionHeading } from "@/components/section-heading";
import { concurrentNote, credentials, roles } from "@/content/experience";
import type { Role } from "@/content/types";

function RoleRow({ role }: { role: Role }) {
  return (
    <li className="grid gap-x-12 gap-y-3 border-b border-rule py-8 md:grid-cols-[15rem_minmax(0,1fr)]">
      <div>
        <p className="font-mono text-small tnum leading-relaxed text-muted">
          {role.period}
        </p>
        {role.concurrent ? (
          <p className="mt-2 font-mono text-meta uppercase tracking-[0.12em] text-muted">
            Concurrent
          </p>
        ) : null}
      </div>

      <div className="max-w-[62ch]">
        <h3 className="font-display text-[1.5rem] leading-tight tracking-[-0.01em] text-ink">
          {role.org}
          {role.link ? (
            <a
              href={role.link.href}
              target="_blank"
              rel="noreferrer"
              className="ml-2.5 align-baseline font-mono text-meta text-muted link-quiet"
            >
              ↗
            </a>
          ) : null}
        </h3>
        <p className="mt-2 font-mono text-meta uppercase leading-relaxed tracking-[0.1em] text-ink-soft">
          {role.role}
        </p>
        <DashList items={role.summary} className="mt-4 space-y-2.5" />
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          id="experience"
          index="04"
          title="Experience"
          note={`${roles.length} engagements`}
        />

        <ul className="mt-2 border-t border-rule">
          {roles.map((role) => (
            <RoleRow key={role.slug} role={role} />
          ))}
        </ul>

        <p className="mt-6 max-w-[62ch] font-mono text-meta leading-relaxed tracking-[0.04em] text-muted">
          {concurrentNote}
        </p>

        <div className="mt-16 border-t border-rule pt-10">
          <h3 className="font-mono text-meta uppercase tracking-[0.16em] text-muted">
            Education & certification
          </h3>
          <dl className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {credentials.map((credential) => (
              <div key={credential.label}>
                <dt className="text-body text-ink">{credential.label}</dt>
                <dd className="mt-1.5 font-mono text-meta tnum leading-relaxed tracking-[0.04em] text-muted">
                  {credential.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
