import React, { useState, useEffect } from "react";
import { HeaderProps } from "../types";
import translations from "../utils/i18n";
import { Menu, X, Mail } from "lucide-react";

const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onNewsletterClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-40">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-16 left-2/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-32 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-24 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-35"></div>
      </div>

      {/* Desktop Header */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`relative group transition-all duration-700 ease-out ${scrolled ? 'scale-98 translate-y-1' : 'scale-100'}`}>
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-600/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-700 animate-pulse"></div>
            
            {/* Main container */}
            <div className="relative bg-gradient-to-r from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Enhanced animated border */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse opacity-40"></div>
              </div>
              
              <div className="relative px-6 py-3">
                <div className="flex items-center justify-between h-16">
                  {/* Logo with enhanced styling */}
                  <div className="flex-1 md:flex-none">
                    <a 
                      href="/" 
                      className="relative group flex items-center transition-all duration-500 hover:scale-105"
                    >
                      <div className="relative">
                        {/* Logo glow effect */}
                        <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img 
                          src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
                          alt="Irrelevant Logo" 
                          className="relative h-12 w-auto transition-all duration-500 group-hover:brightness-110 drop-shadow-lg"
                        />
                      </div>
                    </a>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-6">
                    {/* Language Selector */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/25 to-purple-600/25 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative flex items-center space-x-1 bg-white/5 backdrop-blur-2xl rounded-2xl px-4 py-2 border border-white/10 shadow-lg">
                        <button
                          onClick={() => onLanguageChange("es")}
                          className={`relative flex items-center transition-all duration-400 px-3 py-2 rounded-xl overflow-hidden group/btn ${
                            currentLang === "es"
                              ? "text-white font-bold shadow-lg"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {currentLang === "es" && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg shadow-purple-500/25"></div>
                          )}
                          <span className="relative mr-2 text-lg transition-transform duration-300 group-hover/btn:scale-110">🇪🇸</span> 
                          <span className="relative text-sm font-semibold">ES</span>
                        </button>
                        
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                        
                        <button
                          onClick={() => onLanguageChange("en")}
                          className={`relative flex items-center transition-all duration-400 px-3 py-2 rounded-xl overflow-hidden group/btn ${
                            currentLang === "en"
                              ? "text-white font-bold shadow-lg"
                              : "text-gray-300 hover:text-white"
                          }`}
                        >
                          {currentLang === "en" && (
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg shadow-purple-500/25"></div>
                          )}
                          <span className="relative mr-2 text-lg transition-transform duration-300 group-hover/btn:scale-110">🇺🇸</span> 
                          <span className="relative text-sm font-semibold">EN</span>
                        </button>
                      </div>
                    </div>

                    {/* Newsletter Button */}
                    <button
                      onClick={onNewsletterClick}
                      className="relative group overflow-hidden"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-r from-purple-600 to-purple-500 text-white px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 hover:scale-105 border border-purple-500/20 shadow-xl shadow-purple-500/30 overflow-hidden flex items-center space-x-2">
                        <Mail size={16} className="relative z-10" />
                        <span className="relative z-10">Newsletter</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </button>
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="md:hidden">
                    <button
                      onClick={toggleMenu}
                      className="relative group text-white p-3 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:rotate-3"
                      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative">
                        {isMenuOpen ? (
                          <X size={22} className="transition-all duration-500 rotate-180" />
                        ) : (
                          <Menu size={22} className="transition-all duration-500" />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-50 p-4 transition-all duration-700">
          {/* Enhanced mobile particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce opacity-35"></div>
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-25"></div>
            <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-30"></div>
          </div>

          {/* Mobile Header */}
          <div className="relative mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-purple-600/30 to-purple-500/30 rounded-3xl blur-xl opacity-60"></div>
            <div className="relative bg-gradient-to-r from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-3xl border border-white/10 rounded-3xl">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center h-16">
                  <a 
                    href="/" 
                    className="flex items-center"
                  >
                    <img 
                      src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
                      alt="Irrelevant Logo" 
                      className="h-12 w-auto drop-shadow-lg"
                    />
                  </a>
                  <button
                    onClick={closeMenu}
                    className="text-white p-3 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 transition-all duration-500 hover:bg-white/10 hover:rotate-180"
                    aria-label="Close Menu"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="relative space-y-6 px-2">
            {/* Language Selector */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/25 to-purple-600/25 rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6">
                <p className="text-gray-200 mb-6 font-semibold text-lg text-center">Idioma / Language</p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      onLanguageChange("es");
                      closeMenu();
                    }}
                    className={`relative overflow-hidden flex items-center justify-center p-4 rounded-2xl transition-all duration-500 hover:scale-105 ${
                      currentLang === "es"
                        ? "text-white font-bold border-2 border-purple-500 shadow-xl shadow-purple-500/30 bg-purple-500/10"
                        : "text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {currentLang === "es" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-2xl"></div>
                    )}
                    <span className="relative mr-3 text-2xl">🇪🇸</span> 
                    <span className="relative font-semibold">Español</span>
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange("en");
                      closeMenu();
                    }}
                    className={`relative overflow-hidden flex items-center justify-center p-4 rounded-2xl transition-all duration-500 hover:scale-105 ${
                      currentLang === "en"
                        ? "text-white font-bold border-2 border-purple-500 shadow-xl shadow-purple-500/30 bg-purple-500/10"
                        : "text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {currentLang === "en" && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-500/20 rounded-2xl"></div>
                    )}
                    <span className="relative mr-3 text-2xl">🇺🇸</span> 
                    <span className="relative font-semibold">English</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Newsletter Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-3xl blur opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <button
                onClick={() => {
                  onNewsletterClick();
                  closeMenu();
                }}
                className="relative w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white p-6 rounded-3xl font-bold text-xl transition-all duration-500 hover:scale-105 border border-purple-500/20 shadow-2xl shadow-purple-500/40 overflow-hidden flex items-center justify-center space-x-3"
              >
                <Mail size={24} className="relative z-10" />
                <span className="relative z-10">Suscribirse al Newsletter</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;