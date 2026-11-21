import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between gap-2 text-[0.875rem] text-muted-2">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
