"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

type Category = "vsetko" | "brany" | "schody-zabradlia" | "pergoly" | "konstrukcie";

const images = [
  { src: "/sources/brany/255020066_4643795265643850_3352048480199650790_n.jpg", category: "brany" },
  { src: "/sources/brany/260839579_4686508461372530_2505623606432666679_n.jpg", category: "brany" },
  { src: "/sources/brany/290161775_5337746472915389_8790292686262939797_n.jpg", category: "brany" },
  { src: "/sources/brany/4.jpg", category: "brany" },
  { src: "/sources/brany/479315987_596883256490575_8014104618849694477_n.jpg", category: "brany" },
  { src: "/sources/brany/486422956_624113283767572_7579823688339688467_n.jpg", category: "brany" },
  { src: "/sources/brany/76.jpg", category: "brany" },
  { src: "/sources/brany/77.jpg", category: "brany" },
  { src: "/sources/brany/IMG_3840.jpg", category: "brany" },
  { src: "/sources/brany/IMG_4844.jpg", category: "brany" },
  { src: "/sources/brany/IMG_4904 copy.jpg", category: "brany" },
  { src: "/sources/brany/IMG_4906 copy.jpg", category: "brany" },
  { src: "/sources/brany/IMG_6886.jpg", category: "brany" },
  { src: "/sources/brany/IMG_6968.jpg", category: "brany" },
  { src: "/sources/brany/IMG_7156.jpg", category: "brany" },
  { src: "/sources/brany/IMG_7341.jpg", category: "brany" },
  { src: "/sources/brany/IMG_7523.jpg", category: "brany" },
  { src: "/sources/brany/IMG_7715.jpg", category: "brany" },
  { src: "/sources/brany/Screenshot 2025-10-04 at 01.02.22.jpg", category: "brany" },
  { src: "/sources/brany/Screenshot 2025-10-04 at 01.03.01.jpg", category: "brany" },
  { src: "/sources/brany/Screenshot 2025-10-04 at 01.03.15.jpg", category: "brany" },
  { src: "/sources/brany/service-brana.jpg", category: "brany" },

  { src: "/sources/pergoly/IMG_6212.jpg", category: "pergoly" },
  { src: "/sources/pergoly/IMG_7318.jpg", category: "pergoly" },
  { src: "/sources/pergoly/IMG_7321_jpg.jpg", category: "pergoly" },
  { src: "/sources/pergoly/Screenshot 2025-10-04 at 01.07.22.png", category: "pergoly" },
  { src: "/sources/pergoly/Screenshot 2025-10-04 at 01.07.28.png", category: "pergoly" },
  { src: "/sources/pergoly/Screenshot 2025-10-04 at 01.07.39.png", category: "pergoly" },
  { src: "/sources/pergoly/Screenshot 2025-10-04 at 01.07.51.png", category: "pergoly" },
  { src: "/sources/pergoly/pergola.jpg", category: "pergoly" },

  { src: "/sources/schodiska_a_zabradlia/1.jpg", category: "schody-zabradlia" },
  { src: "/sources/schodiska_a_zabradlia/121.jpg", category: "schody-zabradlia" },
  { src: "/sources/schodiska_a_zabradlia/432314200_376685958510307_4362093780546380355_n.jpg", category: "schody-zabradlia" },
  { src: "/sources/schodiska_a_zabradlia/IMG_5401-scaled.jpg", category: "schody-zabradlia" },
  { src: "/sources/schodiska_a_zabradlia/IMG_5420.jpg", category: "schody-zabradlia" },
  { src: "/sources/schodiska_a_zabradlia/IMG_7495.jpg", category: "schody-zabradlia" },

  { src: "/sources/masivne konstrukcie/konstrukcia.jpg", category: "konstrukcie" }
];

