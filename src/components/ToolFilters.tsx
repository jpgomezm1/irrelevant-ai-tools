
import React, { useState, useEffect } from "react";
import { FilterOptions, Language } from "../types";
import translations from "../utils/i18n";
import { Search } from "lucide-react";

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

  // Update filters when any selection changes
  useEffect(() => {
    onFilterChange({ category, difficulty, search });
    // URL state update could be added here
  }, [category, difficulty, search, onFilterChange]);
  
  return (
    <section id="catalog" className="bg-gradient-primary py-12">
      <div className="container mx-auto px-4">
        {/* Search */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={20} className="text-text-tertiary" />
          </div>
          <input
            type="text"
            placeholder={t.filters.search}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field py-4 pl-12 w-full text-lg"
          />
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setCategory(null)}
            className={`${
              category === null
                ? "bg-primary text-white"
                : "bg-card-bg text-text-secondary"
            } px-6 py-2 rounded-full transition-all duration-300`}
          >
            {t.filters.allCategories}
          </button>
          
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id === category ? null : cat.id)}
              className={`${
                category === cat.id
                  ? "bg-primary text-white"
                  : "bg-card-bg text-text-secondary"
              } px-6 py-2 rounded-full transition-all duration-300 flex items-center`}
            >
              <span className="mr-2">{cat.icon}</span>
              {t.categories[cat.id as keyof typeof t.categories]}
            </button>
          ))}
        </div>
        
        {/* Difficulty Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setDifficulty(null)}
            className={`${
              difficulty === null
                ? "bg-primary text-white"
                : "bg-card-bg text-text-secondary"
            } px-6 py-2 rounded-full transition-all duration-300`}
          >
            {t.difficulty.all}
          </button>
          
          {["beginner", "intermediate", "advanced"].map((diff) => (
            <button
              key={diff}
              onClick={() => setDifficulty(diff === difficulty ? null : diff)}
              className={`${
                difficulty === diff
                  ? "bg-primary text-white"
                  : "bg-card-bg text-text-secondary"
              } px-6 py-2 rounded-full transition-all duration-300`}
            >
              {t.difficulty[diff as keyof typeof t.difficulty]}
            </button>
          ))}
        </div>
        
        {/* Results count */}
        <div className="text-center text-text-secondary">
          {t.filters.showing} <span className="text-primary font-semibold">{filteredCount}</span> {t.filters.tools}
        </div>
      </div>
    </section>
  );
};

export default ToolFilters;
