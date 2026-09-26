import React from 'react';
import { 
  Award, 
  CheckCircle, 
  GraduationCap, 
  FileCheck, 
  Cpu, 
  ShieldCheck, 
  PhoneCall,
  UserCheck,
  Building
} from 'lucide-react';
import { ENGINEER_PROFILE, COMPANY_INFO } from '../data/hecoData';

interface AboutEngineerSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutEngineerSection: React.FC<AboutEngineerSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="sobre-heco" className="py-16 bg-[#F4F6F8] border-b border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header (Req #5) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            Autoridad Técnica y Responsabilidad
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0C2340]">
            El Conocimiento Detrás de Cada Proyecto
          </h2>
          <p className="text-sm text-[#6B7280] mt-2 font-normal">
            En ingeniería estructural la firma tiene peso legal y ético de por vida. En HECO usted cuenta con acceso directo al especialista que analiza y responde por su cálculo.
          </p>
        </div>

        {/* Specialist Profile Card */}
        <div className="bg-white rounded-[8px] border border-[#E0E0E0] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Engineer Photo & Direct Contact Column */}
            <div className="lg:col-span-4 bg-[#0C2340] text-white p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden blueprint-grid-dark">
              <div>
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#D9381E] mb-4 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                    alt="Ingeniero Civil Especialista en Estructuras HECO"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-[#0C2340]/20 mix-blend-multiply" />
                </div>

                <div className="text-center space-y-1 mb-6">
                  <h3 className="font-heading font-extrabold text-xl uppercase tracking-wide text-white">
                    {ENGINEER_PROFILE.name}
                  </h3>
                  <p className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                    {ENGINEER_PROFILE.title}
                  </p>
                  <p className="text-[11px] font-mono text-slate-300 bg-white/10 py-1 px-2 rounded inline-block mt-1">
                    {ENGINEER_PROFILE.registration}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 border-t border-b border-white/10 py-3 text-center mb-6">
                  <div>
                    <span className="font-mono font-bold text-lg text-white block">
                      {ENGINEER_PROFILE.experienceYears}+
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">Años Exp.</span>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-lg text-[#D9381E] block">
                      {ENGINEER_PROFILE.sqmDesigned}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">Diseñados</span>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-lg text-white block">
                      {ENGINEER_PROFILE.projectsCount}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">Proyectos</span>
                  </div>
                </div>
              </div>

              {/* Direct Advantage Callout (Req #12) */}
              <div className="bg-[#0A192F] p-4 rounded border border-white/10 text-xs">
                <p className="text-sky-200 font-bold mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Ventaja Competitiva Real:
                </p>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Trato directo sin intermediarios comerciales ni pasantes sin experiencia. El ingeniero que calcula su obra es el mismo que responde en curaduría y visita el terreno.
                </p>
              </div>
            </div>

            {/* Engineer Credentials, Competencies & Software */}
            <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-between space-y-6">
              {/* Education & Memberships */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280] mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#D9381E]" />
                  Formación Académica y Membresías:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#1F2937] font-medium">
                  {ENGINEER_PROFILE.education.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote / Ethos */}
              <blockquote className="border-l-4 border-[#D9381E] pl-4 py-2 bg-slate-50 italic text-xs sm:text-sm text-slate-700">
                "{ENGINEER_PROFILE.quote}"
              </blockquote>

              {/* Key Technical Competencies */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280] mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#0C2340]" />
                  Especialidades Técnicas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {ENGINEER_PROFILE.keyCompetencies.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#D9381E] font-bold">·</span>
                      <span className="leading-snug">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Software Tools Suite (Req #5) */}
              <div>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#6B7280] mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#0056B3]" />
                  Herramientas y Software Especializado de Modelación:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {ENGINEER_PROFILE.softwareTools.map((soft, idx) => (
                    <div key={idx} className="bg-[#F4F6F8] p-2.5 rounded border border-[#E0E0E0] text-xs">
                      <span className="font-mono font-bold text-[#0C2340] block">
                        {soft.name}
                      </span>
                      <span className="text-[10px] text-[#6B7280] line-clamp-1">
                        {soft.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#E0E0E0] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-[#6B7280]">
                  Ubicación de Consulta: <strong>Pereira & Risaralda</strong>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={COMPANY_INFO.whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px] flex items-center gap-1.5 shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>WhatsApp Directo</span>
                  </a>
                  <button
                    onClick={onOpenQuoteModal}
                    className="bg-[#0C2340] hover:bg-[#0A192F] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px]"
                  >
                    Solicitar Consulta
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
