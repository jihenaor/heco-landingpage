import { 
  ServiceItem, 
  ProjectCaseStudy, 
  MethodologyStep, 
  WhyHecoPillar, 
  PathologyTriageCase, 
  FaqItem,
  ClientProjectFile 
} from '../types';

export const COMPANY_INFO = {
  name: 'HECO Consultoría',
  legalName: 'HECO Consultoría Técnica e Ingeniería Estructural',
  tagline: 'Ingeniería estructural para construir, evaluar y reforzar con seguridad.',
  subtagline: 'Diseño estructural, diagnóstico de patologías, evaluación de vulnerabilidad y reforzamiento de edificaciones, con soluciones técnicas adaptadas a cada proyecto.',
  location: 'Pereira, Risaralda · Colombia',
  address: 'Sector Pinares / Circunvalar, Pereira, Risaralda',
  phone: '+57 312 250 8049',
  phoneDisplay: '+57 (312) 250-8049',
  email: 'contacto@hecoingenieria.com',
  whatsappDirectUrl: 'https://wa.me/573122508049',
  operatingHours: 'Lunes a Viernes: 7:30 AM - 6:00 PM · Sábados: 8:00 AM - 1:00 PM',
  normative: 'Reglamento Colombiano de Construcción Sismorresistente NSR-10 · Ley 400 de 1997 · AIS'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'diseno-estructural',
    category: 'diseno',
    title: 'Diseño Estructural',
    shortDesc: 'Cálculo y modelación sismorresistente para edificaciones nuevas y ampliaciones bajo estricto cumplimiento NSR-10.',
    longDesc: 'Diseñamos soluciones estructurales seguras, eficientes y constructibles. Analizamos el comportamiento dinámico de cada edificación para optimizar cuantías de acero y volúmenes de concreto sin sacrificar márgenes de seguridad.',
    subservices: [
      'Diseño de estructuras de concreto reforzado',
      'Diseño de estructuras metálicas y mixtas',
      'Mampostería estructural y confinada',
      'Modelación tridimensional y análisis dinámico espectral',
      'Memorias de cálculo justificativas para Curaduría',
      'Planos estructurales detallados y planillas de despiece'
    ],
    deliverables: [
      'Memorias de cálculo firmadas por especialista',
      'Planos estructurales en AutoCAD/BIM con detalles constructivos',
      'Planillas de cantidades y despiece de acero fy=420 MPa',
      'Formatos de radicación Curaduría Urbana de Pereira / Dosquebradas'
    ],
    iconName: 'Building2',
    normativeContext: 'NSR-10 Título A, B, C, D, E, F',
    badge: 'Proyectos Nuevos'
  },
  {
    id: 'patologia-diagnostico',
    category: 'patologia',
    title: 'Patología y Diagnóstico',
    shortDesc: 'Auscultación técnica e inspección pericial de daños, grietas, corrosión y asentamientos en estructuras existentes.',
    longDesc: 'Una fisura no siempre significa un problema estructural, pero requiere criterio técnico calificado para determinar su origen, evolución y grado de riesgo para los ocupantes.',
    subservices: [
      'Inspección técnica de estructuras existentes',
      'Diagnóstico pericial de fisuras y grietas activas/pasivas',
      'Evaluación de deterioro de concreto y carbonatación',
      'Diagnóstico de corrosión en aceros de refuerzo',
      'Análisis de asentamientos diferenciales de cimentación',
      'Evaluación de daños post-sismo o por cargas imprevistas',
      'Conceptos técnicos y peritajes periciales'
    ],
    deliverables: [
      'Ficha técnica de patología con registro fotográfico y mapeo de fisuras',
      'Ensayos no destructivos (Esclerometría y Fisurometría)',
      'Concepto pericial con dictamen de estabilidad y riesgo',
      'Recomendaciones de mitigación o plan de reparación'
    ],
    iconName: 'AlertTriangle',
    normativeContext: 'ACI 201.2R / ACI 364.1R / AIS 410',
    badge: 'Estructuras con Daños'
  },
  {
    id: 'vulnerabilidad-reforzamiento',
    category: 'vulnerabilidad',
    title: 'Vulnerabilidad y Reforzamiento',
    shortDesc: 'Evaluación sísmica de edificaciones existentes y diseño de intervenciones de rehabilitación estructural.',
    longDesc: 'Adecuamos edificaciones existentes a los requisitos de seguridad sísmica vigentes, evaluando alternativas técnicas viables que minimicen el impacto arquitectónico y el costo constructivo.',
    subservices: [
      'Evaluación de vulnerabilidad sísmica (NSR-10 Capítulo A.10)',
      'Análisis estructural no lineal y capacidad resistente',
      'Diseño de reforzamiento con encamisados de concreto',
      'Reforzamiento con perfiles metálicos y arriostramientos',
      'Refuerzo con materiales compuestos de fibra de carbono (CFRP)',
      'Rehabilitación estructural y alternativas técnicas y económicas'
    ],
    deliverables: [
      'Dictamen de vulnerabilidad sísmica según NSR-10 A.10',
      'Modelos comparativos Estado Actual vs. Estado Reforzado',
      'Planos constructivos de reforzamiento y especificaciones de obra',
      'Presupuesto estimado de intervención estructural'
    ],
    iconName: 'ShieldAlert',
    normativeContext: 'NSR-10 Capítulo A.10 / AIS 180',
    badge: 'Actualización Sísmica'
  },
  {
    id: 'consultoria-revision',
    category: 'consultoria',
    title: 'Consultoría y Revisión',
    shortDesc: 'Revisión independiente de diseños estructurales, segunda opinión técnica y asesoría especializada en obra.',
    longDesc: 'Acompañamos a inversionistas, firmas constructoras y propietarios con una visión crítica independiente para certificar la seguridad, verificar el cumplimiento normativo o dirimir controversias técnicas.',
    subservices: [
      'Revisión independiente de diseños estructurales (Ley 1796 / NSR-10)',
      'Segunda opinión técnica para proyectos complejos o con sobrecostos',
      'Peritajes técnicos para procesos judiciales o notariales',
      'Asesoría técnica a constructores e interventorías',
      'Acompañamiento y resolución de consultas durante obra'
    ],
    deliverables: [
      'Informe de revisión independiente con observaciones normativas',
      'Dictamen pericial con sustento teórico y normativo',
      'Actas de visita técnica a obra y conceptos de no objeción'
    ],
    iconName: 'FileCheck2',
    normativeContext: 'Ley 1796 de 2016 · NSR-10 Título A',
    badge: 'Segunda Opinión & Peritajes'
  }
];

