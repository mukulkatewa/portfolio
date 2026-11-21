import type { Metadata } from "next";
import { PageHeader } from "@/components/section-heading";
import { OpenSourceList, openSourceStats } from "@/components/open-source-list";

export const metadata: Metadata = {
  title: "Open source",
  description: "Pull requests Mukul Katewa has landed in other people's projects.",
};

export default function OpenSourcePage() {
  const { merged, open, repos } = openSourceStats();
  return (
    <div className="max-w-3xl">
      <PageHeader
        title="Open source"
        description={`${merged} merged pull requests${open ? ` and ${open} in review` : ""} across ${repos} repositories, including a fix to the cleanup path of a 15K-star agent orchestration platform.`}
      />
      <OpenSourceList />
    </div>
  );
}
