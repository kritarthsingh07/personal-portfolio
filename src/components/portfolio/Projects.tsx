import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { projects } from "./data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects"
      title={<>Things I've shipped, <span className="text-gradient">end-to-end</span>.</>}
      description="A selection of recent work spanning full-stack engineering, ML research, and systems design."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article key={p.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="group relative rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all">
            <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <motion.div
                  animate={{ rotate: [0, 6, -6, 0] }} transition={{ duration: 8, repeat: Infinity }}
                  className="glass rounded-2xl px-4 py-3 text-foreground font-display font-semibold text-lg shadow-glow">
                  {p.title.split(" ").slice(0, 2).join(" ")}
                </motion.div>
              </div>
              <div className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
                Project · 0{i + 1}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Sparkles className="size-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <a href={p.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-3.5 py-1.5 text-xs font-medium hover:opacity-90 transition">
                  <Github className="size-3.5" /> GitHub
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition">
                  <ExternalLink className="size-3.5" /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}