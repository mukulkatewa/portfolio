import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Mukul Katewa, backend and AI engineer.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-[2.25rem] md:text-[2.5rem] leading-tight font-medium tracking-[-0.015em] text-heading">
            Resume
          </h1>
          <p className="mt-1 text-muted">One page: experience, projects, skills, and awards.</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumeDownloadUrl}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-heading text-background text-[0.9375rem] font-medium hover:opacity-90 transition-opacity"
          >
            <Download size={15} aria-hidden />
            Download
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border text-heading text-[0.9375rem] hover:bg-hover transition-colors"
          >
            <ExternalLink size={15} aria-hidden />
            Open
          </a>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface overflow-hidden">
        <iframe
          src={profile.resumePreviewUrl}
          title={`${profile.name} resume`}
          className="block w-full h-[80vh] min-h-[640px] bg-white"
          allow="autoplay"
        />
      </div>
      <p className="mt-3 text-[0.875rem] text-muted-2">
        Preview not loading?{" "}
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="prose-link">
          Open it in Google Drive
        </a>
        .
      </p>
    </div>
  );
}
