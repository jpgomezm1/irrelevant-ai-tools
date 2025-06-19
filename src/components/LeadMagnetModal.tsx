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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
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
        <div className="relative bg-gradient-to-br from-gray-900/95 via-black/98 to-gray-900/95 backdrop-blur-3xl border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden">
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
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse opacity-40"></div>
          </div>
          
          <div className="relative p-8 z-10">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:rotate-90 group/close z-10"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl opacity-0 group-hover/close:opacity-100 transition-opacity duration-300"></div>
              <X size={20} className="relative" />
            </button>
            
            {/* Header section */}
            <div className="text-center mb-8">


              <div className="relative w-28 h-28 mx-auto mb-8">
                {/* Enhanced icon */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur-xl opacity-40"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/40 border-2 border-white/20">
                  <Code size={36} className="text-white drop-shadow-lg" />
                  {/* Status indicators */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/30">
                    <Zap size={14} className="text-white" />
                  </div>
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <TrendingUp size={12} className="text-white" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                  {language === "es" ? "Convierte tu Empresa" : "Transform Your Company"}
                </span>
                <br />
                <span className="text-white text-3xl md:text-4xl">
                  {language === "es" ? "en AI-First" : "into AI-First"}
                </span>
              </h2>
              
              <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
                {language === "es" 
                  ? "En unos años, solo las empresas que usen IA inteligentemente seguirán siendo relevantes. Te acompañamos a transformar tus procesos manuales en sistemas que trabajan solos y mejoran con el tiempo" 
                  : "In just a few years, only businesses using AI strategically will stay competitive. We transform your manual workflows into intelligent systems that operate independently and continuously evolve"}
              </p>
            </div>

            {/* Enhanced social proof with real client logos */}
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {/* Cluvi Logo */}
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-white/30 p-1 flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/logo_cluvi.png" 
                      alt="Cluvi"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* RG Logo */}
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-white/30 p-1 flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/logo_rg.png" 
                      alt="RG"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* ST Logo */}
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-white/30 p-1 flex items-center justify-center">
                    <img 
                      src="https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/logo_st.png" 
                      alt="ST"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Plus indicator */}
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <span className="text-white font-medium">30+ empresas AI-First</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1 fill-current" size={16} />
                <span className="text-white font-medium">95% reducción de costos</span>
              </div>
            </div>

            {/* Value proposition - Badge style */}
{/* <div className="flex flex-wrap justify-center gap-4 mb-8">
  <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-purple-600/10 backdrop-blur-xl border border-purple-500/30 rounded-full px-6 py-4 hover:border-purple-400/50 transition-all duration-300">
    <div className="w-10 h-10 bg-purple-500/30 rounded-full flex items-center justify-center">
      <Code className="text-purple-300" size={18} />
    </div>
    <span className="text-white font-semibold">Auditoría Técnica</span>
  </div>
  
  <div className="flex items-center space-x-3 bg-gradient-to-r from-violet-500/20 to-violet-600/10 backdrop-blur-xl border border-violet-500/30 rounded-full px-6 py-4 hover:border-violet-400/50 transition-all duration-300">
    <div className="w-10 h-10 bg-violet-500/30 rounded-full flex items-center justify-center">
      <Zap className="text-violet-300" size={18} />
    </div>
    <span className="text-white font-semibold">Implementación Real</span>
  </div>

  <div className="flex items-center space-x-3 bg-gradient-to-r from-indigo-500/20 to-indigo-600/10 backdrop-blur-xl border border-indigo-500/30 rounded-full px-6 py-4 hover:border-indigo-400/50 transition-all duration-300">
    <div className="w-10 h-10 bg-indigo-500/30 rounded-full flex items-center justify-center">
      <TrendingUp className="text-indigo-300" size={18} />
    </div>
    <span className="text-white font-semibold">Resultados 10x</span>
  </div>
</div> */}
            
            {/* CTA Buttons */}
            <div className="space-y-4 mb-6">
              {/* Primary CTA */}
              <button
                onClick={handleCalendlyClick}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 rounded-2xl blur-lg opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                <div className="relative w-full py-6 px-8 rounded-2xl font-bold text-xl transition-all duration-500 border-2 border-purple-400/50 shadow-2xl shadow-purple-500/40 overflow-hidden flex items-center justify-center space-x-4 bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 hover:scale-105 text-white group-hover:shadow-purple-500/60">
                  <Calendar size={28} />
                  <div className="text-center">
                    <div className="leading-tight">
                      {language === "es" ? "AGENDAR AUDITORÍA GRATUITA" : "SCHEDULE FREE AUDIT"}
                    </div>
                    <div className="text-purple-100 text-base font-medium">
                      {language === "es" ? "Valor $500 - Gratis por tiempo limitado" : "Value $500 - Free for limited time"}
                    </div>
                  </div>
                  <ExternalLink size={24} />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>

              {/* Secondary CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="relative w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-500 border border-green-500/40 shadow-lg overflow-hidden flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:scale-[1.02] text-green-300 hover:text-white backdrop-blur-xl hover:bg-gradient-to-r hover:from-green-500/30 hover:to-emerald-500/30">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                  </svg>
                  <span>Unirse a Comunidad AI-First</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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