import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('hospital-language') as 'es' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('hospital-language', newLanguage);
  };

  return { language, toggleLanguage };
};