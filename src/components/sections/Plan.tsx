"use client";

import { useRef } from "react";
import { siteContent } from "@/lib/content";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Search, PenTool, Rocket } from "lucide-react";

export function Plan() {
  const container = useRef<HTMLDivElement>(null);
  const pinSection = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check if desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: Smooth timeline reveal (No pinning)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 65%", // Trigger when section is nicely in view
        }
      });

      // Animate line smoothly
      tl.to(".desktop-line-fill", { height: "100%", duration: 1.2, ease: "power1.inOut" }, 0);

      // Animate steps
      const steps = gsap.utils.toArray(".desktop-step");
      steps.forEach((step: any, i) => {
        const start = i * 0.3 + 0.3;
        tl.to(step, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }, start);
        tl.to(step.querySelector(".step-icon"), { 
          backgroundColor: "var(--color-brand-primary)", 
          borderColor: "var(--color-brand-primary)",
          color: "white", 
          scale: 1.1, 
          duration: 0.3 
        }, start);
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: Simple vertical timeline with filling line
      gsap.to(".mobile-line-fill", {
        scrollTrigger: {
          trigger: ".mobile-timeline",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
        height: "100%",
        ease: "none"
      });

      const steps = gsap.utils.toArray(".mobile-step");
      steps.forEach((step: any) => {
        gsap.to(step.querySelector(".step-icon"), {
          scrollTrigger: {
            trigger: step,
            start: "top 60%",
            toggleClass: "active-icon",
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: container });

  const icons = [
    <Search key="1" className="w-6 h-6" />,
    <PenTool key="2" className="w-6 h-6" />,
    <Rocket key="3" className="w-6 h-6" />
  ];

  return (
    <section id="plan" ref={container} className="bg-background relative">
      
      {/* Desktop View */}
      <div className="hidden md:flex py-24 items-center justify-center">
        <div className="container mx-auto px-8 max-w-6xl flex items-start">
          
          <div className="w-1/3 pr-8 flex flex-col justify-start sticky top-32">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
              خطة عمل <br/><span className="text-brand-primary">واضحة وشفافة</span>
            </h2>
            <p className="text-muted text-lg">
              نأخذ بيدك من الفكرة إلى التصدر، خطوة بخطوة نحو بناء صيتك الرقمي.
            </p>
          </div>

          <div className="w-2/3 relative flex flex-col justify-center gap-12 pl-12">
            {/* Timeline Line */}
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-border rounded-full transform translate-x-1/2">
              <div className="desktop-line-fill w-full h-0 bg-gradient-to-b from-brand-primary to-brand-bright rounded-full" />
            </div>

            {siteContent.plan.map((step, i) => (
              <div key={i} className="desktop-step relative flex items-center gap-8 opacity-30 transform translate-x-8">
                {/* Icon connected to line */}
                <div className="step-icon absolute -right-[46px] w-12 h-12 rounded-full bg-surface border-2 border-border text-muted flex items-center justify-center z-10 transition-colors shadow-sm">
                  {icons[i]}
                </div>
                
                <div className="bg-surface/80 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-sm flex-1">
                  <div className="text-sm font-bold text-brand-primary mb-1">الخطوة {i + 1}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-foreground mb-4">
            خطة عمل <span className="text-brand-primary">واضحة وشفافة</span>
          </h2>
          <p className="text-muted">نأخذ بيدك من الفكرة إلى التصدر.</p>
        </div>

        <div className="mobile-timeline relative pl-4 pr-8">
          {/* Timeline Line */}
          <div className="absolute right-4 top-4 bottom-4 w-1 bg-border rounded-full transform translate-x-1/2">
            <div className="mobile-line-fill w-full h-0 bg-brand-primary rounded-full" />
          </div>

          <div className="flex flex-col gap-8">
            {siteContent.plan.map((step, i) => (
              <div key={i} className="mobile-step relative">
                <div className="step-icon absolute -right-[34px] top-4 w-10 h-10 rounded-full bg-surface border-2 border-border text-muted flex items-center justify-center z-10 transition-all duration-300 [&.active-icon]:bg-brand-primary [&.active-icon]:text-white [&.active-icon]:border-brand-primary [&.active-icon]:scale-110">
                  {icons[i]}
                </div>
                
                <div className="bg-surface border border-border p-5 rounded-2xl shadow-sm mr-4">
                  <div className="text-xs font-bold text-brand-primary mb-1">الخطوة {i + 1}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
