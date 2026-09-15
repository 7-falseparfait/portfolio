import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "skypro",
    name: "Skypro",
    kind: "Internet service provider · Nigeria",
    role: "Frontend Developer",
    period: "May – August 2025",
    summary:
      "High-speed internet and eSIM data provider. The company site was a WordPress installation that had become slow to load and expensive to change.",
    contributions: [
      "Migrated the site from WordPress to React, improving page load speed and long-term maintainability.",
      "Integrated the API for email capture and automated newsletter delivery.",
      "Ran several design iterations with stakeholders to improve conversion.",
    ],
    stack: ["React", "REST APIs"],
    status: "live",
    link: { label: "skypro.ng", href: "https://skypro.ng" },
  },
  {
    slug: "proddly",
    name: "Proddly",
    kind: "AI ideation platform",
    role: "Code review and feature oversight",
    period: "Contract",
    summary:
      "A platform that helps founders develop a startup idea with AI and test whether it holds up before they commit to it.",
    contributions: [
      "Reviewed code across a multi-developer team, holding consistency and quality at merge time.",
      "Oversaw selected features end to end, from specification through to delivery.",
    ],
    status: "live",
    link: { label: "proddly.com", href: "https://proddly.com" },
  },
  {
    slug: "dateline",
    name: "Dateline",
    kind: "Concierge nursing · United States",
    role: "Frontend Developer",
    period: "December 2025 – March 2026",
    summary:
      "Concierge nursing and medical delivery service for patients in the United States, connecting them to care services and medical equipment.",
    contributions: [
      "Built the public-facing site and deployed it to production.",
      "Designed accessible interfaces for a wide range of users, improving service discovery and the booking flow across devices.",
    ],
    status: "live",
    link: { label: "datelinegroup.com", href: "https://datelinegroup.com" },
  },
  {
    slug: "gogas",
    name: "GoGas",
    kind: "Mobile MVP",
    role: "React Native Developer (Contract)",
    period: "June 2024 – September 2025",
    summary:
      "A consumer mobile product taken from design to a complete, build-ready interface.",
    contributions: [
      "Built the full mobile UI for the MVP in React Native and TypeScript.",
      "Translated Figma mockups into production screens with Flexbox layout.",
      "Delivered the UI development phase on schedule.",
    ],
    stack: ["React Native", "TypeScript", "Flexbox"],
    status: "in-development",
  },
];

export const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-development": "In development",
  "not-shipped": "Not shipped",
};
