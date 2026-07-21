import React from 'react';
import { Plus } from 'lucide-react';
import { useLang } from '../i18n';
import SectionHeading from './SectionHeading';

const Faq = () => {
  const { t } = useLang();

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-8 bg-paper scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} accent={t.faq.titleAccent} />

        <div className="space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-2xl border border-ink/5 open:border-signal/30 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-bold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="shrink-0 text-signal transition-transform duration-300 group-open:rotate-45" size={20} />
              </summary>
              <p className="px-6 pb-6 text-ink/60 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
