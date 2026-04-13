"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/sources/brany/hero1.jpg",
    alt: "F INOX STEEL hliníkové brány",
    text: "Prémiové hliníkové brány vyrobené na mieru s bezúdržbovým povrchom a automatickým pohonom. Moderný dizajn s lamelovými prvkami, maximálna odolnosť a dlhá životnosť. Ideálne riešenie pre vaše bývanie.",
    highlight: "Prémiové hliníkové brány"
  },
  {
    id: 2,
    image: "/sources/pergoly/hero2.jpg",
    alt: "F INOX STEEL hliníkové pergoly",
    text: "Elegantné hliníkové pergoly s automatickými otočnými lamelami a integrovaným LED osvetlením. Vynikajúca ochrana pred slnkom a dažďom. Nadčasový dizajn pre dokonalý komfort vo vašom vonkajšom priestore.",
    highlight: "Elegantné hliníkové pergoly"
  },
  {
    id: 3,
    image: "/sources/schodiska_a_zabradlia/432314200_376685958510307_4362093780546380355_n.jpg",
    alt: "F INOX STEEL zábradlia",
    text: "Kvalitné hliníkové zábradlia pre schody, terasy a balkóny. Bezpečné, odolné a estetické riešenie z hliníka a nerezu. Moderný dizajn s dlhou životnosťou a minimálnou údržbou.",
    highlight: "Kvalitné hliníkové zábradlia"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-end text-white">
      {/* Background Images */}
      <div className="absolute inset-0 z-[-2] bg-black bg-opacity-40">
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover object-[center_20%] transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/40 z-[-1]" />

      {/* Hero Content */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[95%] w-full px-5 flex items-center justify-start gap-15 z-10 pointer-events-none">
        <div className="flex-1 max-w-[700px] pointer-events-auto">
          <h1 className="text-[2.2rem] md:text-[4rem] font-bold leading-[1.1] mb-3 md:mb-5 text-shadow-md max-w-full md:max-w-[650px] [text-shadow:0_4px_8px_rgba(0,0,0,0.5)]">
            HLINÍKOVÉ BRÁNY A KOVOVÉ KONŠTRUKCIE
          </h1>

          <div className="relative min-h-[120px] mb-[30px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 left-0 w-full"
              >
                <p className="text-[0.95rem] md:text-[1.3rem] m-0 leading-[1.6] text-white/95 font-normal [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
                  <strong className="text-secondary font-semibold [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    {slides[currentSlide].highlight}
                  </strong>
                  {slides[currentSlide].text.replace(slides[currentSlide].highlight, "")}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 mb-[30px] justify-start">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-[14px] h-[14px] rounded-full border-2 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  index === currentSlide
                    ? "bg-secondary border-secondary scale-[1.3] shadow-[0_0_15px_rgba(245,197,41,0.6)]"
                    : "bg-white/30 border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-white/60 hover:border-white/60 hover:scale-[1.15]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-5">
            <Link
              href="/referencie"
              className="relative inline-block overflow-hidden px-[35px] py-[18px] border-none rounded-[50px] font-bold uppercase tracking-[1.2px] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] font-sans no-underline shadow-[0_6px_20px_rgba(0,0,0,0.15)] bg-gradient-to-br from-secondary to-[#f7c93d] text-primary border-2 border-secondary group hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(245,197,41,0.4)]"
            >
              <span className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-600 group-hover:left-full" />
              <span className="relative z-10">PROJEKTY</span>
            </Link>
            <Link
              href="/produkty-sluzby"
              className="relative hidden md:inline-block overflow-hidden px-[35px] py-[18px] rounded-[50px] font-bold uppercase tracking-[1.2px] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] text-[14px] font-sans no-underline shadow-[0_6px_20px_rgba(0,0,0,0.15)] bg-transparent text-white border-2 border-white/80 backdrop-blur-[10px] group hover:bg-white/95 hover:text-primary hover:border-white hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.3)]"
            >
              <span className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-600 group-hover:left-full" />
              <span className="relative z-10">SLUŽBY</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
