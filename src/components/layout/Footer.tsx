"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { whatsappUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-brand-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="relative flex items-center">
            {/* Light Mode Logo */}
            <Image
              src="/images/logo_bg_light.png"
              alt="SAYT Logo"
              width={100}
              height={32}
              className="dark:hidden object-contain h-8 w-auto"
            />
            {/* Dark Mode Logo */}
            <Image
              src="/images/logo_white.png"
              alt="SAYT Logo"
              width={100}
              height={32}
              className="hidden dark:block object-contain h-8 w-auto"
            />
          </Link>
          <p className="text-muted text-sm text-center md:text-right max-w-xs">
            نبني لك واجهة رقمية تخطف الباحثين وتحولهم إلى عملاء دائمين لعيادتك.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <Link href="#problem" className="hover:text-brand-primary transition-colors">المشكلة</Link>
          <Link href="#solution" className="hover:text-brand-primary transition-colors">الحل</Link>
          <Link href="#plan" className="hover:text-brand-primary transition-colors">خطة العمل</Link>
          <Link href="#faq" className="hover:text-brand-primary transition-colors">الأسئلة الشائعة</Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-bright text-white font-bold text-sm hover:shadow-[0_0_15px_var(--color-brand-glow)] transition-all"
          >
            ابدأ الآن
          </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-border/50 text-center flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-xs text-muted/70">
          © {new Date().getFullYear()} SAYT. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-4 text-xs text-muted/70">
          <Link href="#" className="hover:text-foreground transition-colors">الشروط والأحكام</Link>
          <Link href="#" className="hover:text-foreground transition-colors">سياسة الخصوصية</Link>
        </div>
      </div>
    </footer>
  );
}
