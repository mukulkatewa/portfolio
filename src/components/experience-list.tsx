import { education, experience } from "@/lib/data";
import { Monogram } from "./monogram";

/** Timeline of roles with bullets, followed by education. */
export function ExperienceList({ showEducation = true }: { showEducation?: boolean }) {
  return (
    <ol className="flex flex-col">
      {experience.map((job) => (
        <li key={job.company} className="relative flex gap-4 pb-9">
          <Rail />
          <Monogram name={job.company} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
              <h3 className="text-[1.25rem] leading-snug text-heading">
                {job.company} <span className="text-muted">{job.role}</span>
              </h3>
              <span className="text-[0.9375rem] text-muted shrink-0">{job.period}</span>
            </div>
            <p className="text-muted mt-1">{job.summary}</p>
            <ul className="mt-2.5 space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9375rem] leading-[1.7] text-foreground/90">
                  <span aria-hidden className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}

      {showEducation && (
        <li className="relative flex gap-4">
          <Monogram name={education.school} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
              <h3 className="text-[1.25rem] leading-snug text-heading">
                {education.school} <span className="text-muted">{education.degree}</span>
              </h3>
              <span className="text-[0.9375rem] text-muted shrink-0">{education.period}</span>
            </div>
          </div>
        </li>
      )}
    </ol>
  );
}

/** Thin vertical line joining one entry's icon to the next. */
function Rail() {
  return <span aria-hidden className="absolute left-[13px] top-9 bottom-1 w-px bg-border" />;
}
