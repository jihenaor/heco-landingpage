import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Maximize2, 
  Layers, 
  Cpu, 
  AlertCircle, 
  CheckCircle2, 
  Wrench,
  FileSpreadsheet,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_CASE_STUDIES } from '../data/hecoData';
import { ProjectCaseStudy } from '../types';

interface ProjectsSectionProps {
  onOpenProjectDetail: (project: ProjectCaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectDetail }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Industrial', 'Evaluación & Patología', 'Reforzamiento'];

  const filteredProjects = activeCategory === 'Todos'
    ? PROJECTS_CASE_STUDIES
    : PROJECTS_CASE_STUDIES.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-16 bg-white border-b border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
              Evidencia Técnica y Casos de Estudio
            </p>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0C2340]">
              Proyectos con Datos Reales
            </h2>
            <p className="text-sm text-[#6B7280] mt-1 max-w-xl">
              No decimos sólo "tenemos amplia experiencia". Presentamos los retos geotécnicos, la modelación y los resultados medibles en Pereira y Risaralda.
            </p>
          </div>

          {/* Functional Filter Tabs (Allowed button segmented control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0C2340] text-white shadow-sm'
                    : 'bg-[#F4F6F8] text-[#1F2937] hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid (Req #3) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#F4F6F8] border border-[#E0E0E0] rounded-[8px] overflow-hidden flex flex-col justify-between hover:border-[#0C2340] transition-all hover:shadow-md group"
            >
              {/* Image & Quick Technical Overlay */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-transparent to-black/30" />

                {/* Top Location and Category */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="bg-[#0C2340]/90 text-white font-mono text-[11px] px-2.5 py-1 rounded backdrop-blur-sm border border-white/10 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D9381E]" />
                    {proj.location}
                  </span>
                  <span className="bg-white/90 text-[#0C2340] font-bold text-[11px] uppercase px-2.5 py-1 rounded">
                    {proj.category}
                  </span>
                </div>

                {/* Bottom Technical Blueprint Ribbon */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-[#0A192F]/90 backdrop-blur-sm border border-sky-400/20 px-3 py-1.5 rounded text-[11px] font-mono text-sky-200 flex items-center justify-between">
                    <span className="truncate">{proj.blueprintSnippet}</span>
                    <span className="text-white font-bold ml-2 shrink-0">{proj.year}</span>
                  </div>
                </div>
              </div>

              {/* Technical Case Study Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl uppercase text-[#0C2340] mb-3">
                    {proj.title}
                  </h3>

                  {/* Quantitative Metrics Bar (Req #3) */}
                  <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-white rounded border border-[#E0E0E0] mb-4 text-center">
                    <div>
                      <span className="text-[10px] text-[#6B7280] uppercase block">Área</span>
                      <span className="font-bold text-sm text-[#0C2340]">{proj.areaM2.toLocaleString()} m²</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B7280] uppercase block">Niveles</span>
                      <span className="font-bold text-sm text-[#0C2340]">{proj.levels}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6B7280] uppercase block">Año</span>
                      <span className="font-bold text-sm text-[#0C2340]">{proj.year}</span>
                    </div>
                  </div>

                  <div className="text-xs text-[#6B7280] mb-4">
                    <strong className="text-[#0C2340]">Sistema Estructural:</strong> {proj.structuralSystem}
                  </div>

                  {/* 3 Explicit Case Study Sections: Problema, Intervención, Resultado */}
                  <div className="space-y-3 text-xs">
                    {/* Problema */}
                    <div className="bg-red-50/70 border-l-3 border-[#D9381E] p-2.5 rounded-r">
                      <span className="font-bold uppercase text-[#D9381E] block mb-0.5 text-[11px]">
                        Problema / Reto Inicial:
                      </span>
                      <p className="text-slate-800 leading-relaxed">{proj.problem}</p>
                    </div>

                    {/* Intervención HECO */}
                    <div className="bg-sky-50/70 border-l-3 border-[#0056B3] p-2.5 rounded-r">
                      <span className="font-bold uppercase text-[#0056B3] block mb-0.5 text-[11px]">
                        Intervención HECO Consultoría:
                      </span>
                      <p className="text-slate-800 leading-relaxed">{proj.hecoIntervention}</p>
                    </div>

                    {/* Resultado */}
                    <div className="bg-emerald-50/70 border-l-3 border-[#2E7D32] p-2.5 rounded-r">
                      <span className="font-bold uppercase text-[#2E7D32] block mb-0.5 text-[11px]">
                        Resultado Comprobado:
                      </span>
                      <p className="text-slate-800 leading-relaxed font-medium">{proj.result}</p>
                    </div>
                  </div>
                </div>

                {/* View Technical Details Action */}
                <div className="pt-4 border-t border-[#E0E0E0] flex items-center justify-between">
                  <div className="text-[11px] text-[#6B7280] font-mono">
                    Software: {proj.specifications.software.join(' · ')}
                  </div>
                  <button
                    onClick={() => onOpenProjectDetail(proj)}
                    className="text-xs font-bold text-[#0C2340] hover:text-[#D9381E] uppercase flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Ficha Técnica</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
