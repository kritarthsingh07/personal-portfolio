import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { achievements } from "./data";

function Counter({ to, suffix }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1500, bounce: 0 });
  const rounded = useTransform(spring, (v) => `${Math.round(v)}${suffix ?? ""}`);
  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Achievements() {
  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-brand p-8 md:p-14 shadow-elegant">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-20 -right-10 size-72 rounded-full bg-white/20 blur-3xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((a, i) => (
              <motion.div key={a.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center">
                <div className="font-display text-5xl md:text-6xl font-bold text-white tracking-tight">
                  <Counter to={a.value} suffix={a.suffix} />
                </div>
                <div className="mt-2 text-sm md:text-base text-white/80">{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}