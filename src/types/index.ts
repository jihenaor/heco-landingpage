export type ServiceCategory = 
  | 'diseno'
  | 'patologia'
  | 'vulnerabilidad'
  | 'consultoria';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  longDesc: string;
  subservices: string[];
  deliverables: string[];
  iconName: string;
  normativeContext?: string;
  badge?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Residencial' | 'Comercial' | 'Industrial' | 'Evaluación & Patología' | 'Reforzamiento';
  location: string;
  year: number;
  areaM2: number;
  levels: number;
  structuralSystem: string;
  problem: string;
  hecoIntervention: string;
  result: string;
  specifications: {
    concrete: string;
    steel: string;
    seismicZone: string;
    software: string[];
  };
  image: string;
  blueprintSnippet: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  summary: string;
  details: string[];
  output: string;
}

export interface WhyHecoPillar {
  number: string;
  title: string;
  headline: string;
  description: string;
  evidence: string;
}

export interface PathologyTriageCase {
  id: string;
  patternName: string;
  visualCue: string;
  typicalLocation: string;
  probableCauses: string[];
  isStructuralRisk: 'Alto' | 'Medio' | 'Bajo - No Estructural';
  recommendation: string;
  hecoNextStep: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'diseno' | 'patologia' | 'normativa' | 'consultoria';
}

export interface ClientProjectFile {
  id: string;
  projectCode: string;
  clientName: string;
  projectName: string;
  serviceType: string;
  status: 'Revisión Preliminar' | 'Modelación y Cálculo' | 'En Curaduría' | 'Aprobado' | 'En Ejecución';
  progress: number;
  curaduriaNumber?: string;
  lastUpdate: string;
  deliverables: {
    name: string;
    type: 'PDF' | 'DWG' | 'DOCX';
    size: string;
    ready: boolean;
  }[];
}
