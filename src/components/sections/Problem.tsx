"use client";

import { useRef, useState } from "react";
import { siteContent } from "@/lib/content";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Search, Cpu, Users, AlertTriangle, TrendingDown } from "lucide-react";

// --- Mockup Components ---

const GoogleSearchMockup = () => (
  <div className="w-full h-full bg-background rounded-2xl flex flex-col p-4 border border-border/50 shadow-sm relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
    {/* Search Bar */}
    <div className="w-full h-8 bg-surface rounded-full border border-border/80 flex items-center px-3 gap-2 mb-4">
      <Search className="w-3 h-3 text-brand-primary" />
      <div className="w-1/2 h-2 bg-foreground/20 rounded-full" />
    </div>
    
    {/* Competitor Result (#1) */}
    <div className="flex flex-col gap-1.5 mb-4 p-2 bg-surface/80 rounded-lg border border-border/50 relative shadow-sm">
      <div className="absolute left-2 top-2 bg-brand-primary/10 text-brand-primary text-[8px] font-bold px-1.5 py-0.5 rounded">#1</div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-brand-primary/20" />
        <div className="w-1/3 h-2 bg-brand-primary/80 rounded" />
      </div>
      <div className="w-3/4 h-1.5 bg-muted/30 rounded mt-1" />
      <div className="w-1/2 h-1.5 bg-muted/30 rounded" />
    </div>
    
    {/* User Result (Not Found / Greyed out) */}
    <div className="flex flex-col gap-1.5 p-2 opacity-40 blur-[0.5px]">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-muted/20" />
        <div className="w-1/3 h-2 bg-muted/50 rounded" />
      </div>
      <div className="w-2/3 h-1.5 bg-muted/20 rounded mt-1" />
    </div>
  </div>
);

const AIChatMockup = () => (
  <div className="w-full h-full bg-background rounded-2xl flex flex-col p-4 border border-border/50 shadow-sm relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
    {/* User Query */}
    <div className="self-end bg-surface border border-border/50 rounded-2xl rounded-tr-sm p-2 mb-3 max-w-[80%] flex items-start gap-2 shadow-sm">
      <div className="flex-1 flex flex-col gap-1 mt-1">
        <div className="w-20 h-2 bg-foreground/60 rounded" />
        <div className="w-12 h-2 bg-foreground/60 rounded" />
      </div>
      <div className="w-5 h-5 rounded-full bg-brand-primary/20 flex shrink-0 items-center justify-center">
        <Users className="w-3 h-3 text-brand-primary" />
      </div>
    </div>
    
    {/* AI Response */}
    <div className="self-start bg-[#111111] dark:bg-surface border border-border/50 rounded-2xl rounded-tl-sm p-2.5 max-w-[85%] flex items-start gap-2 shadow-md">
      <div className="w-5 h-5 rounded-full bg-brand-bright flex shrink-0 items-center justify-center">
        <Cpu className="w-3 h-3 text-white" />
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-0.5">
        <div className="w-24 h-2 bg-white/60 dark:bg-foreground/60 rounded" />
        
        {/* Recommended Clinic 1 */}
        <div className="w-full bg-white/10 dark:bg-muted/10 rounded p-1.5 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-brand-bright" />
          <div className="w-16 h-1.5 bg-white/40 dark:bg-muted/40 rounded" />
        </div>
        
        {/* Recommended Clinic 2 */}
        <div className="w-full bg-white/10 dark:bg-muted/10 rounded p-1.5 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-muted/40" />
          <div className="w-12 h-1.5 bg-white/40 dark:bg-muted/40 rounded" />
        </div>
      </div>
    </div>
  </div>
);

