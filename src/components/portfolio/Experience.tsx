import { motion } from "framer-motion";
import { Section } from "./Section";
import { experience } from "./data";
import { GitBranch } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & Open Source"
      title={<>Real-world work, <span className="text-gradient">community-first</span>.</>}
      description="Internships, open-source programs, and technical activities I've contributed to."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {experience.map((e, i) => (
          <motion.div key={e.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="group rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
            <div className="flex items-start gap-4">
              <div className="size-11 rounded-xl bg-gradient-soft grid place-items-center shrink-0">
                <GitBranch className="size-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-semibold text-foreground">{e.title}</h3>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{e.period}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{e.org}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}