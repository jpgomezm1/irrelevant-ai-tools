import React from "react";
import { Link } from "react-router-dom";
import { ToolCard as ToolCardType, Language } from "../types";
import { getDifficultyLabel, getCategoryLabel } from "../utils/i18n";
import { ExternalLink, Star, Sparkles } from "lucide-react";

interface ToolCardProps {
  tool: ToolCardType;
  language: Language;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, language }) => {
  const difficultyConfig = {
    beginner: { 
      dot: "bg-gradient-to-r from-green-400 to-green-500", 
      glow: "shadow-green-500/40",
      label: "🌱"
    },
    intermediate: { 
      dot: "bg-gradient-to-r from-yellow-400 to-orange-500", 
      glow: "shadow-yellow-500/40",
      label: "⚡"
    },
    advanced: { 
      dot: "bg-gradient-to-r from-red-400 to-red-500", 
      glow: "shadow-red-500/40",
      label: "🚀"
    },
  };

  const categoryIconMap = {
    content: "📝",
    design: "🎨", 
    sales: "💼",
    automation: "⚙️",
    analytics: "📊",
  };
  
  const difficulty = difficultyConfig[tool.difficulty];
  
  return (
    <Link to={`/tool/${tool.slug}`} className="group relative block">
      {/* Enhanced hover glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/0 via-[#8B5FFF]/30 to-[#7C3AED]/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/80 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl overflow-hidden h-80 flex flex-col transition-all duration-500 group-hover:border-[#8B5FFF]/50 group-hover:shadow-2xl group-hover:shadow-[#8B5FFF]/20 group-hover:scale-[1.02] cursor-pointer">
        
        {/* Animated background sparkles */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-4 right-8 w-1 h-1 bg-[#8B5FFF] rounded-full animate-ping delay-0"></div>
          <div className="absolute top-12 right-16 w-1 h-1 bg-[#A78BFA] rounded-full animate-ping delay-300"></div>
          <div className="absolute bottom-20 left-6 w-1 h-1 bg-[#7C3AED] rounded-full animate-ping delay-700"></div>
        </div>
        
        {/* Header */}
        <div className="relative p-6">
          {/* Featured badge */}
          {tool.featured && (
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] px-3 py-1.5 text-xs rounded-full text-white font-semibold flex items-center space-x-1.5 shadow-lg shadow-[#8B5FFF]/30 animate-pulse">
                <Star size={10} className="fill-current" />
                <span>{language === "es" ? "Destacado" : "Featured"}</span>
              </div>
            </div>
          )}
          
          {/* Logo and name */}
          <div className="flex items-center space-x-4">
            <div className="relative w-14 h-14 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl flex items-center justify-center p-2.5 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={tool.logo} 
                alt={tool.name} 
                className="relative max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-[#E5E7EB] to-[#A78BFA] bg-clip-text text-transparent mb-1 group-hover:from-[#A78BFA] group-hover:to-[#8B5FFF] transition-all duration-500">
                {tool.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{categoryIconMap[tool.category]}</span>
                <span className="text-[#9CA3AF] text-sm font-medium group-hover:text-[#A78BFA] transition-colors duration-300">
                  {getCategoryLabel(tool.category, language)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="px-6 pb-4 flex-1">
          <p className="text-[#E5E7EB] text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
            {tool.description[language]}
          </p>
        </div>
        
        {/* Enhanced CTA - Ahora solo visual, sin funcionalidad de click */}
        <div className="group/btn relative overflow-hidden mt-auto">
          <div className="bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 border-t border-[#8B5FFF]/30 p-4 text-center transition-all duration-500 group-hover/btn:from-[#8B5FFF]/30 group-hover/btn:to-[#7C3AED]/30 group-hover/btn:border-[#8B5FFF]/50">
            <div className="flex items-center justify-center space-x-2 text-[#8B5FFF] group-hover/btn:text-white font-semibold transition-all duration-300">
              <Sparkles size={14} className="animate-pulse" />
              <span>{language === "es" ? "Ver Detalles" : "View Details"}</span>
              <div className="w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          {/* Enhanced shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5FFF]/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
        </div>

        {/* External Link Button - Nuevo botón flotante */}
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Evita que active el Link del contenedor
          className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title={language === "es" ? "Ir a la herramienta" : "Go to tool"}
        >
          <ExternalLink size={16} className="text-white" />
        </a>
      </div>
    </Link>
  );
};

export default ToolCard;