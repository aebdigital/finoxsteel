import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <HeroSlider />

      {/* About Section */}
      <FadeIn>
      <section id="about" className="relative py-[100px] bg-background z-10 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(66,135,245,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(42,82,152,0.05)_0%,transparent_50%)] before:-z-10">
        <div className="max-w-[95%] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-[3.1rem] md:text-[5rem] font-bold text-left text-accent [text-shadow:0_4px_12px_rgba(66,135,245,0.3)]">
                  O nás
                </h2>
              </div>
              <div className="flex flex-col gap-[15px]">
                <p className="text-[1.1rem] leading-[1.6] text-white/70 font-light m-0">
                  F INOX STEEL je rodinná firma špecializujúca sa na výrobu a montáž hliníkových brán, zábradlí, kovových konštrukcií, schodísk a pergol. Naše produkty sú vyrobené z kvalitného hliníka, nerezu a ocele, a sú navrhnuté tak, aby spájali odolnosť, funkčnosť a moderný dizajn.
                </p>
              </div>
            </div>
            
            <div className="relative mt-8 md:mt-0">
              <img 
                src="/sources/brany/Screenshot 2025-10-04 at 01.02.22.jpg" 
                alt="F INOX STEEL kovové práce" 
                className="w-full h-[250px] md:h-[500px] object-cover rounded-none"
              />
              <div className="static md:absolute md:-top-[30px] md:-right-[30px] flex flex-col gap-[20px] mt-8 md:mt-0 w-full md:w-auto">
                <div className="flex items-center gap-[20px] p-[25px] rounded-none min-w-[250px] bg-gradient-to-br from-[rgba(30,60,114,0.95)] to-[rgba(42,82,152,0.95)] text-white border border-[rgba(66,135,245,0.3)] shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <div className="flex-shrink-0">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M12 36h24V16L24 8 12 16v20zM16 32v-6h4v6h-4zM28 32v-6h4v6h-4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[2.1rem] md:text-[2.5rem] font-bold leading-[0.8] mb-[5px]">500+</div>
                    <div className="text-[0.9rem] opacity-90 uppercase tracking-[0.5px]">realizovaných konštrukcií</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-[20px] p-[25px] rounded-none min-w-[250px] bg-gradient-to-br from-secondary to-[#f7c93d] text-primary border border-secondary shadow-[0_8px_24px_rgba(245,197,41,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
                  <div className="flex-shrink-0">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <path d="M24 4L28 16h12l-10 8 4 12-10-8-10 8 4-12-10-8h12l4-12z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-[2.1rem] md:text-[2.5rem] font-bold leading-[0.8] mb-[5px]">8</div>
                    <div className="text-[0.9rem] opacity-90 uppercase tracking-[0.5px]">rokov na trhu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] mt-[40px] md:mt-[60px] max-w-full md:max-w-[95%] mx-auto">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] p-[25px] rounded-[12px] border-l-[4px] border-l-secondary border border-[rgba(66,135,245,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(66,135,245,0.15)] hover:border-[rgba(66,135,245,0.4)] hover:bg-gradient-to-br hover:from-[rgba(42,82,152,0.15)] hover:to-[rgba(30,60,114,0.1)]">
              <div className="w-[50px] h-[50px] bg-secondary rounded-[10px] flex items-center justify-center mb-[15px]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-[1.3rem] font-semibold text-accent mb-[10px]">Ako to u nás funguje?</h4>
              <p className="text-[1rem] leading-[1.6] text-white/70 m-0">Celkom jednoducho. Stačí nás kontaktovať s vašou predstavou. Radi s vami preberieme detaily a vypracujeme nezáväznú cenovú ponuku. Tú vám doručíme do 48 hodín spolu s návrhom riešenia a našimi odporúčaniami.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] p-[25px] rounded-[12px] border-l-[4px] border-l-secondary border border-[rgba(66,135,245,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(66,135,245,0.15)] hover:border-[rgba(66,135,245,0.4)] hover:bg-gradient-to-br hover:from-[rgba(42,82,152,0.15)] hover:to-[rgba(30,60,114,0.1)]">
              <div className="w-[50px] h-[50px] bg-secondary rounded-[10px] flex items-center justify-center mb-[15px]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-white">
                  <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="text-[1.3rem] font-semibold text-accent mb-[10px]">Kvalita na 1. mieste</h4>
              <p className="text-[1rem] leading-[1.6] text-white/70 m-0">Zodpovedáme za kvalitu materiálov ako aj odvedenú prácu. Používame výhradne overené materiály. Povrchy upravujeme práškovou farbou, ktorú vypaľujeme pri 180 °C. Výsledkom je vysoká odolnosť, dlhá životnosť a elegantný vzhľad.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-[rgba(42,82,152,0.1)] to-[rgba(30,60,114,0.05)] p-[25px] rounded-[12px] border-l-[4px] border-l-secondary border border-[rgba(66,135,245,0.2)] transition-all duration-300 backdrop-blur-[10px] hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(66,135,245,0.15)] hover:border-[rgba(66,135,245,0.4)] hover:bg-gradient-to-br hover:from-[rgba(42,82,152,0.15)] hover:to-[rgba(30,60,114,0.1)]">
              <div className="w-[50px] h-[50px] bg-secondary rounded-[10px] flex items-center justify-center mb-[15px]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-white">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2"/>
                </svg>
              </div>
              <h4 className="text-[1.3rem] font-semibold text-accent mb-[10px]">Konzultácia</h4>
              <p className="text-[1rem] leading-[1.6] text-white/70 m-0">Pred realizáciou zabezpečujeme konzultáciu technického a dizajnového návrhu. Pri nosných konštrukciách zabezpečíme architektonický alebo statický posudok či 3D vizualizáciu. Spolu nájdeme najlepšie riešenie.</p>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Gallery Section */}
      <FadeIn delay={0.2}>
      <section id="gallery" className="relative py-[80px] pb-[100px] bg-[#111] overflow-hidden z-10 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,rgba(66,135,245,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(42,82,152,0.05)_0%,transparent_50%)] before:-z-10 after:absolute after:top-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-[rgba(66,135,245,0.3)] after:to-transparent">
        <div className="max-w-[95%] mx-auto px-5">
          <h2 className="text-[5rem] font-bold text-left mb-[50px] text-accent p-0 [text-shadow:0_4px_12px_rgba(66,135,245,0.3)] leading-tight">
            Galéria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-fr gap-[10px] md:gap-[5px] w-full">
            {/* Gallery Item 1 */}
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/brany/76.jpg" alt="F INOX STEEL - hliníkové brány" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/schodiska_a_zabradlia/432314200_376685958510307_4362093780546380355_n.jpg" alt="F INOX STEEL - zábradlia" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/pergoly/Screenshot 2025-10-04 at 01.07.28.png" alt="F INOX STEEL - pergoly" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/schodiska_a_zabradlia/1.jpg" alt="F INOX STEEL - kovové práce" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/brany/Screenshot 2025-10-04 at 01.02.22.jpg" alt="F INOX STEEL - hliníkové brány" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/pergoly/Screenshot 2025-10-04 at 01.07.39.png" alt="F INOX STEEL - pergoly" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/schodiska_a_zabradlia/schody.jpg" alt="F INOX STEEL - zábradlia" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/pergoly/Screenshot 2025-10-04 at 01.07.22.png" alt="F INOX STEEL - pergoly" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/brany/IMG_7523.jpg" alt="F INOX STEEL - hliníkové brány" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/pergoly/Screenshot 2025-10-04 at 01.07.51.png" alt="F INOX STEEL - pergoly" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden group">
              <Link href="/referencie" className="block text-inherit no-underline">
                 <div className="relative overflow-hidden h-[250px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.03]">
                    <img src="/sources/schodiska_a_zabradlia/IMG_5401-scaled.jpg" alt="F INOX STEEL - kovové práce" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" loading="lazy" />
                 </div>
              </Link>
            </div>
            <div className="relative overflow-hidden flex items-center justify-center h-[250px] bg-primary bg-cover bg-center transition-all duration-300 group">
              <Link href="/referencie" className="flex items-center justify-center w-full h-full text-white no-underline">
                 <div className="text-center flex flex-col items-center gap-[15px] transition-transform duration-300 group-hover:scale-110">
                    <h3 className="text-[18px] font-bold uppercase tracking-[1px] m-0">Všetky projekty</h3>
                    <div className="opacity-80 transition-transform duration-300 group-hover:translate-x-[5px]">
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    </div>
                 </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
      </FadeIn>

    </main>
  );
}
