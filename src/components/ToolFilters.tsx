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
    <section id="catalog" className="relative py-16 overflow-hidden">
      {/* Fondo exacto del Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]"></div>
      
      {/* Animated Grid Pattern - igual al Hero */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #8B5FFF 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Dynamic Neural Network Lines - igual al Hero */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5FFF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M0,100 Q300,50 600,80 T1200,100" stroke="url(#lineGradient2)" strokeWidth="2" fill="none" className="animate-pulse">
          <animate attributeName="d" 
            values="M0,100 Q300,50 600,80 T1200,100;M0,150 Q300,100 600,50 T1200,80;M0,100 Q300,50 600,80 T1200,100" 
            dur="8s" repeatCount="indefinite"/>
        </path>
        <path d="M0,250 Q400,200 800,230 T1400,250" stroke="url(#lineGradient2)" strokeWidth="1.5" fill="none" className="animate-pulse delay-1000">
          <animate attributeName="d" 
            values="M0,250 Q400,200 800,230 T1400,250;M0,200 Q400,300 800,180 T1400,230;M0,250 Q400,200 800,230 T1400,250" 
            dur="10s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Floating Orbs - más intensos como en Hero */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#8B5FFF]/20 via-[#8B5FFF]/5 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[15%] right-[8%] w-[350px] h-[350px] bg-gradient-radial from-[#A78BFA]/15 via-[#A78BFA]/3 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-[40%] right-[15%] w-[250px] h-[250px] bg-gradient-radial from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent rounded-full blur-2xl animate-pulse"></div>
      
      {/* Cyber Grid Overlay - igual al Hero */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5FFF]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {/* Search Bar */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/80 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl overflow-hidden shadow-2xl shadow-[#8B5FFF]/10">
              <div className="flex items-center">
                <Search size={20} className="absolute left-6 text-[#9CA3AF] transition-colors duration-300 group-focus-within:text-[#8B5FFF]" />
                <input
                  type="text"
                  placeholder={language === "es" ? "Buscar herramientas..." : "Search tools..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-transparent text-white placeholder-[#9CA3AF] focus:outline-none text-lg"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 text-[#9CA3AF] hover:text-white p-2 rounded-full hover:bg-[#8B5FFF]/20 transition-all duration-300"
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
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
              category === null
                ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white shadow-[#8B5FFF]/30"
                : "bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-gradient-to-r hover:from-[#8B5FFF]/20 hover:to-[#7C3AED]/20 hover:text-white hover:shadow-[#8B5FFF]/20 backdrop-blur-xl"
            }`}
          >
            {t.filters.allCategories}
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id === category ? null : cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg ${
                category === cat.id
                  ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white shadow-[#8B5FFF]/30"
                  : "bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-gradient-to-r hover:from-[#8B5FFF]/20 hover:to-[#7C3AED]/20 hover:text-white hover:shadow-[#8B5FFF]/20 backdrop-blur-xl"
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
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
              difficulty === null
                ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white shadow-[#8B5FFF]/30"
                : "bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-gradient-to-r hover:from-[#8B5FFF]/20 hover:to-[#7C3AED]/20 hover:text-white hover:shadow-[#8B5FFF]/20 backdrop-blur-xl"
            }`}
          >
            {t.difficulty.all}
          </button>
          
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              onClick={() => setDifficulty(diff.id === difficulty ? null : diff.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-lg ${
                difficulty === diff.id
                  ? "bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white shadow-[#8B5FFF]/30"
                  : "bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 text-[#E5E7EB] border border-[#8B5FFF]/20 hover:bg-gradient-to-r hover:from-[#8B5FFF]/20 hover:to-[#7C3AED]/20 hover:text-white hover:shadow-[#8B5FFF]/20 backdrop-blur-xl"
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
              className="text-[#9CA3AF] hover:text-white text-sm flex items-center space-x-2 mx-auto transition-colors duration-300 hover:bg-[#8B5FFF]/20 px-4 py-2 rounded-full backdrop-blur-xl"
            >
              <X size={14} />
              <span>{language === "es" ? "Limpiar filtros" : "Clear filters"}</span>
            </button>
          </div>
        )}
        
        {/* Results count */}
        <div className="bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/60 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-2xl p-4 text-center shadow-xl shadow-[#8B5FFF]/10">
          <span className="text-[#E5E7EB]">
            {language === "es" ? "Mostrando" : "Showing"}{" "}
          </span>
          <span className="text-[#8B5FFF] font-semibold text-lg">
            {filteredCount}
          </span>
          <span className="text-[#E5E7EB]">
            {" "}{language === "es" ? "de" : "of"} {totalTools} {language === "es" ? "herramientas" : "tools"}
          </span>
        </div>
      </div>
      
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
    </section>
  );
};

export default ToolFilters;