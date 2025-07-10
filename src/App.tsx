import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FormsSection } from './components/FormsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageToggle={toggleLanguage} />
      <HeroSection language={language} />
      <FormsSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
      <FAQSection language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;