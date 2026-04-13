export const metadata = {
  title: "Ochrana osobných údajov | F INOX STEEL",
  description: "Zásady ochrany osobných údajov a používanie súborov cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-[140px] pb-20 bg-background min-h-screen text-foreground">
      <div className="max-w-[800px] mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-bold text-accent mb-10 leading-tight">
          Ochrana osobných údajov
        </h1>

        <div className="prose prose-invert max-w-none text-white/80 leading-relaxed font-sans">
          <div className="bg-white/5 p-6 rounded-xl mb-10 border border-white/10 shadow-sm text-[0.95rem]">
            <strong>Darina Fidesová - F INOX STEEL</strong><br />
            IČO: 50954539<br />
            DIČ: 1079937485<br /><br />
            
            <a href="https://maps.google.com/?q=Sl%C3%A1dkovi%C4%8Dova+61,+953+01+Zlat%C3%A9+Moravce" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">Sládkovičova 61, 953 01 Zlaté Moravce</a><br />
            Slovenská republika<br />
            E-mail: <a href="mailto:info@finoxsteel.com" className="text-secondary hover:underline">info@finoxsteel.com</a><br />
            Tel.: <a href="tel:+421918843553" className="text-secondary hover:underline">+421 918 843 553</a>
          </div>
          
          <p className="mb-6">Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>
          
          <h2 className="text-2xl font-bold text-accent mt-10 mb-4">I. Kontaktný formulár</h2>
          <p className="mb-4">Na stránke www.finoxsteel.com prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám:</p>
          <ul className="list-disc pl-5 mb-6 text-white/70">
            <li>Položiť otázku k našim produktom a službám</li>
            <li>Požiadať o cenovú ponuku</li>
          </ul>
          
          <p className="font-semibold mt-6 mb-2 text-white">Rozsah spracúvaných údajov:</p>
          <p className="mb-6 text-white/70">
            Meno a priezvisko<br />
            E-mailová adresa<br />
            Telefónne číslo<br />
            Správu
          </p>
          
          <p className="mb-4"><strong className="font-semibold text-white">Účel spracovania:</strong><br />Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
          
          <p className="mb-4"><strong className="font-semibold text-white">Právny základ:</strong><br />Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
          
          <p className="mb-10"><strong className="font-semibold text-white">Doba uchovávania:</strong><br />Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
          
          <h2 className="text-2xl font-bold text-accent mt-10 mb-4">II. Súbory cookies</h2>
          <p className="mb-4">Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
          <ul className="list-disc pl-5 mb-6 text-white/70">
            <li className="mb-2"><strong className="text-white">Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
            <li className="mb-2"><strong className="text-white">Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
          </ul>
          
          <p className="mb-10"><strong className="font-semibold text-white">Správa súhlasov:</strong><br />Používateľ môže kedykoľvek odvolať/upraviť súhlas s využívaním štatistických cookies prostredníctvom nastavení cookies odkazom v pätičke stránky.</p>
          
          <h2 className="text-2xl font-bold text-accent mt-10 mb-4">III. Práva dotknutej osoby</h2>
          <p className="mb-4">Podľa nariadenia GDPR máte nasledujúce práva:</p>
          <ul className="list-disc pl-5 mb-8 text-white/70">
            <li className="mb-2">Prístup k osobným údajom, ktoré spracúvame</li>
            <li className="mb-2">Oprava nepresných alebo neúplných údajov</li>
            <li className="mb-2">Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
            <li className="mb-2">Obmedzenie spracovania</li>
            <li className="mb-2">Prenosnosť údajov</li>
            <li className="mb-2">Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
            <li className="mb-2">Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
          </ul>
          
          <p className="mb-10">V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href="mailto:info@finoxsteel.com" className="text-secondary hover:underline">info@finoxsteel.com</a> alebo telefónnom čísle <a href="tel:+421918843553" className="text-secondary hover:underline">+421 918 843 553</a>.</p>
          
          <div className="bg-white/5 p-4 rounded-lg text-center mt-12 border border-white/10">
            <p className="font-medium text-white/80 m-0">Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2024.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
