import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import ToolFilters from "../components/ToolFilters";
import ToolGrid from "../components/ToolGrid";
import NewsletterModal from "../components/NewsletterModal";
import tools from "../data/tools";
import { useLanguage } from "../context/LanguageContext";
import { FilterOptions, ToolCard } from "../types";
import { Wrench, Shuffle } from "lucide-react";

const ToolsPage = () => {
  const { language, setLanguage } = useLanguage();
  
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: null,
    difficulty: null,
    search: "",
    tag: null
  });
  
  const [filteredTools, setFilteredTools] = useState<ToolCard[]>(tools);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  
  // Función para mezclar array usando Fisher-Yates shuffle
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Función para hacer shuffle de las herramientas
  const handleShuffle = () => {
    setIsShuffling(true);
    
    // Simular una pequeña carga para UX
    setTimeout(() => {
      setFilteredTools(prevTools => shuffleArray(prevTools));
      setIsShuffling(false);
    }, 500);
  };

  // Detectar scroll para mostrar botón flotante
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 800; // Mostrar después de 800px de scroll
      setShowFloatingButton(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    
    // Filter by tag
    if (filters.tag) {
      result = result.filter((tool) => tool.tags && tool.tags.includes(filters.tag));
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
      ? "Herramientas AI | Irrelevant - Catálogo de Herramientas IA para Empresas" 
      : "AI Tools | Irrelevant - AI Tools Catalog for Businesses";
      
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
        
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center space-x-2 text-[#9CA3AF] mb-6">
                <Link to="/" className="hover:text-white transition-colors">
                  {language === "es" ? "Inicio" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-[#8B5FFF]">
                  {language === "es" ? "Herramientas" : "Tools"}
                </span>
              </div>

              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full border border-[#8B5FFF]/30 bg-gradient-to-r from-[#8B5FFF]/10 via-[#8B5FFF]/5 to-transparent backdrop-blur-xl">
                <Wrench className="w-6 h-6 text-[#8B5FFF] mr-3" />
                <span className="text-[#A78BFA] text-sm font-semibold tracking-wider uppercase">
                  {language === "es" ? "Catálogo de Herramientas" : "Tools Catalog"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent">
                  {language === "es" ? "Herramientas de IA" : "AI Tools"}
                </span>
                <span className="block bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent mt-2">
                  {language === "es" ? "para Empresas" : "for Business"}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#9CA3AF] mb-8 leading-relaxed max-w-3xl mx-auto">
                {language === "es" 
                  ? "Descubre herramientas de IA que transformarán tu negocio en piloto automático" 
                  : "Discover AI tools that will transform your business on autopilot"}
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-4 mb-10 justify-center">
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 rounded-full border border-[#8B5FFF]/20">
                  <span className="text-[#8B5FFF] mr-2">⚡</span>
                  <span className="text-[#E5E7EB] text-sm font-medium">
                    {language === "es" ? "Setup en minutos" : "Minutes to setup"}
                  </span>
                </div>
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 rounded-full border border-[#8B5FFF]/20">
                  <span className="text-[#8B5FFF] mr-2">🎯</span>
                  <span className="text-[#E5E7EB] text-sm font-medium">
                    {language === "es" ? "Sin conocimiento técnico" : "No tech skills needed"}
                  </span>
                </div>
                <div className="flex items-center px-4 py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 rounded-full border border-[#8B5FFF]/20">
                  <span className="text-[#8B5FFF] mr-2">💎</span>
                  <span className="text-[#E5E7EB] text-sm font-medium">
                    {language === "es" ? "Probado por expertos" : "Expert tested"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ToolFilters
          language={language}
          onFilterChange={setFilters}
          totalTools={tools.length}
          filteredCount={filteredTools.length}
          onShuffle={handleShuffle}
          isShuffling={isShuffling}
        />
        
        <ToolGrid tools={filteredTools} language={language} />
        
        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Irrelevant. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
              </p>
              
              <div className="flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Inicio" : "Home"}
                </Link>
                <Link to="/news" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Noticias" : "News"}
                </Link>
                <Link to="/resources" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Recursos" : "Resources"}
                </Link>
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
      
      <NewsletterModal
        language={language}
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

      {/* Floating Shuffle Button */}
      {showFloatingButton && filteredTools.length > 0 && (
        <button
          onClick={handleShuffle}
          disabled={isShuffling}
          className={`fixed bottom-6 right-6 z-50 group relative inline-flex items-center justify-center w-14 h-14 font-semibold text-white bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-full shadow-2xl shadow-[#8B5FFF]/40 hover:shadow-[#8B5FFF]/60 transform hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
            showFloatingButton ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          title={language === "es" ? "Mezclar herramientas" : "Shuffle tools"}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative">
            {isShuffling ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <Shuffle size={24} className="group-hover:rotate-180 transition-transform duration-500" />
            )}
          </div>
        </button>
      )}

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

export default ToolsPage;