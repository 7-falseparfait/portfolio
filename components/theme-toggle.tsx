"use client";

import { useCallback } from "react";

/*
  The theme lives on <html data-theme> and is applied by an inline script in
  the root layout before first paint. This control only flips that attribute
  and persists the choice — there is no React state to keep in sync, so there
  is nothing to hydrate and nothing to flash.
*/
export function ThemeToggle() {
  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable — the theme still applies for this session.
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="flex items-baseline gap-2 font-mono text-meta uppercase tracking-[0.14em] text-muted link-plain hover:text-ink"
    >
      <span
        aria-hidden
        className="inline-block size-[5px] translate-y-[-2px] border border-rule-strong dark:border-accent dark:bg-accent"
      />
      <span className="tnum">
        <span className="dark:hidden">Light</span>
        <span className="hidden dark:inline">Dark</span>
      </span>
    </button>
  );
}
