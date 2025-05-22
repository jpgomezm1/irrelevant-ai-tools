import React, { useState } from "react";
import { Language } from "../types";
import translations from "../utils/i18n";
import { X, MessageCircle, Users, Zap, Shield, ArrowRight, ExternalLink } from "lucide-react";

interface WhatsAppModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  language,
  isOpen,
  onClose,
}) => {
  const t = translations[language];
  const [isLoading, setIsLoading] = useState(false);
  
  // WhatsApp group link would be configured here
  const whatsappLink = "https://chat.whatsapp.com/example";
  
  const handleJoin = () => {
    setIsLoading(true);
    
    // Simulate tracking pixel or analytics event
    setTimeout(() => {
      setIsLoading(false);
      window.open(whatsappLink, "_blank");
      onClose();
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  const benefits = [
    {
      icon: <Zap size={20} />,
      title: language === "es" ? "Acceso Inmediato" : "Instant Access",
      desc: language === "es" ? "Herramientas AI al instante" : "AI tools instantly"
    },
    {
      icon: <Users size={20} />,
      title: language === "es" ? "Comunidad Activa" : "Active Community", 
      desc: language === "es" ? "500+ empresarios conectados" : "500+ entrepreneurs connected"
    },
    {
      icon: <Shield size={20} />,
      title: language === "es" ? "Contenido Exclusivo" : "Exclusive Content",
      desc: language === "es" ? "Tips y recursos premium" : "Premium tips & resources"
    }
  ];
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce opacity-35"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-green-500 rounded-full animate-pulse opacity-25"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-30"></div>
      </div>

      <div className="relative group max-w-2xl w-full">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-green-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
        
        {/* Main modal container */}
        <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent animate-pulse opacity-30"></div>
          </div>
          
          <div className="relative p-8">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:rotate-90 group/close"
            >
              <div className="absolute inset-0 bg-green-500/20 rounded-2xl opacity-0 group-hover/close:opacity-100 transition-opacity duration-300"></div>
              <X size={20} className="relative" />
            </button>
            
            {/* Header section */}
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-6">
                {/* WhatsApp icon with glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30">
                  <MessageCircle size={36} className="text-white" />
                  {/* WhatsApp indicator */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-green-500 text-xs font-bold">W</span>
                  </div>
                </div>
                {/* Floating particles around icon */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-50"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                {language === "es" ? "Únete a Nuestra Comunidad" : "Join Our Community"}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
                {language === "es" 
                  ? "Conecta con más de 500 empresarios y accede a herramientas de IA exclusivas totalmente gratis." 
                  : "Connect with 500+ entrepreneurs and access exclusive AI tools completely free."}
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="relative group/benefit">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover/benefit:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-500/20">
                        {benefit.icon}
                      </div>
                      <h3 className="text-white font-semibold text-sm">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div className="relative mb-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-60"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">500+</div>
                    <div className="text-gray-400 text-sm">{language === "es" ? "Empresarios Activos" : "Active Entrepreneurs"}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">100%</div>
                    <div className="text-gray-400 text-sm">{language === "es" ? "Gratuito" : "Free"}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={handleJoin}
              className="relative w-full group overflow-hidden mb-6"
              disabled={isLoading}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
              <div className={`relative w-full py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-500 border border-green-500/20 shadow-xl shadow-green-500/30 overflow-hidden flex items-center justify-center space-x-3 ${
                isLoading 
                  ? 'bg-green-600/50 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105 text-white'
              }`}>
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>{language === "es" ? "Conectando..." : "Connecting..."}</span>
                  </>
                ) : (
                  <>
                    <MessageCircle size={22} />
                    <span>{language === "es" ? "Unirse Ahora" : "Join Now"}</span>
                    <ExternalLink size={18} />
                  </>
                )}
                {!isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
              </div>
            </button>
            
            {/* Footer disclaimer */}
            <div className="text-center">
              <p className="text-gray-400 text-sm leading-relaxed flex items-center justify-center space-x-2">
                <Shield size={16} />
                <span>
                  {language === "es" 
                    ? "Comunidad privada y segura. Puedes salir cuando quieras." 
                    : "Private and secure community. You can leave anytime."}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;