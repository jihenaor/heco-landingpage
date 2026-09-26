import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  FolderDown, 
  ShieldAlert,
  Compass,
  FileCheck
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/hecoData';
import { LineaCotaProgreso } from './animaciones/LineaCotaProgreso';

export const MethodologySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section id="metodologia" className="py-16 bg-[#F4F6F8] border-b border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            Proceso de Ingeniería
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0C2340]">
            Así Trabajamos
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            Un flujo estructurado en 5 etapas que asegura rigor analítico, constructibilidad y certidumbre técnica desde el primer día.
          </p>
        </div>

        <LineaCotaProgreso totalPasos={METHODOLOGY_STEPS.length} pasoActivo={activeStepIndex} />

        {/* 5 Step Process Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-8">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 rounded-[4px] border text-left transition-all cursor-pointer relative ${
                activeStepIndex === idx
                  ? 'bg-[#0C2340] border-[#0C2340] text-white shadow-md'
                  : 'bg-white border-[#E0E0E0] text-[#1F2937] hover:border-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-xs font-bold ${
                  activeStepIndex === idx ? 'text-[#D9381E]' : 'text-[#6B7280]'
                }`}>
                  PASO {step.step}
                </span>
                {idx < METHODOLOGY_STEPS.length - 1 && (
                  <span className="hidden sm:inline text-xs opacity-40">→</span>
                )}
              </div>
              <h3 className="font-heading font-bold text-xs uppercase truncate">
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase */}
        <div className="bg-white rounded-[8px] p-6 lg:p-8 border border-[#E0E0E0] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-black text-[#D9381E]">
                  {activeStep.step}
                </span>
                <span className="text-slate-300">/</span>
                <h3 className="font-heading font-bold text-xl uppercase text-[#0C2340]">
                  {activeStep.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#1F2937] font-medium">
                {activeStep.summary}
              </p>

              <div className="space-y-2 pt-2">
                <p className="text-xs uppercase font-bold text-[#6B7280]">
                  Acciones clave del ingeniero:
                </p>
                <ul className="space-y-2 text-xs text-slate-700">
                  {activeStep.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0056B3] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step Deliverable Box */}
            <div className="lg:col-span-5 bg-[#F4F6F8] border border-[#E0E0E0] rounded-[6px] p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0C2340]">
                <FileCheck className="w-4 h-4 text-[#2E7D32]" />
                <span>Entregable de esta fase:</span>
              </div>

              <div className="bg-white p-3 rounded border border-[#E0E0E0] font-mono text-xs text-[#0C2340] font-semibold">
                {activeStep.output}
              </div>

              <p className="text-[11px] text-[#6B7280]">
                Toda la documentación se genera bajo estándares de Curaduría Urbana y queda respaldada en el expediente digital de HECO Consultoría.
              </p>

              <div className="pt-2 flex items-center justify-between text-xs">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="font-bold text-[#6B7280] disabled:opacity-30 hover:text-[#0C2340] cursor-pointer"
                >
                  ← Anterior
                </button>
                <button
                  disabled={activeStepIndex === METHODOLOGY_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(METHODOLOGY_STEPS.length - 1, prev + 1))}
                  className="font-bold text-[#0C2340] disabled:opacity-30 hover:text-[#D9381E] cursor-pointer flex items-center gap-1"
                >
                  <span>Siguiente paso</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
