import React from 'react';

const retraso = (segundos: number) => ({ '--retraso': `${segundos}s` }) as React.CSSProperties;

export const PorticoSismico: React.FC = () => (
  <svg
    viewBox="0 0 320 180"
    className="w-full h-full text-sky-400 stroke-current overflow-visible"
    role="img"
    aria-label="Pórtico de concreto resistente a momentos oscilando bajo una fuerza sísmica, con riostras de reforzamiento"
  >
    {/* Grid Lines */}
    <g className="aparecer" opacity="0.15" stroke="#38bdf8" strokeWidth="0.5">
      <line x1="20" y1="20" x2="300" y2="20" />
      <line x1="20" y1="65" x2="300" y2="65" />
      <line x1="20" y1="110" x2="300" y2="110" />
      <line x1="20" y1="155" x2="300" y2="155" />
      <line x1="40" y1="10" x2="40" y2="170" />
      <line x1="120" y1="10" x2="120" y2="170" />
      <line x1="200" y1="10" x2="200" y2="170" />
      <line x1="280" y1="10" x2="280" y2="170" />
    </g>

    {/* Foundation Piles */}
    <g className="trazo-grupo" fill="#0C2340" stroke="#0288D1" strokeWidth="2" style={retraso(0.1)}>
      <rect x="30" y="155" width="20" height="15" pathLength={1} />
      <rect x="110" y="155" width="20" height="15" pathLength={1} />
      <rect x="190" y="155" width="20" height="15" pathLength={1} />
      <rect x="270" y="155" width="20" height="15" pathLength={1} />
    </g>
    <line
      className="aparecer suelo-sismo"
      style={retraso(0.4)}
      x1="20"
      y1="170"
      x2="300"
      y2="170"
      stroke="#E65100"
      strokeWidth="2"
      strokeDasharray="3 3"
    />

    <g className="portico-sismo">
      {/* Columns (DES special concrete) */}
      <g className="trazo-grupo" stroke="#ffffff" strokeWidth="3.5" style={retraso(0.35)}>
        <line x1="40" y1="155" x2="40" y2="20" pathLength={1} />
        <line x1="120" y1="155" x2="120" y2="20" pathLength={1} />
        <line x1="200" y1="155" x2="200" y2="20" pathLength={1} />
        <line x1="280" y1="155" x2="280" y2="20" pathLength={1} />
      </g>

      {/* Beams with seismic moment resistance */}
      <g className="trazo-grupo" stroke="#38bdf8" strokeWidth="3" style={retraso(0.75)}>
        <line x1="40" y1="155" x2="280" y2="155" stroke="#E0E0E0" strokeWidth="4" pathLength={1} />
        <line x1="40" y1="110" x2="280" y2="110" pathLength={1} />
        <line x1="40" y1="65" x2="280" y2="65" pathLength={1} />
        <line x1="40" y1="20" x2="280" y2="20" pathLength={1} />
      </g>

      {/* Diagonal Bracing (Vulnerabilidad / Reforzamiento) */}
      <g className="aparecer riostras-flujo" stroke="#D9381E" strokeWidth="2" strokeDasharray="4 3" style={retraso(1.3)}>
        <line x1="120" y1="155" x2="200" y2="110" />
        <line x1="200" y1="155" x2="120" y2="110" />
      </g>

      {/* Node Connection Points */}
      <g className="aparecer" fill="#D9381E" style={retraso(1.15)}>
        <circle cx="40" cy="20" r="3" />
        <circle cx="120" cy="20" r="3" />
        <circle cx="200" cy="20" r="3" />
        <circle cx="280" cy="20" r="3" />
        <circle cx="120" cy="110" r="3" />
        <circle cx="200" cy="110" r="3" />
      </g>
    </g>

    {/* Seismic Force Vector Arrow */}
    <g className="aparecer fuerza-sismo" stroke="#E65100" strokeWidth="2" fill="#E65100" style={retraso(1.2)}>
      <line x1="5" y1="20" x2="28" y2="20" />
      <polygon points="28,17 38,20 28,23" />
      <text x="5" y="14" fill="#E65100" stroke="none" fontSize="9" fontWeight="bold">
        Fs (Sismo)
      </text>
    </g>
  </svg>
);
