"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{type: "success" | "error" | null, message: string}>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: data.message || "Správa bola úspešne odoslaná." });
        setFormData({ name: "", email: "", phone: "", projectType: "", message: "", privacy: false });
      } else {
        setStatus({ type: "error", message: data.message || "Vyskytla sa chyba pri odosielaní." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Vyskytla sa chyba. Skúste to prosím neskôr." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative h-[30vh] flex items-center justify-center overflow-hidden max-md:h-[18vh] ignore-texture">
          <div className="absolute inset-0 z-[1]">
            <img 
              src="/sources/brany/Screenshot 2025-10-04 at 01.03.15.jpg" 
              alt="F INOX STEEL kontakt"
              className="w-full h-full object-cover object-[center_20%] opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/50 z-[2]" />
          </div>
          <div className="relative z-[3] text-center text-white w-[90vw] mx-auto">
            <div className="max-w-[95%] mx-auto px-5 w-full">
              <h1 className="text-[3rem] font-bold m-0 [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] max-md:text-[2.5rem] max-sm:text-[2rem]">
                Kontakt
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Main Section */}
        <FadeIn>
        <section className="relative py-[80px] pb-[100px] bg-background z-10 max-md:py-[60px] max-md:pb-[80px] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_30%,rgba(66,135,245,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(42,82,152,0.05)_0%,transparent_50%)] before:-z-10 after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(66,135,245,0.02)_35px,rgba(66,135,245,0.02)_70px)] after:opacity-50 after:pointer-events-none">
          <div className="max-w-[95%] mx-auto px-5 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] max-md:gap-[40px]">
              {/* Form Section */}
              <div className="bg-gradient-to-br from-[rgba(42,82,152,0.15)] to-[rgba(30,60,114,0.1)] border border-[rgba(66,135,245,0.2)] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden relative backdrop-blur-[10px]">
                <div className="p-[50px] max-md:p-[40px_30px] max-sm:p-[25px_20px]">
                  <div className="mb-[40px]">
                    <div className="inline-flex items-center gap-[8px] bg-[rgba(245,197,41,0.1)] text-secondary px-[16px] py-[8px] rounded-[50px] text-[0.9rem] font-semibold mb-[20px] uppercase tracking-[0.5px]">
                      <Send className="w-5 h-5" />
                      <span>Bezplatná konzultácia</span>
                    </div>
                    <h3 className="text-[2.2rem] font-bold text-accent mb-[15px] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                      Napíšte nám o vašom projekte
                    </h3>
                    <p className="text-[1rem] leading-[1.6] text-white/70 m-0">
                      Vyplňte formulár a my sa vám ozveme do 24 hodín s prvotnou konzultáciou zdarma.
                    </p>
                  </div>

                  {status.type && (
                    <div className={`flex items-center gap-[15px] p-[18px_24px] rounded-[12px] text-[1rem] font-medium mb-[25px] animate-[slideIn_0.3s_ease] transition-opacity duration-300 ${status.type === 'success' ? 'bg-[rgba(16,185,129,0.1)] border-2 border-[rgba(16,185,129,0.3)] text-[#10b981] shadow-[0_4px_15px_rgba(16,185,129,0.2)]' : 'bg-[rgba(239,68,68,0.1)] border-2 border-[rgba(239,68,68,0.3)] text-[#ef4444] shadow-[0_4px_15px_rgba(239,68,68,0.2)]'}`}>
                      {status.type === 'success' ? <CheckCircle2 className="w-6 h-6 flex-shrink-0" /> : <AlertCircle className="w-6 h-6 flex-shrink-0" />}
                      <span>{status.message}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-[25px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-md:gap-[15px]">
                      <div className="flex flex-col gap-[8px]">
                        <label className="font-semibold text-accent text-[0.9rem] uppercase tracking-[0.5px]">Vaše meno *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="p-[15px_18px] border-2 border-[rgba(66,135,245,0.2)] rounded-[12px] text-[1rem] font-sans transition-all duration-300 bg-[rgba(30,60,114,0.05)] text-text focus:outline-none focus:border-secondary focus:bg-[rgba(30,60,114,0.1)] focus:shadow-[0_0_0_3px_rgba(245,197,41,0.15),0_0_15px_rgba(66,135,245,0.2)] placeholder-white/60" />
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <label className="font-semibold text-accent text-[0.9rem] uppercase tracking-[0.5px]">Email adresa *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="p-[15px_18px] border-2 border-[rgba(66,135,245,0.2)] rounded-[12px] text-[1rem] font-sans transition-all duration-300 bg-[rgba(30,60,114,0.05)] text-text focus:outline-none focus:border-secondary focus:bg-[rgba(30,60,114,0.1)] focus:shadow-[0_0_0_3px_rgba(245,197,41,0.15),0_0_15px_rgba(66,135,245,0.2)] placeholder-white/60" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-md:gap-[15px]">
                      <div className="flex flex-col gap-[8px]">
                        <label className="font-semibold text-accent text-[0.9rem] uppercase tracking-[0.5px]">Telefónne číslo</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="p-[15px_18px] border-2 border-[rgba(66,135,245,0.2)] rounded-[12px] text-[1rem] font-sans transition-all duration-300 bg-[rgba(30,60,114,0.05)] text-text focus:outline-none focus:border-secondary focus:bg-[rgba(30,60,114,0.1)] focus:shadow-[0_0_0_3px_rgba(245,197,41,0.15),0_0_15px_rgba(66,135,245,0.2)] placeholder-white/60" />
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <label className="font-semibold text-accent text-[0.9rem] uppercase tracking-[0.5px]">Typ projektu</label>
                        <select name="projectType" value={formData.projectType} onChange={handleChange} className="p-[15px_18px] border-2 border-[rgba(66,135,245,0.2)] rounded-[12px] text-[1rem] font-sans transition-all duration-300 bg-[rgba(30,60,114,0.05)] text-white focus:outline-none focus:border-secondary focus:bg-[rgba(30,60,114,0.1)] focus:shadow-[0_0_0_3px_rgba(245,197,41,0.15),0_0_15px_rgba(66,135,245,0.2)] cursor-pointer">
                          <option value="" className="text-black">Vyberte typ projektu</option>
                          <option value="brany" className="text-black">Hliníkové brány</option>
                          <option value="zabradlia" className="text-black">Zábradlia</option>
                          <option value="pergoly" className="text-black">Pergoly</option>
                          <option value="pristresky" className="text-black">Prístrešky</option>
                          <option value="konstrukcie" className="text-black">Kovové konštrukcie</option>
                          <option value="ine" className="text-black">Iné</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[8px]">
                      <label className="font-semibold text-accent text-[0.9rem] uppercase tracking-[0.5px]">Popíšte váš projekt *</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="Popíšte nám váš projekt, vaše predstavy, požiadavky a rozpočet..." className="p-[15px_18px] border-2 border-[rgba(66,135,245,0.2)] rounded-[12px] text-[1rem] font-sans transition-all duration-300 bg-[rgba(30,60,114,0.05)] text-text focus:outline-none focus:border-secondary focus:bg-[rgba(30,60,114,0.1)] focus:shadow-[0_0_0_3px_rgba(245,197,41,0.15),0_0_15px_rgba(66,135,245,0.2)] placeholder-white/60 resize-y min-h-[120px]"></textarea>
                    </div>

                    <div className="flex items-start gap-[12px] mt-[10px]">
                      <input required type="checkbox" name="privacy" id="privacy-checkbox" checked={formData.privacy} onChange={handleChange} className="w-[20px] h-[20px] m-0 accent-secondary shrink-0 mt-[2px]" />
                      <label htmlFor="privacy-checkbox" className="text-[0.9rem] text-white leading-[1.5] font-normal cursor-pointer">
                        Odoslaním formuláru súhlasím s <a href="/ochrana-osobnych-udajov" className="text-secondary underline font-semibold hover:text-white transition-colors">podmienkami ochrany osobných údajov</a>. *
                      </label>
                    </div>

                    <button disabled={isSubmitting} type="submit" className="inline-flex items-center gap-[10px] bg-gradient-to-br from-secondary to-[#f7c93d] text-primary border-none p-[18px_40px] rounded-[50px] text-[1rem] font-bold uppercase tracking-[1px] cursor-pointer transition-all duration-300 self-start mt-[15px] shadow-[0_8px_25px_rgba(245,197,41,0.3)] relative overflow-hidden group hover:-translate-y-[2px] disabled:opacity-60 disabled:cursor-not-allowed max-md:w-full max-md:justify-center max-md:self-stretch">
                      <Send className="w-5 h-5 z-10" />
                      <span className="z-10">{isSubmitting ? "Odosielam..." : "Získať bezplatnú ponuku"}</span>
                      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ease-in-out group-hover:left-[100%] z-0" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Info Section */}
              <div className="bg-gradient-to-br from-[rgba(30,60,114,0.95)] to-[rgba(42,82,152,0.95)] border border-[rgba(66,135,245,0.3)] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden relative">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(66,135,245,0.03)_10px,rgba(66,135,245,0.03)_20px),radial-gradient(circle_at_20%_50%,rgba(66,135,245,0.1)_0%,transparent_50%)] pointer-events-none opacity-100" />
                <div className="p-[50px] relative z-10 max-md:p-[40px_30px] max-sm:p-[25px_20px]">
                  <div className="mb-[40px]">
                    <h3 className="text-[2.2rem] font-bold text-white mb-[15px] leading-[1.2] max-md:text-[1.8rem] max-sm:text-[1.5rem]">
                      Kontaktné informácie
                    </h3>
                    <p className="text-[1rem] leading-[1.6] text-white/80 m-0">
                      Sme tu pre vás od pondelka do piatka a radi odpovieme na všetky vaše otázky.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[30px] mb-[40px]">
                    <div className="flex items-start gap-[20px] p-[25px] bg-white/5 rounded-[15px] border-l-[4px] border-l-secondary backdrop-blur-[10px] max-sm:flex-row max-sm:text-left max-sm:gap-[15px] max-sm:p-[20px]">
                      <div className="shrink-0 w-[50px] h-[50px] bg-secondary rounded-full flex items-center justify-center text-primary max-sm:w-[40px] max-sm:h-[40px]">
                        <MapPin className="w-6 h-6 stroke-2" />
                      </div>
                      <div className="flex-1 max-sm:text-left">
                        <h4 className="text-[1.1rem] font-bold text-secondary mb-[8px] uppercase tracking-[0.5px]">Adresa</h4>
                        <p className="text-white/90 mb-[5px] leading-[1.5] max-sm:text-left">Sládkovičova 61<br/>953 01 Zlaté Moravce<br/>Slovenská republika</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-[20px] p-[25px] bg-white/5 rounded-[15px] border-l-[4px] border-l-secondary backdrop-blur-[10px] max-sm:flex-row max-sm:text-left max-sm:gap-[15px] max-sm:p-[20px]">
                      <div className="shrink-0 w-[50px] h-[50px] bg-secondary rounded-full flex items-center justify-center text-primary max-sm:w-[40px] max-sm:h-[40px]">
                        <Phone className="w-6 h-6 stroke-2" />
                      </div>
                      <div className="flex-1 max-sm:text-left">
                        <h4 className="text-[1.1rem] font-bold text-secondary mb-[8px] uppercase tracking-[0.5px]">Telefón</h4>
                        <p className="text-white/90 mb-[5px] leading-[1.5] max-sm:text-left"><a href="tel:+421918843553" className="text-white/90 no-underline font-semibold transition-colors hover:text-secondary">+421 918 843 553</a></p>
                        <span className="text-[0.85rem] text-white/60 italic">Po-Pi: 8:00 - 17:00</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-[20px] p-[25px] bg-white/5 rounded-[15px] border-l-[4px] border-l-secondary backdrop-blur-[10px] max-sm:flex-row max-sm:text-left max-sm:gap-[15px] max-sm:p-[20px]">
                      <div className="shrink-0 w-[50px] h-[50px] bg-secondary rounded-full flex items-center justify-center text-primary max-sm:w-[40px] max-sm:h-[40px]">
                        <Mail className="w-6 h-6 stroke-2" />
                      </div>
                      <div className="flex-1 max-sm:text-left">
                        <h4 className="text-[1.1rem] font-bold text-secondary mb-[8px] uppercase tracking-[0.5px]">Email</h4>
                        <p className="text-white/90 mb-[5px] leading-[1.5] max-sm:text-left"><a href="mailto:info@finoxsteel.com" className="text-white/90 no-underline font-semibold transition-colors hover:text-secondary">info@finoxsteel.com</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Social and Company Info can go here if needed, keeping it clean as in UI */}
                  <div className="pt-[30px] border-t border-white/10">
                    <h4 className="text-[1.1rem] font-bold text-secondary mb-[20px] uppercase tracking-[0.5px]">Obchodné údaje</h4>
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex justify-between items-center p-[10px_15px] bg-white/5 rounded-[8px]">
                        <span className="font-semibold text-white/70 text-[0.9rem]">IČO:</span>
                        <span className="font-semibold text-white text-[0.9rem]">50954539</span>
                      </div>
                      <div className="flex justify-between items-center p-[10px_15px] bg-white/5 rounded-[8px]">
                        <span className="font-semibold text-white/70 text-[0.9rem]">DIČ:</span>
                        <span className="font-semibold text-white text-[0.9rem]">1079937485</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        </FadeIn>
      </main>

      <style jsx global>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
