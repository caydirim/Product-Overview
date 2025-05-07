import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ürün Tanıtım Sitesi",
  description: "En iyi ürünleri keşfedin. Modern, hızlı ve SEO dostu ürün tanıtım sitesi.",
  openGraph: {
    title: "Ürün Tanıtım Sitesi",
    description: "En iyi ürünleri keşfedin. Modern, hızlı ve SEO dostu ürün tanıtım sitesi.",
    url: "https://frontend-final-project.vercel.app/",
    siteName: "Ürün Tanıtım Sitesi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ürün Tanıtım Sitesi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ürün Tanıtım Sitesi",
    description: "En iyi ürünleri keşfedin. Modern, hızlı ve SEO dostu ürün tanıtım sitesi.",
    images: ["/og-image.png"],
    creator: "@kullaniciadi",
  },
  metadataBase: new URL("https://frontend-final-project.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://frontend-final-project.vercel.app/" />
        {/* Open Graph ve Twitter Card meta etiketleri Next.js metadata ile otomatik ekleniyor */}
        {/* JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ürün Tanıtım Sitesi",
            "url": "https://frontend-final-project.vercel.app/",
            "logo": "/og-image.png",
            "sameAs": [
              "https://twitter.com/kullaniciadi",
              "https://instagram.com/kullaniciadi"
            ]
          })
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#2d1b0e] min-h-screen flex flex-col font-sans`}> 
        <header className="w-full bg-[#fffaf6] shadow-sm sticky top-0 z-30 border-b border-[#c8b6a6]">
          <nav className="container mx-auto flex justify-between items-center py-4 px-4">
            <a href="/" className="text-2xl font-bold text-[#4b2e19] tracking-tight font-serif">ÜrünTanıtım</a>
            <div className="flex gap-6">
              <a href="/" className="text-[#6d4c2b] hover:text-[#4b2e19] transition-colors font-medium">Ana Sayfa</a>
              <a href="/products" className="text-[#6d4c2b] hover:text-[#4b2e19] transition-colors font-medium">Ürünler</a>
            </div>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="bg-[#4b2e19] text-[#fffaf6] py-8 mt-12 border-t border-[#c8b6a6]">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
            <div className="text-sm font-sans">© {new Date().getFullYear()} Ürün Tanıtım Sitesi. Tüm hakları saklıdır.</div>
            <div className="flex gap-4">
              <a href="https://twitter.com/kullaniciadi" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-[#a89c94] transition-colors font-sans">Twitter</a>
              <a href="https://instagram.com/kullaniciadi" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-[#a89c94] transition-colors font-sans">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
