import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ToolFilters from "../components/ToolFilters";
import ToolGrid from "../components/ToolGrid";
import WhatsAppModal from "../components/WhatsAppModal";
import NewsletterModal from "../components/NewsletterModal";
import tools from "../data/tools";
import { useLanguage } from "../context/LanguageContext";
import { FilterOptions, ToolCard } from "../types";

const Index = () => {
  const { language, setLanguage } = useLanguage();
  
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: null,
    difficulty: null,
    search: "",
  });
  
  const [filteredTools, setFilteredTools] = useState<ToolCard[]>(tools);
  
  // Apply filters whenever they change
  useEffect(() => {
    let result = [...tools];
    
    // Filter by category
    if (filters.category) {
      result = result.filter((tool) => tool.category === filters.category);
    }
    
    // Filter by difficulty
    if (filters.difficulty) {
      result = result.filter((tool) => tool.difficulty === filters.difficulty);
    }
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm) ||
          tool.description[language].toLowerCase().includes(searchTerm)
      );
    }
    
    setFilteredTools(result);
  }, [filters, language]);
  
  // Update page title and meta based on language
  useEffect(() => {
    document.title = language === "es" 
      ? "Irrelevant | Catálogo de Herramientas AI para Empresas" 
      : "Irrelevant | AI Tools Catalog for Businesses";
      
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", language === "es"
        ? "Descubre las mejores herramientas de inteligencia artificial para hacer crecer tu negocio sin complicaciones técnicas."
        : "Discover the best AI tools to grow your business without technical complications.");
    }
  }, [language]);
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo unificado para toda la página */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]"></div>
      
      {/* Animated Grid Pattern - Global */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #8B5FFF 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Dynamic Neural Network Lines - Global */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradientGlobal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5FFF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M0,200 Q400,100 800,150 T1600,200" stroke="url(#lineGradientGlobal)" strokeWidth="2" fill="none" className="animate-pulse">
          <animate attributeName="d" 
            values="M0,200 Q400,100 800,150 T1600,200;M0,250 Q400,150 800,100 T1600,180;M0,200 Q400,100 800,150 T1600,200" 
            dur="8s" repeatCount="indefinite"/>
        </path>
        <path d="M0,400 Q600,300 1200,350 T1800,400" stroke="url(#lineGradientGlobal)" strokeWidth="1.5" fill="none" className="animate-pulse delay-1000">
          <animate attributeName="d" 
            values="M0,400 Q600,300 1200,350 T1800,400;M0,350 Q600,450 1200,300 T1800,380;M0,400 Q600,300 1200,350 T1800,400" 
            dur="10s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Floating Orbs - Global */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#8B5FFF]/20 via-[#8B5FFF]/5 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#A78BFA]/15 via-[#A78BFA]/3 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-[50%] right-[20%] w-[300px] h-[300px] bg-gradient-radial from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
      
      {/* Cyber Grid Overlay - Global */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5FFF]/5 to-transparent"></div>
      
      {/* Contenido - Todo en relative z-10 para estar encima del fondo */}
      <div className="relative z-10">
        <Header
          currentLang={language}
          onLanguageChange={setLanguage}
          onNewsletterClick={() => setIsNewsletterModalOpen(true)}
        />
        
        <Hero 
          language={language}
          onJoinWhatsApp={() => setIsWhatsAppModalOpen(true)}
        />
        
        <ToolFilters
          language={language}
          onFilterChange={setFilters}
          totalTools={tools.length}
          filteredCount={filteredTools.length}
        />
        
        <ToolGrid tools={filteredTools} language={language} />
        
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Irrelevant. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Política de Privacidad" : "Privacy Policy"}
                </a>
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Términos de Uso" : "Terms of Use"}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      <WhatsAppModal
        language={language}
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
      
      <NewsletterModal
        language={language}
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Index;