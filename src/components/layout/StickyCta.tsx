"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/content";

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      
      if (!hero || !contact) return;

      const heroRect = hero.getBoundingClientRect();
      const contactRect = contact.getBoundingClientRect();
      
      // Show when scrolled past hero, hide when contact section is in view
      const pastHero = heroRect.bottom < 0;
      const contactInView = contactRect.top < window.innerHeight;
      
      setIsVisible(pastHero && !contactInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pb-[max(16px,env(safe-area-inset-bottom))] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? "translate-y-0" : "translate-y-[150%]"
      }`}
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-bright shadow-[0_10px_40px_-10px_rgba(255,90,31,0.5)] text-white font-bold text-[16px] hover:scale-[1.02] active:scale-95 transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        احجز استشارتك عبر واتساب الآن
      </Link>
    </div>
  );
}
