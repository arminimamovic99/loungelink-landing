import React from 'react';
import { useLang } from '../i18n';

const TrustStrip = () => {
  const { t } = useLang();

  return (
    <section className="bg-ink py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50">
        {t.trust.map((item) => (
          <span key={item} className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
