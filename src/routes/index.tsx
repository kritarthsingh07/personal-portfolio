import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kritarth Singh — AI & Machine Learning Engineer" },
      { name: "description", content: "Portfolio of Kritarth Singh, AI & Machine Learning Engineering student building intelligent, beautifully designed software." },
      { property: "og:title", content: "Kritarth Singh — AI & ML Engineer" },
      { property: "og:description", content: "AI & ML student, open-source contributor, and aspiring AI engineer." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
