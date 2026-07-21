import React, { useEffect, useState } from 'react';
import { openWhatsApp, useLang } from '../i18n';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#features', label: t.nav.features },
    { href: '#how', label: t.nav.how },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[100] w-[94%] max-w-5xl px-4 md:px-6 py-3 rounded-full transition-all duration-500 border ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl border-ink/10 shadow-lg'
          : 'bg-transparent border-transparent'
      } flex justify-between items-center gap-3`}
    >
      <a href="#" className="font-sans font-extrabold text-xl md:text-2xl tracking-tighter text-ink">
        Lounge<span className="text-signal">Link</span>
      </a>

      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-ink">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-signal transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <div className="flex items-center rounded-full border border-ink/10 bg-white/60 p-0.5 font-mono text-[10px] font-bold">
          {['bs', 'en'].map((code) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`px-2.5 py-1.5 rounded-full uppercase transition-colors ${
                lang === code ? 'bg-ink text-white' : 'text-ink/50 hover:text-ink'
              }`}
            >
              {code}
            </button>
          ))}
        </div>
        <button
          className="bg-signal text-white px-4 md:px-5 py-3 rounded-full text-[11px] font-bold uppercase tracking-wide hover:scale-[1.03] transition-transform active:scale-95 shadow-lg shadow-signal/25 whitespace-nowrap"
          onClick={() => openWhatsApp(t.whatsappDefault)}
        >
          {t.nav.cta}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
