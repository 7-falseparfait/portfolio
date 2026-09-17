"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = { label: string; href: string };

export function MobileNav({
  items,
  email,
}: {
  items: NavItem[];
  email: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="flex h-6 w-6 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={`h-px w-5 bg-ink transition-transform duration-150 ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-5 bg-ink transition-transform duration-150 ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>

      {open ? (
        <nav className="absolute inset-x-0 top-full border-b border-rule bg-paper px-6 py-5">
          <ul className="space-y-3.5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-small uppercase tracking-[0.14em] text-ink link-plain"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${email}`}
                onClick={() => setOpen(false)}
                className="font-mono text-small uppercase tracking-[0.14em] text-accent link-plain"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
