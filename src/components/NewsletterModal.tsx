
import React, { useState } from "react";
import { Language } from "../types";
import translations from "../utils/i18n";
import { X } from "lucide-react";

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
      }, 2000);
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
        
        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-h2 text-text-primary mb-2">{t.newsletter.success}</h2>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h2 className="text-h2 text-text-primary mb-2">{t.newsletter.title}</h2>
              <p className="text-text-secondary">{t.newsletter.subtitle}</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.newsletter.name}
                  className="input-field w-full"
                />
              </div>
              
              <div className="mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.newsletter.placeholder}
                  className="input-field w-full"
                  required
                />
              </div>
              
              {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
              
              <button
                type="submit"
                className="btn-primary w-full py-4 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? <div className="loader"></div> : t.newsletter.button}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
