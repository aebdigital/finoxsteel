"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("finox-cookie-prefs");
    if (saved) {
      setPreferences(JSON.parse(saved));
    } else {
      setShowBanner(true); // Show banner if first time
    }

    // Listen for custom event from footer
    const openSettings = () => setShowSettings(true);
    window.addEventListener("open-cookies-settings", openSettings);
    return () => window.removeEventListener("open-cookies-settings", openSettings);
  }, []);

  useEffect(() => {
    // Optionally update document body class or load analytics scripts based on preferences here
    if (preferences.analytics) {
      // Intialize GA etc
    }
  }, [preferences]);

  const handleAcceptAll = () => {
    const allPrefs = { necessary: true, analytics: true, marketing: true };
    setPreferences(allPrefs);
    localStorage.setItem("finox-cookie-prefs", JSON.stringify(allPrefs));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("finox-cookie-prefs", JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-[9998] p-4 bg-gradient-to-t from-black to-black/90 backdrop-blur-md border-t border-white/10 shadow-2xl"
          >
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-start md:items-center gap-3">
                <div className="p-2 bg-secondary/20 rounded-full shrink-0">
                  <Cookie className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-white/80 text-sm md:text-[0.95rem] leading-relaxed max-w-3xl">
                  Táto webová stránka používa súbory cookies na zlepšenie vášho zážitku z prehliadania a na analýzu našej návštevnosti. Kliknutím na "Prijať všetko" súhlasíte s používaním všetkých cookies.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 md:flex-none px-4 py-2 border border-white/20 text-white rounded-full text-[0.85rem] font-semibold hover:bg-white/10 transition-colors"
                >
                  Nastavenia
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 md:flex-none px-6 py-2 bg-secondary text-primary rounded-full text-[0.85rem] font-bold shadow-lg hover:shadow-secondary/30 transition-all hover:-translate-y-0.5"
                >
                  Prijať všetko
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSettings(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#242936] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-primary/30">
                <div className="flex items-center gap-3">
                  <Cookie className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-bold text-white m-0">Nastavenia Cookies</h2>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex flex-col gap-6 max-h-[60vh]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-white font-semibold text-[1.1rem] mb-1">Nevyhnutné cookies</h3>
                    <p className="text-white/60 text-[0.9rem] leading-relaxed">Tieto cookies sú potrebné pre správne fungovanie webovej stránky a nemožno ich vypnúť.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-not-allowed">
                    <div className="w-11 h-6 bg-secondary/50 rounded-full peer"></div>
                    <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full border border-gray-300 translate-x-[20px]"></div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 pt-6 border-t border-white/10">
                  <div>
                    <h3 className="text-white font-semibold text-[1.1rem] mb-1">Štatistické cookies</h3>
                    <p className="text-white/60 text-[0.9rem] leading-relaxed">Umožňujú nám počítať návštevy a zdroje návštevnosti, aby sme mohli merať a zlepšovať výkonnosť našej stránky.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={preferences.analytics} onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})} />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>

                <div className="flex items-start justify-between gap-4 pt-6 border-t border-white/10">
                  <div>
                    <h3 className="text-white font-semibold text-[1.1rem] mb-1">Marketingové cookies</h3>
                    <p className="text-white/60 text-[0.9rem] leading-relaxed">Tieto cookies môžu byť nastavené našimi reklamnými partnermi na zostavenie profilu vašich záujmov.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={preferences.marketing} onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})} />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[20px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                  </label>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 flex items-center justify-end gap-3 bg-primary/30">
                <button
                  onClick={handleSaveSettings}
                  className="px-6 py-2.5 border border-white/20 text-white rounded-full text-[0.9rem] font-semibold hover:bg-white/10 transition-colors"
                >
                  Uložiť výber
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 bg-secondary text-primary rounded-full text-[0.9rem] font-bold shadow-lg hover:shadow-secondary/30 transition-all hover:-translate-y-0.5"
                >
                  Prijať všetko
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
