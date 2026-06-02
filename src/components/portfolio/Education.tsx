import { motion } from "framer-motion";
import { Section } from "./Section";
import { education } from "./data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" eyebrow="Education"
      title={<>The <span className="text-gradient">academic path</span> so far.</>}
    >
      <div className="relative pl-6 md:pl-10 border-l-2 border-dashed border-border">
        {education.map((e, i) => (
          <motion.div key={e.degree}
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="relative pb-10 last:pb-0">
            <div className="absolute -left-[34px] md:-left-[46px] top-1.5 size-10 rounded-2xl bg-gradient-brand grid place-items-center shadow-elegant">
              <GraduationCap className="size-5 text-white" />
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{e.degree}</h3>
                  <div className="text-sm text-muted-foreground mt-0.5">{e.school}</div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-gradient-soft text-foreground font-medium">{e.period}</span>
                  <span className="text-xs text-muted-foreground mt-2">{e.score}</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.courses.map((c) => (
                  <span key={c} className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{c}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}