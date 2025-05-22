import React, { useState } from "react";
import { Language } from "../types";
import translations from "../utils/i18n";
import { X, Mail, User, Sparkles, Check } from "lucide-react";

interface NewsletterModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  language,
  isOpen,
  onClose,
}) => {
  const t = translations[language];
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (!email.trim()) {
      setError(language === "es" ? "El email es requerido" : "Email is required");
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      setError(language === "es" ? "Email inválido" : "Invalid email");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Close modal after showing success message
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail("");
        setName("");
      }, 3000);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl">
      {/* Animated particles in modal background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-35"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-25"></div>
      </div>

      <div className="relative group max-w-lg w-full">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-purple-600/30 to-purple-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
        
        {/* Main modal container */}
        <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-pulse opacity-30"></div>
          </div>
          
          <div className="relative p-8">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:rotate-90 group/close"
            >
              <div className="absolute inset-0 bg-purple-500/20 rounded-2xl opacity-0 group-hover/close:opacity-100 transition-opacity duration-300"></div>
              <X size={20} className="relative" />
            </button>
            
            {isSuccess ? (
              <div className="text-center py-8">
                {/* Success animation */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg shadow-green-500/30"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Check size={32} className="text-white animate-bounce" />
                  </div>
                  {/* Success particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse opacity-50"></div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {language === "es" ? "¡Perfecto!" : "Perfect!"}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {language === "es" 
                    ? "Te has suscrito exitosamente. Pronto recibirás contenido exclusivo sobre IA." 
                    : "You've successfully subscribed. You'll soon receive exclusive AI content."}
                </p>
              </div>
            ) : (
              <>
                {/* Header section */}
                <div className="text-center mb-8">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
                    <div className="relative w-full h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30">
                      <Mail size={32} className="text-white" />
                      <Sparkles size={16} className="absolute -top-1 -right-1 text-purple-200 animate-bounce" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent">
                    {language === "es" ? "Newsletter Exclusivo" : "Exclusive Newsletter"}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {language === "es" 
                      ? "Únete a nuestra comunidad y recibe las últimas novedades sobre herramientas de IA, tips exclusivos y contenido premium." 
                      : "Join our community and receive the latest AI tools news, exclusive tips and premium content."}
                  </p>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name input */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-purple-400" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={language === "es" ? "Tu nombre" : "Your name"}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:bg-white/10"
                      />
                    </div>
                  </div>
                  
                  {/* Email input */}
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-purple-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 hover:bg-white/10"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Error message */}
                  {error && (
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-red-500/20 rounded-2xl blur"></div>
                      <div className="relative bg-red-500/10 border border-red-500/20 rounded-2xl p-3">
                        <p className="text-red-400 text-sm text-center font-medium">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="relative w-full group overflow-hidden"
                    disabled={isLoading}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className={`relative w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-500 border border-purple-500/20 shadow-xl shadow-purple-500/30 overflow-hidden flex items-center justify-center space-x-3 ${
                      isLoading 
                        ? 'bg-purple-600/50 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-purple-600 to-purple-500 hover:scale-105 text-white'
                    }`}>
                      {isLoading ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>{language === "es" ? "Suscribiendo..." : "Subscribing..."}</span>
                        </>
                      ) : (
                        <>
                          <Mail size={20} />
                          <span>{language === "es" ? "Suscribirse Ahora" : "Subscribe Now"}</span>
                        </>
                      )}
                      {!isLoading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      )}
                    </div>
                  </button>
                </form>
                
                {/* Footer note */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {language === "es" 
                      ? "🔒 Tu privacidad es importante. No spam, solo contenido valioso." 
                      : "🔒 Your privacy matters. No spam, just valuable content."}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;