export const PROJECTS_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'edificio-residencial-pinares',
    title: 'Edificio Residencial Pinares Elite',
    category: 'Residencial',
    location: 'Pinares, Pereira (Risaralda)',
    year: 2024,
    areaM2: 4850,
    levels: 11,
    structuralSystem: 'Pórticos de concreto reforzado con capacidad especial de disipación de energía (DES) y losa aligerada',
    problem: 'Terreno con pendiente pronunciada del 18% en zona de amenaza sísmica alta de Pereira (Aa=0.25, Av=0.25). Requerimiento de amplios vanos en parqueaderos subterráneos y plantas tipo sin columnas intermedias.',
    hecoIntervention: 'Modelación tridimensional en ETABS con interacción suelo-estructura; configuración de muros de contención integrados a la cimentación con pilotes pre-excavados; optimización de cuantías longitudinales en vigas y columnas para evitar congestión de armaduras.',
    result: '4.850 m² aprobados en Curaduría Urbana sin requerimientos adicionales. Estructura sismorresistente 100% conforme a NSR-10 con reducción del 8.5% en consumo de acero gracias a distribución racional de cortantes.',
    specifications: {
      concrete: "f'c = 28 MPa (4000 psi) en columnas y 21 MPa en losas",
      steel: 'fy = 420 MPa (Grado 60 sismorresistente con resiliencia garantizada)',
      seismicZone: 'Alta · Coeficientes Pereira Aa=0.25, Av=0.25, Fa=1.20, Fv=1.50 (Suelo D)',
      software: ['ETABS Ultimate v21', 'SAFE v20', 'AutoCAD Civil']
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=1200&q=80',
    blueprintSnippet: 'Pórticos DES · 11 Niveles · Pilotes D=0.80m · Losa Nervada e=0.35m'
  },
  {
    id: 'centro-logistico-dosquebradas',
    title: 'Centro Logístico e Industrial del Café',
    category: 'Industrial',
    location: 'Zona Industrial La Macarena, Dosquebradas',
    year: 2024,
    areaM2: 7200,
    levels: 2,
    structuralSystem: 'Estructura metálica aporticada en perfiles IPE/HEA con cerchas espaciales y mezzanine en Steel Deck',
    problem: 'Requisito de naves de almacenamiento con luces libres de 34 metros sin columnas centrales, aptas para tránsito de montacargas pesados y cargas de cubierta para paneles solares.',
    hecoIntervention: 'Diseño de cerchas de cubierta con cuerdas en perfiles tubulares estructurales ASTM A500 Gr C y columnas HEA 450 en ASTM A572 Gr 50; verificación de estados límite de servicio ante viento y sismo según NSR-10 Título B y F.',
    result: '7.200 m² de cubierta industrial con excelente comportamiento dinámico ante ráfagas de viento y derivas sísmicas controladas a menos del 0.7%. Montaje acelerado en 45 días sin retrasos de taller.',
    specifications: {
      concrete: "Cimentación f'c = 28 MPa sobre zapatas aisladas amarradas",
      steel: 'ASTM A572 Gr 50 y perfiles tubulares ASTM A500 Gr C',
      seismicZone: 'Alta · Dosquebradas (Risaralda)',
      software: ['SAP2000 v24', 'IDEA StatiCa Conexiones', 'Revit']
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    blueprintSnippet: 'Luces L=34m · Acero A572 · Conexiones a Momento Precalificadas'
  },
  {
    id: 'diagnostico-patologia-alamos',
    title: 'Diagnóstico de Fisuración y Patología en Conjunto Los Álamos',
    category: 'Evaluación & Patología',
    location: 'Sector Álamos, Pereira',
    year: 2025,
    areaM2: 3200,
    levels: 6,
    structuralSystem: 'Mampostería estructural de cavidad rellena (NSR-10 Título D)',
    problem: 'Aparición súbita de fisuras en diagonal a 45° en muros del primer y segundo piso con atasco de puertas y alarma generalizada en los copropietarios tras un sismo superficial de magnitud 4.6 en la cordillera central.',
    hecoIntervention: 'Instalación de testigos de vidrio y fisurómetros biaxiales; esclerometría para verificar resistencia del mortero de inyección; análisis geotécnico por asentamiento diferencial en esquina nororiental debido a fuga en colector pluvial.',
    result: 'Dictamen técnico pericial que descartó riesgo de colapso estructural inmediato. Se localizó la fuga de acueducto, se estabilizó la cimentación mediante micropilotes y se sellaron fisuras con mortero polimérico no retráctil.',
    specifications: {
      concrete: "Verificación de f'm mortero = 12.5 MPa y f'c concreto de cimientos",
      steel: 'Refuerzo vertical y horizontal grado 60',
      seismicZone: 'Alta · Monitoreo de vibraciones ambientales',
      software: ['Modelación de Asentamientos GeoSoft', 'Fisurometría Digital']
    },
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=1200&q=80',
    blueprintSnippet: 'Mapeo de Grietas a 45° · Ensayo de Esclerometría · Estabilización Geotécnica'
  },
  {
    id: 'reforzamiento-clinica-risaralda',
    title: 'Evaluación de Vulnerabilidad y Reforzamiento Hospitalario',
    category: 'Reforzamiento',
    location: 'Avenida 30 de Agosto, Pereira',
    year: 2025,
    areaM2: 3100,
    levels: 5,
    structuralSystem: 'Estructura aporticada de concreto construida en 1991 (pre-NSR-98) con columnas cortas en fachada',
    problem: 'Edificación del Grupo de Uso IV (Ocupación Especial Hospitalaria, Coeficiente de Importancia I=1.50) con déficit severo de rigidez lateral y efecto de columna corta que impedía la habilitación de nuevas salas de cirugía.',
    hecoIntervention: 'Análisis estático no lineal pushover (NSR-10 A.10); diseño de encamisado de columnas con recrecido de sección y armadura longitudinal; adición de riostras de pandeo restringido (BRB) en vanos críticos sin suspender el servicio médico.',
    result: 'Actualización sismorresistente con factor de seguridad > 1.40. Aprobación por la Secretaría de Salud y Curaduría Urbana, garantizando la operatividad continua de la institución médica tras un evento sísmico mayor.',
    specifications: {
      concrete: "Concreto fluido autocompactante f'c = 35 MPa con inhibidor de corrosión",
      steel: 'Refuerzo longitudinal fy = 420 MPa + Placas de anclaje A36 y epóxicos Hilti',
      seismicZone: 'Grupo de Uso IV · Coeficiente de Importancia I = 1.50',
      software: ['ETABS Pushover Analysis', 'SAFE', 'Hilti PROFIS Engineering']
    },
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    blueprintSnippet: 'Encamisado de Columnas · Riostras BRB · Factor de Importancia I=1.50'
  }
];

