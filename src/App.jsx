import React, { useEffect, useMemo, useState } from 'react';
import { LangContext, translations } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import TrustStrip from './components/TrustStrip';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

const App = () => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('loungelink-lang');
    return saved === 'en' ? 'en' : 'bs';
  });

  useEffect(() => {
    localStorage.setItem('loungelink-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const langValue = useMemo(() => ({ lang, setLang, t: translations[lang] }), [lang]);

  return (
    <LangContext.Provider value={langValue}>
      <div className="bg-paper">
        {/* GLOBAL NOISE */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]">
          {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="n">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#n)" />
          </svg> */}
        </div>

        <Navbar />
        <Hero />
        <Analytics />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <FinalCta />
        <Footer />
      </div>
    </LangContext.Provider>
  );
};

export default App;
