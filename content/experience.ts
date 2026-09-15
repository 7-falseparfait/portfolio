import type { Role } from "./types";

export const roles: Role[] = [
  {
    slug: "telerik",
    org: "Telerik",
    role: "Technical Writer",
    start: "2025",
    end: "Present",
    period: "2025 — Present",
    summary: [
      "Write technical articles for a developer audience on advanced frontend subjects — authentication, state management, animation, reactive data layers and local-first sync.",
      "Each piece is built alongside a working demonstration application. The articles are published without a byline.",
    ],
  },
  {
    slug: "synclonix",
    org: "Synclonix",
    role: "Frontend Developer",
    start: "2026-01",
    end: "2026-03",
    period: "January — March 2026",
    concurrent: true,
    summary: [
      "Delivered front-end solutions for client-facing digital products in React and TypeScript, including AI-driven feature integrations.",
      "Built and maintained a reusable UI component library, improving consistency and cutting repeated development effort across projects.",
    ],
  },
  {
    slug: "dateline-partners",
    org: "Dateline Partners",
    role: "Frontend Developer · US healthcare",
    start: "2025-12",
    end: "2026-03",
    period: "December 2025 — March 2026",
    concurrent: true,
    summary: [
      "Developed and deployed a United States healthcare website connecting patients to care services and medical equipment.",
      "Designed accessible interfaces for diverse user groups, improving service discoverability and booking flows across devices.",
    ],
    link: { label: "datelinegroup.com", href: "https://datelinegroup.com" },
  },
  {
    slug: "from",
    org: "From",
    role: "Frontend Developer · ride-connection platform",
    start: "2025-12",
    end: "2026-02",
    period: "December 2025 — February 2026",
    concurrent: true,
    summary: [
      "Built responsive interfaces for a platform linking riders with customers across the state, focused on real-time interaction flows and accessibility.",
      "Iterated on features directly with the product team, reducing friction in the booking experience.",
    ],
  },
  {
    slug: "skypro",
    org: "Skypro",
    role: "Frontend Developer · ISP",
    start: "2025-05",
    end: "2025-08",
    period: "May — August 2025",
    summary: [
      "Migrated the company website from WordPress to React, improving page load speed and long-term maintainability.",
      "Implemented API integration for email capture and automated newsletter delivery, and worked through several design iterations with stakeholders.",
    ],
    link: { label: "skypro.ng", href: "https://skypro.ng" },
  },
  {
    slug: "gogas",
    org: "GoGas",
    role: "React Native Developer · Contract",
    start: "2024-06",
    end: "2025-09",
    period: "June 2024 — September 2025",
    summary: [
      "Built the full mobile UI for the GoGas MVP in React Native and TypeScript, translating Figma mockups into production screens.",
      "Delivered the UI development phase on schedule.",
    ],
  },
  {
    slug: "colab",
    org: "Colab",
    role: "Frontend Developer · Kaduna",
    start: "2024-04",
    end: "2025-01",
    period: "April 2024 — January 2025",
    summary: [
      "Developed and maintained responsive web interfaces in HTML, CSS, JavaScript and SCSS across multiple client projects.",
      "Ensured cross-browser compatibility and contributed to team code reviews.",
    ],
  },
];

export const concurrentNote =
  "The three engagements between December 2025 and March 2026 ran concurrently as contract work.";

export const credentials = [
  {
    label: "B.Tech Information Technology",
    detail: "Federal University of Technology, Minna · 2016 — 2023",
  },
  {
    label: "Frontend Web Development Certification",
    detail: "freeCodeCamp · November 2023",
  },
] as const;