export const WHY_HECO_PILLARS: WhyHecoPillar[] = [
  {
    number: '01',
    title: 'Criterio Estructural',
    headline: 'Las decisiones parten del comportamiento real de la estructura',
    description: 'No somos operadores automáticos de software. Cada geometría, nudo y condición de apoyo es analizada con fundamento mecánico riguroso para entender cómo viajan las cargas hasta el suelo.',
    evidence: 'Verificación manual de equilibrio estático y torsión accidental en todos los modelos.'
  },
  {
    number: '02',
    title: 'Cumplimiento Normativo',
    headline: 'Diseños bajo la normativa colombiana aplicable (NSR-10 y Ley 400)',
    description: 'Conocemos al detalle los Títulos A al K de la NSR-10 y las resoluciones de la Asociación Colombiana de Ingeniería Sísmica (AIS). Garantizamos radicaciones impecables en Curaduría Urbana.',
    evidence: 'Cero actas de rechazo por vicios estructurales en expedientes de Curaduría en Pereira y Risaralda.'
  },
  {
    number: '03',
    title: 'Soluciones Constructivamente Viables',
    headline: 'No buscamos sólo que el cálculo funcione; buscamos que pueda construirse',
    description: 'Un plano inconstruible con armaduras hipercongestionadas o nudos inaccesibles para el vibrado es un mal diseño. Diseñamos pensando en el maestro de obra, el vaciado de concreto y la modulación de encofrados.',
    evidence: 'Planos de despiece claros con radios de doblado reglamentarios y tolerancias de colocación.'
  },
  {
    number: '04',
    title: 'Visión Técnica y Económica',
    headline: 'Equilibrio comprobado entre seguridad, desempeño y costo de obra',
    description: 'Evaluamos alternativas estructurales (concreto tradicional vs. postensado, cerchas vs. alma llena) para que el promotor obtenga la máxima eficiencia por metro cuadrado sin disminuir un milímetro la resistencia sísmica.',
    evidence: 'Racionalización de cuantías que reduce entre 5% y 12% el desperdicio de acero.'
  },
  {
    number: '05',
    title: 'Acompañamiento Durante Obra',
    headline: 'El ingeniero estructural no desaparece tras entregar los planos',
    description: 'Respondemos con prontitud inquietudes de campo, imprevistos geotécnicos o replanteos durante la excavación y el vaciado. Hablas directamente con el ingeniero que calculó la estructura.',
    evidence: 'Línea directa WhatsApp y visitas de control para certificar que lo construido coincida con lo calculado.'
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: '01',
    title: 'Entendemos el proyecto',
    summary: 'Recibimos planos arquitectónicos, estudio de suelos y necesidades del promotor.',
    details: [
      'Revisión exhaustiva del anteproyecto arquitectónico (DWG/BIM)',
      'Análisis de la estratigrafía y capacidad portante del estudio de suelos (NSR-10 Título H)',
      'Definición de requerimientos espaciales, cargas vivas y usos de la edificación',
      'Identificación del entorno sísmico y coeficientes específicos de Pereira/Risaralda'
    ],
    output: 'Concepto de viabilidad inicial y matriz de requerimientos estructurales'
  },
  {
    step: '02',
    title: 'Analizamos',
    summary: 'Evaluamos las condiciones técnicas y definimos la estrategia de ingeniería.',
    details: [
      'Selección del sistema sismorresistente óptimo (Pórticos DMO/DES, muros, dual, metálico)',
      'Predimensionamiento de elementos estructurales (vigas, columnas, losas, cimentación)',
      'Evaluación de irregularidades en planta y altura según NSR-10 Capítulo A.3',
      'Definición de alternativas técnicas y análisis comparativo costo-constructibilidad'
    ],
    output: 'Esquema de estructuración preliminar y modelo geométrico base'
  },
  {
    step: '03',
    title: 'Diseñamos',
    summary: 'Desarrollamos modelos tridimensionales, cálculos y verificaciones sísmicas.',
    details: [
      'Modelación dinámica en software especializado (ETABS, SAP2000, SAFE)',
      'Análisis modal espectral con el espectro de diseño elástico para Pereira',
      'Control riguroso de derivas de entrepiso (límite máximo 1.0% para concreto según NSR-10)',
      'Diseño por capacidad: columna fuerte - viga débil y cortante resistente'
    ],
    output: 'Modelo estructural validado con verificación completa de estados límite'
  },
  {
    step: '04',
    title: 'Documentamos',
    summary: 'Entregamos planos ejecutivos, memorias de cálculo y despieces.',
    details: [
      'Elaboración de memorias de cálculo detalladas con marco teórico y fórmulas',
      'Dibujo de planos estructurales completos: plantas, cortes, cuadros de columnas y vigas',
      'Planillas de cantidades de obra y despiece exacto de acero de refuerzo',
      'Certificaciones y formatos de responsabilidad técnica para Curaduría Urbana'
    ],
    output: 'Paquete documental listo para radicación y aprobación de licencia de construcción'
  },
  {
    step: '05',
    title: 'Acompañamos',
    summary: 'Respondemos inquietudes y apoyamos al cliente durante la ejecución de la obra.',
    details: [
      'Resolución técnica de RFI (Request for Information) de la dirección de obra',
      'Aclaración de interferencias hidrosanitarias o eléctricas en elementos estructurales',
      'Visitas de inspección técnica en fases críticas (cimentación, primer vaciado, losas)',
      'Conceptos de no objeción ante cambios de proveedores de acero o concreto'
    ],
    output: 'Soporte técnico continuo y tranquilidad jurídica y constructiva para el promotor'
  }
];

