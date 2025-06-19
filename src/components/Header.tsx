import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [showComingSoon, setShowComingSoon] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => {
        setShowComingSoon(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleNewsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

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

      {/* Coming Soon Toast */}
      {showComingSoon && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 animate-bounce-in">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl blur opacity-75"></div>
            <div className="relative bg-black px-6 py-4 rounded-xl border border-purple-500/50 shadow-xl">
              <p className="text-white font-bold text-center">
                {currentLang === "es" ? "¡Próximamente!" : "Coming Soon!"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`relative group transition-all duration-700 ease-out ${
              scrolled ? "scale-98 translate-y-1" : "scale-100"
            }`}
          >
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
                    <Link 
                      to="/" 
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
                    </Link>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center space-x-6">
                    {/* Tools Link */}
                    <Link
                      to="/tools"
                      className="text-[#E5E7EB] hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
                    >
                      <span className="relative z-10">{currentLang === "es" ? "Herramientas" : "Tools"}</span>
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                    </Link>

                    {/* AI News Coming Soon Link */}
                    <a
                      href="#"
                      onClick={handleNewsClick}
                      className="text-[#E5E7EB] hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
                    >
                      <span className="relative z-10 flex items-center">
                        {currentLang === "es" ? "Noticias AI" : "AI News"}
                        <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500 text-white rounded-full font-bold animate-pulse">
                          {currentLang === "es" ? "Próximamente" : "Coming Soon"}
                        </span>
                      </span>
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                    </a>

                    {/* Resources Link */}
                    <Link
                      to="/resources"
                      className="text-[#E5E7EB] hover:text-white font-medium transition-all duration-300 hover:scale-105 relative group"
                    >
                      <span className="relative z-10">{currentLang === "es" ? "Recursos" : "Resources"}</span>
                      <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                    </Link>

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

                    {/* WhatsApp Button */}
                    <button
                      onClick={() => window.open('https://chat.whatsapp.com/JMSMme18JN9B6zHdRC6ZGg', '_blank')}
                      className="relative group overflow-hidden"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366]/30 via-[#128C7E]/30 to-[#25D366]/30 rounded-xl blur opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105 border border-[#25D366]/20 shadow-lg shadow-[#25D366]/20 overflow-hidden flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </button>

                    {/* Newsletter Button */}
                    {/* <button
                      onClick={onNewsletterClick}
                      className="relative group overflow-hidden"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-r from-purple-600 to-purple-500 text-white px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-500 hover:scale-105 border border-purple-500/20 shadow-xl shadow-purple-500/30 overflow-hidden flex items-center space-x-2">
                        <Mail size={16} className="relative z-10" />
                        <span className="relative z-10">Newsletter</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </button> */}
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
                  <Link 
                    to="/" 
                    className="flex items-center"
                    onClick={closeMenu}
                  >
                    <img 
                      src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
                      alt="Irrelevant Logo" 
                      className="h-12 w-auto drop-shadow-lg"
                    />
                  </Link>
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
            {/* Tools Link Mobile */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/25 to-[#7C3AED]/25 rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link
                to="/tools"
                onClick={closeMenu}
                className="relative w-full bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 text-white p-4 rounded-3xl font-bold text-lg transition-all duration-500 hover:scale-105 border border-[#8B5FFF]/30 shadow-xl shadow-[#8B5FFF]/20 overflow-hidden flex items-center justify-center space-x-3 block"
              >
                <span className="text-2xl">🔧</span>
                <span className="relative z-10">{currentLang === "es" ? "Herramientas IA" : "AI Tools"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>

            {/* AI News Coming Soon Link Mobile */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/25 to-[#7C3AED]/25 rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowComingSoon(true);
                  closeMenu();
                }}
                className="relative w-full bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 text-white p-4 rounded-3xl font-bold text-lg transition-all duration-500 hover:scale-105 border border-[#8B5FFF]/30 shadow-xl shadow-[#8B5FFF]/20 overflow-hidden flex items-center justify-center space-x-3 block"
              >
                <span className="text-2xl">📰</span>
                <div className="relative z-10 flex items-center">
                  <span>{currentLang === "es" ? "Noticias AI" : "AI News"}</span>
                  <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500 text-white rounded-full font-bold animate-pulse">
                    {currentLang === "es" ? "Próximamente" : "Coming Soon"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>
            </div>

            {/* Resources Link Mobile */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/25 to-[#7C3AED]/25 rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Link
                to="/resources"
                onClick={closeMenu}
                className="relative w-full bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 text-white p-4 rounded-3xl font-bold text-lg transition-all duration-500 hover:scale-105 border border-[#8B5FFF]/30 shadow-xl shadow-[#8B5FFF]/20 overflow-hidden flex items-center justify-center space-x-3 block"
              >
                <span className="text-2xl">🎓</span>
                <span className="relative z-10">{currentLang === "es" ? "Recursos" : "Resources"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>

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

            {/* WhatsApp Button Mobile */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366]/25 to-[#128C7E]/25 rounded-3xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
              <button
                onClick={() => {
                  window.open('https://chat.whatsapp.com/JMSMme18JN9B6zHdRC6ZGg', '_blank');
                  closeMenu();
                }}
                className="relative w-full bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 text-white p-4 rounded-3xl font-bold text-lg transition-all duration-500 hover:scale-105 border border-[#25D366]/30 shadow-xl shadow-[#25D366]/20 overflow-hidden flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                </svg>
                <span className="relative z-10">{currentLang === "es" ? "Únete a WhatsApp" : "Join WhatsApp"}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
            
            {/* Newsletter Button */}
            {/* <div className="relative group">
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
           </div> */}
         </div>
         </div>
       )}
     </div>
   );
  };
  
  export default Header;