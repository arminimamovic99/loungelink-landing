import React from 'react';

// Ticket content stays in Bosnian in both languages — it mirrors the real
// product UI as used in BiH venues.
const LINES = [
  { item: '1x Nargila Grape', tag: '[JAČA]' },
  { item: '2x Limunada', tag: '[BEZ ŠEĆERA]' },
  { item: '1x Macchiato', tag: '[HLADNO MLIJEKO]' },
];

const OrderTicket = ({ className = '' }) => (
  <div
    className={`bg-ink text-white/90 rounded-2xl p-5 font-mono text-[11px] shadow-2xl shadow-ink/30 border border-white/10 w-64 ${className}`}
    aria-hidden="true"
  >
    <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
      <span className="text-white/40">NARUDŽBA #128 · STO 4</span>
      <span className="text-signal animate-pulse">●</span>
    </div>
    <div className="space-y-2">
      {LINES.map((line, i) => (
        <div
          key={line.item}
          className="ticket-line flex justify-between gap-2"
          style={{ animationDelay: `${0.6 + i * 0.45}s` }}
        >
          <span>{line.item}</span>
          <span className="text-gold font-bold whitespace-nowrap">{line.tag}</span>
        </div>
      ))}
      <div className="ticket-line pt-2 text-signal font-bold" style={{ animationDelay: '2.2s' }}>
        → ŠANK · 0.4s
      </div>
    </div>
  </div>
);

export default OrderTicket;
