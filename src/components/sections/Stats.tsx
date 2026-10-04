"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Clock, Users, TrendingUp } from "lucide-react";

export function Stats() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".stat-card", 
      { y: 40, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
      }
    );
  }, { scope: container });

  const stats = [
    { value: "14 يوماً", label: "متوسط مدة الإطلاق", icon: Clock },
    { value: "+25", label: "عيادة تثق في حلولنا", icon: Users },
    { value: "+180%", label: "زيادة في معدل الحجوزات", icon: TrendingUp }
  ];

  return (
    <section ref={container} className="py-16 md:py-20 relative bg-background overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div 
                key={i} 
                className="stat-card relative bg-surface/50 dark:bg-surface/30 backdrop-blur-md border border-border/60 p-6 md:p-8 rounded-[24px] md:rounded-[32px] flex flex-col items-center justify-center text-center group hover:shadow-xl hover:border-brand-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4 md:mb-6 text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all duration-500">
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-bright mb-2 md:mb-3 tracking-normal">
                  {stat.value}
                </span>
                
                <span className="text-sm md:text-base text-foreground font-bold tracking-normal">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
