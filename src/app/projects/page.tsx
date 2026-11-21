import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/section-heading";
import { ProjectListFull } from "@/components/project-list";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI backends, real-time systems, and full-stack products built by Mukul Katewa.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl">
      <PageHeader
        title="Projects"
        description="Voice AI, crop-risk forecasting, a trading engine, and a Solana order router. Each page covers the architecture and what I learned building it."
      />
      <ProjectListFull items={projects} />
    </div>
  );
}
