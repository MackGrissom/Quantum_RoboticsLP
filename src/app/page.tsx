import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Principles } from "@/components/sections/principles";
import { Responsibility } from "@/components/sections/responsibility";
import { Projects } from "@/components/sections/projects";
import { QuantumThreat } from "@/components/sections/quantum-threat";
import { Technology } from "@/components/sections/technology";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Principles />
        <Responsibility />
        <Projects />
        <QuantumThreat />
        <Technology />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
