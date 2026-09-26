import React from 'react';
import { 
  Building, 
  AlertTriangle, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Calculator,
  HardHat,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO } from '../data/hecoData';

interface HeroProps {
  onSelectPath: (path: 'diseno' | 'patologia') => void;
  onOpenQuoteModal: (mode?: 'diseno' | 'patologia') => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPath, onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative bg-[#0C2340] text-white overflow-hidden blueprint-grid-dark border-b-4 border-[#D9381E]">
      {/* Decorative Technical Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340] via-[#0C2340]/90 to-[#0A192F]/80 pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-4 py-12 lg:py-18">
        {/* Anti-Slop Quiet Unboxed Kicker (Domain Specific) */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-300 font-semibold mb-4">
          <span className="text-[#D9381E] font-bold">Firma Especializada</span>
          <span aria-hidden="true">·</span>
          <span>Pereira & Risaralda</span>
          <span aria-hidden="true">·</span>
          <span>Bajo Norma Sismorresistente NSR-10</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Specific Technical Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Specific Heading (Req #1) */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
              Ingeniería estructural para{' '}
              <span className="text-white border-b-4 border-[#D9381E] inline-block pb-0.5">
                construir
              </span>
              ,{' '}
              <span className="text-[#E65100]">evaluar</span> y{' '}
              <span className="text-[#D9381E]">reforzar</span> con seguridad.
            </h1>

            {/* Subtitle (Req #1) */}
            <p className="font-body text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
              Diseño estructural, diagnóstico de patologías, evaluación de vulnerabilidad y reforzamiento de edificaciones, con soluciones técnicas adaptadas a cada proyecto en Pereira y el Eje Cafetero.
            </p>

            {/* High Trust Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 pb-1 border-y border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NSR-10 & AIS-180</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D9381E] shrink-0" />
                <span>Criterio Constructible</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Acceso Directo al Ingeniero</span>
              </div>
            </div>

            {/* THE TWO COMMERCIAL PATHS (Req #8 & Core Recommendation) */}
            <div className="space-y-3 pt-2">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Seleccione su necesidad técnica inicial:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Track A: Quiero Diseñar / Construir */}
                <button
                  onClick={() => {
                    onSelectPath('diseno');
                    onOpenQuoteModal('diseno');
                  }}
                  className="group p-4 bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-[#0056B3] rounded-[4px] text-left transition-all cursor-pointer relative"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-sky-400" />
                      Camino 01
                    </span>
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white uppercase mb-1">
                    Quiero Diseñar / Construir
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Diseño estructural nuevo, ampliaciones, modelación ETABS y memorias para Curaduría Urbana.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-sky-400 group-hover:underline">
                    <span>Cotizar diseño nuevo</span>
                    <span>→</span>
                  </div>
                </button>

                {/* Track B: Ya Tengo una Estructura */}
                <button
                  onClick={() => {
                    onSelectPath('patologia');
                    onOpenQuoteModal('patologia');
                  }}
                  className="group p-4 bg-red-950/30 hover:bg-red-900/40 border-2 border-[#D9381E]/60 hover:border-[#D9381E] rounded-[4px] text-left transition-all cursor-pointer relative"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-300 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[#D9381E]" />
                      Camino 02
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#D9381E] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-white uppercase mb-1">
                    Ya Tengo una Estructura
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Fisuras, grietas, corrosión, evaluación sísmica o peritaje de edificación existente.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-red-400 group-hover:underline">
                    <span>Solicitar evaluación técnica</span>
                    <span>→</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Callout (Req #9) */}
            <div className="bg-[#0A192F] p-4 rounded-[4px] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <p className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                  ¿Tiene un proyecto en Pereira o el Eje Cafetero? Hablemos.
                </p>
                <p className="text-xs text-slate-300">
                  Envíenos planos, fotos de fisuras o descripción y revisaremos la viabilidad técnica inicial.
                </p>
              </div>
              <a
                href={`${COMPANY_INFO.whatsappDirectUrl}?text=${encodeURIComponent(
                  'Hola Ing. HECO Consultoría, tengo un proyecto en Pereira / Risaralda y quisiera consultar la viabilidad de un diseño estructural o evaluación técnica.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase px-4 py-2.5 rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Técnico</span>
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Structural Blueprint & Mathematical Rigor Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0A192F] border-2 border-white/10 rounded-[8px] p-5 shadow-2xl relative overflow-hidden">
              {/* Header of Engineering Console */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-slate-300">SISTEMA ESTRUCTURAL NSR-10</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  ETABS v21 · Aa=0.25
                </span>
              </div>

              {/* Vector Blueprint Wireframe Display */}
              <div className="bg-[#071322] border border-sky-900/50 rounded p-4 relative font-mono text-[11px] text-sky-300">
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-sky-900/30 pb-2 mb-3">
                  <span>PÓRTICO RESISTENTE A MOMENTOS (DES)</span>
                  <span className="text-emerald-400">DERIVA: 0.82% &lt; 1.00% [CUMPLE]</span>
                </div>

                {/* SVG Structural Frame Model */}
                <div className="w-full h-48 relative flex items-center justify-center">
                  <svg viewBox="0 0 320 180" className="w-full h-full text-sky-400 stroke-current">
                    {/* Grid Lines */}
                    <g opacity="0.15" stroke="#38bdf8" strokeWidth="0.5">
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
                    <g fill="#0C2340" stroke="#0288D1" strokeWidth="2">
                      <rect x="30" y="155" width="20" height="15" />
                      <rect x="110" y="155" width="20" height="15" />
                      <rect x="190" y="155" width="20" height="15" />
                      <rect x="270" y="155" width="20" height="15" />
                      <line x1="20" y1="170" x2="300" y2="170" stroke="#E65100" strokeWidth="2" strokeDasharray="3 3" />
                    </g>

                    {/* Columns (DES special concrete) */}
                    <g stroke="#ffffff" strokeWidth="3.5">
                      <line x1="40" y1="20" x2="40" y2="155" />
                      <line x1="120" y1="20" x2="120" y2="155" />
                      <line x1="200" y1="20" x2="200" y2="155" />
                      <line x1="280" y1="20" x2="280" y2="155" />
                    </g>

                    {/* Beams with seismic moment resistance */}
                    <g stroke="#38bdf8" strokeWidth="3">
                      <line x1="40" y1="20" x2="280" y2="20" />
                      <line x1="40" y1="65" x2="280" y2="65" />
                      <line x1="40" y1="110" x2="280" y2="110" />
                      <line x1="40" y1="155" x2="280" y2="155" stroke="#E0E0E0" strokeWidth="4" />
                    </g>

                    {/* Diagonal Bracing (Vulnerabilidad / Reforzamiento) */}
                    <g stroke="#D9381E" strokeWidth="2" strokeDasharray="4 3">
                      <line x1="120" y1="155" x2="200" y2="110" />
                      <line x1="200" y1="155" x2="120" y2="110" />
                    </g>

                    {/* Node Connection Points */}
                    <g fill="#D9381E">
                      <circle cx="40" cy="20" r="3" />
                      <circle cx="120" cy="20" r="3" />
                      <circle cx="200" cy="20" r="3" />
                      <circle cx="280" cy="20" r="3" />
                      <circle cx="120" cy="110" r="3" />
                      <circle cx="200" cy="110" r="3" />
                    </g>

                    {/* Seismic Force Vector Arrow */}
                    <g stroke="#E65100" strokeWidth="2" fill="#E65100">
                      <line x1="5" y1="20" x2="28" y2="20" markerEnd="url(#arrow)" />
                      <polygon points="28,17 38,20 28,23" />
                      <text x="5" y="14" fill="#E65100" fontSize="9" fontWeight="bold">Fs (Sismo)</text>
                    </g>
                  </svg>
                </div>

                {/* Real Engineering Parameters */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-sky-900/30 text-[10px]">
                  <div>
                    <span className="text-slate-400">Resistencia Concreto:</span>
                    <span className="text-white block font-bold">f'c = 28 MPa (4000 psi)</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Acero Corrugado:</span>
                    <span className="text-white block font-bold">fy = 420 MPa (Grado 60)</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Zona Sísmica:</span>
                    <span className="text-white block font-bold">Pereira (Alta) Aa=0.25</span>
                  </div>
                  <div>
                    <span className="text-slate-400">Entregable Curaduría:</span>
                    <span className="text-emerald-400 block font-bold">Memorias + Planillas</span>
                  </div>
                </div>
              </div>

              {/* Direct Value Message (Req #12) */}
              <div className="mt-4 p-3 bg-white/5 rounded border border-white/5 flex items-start gap-2.5">
                <HardHat className="w-4 h-4 text-[#D9381E] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Firma de Responsabilidad Directa:</strong> Cada cálculo y visita técnica es atendida directamente por el Ingeniero Especialista, sin intermediarios comerciales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
