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
      <PageHeader title="Projects" />
      <ProjectListFull items={projects} />
    </div>
  );
}
