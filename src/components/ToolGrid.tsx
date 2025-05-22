import React from "react";
import ToolCard from "./ToolCard";
import { ToolCard as ToolCardType, Language } from "../types";
import { Search, Filter } from "lucide-react";

interface ToolGridProps {
  tools: ToolCardType[];
  language: Language;
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools, language }) => {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} language={language} />
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FFF]/10 via-transparent to-[#8B5FFF]/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/60 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-12 text-center shadow-2xl shadow-[#8B5FFF]/10">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-[#8B5FFF]/20">
                <Search size={32} className="text-[#9CA3AF]" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === "es"
                  ? "No se encontraron herramientas"
                  : "No tools found"}
              </h3>
              
              {/* Description */}
              <p className="text-[#9CA3AF] text-lg mb-6 max-w-md mx-auto leading-relaxed">
                {language === "es"
                  ? "Intenta modificar tus filtros de búsqueda o explora otras categorías"
                  : "Try modifying your search filters or explore other categories"}
              </p>
              
              {/* Suggestions */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 px-4 py-2 rounded-full border border-[#8B5FFF]/20 backdrop-blur-xl">
                  <Filter size={16} className="text-[#8B5FFF]" />
                  <span className="text-[#E5E7EB] text-sm">
                    {language === "es" ? "Prueba otros filtros" : "Try other filters"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 px-4 py-2 rounded-full border border-[#8B5FFF]/20 backdrop-blur-xl">
                  <Search size={16} className="text-[#8B5FFF]" />
                  <span className="text-[#E5E7EB] text-sm">
                    {language === "es" ? "Busca términos diferentes" : "Search different terms"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolGrid;