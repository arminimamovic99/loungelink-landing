import React from 'react';

const SectionHeading = ({ eyebrow, title, accent, dark = false }) => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <p className={`font-mono text-xs tracking-[0.35em] uppercase mb-5 ${dark ? 'text-gold' : 'text-brass'}`}>
      {eyebrow}
    </p>
    <h2
      className={`font-sans font-extrabold text-3xl md:text-5xl tracking-tighter uppercase leading-tight ${
        dark ? 'text-white' : 'text-ink'
      }`}
    >
      {title}{' '}
      <span className="font-serif italic font-normal lowercase text-signal tracking-normal">{accent}</span>
    </h2>
  </div>
);

export default SectionHeading;
