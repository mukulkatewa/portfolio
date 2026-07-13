import { Nav } from "@/components/nav";
import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { OpenSource } from "@/components/open-source";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="max-w-6xl mx-auto px-5 md:px-10 md:grid md:grid-cols-[240px_1fr] md:gap-16 lg:gap-24">
        <Sidebar />
        <div className="pt-20 md:pt-14">
          <About />
          <Experience />
          <Work />
          <OpenSource />
          <Contact />
        </div>
      </div>
    </main>
  );
}
