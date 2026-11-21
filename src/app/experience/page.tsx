import type { Metadata } from "next";
import { stack } from "@/lib/data";
import { PageHeader, SectionHeading } from "@/components/section-heading";
import { ExperienceList } from "@/components/experience-list";
import { AwardsList } from "@/components/awards-list";
import { TechChip } from "@/components/tech-icon";

export const metadata: Metadata = {
  title: "Experience",
  description: "Roles, awards, and tools of Mukul Katewa.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl">
      <PageHeader
        title="Experience"
        description="A founding role and an AI backend internship, both close to the infrastructure: APIs, retrieval, and inference."
      />
      <ExperienceList />

      <section id="awards" className="mt-20 scroll-mt-24">
        <SectionHeading title="Awards" />
        <AwardsList />
      </section>

      <section className="mt-20">
        <SectionHeading title="Tools" />
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <TechChip key={s.slug} icon={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
