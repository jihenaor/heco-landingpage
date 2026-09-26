import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/hecoData';

export const FloatingWhatsApp: React.FC = () => {
  const defaultMessage = encodeURIComponent(
    'Hola Ing. HECO Consultoría, tengo un proyecto en Pereira / Risaralda y quisiera consultar sobre diseño estructural o diagnóstico de fisuras.'
  );

  return (
    <aside 
      aria-label="Atención por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip bubble on hover */}
      <span className="hidden sm:inline-block mr-3 bg-[#0C2340] text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
        ¿Hablamos de su proyecto? WhatsApp directo
      </span>

      {/* Floating Circle Button */}
      <a
        href={`${COMPANY_INFO.whatsappDirectUrl}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 relative cursor-pointer"
        aria-label="Abrir chat de WhatsApp con HECO Consultoría"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D9381E] border-2 border-white rounded-full" />
      </a>
    </aside>
  );
};
