import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Open source", href: "#open-source" },
  { label: "Writing", href: "#writing" },
  { label: "Experience", href: "#experience" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex max-w-6xl items-baseline gap-x-8 gap-y-2 px-6 py-4 lg:px-10">
        <a
          href="#top"
          className="font-mono text-meta uppercase tracking-[0.16em] text-ink link-plain"
        >
          {profile.name}
        </a>

        <nav className="ml-auto hidden items-baseline gap-x-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-meta uppercase tracking-[0.14em] text-muted link-plain hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto md:ml-0">
          <ThemeToggle />
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-meta uppercase tracking-[0.14em] text-accent link-plain"
        >
          Email
        </a>
      </div>
    </header>
  );
}
