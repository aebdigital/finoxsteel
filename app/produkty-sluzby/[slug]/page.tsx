import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export const generateStaticParams = async () => {
  return [
    { slug: "brany" },
    { slug: "schody-zabradlia" },
    { slug: "pergoly" },
    { slug: "konstrukcie" }
  ];
};

const servicesList = [
  { id: "brany", title: "Hliníkové brány" },
  { id: "schody-zabradlia", title: "Schody a Zábradlia" },
  { id: "pergoly", title: "Pergoly" },
  { id: "konstrukcie", title: "Oceľové konštrukcie" }
];

const serviceDetails: Record<string, { title: string, heroBg: string }> = {
  "brany": {
    title: "Hliníkové brány",
    heroBg: "/sources/brany/Screenshot 2025-10-04 at 01.03.15.jpg"
  },
  "schody-zabradlia": {
    title: "Schody a Zábradlia",
    heroBg: "/sources/schodiska_a_zabradlia/432314200_376685958510307_4362093780546380355_n.jpg"
  },
  "pergoly": {
    title: "Pergoly",
    heroBg: "/sources/pergoly/pergola.jpg"
  },
  "konstrukcie": {
    title: "Oceľové konštrukcie",
    heroBg: "/sources/masivne konstrukcie/konstrukcia.jpg"
  }
};

const branyVariants = [
  {
    name: "CLASSIC",
    desc: "Nadčasový „kovaný“ dizajn v modernom hliníkovom prevedení. Tradičný vzhľad bez kompromisov v údržbe a životnosti.",
    img: "/sources/brany/77.jpg"
  },
  {
    name: "Z-LINE",
    desc: "Lamely v tvare „Z“ vytvárajú žalúziový efekt s dôrazom na súkromie. Funkčné riešenie, ktoré zároveň pôsobí dynamicky a moderne.",
    img: "/sources/brany/260839579_4686508461372530_2505623606432666679_n.jpg"
  },
  {
    name: "VERTICAL",
    desc: "Bezrámový dizajn s vertikálnymi lamelami pre maximálne čistý a moderný výraz. Minimalizmus, ktorý zvýrazní architektúru domu.",
    img: "/sources/brany/479315987_596883256490575_8014104618849694477_n.jpg"
  },
  {
    name: "LINEA AIR",
    desc: "Horizontálne lamely s jemným rozostupom prinášajú rovnováhu medzi súkromím a vzdušnosťou. Moderné riešenie s ľahkým vizuálnym efektom.",
    img: "/sources/brany/IMG_7341.jpg"
  },
  {
    name: "PERFO",
    desc: "Perforovaný hliníkový plech v ráme ponúka jedinečnú hru svetla a tieňa. Moderný dizajn s výrazným architektonickým charakterom.",
    img: "/sources/brany/perfo.jpg"
  },
  {
    name: "LINEA",
    desc: "Na tesno uložené horizontálne lamely vytvárajú čistý a kompaktný vzhľad. Možnosť farebných kombinácií pre dokonalé zladenie s architektúrou.",
    img: "/sources/brany/IMG_7156.jpg"
  },
  {
    name: "LASER CUT",
    desc: "Precízne laserom vypálený vzor do 3 mm hliníkového plechu. Dizajn na mieru – od minimalistických línií až po unikátne, individuálne motívy.",
    img: "/sources/brany/290161775_5337746472915389_8790292686262939797_n.jpg"
  }
];


