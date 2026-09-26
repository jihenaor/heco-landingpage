import React, { useState, useEffect } from 'react';
import { 
  X, 
  Building2, 
  AlertTriangle, 
  Send, 
  PhoneCall, 
  Check, 
  FileCheck2, 
  MapPin, 
  Calendar,
  Layers,
  ArrowRight,
  ShieldAlert,
  UserCheck,
  ClipboardCheck,
  Clock,
  Compass
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
  const [areaM2, setAreaM2] = useState<string>('300 - 500 m²');
  const [levels, setLevels] = useState<string>('3 a 5 pisos');
  const [buildingType, setBuildingType] = useState<string>('Residencial (Vivienda/Edificio)');
  const [currentStage, setCurrentStage] = useState<string>('Tengo anteproyecto arquitectónico listo');
  const [municipality, setMunicipality] = useState<string>('Pereira');
  const [hasSoils, setHasSoils] = useState<string>('Sí, estudio de suelos disponible');

  // Track B: Pathology state
  const [damageType, setDamageType] = useState<string>('Fisuras diagonales en muros de mampostería');
  const [buildingAge, setBuildingAge] = useState<string>('5 a 15 años');
  const [urgency, setUrgency] = useState<string>('Evaluación preventiva técnica programada');
  const [symptoms, setSymptoms] = useState<string>('Grietas visibles y atasco de puertas');

  // Contact info for 1-on-1 scheduling
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [preferredContact, setPreferredContact] = useState<string>('WhatsApp y llamada técnica');
  const [preferredTime, setPreferredTime] = useState<string>('Mañana (8:00 AM - 12:00 PM)');
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialMode) setMode(initialMode);
    if (initialServiceId === 'patologia-diagnostico') setMode('patologia');
    if (initialServiceId === 'diseno-estructural') setMode('diseno');
    setSubmitted(false);
  }, [initialMode, initialServiceId, isOpen]);

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    let msg = `*SOLICITUD DE EVALUACIÓN TÉCNICA PREVIA (1 A 1)*\n`;
    msg += `*HECO Consultoría Estructural · Pereira*\n\n`;
    msg += `*Nombre / Empresa:* ${clientName || 'Interesado'}\n`;
    msg += `*Teléfono de contacto:* ${clientPhone || 'No especificado'}\n`;
    msg += `*Ubicación:* ${municipality}\n`;
    msg += `*Horario preferido para hablar:* ${preferredTime}\n\n`;

    if (mode === 'diseno') {
      msg += `*Enfoque:* Proyecto Nuevo / Diseño Estructural (NSR-10)\n`;
      msg += `*Uso previsto:* ${buildingType}\n`;
      msg += `*Área y pisos aproximados:* ${areaM2} (${levels})\n`;
      msg += `*Estado de la información:* ${currentStage}\n`;
      msg += `*Estudio de suelos:* ${hasSoils}\n`;
    } else {
      msg += `*Enfoque:* Evaluación Técnica de Patología / Daños Existentes\n`;
      msg += `*Síntoma principal:* ${damageType}\n`;
      msg += `*Comportamiento observado:* ${symptoms}\n`;
      msg += `*Antigüedad de la edificación:* ${buildingAge}\n`;
      msg += `*Carácter de la solicitud:* ${urgency}\n`;
    }

    if (projectDescription) {
      msg += `\n*Detalles del caso:* ${projectDescription}\n`;
    }

    msg += `\nSolicito coordinar una llamada o visita técnica previa con el Ingeniero Especialista para analizar los requerimientos antes de cualquier cotización.`;
    return encodeURIComponent(msg);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${COMPANY_INFO.whatsappDirectUrl}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-[8px] max-w-2xl w-full border border-[#0C2340] shadow-2xl overflow-hidden my-6">
        {/* Modal Top Bar */}
        <div className="bg-[#0C2340] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D9381E]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg uppercase tracking-wide">
                Evaluación Técnica Previa con el Especialista
              </span>
            </div>
            <p className="text-xs text-slate-300">
              HECO Consultoría · Cada proyecto es único y requiere criterio de ingeniería previo
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
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl uppercase text-[#0C2340]">
              ¡Información Lista para la Evaluación Previa!
            </h3>
            <p className="text-sm text-[#1F2937] max-w-md mx-auto">
              Hemos preparado los antecedentes de su caso. El Ingeniero Civil Especialista revisará los datos para una primera conversación técnica directa uno a uno.
            </p>

            <div className="bg-[#F4F6F8] p-4 rounded text-left text-xs max-w-md mx-auto border border-[#E0E0E0] space-y-1.5">
              <p><strong>Enfoque:</strong> {mode === 'diseno' ? 'Diseño de Estructura Nueva (NSR-10)' : 'Diagnóstico de Patología / Daños'}</p>
              <p><strong>Ubicación:</strong> {municipality}</p>
              <p><strong>Atención:</strong> Directa con el Ingeniero Especialista</p>
            </div>

            <div className="pt-4 flex items-center justify-center gap-3">
              <a
                href={`${COMPANY_INFO.whatsappDirectUrl}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-[4px] flex items-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hablar con el Ingeniero por WhatsApp</span>
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
          <form onSubmit={handleSendToWhatsApp} className="p-6 space-y-5">
            {/* Why a Preliminary Evaluation? Reassurance banner */}
            <div className="bg-[#0A192F] text-white p-3.5 rounded-[6px] border border-white/10 flex items-start gap-3">
              <Compass className="w-5 h-5 text-[#D9381E] shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed">
                <strong className="text-sky-300 block mb-0.5 uppercase tracking-wide">
                  En HECO no cotizamos a ciegas:
                </strong>
                <span>
                  En ingeniería estructural, presupuestar sin revisar planos o sin inspeccionar la edificación genera sobrecostos o alcances equivocados. Realizamos una evaluación técnica previa uno a uno con usted para definir el alcance exacto.
                </span>
              </div>
            </div>

            {/* Pathway Selector Segmented Bar */}
            <div>
              <label className="block text-xs uppercase font-bold text-[#6B7280] mb-2">
                1. Seleccione el contexto de su consulta:
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
                  <span>Proyecto Nuevo / Ampliación</span>
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
                  <span>Edificación con Daños / Fisuras</span>
                </button>
              </div>
            </div>

            {/* Track A: New Structural Design Fields */}
            {mode === 'diseno' && (
              <div className="space-y-3 bg-[#F4F6F8] p-4 rounded-[6px] border border-[#E0E0E0]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Área aproximada de construcción:
                    </label>
                    <select
                      value={areaM2}
                      onChange={(e) => setAreaM2(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs font-medium text-[#0C2340]"
                    >
                      <option value="Menos de 200 m² (Vivienda unifamiliar)">Menos de 200 m² (Vivienda unifamiliar)</option>
                      <option value="200 a 500 m² (Bifamiliar / Pequeño edificio)">200 a 500 m² (Bifamiliar / Pequeño edificio)</option>
                      <option value="500 a 1.500 m² (Edificio mediano / Bodega)">500 a 1.500 m² (Edificio mediano / Bodega)</option>
                      <option value="Más de 1.500 m² (Edificio en altura / Complejo)">Más de 1.500 m² (Edificio en altura / Complejo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Número estimado de niveles:
                    </label>
                    <select
                      value={levels}
                      onChange={(e) => setLevels(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs font-medium text-[#0C2340]"
                    >
                      <option value="1 a 2 pisos">1 a 2 pisos</option>
                      <option value="3 a 5 pisos">3 a 5 pisos</option>
                      <option value="6 a 12 pisos">6 a 12 pisos</option>
                      <option value="Más de 12 pisos">Más de 12 pisos</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      ¿En qué fase se encuentra la información?
                    </label>
                    <select
                      value={currentStage}
                      onChange={(e) => setCurrentStage(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    >
                      <option value="Tengo anteproyecto arquitectónico listo (DWG/PDF)">Tengo planos arquitectónicos listos (DWG/PDF)</option>
                      <option value="Solo tengo bosquejo o idea inicial">Solo tengo bosquejo o idea inicial</option>
                      <option value="Tengo planos de otro ingeniero para segunda opinión">Tengo planos de otro ingeniero para segunda opinión</option>
                      <option value="Ampliación sobre edificación existente">Ampliación sobre edificación existente</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Municipio del proyecto:
                    </label>
                    <select
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    >
                      <option value="Pereira (Risaralda)">Pereira (Risaralda)</option>
                      <option value="Dosquebradas (Risaralda)">Dosquebradas (Risaralda)</option>
                      <option value="Santa Rosa de Cabal">Santa Rosa de Cabal</option>
                      <option value="La Virginia">La Virginia</option>
                      <option value="Manizales / Armenia">Manizales / Armenia (Eje Cafetero)</option>
                      <option value="Otro municipio de Colombia">Otro municipio de Colombia</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Track B: Pathology / Damage Assessment Fields */}
            {mode === 'patologia' && (
              <div className="space-y-3 bg-red-50/50 p-4 rounded-[6px] border border-red-200">
                <div>
                  <label className="block text-[11px] uppercase font-bold text-[#D9381E] mb-1">
                    ¿Qué anomalía presenta la estructura?
                  </label>
                  <select
                    value={damageType}
                    onChange={(e) => setDamageType(e.target.value)}
                    className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                  >
                    <option value="Fisuras diagonales en muros de mampostería">Fisuras diagonales en muros de mampostería (grietas inclinadas)</option>
                    <option value="Fisuras en vigas, losas o columnas de concreto">Fisuras en vigas, losas o columnas de concreto</option>
                    <option value="Concreto soplado y varillas oxidadas visibles">Concreto soplado y varillas oxidadas visibles (Corrosión)</option>
                    <option value="Desnivel de pisos o puertas que ya no cierran">Desnivel de pisos o puertas que no cierran (Asentamiento)</option>
                    <option value="Daños notorios tras un sismo reciente">Daños notorios tras un sismo reciente</option>
                    <option value="Requerimiento de peritaje para aseguradora o copropiedad">Requerimiento de peritaje para aseguradora o copropiedad</option>
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
                      <option value="Menos de 2 años (Garantía constructora)">Menos de 2 años (Garantía constructora)</option>
                      <option value="2 a 10 años">2 a 10 años</option>
                      <option value="10 a 25 años">10 a 25 años</option>
                      <option value="Más de 25 años">Más de 25 años</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold text-[#0C2340] mb-1">
                      Sector / Barrio en Pereira:
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Pinares, Álamos, Providencia, Circunvalar..."
                      value={municipality}
                      onChange={(e) => setMunicipality(e.target.value)}
                      className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Client Contact & 1-on-1 scheduling preferences */}
            <div className="space-y-3 pt-1">
              <label className="block text-xs uppercase font-bold text-[#0C2340]">
                2. Datos para el contacto técnico directo uno a uno:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Nombre y Apellidos / Empresa *"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Teléfono / Celular / WhatsApp *"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#6B7280] mb-0.5">
                    Horario de preferencia para contacto:
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                  >
                    <option value="Mañana (8:00 AM - 12:00 PM)">Mañana (8:00 AM - 12:00 PM)</option>
                    <option value="Tarde (2:00 PM - 6:00 PM)">Tarde (2:00 PM - 6:00 PM)</option>
                    <option value="Cualquier momento del día">Cualquier momento del día</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#6B7280] mb-0.5">
                    Medio preferido:
                  </label>
                  <select
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value)}
                    className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
                  >
                    <option value="WhatsApp y llamada técnica">WhatsApp y llamada técnica</option>
                    <option value="Reunión técnica presencial en Pereira">Reunión técnica presencial en Pereira</option>
                    <option value="Visita técnica a la edificación / terreno">Visita técnica a la edificación / terreno</option>
                  </select>
                </div>
              </div>

              <textarea
                rows={2}
                placeholder="Describa brevemente su requerimiento o las dudas que desea resolver con el ingeniero..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className="w-full bg-white border border-[#E0E0E0] rounded p-2 text-xs text-[#1F2937]"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-2 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-[#6B7280]">
                Al pulsar, se abrirá WhatsApp con el resumen de su caso listo para el ingeniero.
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
                  className="flex-1 sm:flex-none bg-[#D9381E] hover:bg-[#B52B14] text-white font-bold text-xs uppercase tracking-wider py-2.5 px-6 rounded-[4px] shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Coordinar Evaluación 1 a 1</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

