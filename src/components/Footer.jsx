import React from 'react';
import { useLang } from '../i18n';

const Footer = () => {
  const { t } = useLang();

  const links = [
    { href: '#features', label: t.nav.features },
    { href: '#how', label: t.nav.how },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <footer className="bg-[#0D0D12] text-white pt-24 pb-10 px-6 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 border-b border-white/5 pb-16 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter uppercase mb-3">
            Lounge<span className="text-signal">Link</span>
          </h2>
          <p className="text-white/40 text-sm max-w-xs mb-4">{t.footer.tagline}</p>
          <div className="flex items-center gap-2 font-mono text-[10px] text-signal">
            <div className="w-2 h-2 bg-signal rounded-full animate-pulse" />
            v1.0
          </div>
        </div>
        <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center font-mono text-[9px] text-white/20 tracking-[0.5em] uppercase">
        {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;
