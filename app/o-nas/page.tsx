import Link from "next/link";
import { Metadata } from "next";
import { Mail } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "O nás - F INOX STEEL | Hliníkové brány a kovové konštrukcie Zlaté Moravce",
  description: "F INOX STEEL je rodinná firma špecializujúca sa na výrobu hliníkových brán, zábradlí, pergol a kovových konštrukcií. Kvalita, precíznosť a individuálny prístup.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden max-md:h-[18vh]">
        <div className="absolute inset-0 z-[1]">
          <img 
            src="/sources/brany/Screenshot 2025-10-04 at 01.03.15.jpg" 
            alt="F INOX STEEL o nás"
            className="w-full h-full object-cover object-[center_20%] opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/50 z-[2]" />
        </div>
        <div className="relative z-[3] text-center text-white w-[90vw] mx-auto">
          <div className="max-w-[1200px] mx-auto px-5 w-full">
            <h1 className="text-[3rem] font-bold m-0 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] max-md:text-[2.5rem] max-sm:text-[2rem]">
              O nás
            </h1>
          </div>
        </div>
      </section>

      {/* About Main Section */}
      <FadeIn>
      <section className="py-[80px] bg-background max-md:py-[60px] max-sm:py-[50px] relative z-10 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(66,135,245,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(42,82,152,0.05)_0%,transparent_50%)] before:-z-10">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            <div className="w-full">
              <h2 className="text-[2.2rem] font-bold text-accent mb-[2rem] leading-[1.3] [text-shadow:0_4px_12px_rgba(66,135,245,0.3)] max-md:text-[1.8rem] max-sm:text-[1.5rem] max-sm:mb-[1.5rem]">
                F INOX STEEL - Váš partner pre hliníkové brány a kovové konštrukcie
              </h2>
              <p className="text-[1.1rem] leading-[1.6] text-white/70 mb-[3rem] font-light m-0 max-md:text-[1rem] max-md:mb-[2rem] max-sm:text-[0.95rem]">
                F INOX STEEL je rodinná firma špecializujúca sa na výrobu a montáž hliníkových brán, zábradlí, kovových konštrukcií, schodísk a pergol. Naše produkty sú vyrobené z kvalitného hliníka, nerezu a ocele, a sú navrhnuté tak, aby spájali odolnosť, funkčnosť a moderný dizajn.
              </p>
              
              <div className="mb-[3rem] max-sm:mb-[2rem]">
                <div className="mb-[1rem] pb-[1rem] border-b border-[rgba(66,135,245,0.2)] max-md:mb-[1.5rem] max-md:pb-[1.5rem] max-sm:pb-[1rem]">
                  <h3 className="text-[1.3rem] font-semibold text-accent mb-[0.8rem] max-md:text-[1.1rem]">Kvalita a precíznosť</h3>
                  <p className="text-[1rem] leading-[1.5] text-white/70 m-0">Používame len kvalitné materiály a najmodernejšie technológie pre dosiahnutie najlepších výsledkov.</p>
                </div>
                <div className="mb-[1rem] pb-[1rem] border-b border-[rgba(66,135,245,0.2)] max-md:mb-[1.5rem] max-md:pb-[1.5rem] max-sm:pb-[1rem]">
                  <h3 className="text-[1.3rem] font-semibold text-accent mb-[0.8rem] max-md:text-[1.1rem]">Profesionálny tým</h3>
                  <p className="text-[1rem] leading-[1.5] text-white/70 m-0">Náš tím skúsených zváračov a technikov zabezpečí profesionálnu realizáciu každého projektu.</p>
                </div>
                <div className="mb-0 pb-0 border-b-0 max-md:mb-[1.5rem] max-md:pb-[1.5rem] max-sm:pb-0">
                  <h3 className="text-[1.3rem] font-semibold text-accent mb-[0.8rem] max-md:text-[1.1rem]">Individuálny prístup</h3>
                  <p className="text-[1rem] leading-[1.5] text-white/70 m-0">Každý projekt realizujeme na mieru podľa špecifických požiadaviek našich zákazníkov.</p>
                </div>
              </div>
              
              <div>
                <Link 
                  href="/kontakt" 
                  className="inline-flex items-center gap-[8px] bg-gradient-to-br from-primary to-[#3a4070] text-white px-[25px] py-[12px] rounded-[25px] text-[0.95rem] font-semibold no-underline uppercase tracking-[0.5px] transition-all duration-300 font-sans shadow-[0_8px_25px_rgba(46,51,92,0.3)] hover:-translate-y-[2px] group"
                >
                  <Mail className="w-[16px] h-[16px] stroke-white stroke-2 group-hover:stroke-white transition-colors" />
                  Napíšte nám
                </Link>
              </div>
            </div>
            
            <div className="relative w-full h-auto flex flex-col justify-center items-center mt-8 md:mt-0">
              <div className="relative overflow-hidden group w-full h-auto w-full max-w-[600px]">
                <img 
                  src="/sources/pergoly/Screenshot 2025-10-04 at 01.07.22.png" 
                  alt="F INOX STEEL hliníkové pergoly"
                  className="w-full h-auto max-h-[600px] object-cover object-center transition-transform duration-300 group-hover:scale-[1.05] max-md:h-[400px] max-sm:h-[300px]"
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      </FadeIn>

    </main>
  );
}
