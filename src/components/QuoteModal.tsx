import React, { useState, useEffect } from 'react';
import { 
  X, 
  Building2, 
  AlertTriangle, 
  Calculator, 
  Send, 
  PhoneCall, 
  Check, 
  FileCheck2, 
  MapPin, 
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/hecoData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'diseno' | 'patologia';
  initialServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'diseno',
  initialServiceId
}) => {
  const [mode, setMode] = useState<'diseno' | 'patologia'>(initialMode);
  
  // Track A: Design state
  const [areaM2, setAreaM2] = useState<number>(350);
  const [levels, setLevels] = useState<number>(3);
  const [buildingType, setBuildingType] = useState<string>('Residencial (Vivienda/Edificio)');
  const [structuralSystem, setStructuralSystem] = useState<string>('Pórticos de Concreto Reforzado (NSR-10 DES/DMO)');
  const [municipality, setMunicipality] = useState<string>('Pereira');
  const [soilStudyReady, setSoilStudyReady] = useState<boolean>(true);

  // Track B: Pathology state
  const [damageType, setDamageType] = useState<string>('Fisuras diagonales en muros de mampostería');
  const [buildingAge, setBuildingAge] = useState<string>('5 a 15 años');
  const [urgency, setUrgency] = useState<string>('Evaluación preventiva técnica');
  const [addressDetail, setAddressDetail] = useState<string>('');

  // Contact info
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialMode) setMode(initialMode);
    if (initialServiceId === 'patologia-diagnostico') setMode('patologia');
    if (initialServiceId === 'diseno-estructural') setMode('diseno');
    setSubmitted(false);
  }, [initialMode, initialServiceId, isOpen]);

  if (!isOpen) return null;

  // Parametric engineering cost estimate (preliminary guideline in COP)
  const calculateEstimate = () => {
    if (mode === 'diseno') {
      // Estimated engineering design fees in Colombia: approx $16,000 - $28,000 COP per m2 for standard buildings
      let ratePerM2 = 22000;
      if (areaM2 < 200) ratePerM2 = 26000;
      if (areaM2 > 1500) ratePerM2 = 18000;
      if (structuralSystem.includes('Metálica')) ratePerM2 += 2000;
      const baseEstimate = areaM2 * ratePerM2;
      return {
        min: Math.round(baseEstimate * 0.9 / 100000) * 100000,
        max: Math.round(baseEstimate * 1.15 / 100000) * 100000,
        rateM2: ratePerM2,
        estimatedWeeks: areaM2 > 1000 ? '4 a 5 semanas' : areaM2 > 300 ? '2 a 3 semanas' : '10 a 15 días hábiles'
      };
    } else {
      // Pathology inspection fee in Pereira area: standard visit + non-destructive inspection + formal engineering concept
      return {
        min: 650000,
        max: 1200000,
        rateM2: 0,
        estimatedWeeks: '3 a 5 días hábiles tras visita técnica'
      };
    }
  };

  const estimate = calculateEstimate();

  const generateWhatsAppMessage = () => {
    let msg = `*SOLICITUD TÉCNICA - HECO CONSULTORÍA*\n\n`;
    msg += `*Cliente:* ${clientName || 'Interesado'}\n`;
    msg += `*Teléfono:* ${clientPhone || 'No especificado'}\n`;
    msg += `*Municipio:* ${municipality}\n\n`;

    if (mode === 'diseno') {
      msg += `*Tipo de Servicio:* Diseño Estructural Nuevo (NSR-10)\n`;
      msg += `*Uso previsto:* ${buildingType}\n`;
      msg += `*Área aproximada:* ${areaM2} m² (${levels} pisos)\n`;
      msg += `*Sistema sugerido:* ${structuralSystem}\n`;
      msg += `*Estudio de Suelos:* ${soilStudyReady ? 'Disponible' : 'Pendiente / Requiere asesoría'}\n`;
    } else {
      msg += `*Tipo de Servicio:* Diagnóstico de Patología / Fisuras\n`;
      msg += `*Patrón de daño:* ${damageType}\n`;
      msg += `*Antigüedad edificación:* ${buildingAge}\n`;
      msg += `*Urgencia:* ${urgency}\n`;
    }

    if (clientNotes) {
      msg += `*Detalles adicionales:* ${clientNotes}\n`;
    }

    msg += `\nQuisiera conocer el alcance definitivo y coordinar la revisión técnica.`;
    return encodeURIComponent(msg);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${COMPANY_INFO.whatsappDirectUrl}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-[8px] max-w-2xl w-full border border-[#0C2340] shadow-2xl overflow-hidden my-6">
        {/* Modal Top Bar */}
        <div className="bg-[#0C2340] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D9381E]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg uppercase tracking-wide">
                Solicitud de Cotización & Evaluación Técnica
              </span>
            </div>
            <p className="text-xs text-slate-300">
              HECO Consultoría · Pereira & Risaralda · Norma NSR-10
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl uppercase text-[#0C2340]">
              ¡Solicitud Generada con Éxito!
            </h3>
            <p className="text-sm text-[#1F2937] max-w-md mx-auto">
              Se ha preparado su expediente para contacto directo. El Ingeniero Especialista de HECO revisará los datos técnicos y se comunicará a la brevedad.
            </p>

            <div className="bg-[#F4F6F8] p-4 rounded text-left text-xs max-w-md mx-auto border border-[#E0E0E0] space-y-1.5">
              <p><strong>Servicio:</strong> {mode === 'diseno' ? 'Diseño Estructural Nuevo' : 'Diagnóstico de Patología'}</p>
              <p><strong>Ubicación:</strong> {municipality}</p>
              <p><strong>Plazo estimado:</strong> {estimate.estimatedWeeks}</p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappDirectUrl}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-[4px] flex items-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Abrir WhatsApp con Ingeniero</span>
              </a>
              <button
                onClick={onClose}
                className="bg-[#0C2340] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-[4px]"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          /* Main Form View */
          <form onSubmit={handleSendToWhatsApp} className="p-6 space-y-6">
            {/* Pathway Selector Segmented Bar (Req #8) */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#6B7280] mb-2">
                Seleccione el Camino Técnico:
              </label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#F4F6F8] rounded-[6px] border border-[#E0E0E0]">
                <button
                  type="button"
                  onClick={() => setMode('diseno')}
                  className={`py-2 px-3 rounded-[4px] text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    mode === 'diseno'
                      ? 'bg-[#0C2340] text-white shadow-sm'
                      : 'text-[#1F2937] hover:bg-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-sky-400" />
                  <span>Quiero Diseñar / Construir</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode('patologia')}
                  className={`py-2 px-3 rounded-[4px] text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    mode === 'patologia'
                      ? 'bg-[#D9381E] text-white shadow-sm'
                      : 'text-[#1F2937] hover:bg-slate-200'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4 text-white" />
                  <span>Tengo Daños / Fisuras</span>
                </button>
              </div>
            </div>

            {/* Track A: New Structural Design Fields */}
            {mode === 'diseno' && (
              <div className="space-y-4 bg-[#F4F6F8] p-4 rounded-[6px] border border-[#E0E0E0]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Área total a diseñar (m²):
                    </label>
                    <input
                      type="number"
                      min={40}
                      max={50000}
                      value={areaM2}
                      onChange={(e) => setAreaM2(Number(e.target.value))}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs font-bold text-[#0C2340]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Número de niveles o pisos:
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={35}
                      value={levels}
                      onChange={(e) => setLevels(Number(e.target.value))}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs font-bold text-[#0C2340]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Uso de la edificación:
                    </label>
                    <select
                      value={buildingType}
                      onChange={(e) => setBuildingType(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    >
                      <option value="Residencial (Vivienda/Edificio)">Residencial (Vivienda / Edificio)</option>
                      <option value="Comercial (Locales/Oficinas)">Comercial (Locales / Oficinas)</option>
                      <option value="Industrial (Bodega/Nave)">Industrial (Bodega / Estructura Metálica)</option>
                      <option value="Institucional / Especial (Colegio/Salud)">Institucional / Especial (Colegio / Salud)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Municipio / Ubicación:
                    </label>
                    <select
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    >
                      <option value="Pereira">Pereira (Risaralda)</option>
                      <option value="Dosquebradas">Dosquebradas (Risaralda)</option>
                      <option value="Santa Rosa de Cabal">Santa Rosa de Cabal</option>
                      <option value="La Virginia">La Virginia</option>
                      <option value="Armenia / Manizales">Armenia / Manizales (Eje Cafetero)</option>
                      <option value="Otro municipio de Colombia">Otro municipio de Colombia</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1 text-xs">
                  <input
                    type="checkbox"
                    id="soilstudy"
                    checked={soilStudyReady}
                    onChange={(e) => setSoilStudyReady(e.target.checked)}
                    className="accent-[#0C2340] w-4 h-4"
                  />
                  <label htmlFor="soilstudy" className="text-slate-700 cursor-pointer">
                    Ya dispongo del Estudio Geotécnico / Suelos (según Título H NSR-10)
                  </label>
                </div>
              </div>
            )}

            {/* Track B: Pathology / Damage Assessment Fields */}
            {mode === 'patologia' && (
              <div className="space-y-4 bg-red-50/50 p-4 rounded-[6px] border border-red-200">
                <div>
                  <label className="block text-[11px] uppercase font-bold text-[#D9381E] mb-1">
                    Patrón principal de daño observado:
                  </label>
                  <select
                    value={damageType}
                    onChange={(e) => setDamageType(e.target.value)}
                    className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                  >
                    <option value="Fisuras diagonales en muros de mampostería">Fisuras diagonales en muros de mampostería</option>
                    <option value="Fisuras verticales en vigas o losas de concreto">Fisuras verticales en vigas o losas de concreto</option>
                    <option value="Desprendimiento de concreto y varillas oxidadas">Desprendimiento de concreto y varillas oxidadas (Corrosión)</option>
                    <option value="Desnivel de pisos o puertas/ventanas atascadas">Desnivel de pisos o puertas/ventanas atascadas (Asentamiento)</option>
                    <option value="Daños post-sismo reciente en la zona">Daños tras evento sísmico reciente</option>
                    <option value="Dictamen pericial para trámite legal/seguros">Dictamen pericial para trámite legal o aseguradora</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Antigüedad aproximada:
                    </label>
                    <select
                      value={buildingAge}
                      onChange={(e) => setBuildingAge(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    >
                      <option value="Menos de 2 años (Recién entregado)">Menos de 2 años (Garantía constructora)</option>
                      <option value="2 a 10 años">2 a 10 años</option>
                      <option value="10 a 25 años">10 a 25 años (pre-NSR-10)</option>
                      <option value="Más de 25 años">Más de 25 años</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Municipio / Barrio en Pereira:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Pereira (Pinares, Álamos, Cuba...)"
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Parametric Guideline Box */}
            <div className="bg-[#0C2340] text-white p-4 rounded-[6px] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-slate-300 block font-mono">
                  Referencia Estimada Preliminar (COP)
                </span>
                <div className="font-heading font-extrabold text-lg text-emerald-400">
                  ${estimate.min.toLocaleString('es-CO')} – ${estimate.max.toLocaleString('es-CO')}
                </div>
                <span className="text-[10px] text-slate-400">
                  *Sujeto a confirmación tras revisión de planos o visita técnica.
                </span>
              </div>
              <div className="text-right sm:border-l sm:border-white/10 sm:pl-4">
                <span className="text-[10px] text-slate-400 block uppercase">Tiempo Estimado:</span>
                <span className="font-bold text-white text-xs">{estimate.estimatedWeeks}</span>
              </div>
            </div>

            {/* Client Contact Details */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs uppercase font-bold text-[#0C2340]">
                Datos de Contacto para Envío de la Propuesta:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Nombre o Razón Social *"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Teléfono / WhatsApp (+57...) *"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Descripción breve del proyecto o del daño que observa..."
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-2 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#6B7280]">
                Al pulsar, se abrirá WhatsApp con el mensaje estructurado listo para enviar.
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs uppercase font-bold text-[#6B7280] hover:text-[#0C2340] cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-[4px] shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
