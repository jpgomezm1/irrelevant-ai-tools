
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ToolFilters from "../components/ToolFilters";
import ToolGrid from "../components/ToolGrid";
import WhatsAppModal from "../components/WhatsAppModal";
import NewsletterModal from "../components/NewsletterModal";
import tools from "../data/tools";
import { useLanguage } from "../context/LanguageContext";
import { FilterOptions, ToolCard } from "../types";

const Index = () => {
  const { language, setLanguage } = useLanguage();
  
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    category: null,
    difficulty: null,
    search: "",
  });
  
  const [filteredTools, setFilteredTools] = useState<ToolCard[]>(tools);
  
  // Apply filters whenever they change
  useEffect(() => {
    let result = [...tools];
    
    // Filter by category
    if (filters.category) {
      result = result.filter((tool) => tool.category === filters.category);
    }
    
    // Filter by difficulty
    if (filters.difficulty) {
      result = result.filter((tool) => tool.difficulty === filters.difficulty);
    }
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchTerm) ||
          tool.description[language].toLowerCase().includes(searchTerm)
      );
    }
    
    setFilteredTools(result);
  }, [filters, language]);
  
  // Update page title and meta based on language
  useEffect(() => {
    document.title = language === "es" 
      ? "Irrelevant | Catálogo de Herramientas AI para Empresas" 
      : "Irrelevant | AI Tools Catalog for Businesses";
      
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", language === "es"
        ? "Descubre las mejores herramientas de inteligencia artificial para hacer crecer tu negocio sin complicaciones técnicas."
        : "Discover the best AI tools to grow your business without technical complications.");
    }
  }, [language]);
  
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header
        currentLang={language}
        onLanguageChange={setLanguage}
        onNewsletterClick={() => setIsNewsletterModalOpen(true)}
      />
      
      <Hero 
        language={language}
        onJoinWhatsApp={() => setIsWhatsAppModalOpen(true)}
      />
      
      <ToolFilters
        language={language}
        onFilterChange={setFilters}
        totalTools={tools.length}
        filteredCount={filteredTools.length}
      />
      
      <ToolGrid tools={filteredTools} language={language} />
      
      <footer className="py-8 border-t border-card-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-tertiary mb-4 md:mb-0">
              © 2025 Irrelevant. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                {language === "es" ? "Política de Privacidad" : "Privacy Policy"}
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                {language === "es" ? "Términos de Uso" : "Terms of Use"}
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <WhatsAppModal
        language={language}
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
      
      <NewsletterModal
        language={language}
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </div>
  );
};

export default Index;
