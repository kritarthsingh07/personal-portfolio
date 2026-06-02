import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "./data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills"
      title={<>A toolkit tuned for <span className="text-gradient">modern AI products</span>.</>}
      description="Languages, frameworks, and platforms I reach for when turning ideas into intelligent software."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, gi) => (
          <motion.div key={group.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: gi * 0.05 }}
            className="group relative rounded-2xl bg-card border border-border p-6 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all overflow-hidden">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl bg-gradient-soft grid place-items-center">
                <group.icon className="size-5 text-primary" />
              </div>
              <div className="font-display font-semibold text-foreground">{group.title}</div>
            </div>
            <ul className="space-y-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{item.name}</span>
                    <span className="text-muted-foreground tabular-nums">{item.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-brand rounded-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}