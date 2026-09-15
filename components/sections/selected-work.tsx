import { DashList } from "@/components/dash-list";
import { SectionHeading } from "@/components/section-heading";
import { projects, statusLabel } from "@/content/projects";
import type { Project } from "@/content/types";

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="grid gap-x-12 gap-y-6 border-b border-rule py-10 last:border-b-0 md:grid-cols-[15rem_minmax(0,1fr)]">
      <header>
        <h3 className="font-display text-[1.75rem] leading-tight tracking-[-0.01em] text-ink">
          {project.name}
        </h3>
        <p className="mt-2 font-mono text-meta uppercase leading-relaxed tracking-[0.1em] text-ink-soft">
          {project.role}
        </p>
        <p className="mt-3 font-mono text-meta leading-relaxed tracking-[0.06em] text-muted">
          {project.kind}
        </p>
        <p className="mt-3 font-mono text-small tnum text-muted">
          {project.period}
        </p>
        <p className="mt-4 font-mono text-meta uppercase tracking-[0.14em] text-accent">
          {statusLabel[project.status]}
        </p>
        {project.link ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-mono text-small text-ink link-quiet"
          >
            {project.link.label} ↗
          </a>
        ) : null}
      </header>

      <div className="max-w-[62ch]">
        <p className="text-body text-ink-soft">{project.summary}</p>
        <DashList items={project.contributions} className="mt-6 space-y-3" />
        {project.stack ? (
          <p className="mt-7 font-mono text-meta leading-relaxed tracking-[0.06em] text-muted">
            {project.stack.join(" · ")}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function SelectedWork() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionHeading
          id="work"
          index="01"
          title="Selected work"
          note="Client and product"
        />

        <div className="mt-2">
          {projects.map((project) => (
            <ProjectEntry key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
