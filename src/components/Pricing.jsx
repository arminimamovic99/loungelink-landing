import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { openWhatsApp, useLang } from '../i18n';
import SectionHeading from './SectionHeading';

const Pricing = () => {
  const { t } = useLang();

  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-8 bg-white scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={t.pricing.eyebrow} title={t.pricing.title} accent={t.pricing.titleAccent} />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {t.pricing.plans.map((plan, idx) => {
            const isPremium = idx === 1;
            return (
              <div
                key={plan.name}
                className={`relative rounded-[2.5rem] p-8 md:p-10 flex flex-col border ${
                  isPremium
                    ? 'bg-ink text-white border-white/5 shadow-2xl shadow-ink/25'
                    : 'bg-paper text-ink border-ink/5'
                }`}
              >
                {isPremium && (
                  <span className="absolute -top-3.5 left-10 bg-signal text-white font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    {t.pricing.recommended}
                  </span>
                )}

                <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tighter mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${isPremium ? 'text-white/50' : 'text-ink/55'}`}>{plan.desc}</p>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="font-sans font-black text-6xl tracking-tighter">{plan.price}</span>
                  <span className={`font-mono text-xs uppercase tracking-widest ${isPremium ? 'text-white/40' : 'text-ink/40'}`}>
                    {t.pricing.perMonth}
                  </span>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex gap-2.5 items-start text-sm ${isPremium ? 'text-white/70' : 'text-ink/70'}`}>
                      <Check className="text-signal shrink-0 mt-0.5" size={16} strokeWidth={3} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold tracking-wide transition-transform hover:scale-[1.02] active:scale-95 ${
                    isPremium ? 'bg-signal text-white shadow-lg shadow-signal/30' : 'bg-ink text-white'
                  }`}
                  onClick={() => openWhatsApp(plan.whatsapp)}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-ink/50 text-sm mt-10">{t.pricing.note}</p>
      </div>
    </section>
  );
};

export default Pricing;
