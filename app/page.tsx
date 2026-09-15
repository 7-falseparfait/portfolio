import { Experience } from "@/components/sections/experience";
import { Intro } from "@/components/sections/intro";
import { OpenSource } from "@/components/sections/open-source";
import { SelectedWork } from "@/components/sections/selected-work";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <main>
      <Intro />
      <SelectedWork />
      <OpenSource />
      <Writing />
      <Experience />
    </main>
  );
}
