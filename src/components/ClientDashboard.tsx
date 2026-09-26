import React, { useState } from 'react';
import { 
  FolderGit2, 
  FileText, 
  Download, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  ShieldCheck, 
  Layers, 
  PlusCircle, 
  ArrowLeft,
  Building,
  HardHat,
  Share2
} from 'lucide-react';
import { MOCK_CLIENT_FILES, COMPANY_INFO } from '../data/hecoData';
import { ClientProjectFile } from '../types';

interface ClientDashboardProps {
  onBackToLanding: () => void;
  onOpenQuoteModal: (mode?: 'diseno' | 'patologia') => void;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ 
  onBackToLanding, 
  onOpenQuoteModal 
}) => {
  const [projects, setProjects] = useState<ClientProjectFile[]>(MOCK_CLIENT_FILES);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(MOCK_CLIENT_FILES[0].id);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const filteredProjects = projects.filter((p) => 
    p.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.projectCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadDeliverable = (fileName: string) => {
    setDownloadNotice(`Descargando entregable oficial: ${fileName}`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3500);
  };

  const getStatusBadge = (status: ClientProjectFile['status']) => {
    switch (status) {
      case 'Aprobado':
        return <span className="text-[11px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Aprobado en Curaduría</span>;
      case 'En Curaduría':
        return <span className="text-[11px] font-mono bg-sky-100 text-[#0056B3] px-2 py-0.5 rounded font-bold">En Curaduría Urbana</span>;
      case 'En Ejecución':
        return <span className="text-[11px] font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">En Ejecución Técnica</span>;
      default:
        return <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F8] py-8">
      <div className="max-w-[1200px] mx-auto px-4 space-y-6">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-[8px] border border-[#E0E0E0] shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToLanding}
              className="text-xs font-bold uppercase text-[#0C2340] hover:text-[#D9381E] flex items-center gap-1.5 p-1 rounded transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la Firma</span>
            </button>
            <span className="text-slate-300">|</span>
            <div>
              <h1 className="font-heading font-extrabold text-base sm:text-lg uppercase text-[#0C2340] tracking-wide">
                Portal Empresarial & Expedientes Estructurales
              </h1>
              <p className="text-[11px] text-[#6B7280]">
                Seguimiento de licencias, memorias de cálculo y planos ejecutivos para Pereira y Risaralda
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#D9381E] hover:bg-[#B52B14] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px] flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Nuevo Proyecto / Radicación</span>
            </button>
          </div>
        </div>

        {/* Download Alert Notification */}
        {downloadNotice && (
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 rounded-r text-xs text-emerald-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{downloadNotice}</span>
            </div>
            <span className="text-[10px] text-emerald-700 font-mono">Verificación criptográfica NSR-10 OK</span>
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Project Selector & Status List */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-[8px] p-4 border border-[#E0E0E0] shadow-xs">
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar por código, cliente o proyecto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#F4F6F8] border border-[#E0E0E0] rounded pl-8 pr-3 py-1.5 text-xs text-[#1F2937] focus:outline-none"
                />
              </div>

              <div className="space-y-2 max-h-[500px] overflow-y-auto">
                {filteredProjects.map((p) => {
                  const isSelected = p.id === selectedProjectId;
                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedProjectId(p.id)}
                      className={`p-3 rounded-[6px] border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0C2340] border-[#0C2340] text-white shadow-sm'
                          : 'bg-white border-[#E0E0E0] text-[#1F2937] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-mono text-[10px] font-bold ${
                          isSelected ? 'text-sky-300' : 'text-[#6B7280]'
                        }`}>
                          {p.projectCode}
                        </span>
                        <span className={`text-[10px] ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}>
                          {p.lastUpdate}
                        </span>
                      </div>

                      <h4 className="font-heading font-bold text-xs uppercase line-clamp-1 mb-1">
                        {p.projectName}
                      </h4>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className={`line-clamp-1 ${
                          isSelected ? 'text-slate-200' : 'text-[#6B7280]'
                        }`}>
                          {p.clientName}
                        </span>
                        <span className={`font-mono font-bold ${
                          isSelected ? 'text-emerald-300' : 'text-[#0C2340]'
                        }`}>
                          {p.progress}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div
                          className="bg-[#D9381E] h-full transition-all duration-500"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Curaduría Information Card */}
            <div className="bg-[#0A192F] text-white rounded-[8px] p-4 border border-white/10 text-xs space-y-2">
              <div className="flex items-center gap-2 text-sky-300 font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Normativa & Radicaciones</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Todos los entregables de este portal cumplen con el Formulario Único Nacional y las especificaciones exigidas por las Curadurías Urbanas Primera y Segunda de Pereira.
              </p>
            </div>
          </div>

          {/* Right Column: Active Project Technical Dossier */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[8px] p-6 border border-[#E0E0E0] shadow-xs space-y-6">
              {/* Dossier Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E0E0E0] pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#D9381E]">
                      {selectedProject.projectCode}
                    </span>
                    <span className="text-slate-300">·</span>
                    {getStatusBadge(selectedProject.status)}
                  </div>
                  <h2 className="font-heading font-extrabold text-xl uppercase text-[#0C2340]">
                    {selectedProject.projectName}
                  </h2>
                  <p className="text-xs text-[#6B7280]">
                    Titular: <strong>{selectedProject.clientName}</strong> · Servicio: <strong>{selectedProject.serviceType}</strong>
                  </p>
                </div>

                {selectedProject.curaduriaNumber && (
                  <div className="bg-[#F4F6F8] p-2.5 rounded border border-[#E0E0E0] text-right">
                    <span className="text-[10px] text-[#6B7280] uppercase block">Radicación Oficial:</span>
                    <span className="font-mono font-bold text-xs text-[#0C2340]">{selectedProject.curaduriaNumber}</span>
                  </div>
                )}
              </div>

              {/* Progress & Milestone Steps */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold uppercase text-[#0C2340]">Estado del Expediente Estructural</span>
                  <span className="font-mono font-bold text-[#D9381E]">{selectedProject.progress}% Completado</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D9381E] h-full transition-all duration-700"
                    style={{ width: `${selectedProject.progress}%` }}
                  />
                </div>
                <div className="grid grid-cols-4 gap-1 text-[10px] text-center text-slate-500 mt-2 font-mono">
                  <span className="text-emerald-700 font-bold">1. Geotecnia</span>
                  <span className="text-emerald-700 font-bold">2. Modelación ETABS</span>
                  <span className={selectedProject.progress >= 75 ? 'text-emerald-700 font-bold' : ''}>3. Memorias & Planos</span>
                  <span className={selectedProject.progress === 100 ? 'text-emerald-700 font-bold' : ''}>4. Licencia Aprobada</span>
                </div>
              </div>

              {/* Deliverables Repository (PDFs, DWGs) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[#0C2340] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#0056B3]" />
                    Entregables Oficiales Disponibles para Descarga:
                  </h3>
                  <span className="text-[11px] text-[#6B7280]">
                    {selectedProject.deliverables.filter(d => d.ready).length} archivos listos
                  </span>
                </div>

                <div className="space-y-2">
                  {selectedProject.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded border border-[#E0E0E0] hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${
                          del.type === 'PDF' 
                            ? 'bg-red-100 text-[#D9381E]' 
                            : 'bg-sky-100 text-sky-800'
                        }`}>
                          {del.type}
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-[#1F2937] font-mono">
                            {del.name}
                          </p>
                          <span className="text-[10px] text-[#6B7280]">
                            Peso: {del.size}
                          </span>
                        </div>
                      </div>

                      <button
                        disabled={!del.ready}
                        onClick={() => handleDownloadDeliverable(del.name)}
                        className={`text-xs font-bold uppercase px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors cursor-pointer ${
                          del.ready
                            ? 'bg-[#0C2340] text-white hover:bg-[#0A192F]'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{del.ready ? 'Descargar' : 'En proceso'}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Support from Assigned Engineer */}
              <div className="bg-[#F4F6F8] p-4 rounded-[6px] border border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs">
                  <HardHat className="w-5 h-5 text-[#D9381E] shrink-0" />
                  <div>
                    <span className="font-bold text-[#0C2340] block">Ingeniero Especialista Asignado</span>
                    <span className="text-[#6B7280]">Consultas técnicas o aclaraciones sobre el proyecto {selectedProject.projectCode}</span>
                  </div>
                </div>

                <a
                  href={`${COMPANY_INFO.whatsappDirectUrl}?text=${encodeURIComponent(
                    `Hola Ing. HECO Consultoría, quisiera consultar sobre el estado del expediente ${selectedProject.projectCode} - ${selectedProject.projectName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase px-4 py-2 rounded-[4px] flex items-center gap-1.5 shrink-0 shadow-xs"
                >
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
