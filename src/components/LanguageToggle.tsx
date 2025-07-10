import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'es' | 'en';
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white"
      aria-label={`Switch to ${language === 'es' ? 'English' : 'Spanish'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};