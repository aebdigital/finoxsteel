"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gradient-to-br from-primary to-[#1f2347] text-white pt-0 pb-5 overflow-hidden z-10 font-sans">
        {/* SVG Grain Overlay */}
        <div className="absolute inset-0 opacity-50 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,<svg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_100_100%22><defs><pattern_id=%22grain%22_patternUnits=%22userSpaceOnUse%22_width=%22100%22_height=%22100%22><rect_width=%22100%22_height=%22100%22_fill=%22%23000%22_opacity=%220.03%22/></pattern></defs><rect_width=%22100%22_height=%22100%22_fill=%22url(%23grain)%22/></svg>')]"></div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-secondary to-[#f7c93d] py-20 px-5 text-center overflow-hidden z-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)] animate-[spin_20s_linear_infinite] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto relative z-[2]">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-5 backdrop-blur-md border border-white/20">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              <span className="text-[0.9rem] font-semibold text-primary uppercase tracking-[0.5px]">Bezplatná konzultácia</span>
            </div>
            
            <h2 className="text-4xl md:text-[2.8rem] font-bold text-primary mb-10 leading-tight">Máte nápad?</h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
              <div className="flex items-center">
                <a href="tel:+421918843553" className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-[#3a4070] text-white px-6 py-3 rounded-full font-semibold text-[0.95rem] transition-all duration-300 uppercase tracking-[0.5px] shadow-[0_8px_25px_rgba(46,51,92,0.3)] hover:-translate-y-[2px]">
                  <Phone className="w-4 h-4 text-secondary" />
                  +421 918 843 553
                </a>
              </div>
              <div className="font-semibold text-primary/60 text-[1.1rem] uppercase tracking-[1px]">alebo</div>
              <div className="flex items-center">
                <Link href="/kontakt" className="inline-flex items-center gap-2 bg-gradient-to-br from-primary to-[#3a4070] text-white px-6 py-3 rounded-full font-semibold text-[0.95rem] transition-all duration-300 uppercase tracking-[0.5px] shadow-[0_8px_25px_rgba(46,51,92,0.3)] hover:-translate-y-[2px]">
                  <Mail className="w-4 h-4 text-secondary" />
                  Napíšte nám
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="relative pt-20 pb-15 z-10">
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 items-start">
              
              {/* Company Info */}
              <div className="pr-0 lg:pr-5">
                <div className="flex items-center gap-3 mb-5">
                  <Image src="/sources/logo bez pozadia.png" alt="F INOX STEEL" width={200} height={60} className="h-[60px] w-auto object-contain" />
                </div>
                <p className="text-white/80 leading-relaxed mb-6 flex text-[0.95rem]">
                  Rodinná firma špecializujúca sa na výrobu a montáž hliníkových brán, zábradlí a kovových konštrukcií z kvalitných materiálov.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/finoxsteel" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-secondary rounded-full transition-transform hover:-translate-y-1 hover:scale-105 text-[#1e3a8a]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                  </a>
                  <a href="https://www.instagram.com/finoxsteel/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-secondary rounded-full transition-transform hover:-translate-y-1 hover:scale-105 text-[#1e3a8a]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/f-inox-steel" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-secondary rounded-full transition-transform hover:-translate-y-1 hover:scale-105 text-[#1e3a8a]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col">
                <h4 className="text-xl md:text-[1.2rem] font-semibold mb-4 text-white">Rýchle odkazy</h4>
                <ul className="flex flex-col gap-2 p-0 m-0 list-none">
                  <li><Link href="/" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Domov</Link></li>
                  <li><Link href="/o-nas" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">O nás</Link></li>
                  <li><Link href="/produkty-sluzby" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Služby</Link></li>
                  <li><Link href="/referencie" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Portfólio</Link></li>
                  <li><Link href="/kontakt" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Kontakt</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="flex flex-col">
                <h4 className="text-xl md:text-[1.2rem] font-semibold mb-4 text-white">Naše služby</h4>
                <ul className="flex flex-col gap-2 p-0 m-0 list-none">
                  <li><Link href="/referencie?filter=brany" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Hliníkové brány</Link></li>
                  <li><Link href="/referencie?filter=schody-zabradlia" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Schody a zábradlia</Link></li>
                  <li><Link href="/referencie?filter=pergoly" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Pergoly</Link></li>
                  <li><Link href="/referencie?filter=konstrukcie" className="text-[#ccc] hover:text-white transition-colors text-[0.9rem]">Konštrukcie</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col">
                <h4 className="text-xl md:text-[1.2rem] font-semibold mb-4 text-white">Kontaktné údaje</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 group">
                    <div className="mt-1">
                      <MapPin className="w-5 h-5 text-secondary transition-colors group-hover:text-[#ffd700]" />
                    </div>
                    <div>
                      <span className="block text-[0.85rem] text-white opacity-70 uppercase tracking-[0.5px] font-semibold mb-1">Adresa</span>
                      <span className="text-[#ccc] text-[0.9rem] leading-snug block">Sládkovičova 61<br/>953 01 Zlaté Moravce</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="mt-1">
                      <Phone className="w-5 h-5 text-secondary transition-colors group-hover:text-[#ffd700]" />
                    </div>
                    <div>
                      <span className="block text-[0.85rem] text-white opacity-70 uppercase tracking-[0.5px] font-semibold mb-1">Telefón</span>
                      <a href="tel:+421918843553" className="text-[#ccc] text-[0.9rem] hover:text-[#66b3ff] transition-colors block">+421 918 843 553</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 group">
                    <div className="mt-1">
                      <Mail className="w-5 h-5 text-secondary transition-colors group-hover:text-[#ffd700]" />
                    </div>
                    <div>
                      <span className="block text-[0.85rem] text-white opacity-70 uppercase tracking-[0.5px] font-semibold mb-1">Email</span>
                      <a href="mailto:info@finoxsteel.com" className="text-[#ccc] text-[0.9rem] hover:text-[#66b3ff] transition-colors block">info@finoxsteel.com</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative py-7 border-t border-white/10 backdrop-blur-md text-center md:text-left z-10">
          <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-[0.85rem]">
              <p className="m-0">&copy; 2025 F INOX STEEL - Všetky práva vyhradené</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/ochrana-osobnych-udajov" className="text-white/70 text-[0.85rem] font-medium hover:text-secondary transition-colors">
                Ochrana osobných údajov
              </Link>
              <span className="text-white/40 text-[0.8rem]">|</span>
              <button onClick={() => window.dispatchEvent(new Event('open-cookies-settings'))} className="bg-transparent border-none p-0 cursor-pointer text-white/70 text-[0.85rem] font-medium hover:text-secondary transition-colors">
                Nastavenia Cookies
              </button>
              <span className="text-white/40 text-[0.8rem]">|</span>
              <a href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer" className="text-white/70 text-[0.85rem] font-medium hover:text-secondary transition-colors">
                Tvorba webu - AEB Digital
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
