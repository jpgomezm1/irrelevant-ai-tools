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
            <div className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start">
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
            
            {/* Enhanced CTA */}
            <div className="space-y-6">
              <button 
                onClick={onJoinWhatsApp}
                className="group relative inline-flex items-center justify-center w-full lg:w-auto px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#8B5FFF] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl shadow-2xl shadow-[#8B5FFF]/30 hover:shadow-[#8B5FFF]/50 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out border border-[#8B5FFF]/30"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#8B5FFF] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative flex items-center">
                  <span className="mr-4 text-3xl">📱</span>
                  <span>{t.hero.whatsappCta}</span>
                  <div className="ml-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-[#6B7280]">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-2 animate-pulse"></div>
                  {language === "es" ? "500+ empresarios activos" : "500+ active entrepreneurs"}
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 animate-pulse delay-500"></div>
                  {language === "es" ? "100% gratuito" : "100% free"}
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