"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { Phone, X, Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = pathname === "/" ? window.innerHeight * 0.3 : window.innerHeight * 0.1;
      setIsScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Domov" },
    { href: "/produkty-sluzby", label: "Produkty a služby" },
    { href: "/o-nas", label: "O nás" },
    { href: "/referencie", label: "Referencie" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-1 h-full bg-border-theme z-[9999] hidden md:block">
        <motion.div 
          className="w-full bg-secondary origin-top" 
          style={{ height: "100%", scaleY }}
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? "bg-[#202344]/90 backdrop-blur-[30px] saturate-200 shadow-[0_12px_40px_rgba(31,35,71,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] border-b border-white/10" 
            : "bg-[#202344]/80 backdrop-blur-[25px] saturate-180 shadow-[0_8px_32px_rgba(31,35,71,0.25),inset_0_1px_0_rgba(255,255,255,0.1)] border-b border-white/15"
        }`}
      >
        <div className="max-w-[95%] mx-auto px-5 py-3 md:py-5 flex items-center justify-between xl:justify-start xl:gap-12">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
              <Image 
                src="/sources/logo bez pozadia.png" 
                alt="F INOX STEEL" 
                width={200}
                height={60}
                className="h-[45px] md:h-[60px] w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex list-none gap-10 m-0 p-0 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className={`relative text-white/95 font-medium text-base uppercase tracking-[1px] px-5 py-3 rounded-lg transition-all duration-300 drop-shadow-md flex items-center justify-center group ${
                      isActive 
                        ? "bg-gradient-to-br from-secondary/95 to-secondary text-[#1e3c72] font-semibold drop-shadow-none shadow-[0_4px_15px_rgba(245,197,41,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]"
                        : "hover:text-white hover:-translate-y-[2px]"
                    }`}
                  >
                    {!isActive && (
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#1f2347]/15 to-[#333333]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {!isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-white/80 to-white/60 transition-[width] duration-300 rounded-sm shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:w-[70%]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block ml-auto">
            <a 
              href="tel:+421918843553" 
              className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-secondary to-[#f7c93d] text-primary no-underline rounded-full font-bold text-sm uppercase tracking-[1px] transition-all duration-300 border-2 border-secondary shadow-[0_4px_15px_rgba(245,197,41,0.3)] overflow-hidden group hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(245,197,41,0.4)]"
            >
              <span className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-600 group-hover:left-full" />
              <Phone className="w-4 h-4 relative z-10" />
              <span className="relative z-10">+421 918 843 553</span>
            </a>
          </div>

          {/* Hamburger (Mobile) */}
          <button 
            className="md:hidden flex flex-col gap-1 z-[1001] w-[25px] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-full h-[3px] bg-white rounded-sm shadow-sm transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-full h-[3px] bg-white rounded-sm shadow-sm transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-[3px] bg-white rounded-sm shadow-sm transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.8)_100%)] backdrop-blur-sm z-[999] transition-all duration-400 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 w-full md:w-[400px] h-[100dvh] bg-gradient-to-br from-[#1f2347]/95 via-[#141932]/95 to-[#1f2347]/95 backdrop-blur-[25px] border-r border-white/10 z-[1000] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col p-6 shadow-[10px_0_30px_rgba(31,35,71,0.5)] ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-10">
            <Link href="/" className="flex items-center h-full pt-1" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/sources/logo bez pozadia.png" alt="F INOX STEEL" width={200} height={45} className="h-[35px] md:h-[45px] w-auto" priority />
            </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <ul className="flex flex-col m-0 p-0">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative block w-full py-5 border-b border-white/10 text-lg uppercase tracking-[1px] transition-all duration-400 ${
                  pathname === link.href ? "text-white/90 font-semibold pl-10" : "text-white/85 font-medium hover:text-white hover:pl-10"
                }`}
              >
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-white/80 to-white/60 transition-all duration-400 ${
                  pathname === link.href ? "w-[30px]" : "w-0 group-hover:w-[30px]"
                }`} />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-10 text-center">
          <a 
            href="tel:+421918843553" 
            className="relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-br from-white/90 to-white text-primary rounded-full font-bold text-base uppercase tracking-[1px] transition-all duration-400 border-2 border-white/80 shadow-[0_6px_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:bg-gradient-to-br hover:from-white hover:to-white/90 hover:border-white/80 hover:shadow-[0_10px_25px_rgba(255,255,255,0.3)] overflow-hidden group"
          >
            <span className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-600 group-hover:left-full" />
            <Phone className="w-[18px] h-[18px] relative z-10" />
            <span className="relative z-10">+421 918 843 553</span>
          </a>
        </div>
      </div>
    </>
  );
}
