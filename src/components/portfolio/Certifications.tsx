import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "./data";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications"
      title={<>Continuously <span className="text-gradient">leveling up</span>.</>}
      description="Recognized credentials that mark milestones in my AI, cloud, and engineering journey."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.div key={c.title}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="group rounded-2xl bg-card border border-border p-5 flex items-center gap-4 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
            <div className="relative shrink-0">
              <div className="size-14 rounded-2xl grid place-items-center text-white font-bold shadow-soft"
                style={{ background: `linear-gradient(135deg, ${c.color}, ${c.color}cc)` }}>
                <Award className="size-6" />
              </div>
              <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-card border border-border grid place-items-center text-[9px] font-bold text-foreground">
                ✓
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-foreground truncate">{c.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{c.issuer} · {c.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}