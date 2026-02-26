import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Target
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- COMPONENTS ---

const Navbar = ({ preset }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl px-6 py-3 rounded-full transition-all duration-500 border ${
      isScrolled 
      ? 'bg-white/70 backdrop-blur-xl border-navy/10 shadow-lg' 
      : 'bg-transparent border-transparent'
    } flex justify-between items-center`}>
      <span className="font-sans font-extrabold text-2xl tracking-tighter text-[#050A1F]">
        Lounge<span className="text-[#c4391d]">Link</span>
      </span>
      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-[#050A1F]">
        <a href="#features" className="hover:text-[#c4391d] transition-colors">Rješenje</a>
        <a href="#protocol" className="hover:text-[#c4391d] transition-colors">Protokol</a>
        <a href="#manifesto" className="hover:text-[#c4391d] transition-colors">Ideja</a>
      </div>
      <button className="bg-[#c4391d] text-white px-5 py-2 rounded-full text-[11px] font-bold uppercase hover:scale-[1.03] transition-transform active:scale-95 shadow-[#c4391d]-200 shadow-lg">
        Isprobajte LoungeLink
      </button>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex items-end pb-24 px-8 md:px-20 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/78 to-white/8" />
        <div
          className="absolute -top-32 -left-24 z-10 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.48) 0%, rgba(196,57,29,0) 72%)" }}
        />
        <div
          className="absolute top-[14%] right-[-140px] z-10 h-[420px] w-[420px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.40) 0%, rgba(196,57,29,0) 74%)" }}
        />
        <div
          className="absolute bottom-[-170px] left-[35%] z-10 h-[350px] w-[350px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.36) 0%, rgba(196,57,29,0) 65%)" }}
        />
        {/* <div
          className="absolute top-[40%] left-[54%] z-10 h-[430px] w-[430px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.30) 0%, rgba(196,57,29,0) 72%)" }}
        /> */}
        {/* <div
          className="absolute bottom-[10%] right-[12%] z-10 h-[320px] w-[320px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.33) 0%, rgba(196,57,29,0) 72%)" }}
        /> */}
        <div
          className="absolute top-[22%] left-[38%] z-10 h-[300px] w-[300px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.26) 0%, rgba(196,57,29,0) 95%)" }}
        />
        <div
          className="absolute top-[30%] left-[6%] z-10 h-[260px] w-[260px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.25) 0%, rgba(196,57,29,0) 70%)" }}
        />
        <div
          className="absolute bottom-[22%] left-[46%] z-10 h-[240px] w-[240px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.24) 0%, rgba(196,57,29,0) 70%)" }}
        />
        {/* <div
          className="absolute bottom-[-40px] right-[34%] z-10 h-[280px] w-[280px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(196,57,29,0.28) 0%, rgba(196,57,29,0) 72%)" }}
        /> */}
      </div>
      
      <div className="relative z-20 hero-content max-w-6xl sm:px-0 md:px-16 flex flex-col w-full justify-center items-center md:items-start">
        <h1 className="font-sans font-extrabold text-5xl md:text-8xl tracking-tighter text-[#050A1F] uppercase leading-[0.9]">
          Ubrzajte svoje <br />
          <span className="font-serif text-[#c4391d] capitalize text-5xl md:text-[11rem] lowercase italic">Poslovanje.</span>
        </h1>
        <p className="mt-16 max-w-xl text-lg text-[#050A1F]/60 font-medium">
          Pametni sistem narudžbi za moderne ugostiteljske objekte. <br />
          <hr className='my-3 opacity-30' />
         <span className='font-bold text-black'>Lounge<span className="text-[#c4391d]">Link</span></span> vam automatizacijom omogućava trenutni prijenos narudžbi od gosta, preko konobara, do šanka i pripreme. <br />
          Efikasnija <span className='font-bold'>usluga</span>. Profesionalniji <span className='font-bold'>rad</span>.
        </p>
        <button className="mt-10 group flex items-center gap-4 bg-[#050A1F] text-white px-8 py-4 rounded-full font-bold tracking-widest overflow-hidden relative transition-transform hover:scale-[1.02]">
          <span className="relative z-10">Isprobajte Lounge<span className='text-[#c4391d]'>Link</span></span>
          <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-[#c4391d] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-8 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Diagnostic Shuffler - Speed */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-[500px]">
          <Zap className="text-[#c4391d] mb-6" size={32} />
          <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tighter mb-4">Maksimalna Brzina.</h3>
          <p className="text-sm text-slate-500 mb-10">Narudžba stiže od gosta do šanka istog trenutka. Priprema počinje odmah, a konobar ima više vremena za sljedećeg gosta.</p>
          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-16 bg-[#c4391d]/5 rounded-2xl animate-pulse" />
            {[1, 2, 3].map((i) => (
              <div key={i} className={`absolute w-full h-12 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center px-4 text-[10px] font-mono transform transition-all duration-700`}
                   style={{ transform: `translateY(${(i-2)*60}px) scale(${1 - Math.abs(i-2)*0.1})`, opacity: 1 - Math.abs(i-2)*0.5 }}>
                NARUDŽBA #{i} // GOTOVO
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Savršena realizacija */}
        <div className="bg-black/90 p-10 rounded-[2.5rem] shadow-2xl text-[#FAF8F5] flex flex-col h-[550px] relative overflow-hidden group border border-white/5">
          
          {/* Signal icon - Rotates on hover */}
          <Target className="mb-6 block h-8 w-8 text-[#c4391d] shrink-0" strokeWidth={2.25} />
          
          {/* The Authority Heading - Serif Italic to create 'Drama' */}
          <h3 className="font-serif italic text-4xl leading-tight mb-3">
            Savršena realizacija.
          </h3>
          
          {/* The Relatable Punchline - In Champagne Data Font */}
          <p className="text-sm text-[#C9A84C] font-mono mb-8 opacity-90">
            Nema više: "Je l' ono bila mala s hladnim ili toplim mlijekom?"
          </p>
          
          {/* The Business Descriptor */}
          <p className="text-sm text-[#FAF8F5]/50 mb-6 leading-relaxed max-w-sm">
            LoungeLink digitalizuje svaku želju gosta u sekundi. Informacija stiže do šanka bez šuma, bez zaboravljanja i bez greške.
          </p>

          {/* Visual Logic: Digital Order Stream (Obsidian UI) */}
          <div className="bg-black/90 p-6 rounded-2xl font-mono text-[11px] flex-1 border border-white/5 relative shadow-inner">
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
              <span className="text-[#FAF8F5]/30">NARUDŽBA #128</span>
              <span className="text-[#C4391D] animate-pulse">● SIGNAL_OK</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[#FAF8F5]"><span>1x Macchiato</span> <span className="text-[#C4391D] font-bold">[HLADNO_MLIJEKO]</span></div>
              <div className="flex justify-between text-[#FAF8F5]"><span>1x Limunada</span> <span className="text-[#C4391D] font-bold">[BEZ_ŠEĆERA]</span></div>
              <div className="flex justify-between text-[#FAF8F5]"><span>1x Swiss Ice</span> <span className="text-[#C4391D] font-bold">[MANJE_SWISSA]</span></div>
              <div className="flex justify-between italic text-[#FAF8F5]/50"><span>...provjera...uspješna</span></div>
            </div>
          </div>
        </div>
        {/* Card 3: Scheduler - Operational Control */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-[500px]">
          <BarChart3 className="text-[#c4391d] mb-6" size={32} />
          <h3 className="font-sans font-extrabold text-2xl uppercase tracking-tighter mb-4">Potpuna Kontrola.</h3>
          <p className="text-sm text-slate-500 mb-10">Potpuna vidljivost poslovanja. Od stanja na zalihama do ritma svakog stola. <br />
              <span className='text-[#c4391d] font-semibold'>Vaš lokal, vaša pravila.</span>
          </p>
          <div className="flex-1 grid grid-cols-7 gap-1">
            {[...Array(28)].map((_, i) => (
              <div key={i} className={`rounded-sm border border-slate-50 transition-colors duration-1000 ${i % 3 === 0 ? 'bg-[#c4391d]/20 animate-pulse' : 'bg-slate-50'}`} 
                   style={{ transitionDelay: `${i * 50}ms` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Protocol Stacking
      const cards = gsap.utils.toArray(".protocol-step");
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            if (i < cards.length - 1) {
              gsap.to(card, {
                scale: 1 - (self.progress * 0.05),
                opacity: 1 - (self.progress * 0.4),
                filter: `blur(${self.progress * 4}px)`,
                overwrite: 'auto'
              });
            }
          }
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="bg-white">
      {/* GLOBAL NOISE */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>

      <Navbar />
      <Hero />
      <Features />

      {/* PHILOSOPHY */}
      <section id="manifesto" className="bg-black/90 py-40 px-8 text-white text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#C9A84C] font-mono text-xs tracking-[0.4em] mb-12 uppercase">Ideja #1</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Većina ugostiteljskih aplikacija fokusira se na <span className="opacity-30">administraciju i kucanje računa.</span><br />
            Mi se fokusiramo na <span className="text-[#c4391d]">ugostiteljstvo bez prepreka.</span>
          </h2>
        </div>
      </section>

      {/* PROTOCOL - STACKING ARCHIVE (Bosnian Build) */}
      <section id="protocol" className="relative overflow-hidden bg-[#F5F1EB]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-multiply [background-image:radial-gradient(#000_0.45px,transparent_0.45px)] [background-size:3px_3px]" />
        {[
          { 
            step: "01", 
            title: "Trenutni digitalni trag", 
            desc: "Interakcija za stolom se momentalno pretvara u podatak. Narudžba je u šanku prije nego konobar krene od stola." 
          },
          { 
            step: "02", 
            title: "Pametna kontrola pripreme", 
            desc: "Ljudi zaboravljaju. Sistem ne. Svaki gost je uslužen u optimalnom ritmu." 
          },
          { 
            step: "03", 
            title: "Garantovana isporuka", 
            desc: "Eliminišite lutanje osoblja. Svaka narudžba završava ispred pravog gosta — bez pitanja i bez greške." 
          }
        ].map((item, idx) => (
          <div key={idx} className="protocol-step h-screen w-full flex items-center justify-center bg-[#F5F1EB]/95 border-t border-black/10 px-8">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              
              {/* Step Number with Signal Red Glow */}
              <div className="font-sans font-black text-[15vw] md:text-[12vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#C4391D] to-[#EADFD2] opacity-85 select-none">
                {item.step}
              </div>

              <div className="relative z-10">
                <p className="font-mono text-[#8A6E2F] text-xs tracking-[0.3em] mb-4 uppercase">Faza Protokola</p>
                <h4 className="font-serif italic text-5xl md:text-7xl text-[#111111] leading-tight mb-8">
                  {item.title}
                </h4>
                <p className="text-lg md:text-xl text-[#111111]/65 max-w-md leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Visual Pulse for the active card */}
                <div className="mt-12 w-24 h-[1px] bg-[#C4391D] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 translate-x-[-100%] animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0D12] text-white pt-32 pb-10 px-8 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start border-b border-white/5 pb-20 mb-10">
          <div className="mb-10 md:mb-0">
            <h2 className="text-4xl font-extrabold tracking-tighter uppercase mb-4">Lounge <span className='text-[#C4391D]'>Link</span></h2>
            <div className="flex items-center gap-2 font-mono text-[10px] text-[#C4391D]">
              <div className="w-2 h-2 bg-[#C4391D] rounded-full animate-pulse" />
              v1.0
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-20">
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white">Platform</a>
              <a href="#" className="hover:text-white">Intelligence</a>
            </div>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div> */}
        </div>
        <div className="text-center font-mono text-[9px] text-white/20 tracking-[0.5em] uppercase">
          Digital Instrument by LoungeLink © 2026
        </div>
      </footer>
    </div>
  );
};

export default App;
