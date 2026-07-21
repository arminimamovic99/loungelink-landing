import React from 'react';
import { Zap, Target, BarChart3 } from 'lucide-react';
import { useLang } from '../i18n';
import SectionHeading from './SectionHeading';

const Features = () => {
  const { t } = useLang();
  const [speed, execution, control] = t.features.cards;

  return (
    <section id="features" className="py-24 md:py-32 px-6 md:px-8 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} accent={t.features.titleAccent} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-paper p-8 md:p-10 rounded-[2.5rem] border border-ink/5 flex flex-col min-h-[440px]">
            <Zap className="text-signal mb-6" size={32} />
            <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tighter mb-4">{speed.title}</h3>
            <p className="text-sm text-ink/55 mb-10 leading-relaxed">{speed.desc}</p>
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-full h-16 bg-signal/5 rounded-2xl animate-pulse" />
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-full h-12 bg-white border border-ink/5 rounded-xl shadow-sm flex items-center px-4 text-[10px] font-mono"
                  style={{
                    transform: `translateY(${(i - 2) * 60}px) scale(${1 - Math.abs(i - 2) * 0.1})`,
                    opacity: 1 - Math.abs(i - 2) * 0.5,
                  }}
                >
                  NARUDŽBA #{i} // GOTOVO
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ink p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-ink/20 text-white flex flex-col min-h-[480px] relative overflow-hidden border border-white/5">
            <Target className="mb-6 h-8 w-8 text-signal shrink-0" strokeWidth={2.25} />
            <h3 className="font-serif italic text-4xl leading-tight mb-3">{execution.title}</h3>
            <p className="text-sm text-gold font-mono mb-8 opacity-90">{execution.punchline}</p>
            <p className="text-sm text-white/50 mb-6 leading-relaxed max-w-sm">{execution.desc}</p>

            <div className="bg-black/40 p-6 rounded-2xl font-mono text-[11px] flex-1 border border-white/5 shadow-inner">
              <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                <span className="text-white/30">NARUDŽBA #128</span>
                <span className="text-signal animate-pulse">● SIGNAL_OK</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between"><span>1x Macchiato</span> <span className="text-signal font-bold">[HLADNO_MLIJEKO]</span></div>
                <div className="flex justify-between"><span>1x Limunada</span> <span className="text-signal font-bold">[BEZ_ŠEĆERA]</span></div>
                <div className="flex justify-between"><span>1x Swiss Ice</span> <span className="text-signal font-bold">[MANJE_SWISSA]</span></div>
                <div className="flex justify-between italic text-white/50"><span>...provjera...uspješna</span></div>
              </div>
            </div>
          </div>

          <div className="bg-paper p-8 md:p-10 rounded-[2.5rem] border border-ink/5 flex flex-col min-h-[440px]">
            <BarChart3 className="text-signal mb-6" size={32} />
            <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tighter mb-4">{control.title}</h3>
            <p className="text-sm text-ink/55 mb-10 leading-relaxed">
              {control.desc}
              <br />
              <span className="text-signal font-semibold">{control.accent}</span>
            </p>
            <div className="flex-1 grid grid-cols-7 gap-1">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm border border-ink/5 ${i % 3 === 0 ? 'bg-signal/20 animate-pulse' : 'bg-white'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