export const PATHOLOGY_TRIAGE_CASES: PathologyTriageCase[] = [
  {
    id: 'grieta-diagonal-muro',
    patternName: 'Fisuras Diagonales a 45° en Muros',
    visualCue: 'Líneas oblicuas que nacen en las esquinas de ventanas/puertas o cruzan el paño del muro en diagonal',
    typicalLocation: 'Muros de mampostería en pisos inferiores o muros medianeros',
    probableCauses: [
      'Esfuerzo cortante excesivo por solicitación sísmica o viento',
      'Asentamiento diferencial del suelo bajo un extremo del cimiento',
      'Ausencia de columnetas o vigas de confinamiento reglamentarias'
    ],
    isStructuralRisk: 'Alto',
    recommendation: 'Requiere inspección técnica urgente. No tape la fisura con estuco sin antes verificar si está activa con un fisurómetro.',
    hecoNextStep: 'Visita técnica de diagnóstico in-situ con levantamiento de fisuras y verificación de cimentación.'
  },
  {
    id: 'fisura-flexion-viga',
    patternName: 'Fisuras Verticales en Centro de Viga o Losa',
    visualCue: 'Grietas rectas que ascienden desde la cara inferior hacia el centro de la viga en el tercio medio de la luz',
    typicalLocation: 'Centro de luz de vigas principales, viguetas o losas de entrepiso',
    probableCauses: [
      'Sobrecargas de uso imprevistas superiores a las de diseño',
      'Deflexión excesiva por retiro prematuro de formaletas/puntales',
      'Cuantía insuficiente de acero longitudinal positivo'
    ],
    isStructuralRisk: 'Alto',
    recommendation: 'Descargar el área inmediatamente y apuntalar temporalmente si la apertura de fisura supera los 0.4 mm.',
    hecoNextStep: 'Cálculo de capacidad a flexión de la sección y propuesta de refuerzo con platabandas o fibra de carbono CFRP.'
  },
  {
    id: 'desprendimiento-oxido',
    patternName: 'Desprendimiento de Concreto y Manchas de Óxido',
    visualCue: 'Concreto soplado, abombado o desprendido dejando ver varillas de acero oxidadas con polvillo rojizo',
    typicalLocation: 'Bases de columnas, fondos de balcones, parqueaderos y zonas húmedas',
    probableCauses: [
      'Carbonatación del concreto por pérdida de alcalinidad',
      'Recubrimiento de concreto insuficiente (< 2.5 cm) en el vaciado original',
      'Penetración de humedad y cloruros que expanden el acero hasta 6 veces su volumen'
    ],
    isStructuralRisk: 'Medio',
    recommendation: 'Limpiar el acero, medir la pérdida de sección transversal de la varilla y aplicar pasivadores químicos.',
    hecoNextStep: 'Ensayo de profundidad de carbonatación con fenolftaleína y diseño de mortero de reparación estructural.'
  },
  {
    id: 'fisuras-malla-retractil',
    patternName: 'Fisuración Superficial Tipo "Piel de Cocodrilo"',
    visualCue: 'Red de microfisuras aleatorias muy finas (< 0.15 mm) en revoques o losas de piso',
    typicalLocation: 'Superficie de revoques (pañetes) o losas expuestas al sol y viento',
    probableCauses: [
      'Retracción plástica por secado rápido durante el fraguado',
      'Exceso de agua en la mezcla de mortero o falta de curado con agua',
      'Capa de revoque aplicada con espesor excesivo sin malla gallinero'
    ],
    isStructuralRisk: 'Bajo - No Estructural',
    recommendation: 'No compromete la seguridad estructural de la edificación. Es un defecto estético de acabado o mampostería no estructural.',
    hecoNextStep: 'Sello elástico de juntas o aplicación de pintura elastomérica impermeable.'
  }
];

