import React from "react";
import translations from "../utils/i18n";
import { Language } from "../types";

interface HeroProps {
  language: Language;
  onJoinWhatsApp: () => void;
}

const Hero: React.FC<HeroProps> = ({ language, onJoinWhatsApp }) => {
  const t = translations[language];

  // Función para abrir WhatsApp directamente
  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/JMSMme18JN9B6zHdRC6ZGg', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #8B5FFF 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Dynamic Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5FFF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M0,200 Q400,100 800,150 T1600,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse">
          <animate attributeName="d" 
            values="M0,200 Q400,100 800,150 T1600,200;M0,250 Q400,150 800,100 T1600,180;M0,200 Q400,100 800,150 T1600,200" 
            dur="8s" repeatCount="indefinite"/>
        </path>
        <path d="M0,400 Q600,300 1200,350 T1800,400" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" className="animate-pulse delay-1000">
          <animate attributeName="d" 
            values="M0,400 Q600,300 1200,350 T1800,400;M0,350 Q600,450 1200,300 T1800,380;M0,400 Q600,300 1200,350 T1800,400" 
            dur="10s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Floating Orbs with Enhanced Glow */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#8B5FFF]/20 via-[#8B5FFF]/5 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#A78BFA]/15 via-[#A78BFA]/3 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-[50%] right-[20%] w-[300px] h-[300px] bg-gradient-radial from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5FFF]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Featured Badge */}
            <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full border border-[#8B5FFF]/30 bg-gradient-to-r from-[#8B5FFF]/10 via-[#8B5FFF]/5 to-transparent backdrop-blur-xl">
              <div className="w-2 h-2 bg-[#8B5FFF] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#A78BFA] text-sm font-semibold tracking-wider uppercase">
                {language === "es" ? "🚀 Powered by AI Magic" : "🚀 Powered by AI Magic"}
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-8">
              <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent">
                {language === "es" ? "Catálogo de" : "AI Tools"}
              </span>
              <span className="block bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent mt-2">
                {language === "es" ? "Herramientas AI" : "Catalog"}
              </span>
              <span className="block text-[#FFFFFF] text-4xl md:text-5xl lg:text-6xl mt-4 font-light">
                {language === "es" ? "para Empresas" : "for Business"}
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl text-[#9CA3AF] mb-12 leading-relaxed max-w-2xl lg:max-w-none">
              {language === "es" 
                ? "Descubre herramientas de IA que transformarán tu negocio en piloto automático" 
                : "Discover AI tools that will transform your business on autopilot"}
            </p>
            
            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
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
            
            {/* Botón de WhatsApp Mejorado */}
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out border border-[#25D366]/30"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative flex items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                  </svg>
                  <span className="whitespace-nowrap">
                    {language === "es" ? "Únete a la comunidad" : "Join the community"}
                  </span>
                  <div className="ml-3 w-5 h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-4 md:space-x-6 text-xs md:text-sm text-[#6B7280]">
                <div className="flex items-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="whitespace-nowrap">
                    {language === "es" ? "500+ empresarios activos" : "500+ active entrepreneurs"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 animate-pulse delay-500"></div>
                  <span className="whitespace-nowrap">
                    {language === "es" ? "100% gratuito" : "100% free"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mr. Irrelevant Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Magical Aura Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FFF]/20 via-[#A78BFA]/30 to-[#7C3AED]/20 rounded-full blur-3xl animate-pulse scale-110"></div>
              
              {/* Floating Elements Around Character */}
              <div className="absolute -top-8 -left-8 w-4 h-4 bg-[#8B5FFF] rounded-full animate-bounce delay-0"></div>
              <div className="absolute -top-12 right-12 w-3 h-3 bg-[#A78BFA] rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-20 -right-6 w-5 h-5 bg-[#7C3AED] rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-16 -left-4 w-2 h-2 bg-[#8B5FFF] rounded-full animate-bounce delay-1000"></div>
              
              {/* Tech Rings */}
              <div className="absolute inset-0 border-2 border-[#8B5FFF]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border border-[#A78BFA]/30 rounded-full animate-spin-reverse"></div>
              
              {/* Main Character Container */}
              <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-transparent to-[#7C3AED]/10 backdrop-blur-2xl border border-[#8B5FFF]/20 rounded-full p-8 hover:scale-105 transition-transform duration-700">
                <img 
                  src="https://storage.googleapis.com/cluvi/wizard.png" 
                  alt="Mr. Irrelevant - AI Wizard"
                  className="w-full h-auto relative z-10 drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(139,95,255,0.5)] transition-all duration-500"
                />
                
                {/* Magic Sparkles */}
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-0"></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#A78BFA] rounded-full animate-ping delay-500"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#8B5FFF] rounded-full animate-ping delay-1000"></div>
              </div>
              
              {/* Quote Bubble */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-[#8B5FFF]/90 to-[#7C3AED]/90 backdrop-blur-xl px-6 py-4 rounded-2xl border border-[#8B5FFF]/30 max-w-xs animate-float">
                <p className="text-white text-sm font-medium">
                  {language === "es" ? "¡Hagamos magia con tu negocio!" : "Let's make magic with your business!"}
                </p>
                <div className="absolute -top-2 left-8 w-4 h-4 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional CSS for animations */}
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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .bg-size-200 { background-size: 200% 200%; }
        .bg-pos-0 { background-position: 0% 50%; }
        .bg-pos-100 { background-position: 100% 50%; }
      `}</style>
    </section>
  );
};

export default Hero;