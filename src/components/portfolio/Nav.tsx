import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { profile } from "./data";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-brand origin-left z-[60]"
      />
      <header className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[min(1100px,calc(100%-1.5rem))] ${scrolled ? "scale-[0.99]" : ""}`}>
        <div className="glass rounded-full px-3 sm:px-5 py-2.5 flex items-center justify-between shadow-soft">
          <a href="#hero" className="flex items-center gap-2 font-display font-bold text-foreground">
            <span className="size-7 rounded-full bg-gradient-brand grid place-items-center text-white text-xs">K</span>
            <span className="hidden sm:inline">Kritarth</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`}
                 className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-muted">
                {l.label}
              </a>
            ))}
          </nav>
          <a href={profile.resume} download
             className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3.5 py-1.5 text-xs sm:text-sm font-medium hover:opacity-90 transition">
            <Download className="size-3.5" /> Resume
          </a>
        </div>
      </header>
    </>
  );
}