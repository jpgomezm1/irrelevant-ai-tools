import React, { useState, useEffect } from "react";
import { FilterOptions, Language } from "../types";
import translations from "../utils/i18n";
import { Search, X, Filter, ChevronDown, Award, Zap, Star } from "lucide-react";

interface ToolFiltersProps {
  language: Language;
  onFilterChange: (filters: FilterOptions) => void;
  totalTools: number;
  filteredCount: number;
}

const ToolFilters: React.FC<ToolFiltersProps> = ({
  language,
  onFilterChange,
  totalTools,
  filteredCount,
}) => {
  const t = translations[language];
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [tag, setTag] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const categories = [
    { id: "ai_agents", icon: "🤖" },
    { id: "analytics", icon: "📊" },
    { id: "apps", icon: "📱" },
    { id: "automation", icon: "⚙️" },
    { id: "content", icon: "📝" },
    { id: "dairy", icon: "🥛" },
    { id: "legal", icon: "⚖️" },
    { id: "marketing", icon: "📢" },
    { id: "meetings", icon: "👥" },
    { id: "network", icon: "🌐" },
    { id: "other", icon: "🔍" },
    { id: "productivity", icon: "⏱️" },
    { id: "sales", icon: "💼" },
    { id: "technical", icon: "🔧" },
    { id: "voice", icon: "🎤" },
  ];

  const difficulties = [
    { id: "beginner", icon: "🌱" },
    { id: "intermediate", icon: "⚡" },
    { id: "advanced", icon: "🚀" },
  ];
  
  const tags = [
    { id: "YC", icon: <Award size={14} />, gradient: "from-orange-400 to-orange-600" },
    { id: "irrelevant", icon: <Zap size={14} />, gradient: "from-purple-400 to-purple-600" },
    { id: "Top", icon: <Star size={14} />, gradient: "from-amber-400 to-orange-500" }
  ];

  // Update filters when any selection changes
  useEffect(() => {
    onFilterChange({ category, difficulty, search, tag });
  }, [category, difficulty, search, tag, onFilterChange]);

  const clearAllFilters = () => {
    setSearch("");
    setCategory(null);
    setDifficulty(null);
    setTag(null);
  };

  const hasActiveFilters = search || category || difficulty || tag;
  const activeFiltersCount = (search ? 1 : 0) + (category ? 1 : 0) + (difficulty ? 1 : 0) + (tag ? 1 : 0);
  
  return (
    <section id="catalog" className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {language === "es" ? "Encuentra tu herramienta perfecta" : "Find your perfect tool"}
          </h2>
          <p className="text-[#9CA3AF] text-sm md:text-base">
            {language === "es" ? "Explora nuestra selección curada de herramientas de IA" : "Explore our curated selection of AI tools"}
          </p>
        </div>

        {/* Search Bar - Mejorado para móviles */}
        <div className="relative mb-6 max-w-xl mx-auto">
          <div className="relative group">
            <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl overflow-hidden shadow-lg">
              <div className="flex items-center">
                <Search size={18} className="absolute left-4 text-[#9CA3AF] transition-colors duration-300 group-focus-within:text-[#8B5FFF]" />
                <input
                  type="text"
                  placeholder={language === "es" ? "Buscar herramientas..." : "Search tools..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 md:py-4 bg-transparent text-white placeholder-[#9CA3AF] focus:outline-none text-sm md:text-base"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
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
              <span>{language === "es" ? "Filtros" : "Filters"}</span>
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

        {/* Filters Container */}
        <div className={`md:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
          
          {/* Special Tags Filters - Nueva sección */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm md:text-base">
              {language === "es" ? "Colecciones Especiales" : "Special Collections"}
            </h3>
            <div className="md:flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2">
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-full md:min-w-0">
                <button
                  onClick={() => setTag(null)}
                  className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                    tag === null
                      ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                      : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                  }`}
                >
                  {language === "es" ? "Todas" : "All"}
                </button>
                
                {tags.map((tagItem) => (
                  <button
                    key={tagItem.id}
                    onClick={() => setTag(tagItem.id === tag ? null : tagItem.id)}
                    className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm ${
                      tag === tagItem.id
                        ? `bg-gradient-to-r ${tagItem.gradient} text-white`
                        : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                    }`}
                  >
                    <span className="text-current">{tagItem.icon}</span>
                    <span>
                      {tagItem.id === "irrelevant" 
                        ? "irrelevant" 
                        : tagItem.id === "YC" 
                          ? "Y Combinator" 
                          : language === "es" ? "TOP" : "TOP"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Category Filters - Responsive Grid with Scrollable Container */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm md:text-base">
              {language === "es" ? "Categorías" : "Categories"}
            </h3>
            <div className="md:flex md:flex-wrap md:justify-center gap-2 md:gap-3 overflow-x-auto pb-2">
              <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-3 min-w-full md:min-w-0">
                <button
                  onClick={() => setCategory(null)}
                  className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                    category === null
                      ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                      : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                  }`}
                >
                  {t.filters.allCategories}
                </button>
                
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id === category ? null : cat.id)}
                    className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm ${
                      category === cat.id
                        ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                        : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span className="hidden sm:inline">
                      {t.categories[cat.id as keyof typeof t.categories] || cat.id.replace('_', ' ')}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Difficulty Filters - Responsive Grid */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm md:text-base">
              {language === "es" ? "Nivel de dificultad" : "Difficulty Level"}
            </h3>
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-3">
              <button
                onClick={() => setDifficulty(null)}
                className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                  difficulty === null
                    ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                    : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                }`}
              >
                {t.difficulty.all}
              </button>
              
              {difficulties.map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setDifficulty(diff.id === difficulty ? null : diff.id)}
                  className={`px-3 md:px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm ${
                    difficulty === diff.id
                      ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white"
                      : "bg-[#8B5FFF]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-[#8B5FFF]/20 hover:text-white backdrop-blur-xl"
                  }`}
                >
                  <span>{diff.icon}</span>
                  <span>{t.difficulty[diff.id as keyof typeof t.difficulty]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters - Solo si hay filtros activos */}
          {hasActiveFilters && (
            <div className="text-center">
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
        
        {/* Results count - Más compacto */}
        <div className="mt-8 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl p-3 md:p-4 text-center">
          <span className="text-[#E5E7EB] text-sm md:text-base">
            {language === "es" ? "Mostrando" : "Showing"}{" "}
            <span className="text-[#8B5FFF] font-semibold">
              {filteredCount}
            </span>
            {" "}{language === "es" ? "de" : "of"} {totalTools} {language === "es" ? "herramientas" : "tools"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ToolFilters;