import type { WritingEntry } from "./types";

export const writingDisclaimer =
  "Most of this work is ghostwritten. The articles were written for a client developer blog and published without my byline, so they are not linked here and are not presented as personal publications. What is mine is the demonstration application built alongside each piece — those repositories are public, and the full articles are available on request.";

export const writing: WritingEntry[] = [
  {
    slug: "effector",
    subject: "Effector",
    headline: "State management with Effector",
    status: "published",
    publishedAt: "July 2026",
    summary:
      "A working application built around Effector's unit model — stores, events and effects — showing how reactive state is composed without a provider tree or a hook-based store.",
    concepts: [
      "Stores, events and effects",
      "Derived state",
      "effector-react bindings",
      "Composition over context",
    ],
    stack: ["Effector", "effector-react", "React", "TypeScript"],
    repository: {
      label: "effector-state-mgmt",
      href: "https://github.com/7-falseparfait/effector-state-mgmt",
    },
  },
  {
    slug: "better-auth",
    subject: "Better Auth",
    headline: "Email and password authentication with session management",
    status: "published",
    publishedAt: "April 2026",
    summary:
      "A complete signup, login and session-management flow demonstrating how Better Auth is wired into a real application — schema, adapters, protected routes, and the server-side boundaries that keep credentials off the client.",
    concepts: [
      "Session management",
      "Server-side auth boundaries",
      "Schema and adapter configuration",
      "Route protection",
    ],
    stack: [
      "Better Auth",
      "Drizzle ORM",
      "better-sqlite3",
      "Next.js",
      "TypeScript",
    ],
    repository: {
      label: "simp-auth",
      href: "https://github.com/7-falseparfait/simp-auth",
    },
  },
  {
    slug: "tanstack-db",
    subject: "TanStack DB",
    headline: "A reactive data layer for modern web applications",
    status: "published",
    publishedAt: "March 2026",
    summary:
      "An application built on TanStack DB showing how a reactive collection layer sits between the server and the UI, and how it interoperates with TanStack Query.",
    concepts: [
      "Reactive collections",
      "Derived and live queries",
      "TanStack Query integration",
      "Client-side data normalisation",
    ],
    stack: ["TanStack DB", "TanStack Query", "React", "TypeScript"],
    repository: {
      label: "tansTack-DB",
      href: "https://github.com/7-falseparfait/tansTack-DB",
    },
  },
  {
    slug: "web-animation-api",
    subject: "Web Animation API",
    headline: "Animation without a library",
    status: "published",
    publishedAt: "October 2025",
    summary:
      "A dependency-free demonstration of the Web Animation API — keyframes, timing, playback control and compositing driven directly from JavaScript, with no framework and no build step.",
    concepts: [
      "Keyframe and timing models",
      "Playback control",
      "Compositing and performance",
      "Beyond CSS-transition-only animation",
    ],
    stack: ["Web Animation API", "JavaScript", "CSS"],
    repository: {
      label: "Web-Animation-API-",
      href: "https://github.com/7-falseparfait/Web-Animation-API-",
    },
  },
  {
    slug: "replicache",
    subject: "Replicache",
    headline: "Local-first collaborative editing",
    status: "awaiting-publication",
    summary:
      "A real-time collaborative notes app where multiple users create, edit, react to and delete notes across separate browsers. Replicache owns the client-side mutation and sync model; an Express server persists to SQLite and notifies clients over Server-Sent Events.",
    concepts: [
      "Local-first architecture",
      "Mutators, push and pull",
      "Conflict resolution",
      "SSE-based poke",
      "Optimistic UI",
    ],
    stack: [
      "Replicache",
      "React 19",
      "Vite",
      "Express",
      "better-sqlite3",
      "TypeScript",
    ],
    repository: {
      label: "replicache-notes",
      href: "https://github.com/7-falseparfait/replicache-notes",
    },
  },
  {
    slug: "tanstack-start-rsc",
    subject: "TanStack Start",
    headline: "Server components, server functions and client composition",
    status: "awaiting-publication",
    summary:
      "A blog reader that keeps heavy dependencies on the server: markdown parsing runs in a server component and never ships to the browser, while interactive pieces are passed into server components as client slots.",
    concepts: [
      "React Server Components",
      "createServerFn",
      "Composite server and client components",
      "Type-safe dynamic routes",
    ],
    stack: [
      "TanStack Start",
      "TanStack Router",
      "marked",
      "Vite",
      "TypeScript",
    ],
    repository: {
      label: "TanStack-RSC",
      href: "https://github.com/7-falseparfait/TanStack-RSC",
    },
  },
  {
    slug: "tanstack-start-server-functions",
    subject: "TanStack Start",
    headline: "Loaders, mutations and streaming without API routes",
    status: "awaiting-publication",
    summary:
      "A bookmark manager demonstrating server functions called directly from the client, route loaders that fetch before render, mutations without hand-written endpoints, and progressive streaming with Await.",
    concepts: [
      "createServerFn",
      "Route loaders",
      "Mutations",
      "Streaming with Await",
    ],
    stack: [
      "TanStack Start",
      "TanStack Router",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
    ],
    repository: {
      label: "tanstack-bookmarks",
      href: "https://github.com/7-falseparfait/tanstack-bookmarks",
    },
  },
  {
    slug: "conform",
    subject: "Conform + Zod",
    headline: "Progressive-enhancement forms with server-first validation",
    status: "awaiting-publication",
    summary:
      "A multi-step onboarding form built with Next.js Server Actions, Conform and Zod. It works without JavaScript through standard form behaviour, and one Zod schema is shared between client and server so validation is never written twice.",
    concepts: [
      "Progressive enhancement",
      "Server Actions",
      "Shared Zod schemas",
      "Multi-step state in cookies",
    ],
    stack: [
      "Next.js",
      "Conform",
      "Zod",
      "Server Actions",
      "Tailwind CSS",
      "TypeScript",
    ],
    repository: {
      label: "conform",
      href: "https://github.com/7-falseparfait/conform",
    },
  },
  {
    slug: "content-layer",
    subject: "Content Layer",
    headline: "Type-safe content pipelines",
    status: "awaiting-publication",
    summary:
      "A Next.js publication that uses Content Layer to turn Markdown into typed, build-time data, with syntax-highlighted code blocks rendered during the build rather than in the browser.",
    concepts: [
      "Build-time content pipelines",
      "Typed content collections",
      "MDX",
      "Server-rendered syntax highlighting",
    ],
    stack: [
      "Content Layer",
      "Next.js",
      "Shiki",
      "Tailwind CSS",
      "TypeScript",
    ],
    repository: {
      label: "conntentlayer",
      href: "https://github.com/7-falseparfait/conntentlayer",
    },
  },
];

export const writingStatus: Record<WritingEntry["status"], string> = {
  published: "Published",
  "awaiting-publication": "Awaiting publication",
};
