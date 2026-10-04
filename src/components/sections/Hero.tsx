"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { siteContent, whatsappUrl } from "@/lib/content";
import { HeroLossWinCard } from "./HeroLossWinCard";

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    let mm = gsap.matchMedia(container);

    mm.add("(min-width: 768px)", () => {
      // Desktop Full Animations
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.1
      });

      // Background breathing Orbs
      gsap.to(".bg-orb-1", { x: "10%", y: "10%", scale: 1.1, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".bg-orb-2", { x: "-10%", y: "-10%", scale: 1.2, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });

      // Tech Grid glowing dots data flow
      gsap.utils.toArray(".grid-dot").forEach((dot: any, i) => {
        gsap.to(dot, {
          y: "random(-150, 150)",
          x: "random(-150, 150)",
          opacity: "random(0.3, 0.8)",
          scale: "random(0.8, 1.5)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile Simplified Animations for 60fps Performance
      gsap.from(".hero-anim", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1
      });
      // Minimal background movement
      gsap.to(".bg-orb-1", { scale: 1.05, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });

    return () => mm.revert(); // cleanup
  }, { scope: container });

  return (
    <section 
      id="hero"
      ref={container}
      className="relative w-full min-h-[100svh] flex flex-col justify-center pt-[calc(6rem+env(safe-area-inset-top))] pb-[calc(2rem+env(safe-area-inset-bottom))] overflow-hidden"
    >
      {/* Cyber-Tech Grid Background */}
      <div className="absolute inset-0 z-[-20] pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,white_30%,transparent_100%)]">
        {/* Dynamic Grid: Density scales per viewport (bg-[size]) */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#FF5A1F1A_1px,transparent_1px),linear-gradient(to_bottom,#FF5A1F1A_1px,transparent_1px)] bg-[size:64px_64px] md:bg-[size:48px_48px] opacity-20 dark:opacity-30" />
        
        {/* Glowing Data Nodes (Animated via GSAP on Desktop) */}
        <div className="grid-dot hidden md:block absolute w-1.5 h-1.5 bg-brand-bright rounded-full shadow-[0_0_12px_var(--color-brand-bright)] top-1/4 left-1/4 opacity-0" />
        <div className="grid-dot hidden md:block absolute w-1.5 h-1.5 bg-brand-primary rounded-full shadow-[0_0_12px_var(--color-brand-primary)] top-1/2 left-2/3 opacity-0" />
        <div className="grid-dot hidden md:block absolute w-1.5 h-1.5 bg-[#111111] dark:bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)] top-3/4 left-1/3 opacity-0" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-b from-brand-glow/20 to-transparent -z-10 pointer-events-none" />
      <div className="bg-orb-1 absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-primary/10 blur-[100px] rounded-full -z-10 mix-blend-screen dark:mix-blend-color-dodge pointer-events-none" />
      <div className="bg-orb-2 absolute top-1/2 -left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-brand-bright/10 blur-[80px] rounded-full -z-10 mix-blend-screen dark:mix-blend-color-dodge pointer-events-none" />

      {/* Grid Container: Single column on mobile, Two columns on desktop. */}
      <div className="container mx-auto px-4 md:px-8 flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-6 md:gap-x-12 max-w-6xl content-center mt-[-20px] md:mt-0">
        
        {/* 1. Headlines (Mobile: Row 1, Desktop: Row 1, Col 1) */}
        <div className="flex flex-col gap-4 text-center md:text-right items-center md:items-start z-10 w-full mt-4 md:mt-0">
          <h1 className="hero-anim text-fluid-h1 leading-tight tracking-tight text-foreground text-balance max-w-2xl">
            آلاف المرضى يبحثون عن عيادة أسنان الآن..<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-primary via-brand-bright to-brand-primary">
              لماذا يحجزون عند منافسك؟
            </span>
          </h1>
          <p className="hero-anim text-fluid-body text-muted max-w-xl text-balance leading-relaxed font-medium">
            {siteContent.hero.subtitle}
          </p>
        </div>

        {/* 2. Visual Content (Mobile: Row 2, Desktop: Row 1-3, Col 2) */}
        <div className="hero-anim w-full md:row-span-3 flex items-center justify-center relative mt-2 md:mt-0 z-20">
          {/* Floating chips (Hidden on mobile) */}
          <div className="hidden md:block absolute top-4 -right-8 px-3 py-1.5 bg-surface/80 backdrop-blur-md rounded-lg border border-border shadow-lg text-[10px] md:text-xs font-bold text-foreground animate-bounce-slow z-40 pointer-events-none">
            حجز 24/7
          </div>
          <div className="hidden md:block absolute bottom-12 -left-8 px-3 py-1.5 bg-surface/80 backdrop-blur-md rounded-lg border border-border shadow-lg text-[10px] md:text-xs font-bold text-foreground animate-bounce-slow delay-500 z-40 pointer-events-none">
            ظهور في ChatGPT
          </div>

          <HeroLossWinCard />
        </div>

        {/* 3. CTAs (Mobile: Row 3, Desktop: Row 2, Col 1) */}
        <div className="hero-anim flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 z-10 w-full">
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 min-h-[56px] rounded-full bg-gradient-to-r from-brand-primary to-brand-bright text-white font-bold text-lg text-center flex items-center justify-center gap-2 hover:shadow-[0_0_30px_var(--color-brand-glow)] hover:scale-[1.02] active:scale-[0.98] transition-all touch-manipulation"
          >
            {siteContent.hero.ctaPrimary}
            <ArrowLeft className="w-5 h-5 rtl:-scale-x-100" />
          </Link>
          <Link 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 min-h-[56px] rounded-full bg-surface/50 border border-border/80 backdrop-blur-sm text-foreground font-bold text-lg text-center hover:bg-surface hover:border-brand-primary/50 transition-all touch-manipulation"
          >
            {siteContent.hero.ctaSecondary}
          </Link>
        </div>

        {/* 4. Badges (Mobile: Row 4, Desktop: Row 3, Col 1) */}
        <div className="hero-anim flex items-center justify-center md:justify-start gap-4 opacity-80 z-10 w-full mb-8 md:mb-0 pointer-events-none">
           <span className="text-[11px] md:text-xs font-bold px-3 py-1.5 bg-brand-primary/10 rounded-full border border-brand-primary/30 text-brand-primary shadow-[0_0_15px_rgba(255,90,31,0.15)] flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
             #1 في جوجل
           </span>
           <span className="text-[11px] md:text-xs font-bold px-3 py-1.5 bg-brand-bright/10 rounded-full border border-brand-bright/30 text-brand-bright shadow-[0_0_15px_rgba(255,140,0,0.15)] flex items-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-bright animate-pulse" />
             ظهور في ChatGPT
           </span>
        </div>

      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hero-anim max-md:hidden pointer-events-none">
        <span className="text-[10px] font-medium tracking-widest uppercase">مرر لأسفل</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
}
