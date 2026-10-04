"use client";

import { useRef } from "react";
import { siteContent } from "@/lib/content";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { TrendingUp, CalendarCheck, Sparkles, BrainCircuit, Search, CheckCircle2, MessageCircle, Star } from "lucide-react";

export function Solution() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".bento-card", 
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
  }, { scope: container });

  return (
    <section id="solution" ref={container} className="py-16 md:py-24 relative overflow-hidden bg-background">
      {/* Cyber-Tech Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#FF5A1F1A_1px,transparent_1px),linear-gradient(to_bottom,#FF5A1F1A_1px,transparent_1px)] bg-[size:64px_64px] md:bg-[size:48px_48px] opacity-20 dark:opacity-30" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-3 md:mb-4">
            نحول نقرات الباحثين إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-bright">مرضى دائمين</span>
          </h2>
          <p className="text-sm md:text-base text-muted max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-1 leading-loose px-2">
            موقعك ليس مجرد واجهة إلكترونية، بل هو <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-lg md:rounded-xl font-bold shadow-[0_0_15px_rgba(255,90,31,0.1)]">محرك حجوزات</span> يعمل على مدار الساعة لاقتناص كل مريض يبحث عن علاج.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Card 1: SEO - Large */}
          <div className="bento-card md:col-span-2 bg-surface/80 dark:bg-surface/30 backdrop-blur-xl border border-border/60 p-6 md:p-8 rounded-3xl md:rounded-[32px] flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-xl hover:border-brand-primary/30 transition-all duration-500">
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full transition-transform group-hover:scale-150 duration-700" />
            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{siteContent.solution.items[0].title}</h3>
              <p className="text-fluid-body text-muted max-w-sm leading-relaxed">{siteContent.solution.items[0].description}</p>
            </div>
            
            {/* SEO Mockup */}
            <div className="relative z-10 mt-auto bg-background rounded-2xl p-4 md:p-5 border border-border/50 shadow-sm flex flex-col gap-4 group-hover:shadow-[0_8px_30px_rgba(255,90,31,0.08)] transition-all">
              {/* Search Bar */}
              <div className="w-full h-10 bg-surface rounded-full flex items-center px-4 border border-border/80 shadow-inner">
                <Search className="w-4 h-4 text-brand-primary shrink-0" />
                <span className="text-xs font-bold text-foreground mx-2">طبيب أسنان قريب مني</span>
                <div className="w-0.5 h-4 bg-brand-primary animate-pulse" />
              </div>
              
              {/* #1 Result */}
              <div className="w-full p-4 bg-surface rounded-xl border border-brand-primary/40 shadow-[0_0_20px_rgba(255,90,31,0.12)] flex flex-col gap-2.5 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary" />
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-brand-primary/15 text-brand-primary text-[10px] font-black rounded-full uppercase tracking-wider">#1 ترتيب</div>
                  <div className="text-sm font-bold text-foreground">العيادة الأفضل لطب الأسنان</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-brand-bright fill-brand-bright" />
                  <Star className="w-3.5 h-3.5 text-brand-bright fill-brand-bright" />
                  <Star className="w-3.5 h-3.5 text-brand-bright fill-brand-bright" />
                  <Star className="w-3.5 h-3.5 text-brand-bright fill-brand-bright" />
                  <Star className="w-3.5 h-3.5 text-brand-bright fill-brand-bright" />
                  <span className="text-[10px] text-muted mx-1">(124 تقييم)</span>
                </div>
                <div className="w-11/12 h-1.5 bg-muted/30 rounded-full" />
                <div className="w-2/3 h-1.5 bg-muted/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 2: 24/7 Booking */}
          <div className="bento-card md:col-span-1 bg-surface/80 dark:bg-surface/30 backdrop-blur-xl border border-border/60 p-6 md:p-8 rounded-3xl md:rounded-[32px] flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl hover:border-success-green/30 transition-all duration-500">
             <div className="absolute left-0 bottom-0 w-48 h-48 bg-success-green/10 blur-[60px] rounded-full transition-transform group-hover:scale-150 duration-700" />
             <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-success-green/10 flex items-center justify-center mb-6 text-success-green group-hover:scale-110 transition-transform">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{siteContent.solution.items[1].title}</h3>
              <p className="text-fluid-body text-muted leading-relaxed">{siteContent.solution.items[1].description}</p>
            </div>
            
            {/* Booking Mockup */}
            <div className="relative z-10 bg-background rounded-2xl p-4 border border-border/50 shadow-sm flex flex-col gap-3 group-hover:shadow-[0_8px_30px_rgba(34,197,94,0.08)] transition-all">
               {/* WhatsApp Alert */}
               <div className="w-full p-3 bg-surface border border-success-green/30 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.1)] flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex shrink-0 items-center justify-center">
                   <MessageCircle className="w-4 h-4 text-[#25D366]" />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-xs font-bold text-foreground">رسالة واتساب جديدة</span>
                   <span className="text-[10px] text-success-green font-bold">تم تأكيد الحجز بنجاح ✓</span>
                 </div>
               </div>
               
               {/* Calendar Slot */}
               <div className="w-full p-3 bg-surface border border-border/60 rounded-xl flex items-center justify-between">
                 <div className="flex flex-col">
                   <span className="text-xs font-bold text-foreground">حجز موعد غداً</span>
                   <span className="text-[10px] text-muted">الساعة 10:00 صباحاً</span>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center">
                   <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                 </div>
               </div>
            </div>
          </div>

          {/* Card 3: Premium UI */}
          <div className="bento-card md:col-span-1 bg-surface/80 dark:bg-surface/30 backdrop-blur-xl border border-border/60 p-6 md:p-8 rounded-3xl md:rounded-[32px] flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-bright/30 transition-all duration-500">
             <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-bright/10 flex items-center justify-center mb-6 text-brand-bright group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{siteContent.solution.items[2].title}</h3>
              <p className="text-fluid-body text-muted leading-relaxed">{siteContent.solution.items[2].description}</p>
            </div>
            
            {/* Premium UI Mockup Wireframe */}
            <div className="relative z-10 w-full aspect-[4/3] bg-background rounded-2xl border border-border/50 shadow-sm p-3 flex flex-col gap-2 group-hover:shadow-[0_8px_30px_rgba(255,140,0,0.08)] transition-all overflow-hidden">
              {/* Navbar Wireframe */}
              <div className="flex justify-between items-center bg-surface p-2 rounded-lg border border-border/50">
                <div className="w-12 h-2 bg-brand-bright/50 rounded-full" />
                <div className="flex gap-1">
                  <div className="w-4 h-1.5 bg-muted/40 rounded-full" />
                  <div className="w-4 h-1.5 bg-muted/40 rounded-full" />
                  <div className="w-4 h-1.5 bg-muted/40 rounded-full" />
                </div>
              </div>
              
              {/* Hero Wireframe */}
              <div className="flex-1 bg-gradient-to-br from-brand-primary/10 to-brand-bright/5 rounded-xl border border-brand-primary/10 flex flex-col justify-center items-center gap-1.5 p-2 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-brand-bright/20 rounded-full blur-xl" />
                <div className="w-3/4 h-2.5 bg-foreground/80 rounded-full" />
                <div className="w-1/2 h-2 bg-muted/50 rounded-full" />
                
                <div className="flex gap-2 w-full mt-2">
                  <div className="w-1/2 h-12 bg-surface rounded-lg border border-border/50 shadow-sm flex flex-col justify-center items-center gap-1">
                     <div className="w-4 h-4 rounded-full bg-brand-primary/20" />
                     <div className="w-8 h-1 bg-muted/50 rounded-full" />
                  </div>
                  <div className="w-1/2 h-12 bg-surface rounded-lg border border-border/50 shadow-sm flex flex-col justify-center items-center gap-1">
                     <div className="w-4 h-4 rounded-full bg-brand-bright/20" />
                     <div className="w-8 h-1 bg-muted/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: AI Ready - Large */}
          <div className="bento-card md:col-span-2 bg-surface/80 dark:bg-surface/30 backdrop-blur-xl border border-border/60 p-6 md:p-8 rounded-3xl md:rounded-[32px] flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl hover:border-foreground/30 transition-all duration-500">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-foreground/5 blur-[100px] rounded-full transition-transform group-hover:scale-110 duration-700" />
            <div className="relative z-10 md:flex md:items-center md:justify-between h-full gap-8">
              
              <div className="mb-8 md:mb-0 md:max-w-sm flex-1">
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 text-foreground group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{siteContent.solution.items[3].title}</h3>
                <p className="text-fluid-body text-muted leading-relaxed">{siteContent.solution.items[3].description}</p>
              </div>
              
              {/* AI Chat Mockup */}
              <div className="relative z-10 bg-background rounded-2xl p-4 md:p-5 border border-border/50 shadow-sm flex flex-col gap-4 w-full md:w-72 flex-shrink-0 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
                 
                 {/* User Query */}
                 <div className="flex gap-2 w-full items-end justify-start">
                   <div className="w-6 h-6 rounded-full bg-foreground/10 flex shrink-0 items-center justify-center text-[10px] text-foreground font-bold">انت</div>
                   <div className="bg-surface p-2.5 rounded-2xl rounded-tr-sm text-[11px] font-bold text-foreground w-max max-w-[85%] border border-border/80 shadow-sm">
                     أبحث عن عيادة أسنان ممتازة وموثوقة؟
                   </div>
                 </div>
                 
                 {/* AI Response */}
                 <div className="flex gap-2 w-full items-end justify-end">
                   <div className="bg-[#111111] dark:bg-surface p-3 rounded-2xl rounded-tl-sm text-[11px] text-white/90 font-medium w-max max-w-[85%] border border-border/30 shadow-md leading-relaxed text-right">
                     أنصحك بزيارة <span className="inline-block px-1.5 py-0.5 mx-1 bg-brand-primary text-white font-bold rounded-md shadow-sm">عيادتك</span> بفضل تقييماتهم العالية جداً والخدمات الرقمية المتطورة لديهم.
                   </div>
                   <div className="w-6 h-6 rounded-full bg-brand-primary flex shrink-0 items-center justify-center text-[10px] text-white font-black shadow-[0_0_10px_rgba(255,90,31,0.3)]">AI</div>
                 </div>
                 
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
