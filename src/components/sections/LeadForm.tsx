"use client";

import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export function LeadForm() {
  const phoneNumber = "966500000000"; // Replace with actual client number
  const message = "السلام عليكم، أرغب في استشارة لزيادة حجوزات عيادة الأسنان الخاصة بي";
  const encodedMessage = encodeURIComponent(message);
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-surface/80 backdrop-blur-xl border border-border p-6 md:p-16 rounded-3xl md:rounded-[40px] shadow-2xl relative overflow-hidden text-center flex flex-col items-center">

          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-bright/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 w-16 h-16 md:w-24 md:h-24 bg-brand-primary/10 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 shadow-[0_0_40px_rgba(255,90,31,0.15)] animate-pulse">
            <MessageCircle className="w-8 h-8 md:w-12 md:h-12 text-brand-primary" />
          </div>

          <div className="relative z-10 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 md:mb-6 tracking-normal text-balance leading-tight px-2">
              خطوة واحدة لمضاعفة <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-bright">حجوزات عيادتك</span>
            </h2>
            <p className="text-muted text-base md:text-lg font-medium max-w-xl mx-auto leading-relaxed text-balance">
              بدون نماذج معقدة أو إدخال بيانات. تواصل معنا مباشرة عبر واتساب وسيقوم أحد خبرائنا بالرد عليك فوراً.
            </p>
          </div>

          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-full max-w-lg min-h-[48px] py-4 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-brand-primary to-brand-bright text-white font-bold text-lg md:text-2xl shadow-[0_15px_50px_-10px_rgba(255,90,31,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(255,90,31,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-3 group px-4"
          >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            احجز استشارتك المجانية عبر واتساب الآن
          </Link>

          <div className="relative z-10 mt-6 flex items-center justify-center gap-2 opacity-60">
            <span className="w-2 h-2 rounded-full bg-success-green animate-pulse" />
            <span className="text-xs font-bold text-foreground">متواجدون الآن للرد على استفسارك</span>
          </div>

        </div>
      </div>
    </section>
  );
}