export default function ReferencesPage() {
  const [filter, setFilter] = useState<Category>("brany");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check if there is a filter parameter in the URL
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlFilter = urlParams.get("filter") as Category;
      if (urlFilter && ["vsetko", "brany", "schody-zabradlia", "pergoly", "konstrukcie"].includes(urlFilter)) {
        setFilter(urlFilter);
      }
    }
  }, []);

  const filteredImages = filter === "vsetko" ? images : images.filter(img => img.category === filter);

  // Lightbox handlers
  const openLightbox = (imageSrc: string) => {
    const index = filteredImages.findIndex(img => img.src === imageSrc);
    if (index !== -1) {
      setLightboxIndex(index);
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
      if (e.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[30vh] flex items-center justify-center overflow-hidden max-md:h-[18vh]">
          <div className="absolute inset-0 z-[1]">
            <img 
              src="/sources/brany/Screenshot 2025-10-04 at 01.03.15.jpg" 
              alt="F INOX STEEL referencie pozadie"
              className="w-full h-full object-cover object-[center_20%] opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/50 z-[2]" />
          </div>
          <div className="relative z-[3] text-center text-white w-[90vw] mx-auto">
             <div className="max-w-[1200px] mx-auto px-5 w-full">
                <h1 className="text-[3rem] font-bold m-0 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] max-md:text-[2.5rem] max-sm:text-[2rem]">
                   Referencie
                </h1>
             </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <FadeIn>
        <section className="py-[4rem] min-h-[500px] bg-background relative z-10 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(66,135,245,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(42,82,152,0.05)_0%,transparent_50%)] before:-z-10">
          <div className="max-w-[1200px] mx-auto w-full px-5">
            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-[1rem] mb-[3rem] px-[1rem] text-center max-md:gap-[0.5rem] max-md:px-[0.5rem]">
              <button 
                onClick={() => setFilter("brany")} 
                className={`relative overflow-hidden px-[24px] py-[12px] border-2 rounded-[50px] font-semibold text-[0.9rem] uppercase tracking-[0.5px] font-sans transition-all duration-300 max-md:px-[12px] max-md:py-[8px] max-md:text-[0.8rem]
                  ${filter === "brany" 
                    ? "bg-primary text-white border-primary shadow-[0_4px_15px_rgba(51,51,51,0.3)] -translate-y-[2px]" 
                    : "bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] border-[rgba(66,135,245,0.4)] text-accent hover:bg-primary hover:text-white hover:-translate-y-[2px]"}
                `}
              >
                Hliníkové brány
                {filter === "brany" && <div className="absolute inset-[-2px] bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent,transparent,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:400%_400%] animate-[shine_6s_ease-in-out_infinite] -z-10" />}
              </button>
              <button 
                onClick={() => setFilter("schody-zabradlia")} 
                className={`relative overflow-hidden px-[24px] py-[12px] border-2 rounded-[50px] font-semibold text-[0.9rem] uppercase tracking-[0.5px] font-sans transition-all duration-300 max-md:px-[12px] max-md:py-[8px] max-md:text-[0.8rem]
                  ${filter === "schody-zabradlia" 
                    ? "bg-primary text-white border-primary shadow-[0_4px_15px_rgba(51,51,51,0.3)] -translate-y-[2px]" 
                    : "bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] border-[rgba(66,135,245,0.4)] text-accent hover:bg-primary hover:text-white hover:-translate-y-[2px]"}
                `}
              >
                Schody/Zábradlia
                {filter === "schody-zabradlia" && <div className="absolute inset-[-2px] bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent,transparent,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:400%_400%] animate-[shine_6s_ease-in-out_infinite] -z-10" />}
              </button>
              <button 
                onClick={() => setFilter("pergoly")} 
                className={`relative overflow-hidden px-[24px] py-[12px] border-2 rounded-[50px] font-semibold text-[0.9rem] uppercase tracking-[0.5px] font-sans transition-all duration-300 max-md:px-[12px] max-md:py-[8px] max-md:text-[0.8rem]
                  ${filter === "pergoly" 
                    ? "bg-primary text-white border-primary shadow-[0_4px_15px_rgba(51,51,51,0.3)] -translate-y-[2px]" 
                    : "bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] border-[rgba(66,135,245,0.4)] text-accent hover:bg-primary hover:text-white hover:-translate-y-[2px]"}
                `}
              >
                Pergoly
                {filter === "pergoly" && <div className="absolute inset-[-2px] bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent,transparent,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:400%_400%] animate-[shine_6s_ease-in-out_infinite] -z-10" />}
              </button>
              <button 
                onClick={() => setFilter("konstrukcie")} 
                className={`relative overflow-hidden px-[24px] py-[12px] border-2 rounded-[50px] font-semibold text-[0.9rem] uppercase tracking-[0.5px] font-sans transition-all duration-300 max-md:px-[12px] max-md:py-[8px] max-md:text-[0.8rem]
                  ${filter === "konstrukcie" 
                    ? "bg-primary text-white border-primary shadow-[0_4px_15px_rgba(51,51,51,0.3)] -translate-y-[2px]" 
                    : "bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] border-[rgba(66,135,245,0.4)] text-accent hover:bg-primary hover:text-white hover:-translate-y-[2px]"}
                `}
              >
                Konštrukcie
                {filter === "konstrukcie" && <div className="absolute inset-[-2px] bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.3),transparent,transparent,transparent,rgba(255,255,255,0.3),transparent)] bg-[length:400%_400%] animate-[shine_6s_ease-in-out_infinite] -z-10" />}
              </button>
            </div>
          </div>

          <div className="w-full">
            <motion.div layout className="grid grid-cols-3 gap-[5px] mb-[4rem] px-[5px] max-w-[1500px] mx-auto min-h-[200px] max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-[3px] max-md:px-[3px] max-sm:gap-[5px] max-sm:px-[5px]">
              <AnimatePresence>
                {filteredImages.map((img, i) => (
                  <motion.div
                    layout
                    key={img.src}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-gradient-to-br from-[rgba(42,82,152,0.15)] to-[rgba(30,60,114,0.1)] rounded-none overflow-hidden border border-[rgba(66,135,245,0.2)] shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer min-h-[250px] group max-md:min-h-[180px] max-sm:min-h-[240px]"
                    onClick={() => openLightbox(img.src)}
                  >
                    <img 
                      src={img.src} 
                      alt={`F INOX STEEL ${img.category}`} 
                      className="w-full h-full object-cover rounded-none transition-transform duration-300 scale-[1.01] group-hover:scale-[1.11] min-h-[250px] max-md:min-h-[180px] max-sm:min-h-[240px]"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
        </FadeIn>

      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-[5px]"
            onClick={closeLightbox}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center animate-[lightboxZoom_0.3s_ease] group pointer-events-none">
              
              <button 
                className="fixed top-[20px] right-[20px] w-[50px] h-[50px] rounded-full border-none bg-black/70 text-white flex items-center justify-center cursor-pointer z-[10001] transition-all hover:bg-white/20 hover:rotate-90 pointer-events-auto max-md:w-[40px] max-md:h-[40px] max-md:top-[15px] max-md:right-[15px]" 
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              >
                <X className="w-6 h-6" />
              </button>

              <button 
                className="fixed left-[20px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full border-none bg-black/50 text-white flex items-center justify-center cursor-pointer z-[10002] transition-all hover:bg-black/80 hover:scale-110 pointer-events-auto max-md:w-[50px] max-md:h-[50px] max-md:left-[10px]"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <img 
                src={filteredImages[lightboxIndex].src} 
                alt="Fullscreen image" 
                className="max-w-[90vw] max-h-[90vh] object-contain shadow-[0_20px_40px_rgba(0,0,0,0.3)] pointer-events-auto cursor-default"
                onClick={(e) => e.stopPropagation()}
              />

              <button 
                className="fixed right-[20px] top-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full border-none bg-black/50 text-white flex items-center justify-center cursor-pointer z-[10002] transition-all hover:bg-black/80 hover:scale-110 pointer-events-auto max-md:w-[50px] max-md:h-[50px] max-md:right-[10px]"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes shine {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
        @keyframes lightboxZoom {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
