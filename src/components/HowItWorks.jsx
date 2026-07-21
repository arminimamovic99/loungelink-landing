import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '../i18n';
import SectionHeading from './SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.how-step').forEach((step, i) => {
        gsap.from(step, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: step, start: 'top 85%' },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how" ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-8 bg-cream overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply [background-image:radial-gradient(#000_0.45px,transparent_0.45px)] [background-size:3px_3px]" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeading eyebrow={t.how.eyebrow} title={t.how.title} accent={t.how.titleAccent} />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {t.how.steps.map((step, idx) => (
            <div key={step.title} className="how-step relative bg-white/60 backdrop-blur-sm rounded-[2rem] border border-ink/10 p-8 md:p-10 flex flex-col">
              <div className="font-sans font-black text-7xl md:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-b from-signal to-cream select-none mb-6">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h4 className="font-serif italic text-3xl md:text-4xl text-ink leading-tight mb-4">{step.title}</h4>
              <p className="text-ink/60 leading-relaxed">{step.desc}</p>
              <div className="mt-8 w-16 h-[2px] bg-signal relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 animate-[shimmer_2s_infinite]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
