import React from 'react';
import { X, MapPin, Calendar, Layers, ShieldCheck, Cpu, CheckCircle2, Download } from 'lucide-react';
import { ProjectCaseStudy } from '../types';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onOpenQuoteModal: (mode: 'diseno' | 'patologia') => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  onClose,
  onOpenQuoteModal 
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-[8px] max-w-3xl w-full border border-[#0C2340] shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#0C2340] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D9381E]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase bg-[#D9381E] px-2 py-0.5 rounded font-bold">
                CASO DE ESTUDIO TÉCNICO
              </span>
              <span className="text-xs text-slate-300 font-mono">
                {project.id}
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl uppercase tracking-wide text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Photo Banner with Blueprint Overlay */}
          <div className="relative h-64 rounded-[6px] overflow-hidden bg-slate-900 border border-[#E0E0E0]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
              <span className="flex items-center gap-1.5 font-bold">
                <MapPin className="w-4 h-4 text-[#D9381E]" />
                {project.location}
              </span>
              <span className="font-mono bg-[#0C2340]/90 px-2.5 py-1 rounded border border-white/20">
                {project.specifications.seismicZone}
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-[#F4F6F8] p-3 rounded border border-[#E0E0E0]">
              <span className="text-[10px] text-[#6B7280] uppercase block">Área Construida</span>
              <span className="font-bold text-base text-[#0C2340] font-mono">{project.areaM2.toLocaleString()} m²</span>
            </div>
            <div className="bg-[#F4F6F8] p-3 rounded border border-[#E0E0E0]">
              <span className="text-[10px] text-[#6B7280] uppercase block">Pisos / Niveles</span>
              <span className="font-bold text-base text-[#0C2340] font-mono">{project.levels}</span>
            </div>
            <div className="bg-[#F4F6F8] p-3 rounded border border-[#E0E0E0]">
              <span className="text-[10px] text-[#6B7280] uppercase block">Año Proyecto</span>
              <span className="font-bold text-base text-[#0C2340] font-mono">{project.year}</span>
            </div>
            <div className="bg-[#F4F6F8] p-3 rounded border border-[#E0E0E0]">
              <span className="text-[10px] text-[#6B7280] uppercase block">Tipología</span>
              <span className="font-bold text-xs text-[#0C2340] block truncate">{project.category}</span>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-[#0A192F] text-white p-4 rounded-[6px] border border-white/10 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase text-sky-300 tracking-wider">
              Especificaciones de Materiales & Análisis Estructural:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Concreto Estructural:</span>
                <span className="font-bold font-mono text-white">{project.specifications.concrete}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Acero de Refuerzo:</span>
                <span className="font-bold font-mono text-white">{project.specifications.steel}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Sistema Resistente a Sismo:</span>
                <span className="text-white">{project.structuralSystem}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Herramientas de Cálculo:</span>
                <span className="text-emerald-400 font-mono">{project.specifications.software.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* 3 Pillars of the Case Study */}
          <div className="space-y-3 text-xs">
            <div className="bg-red-50 p-3.5 rounded border-l-4 border-[#D9381E]">
              <span className="font-heading font-bold text-xs uppercase text-[#D9381E] block mb-1">
                1. Problema & Reto Geotécnico o Estructural:
              </span>
              <p className="text-slate-800 leading-relaxed">{project.problem}</p>
            </div>

            <div className="bg-sky-50 p-3.5 rounded border-l-4 border-[#0056B3]">
              <span className="font-heading font-bold text-xs uppercase text-[#0056B3] block mb-1">
                2. Intervención & Modelación HECO Consultoría:
              </span>
              <p className="text-slate-800 leading-relaxed">{project.hecoIntervention}</p>
            </div>

            <div className="bg-emerald-50 p-3.5 rounded border-l-4 border-[#2E7D32]">
              <span className="font-heading font-bold text-xs uppercase text-[#2E7D32] block mb-1">
                3. Resultado Comprobado & Aprobación:
              </span>
              <p className="text-slate-800 leading-relaxed font-medium">{project.result}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F4F6F8] px-6 py-4 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#6B7280]">
            ¿Tiene un proyecto similar en Pereira o Risaralda?
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs uppercase font-bold text-[#6B7280] hover:text-[#0C2340] cursor-pointer"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(project.category === 'Evaluación & Patología' ? 'patologia' : 'diseno');
              }}
              className="bg-[#D9381E] hover:bg-[#B52B14] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px] cursor-pointer"
            >
              Cotizar Proyecto Similar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
