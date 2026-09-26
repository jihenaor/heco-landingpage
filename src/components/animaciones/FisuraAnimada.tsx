import React, { useId, useRef } from 'react';
import { useEnVista } from '../../hooks/useEnVista';

const GRIETA_PRINCIPAL =
  'M205 62 L214 55 L219 57 L228 47 L236 45 L241 37 L252 34 L258 27 L268 24 L275 18 L288 15 L304 11';
const GRIETA_INFERIOR =
  'M125 125 L116 131 L113 138 L103 142 L98 151 L87 155 L82 164 L70 169 L64 178 L50 183 L44 192 L30 198';
const RAMALES = ['M241 37 L247 42 L255 43 L260 50', 'M98 151 L92 146 L83 146'];

const GRAPAS = [
  { x1: 219.3, y1: 44.9, x2: 226.7, y2: 59.1 },
  { x1: 242.8, y1: 28.4, x2: 250.2, y2: 42.6 },
  { x1: 267.3, y1: 13.9, x2: 274.7, y2: 28.1 },
  { x1: 103.1, y1: 133.7, x2: 112.9, y2: 146.3 },
  { x1: 79.1, y1: 153.7, x2: 88.9, y2: 166.3 },
  { x1: 52.1, y1: 174.7, x2: 61.9, y2: 187.3 },
];

export const FisuraAnimada: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const enVista = useEnVista(ref, { umbral: 0.35 });
  const patronId = `ladrillo-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <div
      ref={ref}
      className={`fisura-escena bg-white border border-[#E0E0E0] rounded-[8px] p-4 shadow-sm ${enVista ? 'en-vista' : ''}`}
    >
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-100 font-mono text-[10px] text-[#6B7280] uppercase">
        <span className="font-bold text-[#0C2340]">Muro de fachada · Eje B</span>
        <span>Levantamiento de daños · Esc 1:50</span>
      </div>

      <svg
        viewBox="0 0 320 210"
        className="w-full h-auto"
        role="img"
        aria-label="Muro de mampostería con fisuras diagonales desde las esquinas de una ventana, que luego se sellan y se cosen con grapas de refuerzo"
      >
        <defs>
          <pattern id={patronId} width="40" height="20" patternUnits="userSpaceOnUse">
            <rect width="40" height="20" fill="#F4F6F8" />
            <path d="M0 0.5H40 M0 10.5H40 M20 0.5V10.5 M0.5 10.5V20" stroke="#CBD5E1" strokeWidth="1" fill="none" />
          </pattern>
        </defs>

        <rect x="10" y="10" width="300" height="190" fill={`url(#${patronId})`} stroke="#0C2340" strokeWidth="1.5" />

        {/* Dintel y vano de ventana */}
        <rect x="115" y="62" width="90" height="8" fill="#94A3B8" opacity="0.7" />
        <rect x="125" y="70" width="70" height="55" fill="#ffffff" stroke="#0C2340" strokeWidth="2" />
        <line x1="160" y1="70" x2="160" y2="125" stroke="#CBD5E1" strokeWidth="1" />
        <line x1="125" y1="97.5" x2="195" y2="97.5" stroke="#CBD5E1" strokeWidth="1" />

        {/* Barrido de auscultación */}
        <g className="fisura-escaneo">
          <rect x="10" y="4" width="300" height="6" fill="#38bdf8" opacity="0.15" />
          <line x1="10" y1="10" x2="310" y2="10" stroke="#0288D1" strokeWidth="1.5" />
        </g>

        {/* Fisuras */}
        <g fill="none" stroke="#D9381E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="fisura-grieta" d={GRIETA_PRINCIPAL} pathLength={1} />
          <path className="fisura-grieta" d={GRIETA_INFERIOR} pathLength={1} />
          {RAMALES.map((d) => (
            <path key={d} className="fisura-grieta ramal" d={d} pathLength={1} strokeWidth="1.3" />
          ))}
        </g>

        {/* Sellado por inyección */}
        <g fill="none" stroke="#0056B3" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.55">
          <path className="fisura-sello" d={GRIETA_PRINCIPAL} pathLength={1} />
          <path className="fisura-sello" d={GRIETA_INFERIOR} pathLength={1} />
        </g>

        {/* Cosido con grapas */}
        <g stroke="#0C2340" strokeWidth="2.5" strokeLinecap="round">
          {GRAPAS.map((grapa, idx) => (
            <line
              key={idx}
              className="fisura-grapa"
              style={{ '--retraso': `${idx * 0.12}s` } as React.CSSProperties}
              {...grapa}
            />
          ))}
        </g>

        {/* Cota de espesor de fisura */}
        <g className="fisura-medida">
          <line x1="262" y1="27" x2="262" y2="146" stroke="#0C2340" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="262" cy="27" r="2.5" fill="#0C2340" />
          <rect x="214" y="146" width="92" height="34" rx="2" fill="#0C2340" />
          <text x="222" y="160" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold">
            e = 0.8 mm
          </text>
          <text x="222" y="173" fill="#FCA5A5" fontSize="8" fontFamily="monospace">
            45° · CORTANTE
          </text>
        </g>
      </svg>

      <div className="relative h-5 mt-3 font-mono text-[11px] font-bold uppercase">
        <span className="fisura-estado-alerta absolute inset-0 flex items-center gap-2 text-[#D9381E]">
          <span className="w-2 h-2 rounded-full bg-[#D9381E] animate-pulse" />
          Auscultación · fisura diagonal activa
        </span>
        <span className="fisura-estado-ok absolute inset-0 flex items-center gap-2 text-[#2E7D32]">
          <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
          Inyección epóxica + cosido · estable
        </span>
      </div>
    </div>
  );
};
