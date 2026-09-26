import React, { useState } from 'react';
import { 
  Building2, 
  AlertTriangle, 
  ShieldAlert, 
  FileCheck2, 
  CheckCircle, 
  FileText, 
  ArrowRight,
  Sparkles,
  Layers,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/hecoData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  activePath?: 'diseno' | 'patologia';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenQuoteModal,
  activePath 
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    activePath === 'patologia' ? 'patologia-diagnostico' : 'diseno-estructural'
  );

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-sky-600" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-[#D9381E]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#E65100]" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-[#0C2340]" />;
      default:
        return <Building2 className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section id="servicios" className="py-16 bg-[#F4F6F8] border-b border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            <span>Especialización Técnica en Pereira</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0C2340]">
            Servicios Especializados de Ingeniería Estructural
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-3">
            Cada servicio cuenta con alcance riguroso, memoria técnica justificativa y el respaldo de un Ingeniero Civil Especialista en Estructuras.
          </p>
        </div>

        {/* 4 Specialized Service Cards Grid (Req #2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SERVICES_DATA.map((srv) => {
            const isPatologia = srv.id === 'patologia-diagnostico';
            return (
              <div
                key={srv.id}
                className={`bg-white rounded-[8px] p-6 lg:p-7 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md ${
                  isPatologia
                    ? 'border-2 border-[#D9381E]/40 hover:border-[#D9381E]'
                    : 'border-[#E0E0E0] hover:border-[#0C2340]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded bg-[#F4F6F8] border border-[#E0E0E0] flex items-center justify-center shrink-0">
                        {getServiceIcon(srv.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B7280]">
                          {srv.normativeContext}
                        </span>
                        <h3 className="font-heading font-bold text-lg sm:text-xl uppercase text-[#0C2340]">
                          {srv.title}
                        </h3>
                      </div>
                    </div>

                    {srv.badge && (
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                        isPatologia 
                          ? 'bg-red-50 text-[#D9381E] border border-red-200' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-[#1F2937] font-medium mb-3">
                    {srv.shortDesc}
                  </p>

                  <p className="text-xs text-[#6B7280] mb-5 leading-relaxed">
                    {srv.longDesc}
                  </p>

                  {/* Subservices List (Explicit list from prompt) */}
                  <div className="bg-[#F4F6F8] rounded p-4 mb-4 border border-[#E0E0E0]">
                    <p className="text-[11px] uppercase font-bold tracking-wider text-[#0C2340] mb-2.5">
                      Alcance del Servicio:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-[#1F2937]">
                      {srv.subservices.map((sub, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D9381E] font-bold text-sm leading-none mt-0.5">·</span>
                          <span className="leading-tight">{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-1 mb-5">
                    <p className="text-[11px] uppercase font-bold text-[#6B7280]">
                      Entregables Técnicos:
                    </p>
                    <ul className="text-xs text-[#6B7280] space-y-1">
                      {srv.deliverables.map((del, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 border-t border-[#E0E0E0]">
                  <button
                    onClick={() => onOpenQuoteModal(srv.id)}
                    className={`w-full text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-[4px] flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isPatologia
                        ? 'bg-[#D9381E] hover:bg-[#B52B14] text-white'
                        : 'bg-[#0C2340] hover:bg-[#0A192F] text-white'
                    }`}
                  >
                    <span>Consultar {srv.title} con el Ingeniero</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Assistance Callout */}
        <div className="bg-white rounded-[8px] p-6 border border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-base text-[#0C2340] uppercase">
              ¿No está seguro de qué servicio o alcance requiere su proyecto?
            </h4>
            <p className="text-xs text-[#6B7280]">
              Evite cotizaciones a ciegas. Una breve llamada o revisión técnica preliminar le orienta con total transparencia y rigor.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('patologia')}
            className="shrink-0 bg-transparent border-2 border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white font-bold text-xs uppercase px-5 py-2.5 rounded-[4px] transition-colors cursor-pointer"
          >
            Orientación Técnica 1 a 1
          </button>
        </div>
      </div>
    </section>
  );
};
