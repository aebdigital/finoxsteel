import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "F INOX STEEL - Hliníkové brány a kovové konštrukcie | Zlaté Moravce",
  description: "F INOX STEEL - výroba a montáž hliníkových brán, zábradlí, pergol, schodov a kovových konštrukcií z hliníka, nerezu a ocele. Sládkovičova 61, Zlaté Moravce.",
  keywords: "hliníkové brány, pergoly, zábradlia, kovové konštrukcie, nerez, oceľ, hliník, Zlaté Moravce",
  authors: [{ name: "F INOX STEEL" }],
  openGraph: {
    title: "F INOX STEEL - Hliníkové brány a kovové konštrukcie",
    description: "Výroba a montáž hliníkových brán, zábradlí, pergol, schodov a kovových konštrukcií z hliníka, nerezu a ocele.",
    url: "https://finoxsteel.com/",
    siteName: "F INOX STEEL",
    images: [
      {
        url: "https://finoxsteel.com/sources/brany/Screenshot 2025-10-04 at 01.02.01.png",
        width: 1200,
        height: 630,
        alt: "F INOX STEEL - Hliníkové brány",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "F INOX STEEL - Hliníkové brány a kovové konštrukcie",
    description: "Výroba a montáž hliníkových brán, zábradlí, pergol, schodov a kovových konštrukcií z hliníka, nerezu a ocele.",
    images: ["https://finoxsteel.com/sources/brany/Screenshot 2025-10-04 at 01.02.01.png"],
  },
  alternates: {
    canonical: "https://finoxsteel.com/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans text-foreground bg-background antialiased pt-[80px]">
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
