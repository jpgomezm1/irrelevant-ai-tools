
import React, { useState } from "react";
import { HeaderProps } from "../types";
import translations from "../utils/i18n";
import { Menu, X } from "lucide-react";

const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onNewsletterClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[currentLang];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-primary bg-opacity-90 backdrop-blur-md border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div className="flex-1 md:flex-none">
            <a href="/" className="text-text-primary font-bold text-2xl">
              Irrelevant
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onLanguageChange("es")}
                className={`flex items-center ${
                  currentLang === "es"
                    ? "text-primary font-semibold"
                    : "text-text-secondary"
                }`}
              >
                <span className="mr-1">🇪🇸</span> ES
              </button>
              <span className="text-text-tertiary">|</span>
              <button
                onClick={() => onLanguageChange("en")}
                className={`flex items-center ${
                  currentLang === "en"
                    ? "text-primary font-semibold"
                    : "text-text-secondary"
                }`}
              >
                <span className="mr-1">🇺🇸</span> EN
              </button>
            </div>
          </div>

          {/* Newsletter Button */}
          <div className="hidden md:block">
            <button
              onClick={onNewsletterClick}
              className="btn-primary"
            >
              {t.header.newsletter}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-text-primary p-2"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-primary z-50 p-4">
          <div className="flex justify-between items-center mb-8">
            <a href="/" className="text-text-primary font-bold text-2xl">
              Irrelevant
            </a>
            <button
              onClick={closeMenu}
              className="text-text-primary p-2"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <a
              href="#catalog"
              className="text-text-primary text-2xl font-semibold"
              onClick={closeMenu}
            >
              {t.header.catalog}
            </a>
            
            <div className="py-2">
              <p className="text-text-secondary mb-4">{t.header.language}</p>
              <div className="flex space-x-6">
                <button
                  onClick={() => {
                    onLanguageChange("es");
                    closeMenu();
                  }}
                  className={`flex items-center ${
                    currentLang === "es"
                      ? "text-primary font-semibold"
                      : "text-text-secondary"
                  }`}
                >
                  <span className="mr-2 text-xl">🇪🇸</span> Español
                </button>
                <button
                  onClick={() => {
                    onLanguageChange("en");
                    closeMenu();
                  }}
                  className={`flex items-center ${
                    currentLang === "en"
                      ? "text-primary font-semibold"
                      : "text-text-secondary"
                  }`}
                >
                  <span className="mr-2 text-xl">🇺🇸</span> English
                </button>
              </div>
            </div>
            
            <button
              onClick={() => {
                onNewsletterClick();
                closeMenu();
              }}
              className="btn-primary text-xl w-full"
            >
              {t.header.newsletter}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
