import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Hammer, 
  TrendingDown, 
  UserCheck, 
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { WHY_HECO_PILLARS } from '../data/hecoData';

export const WhyHecoSection: React.FC = () => {
  return (
    <section id="porque-heco" className="py-16 bg-[#0C2340] text-white relative blueprint-grid-dark">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            Diferenciador Técnico
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white">
            ¿Por qué trabajar con HECO?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal">
            Sustituimos las palabras genéricas de "calidad y compromiso" por cinco principios de ingeniería y evidencia técnica comprobable.
          </p>
        </div>

        {/* 5 Technical Pillars Grid (Req #4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_HECO_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`bg-[#0A192F] border border-white/10 rounded-[8px] p-6 hover:border-[#D9381E] transition-all relative flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Number & Pillar Title */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#D9381E]">
                    {pillar.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase text-slate-400 border border-white/10 px-2 py-0.5 rounded">
                    Principio {pillar.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg uppercase text-white mb-2">
                  {pillar.title}
                </h3>

                <h4 className="text-xs font-semibold text-sky-300 mb-3 leading-snug">
                  "{pillar.headline}"
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              {/* Technical Evidence Tag */}
              <div className="pt-3 border-t border-white/10 text-xs">
                <span className="text-[10px] uppercase font-bold text-[#E65100] block mb-1">
                  Evidencia en Obra:
                </span>
                <p className="text-slate-200 text-[11px] flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pillar.evidence}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Guarantee Banner */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-[8px] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#D9381E] flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase font-heading">
                Garantía de Aprobación en Curaduría Urbana
              </p>
              <p className="text-xs text-slate-300">
                Subsanamos cualquier requerimiento de actas de observaciones sin costo adicional hasta la ejecutoria de la licencia de construcción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