export const ENGINEER_PROFILE = {
  name: 'Ing. Especialista HECO',
  title: 'Ingeniero Civil · Especialista en Estructuras',
  registration: 'Matrícula Profesional COPNIA No. 66202-XXXXX RIS',
  education: [
    'Ingeniero Civil · Universidad Tecnológica de Pereira (UTP)',
    'Especialista en Ingeniería de Estructuras · Universidad Nacional de Colombia',
    'Miembro Activo de la Asociación Colombiana de Ingeniería Sísmica (AIS)'
  ],
  experienceYears: 14,
  sqmDesigned: '+120.000 m²',
  projectsCount: '+85',
  keyCompetencies: [
    'Diseño y detallado sismorresistente bajo NSR-10 (Títulos A al K)',
    'Modelación tridimensional avanzada en ETABS, SAFE, SAP2000 y CYPECAD',
    'Patología y auscultación de estructuras de concreto y mampostería',
    'Evaluación no lineal de vulnerabilidad sísmica (Pushover / Desempeño)',
    'Diseño de reforzamiento con materiales tradicionales y fibra de carbono (CFRP)',
    'Peritajes técnicos periciales y conceptos de estabilidad para aseguradoras y juzgados'
  ],
  softwareTools: [
    { name: 'ETABS Ultimate', role: 'Modelación dinámica modal y diseño por capacidad' },
    { name: 'SAFE', role: 'Diseño de losas postensadas y sistemas de cimentación' },
    { name: 'SAP2000', role: 'Estructuras especiales, cerchas y naves industriales' },
    { name: 'IDEA StatiCa', role: 'Diseño y verificación de conexiones metálicas complejas' },
    { name: 'CYPECAD', role: 'Estructuras de concreto armado y mampostería' },
    { name: 'Revit / BIM', role: 'Coordinación interdisciplinar y detección de colisiones' }
  ],
  quote: 'En ingeniería estructural, la persona que firma los planos asume una responsabilidad ética y jurídica de por vida. En HECO usted habla directamente con el ingeniero que calcula, responde y asiste a su obra.'
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'diseno',
    question: '¿Por qué en HECO realizamos una evaluación técnica previa antes de cotizar?',
    answer: 'Porque en ingeniería estructural cada terreno, geometría y sistema constructivo es particular. Cotizar a ciegas sin revisar la complejidad arquitectónica o el tipo de suelo conduce a sobrecostos o alcances incompletos. Conversamos previamente uno a uno con el cliente, revisamos el estado de los planos y definimos juntos la mejor ruta técnica antes de presentar cualquier propuesta económica.'
  },
  {
    id: 'faq-2',
    category: 'patologia',
    question: '¿Una fisura en mi edificación siempre significa peligro de colapso?',
    answer: 'No. Una fisura no siempre significa un problema estructural grave. Muchas fisuras surgen por retracción hidráulica de morteros, variaciones térmicas entre el día y la noche o flexiones tolerables de elementos no estructurales. Sin embargo, grietas diagonales a 45°, fisuras en columnas o aquellas que van aumentando de apertura con el tiempo sí requieren inspección técnica profesional para certificar la seguridad de los residentes.'
  },
  {
    id: 'faq-3',
    category: 'general',
    question: '¿Realizan visitas técnicas y atienden proyectos fuera de Pereira?',
    answer: 'Sí. Nuestra sede principal está en Pereira y atendemos de forma presencial e inmediata toda el área metropolitana (Dosquebradas, La Virginia) y municipios de Risaralda, Caldas y Quindío (Armenia, Manizales, Santa Rosa de Cabal, Chinchiná). Para diseño estructural nuevo y revisión independiente atendemos proyectos en toda Colombia mediante entornos de trabajo BIM y coordinación virtual.'
  },
  {
    id: 'faq-4',
    category: 'diseno',
    question: '¿Cuánto tiempo tarda el desarrollo de un diseño estructural?',
    answer: 'El plazo depende del área y la complejidad geométrica. Para una vivienda unifamiliar o bifamiliar (150 a 400 m²) el tiempo habitual es de 10 a 15 días hábiles. Para edificios residenciales o comerciales de mediana altura (1.000 a 5.000 m²) el plazo oscila entre 3 y 5 semanas, incluyendo memorias de cálculo, planos de despiece y formatos de Curaduría.'
  },
  {
    id: 'faq-5',
    category: 'consultoria',
    question: '¿Pueden revisar un diseño estructural realizado por otro ingeniero?',
    answer: 'Sí. Realizamos el servicio de Revisión Independiente de Diseños Estructurales conforme a la Ley 1796 de 2016 y los requisitos de la NSR-10. Analizamos el modelo matemático, la transmisión de cargas, la deriva sísmica y la concordancia de los planos para emitir el memorial de cumplimiento o subsanación.'
  },
  {
    id: 'faq-6',
    category: 'patologia',
    question: '¿Qué incluye una evaluación técnica de patología estructural?',
    answer: 'Incluye: 1) Visita de inspección ocular directa por el ingeniero especialista, 2) Registro fotográfico de alta resolución y mapeo cartográfico de fisuras, 3) Pruebas no destructivas preliminares (fisurometría y esclerometría si aplica), 4) Análisis de causas probables y 5) Emisión de un Concepto Técnico Pericial firmado con conclusiones claras sobre la estabilidad y recomendaciones de intervención o reforzamiento.'
  },
  {
    id: 'faq-7',
    category: 'normativa',
    question: '¿Todos los proyectos se entregan listos para radicar en Curaduría Urbana?',
    answer: 'Absolutamente. Entregamos el expediente completo requerido por las Curadurías Urbanas de Pereira y todo el territorio nacional: Memorias de cálculo justificativas firmadas por Ingeniero Civil especialista matriculado en el COPNIA, planos estructurales a escala normalizada, planillas de despiece y formulario único nacional debidamente diligenciado.'
  }
];

