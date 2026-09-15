import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";

import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — Frontend Developer & Technical Writer`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Frontend developer working in React and TypeScript, with Rust contributions to Bitcoin open source — Ride The Lightning, Frostsnap and Floresta. Technical writer for developer audiences. Based in Kaduna, Nigeria.",
};

/* Runs before the body parses so the theme is applied with no flash. */
const themeInit = `(function(){var t=null;try{t=localStorage.getItem("theme");}catch(e){}
if(t!=="dark"&&t!=="light"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}
document.documentElement.setAttribute("data-theme",t);})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plexMono.variable}`}
    >
      <body className="min-h-dvh antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
