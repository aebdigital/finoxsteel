import Link from "next/link";
import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Produkty a služby - Hliníkové brány a konštrukcie | F INOX STEEL Zlaté Moravce",
  description: "Kompletná ponuka hliníkových brán, zábradlí, pergol, schodov a kovových konštrukcií. Výroba a montáž z hliníka, nerezu a ocele v Zlatých Moravciach.",
};

const services = [
  {
    id: "brany",
    title: "Hliníkové brány",
    desc: "Posuvné, dvojkrídlové a automatické brány z hliníka",
    img: "/sources/brany/service-brana.jpg",
    filter: "brany"
  },
  {
    id: "schody-zabradlia",
    title: "Schody/Zábradlia",
    desc: "Kovové schodiská a hliníkové zábradlia pre schody a terasy",
    img: "/sources/schodiska_a_zabradlia/432314200_376685958510307_4362093780546380355_n.jpg",
    filter: "schody-zabradlia"
  },
  {
    id: "pergoly",
    title: "Pergoly",
    desc: "Hliníkové pergoly s lamelovou strechou a kovové prístrešky",
    img: "/sources/pergoly/pergola.jpg",
    filter: "pergoly"
  },
  {
    id: "konstrukcie",
    title: "Konštrukcie",
    desc: "Oceľové konštrukcie a zámočnícke práce",
    img: "/sources/masivne konstrukcie/konstrukcia.jpg",
    filter: "konstrukcie"
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden bg-transparent max-md:h-[18vh]">
        <div className="absolute inset-0 z-[1] bg-transparent">
          <img 
            src="/sources/brany/Screenshot 2025-10-04 at 01.03.15.jpg" 
            alt="F INOX STEEL hliníkové brány a konštrukcie"
            className="w-full h-full object-cover object-[center_20%] opacity-100 block z-[1]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/50 z-[2] pointer-events-none" />
        </div>
        <div className="relative z-[3] text-center text-white w-[90vw] mx-auto max-md:w-[95vw]">
          <div className="max-w-[1200px] mx-auto px-5 w-full">
            <h1 className="text-[3rem] font-bold m-0 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] text-white max-md:text-[2rem]">
              Naše služby
            </h1>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <FadeIn>
      <section className="py-[6rem] pb-[4rem] bg-background relative z-10 max-md:pt-[50px] max-md:pb-[2rem] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(66,135,245,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(42,82,152,0.05)_0%,transparent_50%)] before:-z-10">
        <div className="w-full px-5">
          <div className="grid grid-cols-2 gap-[5px] mb-[6rem] max-w-[1400px] mx-auto max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[2rem] max-md:mb-[4rem]">
            {services.map((svc) => (
              <div key={svc.id} className="relative overflow-hidden h-[40vh] min-h-[350px] rounded-none transition-transform duration-300 hover:-translate-y-[5px] max-md:h-[30vh]">
                <Link href={`/referencie?filter=${svc.filter}`} className="block w-full h-full text-inherit no-underline group/card">
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={svc.img} 
                      alt={svc.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover/card:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-[3rem] pb-[2rem] px-[2rem] text-white max-md:p-[2rem_1.5rem_1.5rem]">
                      <h3 className="text-[1.89rem] font-bold mb-[0.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.7)] leading-[1.2] max-md:text-[1.26rem]">
                        {svc.title}
                      </h3>
                      <p className="text-[0.95rem] opacity-90 m-0 [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)] leading-[1.4] max-md:text-[0.9rem]">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

    </main>
  );
}
