import React from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';
import { translations } from '../data/translations';

interface AboutSectionProps {
  language: 'es' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const t = translations[language];

  const features = [
    {
      icon: Users,
      title: 'Equipo Profesional',
      description: 'Médicos especialistas con amplia experiencia'
    },
    {
      icon: Award,
      title: 'Certificaciones',
      description: 'Acreditaciones nacionales e internacionales'
    },
    {
      icon: Heart,
      title: 'Atención Integral',
      description: 'Cuidado médico completo y personalizado'
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      description: 'Servicio de emergencias 24/7'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Años de experiencia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Profesionales médicos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <p className="text-gray-600">Pacientes atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};