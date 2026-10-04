import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";

import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Stats } from "@/components/sections/Stats";
import { Guarantee } from "@/components/sections/Guarantee";
import { Plan } from "@/components/sections/Plan";
import { Faq } from "@/components/sections/Faq";
import { LeadForm } from "@/components/sections/LeadForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <Stats />
        <Guarantee />
        <Plan />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
