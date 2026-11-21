import { GitMerge, GitPullRequest, Star } from "lucide-react";
import { openSource, type PullRequest } from "@/lib/data";

const fmt = new Intl.NumberFormat("en-US");

export function openSourceStats() {
  const prs = openSource.flatMap((r) => r.prs);
  return {
    merged: prs.filter((p) => p.state === "merged").length,
    open: prs.filter((p) => p.state === "open").length,
    repos: openSource.length,
  };
}

/** Repositories with their pull requests, styled like a GitHub PR log. */
export function OpenSourceList({ dense = false }: { dense?: boolean }) {
  return (
    <ul className={dense ? "flex flex-col gap-8" : "flex flex-col gap-12"}>
      {openSource.map((r) => {
        const [owner, name] = r.repo.split("/");
        return (
          <li key={r.repo}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.25rem] leading-snug hover:underline underline-offset-4 decoration-1"
              >
                <span className="text-muted">{owner}/</span>
                <span className="text-heading">{name}</span>
              </a>
              <span className="inline-flex items-center gap-3 text-[0.875rem] text-muted">
                {r.stars && (
                  <span className="inline-flex items-center gap-1">
                    <Star size={13} aria-hidden /> {r.stars}
                    <span className="sr-only"> stars</span>
                  </span>
                )}
                <span>{r.language}</span>
              </span>
            </div>
            {!dense && <p className="text-muted mt-1">{r.description}</p>}

            <ul className="mt-3 rounded-xl border border-border divide-y divide-border overflow-hidden">
              {r.prs.map((pr) => (
                <PrRow key={pr.number} pr={pr} dense={dense} />
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function PrRow({ pr, dense }: { pr: PullRequest; dense: boolean }) {
  const merged = pr.state === "merged";
  const Icon = merged ? GitMerge : GitPullRequest;
  return (
    <li>
      <a
        href={pr.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-3 px-4 py-3 bg-surface/40 hover:bg-hover transition-colors"
      >
        <Icon
          size={16}
          aria-hidden
          className={`mt-[0.3rem] shrink-0 ${merged ? "text-merged" : "text-open"}`}
        />
        <div className="min-w-0 flex-1">
          <p className="text-[0.9375rem] leading-[1.6] text-heading group-hover:text-link transition-colors">
            {pr.title}
          </p>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-[0.8125rem] text-muted">
            <span className="font-mono">#{pr.number}</span>
            <span>{merged ? `Merged ${pr.date}` : `Open since ${pr.date}`}</span>
            {!dense && (
              <span className="font-mono">
                <span className="text-added">+{fmt.format(pr.additions)}</span>{" "}
                <span className="text-removed">−{fmt.format(pr.deletions)}</span>
              </span>
            )}
          </p>
        </div>
      </a>
    </li>
  );
}
