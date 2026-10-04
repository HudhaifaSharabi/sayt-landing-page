"use client";

import { useState, useRef, useEffect } from "react";
import { Search, TrendingDown, TrendingUp, CheckCircle2, AlertTriangle, Star } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function HeroLossWinCard() {
  const container = useRef<HTMLDivElement>(null);
  const [isWin, setIsWin] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Setup timeline for Loss -> Win transition
    tl.current = gsap.timeline({ paused: true })
      // 1. Mesh Background morph
      .to(".card-mesh-bg", { 
        background: "radial-gradient(circle at 50% 50%, rgba(255,90,31,0.2) 0%, rgba(24,24,24,0) 70%)", 
        duration: 0.8 
      }, 0)
      
      // 2. Hide Loss Elements (Red Popup, Loss Stat Card details, Faded User Row)
      .to(".loss-element", { opacity: 0, scale: 0.8, y: 10, duration: 0.3, stagger: 0.1 }, 0)
      
      // 3. User Row Morph (jumps from bottom/blurred to #1/glowing)
      .to(".user-row-wrapper", {
        y: -128,
        duration: 0.6,
        ease: "back.out(1.2)"
      }, 0)
      .to(".user-row", {
        backgroundColor: "rgba(255, 90, 31, 0.15)",
        borderColor: "rgba(255, 90, 31, 0.5)",
        boxShadow: "0 0 20px rgba(255, 90, 31, 0.2)",
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.4
      }, 0)
      
      // 4. Competitors get pushed down
      .to(".competitor-row", { y: 64, opacity: 0.4, scale: 0.95, duration: 0.6, ease: "power2.inOut" }, 0)
      
      // 5. Show Win Elements (Green Popup, Win Stat Card details, Rating)
      .to(".win-element", { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "back.out(1.5)" }, 0.3)
      
      // 6. Number Counter (from -38 to +38)
      .to({ val: -38 }, {
        val: 38,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: function() {
          const el = document.querySelector(".counter-val");
          const wrapper = document.querySelector(".counter-wrapper");
          if (el && wrapper) {
            const v = Math.round(this.targets()[0].val);
            el.innerHTML = v > 0 ? `+${v}` : `${v}`;
            el.className = `counter-val text-3xl font-black tabular-nums tracking-tighter ${v > 0 ? 'text-brand-primary' : 'text-alert-red'}`;
            // Adjust card border color based on value
            if (v > 0) {
              wrapper.classList.remove("border-alert-red/30", "shadow-alert-red/10");
              wrapper.classList.add("border-brand-primary/30", "shadow-brand-primary/10");
            } else {
              wrapper.classList.add("border-alert-red/30", "shadow-alert-red/10");
              wrapper.classList.remove("border-brand-primary/30", "shadow-brand-primary/10");
            }
          }
        }
      }, 0);
  }, { scope: container, dependencies: [] });

  useEffect(() => {
    if (!userInteracted && !isWin) {
      const autoPlayTimer = setTimeout(() => {
        if (!userInteracted) {
          setIsWin(true);
        }
      }, 3500);
      return () => clearTimeout(autoPlayTimer);
    }
  }, [userInteracted, isWin]);

  useGSAP(() => {
    if (isWin) {
      tl.current?.play();
      // Particles/Confetti
      if (typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const particles = Array.from({ length: 12 });
        particles.forEach((_, i) => {
          const el = document.createElement("div");
          el.className = "absolute w-2 h-2 rounded-full bg-brand-primary z-50 pointer-events-none";
          container.current?.appendChild(el);
          gsap.set(el, { x: 170, y: 150, opacity: 1 });
          gsap.to(el, {
            x: 170 + (Math.random() - 0.5) * 250,
            y: 150 + (Math.random() - 0.5) * 250,
            opacity: 0,
            scale: Math.random() * 2,
            duration: 0.8 + Math.random(),
            ease: "power3.out",
            onComplete: () => el.remove()
          });
        });
      }
    } else {
      tl.current?.reverse();
    }
  }, { scope: container, dependencies: [isWin] });

  const handleToggle = (win: boolean) => {
    setUserInteracted(true);
    setIsWin(win);
  };

  return (
    <div 
      ref={container} 
      className="relative w-full max-w-[340px] md:max-w-[380px] mx-auto h-[350px] rounded-[32px] border border-border bg-surface/50 backdrop-blur-xl shadow-2xl overflow-visible flex flex-col items-center p-4"
    >
      {/* Mesh Background */}
      <div className="card-mesh-bg absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.15)_0%,rgba(24,24,24,0)_70%)] rounded-[32px] transition-colors duration-1000" />
      
      {/* Segmented Control */}
      <div className="relative flex items-center bg-background/80 p-1 rounded-full w-full max-w-[240px] mb-4 shadow-inner border border-border/50">
        <div 
          className="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-surface rounded-full shadow-md transition-transform duration-500 ease-spring"
          style={{ transform: isWin ? "translateX(-100%)" : "translateX(0)" }}
        />
        <button 
          onClick={() => handleToggle(false)}
          className={`relative z-10 w-1/2 py-1.5 text-sm font-bold transition-colors ${!isWin ? "text-alert-red" : "text-muted"}`}
        >
          بدون صيت
        </button>
        <button 
          onClick={() => handleToggle(true)}
          className={`relative z-10 w-1/2 py-1.5 text-sm font-bold transition-colors ${isWin ? "text-brand-primary" : "text-muted"}`}
        >
          مع صيت
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full flex-1 bg-background/50 rounded-2xl border border-border/50 p-3 overflow-hidden">
        
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-surface px-3 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-border/50 mb-3">
          <Search className="w-3.5 h-3.5 text-brand-primary" />
          <span className="text-xs font-bold text-foreground tracking-wide">أفضل طبيب أسنان</span>
          <div className="w-0.5 h-3.5 bg-brand-primary animate-pulse ml-auto" />
        </div>

        {/* Results List */}
        <div className="relative h-[160px] w-full">
          {/* Competitor 1 */}
          <div className="competitor-row absolute top-0 left-0 right-0 flex items-center justify-between bg-surface p-2.5 rounded-lg border border-border/30 shadow-sm z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center text-[10px] text-muted">1</div>
              <div className="flex flex-col gap-1">
                <div className="h-2 w-16 bg-muted/30 rounded" />
                <div className="h-1.5 w-10 bg-muted/20 rounded" />
              </div>
            </div>
            <div className="loss-element flex items-center gap-1 text-[9px] text-brand-bright font-bold bg-brand-bright/10 px-2 py-0.5 rounded-full absolute left-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-bright animate-pulse" />
              يتم الحجز الآن
            </div>
          </div>
          
          {/* Competitor 2 */}
          <div className="competitor-row absolute top-14 left-0 right-0 flex items-center justify-between bg-surface p-2.5 rounded-lg border border-border/30 shadow-sm z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-muted/20 flex items-center justify-center text-[10px] text-muted">2</div>
              <div className="flex flex-col gap-1">
                <div className="h-2 w-12 bg-muted/30 rounded" />
                <div className="h-1.5 w-16 bg-muted/20 rounded" />
              </div>
            </div>
          </div>

          {/* User Clinic Wrapper for Y translation */}
          <div className="user-row-wrapper absolute top-[128px] left-0 right-0 z-20">
            <div className="user-row flex items-center justify-between bg-surface/30 p-2.5 rounded-lg border border-border/10 opacity-40 blur-[1.5px] transition-all duration-300">
              <div className="flex items-center gap-2 w-full">
                
                {/* Avatar changes from dim to brand */}
                <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <div className="loss-element absolute inset-0 bg-muted/20 flex items-center justify-center text-[10px] text-muted font-bold">9</div>
                  <div className="win-element absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-bright flex items-center justify-center text-[10px] text-white font-bold opacity-0 scale-50">1</div>
                </div>
                
                {/* Text changes from 'غير مدرج' to 'عيادتك' */}
                <div className="flex flex-col flex-1 relative h-4">
                  <div className="loss-element absolute inset-0 flex items-center text-[11px] font-bold text-muted">غير مدرج بالصفحة الأولى</div>
                  <div className="win-element absolute inset-0 flex items-center text-[12px] font-bold text-foreground opacity-0 scale-50 translate-x-2">عيادتك</div>
                </div>

                {/* Rating Badge (Win only) */}
                <div className="win-element text-[9px] text-brand-bright font-bold flex items-center gap-0.5 bg-brand-bright/10 px-1.5 py-0.5 rounded-full opacity-0 scale-50 absolute left-2">
                  <Star className="w-3 h-3 fill-brand-bright text-brand-bright" />
                  4.9
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Overlays */}
      <div className="absolute -bottom-6 -left-6 right-0 flex justify-between items-end px-2 pointer-events-none z-30 h-32 w-[110%] max-w-[400px]">
        
        {/* Stats Card */}
        <div className="counter-wrapper bg-surface/90 backdrop-blur-xl p-3 rounded-2xl border border-alert-red/30 shadow-xl shadow-alert-red/10 transform -rotate-3 translate-y-2 transition-colors duration-500 min-w-[110px]">
          <div className="relative h-4 mb-1">
            <div className="loss-element absolute inset-0 text-[10px] text-alert-red font-bold flex items-center gap-1">
              <TrendingDown className="w-3 h-3" />
              اتجاه سلبي
            </div>
            <div className="win-element absolute inset-0 text-[10px] text-brand-primary font-bold flex items-center gap-1 opacity-0 scale-50 -translate-y-2">
              <TrendingUp className="w-3 h-3" />
              نمو متسارع
            </div>
          </div>
          <div className="counter-val text-3xl font-black tabular-nums tracking-tighter text-alert-red">-38</div>
          <div className="text-[10px] text-muted mt-0.5 font-medium">مريضاً هذا الشهر</div>
        </div>

        {/* Notifications Stack */}
        <div className="relative h-14 w-40 transform rotate-3 translate-y-4">
          
          {/* LOSS Notification (Red) */}
          <div className="loss-element absolute inset-0 bg-surface/95 backdrop-blur-xl text-foreground p-2 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.2)] flex items-center gap-2 border border-alert-red/40">
            <div className="bg-alert-red text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.4)]">تنبيه</div>
            <div className="flex flex-col overflow-hidden leading-tight">
              <span className="text-[11px] font-bold whitespace-nowrap">خسرت عميل للمنافس</span>
            </div>
          </div>

          {/* WIN Notification (Green) */}
          <div className="win-element absolute inset-0 bg-surface/95 backdrop-blur-xl text-foreground p-2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.2)] flex items-center gap-2 border border-success-green/40 opacity-0 scale-50 translate-y-4">
            <div className="bg-success-green text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]">نجاح</div>
            <div className="flex flex-col overflow-hidden leading-tight">
              <span className="text-[11px] font-bold whitespace-nowrap">حجز جديد من جوجل</span>
            </div>
          </div>
          
        </div>
      </div>

      <div className="absolute bottom-2 text-[9px] text-muted opacity-40 font-medium z-10">أرقام توضيحية</div>
    </div>
  );
}
