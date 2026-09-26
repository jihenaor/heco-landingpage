import React, { useState } from 'react';
import { 
  AlertTriangle, 
  HelpCircle, 
  Search, 
  PhoneCall, 
  Camera, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  Info
} from 'lucide-react';
import { PATHOLOGY_TRIAGE_CASES, COMPANY_INFO } from '../data/hecoData';
import { PathologyTriageCase } from '../types';

interface PathologySpecialSectionProps {
  onOpenQuoteModal: (mode: 'patologia') => void;
}

export const PathologySpecialSection: React.FC<PathologySpecialSectionProps> = ({ 
  onOpenQuoteModal 
}) => {
  const [selectedCase, setSelectedCase] = useState<PathologyTriageCase>(PATHOLOGY_TRIAGE_CASES[0]);

  return (
    <section id="patologias" className="py-16 bg-white border-b-4 border-[#D9381E]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Distinctive Heading (Req #7) */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            <AlertTriangle className="w-4 h-4 text-[#D9381E]" />
            <span>Diagnóstico Especializado de Daños Estructurales</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0C2340]">
            ¿Su edificación presenta fisuras, grietas o daños?
          </h2>

          <p className="text-base sm:text-lg text-[#1F2937] font-medium mt-3">
            Podemos ayudarle a determinar qué está ocurriendo y qué alternativas de intervención existen.
          </p>

          {/* Golden Rule Callout (Req #7) */}
          <div className="mt-4 p-4 bg-amber-50/80 border-l-4 border-[#E65100] rounded-r text-xs sm:text-sm text-slate-800 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0C2340] uppercase font-bold block mb-0.5">
                Criterio Clave: Una fisura no siempre significa un problema estructural.
              </strong>
              <span>
                Muchas fisuras obedecen a dilatación térmica, retracción plástica de acabados o deformaciones admisibles. Nuestro diagnóstico técnico determina con rigor si la seguridad de la edificación está comprometida antes de que gaste en reparaciones innecesarias o apresuradas.
              </span>
            </div>
          </div>
        </div>

        {/* 5-Step Diagnostic Protocol (Req #7) */}
        <div className="mb-12">
          <p className="text-xs uppercase font-bold tracking-wider text-[#6B7280] mb-3">
            Protocolo de Intervención Técnica HECO:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            {[
              { num: '01', title: 'Inspección', desc: 'Auscultación in-situ y mapeo fotográfico' },
              { num: '02', title: 'Diagnóstico', desc: 'Determinación del origen del daño' },
              { num: '03', title: 'Evaluación', desc: 'Cálculo de seguridad y riesgo actual' },
              { num: '04', title: 'Recomendación', desc: 'Alternativas de mitigación' },
              { num: '05', title: 'Reforzamiento', desc: 'Diseño ejecutivo si se requiere' }
            ].map((step, idx) => (
              <div 
                key={step.num}
                className="bg-[#F4F6F8] p-3 rounded border border-[#E0E0E0] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#D9381E] block mb-1">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-bold text-xs uppercase text-[#0C2340]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[10px] text-[#6B7280] mt-1">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Crack Triage Module (Visual Patterns & Risk Assessment) */}
        <div className="bg-[#F4F6F8] border border-[#E0E0E0] rounded-[8px] p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2 border-b border-[#E0E0E0] pb-4">
            <div>
              <h3 className="font-heading font-bold text-lg uppercase text-[#0C2340]">
                Guía Visual de Orientación Inicial (Triage de Fisuras)
              </h3>
              <p className="text-xs text-[#6B7280]">
                Identifique el patrón geométrico del daño que observa en su vivienda, edificio o bodega:
              </p>
            </div>
            <span className="text-[11px] font-mono bg-white px-3 py-1 rounded border border-[#E0E0E0] text-[#0C2340] font-semibold self-start md:self-auto">
              Auscultación Preliminar
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Pattern Selector List */}
            <div className="lg:col-span-5 space-y-2.5">
              {PATHOLOGY_TRIAGE_CASES.map((item) => {
                const isSelected = selectedCase.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedCase(item)}
                    className={`w-full text-left p-3.5 rounded-[4px] border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#D9381E] shadow-sm ring-1 ring-[#D9381E]'
                        : 'bg-white/60 border-[#E0E0E0] hover:bg-white'
                    }`}
                  >
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase text-[#0C2340] mb-0.5">
                        {item.patternName}
                      </h4>
                      <p className="text-[11px] text-[#6B7280] line-clamp-1">
                        {item.typicalLocation}
                      </p>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ml-2 ${
                      item.isStructuralRisk === 'Alto'
                        ? 'bg-red-100 text-[#D9381E]'
                        : item.isStructuralRisk === 'Medio'
                        ? 'bg-amber-100 text-[#E65100]'
                        : 'bg-emerald-100 text-[#2E7D32]'
                    }`}>
                      Riesgo {item.isStructuralRisk}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pattern Analysis Display */}
            <div className="lg:col-span-7 bg-white rounded-[6px] p-5 border border-[#E0E0E0] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="font-heading font-bold text-sm uppercase text-[#0C2340]">
                    Análisis Técnico del Patrón Seleccionado
                  </span>
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                    selectedCase.isStructuralRisk === 'Alto'
                      ? 'bg-red-100 text-[#D9381E]'
                      : selectedCase.isStructuralRisk === 'Medio'
                      ? 'bg-amber-100 text-[#E65100]'
                      : 'bg-emerald-100 text-[#2E7D32]'
                  }`}>
                    Nivel de Riesgo: {selectedCase.isStructuralRisk}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase font-bold text-[#6B7280] block mb-0.5">
                    Descripción Visual Típica:
                  </span>
                  <p className="text-xs text-[#1F2937] font-medium bg-slate-50 p-2.5 rounded border border-slate-200">
                    "{selectedCase.visualCue}"
                  </p>
                </div>

                <div>
                  <span className="text-[11px] uppercase font-bold text-[#6B7280] block mb-1">
                    Causas Mecánicas Probables:
                  </span>
                  <ul className="text-xs text-slate-700 space-y-1">
                    {selectedCase.probableCauses.map((cause, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <span className="text-[#D9381E] font-bold">·</span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/60 p-3 rounded border border-amber-200 text-xs">
                  <span className="font-bold text-[#0C2340] uppercase block mb-0.5">
                    Recomendación Preliminar:
                  </span>
                  <p className="text-slate-800">{selectedCase.recommendation}</p>
                </div>
              </div>

              {/* Action for this Pathology Case */}
              <div className="pt-3 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-[#6B7280]">
                  <strong>Paso HECO:</strong> {selectedCase.hecoNextStep}
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`${COMPANY_INFO.whatsappDirectUrl}?text=${encodeURIComponent(
                      `Hola Ing. HECO Consultoría, en mi edificación observo: ${selectedCase.patternName}. Quisiera agendar una inspección técnica o enviar fotografías para diagnóstico.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px] flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Enviar Fotos por WhatsApp</span>
                  </a>
                  <button
                    onClick={() => onOpenQuoteModal('patologia')}
                    className="flex-1 sm:flex-none bg-[#D9381E] hover:bg-[#B52B14] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px] flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Solicitar Visita Técnica</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
