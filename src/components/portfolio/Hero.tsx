import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Sparkles, MapPin } from "lucide-react";
import profileImg from "@/assets/kritarth-profile.jpg";
import { profile } from "./data";

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % profile.roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] opacity-60" />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 size-[480px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, #2563EB33, transparent 60%)" }}
      />
      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-24 size-[520px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, #7C3AED33, transparent 60%)" }}
      />
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 size-[280px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #06B6D444, transparent 60%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="size-3.5 text-primary" />
              Available for internships & open-source collaborations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
              <br />
              I build with <span className="text-gradient">intelligence.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="mt-6 flex items-center gap-2 text-lg text-muted-foreground">
              <span>I'm a</span>
              <span className="relative inline-flex h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={idx}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-semibold text-foreground bg-gradient-soft px-2 rounded-md">
                    {profile.roles[idx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              AI & Machine Learning Engineering student at Chandigarh University, crafting thoughtful software at the intersection of research, design, and open source.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium shadow-elegant hover:shadow-glow transition-all">
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium text-foreground hover:bg-white transition-all shadow-soft">
                <Download className="size-4" /> Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground hover:bg-muted transition-all">
                <Mail className="size-4" /> Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><MapPin className="size-3.5" /> {profile.location}</div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[color:var(--success)] animate-pulse" />
                Open to opportunities
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 bg-gradient-brand rounded-[2rem] blur-2xl opacity-25" />
            <div className="relative glass rounded-[2rem] p-3 shadow-elegant">
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] bg-gradient-soft">
                <img src={profileImg} alt="Kritarth Singh portrait" className="w-full h-full object-cover" />
                <div className="absolute inset-x-3 bottom-3 glass rounded-2xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Currently</div>
                    <div className="text-sm font-semibold text-foreground">B.E. CSE — AI & ML</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">CGPA</div>
                    <div className="text-sm font-semibold text-gradient">7.9</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 shadow-soft text-xs font-semibold">
              🧠 ML in progress
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 shadow-soft text-xs font-semibold">
              ⚡ Open source
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}