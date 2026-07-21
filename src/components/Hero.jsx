import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Check } from 'lucide-react';
import { openWhatsApp, useLang } from '../i18n';
import OrderTicket from './OrderTicket';

const Hero = () => {
  const heroRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
      });
      gsap.from('.hero-visual', {
        y: 60,
        opacity: 0,
        duration: 1.4,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex items-center pt-32 pb-16 px-6 md:px-16 overflow-hidden bg-paper"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-24 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(196,57,29,0.30) 0%, rgba(196,57,29,0) 72%)' }}
        />
        <div
          className="absolute top-[16%] right-[-140px] h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(196,57,29,0.22) 0%, rgba(196,57,29,0) 74%)' }}
        />
        <div
          className="absolute bottom-[-170px] left-[38%] h-[360px] w-[360px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(196,57,29,0.18) 0%, rgba(196,57,29,0) 65%)' }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">
        <div className="hero-content flex flex-col items-start">
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl tracking-tighter text-ink uppercase leading-[0.95] text-balance">
            {t.hero.titleStart}
            <span className="block font-serif text-signal text-5xl md:text-8xl lowercase italic font-normal tracking-normal mt-1">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-ink/60 font-medium">{t.hero.subtitle}</p>

          <ul className="mt-6 space-y-2.5">
            {t.hero.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5 items-center text-ink/70">
                <Check className="text-signal shrink-0" size={18} strokeWidth={3} />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              className="group flex items-center gap-3 bg-ink text-white px-8 py-4 rounded-full font-bold tracking-wide overflow-hidden relative transition-transform hover:scale-[1.02] active:scale-95"
              onClick={() => openWhatsApp(t.whatsappDefault)}
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-signal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
            <a
              href="#pricing"
              className="font-bold text-ink/60 hover:text-signal transition-colors underline underline-offset-4 decoration-ink/20 hover:decoration-signal"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-visual relative mt-2 lg:mt-0">
          <img
            src="/ss.png"
            alt={t.hero.screenshotAlt}
            className="w-full max-w-xl mx-auto"
            style={{
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 62%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 62%, transparent 100%)',
            }}
            fetchPriority="high"
          />
          <OrderTicket className="hidden md:block absolute -bottom-6 -left-2 lg:-left-8 rotate-[-3deg]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
