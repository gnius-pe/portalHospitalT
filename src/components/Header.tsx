import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { translations } from '../data/translations';

interface HeaderProps {
  language: 'es' | 'en';
  onLanguageToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const navigationItems = [
    { key: 'home', label: t.home, href: '#home' },
    { key: 'forms', label: t.formsNavLabel, href: '#forms' },
    { key: 'about', label: t.about, href: '#about' },
    { key: 'contact', label: t.contact, href: '#contact' },
    { key: 'faq', label: t.faq, href: '#faq' }
  ];

  return (
    <header className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Hospital Name */}
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-2">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg sm:text-xl">
                Hospital de Tingo María
              </h1>
              <p className="text-blue-100 text-xs hidden sm:block">
                Portal de Formularios
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Toggle and Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-200 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-500">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 text-white hover:text-blue-200 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};