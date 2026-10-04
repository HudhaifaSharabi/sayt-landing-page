import { siteContent } from "@/lib/content";
import { Sparkles } from "lucide-react";

export function Marquee() {
  const items = siteContent.marquee;
  // Duplicate for seamless infinite scrolling
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-gradient-to-r from-brand-primary via-brand-bright to-brand-primary py-4 overflow-hidden border-y border-brand-bright/20 relative z-20">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 px-8 md:px-12">
            <span className="text-white font-bold text-lg md:text-xl whitespace-nowrap">
              {item}
            </span>
            <Sparkles className="w-5 h-5 text-white/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
