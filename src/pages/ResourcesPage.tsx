import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PlaylistCard from "../components/PlaylistCard";
import ResourceCard from "../components/ResourceCard";
import NewsletterModal from "../components/NewsletterModal";
import { youtubePlaylists, spotifyPlaylists } from "../data/playlists";
import { otherResources } from "../data/resources";
import { useLanguage } from "../context/LanguageContext";
import { ResourcesFilterOptions, PlaylistItem, ResourceItem } from "../types";
import { Search, Filter, ChevronDown, X, GraduationCap, Youtube, Music, BookOpen } from "lucide-react";
import translations from "../utils/i18n";

const ResourcesPage = () => {
  const { language, setLanguage } = useLanguage();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'youtube' | 'spotify' | 'others'>('youtube');
  const [filters, setFilters] = useState<ResourcesFilterOptions>({
    platform: null,
    category: null,
    search: ""
  });
  const [showFilters, setShowFilters] = useState(false);

  const t = translations[language];

  // Filter data based on active tab and filters
  const getFilteredData = () => {
    let data: (PlaylistItem | ResourceItem)[] = [];
    
    switch (activeTab) {
      case 'youtube':
        data = youtubePlaylists;
        break;
      case 'spotify':
        data = spotifyPlaylists;
        break;
      case 'others':
        data = otherResources;
        break;
    }

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      data = data.filter(item =>
        item.title[language].toLowerCase().includes(searchTerm) ||
        item.description[language].toLowerCase().includes(searchTerm)
      );
    }

    // Apply category filter for playlists
    if (filters.category && activeTab !== 'others') {
      data = data.filter(item => 
        'category' in item && item.category === filters.category
      );
    }

    // Apply type filter for resources
    if (filters.category && activeTab === 'others') {
      data = data.filter(item => 
        'type' in item && item.type === filters.category
      );
    }

    return data;
  };

  const filteredData = getFilteredData();

  // Get categories based on active tab
  const getCategories = () => {
    if (activeTab === 'youtube' || activeTab === 'spotify') {
      return [
        { id: "beginner", label: t.resources.filters.beginner },
        { id: "automation", label: t.resources.filters.automation },
        { id: "marketing", label: t.resources.filters.marketing },
        { id: "focus", label: t.resources.filters.focus },
        { id: "podcasts", label: t.resources.filters.podcasts },
        { id: "motivation", label: t.resources.filters.motivation }
      ];
    } else {
      return [
        { id: "course", label: language === "es" ? "Cursos" : "Courses" },
        { id: "community", label: language === "es" ? "Comunidades" : "Communities" },
        { id: "newsletter", label: "Newsletters" },
        { id: "book", label: language === "es" ? "Libros" : "Books" },
        { id: "tool", label: language === "es" ? "Herramientas" : "Tools" }
      ];
    }
  };

  const clearAllFilters = () => {
    setFilters({ platform: null, category: null, search: "" });
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
                  {language === "es" ? "Recursos" : "Resources"}
                </span>
              </div>

              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full border border-[#8B5FFF]/30 bg-gradient-to-r from-[#8B5FFF]/10 via-[#8B5FFF]/5 to-transparent backdrop-blur-xl">
                <GraduationCap className="w-6 h-6 text-[#8B5FFF] mr-3" />
                <span className="text-[#A78BFA] text-sm font-semibold tracking-wider uppercase">
                  {language === "es" ? "Centro de Aprendizaje" : "Learning Center"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent">
                  {t.resources.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#9CA3AF] mb-8 leading-relaxed max-w-3xl mx-auto">
                {t.resources.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl p-2">
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveTab('youtube')}
                    className={`relative flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'youtube'
                        ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                        : "text-[#E5E7EB] hover:text-white hover:bg-[#8B5FFF]/20"
                    }`}
                  >
                    <Youtube size={18} />
                    <span className="hidden sm:inline">YouTube</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('spotify')}
                    className={`relative flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'spotify'
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                        : "text-[#E5E7EB] hover:text-white hover:bg-[#8B5FFF]/20"
                    }`}
                  >
                    <Music size={18} />
                    <span className="hidden sm:inline">Spotify</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('others')}
                    className={`relative flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === 'others'
                        ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white shadow-lg"
                        : "text-[#E5E7EB] hover:text-white hover:bg-[#8B5FFF]/20"
                    }`}
                  >
                    <BookOpen size={18} />
                    <span className="hidden sm:inline">{language === "es" ? "Otros" : "Others"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Section Headers */}
            <div className="text-center mb-8">
              {activeTab === 'youtube' && (
                <>
                  <h2 className="text-3xl font-bold text-white mb-3">{t.resources.youtube.title}</h2>
                  <p className="text-[#9CA3AF] text-lg">{t.resources.youtube.subtitle}</p>
                </>
              )}
              {activeTab === 'spotify' && (
                <>
                  <h2 className="text-3xl font-bold text-white mb-3">{t.resources.spotify.title}</h2>
                  <p className="text-[#9CA3AF] text-lg">{t.resources.spotify.subtitle}</p>
                </>
              )}
              {activeTab === 'others' && (
                <>
                  <h2 className="text-3xl font-bold text-white mb-3">{t.resources.others.title}</h2>
                  <p className="text-[#9CA3AF] text-lg">{t.resources.others.subtitle}</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="relative mb-6 max-w-xl mx-auto">
              <div className="relative group">
                <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex items-center">
                    <Search size={18} className="absolute left-4 text-[#9CA3AF] transition-colors duration-300 group-focus-within:text-[#8B5FFF]" />
                    <input
                      type="text"
                      placeholder={t.resources.filters.search}
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
                      : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                  }`}
                >
                  {t.resources.filters.all}
                </button>
                
                {getCategories().map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilters(prev => ({ 
                      ...prev, 
                      category: cat.id === filters.category ? null : cat.id 
                    }))}
                    className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                      filters.category === cat.id
                        ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                        : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                    }`}
                  >
                    {cat.label}
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
                {language === "es" ? "Mostrando" : "Showing"}{" "}
                <span className="text-[#8B5FFF] font-semibold">
                  {filteredData.length}
                </span>
                {" "}{language === "es" ? "recursos" : "resources"}
              </span>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {filteredData.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredData.map((item) => {
                  if (activeTab === 'youtube' || activeTab === 'spotify') {
                    return (
                      <PlaylistCard 
                        key={item.id} 
                        playlist={item as PlaylistItem} 
                        language={language}
                        platform={activeTab}
                      />
                    );
                  } else {
                    return (
                      <ResourceCard 
                        key={item.id} 
                        resource={item as ResourceItem} 
                        language={language}
                      />
                    );
                  }
                })}
              </div>
            ) : (
              /* No results */
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FFF]/10 via-transparent to-[#8B5FFF]/10 rounded-3xl blur-3xl"></div>
                
                <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/60 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-12 text-center shadow-2xl shadow-[#8B5FFF]/10">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-[#8B5FFF]/20">
                    <Search size={32} className="text-[#9CA3AF]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {language === "es" ? "No se encontraron recursos" : "No resources found"}
                  </h3>
                  
                  <p className="text-[#9CA3AF] text-lg mb-6 leading-relaxed">
                    {language === "es"
                      ? "Intenta modificar tus filtros de búsqueda o explora otras categorías"
                      : "Try modifying your search filters or explore other categories"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

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
                <Link to="/news" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Noticias" : "News"}
                </Link>
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Política de Privacidad" : "Privacy Policy"}
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

export default ResourcesPage;