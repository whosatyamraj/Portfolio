import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { BentoGrid } from "@/components/sections/bento";
import { Skills } from "@/components/sections/skills";
import { GithubSection } from "@/components/sections/github";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-col w-full relative z-10">
        <Hero />
        <BentoGrid />
        <Skills />
        <GithubSection />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
