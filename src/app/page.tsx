import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import CrlDiagnostics from "@/components/sections/CrlDiagnostics";
import Philosophy from "@/components/sections/Philosophy";
import Insights from "@/components/sections/Insights";
import Recognition from "@/components/sections/Recognition";
import Speaking from "@/components/sections/Speaking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <CrlDiagnostics />
      <Philosophy />
      <Recognition />
      <Insights />
      <Speaking />
      <Contact />
    </>
  );
}
