import React, { useState, useEffect } from "react";
import { FilterOptions, Language } from "../types";
import translations from "../utils/i18n";
import { Search, X } from "lucide-react";

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
  
  const categories = [
    { id: "content", icon: "📝" },
    { id: "design", icon: "🎨" },
    { id: "sales", icon: "💼" },
    { id: "automation", icon: "⚙️" },
    { id: "analytics", icon: "📊" },
  ];

  const difficulties = [
    { id: "beginner", icon: "🌱" },
    { id: "intermediate", icon: "⚡" },
    { id: "advanced", icon: "🚀" },
  ];

  // Update filters when any selection changes
  useEffect(() => {
    onFilterChange({ category, difficulty, search });
  }, [category, difficulty, search, onFilterChange]);

  const clearAllFilters = () => {
    setSearch("");
    setCategory(null);
    setDifficulty(null);
  };

  const hasActiveFilters = search || category || difficulty;
  
  return (
    <section id="catalog" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden">
              <div className="flex items-center">
                <Search size={20} className="absolute left-6 text-gray-400 transition-colors duration-300 group-focus-within:text-purple-400" />
                <input
                  type="text"
                  placeholder={language === "es" ? "Buscar herramientas..." : "Search tools..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => setCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              category === null
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60 hover:text-white"
            }`}
          >
            {t.filters.allCategories}
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id === category ? null : cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                category === cat.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60 hover:text-white"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{t.categories[cat.id as keyof typeof t.categories]}</span>
            </button>
          ))}
        </div>
        
        {/* Difficulty Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setDifficulty(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
              difficulty === null
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60 hover:text-white"
            }`}
          >
            {t.difficulty.all}
          </button>
          
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              onClick={() => setDifficulty(diff.id === difficulty ? null : diff.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                difficulty === diff.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60 hover:text-white"
              }`}
            >
              <span>{diff.icon}</span>
              <span>{t.difficulty[diff.id as keyof typeof t.difficulty]}</span>
            </button>
          ))}
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="text-center mb-6">
            <button
              onClick={clearAllFilters}
              className="text-gray-400 hover:text-white text-sm flex items-center space-x-2 mx-auto transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-full"
            >
              <X size={14} />
              <span>{language === "es" ? "Limpiar filtros" : "Clear filters"}</span>
            </button>
          </div>
        )}
        
        {/* Results count */}
        <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/40 rounded-2xl p-4 text-center">
          <span className="text-gray-300">
            {language === "es" ? "Mostrando" : "Showing"}{" "}
          </span>
          <span className="text-purple-400 font-semibold text-lg">
            {filteredCount}
          </span>
          <span className="text-gray-300">
            {" "}{language === "es" ? "de" : "of"} {totalTools} {language === "es" ? "herramientas" : "tools"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ToolFilters;