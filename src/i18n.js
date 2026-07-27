import { createContext, useContext } from 'react';

export const WHATSAPP_NUMBER = '38762449878';

export const openWhatsApp = (message) => {
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
};

export const translations = {
  bs: {
    whatsappDefault: 'Zanima me LoungeLink!',
    nav: {
      analytics: 'Analitika',
      features: 'Rješenje',
      how: 'Kako radi',
      pricing: 'Cijena',
      faq: 'Pitanja',
      cta: 'Želim LoungeLink',
    },
    hero: {
      titleStart: 'Prestanite nagađati koliko je novca večeras',
      titleAccent: 'ušlo u vaš lokal.',
      subtitle: 'Zadržite više novca. Spavajte mirno, znajući da LoungeLink čuva vaše poslovanje.',
      bullets: [
        'Znajte tačno gdje ide svaka marka.',
        'Uđite u trag svakoj nargili.',
        'Osigurajte brzu uslugu za svaki stol.',
        'Nula skrivenih narudžbi. Nula ukradenog novca.'
      ],
      cta: 'Želim LoungeLink',
      ctaSecondary: 'Pogledaj cijene',
      screenshotAlt: 'LoungeLink aplikacija za konobare i admin pregled poslovanja',
    },
    trust: [
      'Napravljen za lokale u BiH',
      'Radi na telefonima i tabletima',
      'Podrška putem WhatsApp-a',
      'Narudžbe, stolovi i računi — sve na jednom mjestu',
    ],
    analytics: {
      eyebrow: 'Za vlasnike',
      title: 'Dokazi, ne',
      titleAccent: 'nagađanje.',
      subtitle:
        'Svaka narudžba, svaka marka, svaki konobar — zabilježeni i vidljivi. Vaš novac, pod vašom kontrolom, u svakom trenutku.',
      bullets: [
        'Prihod i broj narudžbi ažurno, u realnom vremenu.',
        'Prihod po konobaru — znate ko donosi, a ko ne.',
        'Najprometniji sati — planirajte osoblje unaprijed.',
      ],
      mainImgAlt: 'Pregled poslovanja u LoungeLink admin panelu',
      panels: [
        {
          title: 'Svaka narudžba, zabilježena.',
          desc: 'Filtrirajte narudžbe po datumu ili proizvodu. Nijedna stavka ne prođe nezabilježeno.',
          imgAlt: 'Pregled narudžbi u LoungeLink admin panelu',
        },
        {
          title: 'Prihod po konobaru.',
          desc: 'Vidite tačno koliko je ko naplatio i koliko je narudžbi opslužio — bez pogađanja, bez izgovora.',
          imgAlt: 'Pregled učinka osoblja u LoungeLink admin panelu',
        },
      ],
    },
    features: {
      eyebrow: 'Rješenje',
      title: 'Zašto',
      titleAccent: 'LoungeLink?',
      cards: [
        {
          title: 'Maksimalna brzina.',
          desc: 'Narudžba stiže od gosta do šanka istog trenutka. Priprema počinje odmah, a konobar ima više vremena za sljedećeg gosta.',
        },
        {
          title: 'Savršena realizacija.',
          punchline: 'Nema više: "Je l\' ono bila mala s hladnim ili toplim mlijekom?"',
          desc: 'LoungeLink digitalizuje svaku želju gosta u sekundi. Informacija stiže do šanka bez šuma, bez zaboravljanja i bez greške.',
        },
        {
          title: 'Potpuna kontrola.',
          desc: 'Potpuna vidljivost poslovanja. Od stanja na zalihama do ritma svakog stola.',
          accent: 'Vaš lokal, vaša pravila.',
        },
      ],
    },
    how: {
      eyebrow: 'Kako radi',
      title: 'Od stola do šanka u',
      titleAccent: 'tri koraka.',
      steps: [
        {
          title: 'Trenutni digitalni trag',
          desc: 'Interakcija za stolom se momentalno pretvara u podatak. Narudžba je u šanku prije nego konobar krene od stola.',
        },
        {
          title: 'Pametna kontrola pripreme',
          desc: 'Ljudi zaboravljaju. Sistem ne. Svaki gost je uslužen u optimalnom ritmu.',
        },
        {
          title: 'Garantovana isporuka',
          desc: 'Eliminišite lutanje osoblja. Svaka narudžba završava ispred pravog gosta — bez pitanja i bez greške.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Cijena',
      title: 'Jednostavna',
      titleAccent: 'mjesečna pretplata.',
      perMonth: 'KM / mjesečno',
      recommended: 'Preporučeno',
      plans: [
        {
          name: 'Basic',
          price: '150',
          desc: 'Kompletna aplikacija za vaš lokal.',
          features: [
            'Aplikacija za konobare',
            'Pregled narudžbi i stolova',
            'Admin pregled poslovanja',
            'Podrška putem WhatsApp-a',
          ],
          cta: 'Želim Basic paket',
          whatsapp: 'Zanima me LoungeLink — Basic paket (150 KM/mj)!',
        },
        {
          name: 'Premium',
          price: '300',
          desc: 'Aplikacija plus oprema — spremno za rad.',
          features: [
            'Sve iz Basic paketa',
            'Printer naljepnica',
            '2 tableta uključena u pretplatu',
            'Podrška putem WhatsApp-a',
          ],
          cta: 'Želim Premium paket',
          whatsapp: 'Zanima me LoungeLink — Premium paket (300 KM/mj)!',
        },
      ],
      note: 'Niste sigurni koji paket vam odgovara? Javite se — pomoći ćemo vam odabrati.',
    },
    faq: {
      eyebrow: 'Pitanja',
      title: 'Često postavljana',
      titleAccent: 'pitanja.',
      items: [
        {
          q: 'Šta mi treba od opreme?',
          a: 'LoungeLink radi na telefonima i tabletima. Uz Premium paket dobijate 2 tableta i printer naljepnica — uključeni su u pretplatu, bez dodatnog troška.',
        },
        {
          q: 'Koliko košta LoungeLink?',
          a: 'Basic paket je 150 KM mjesečno i uključuje kompletnu aplikaciju. Premium paket je 300 KM mjesečno i uz aplikaciju dobijate printer naljepnica i 2 tableta.',
        },
        {
          q: 'Da li je komplikovano za osoblje?',
          a: 'Ne. Aplikacija je napravljena da bude jednostavna: konobar odabere sto, unese narudžbu i pošalje — sve ostalo sistem radi sam.',
        },
        {
          q: 'Za koga je LoungeLink?',
          a: 'Za nargila barove, lounge i caffe barove u Bosni i Hercegovini koji žele bržu uslugu, manje grešaka i potpun uvid u poslovanje.',
        },
        {
          q: 'Kako počinjem?',
          a: 'Javite nam se na WhatsApp. Dogovorimo paket koji vam odgovara i postavimo LoungeLink u vašem lokalu.',
        },
      ],
    },
    finalCta: {
      title: 'Vaš lokal zaslužuje',
      titleAccent: 'bolji ritam.',
      subtitle: 'Javite se — odgovaramo na WhatsApp-u.',
      cta: 'Želim LoungeLink',
    },
    footer: {
      tagline: 'Softver za nargila barove u Bosni i Hercegovini.',
      rights: 'Digital Instrument by LoungeLink © 2026',
    },
  },
  en: {
    whatsappDefault: "I'm interested in LoungeLink!",
    nav: {
      analytics: 'Analytics',
      features: 'Solution',
      how: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      cta: 'Get LoungeLink',
    },
    hero: {
      titleStart: 'The perfect software for your',
      titleAccent: 'hookah lounge.',
      subtitle:
        'LoungeLink is a smart management system for modern hookah lounges — orders, tables and bills in one place.',
      bullets: [
        'No more staff communication errors',
        'Faster service for every table',
        'Insight into every part of your business',
      ],
      cta: 'Get LoungeLink',
      ctaSecondary: 'See pricing',
      screenshotAlt: 'LoungeLink waiter app and admin business dashboard',
    },
    trust: [
      'Built for venues in Bosnia & Herzegovina',
      'Works on phones and tablets',
      'Support via WhatsApp',
      'Orders, tables and bills — all in one place',
    ],
    analytics: {
      eyebrow: 'For owners',
      title: 'Full visibility,',
      titleAccent: 'zero guesswork.',
      subtitle:
        'Revenue, orders and staff performance in real time — everything you need to run your venue with confidence.',
      bullets: [
        'Revenue and order count, updated in real time.',
        "Revenue per waiter — know who's pulling their weight.",
        'Peak hours — plan your staffing ahead of time.',
      ],
      mainImgAlt: 'Business overview in the LoungeLink admin panel',
      panels: [
        {
          title: 'Every order, on record.',
          desc: 'Filter orders by date or product. Nothing slips through unnoticed.',
          imgAlt: 'Orders overview in the LoungeLink admin panel',
        },
        {
          title: 'Revenue per waiter.',
          desc: 'See exactly how much each waiter brought in and how many orders they handled — no guessing, no excuses.',
          imgAlt: 'Staff performance overview in the LoungeLink admin panel',
        },
      ],
    },
    features: {
      eyebrow: 'Solution',
      title: 'Why',
      titleAccent: 'LoungeLink?',
      cards: [
        {
          title: 'Maximum speed.',
          desc: 'Orders travel from guest to bar instantly. Preparation starts right away, and waiters have more time for the next guest.',
        },
        {
          title: 'Flawless execution.',
          punchline: 'No more: "Was that the small one with cold or warm milk?"',
          desc: 'LoungeLink digitizes every guest request in a second. Information reaches the bar with no noise, no forgetting and no mistakes.',
        },
        {
          title: 'Full control.',
          desc: 'Complete visibility of your business. From stock levels to the rhythm of every table.',
          accent: 'Your venue, your rules.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'From table to bar in',
      titleAccent: 'three steps.',
      steps: [
        {
          title: 'Instant digital trail',
          desc: 'Every interaction at the table instantly becomes data. The order is at the bar before the waiter leaves the table.',
        },
        {
          title: 'Smart preparation control',
          desc: "People forget. The system doesn't. Every guest is served at the optimal rhythm.",
        },
        {
          title: 'Guaranteed delivery',
          desc: 'No more staff wandering. Every order ends up in front of the right guest — no questions, no mistakes.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Simple',
      titleAccent: 'monthly subscription.',
      perMonth: 'BAM / month',
      recommended: 'Recommended',
      plans: [
        {
          name: 'Basic',
          price: '150',
          desc: 'The complete app for your venue.',
          features: [
            'Waiter app',
            'Order and table overview',
            'Admin business dashboard',
            'Support via WhatsApp',
          ],
          cta: 'Get the Basic plan',
          whatsapp: "I'm interested in LoungeLink — Basic plan (150 BAM/mo)!",
        },
        {
          name: 'Premium',
          price: '300',
          desc: 'The app plus hardware — ready to run.',
          features: [
            'Everything in Basic',
            'Label printer',
            '2 tablets included in the subscription',
            'Support via WhatsApp',
          ],
          cta: 'Get the Premium plan',
          whatsapp: "I'm interested in LoungeLink — Premium plan (300 BAM/mo)!",
        },
      ],
      note: "Not sure which plan fits? Reach out — we'll help you choose.",
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked',
      titleAccent: 'questions.',
      items: [
        {
          q: 'What equipment do I need?',
          a: 'LoungeLink runs on phones and tablets. With the Premium plan you get 2 tablets and a label printer — included in the subscription, at no extra cost.',
        },
        {
          q: 'How much does LoungeLink cost?',
          a: 'The Basic plan is 150 BAM per month and includes the complete app. The Premium plan is 300 BAM per month and adds a label printer and 2 tablets.',
        },
        {
          q: 'Is it complicated for my staff?',
          a: 'No. The app is built to be simple: the waiter picks a table, enters the order and sends it — the system handles the rest.',
        },
        {
          q: 'Who is LoungeLink for?',
          a: 'Hookah bars, lounges and cafés in Bosnia & Herzegovina that want faster service, fewer mistakes and full insight into their business.',
        },
        {
          q: 'How do I get started?',
          a: "Message us on WhatsApp. We'll agree on the plan that fits you and set up LoungeLink in your venue.",
        },
      ],
    },
    finalCta: {
      title: 'Your venue deserves',
      titleAccent: 'a better rhythm.',
      subtitle: "Get in touch — we're on WhatsApp.",
      cta: 'Get LoungeLink',
    },
    footer: {
      tagline: 'Software for hookah lounges in Bosnia & Herzegovina.',
      rights: 'Digital Instrument by LoungeLink © 2026',
    },
  },
};

export const LangContext = createContext({
  lang: 'bs',
  setLang: () => {},
  t: translations.bs,
});

export const useLang = () => useContext(LangContext);
