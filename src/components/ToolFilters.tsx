import React, { useState, useEffect } from "react";
import { FilterOptions, Language } from "../types";
import translations from "../utils/i18n";
import { Search, X, Filter, ChevronDown, Award, Zap, Star, Shuffle, Sparkles } from "lucide-react";

interface ToolFiltersProps {
  language: Language;
  onFilterChange: (filters: FilterOptions) => void;
  totalTools: number;
  filteredCount: number;
  onShuffle?: () => void;
  isShuffling?: boolean;
}

const ToolFilters: React.FC<ToolFiltersProps> = ({
  language,
  onFilterChange,
  totalTools,
  filteredCount,
  onShuffle,
  isShuffling = false,
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
    { id: "aeo", icon: "🔎" }
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

        {/* Search Bar and Shuffle Button Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative flex-1">
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

          {/* Shuffle Button */}
          {onShuffle && (
            <div className="flex justify-center md:justify-end">
              <button
                onClick={onShuffle}
                disabled={isShuffling || filteredCount === 0}
                className="group relative inline-flex items-center justify-center px-4 md:px-6 py-3 md:py-4 font-semibold text-white bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-2xl shadow-xl shadow-[#8B5FFF]/30 hover:shadow-[#8B5FFF]/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative flex items-center space-x-2 md:space-x-3">
                  {isShuffling ? (
                    <>
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="hidden md:inline">{language === "es" ? "Mezclando..." : "Shuffling..."}</span>
                    </>
                  ) : (
                    <>
                      <Shuffle size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                      <span className="hidden md:inline">{language === "es" ? "Mezclar" : "Shuffle"}</span>
                      <Sparkles size={14} className="animate-pulse" />
                    </>
                  )}
                </div>
              </button>
            </div>
          )}
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
          
          {/* Special Tags Filters */}
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
          
          {/* Category Filters */}
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
          
          {/* Difficulty Filters */}
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

          {/* Clear Filters */}
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
        
        {/* Results count */}
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