export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const serviceDef = serviceDetails[slug];

  if (!serviceDef) {
    notFound();
  }

  return (
    <main className="bg-[#0f1014] min-h-screen text-white">
      {/* Dynamic Exact Hero Map */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-transparent max-md:h-[25vh]">
        <div className="absolute inset-0 z-[1] bg-transparent">
          <Image 
            src={serviceDef.heroBg} 
            alt={serviceDef.title}
            fill
            priority
            className="object-cover object-center opacity-100 block z-[1]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1014]/90 via-[#0f1014]/60 to-transparent z-[2]" />
        </div>
        <div className="relative z-[3] w-[90vw] mx-auto max-md:w-[95vw]">
          <div className="max-w-[1400px] mx-auto px-5 w-full pt-10">
            <h1 className="text-[3rem] font-bold m-0 text-white max-md:text-[2rem]">
              {serviceDef.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Primary Structural Flow */}
      <section className="relative z-10 w-[90vw] mx-auto max-w-[1400px] px-5 py-16 max-md:w-[95vw] max-md:py-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Persistent Left Sidebar Map */}
          <aside className="lg:w-[320px] flex-shrink-0">
            <div className="sticky top-[120px]">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-6">Ďalšie služby</h3>
              <nav className="flex flex-col gap-2">
                {servicesList.map((svc) => {
                  const isActive = svc.id === slug;
                  return (
                    <Link 
                      key={svc.id} 
                      href={`/produkty-sluzby/${svc.id}`}
                      className={`block px-5 py-4 rounded-lg transition-all duration-300 font-medium ${
                        isActive 
                          ? "bg-[rgba(255,204,0,0.1)] text-[#FFCC00] border border-[rgba(255,204,0,0.2)]" 
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      {svc.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Dynamic Core Context */}
          <div className="flex-1 min-w-0">
            <FadeIn>
              <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prispôsobené pre Vás</h2>
                <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
                  {slug === "brany" 
                    ? "Naše hliníkové brány kombinujú precízne strojové spracovanie s nadčasovým dizajnom. Ponúkame širokú paletu konfigurácií a povrchových úprav, vďaka čomu brána dokonale splynie s existujúcou architektúrou vášho domova."
                    : `Naša kategória ${serviceDef.title.toLowerCase()} prináša profesionálne riešenia na kľúč. Spájame odolné prvotriedne materiály s precíznou remeselnou výrobou, aby sme zaistili maximálnu bezpečnosť, trvácnosť a dokonalý vizuálny dojem.`}
                </p>
              </div>
            </FadeIn>

            {/* Custom Variants Module -> Brany Only */}
            {slug === "brany" && (
              <div className="flex flex-col gap-12 mb-16">
                {branyVariants.map((variant, index) => (
                  <FadeIn key={variant.name}>
                    <div className="flex flex-col md:flex-row gap-8 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 transition-colors">
                      <div className="md:w-2/5 overflow-hidden relative min-h-[250px]">
                        <Image 
                          src={variant.img} 
                          alt={variant.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                        <div className="text-[#FFCC00] text-sm font-bold tracking-widest mb-3 uppercase">Varianta dizajnu</div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{variant.name}</h3>
                        <p className="text-white/70 leading-relaxed">{variant.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}

            {/* Placeholder Visuals for other sections */}
            {slug !== "brany" && (
              <FadeIn>
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative border border-white/10 mb-16">
                  <Image 
                    src={serviceDef.heroBg} 
                    alt={serviceDef.title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014] via-transparent to-transparent" />
                </div>
              </FadeIn>
            )}

            {/* Gallery Universal Redirect Footer */}
            <FadeIn>
              <div className="border-t border-white/10 pt-16 mt-8 pb-8 flex flex-col items-start">
                <h3 className="text-2xl font-bold mb-4">Galéria realizácií</h3>
                <p className="text-white/60 mb-8 max-w-2xl">
                  Pozrite si naše dokončené projekty a čerpajte inšpiráciu pre váš vlastný domov. Každý detail prispôsobujeme jedinečným požiadavkám klienta.
                </p>
                <Link 
                  href={`/referencie?filter=${slug}`}
                  className="group inline-flex items-center gap-3 bg-transparent border border-white/30 text-white font-medium px-8 py-4 rounded-lg hover:border-[#FFCC00] hover:text-[#FFCC00] transition-colors duration-300"
                >
                  Otvoriť galériu {serviceDef.title.toLowerCase()}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </main>
  );
}