const DashboardMockup = () => (
  <div className="w-full h-full bg-background rounded-2xl flex flex-col p-4 border border-border/50 shadow-sm relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
    {/* Top Header */}
    <div className="flex justify-between items-center mb-4 relative z-20">
      <div className="flex flex-col gap-1">
        <div className="w-16 h-2 bg-muted/50 rounded" />
        <div className="text-xl font-black text-foreground tabular-nums leading-none">2,140</div>
      </div>
      <div className="bg-alert-red/10 border border-alert-red/20 text-alert-red text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
        <TrendingDown className="w-3 h-3" />
        -42%
      </div>
    </div>
    
    {/* Graph Area */}
    <div className="flex-1 relative border-b-2 border-l-2 border-border/30 mt-2 flex items-end">
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-10">
        <div className="w-full h-px bg-foreground" />
        <div className="w-full h-px bg-foreground" />
        <div className="w-full h-px bg-foreground" />
      </div>
      
      {/* Downward SVG Line */}
      <svg className="w-full h-[85%] drop-shadow-[0_4px_8px_rgba(239,68,68,0.2)] z-10" preserveAspectRatio="none" viewBox="0 0 100 50">
        <path d="M0 10 Q 20 5, 40 25 T 70 35 T 100 45" fill="none" stroke="currentColor" className="text-alert-red" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M0 10 Q 20 5, 40 25 T 70 35 T 100 45 L 100 50 L 0 50 Z" fill="url(#red-gradient)" />
        <defs>
          <linearGradient id="red-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(239,68,68,0.3)" />
            <stop offset="100%" stopColor="rgba(239,68,68,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

// --- Main Component ---

export function Problem() {
  const container = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(".problem-card", 
      { y: 40, opacity: 0, scale: 0.98 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }
    );
    
    gsap.fromTo(".problem-headline", 
      { y: 20, opacity: 0 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  }, { scope: container });

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    const clientWidth = scrollContainerRef.current.clientWidth;
    const containerCenter = scrollContainerRef.current.getBoundingClientRect().left + clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i] as HTMLElement;
      const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    setActiveIndex(closestIndex);
  };

  const Mockups = [GoogleSearchMockup, AIChatMockup, DashboardMockup];
  const icons = [Search, Cpu, Users];

  return (
    <section 
      id="problem" 
      ref={container} 
      className="py-16 md:py-24 overflow-hidden relative bg-[#FDFBF7] dark:bg-[#111111] transition-colors duration-500"
    >
      {/* Cyber-Tech Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#FF5A1F1A_1px,transparent_1px),linear-gradient(to_bottom,#FF5A1F1A_1px,transparent_1px)] bg-[size:64px_64px] md:bg-[size:48px_48px] opacity-20 dark:opacity-30" />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        <div className="text-center mb-10 md:mb-16 problem-headline">
          <h2 className="text-3xl md:text-5xl font-black text-foreground max-w-3xl mx-auto leading-tight text-balance px-2">
            دكتور.. المهارة الطبية وحدها <br className="hidden sm:block" />
            <span className="inline-block relative px-3 md:px-4 py-1 md:py-1.5 bg-alert-red/10 border border-alert-red/20 rounded-xl md:rounded-2xl mt-2 sm:mt-0 text-alert-red shadow-[0_0_20px_rgba(239,68,68,0.1)] text-2xl md:text-5xl">
              لا تكفي لجلب المرضى اليوم
            </span>
          </h2>
        </div>

        {/* Mobile: Swipe Carousel, Desktop: Bento Grid */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-3 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          {siteContent.problems.map((problem, i) => {
            const Icon = icons[i];
            const Mockup = Mockups[i];
            
            return (
              <div 
                key={i}
                className="problem-card relative min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-surface/80 dark:bg-surface/30 backdrop-blur-md border border-border/60 p-6 md:p-8 rounded-[32px] flex flex-col gap-6 shadow-sm hover:shadow-xl hover:border-alert-red/30 transition-all duration-300 group overflow-hidden"
              >
                {/* Subtle Alert Accent Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-alert-red/10 to-transparent rounded-tr-[32px] -z-10" />
                
                {/* Header with Icon and Alert Badge */}
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-border shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:border-alert-red/20 transition-all duration-500">
                    <Icon className="w-6 h-6 text-foreground group-hover:text-alert-red transition-colors" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-alert-red/5 border border-alert-red/10">
                    <AlertTriangle className="w-3 h-3 text-alert-red" />
                    <span className="text-[10px] font-bold text-alert-red">خطر فقدان المرضى</span>
                  </div>
                </div>

                {/* UI Mockup Replacement for Images */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative border border-border/50 shadow-inner group-hover:shadow-alert-red/10 transition-shadow">
                  <Mockup />
                </div>

                <div className="flex-1 mt-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-fluid-body text-muted leading-relaxed">{problem.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe Carousel Dot Indicators (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-2 mt-4 items-center">
          {siteContent.problems.map((_, i) => (
            <button 
              key={i} 
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 h-2 bg-alert-red' : 'w-2 h-2 bg-border'}`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cards = scrollContainerRef.current.children;
                  cards[i]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
