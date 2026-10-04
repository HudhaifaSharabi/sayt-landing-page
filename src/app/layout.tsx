import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Load Tajawal font with Arabic subset and swap display
const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "SAYT - صيت | وكالة تصميم مواقع لعيادات الأسنان",
  description: "نبني لك واجهة رقمية تخطف الباحثين وتحولهم إلى عملاء دائمين لعيادتك.",
  openGraph: {
    title: "SAYT - صيت",
    description: "نبني لك واجهة رقمية تخطف الباحثين وتحولهم إلى عملاء دائمين لعيادتك.",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDesignAgency",
              "name": "SAYT - صيت",
              "url": "https://sayt.sa",
              "description": "نبني لك واجهة رقمية تخطف الباحثين وتحولهم إلى عملاء دائمين لعيادتك.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA"
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "تصميم وبناء مواقع لعيادات الأسنان",
                  "audience": {
                    "@type": "Audience",
                    "audienceType": "Dental Clinics"
                  }
                }
              }
            })
          }}
        />
      </body>
    </html>
  );
}
