import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string; eyebrow: string; title: ReactNode; description?: string; children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: Props) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
            <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {description && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}