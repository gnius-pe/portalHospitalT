import React, { useState } from 'react';
import { Search, Download, FileText, Shield, CreditCard, Calendar, AlertCircle, LogOut, FileCheck, Pill } from 'lucide-react';
import { formsData } from '../data/formsData';
import { translations } from '../data/translations';

interface FormsSectionProps {
  language: 'es' | 'en';
}

const iconMap = {
  FileText,
  Shield,
  CreditCard,
  Calendar,
  AlertCircle,
  LogOut,
  FileCheck,
  Pill
};

export const FormsSection: React.FC<FormsSectionProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const t = translations[language];

  const filteredForms = formsData.filter(form => {
    const matchesSearch = t.forms[form.title as keyof typeof t.forms]
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (formId: string, formTitle: string) => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${formId}.pdf`;
    link.click();
    
    // Show success message
    alert(`${t.downloadPDF}: ${formTitle}`);
  };

  return (
    <section id="forms" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.formsNavLabel}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todas las categorías</option>
            <option value="general">General</option>
            <option value="emergency">Emergencia</option>
            <option value="administrative">Administrativo</option>
          </select>
        </div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredForms.map((form) => {
            const IconComponent = iconMap[form.icon as keyof typeof iconMap];
            return (
              <div
                key={form.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {t.forms[form.title as keyof typeof t.forms]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {form.description}
                    </p>
                    <button
                      onClick={() => handleDownload(form.id, t.forms[form.title as keyof typeof t.forms])}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      {t.downloadPDF}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredForms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron formularios que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};