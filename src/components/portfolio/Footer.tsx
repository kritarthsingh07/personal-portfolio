import { profile } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-6 rounded-full bg-gradient-brand grid place-items-center text-white text-[10px] font-bold">K</span>
          <span>© {new Date().getFullYear()} {profile.name}. Crafted with intent.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-foreground transition">Email</a>
          <a href={profile.github} className="hover:text-foreground transition">GitHub</a>
          <a href={profile.linkedin} className="hover:text-foreground transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}