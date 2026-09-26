import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, FileQuestion, ArrowRight } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/hecoData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'todas' | 'diseno' | 'patologia' | 'normativa' | 'consultoria'>('todas');

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'todas' || faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="faq" className="py-16 bg-white border-b border-[#E0E0E0]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header (Req #10) */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase font-bold tracking-widest text-[#D9381E] mb-2">
            Preguntas Frecuentes & Criterio Normativo
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#0C2340]">
            Resolvemos sus Dudas Técnicas
          </h2>
          <p className="text-sm text-[#6B7280] mt-2">
            Respuestas directas sobre plazos, costos, visitas en Pereira y trámites ante Curaduría Urbana bajo la NSR-10.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por: fisuras, curaduría, plazos, estudio de suelos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F4F6F8] border border-[#E0E0E0] rounded-[4px] pl-9 pr-4 py-2.5 text-xs text-[#1F2937] focus:outline-none focus:border-[#0C2340]"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {(['todas', 'diseno', 'patologia', 'normativa', 'consultoria'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase font-bold px-3 py-2 rounded-[4px] transition-colors shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0C2340] text-white'
                    : 'bg-[#F4F6F8] text-[#6B7280] hover:bg-slate-200'
                }`}
              >
                {cat === 'todas' ? 'Todas' : cat === 'diseno' ? 'Diseño' : cat === 'patologia' ? 'Patología' : cat === 'normativa' ? 'NSR-10' : 'Consultoría'}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500 bg-[#F4F6F8] rounded p-6">
              No se encontraron preguntas con ese criterio. Puede consultarnos directamente por WhatsApp.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-[#E0E0E0] rounded-[6px] overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-bold text-xs sm:text-sm uppercase text-[#0C2340] leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D9381E] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#1F2937] leading-relaxed border-t border-slate-100 bg-[#F4F6F8]/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-10">
          <p className="text-xs text-[#6B7280]">
            ¿Tiene una inquietud particular sobre su proyecto o predio?
          </p>
          <a
            href={`${COMPANY_INFO.whatsappDirectUrl}?text=${encodeURIComponent(
              'Hola Ing. HECO Consultoría, tengo una duda técnica sobre mi edificación y quisiera consultarla.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#D9381E] hover:text-[#B52B14] mt-1"
          >
            <span>Hacer una consulta directa por WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
