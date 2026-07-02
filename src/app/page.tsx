import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
