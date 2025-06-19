import React, { useState, useEffect, useRef } from "react";
import { Language } from "../types";
import translations from "../utils/i18n";
import { X, Calendar, Users, Zap, ArrowRight, ExternalLink, Star, CheckCircle, Code, TrendingUp } from "lucide-react";

interface LeadMagnetModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({
  language,
  isOpen,
  onClose,
}) => {
  const t = translations[language];
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [isOpen]);
  
  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/JMSMme18JN9B6zHdRC6ZGg', '_blank');
    onClose();
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/jpgomez-stayirrelevant/irrelevant-club', '_blank');
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl">
      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-violet-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-[30%] left-[80%] w-2.5 h-2.5 bg-purple-300 rounded-full animate-bounce opacity-35"></div>
      </div>

      <div className="relative group max-w-3xl w-full">
        {/* Enhanced glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 via-violet-400/20 to-purple-600/40 rounded-3xl blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 animate-pulse"></div>
        
        {/* Main modal container */}
        <div className="relative bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-3xl border border-purple-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://storage.googleapis.com/cluvi/team/video_nasa.mp4" type="video/mp4" />
          </video>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse opacity-40"></div>
          </div>
          
          <div className="relative p-4 sm:p-6 md:p-8 z-10">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 text-gray-400 hover:text-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:rotate-90 group/close z-10"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover/close:opacity-100 transition-opacity duration-300"></div>
              <X size={16} className="sm:hidden relative" />
              <X size={20} className="hidden sm:block relative" />
            </button>
            
            {/* Header section */}
            <div className="text-center mb-6 sm:mb-8">

              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mx-auto mb-4 sm:mb-6 md:mb-8">
                {/* Enhanced icon */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-xl sm:blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-1 sm:inset-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-lg sm:blur-xl opacity-40"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 border-2 border-white/20">
                  <Code size={20} className="sm:hidden text-white drop-shadow-lg" />
                  <Code size={24} className="hidden sm:block md:hidden text-white drop-shadow-lg" />
                  <Code size={36} className="hidden md:block text-white drop-shadow-lg" />
                  {/* Status indicators */}
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-7 sm:h-7 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl border border-white/30 sm:border-2">
                    <Zap size={8} className="sm:hidden text-white" />
                    <Zap size={14} className="hidden sm:block text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -left-0.5 sm:-bottom-1 sm:-left-1 w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp size={8} className="sm:hidden text-white" />
                    <TrendingUp size={12} className="hidden sm:block text-white" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                  {language === "es" ? "Convierte tu Empresa" : "Transform Your Company"}
                </span>
                <br />
                <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  {language === "es" ? "en AI-First" : "into AI-First"}
                </span>
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
                {language === "es" 
                  ? (
                    <>
                      <span className="block sm:hidden">
                        En unos años, solo las empresas que usen IA inteligentemente seguirán siendo relevantes. Te transformamos en AI-First.
                      </span>
                      <span className="hidden sm:block">
                        En unos años, solo las empresas que usen IA inteligentemente seguirán siendo relevantes. Te acompañamos a transformar tus procesos manuales en sistemas que trabajan solos y mejoran con el tiempo
                      </span>
                    </>
                  )
                  : (
                    <>
                      <span className="block sm:hidden">
                        In just a few years, only businesses using AI strategically will stay competitive. We make you AI-First.
                      </span>
                      <span className="hidden sm:block">
                        In just a few years, only businesses using AI strategically will stay competitive. We transform your manual workflows into intelligent systems that operate independently and continuously evolve
                      </span>
                    </>
                  )
                }
              </p>
            </div>

            {/* Enhanced social proof with real client logos */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center">
                <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3">
                  {/* Cluvi Logo */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border border-white/30 sm:border-2 p-0.5 sm:p-1 flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/logo_cluvi.png" 
                      alt="Cluvi"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* RG Logo */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border border-white/30 sm:border-2 p-0.5 sm:p-1 flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/logo_rg.png" 
                      alt="RG"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* ST Logo */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full border border-white/30 sm:border-2 p-0.5 sm:p-1 flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/logo_st.png" 
                      alt="ST"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Plus indicator */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full border border-white/30 sm:border-2 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <span className="text-white font-medium">30+ empresas AI-First</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1 fill-current" size={14} />
                <span className="text-white font-medium">95% reducción de costos</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              {/* Primary CTA */}
              <button
                onClick={handleCalendlyClick}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-xl sm:rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="relative w-full py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-500 border border-purple-400/50 sm:border-2 shadow-2xl shadow-purple-500/40 overflow-hidden flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 hover:scale-105 text-white group-hover:shadow-purple-500/60">
                  <Calendar size={20} className="sm:hidden" />
                  <Calendar size={24} className="hidden sm:block md:hidden" />
                  <Calendar size={28} className="hidden md:block" />
                  <div className="text-center">
                    <div className="leading-tight">
                      <span className="block sm:hidden">
                        {language === "es" ? "AUDITORÍA GRATUITA" : "FREE AUDIT"}
                      </span>
                      <span className="hidden sm:block">
                        {language === "es" ? "AGENDAR AUDITORÍA GRATUITA" : "SCHEDULE FREE AUDIT"}
                      </span>
                    </div>
                    <div className="text-purple-100 text-xs sm:text-sm md:text-base font-medium">
                      {language === "es" ? "Valor $500 - Gratis" : "Value $500 - Free"}
                      <span className="hidden sm:inline"> {language === "es" ? "por tiempo limitado" : "for limited time"}</span>
                    </div>
                  </div>
                  <ExternalLink size={18} className="sm:hidden" />
                  <ExternalLink size={20} className="hidden sm:block md:hidden" />
                  <ExternalLink size={24} className="hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-lg sm:rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-500 border border-green-500/40 shadow-lg overflow-hidden flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:scale-[1.02] text-green-300 hover:text-white backdrop-blur-xl hover:bg-gradient-to-r hover:from-green-500/30 hover:to-emerald-500/30">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                  </svg>
                  <span className="text-xs sm:text-sm md:text-base">
                    <span className="block sm:hidden">Comunidad AI-First</span>
                    <span className="hidden sm:block">Unirse a Comunidad AI-First</span>
                  </span>
                  <ArrowRight size={16} className="sm:hidden group-hover:translate-x-1 transition-transform duration-300" />
                  <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetModal;