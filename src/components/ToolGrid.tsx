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
    <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} language={language} />
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gray-800/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-12 text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === "es"
                  ? "No se encontraron herramientas"
                  : "No tools found"}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-lg mb-6 max-w-md mx-auto leading-relaxed">
                {language === "es"
                  ? "Intenta modificar tus filtros de búsqueda o explora otras categorías"
                  : "Try modifying your search filters or explore other categories"}
              </p>
              
              {/* Suggestions */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center space-x-2 bg-gray-700/30 px-4 py-2 rounded-full">
                  <Filter size={16} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">
                    {language === "es" ? "Prueba otros filtros" : "Try other filters"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-700/30 px-4 py-2 rounded-full">
                  <Search size={16} className="text-purple-400" />
                  <span className="text-gray-300 text-sm">
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