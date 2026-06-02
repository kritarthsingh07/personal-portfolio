import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { profile } from "./data";
import { Mail, Github, Linkedin, Download, Send, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">meaningful</span>.</>}
      description="Internship roles, open-source collaborations, research, or just a friendly hello — my inbox is open."
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kritarthsingh", href: profile.linkedin },
            { icon: Github, label: "GitHub", value: "github.com/kritarthsingh", href: profile.github },
            { icon: MapPin, label: "Location", value: profile.location, href: "#" },
          ].map((c, i) => (
            <motion.a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-4 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all">
              <div className="size-11 rounded-xl bg-gradient-soft grid place-items-center group-hover:scale-110 transition-transform">
                <c.icon className="size-5 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="text-sm font-medium text-foreground truncate">{c.value}</div>
              </div>
            </motion.a>
          ))}
          <a href={profile.resume} download
            className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-brand text-white p-4 font-medium shadow-elegant hover:shadow-glow transition">
            <Download className="size-4" /> Download Resume (PDF)
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-soft">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your full name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Internship opportunity, project idea…" />
          <div className="mt-4">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea id="message" required rows={5} placeholder="Tell me a bit about what you're working on…"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
          </div>
          <button type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium shadow-elegant hover:shadow-glow transition">
            {sent ? "Message sent ✓" : <>Send Message <Send className="size-4" /></>}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div className="mt-4 sm:mt-0">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition" />
    </div>
  );
}