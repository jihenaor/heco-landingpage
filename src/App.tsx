import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommercialPaths } from './components/CommercialPaths';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyHecoSection } from './components/WhyHecoSection';
import { MethodologySection } from './components/MethodologySection';
import { PathologySpecialSection } from './components/PathologySpecialSection';
import { AboutEngineerSection } from './components/AboutEngineerSection';
import { FaqSection } from './components/FaqSection';
import { ContactBanner } from './components/ContactBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ClientDashboard } from './components/ClientDashboard';
import { ProjectCaseStudy } from './types';

export default function App() {
  const [activeView, setActiveView] = useState<'landing' | 'dashboard'>('landing');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quoteModalMode, setQuoteModalMode] = useState<'diseno' | 'patologia'>('diseno');
  const [quoteModalServiceId, setQuoteModalServiceId] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const handleOpenQuoteModal = (modeOrServiceId?: string) => {
    if (modeOrServiceId === 'patologia' || modeOrServiceId === 'patologia-diagnostico') {
      setQuoteModalMode('patologia');
      setQuoteModalServiceId(modeOrServiceId);
    } else if (modeOrServiceId === 'diseno' || modeOrServiceId === 'diseno-estructural') {
      setQuoteModalMode('diseno');
      setQuoteModalServiceId(modeOrServiceId);
    } else {
      setQuoteModalMode('diseno');
      setQuoteModalServiceId(undefined);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectPath = (path: 'diseno' | 'patologia') => {
    setQuoteModalMode(path);
  };

  const handleOpenProjectDetail = (project: ProjectCaseStudy) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] text-[#1F2937] font-body selection:bg-[#0C2340] selection:text-white">
      {/* Global Header with Navigation & View Switcher */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'landing' ? (
          <>
            {/* 1. Hero with exact specific message, 2 commercial paths & WhatsApp */}
            <Hero
              onSelectPath={handleSelectPath}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* 2. Deep Dive: The Two Commercial Pathways (Quiero Diseñar vs Ya Tengo Estructura) */}
            <CommercialPaths
              onSelectPath={handleSelectPath}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* 3. Clearly Separated Services (Diseño, Patología, Vulnerabilidad, Consultoría) */}
            <ServicesSection
              onOpenQuoteModal={handleOpenQuoteModal}
              activePath={quoteModalMode}
            />

            {/* 4. Projects as Real Case Studies (Problema, Intervención HECO, Resultado) */}
            <ProjectsSection
              onOpenProjectDetail={handleOpenProjectDetail}
            />

            {/* 5. Why Work with HECO? 5 Technical Evidence Pillars */}
            <WhyHecoSection />

            {/* 6. Methodology: Así trabajamos (5-step process) */}
            <MethodologySection />

            {/* 7. Distinctive Pathology Section: ¿Su edificación presenta fisuras, grietas o daños? */}
            <PathologySpecialSection
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* 8. Who is behind HECO: Engineer Profile, COPNIA, Experience & Software */}
            <AboutEngineerSection
              onOpenQuoteModal={() => handleOpenQuoteModal('diseno')}
            />

            {/* 9. Technical & Normative FAQs */}
            <FaqSection />

            {/* 10. WhatsApp Central Contact Banner: ¿Tiene un proyecto? Hablemos. */}
            <ContactBanner
              onOpenQuoteModal={() => handleOpenQuoteModal('diseno')}
            />
          </>
        ) : (
          /* Corporate Client & Contractor Tracking Portal */
          <ClientDashboard
            onBackToLanding={() => setActiveView('landing')}
            onOpenQuoteModal={() => handleOpenQuoteModal('diseno')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Quotation & Evaluation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialMode={quoteModalMode}
        initialServiceId={quoteModalServiceId}
      />

      {/* Technical Case Study Dossier Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />
    </div>
  );
}
