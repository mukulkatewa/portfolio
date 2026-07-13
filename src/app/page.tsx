import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { OpenSource } from "@/components/open-source";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <OpenSource />
      <Experience />
      <Contact />
    </main>
  );
}
