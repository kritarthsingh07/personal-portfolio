import { motion } from "framer-motion";
import { Section } from "./Section";
import { about } from "./data";
import { GraduationCap, Code, Rocket, Heart } from "lucide-react";

const pillars = [
  { icon: GraduationCap, title: "Academic Journey", body: "B.E. CSE (AI & ML) — Chandigarh University." },
  { icon: Code, title: "Technical Interests", body: "ML systems, full-stack engineering, clean architecture." },
  { icon: Rocket, title: "Career Goals", body: "Become a thoughtful AI engineer building real products." },
  { icon: Heart, title: "Open Source", body: "Active contributor through SSoC and community programs." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me"
      title={<>A student-engineer building at the edge of <span className="text-gradient">AI & software</span>.</>}
    >
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div className="space-y-5 text-[15px] md:text-base text-muted-foreground leading-relaxed">
          {about.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5">
              <div className="size-10 rounded-xl bg-gradient-soft grid place-items-center mb-3 group-hover:scale-110 transition-transform">
                <p.icon className="size-5 text-primary" />
              </div>
              <div className="font-semibold text-foreground">{p.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{p.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}