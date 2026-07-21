import React from 'react';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp, useLang } from '../i18n';

const FinalCta = () => {
  const { t } = useLang();

  return (
    <section className="bg-ink py-28 md:py-40 px-6 md:px-8 text-white text-center relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,57,29,0.25) 0%, rgba(196,57,29,0) 70%)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tighter uppercase leading-tight">
          {t.finalCta.title}{' '}
          <span className="font-serif italic font-normal lowercase text-signal tracking-normal">
            {t.finalCta.titleAccent}
          </span>
        </h2>
        <p className="mt-6 text-white/50 text-lg">{t.finalCta.subtitle}</p>
        <button
          className="mt-10 group flex items-center gap-3 bg-signal text-white px-10 py-5 rounded-full font-bold tracking-wide text-lg transition-transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-signal/30"
          onClick={() => openWhatsApp(t.whatsappDefault)}
        >
          {t.finalCta.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FinalCta;
