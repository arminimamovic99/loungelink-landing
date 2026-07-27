import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { useLang } from '../i18n';
import SectionHeading from './SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const BrowserFrame = ({ url, src, alt, className = '' }) => (
  <div className={`rounded-[1.75rem] overflow-hidden border border-ink/10 bg-white shadow-2xl shadow-ink/10 ${className}`}>
    <div className="h-9 bg-paper border-b border-ink/5 flex items-center gap-4 px-4">
      <div className="flex gap-1.5 shrink-0">
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
        <span className="w-2 h-2 rounded-full bg-ink/15" />
      </div>
      <span className="font-mono text-[10px] text-ink/30 truncate">{url}</span>
    </div>
    <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
  </div>
);

const Analytics = () => {
  const sectionRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.analytics-main', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.analytics-main', start: 'top 80%' },
      });
      gsap.utils.toArray('.analytics-panel').forEach((panel, i) => {
        gsap.from(panel, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 85%' },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="analytics"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-8 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow={t.analytics.eyebrow} title={t.analytics.title} accent={t.analytics.titleAccent} />

        <div className="analytics-main grid lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 items-stretch mb-6 md:mb-8">
          <div className="bg-ink text-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center">
            <p className="text-lg text-white/70 leading-relaxed">{t.analytics.subtitle}</p>
            <ul className="mt-8 space-y-3">
              {t.analytics.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 items-start text-white/85">
                  <Check className="text-signal shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <BrowserFrame
            url="loungelink.app/admin/pregled"
            src="/admin-overview.png"
            alt={t.analytics.mainImgAlt}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {t.analytics.panels.map((panel, idx) => (
            <div key={panel.title} className="analytics-panel bg-paper rounded-[2.5rem] border border-ink/5 p-6 md:p-8">
              <h3 className="font-sans font-extrabold text-xl uppercase tracking-tighter mb-2">{panel.title}</h3>
              <p className="text-sm text-ink/55 mb-6 leading-relaxed">{panel.desc}</p>
              <BrowserFrame
                url={idx === 0 ? 'loungelink.app/admin/narudzbe' : 'loungelink.app/admin/osoblje'}
                src={idx === 0 ? '/admin-orders.png' : '/admin-staff.png'}
                alt={panel.imgAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