export const MOCK_CLIENT_FILES: ClientProjectFile[] = [
  {
    id: 'proj-01',
    projectCode: 'HECO-2025-08',
    clientName: 'Constructora Risaralda SAS',
    projectName: 'Edificio Residencial Las Palmas · Pereira',
    serviceType: 'Diseño Estructural NSR-10 (DES)',
    status: 'En Curaduría',
    progress: 85,
    curaduriaNumber: 'Rad. 66001-2-25-0142 (Curaduría Segunda)',
    lastUpdate: 'Hace 2 días',
    deliverables: [
      { name: 'Memoria_Calculo_Estructural_LasPalmas_RevB.pdf', type: 'PDF', size: '14.2 MB', ready: true },
      { name: 'Planos_Estructurales_Cimentacion_Columnas.dwg', type: 'DWG', size: '28.5 MB', ready: true },
      { name: 'Planos_Despiece_Vigas_Losas_N1_a_N8.dwg', type: 'DWG', size: '36.1 MB', ready: true },
      { name: 'Certificacion_Responsabilidad_Estructural_NSR10.pdf', type: 'PDF', size: '1.8 MB', ready: true }
    ]
  },
  {
    id: 'proj-02',
    projectCode: 'HECO-2025-11',
    clientName: 'Inversiones Comerciales del Otún',
    projectName: 'Bodega Logística Bodega Sur · Dosquebradas',
    serviceType: 'Estructura Metálica & Mezzanine',
    status: 'Aprobado',
    progress: 100,
    curaduriaNumber: 'Licencia 66170-1-25-0089',
    lastUpdate: 'Aprobado sin observaciones',
    deliverables: [
      { name: 'Expediente_Final_Curaduria_Completo.pdf', type: 'PDF', size: '22.0 MB', ready: true },
      { name: 'Planos_Taller_Conexiones_Soldadas_A572.dwg', type: 'DWG', size: '19.4 MB', ready: true },
      { name: 'Planilla_Resumen_Kilos_Acero.pdf', type: 'PDF', size: '2.1 MB', ready: true }
    ]
  },
  {
    id: 'proj-03',
    projectCode: 'HECO-2025-14',
    clientName: 'Conjunto Residencial Mirador del Parque',
    projectName: 'Dictamen Pericial de Fisuración Bloque C',
    serviceType: 'Patología & Diagnóstico Técnico',
    status: 'En Ejecución',
    progress: 60,
    lastUpdate: 'Fase de monitoreo con fisurómetro activo',
    deliverables: [
      { name: 'Informe_Inspeccion_Ocular_Preliminar.pdf', type: 'PDF', size: '8.4 MB', ready: true },
      { name: 'Cartografia_Mapeo_Fisuras_Pisos_1y2.pdf', type: 'PDF', size: '5.6 MB', ready: true },
      { name: 'Concepto_Pericial_Definitivo.pdf', type: 'PDF', size: 'Pendiente', ready: false }
    ]
  }
];
