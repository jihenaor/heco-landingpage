import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/hecoData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A192F] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Brand & Authority */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0C2340] border border-[#D9381E] rounded flex items-center justify-center">
                <div className="w-4 h-4 border border-white border-t-[#D9381E] flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#D9381E]" />
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white tracking-wider block leading-none">
                  HECO
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#D9381E] font-bold">
                  Consultoría Estructural
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Firma de ingeniería estructural con sede en Pereira, Risaralda. Especialistas en diseño sismorresistente bajo NSR-10, diagnóstico de patologías y reforzamiento de edificaciones.
            </p>

            <div className="pt-1 text-[11px] text-slate-400">
              <span className="font-bold text-white block">Matrícula COPNIA:</span>
              <span>Ingeniería Civil Especializada en Estructuras</span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase text-white tracking-wider mb-3 pb-1 border-b border-slate-700">
              Servicios Especializados
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#servicios"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#D9381E]">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#patologias"
                  className="hover:text-[#D9381E] text-slate-300 transition-colors flex items-center gap-1.5 font-bold"
                >
                  <span className="text-[#D9381E]">›</span>
                  <span>Diagnóstico de Fisuras & Patologías</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Coverage & Compliance */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase text-white tracking-wider mb-3 pb-1 border-b border-slate-700">
              Cobertura & Normativa
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-white block font-semibold">Área Metropolitana:</span>
                <span>Pereira, Dosquebradas, Santa Rosa de Cabal, La Virginia (Risaralda).</span>
              </div>

              <div>
                <span className="text-white block font-semibold">Eje Cafetero & Nacional:</span>
                <span>Manizales, Armenia, Chinchiná y proyectos a nivel nacional mediante BIM.</span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-[11px]">Cumplimiento estricto Ley 400 y NSR-10</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase text-white tracking-wider mb-3 pb-1 border-b border-slate-700">
              Contacto Técnico Directo
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9381E] shrink-0 mt-0.5" />
                <span>Sector Pinares / Circunvalar, Pereira, Risaralda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={COMPANY_INFO.whatsappDirectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Lun - Vie: 7:30 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} {COMPANY_INFO.name}. Todos los derechos reservados. Consultoría y Actividades de Ingeniería Especializada en Pereira.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Reglamento Colombiano NSR-10</span>
            <span>·</span>
            <span>Ley 1796 de 2016</span>
            <span>·</span>
            <span>Curaduría Urbana Pereira</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
