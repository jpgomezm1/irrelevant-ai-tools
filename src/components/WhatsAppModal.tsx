
import React, { useState } from "react";
import { Language } from "../types";
import translations from "../utils/i18n";
import { X } from "lucide-react";

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
    }, 1000);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass-card rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-tertiary hover:text-text-primary"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">💬</span>
          </div>
          <h2 className="text-h2 text-text-primary mb-2">{t.whatsapp.title}</h2>
          <p className="text-text-secondary">{t.whatsapp.subtitle}</p>
        </div>
        
        <button
          onClick={handleJoin}
          className="btn-primary w-full py-4 mb-4 flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loader mr-2"></div>
          ) : (
            <span className="mr-2">📱</span>
          )}
          {t.whatsapp.button}
        </button>
        
        <p className="text-text-tertiary text-center text-sm">
          {t.whatsapp.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default WhatsAppModal;
