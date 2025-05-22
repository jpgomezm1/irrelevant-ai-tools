// src/pages/NewsPage.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import NewsletterModal from "../components/NewsletterModal";
import news from "../data/news";
import { useLanguage } from "../context/LanguageContext";
import { NewsFilterOptions, NewsArticle } from "../types";
import { Search, Filter, ChevronDown, X, Newspaper } from "lucide-react";
import translations from "../utils/i18n";

const NewsPage = () => {
  const { language, setLanguage } = useLanguage();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [filters, setFilters] = useState<NewsFilterOptions>({
    category: null,
    search: ""
  });
  const [filteredNews, setFilteredNews] = useState<NewsArticle[]>(news);
  const [showFilters, setShowFilters] = useState(false);

  const t = translations[language];

  // Apply filters whenever they change
  useEffect(() => {
    let result = [...news];
    
    // Filter by category
    if (filters.category) {
      result = result.filter((article) => article.category === filters.category);
    }
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        (article) =>
          article.title[language].toLowerCase().includes(searchTerm) ||
          article.summary[language].toLowerCase().includes(searchTerm) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    // Sort by date (newest first)
    result.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
    setFilteredNews(result);
  }, [filters, language]);

  const categories = [
    { id: "ai-tools", icon: "🤖" },
    { id: "industry-news", icon: "📰" },
    { id: "tutorials", icon: "📚" },
    { id: "trends", icon: "📈" }
  ];

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  const clearAllFilters = () => {
    setFilters({ category: null, search: "" });
  };

  const hasActiveFilters = filters.search || filters.category;
  const activeFiltersCount = (filters.search ? 1 : 0) + (filters.category ? 1 : 0);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #8B5FFF 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#8B5FFF]/20 via-[#8B5FFF]/5 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#A78BFA]/15 via-[#A78BFA]/3 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header
          currentLang={language}
          onLanguageChange={setLanguage}
          onNewsletterClick={() => setIsNewsletterModalOpen(true)}
        />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center space-x-2 text-[#9CA3AF] mb-6">
                <Link to="/" className="hover:text-white transition-colors">
                  {language === "es" ? "Inicio" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-[#8B5FFF]">
                  {language === "es" ? "Noticias" : "News"}
                </span>
              </div>

              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full border border-[#8B5FFF]/30 bg-gradient-to-r from-[#8B5FFF]/10 via-[#8B5FFF]/5 to-transparent backdrop-blur-xl">
                <Newspaper className="w-6 h-6 text-[#8B5FFF] mr-3" />
                <span className="text-[#A78BFA] text-sm font-semibold tracking-wider uppercase">
                  {language === "es" ? "Centro de Noticias" : "News Center"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent">
                  {t.news.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#9CA3AF] mb-8 leading-relaxed max-w-3xl mx-auto">
                {t.news.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="relative mb-6 max-w-xl mx-auto">
              <div className="relative group">
                <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex items-center">
                    <Search size={18} className="absolute left-4 text-[#9CA3AF] transition-colors duration-300 group-focus-within:text-[#8B5FFF]" />
                    <input
                      type="text"
                      placeholder={t.news.filters.search}
                      value={filters.search}
                      onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                      className="w-full pl-12 pr-12 py-3 md:py-4 bg-transparent text-white placeholder-[#9CA3AF] focus:outline-none text-sm md:text-base"
                    />
                    {filters.search && (
                      <button
                        onClick={() => setFilters(prev => ({ ...prev, search: "" }))}
                        className="absolute right-3 text-[#9CA3AF] hover:text-white p-1 rounded-full hover:bg-[#8B5FFF]/20 transition-all duration-300"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl p-3 text-white font-medium flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center space-x-2">
                  <Filter size={18} />
                  <span>{language === "es" ? "Categorías" : "Categories"}</span>
                  {activeFiltersCount > 0 && (
                    <span className="bg-[#8B5FFF] text-white text-xs px-2 py-1 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>

            {/* Category Filters */}
            <div className={`md:block ${showFilters ? 'block' : 'hidden'} mb-8`}>
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-3">
                <button
                  onClick={() => setFilters(prev => ({ ...prev, category: null }))}
                  className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                    filters.category === null
                      ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                      // Continuación de src/pages/NewsPage.tsx

                      : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                  }`}
                >
                  {t.news.categories.all}
                </button>
                
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilters(prev => ({ 
                      ...prev, 
                      category: cat.id === filters.category ? null : cat.id 
                    }))}
                    className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm ${
                      filters.category === cat.id
                        ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                        : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span className="hidden sm:inline">{t.news.categories[cat.id as keyof typeof t.news.categories]}</span>
                  </button>
                ))}
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <div className="text-center mt-6">
                  <button
                    onClick={clearAllFilters}
                    className="text-[#9CA3AF] hover:text-white text-sm flex items-center space-x-2 mx-auto transition-colors duration-300 hover:bg-[#8B5FFF]/20 px-4 py-2 rounded-xl backdrop-blur-xl border border-[#8B5FFF]/20"
                  >
                    <X size={14} />
                    <span>{language === "es" ? "Limpiar filtros" : "Clear filters"}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Results count */}
            <div className="bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl p-3 md:p-4 text-center mb-8">
              <span className="text-[#E5E7EB] text-sm md:text-base">
                {t.news.filters.showing}{" "}
                <span className="text-[#8B5FFF] font-semibold">
                  {filteredNews.length}
                </span>
                {" "}{t.news.filters.articles}
              </span>
            </div>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                {language === "es" ? "Noticias Destacadas" : "Featured News"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {featuredNews.map((article) => (
                  <NewsCard key={article.id} article={article} language={language} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regular News */}
        {regularNews.length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              {featuredNews.length > 0 && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  {language === "es" ? "Últimas Noticias" : "Latest News"}
                </h2>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {regularNews.map((article) => (
                  <NewsCard key={article.id} article={article} language={language} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* No results */}
        {filteredNews.length === 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FFF]/10 via-transparent to-[#8B5FFF]/10 rounded-3xl blur-3xl"></div>
                
                <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/60 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-12 text-center shadow-2xl shadow-[#8B5FFF]/10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-[#8B5FFF]/20">
                    <Search size={32} className="text-[#9CA3AF]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {language === "es" ? "No se encontraron noticias" : "No news found"}
                  </h3>
                  
                  <p className="text-[#9CA3AF] text-lg mb-6 leading-relaxed">
                    {language === "es"
                      ? "Intenta modificar tus filtros de búsqueda o explora otras categorías"
                      : "Try modifying your search filters or explore other categories"}
                  </p>

                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 px-4 py-2 rounded-full border border-[#8B5FFF]/20 backdrop-blur-xl">
                      <Filter size={16} className="text-[#8B5FFF]" />
                      <span className="text-[#E5E7EB] text-sm">
                        {language === "es" ? "Prueba otros filtros" : "Try other filters"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Irrelevant. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
              </p>
              
              <div className="flex space-x-6">
                <Link to="/" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Herramientas" : "Tools"}
                </Link>
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Política de Privacidad" : "Privacy Policy"}
                </a>
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Términos de Uso" : "Terms of Use"}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      <NewsletterModal
        language={language}
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default NewsPage;