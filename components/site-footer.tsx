import { links, profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="font-mono text-meta uppercase tracking-[0.16em] text-muted">
          Contact
        </p>

        <p className="mt-8 max-w-[46ch] font-display text-[clamp(1.75rem,1.2rem+2vw,2.75rem)] leading-[1.15] tracking-[-0.015em]">
          Available for frontend contract work and Bitcoin open-source
          contributions.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block border-b border-rule-strong pb-1 font-display text-[clamp(1.25rem,1rem+1vw,1.75rem)] text-accent link-plain hover:border-accent"
        >
          {profile.email}
        </a>

        <dl className="mt-16 grid gap-x-10 gap-y-6 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="font-mono text-meta uppercase tracking-[0.14em] text-muted">
              Telephone
            </dt>
            <dd className="mt-2">
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="link-quiet tnum">
                {profile.phone}
              </a>
            </dd>
          </div>

          <div>
            <dt className="font-mono text-meta uppercase tracking-[0.14em] text-muted">
              Based in
            </dt>
            <dd className="mt-2 text-ink-soft">
              {profile.location} · {profile.timezone}
            </dd>
          </div>

          <div>
            <dt className="font-mono text-meta uppercase tracking-[0.14em] text-muted">
              Elsewhere
            </dt>
            <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {links
                .filter((link) => link.label !== "Email")
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-quiet text-ink-soft"
                  >
                    {link.label}
                  </a>
                ))}
            </dd>
          </div>

          <div>
            <dt className="font-mono text-meta uppercase tracking-[0.14em] text-muted">
              References
            </dt>
            <dd className="mt-2 text-ink-soft">
              Client and maintainer references on request.
            </dd>
          </div>
        </dl>
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-6 gap-y-2 px-6 py-6 font-mono text-meta tracking-[0.06em] text-muted lg:px-10">
          <span className="tnum">© 2026 {profile.name}</span>
          <span className="ml-auto">
            Set in Newsreader and IBM Plex Mono · Built with Next.js and
            Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
