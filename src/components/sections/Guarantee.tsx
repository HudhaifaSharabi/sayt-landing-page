"use client";

import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { siteContent, whatsappUrl } from "@/lib/content";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function Guarantee() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const textParaRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    // Elegant floating reveal animation (No Pinning)
    gsap.fromTo(
      [iconRef.current, textRef.current, textParaRef.current, btnRef.current], 
      { y: 40, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-gradient-to-r from-brand-primary via-brand-bright to-brand-primary py-16 md:py-24 relative overflow-hidden flex items-center"
    >
      {/* Cyber-Tech Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_5%,white_50%,transparent_95%)]">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:64px_64px]" />
      </div>
      
      <div 
        ref={contentRef} 
        className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center w-full my-auto py-8 md:py-12"
      >
        <div 
          ref={iconRef} 
          className="w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-2xl md:rounded-3xl flex items-center justify-center backdrop-blur-md mb-6 md:mb-8 shadow-xl border border-white/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 blur-xl" />
          <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-white relative z-10" />
        </div>
        
        <h2 
          ref={textRef} 
          className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 drop-shadow-sm tracking-normal px-2"
        >
          ضمان استرداد الأموال 100%
        </h2>
        
        <div className="flex flex-col items-center gap-6 md:gap-8 mt-2">
          <p 
            ref={textParaRef} 
            className="text-white/90 text-base md:text-xl max-w-2xl mx-auto font-medium tracking-normal leading-relaxed text-balance"
          >
            {siteContent.guarantee.conditions}
          </p>

          <Link
            ref={btnRef}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto min-h-[48px] px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-white text-brand-primary font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
          >
            تواصل معنا للبدء
          </Link>
        </div>
      </div>
    </section>
  );
}
