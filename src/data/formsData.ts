export interface FormData {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'emergency' | 'administrative';
  icon: string;
}

export const formsData: FormData[] = [
  {
    id: 'medical-history',
    title: 'medicalHistory',
    description: 'Solicite una copia de su historial médico',
    category: 'administrative',
    icon: 'FileText'
  },
  {
    id: 'treatment-auth',
    title: 'treatmentAuth',
    description: 'Autorización para procedimientos médicos',
    category: 'general',
    icon: 'Shield'
  },
  {
    id: 'insurance',
    title: 'insurance',
    description: 'Formulario para trámites de seguro médico',
    category: 'administrative',
    icon: 'CreditCard'
  },
  {
    id: 'appointment',
    title: 'appointment',
    description: 'Solicite una cita médica',
    category: 'general',
    icon: 'Calendar'
  },
  {
    id: 'emergency',
    title: 'emergency',
    description: 'Formulario de admisión de emergencia',
    category: 'emergency',
    icon: 'AlertCircle'
  },
  {
    id: 'discharge',
    title: 'discharge',
    description: 'Formulario de alta hospitalaria',
    category: 'administrative',
    icon: 'LogOut'
  },
  {
    id: 'consent',
    title: 'consent',
    description: 'Consentimiento informado para procedimientos',
    category: 'general',
    icon: 'FileCheck'
  },
  {
    id: 'prescription',
    title: 'prescription',
    description: 'Solicitud de receta médica',
    category: 'general',
    icon: 'Pill'
  }
];