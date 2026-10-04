"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { whatsappUrl } from "@/lib/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation for Mobile Menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(".mobile-menu", { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" });
    } else {
      gsap.to(".mobile-menu", { y: "100%", opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "المشكلة", href: "#problem" },
    { name: "الحل", href: "#solution" },
    { name: "خطة العمل", href: "#plan" },
    { name: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "py-3 bg-surface/80 backdrop-blur-md border-b border-border shadow-sm"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between flex-row-reverse md:flex-row">

          {/* 1. الشعار (يظهر في أقصى اليمين في الديسكktop) */}
          <Link href="/" className="relative z-50 flex items-center order-1 md:order-none">
            {/* Light Mode Logo */}
            <Image
              src="/images/logo_bg_light.png"
              alt="SAYT Logo"
              width={120}
              height={40}
              className="dark:hidden object-contain h-8 w-auto md:h-10"
              priority
            />
            {/* Dark Mode Logo */}
            <Image
              src="/images/logo-bg-dark.png"
              alt="SAYT Logo"
              width={120}
              height={40}
              className="hidden dark:block object-contain h-8 w-auto md:h-10"
              priority
            />
          </Link>

          {/* 2. روابط التنقل (في المنتصف) */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-fluid-body font-medium text-muted hover:text-brand-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. أزرار الإجراء والوضع الليلي (في أقصى اليسار) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-bright text-white font-bold hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all"
            >
              ابدأ الآن
            </Link>
          </div>

          {/* Mobile Nav Toggle (للجوال) */}
          <div className="flex md:hidden items-center gap-4 relative z-50 order-2 md:order-none">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Sheet Menu */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-end translate-y-full opacity-0 md:hidden pt-20 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col h-full p-6 pb-12 gap-8 overflow-y-auto">
          <ul className="flex flex-col gap-6 mt-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-fluid-h2 font-bold text-foreground hover:text-brand-primary transition-colors block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-4">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 text-center rounded-2xl bg-gradient-to-r from-brand-primary to-brand-bright text-white text-fluid-body font-bold shadow-lg hover:shadow-[0_0_20px_var(--color-brand-glow)] transition-all"
            >
              احجز استشارة مجانية
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
