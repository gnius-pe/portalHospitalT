import React from 'react';
import { FileText, Download } from 'lucide-react';
import { translations } from '../data/translations';

interface HeroSectionProps {
  language: 'es' | 'en';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const t = translations[language];

  return (
    <section id="home" className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-full p-6">
              <FileText className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.welcome}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#forms"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Ver Formularios
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};