import React from 'react';
import { 
  Building2, 
  Search, 
  ArrowRight, 
  Check, 
  FileCheck2, 
  AlertTriangle,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

interface CommercialPathsProps {
  onSelectPath: (path: 'diseno' | 'patologia') => void;
  onOpenQuoteModal: (mode: 'diseno' | 'patologia') => void;
}

export const CommercialPaths: React.FC<CommercialPathsProps> = ({ 
  onSelectPath, 
  onOpenQuoteModal 
}) => {
  return (
    <section className="py-12 bg-white border-b border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            Ruta de Solución Técnica
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#0C2340]">
            ¿Cuál es el estado de su proyecto?
          </h2>
          <p className="text-sm text-[#6B7280] mt-2 font-normal">
            En HECO organizamos nuestros servicios según su necesidad inmediata: diseñar una nueva edificación o evaluar y asegurar una estructura existente.
          </p>
        </div>

        {/* The Two Parallel Paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PATH 1: QUIERO DISEÑAR / CONSTRUIR */}
          <div className="bg-[#F4F6F8] rounded-[8px] p-6 lg:p-8 border border-[#E0E0E0] hover:border-[#0C2340] transition-all flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#0C2340] text-white rounded flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-xs font-mono font-bold bg-[#0C2340]/10 text-[#0C2340] px-2.5 py-1 rounded">
                  ETAPA PRE-CONSTRUCTIVA
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl uppercase text-[#0C2340] mb-2">
                  Quiero Diseñar / Construir
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Para promotores, arquitectos y constructores que requieren el paquete estructural completo para licenciamiento ante Curaduría Urbana y ejecución de obra.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E0E0E0]">
                <p className="text-xs uppercase tracking-wider font-bold text-[#1F2937]">
                  Servicios incluidos en esta ruta:
                </p>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Diseño Estructural NSR-10:</strong> Concreto, acero o mampostería</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Revisión Independiente:</strong> Certificación bajo Ley 1796</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Memorias de Cálculo:</strong> Justificación analítica y espectral</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Planos de Despiece:</strong> Cuadros de columnas y vigas constructibles</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E0E0E0]">
              <button
                onClick={() => {
                  onSelectPath('diseno');
                  onOpenQuoteModal('diseno');
                }}
                className="w-full bg-[#0C2340] hover:bg-[#0A192F] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Cotizar Diseño Nuevo para Curaduría</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PATH 2: YA TENGO UNA ESTRUCTURA */}
          <div className="bg-[#F4F6F8] rounded-[8px] p-6 lg:p-8 border border-red-200 hover:border-[#D9381E] transition-all flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-[#D9381E] text-white rounded flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono font-bold bg-red-100 text-[#D9381E] px-2.5 py-1 rounded">
                  ESTRUCTURA EXISTENTE
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl uppercase text-[#0C2340] mb-2">
                  Ya Tengo una Estructura
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Para propietarios, administradores de propiedad horizontal y aseguradoras que necesitan evaluar fisuras, asentamientos o adecuar una edificación a la norma sísmica.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E0E0E0]">
                <p className="text-xs uppercase tracking-wider font-bold text-[#1F2937]">
                  Servicios incluidos en esta ruta:
                </p>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D9381E] shrink-0" />
                    <span><strong>Inspección y Patología:</strong> Diagnóstico pericial de fisuras y daños</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D9381E] shrink-0" />
                    <span><strong>Vulnerabilidad Sísmica:</strong> Evaluación según Capítulo A.10</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D9381E] shrink-0" />
                    <span><strong>Diseño de Reforzamiento:</strong> Encamisados, fibra de carbono y acero</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D9381E] shrink-0" />
                    <span><strong>Peritaje Técnico:</strong> Dictamen pericial para trámites o seguros</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E0E0E0]">
              <button
                onClick={() => {
                  onSelectPath('patologia');
                  onOpenQuoteModal('patologia');
                }}
                className="w-full bg-[#D9381E] hover:bg-[#B52B14] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-[4px] flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>Solicitar Inspección Técnica de Daños</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
