
import React from "react";
import translations from "../utils/i18n";
import { Language } from "../types";

interface HeroProps {
  language: Language;
  onJoinWhatsApp: () => void;
}

const Hero: React.FC<HeroProps> = ({ language, onJoinWhatsApp }) => {
  const t = translations[language];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden min-h-[80vh] md:min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-h1Mobile md:text-h1Desktop mb-6 bg-gradient-to-r from-text-primary via-primary-light to-primary bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          {/* CTA Button */}
          <div className="mb-12">
            <button 
              onClick={onJoinWhatsApp}
              className="btn-primary text-lg md:text-xl py-4 px-8 flex items-center justify-center mx-auto"
            >
              <span className="mr-2 text-xl">📱</span>
              {t.hero.whatsappCta}
            </button>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-h3 mb-2">
                {language === "es" ? "Ahorra tiempo" : "Save time"}
              </h3>
              <p className="text-text-secondary">
                {language === "es" 
                  ? "Herramientas seleccionadas para implementar rápidamente" 
                  : "Curated tools for quick implementation"}
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-h3 mb-2">
                {language === "es" ? "Reduce costos" : "Reduce costs"}
              </h3>
              <p className="text-text-secondary">
                {language === "es" 
                  ? "Compara opciones y elige la mejor para tu presupuesto" 
                  : "Compare options and choose the best for your budget"}
              </p>
            </div>
            
            <div className="glass-card p-6">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-h3 mb-2">
                {language === "es" ? "Escala tu negocio" : "Scale your business"}
              </h3>
              <p className="text-text-secondary">
                {language === "es" 
                  ? "Automatiza procesos y enfócate en lo importante" 
                  : "Automate processes and focus on what matters"}
              </p>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="text-text-secondary text-lg">
            <span className="mr-2">👥</span>
            {t.hero.socialProof}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
