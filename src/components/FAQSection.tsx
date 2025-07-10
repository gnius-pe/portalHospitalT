import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { translations } from '../data/translations';

interface FAQSectionProps {
  language: 'es' | 'en';
}

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const t = translations[language];

  const faqItems: FAQItem[] = [
    {
      question: '¿Cómo puedo descargar los formularios?',
      answer: 'Puedes descargar cualquier formulario haciendo clic en el botón "Descargar PDF" en la tarjeta del formulario que necesites. Los archivos se descargarán automáticamente en formato PDF.'
    },
    {
      question: '¿Los formularios están disponibles en inglés?',
      answer: 'Sí, todos los formularios están disponibles tanto en español como en inglés. Puedes cambiar el idioma usando el botón de idioma en la parte superior de la página.'
    },
    {
      question: '¿Necesito llenar los formularios antes de mi cita?',
      answer: 'Recomendamos llenar los formularios con anticipación para agilizar el proceso de admisión. Puedes traer los formularios completados a tu cita médica.'
    },
    {
      question: '¿Qué hago si no encuentro el formulario que necesito?',
      answer: 'Si no encuentras el formulario específico que necesitas, puedes contactarnos directamente a través de nuestro formulario de contacto o llamando al hospital.'
    },
    {
      question: '¿Los formularios tienen validez legal?',
      answer: 'Sí, todos los formularios disponibles en este portal son documentos oficiales del hospital y tienen validez legal para los trámites médicos correspondientes.'
    },
    {
      question: '¿Puedo enviar los formularios por correo electrónico?',
      answer: 'Por seguridad y privacidad, los formularios completados deben ser entregados en persona en el hospital. No aceptamos formularios médicos por correo electrónico.'
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.faqTitle}
          </h2>
          <p className="text-lg text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros formularios
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openItems.has(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};