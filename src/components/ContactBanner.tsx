import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/hecoData';

interface ContactBannerProps {
  onOpenQuoteModal: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-[#0C2340] text-white py-14 border-t-4 border-[#D9381E] blueprint-grid-dark">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Central WhatsApp Header (Req #9) */}
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-2">
          ¿Tiene un proyecto? Hablemos.
        </h2>

        {/* Central WhatsApp Primary Button (Req #9) */}
        <div className="my-6">
          <a
            href={`${COMPANY_INFO.whatsappDirectUrl}?text=${encodeURIComponent(
              'Hola Ing. HECO Consultoría, tengo un proyecto en Pereira / Risaralda y quisiera consultar su viabilidad técnica.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base uppercase tracking-wider py-3.5 px-8 rounded-[4px] shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp — Consultar mi proyecto</span>
          </a>
        </div>

        {/* Supportive Text (Req #9) */}
        <p className="font-body text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Envíenos una descripción del proyecto, planos o fotografías y revisaremos la información inicial sin compromiso.
        </p>

        {/* Alternative Quote Option */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
          <span>O si lo prefiere, use nuestro estimador técnico online:</span>
          <button
            onClick={onOpenQuoteModal}
            className="text-white font-bold uppercase underline hover:text-[#D9381E] cursor-pointer flex items-center gap-1"
          >
            <span>Generar estimación técnica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
