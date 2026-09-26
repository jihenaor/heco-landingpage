import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Menu, 
  X, 
  MessageSquare,
  LayoutDashboard,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/hecoData';

interface HeaderProps {
  activeView: 'landing' | 'dashboard';
  setActiveView: (view: 'landing' | 'dashboard') => void;
  onOpenQuoteModal: (mode?: 'diseno' | 'patologia') => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeView, 
  setActiveView, 
  onOpenQuoteModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (activeView !== 'landing') {
      setActiveView('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md bg-white">
      {/* 1. TOP UTILITY BAR (Design System: #0C2340 background, white text) */}
      <div className="bg-[#0C2340] text-white text-xs py-2 px-4 border-b border-[#0A192F]">
        <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-y-1">
          <div className="flex items-center gap-4 flex-wrap text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin className="w-3.5 h-3.5 text-[#D9381E]" />
              Pereira & Risaralda · Colombia
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Norma Sismorresistente NSR-10 · Ley 400
            </span>
            <span className="hidden lg:inline-block text-slate-500">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Lun-Vie: 7:30 - 18:00
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D9381E]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a 
              href={COMPANY_INFO.whatsappDirectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-emerald-400 transition-colors bg-white/10 px-2 py-0.5 rounded"
            >
              <Phone className="w-3 h-3 text-[#25D366]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          {/* Technical Structural Icon Emblem */}
          <div className="w-10 h-10 bg-[#0C2340] border-2 border-[#D9381E] rounded flex items-center justify-center relative overflow-hidden group-hover:bg-[#0A192F] transition-colors">
            <div className="absolute inset-0 opacity-20 blueprint-grid" />
            <div className="relative flex flex-col items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-[#D9381E] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#D9381E]" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-extrabold text-2xl tracking-wider text-[#0C2340]">
                HECO
              </span>
              <span className="font-heading font-semibold text-xs text-[#D9381E] uppercase tracking-widest">
                Consultoría
              </span>
            </div>
            <p className="text-[10px] tracking-wider text-[#6B7280] uppercase font-medium">
              Ingeniería Estructural · Pereira
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-xs uppercase font-bold text-[#1F2937] hover:text-[#D9381E] transition-colors tracking-wide cursor-pointer"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('proyectos')}
            className="text-xs uppercase font-bold text-[#1F2937] hover:text-[#D9381E] transition-colors tracking-wide cursor-pointer"
          >
            Proyectos (Casos)
          </button>
          <button 
            onClick={() => scrollToSection('porque-heco')}
            className="text-xs uppercase font-bold text-[#1F2937] hover:text-[#D9381E] transition-colors tracking-wide cursor-pointer"
          >
            ¿Por qué HECO?
          </button>
          <button 
            onClick={() => scrollToSection('metodologia')}
            className="text-xs uppercase font-bold text-[#1F2937] hover:text-[#D9381E] transition-colors tracking-wide cursor-pointer"
          >
            Metodología
          </button>
          <button 
            onClick={() => scrollToSection('patologias')}
            className="text-xs uppercase font-bold text-[#D9381E] hover:text-[#B52B14] transition-colors tracking-wide cursor-pointer flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E] animate-pulse" />
            Patologías & Daños
          </button>
          <button 
            onClick={() => scrollToSection('sobre-heco')}
            className="text-xs uppercase font-bold text-[#1F2937] hover:text-[#D9381E] transition-colors tracking-wide cursor-pointer"
          >
            Sobre HECO
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-xs uppercase font-bold text-[#1F2937] hover:text-[#D9381E] transition-colors tracking-wide cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Action Controls & Dashboard Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Toggle between Landing and Client Dashboard */}
          <button
            onClick={() => setActiveView(activeView === 'landing' ? 'dashboard' : 'landing')}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase px-3 py-2 rounded border border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white transition-all cursor-pointer"
            title="Acceso al expediente técnico y planos para clientes y contratistas"
          >
            {activeView === 'landing' ? (
              <>
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Portal Proyectos</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5" />
                <span>Vista Servicios</span>
              </>
            )}
          </button>

          {/* Primary CTA (Design System: #D9381E, uppercase, 12px 28px, 4px radius) */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#D9381E] hover:bg-[#B52B14] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded-[4px] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Solicitar Evaluación</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#D9381E] text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-[4px]"
          >
            Cotizar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0C2340] hover:bg-slate-100 rounded focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E0E0E0] px-4 py-4 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                setActiveView('landing');
                setMobileMenuOpen(false);
              }}
              className={`text-xs py-2 px-3 rounded font-bold uppercase text-center ${
                activeView === 'landing' ? 'bg-[#0C2340] text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Firma & Servicios
            </button>
            <button
              onClick={() => {
                setActiveView('dashboard');
                setMobileMenuOpen(false);
              }}
              className={`text-xs py-2 px-3 rounded font-bold uppercase text-center ${
                activeView === 'dashboard' ? 'bg-[#0C2340] text-white' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Portal Proyectos
            </button>
          </div>

          <div className="flex flex-col space-y-2.5 pt-1">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-left text-sm font-semibold text-slate-800 hover:text-[#D9381E] py-1"
            >
              1. Servicios de Ingeniería
            </button>
            <button
              onClick={() => scrollToSection('proyectos')}
              className="text-left text-sm font-semibold text-slate-800 hover:text-[#D9381E] py-1"
            >
              2. Casos de Estudio Reales
            </button>
            <button
              onClick={() => scrollToSection('porque-heco')}
              className="text-left text-sm font-semibold text-slate-800 hover:text-[#D9381E] py-1"
            >
              3. ¿Por qué HECO? (Criterio Técnico)
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-left text-sm font-semibold text-slate-800 hover:text-[#D9381E] py-1"
            >
              4. Metodología de Trabajo
            </button>
            <button
              onClick={() => scrollToSection('patologias')}
              className="text-left text-sm font-bold text-[#D9381E] py-1 flex items-center justify-between"
            >
              <span>5. Patologías y Diagnóstico de Fisuras</span>
              <span className="text-[10px] bg-red-100 text-[#D9381E] px-1.5 py-0.5 rounded">Urgente</span>
            </button>
            <button
              onClick={() => scrollToSection('sobre-heco')}
              className="text-left text-sm font-semibold text-slate-800 hover:text-[#D9381E] py-1"
            >
              6. El Ingeniero Detrás de HECO
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left text-sm font-semibold text-slate-800 hover:text-[#D9381E] py-1"
            >
              7. Preguntas Frecuentes (FAQ)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Directo con Ingeniero
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#D9381E] text-white py-2.5 rounded font-bold text-xs uppercase flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Solicitar Cotización / Evaluación
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
