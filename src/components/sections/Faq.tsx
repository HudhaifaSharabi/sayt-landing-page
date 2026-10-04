"use client";

import { useState } from "react";
import { siteContent } from "@/lib/content";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[50vh] bg-gradient-to-b from-brand-primary/5 to-transparent -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 md:mb-4">
            الأسئلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-bright">الشائعة</span>
          </h2>
          <p className="text-muted text-sm md:text-base">إجابات شفافة لكل ما يدور في ذهنك قبل الشراكة معنا.</p>
        </div>

        <div className="flex flex-col gap-4">
          {siteContent.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? "border-brand-primary/40 bg-brand-primary/5 shadow-[0_0_20px_rgba(255,90,31,0.08)]" 
                    : "border-border bg-surface hover:border-brand-primary/20 hover:bg-surface/80 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary rounded-2xl gap-3 md:gap-4 cursor-pointer text-right group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-brand-primary" : "text-foreground group-hover:text-brand-primary/80"}`}>
                    {item.question}
                  </span>
                  
                  {/* Icon Container ensuring proper RTL spacing */}
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-brand-primary/10" : "bg-foreground/5 group-hover:bg-brand-primary/5"}`}>
                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 ${isOpen ? "rotate-180 text-brand-primary" : "text-muted group-hover:text-brand-primary/70"}`} />
                  </div>
                </button>
                
                {/* Smooth Grid Expansion */}
                <div 
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    {/* Content Slide & Fade effect */}
                    <div className={`px-5 md:px-6 pb-5 md:pb-6 transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                      <p className="text-foreground/80 leading-relaxed font-medium text-sm md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
