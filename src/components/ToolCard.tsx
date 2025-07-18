import React from "react";
import { Link } from "react-router-dom";
import { ToolCard as ToolCardType, Language } from "../types";
import { getDifficultyLabel, getCategoryLabel } from "../utils/i18n";
import { ExternalLink, Star, Sparkles, ArrowRight, Award, Zap } from "lucide-react";

interface ToolCardProps {
  tool: ToolCardType;
  language: Language;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, language }) => {
  const difficultyConfig = {
    beginner: { 
      dot: "bg-gradient-to-r from-green-400 to-green-500", 
      label: "🌱"
    },
    intermediate: { 
      dot: "bg-gradient-to-r from-yellow-400 to-orange-500", 
      label: "⚡"
    },
    advanced: { 
      dot: "bg-gradient-to-r from-red-400 to-red-500", 
      label: "🚀"
    },
  };

  const categoryIconMap = {
    ai_agents: "🤖",
    analytics: "📊",
    apps: "📱",
    automation: "⚙️",
    automations: "🔄",
    content: "📝",
    dairy: "🥛",
    design: "🎨",
    legal: "⚖️",
    marketing: "📢",
    meetings: "👥",
    network: "🌐",
    other: "🔍",
    productivity: "⏱️",
    sales: "💼",
    technical: "🔧",
    voice: "🎤",
  };
  
  // Configuración para los badges de tags
  const tagConfig = {
    YC: {
      icon: <Award size={10} className="fill-current" />,
      gradient: "from-orange-400 to-orange-600",
      text: "YC"
    },
    irrelevant: {
      icon: <Zap size={10} className="fill-current" />,
      gradient: "from-purple-400 to-purple-600",
      text: language === "es" ? "irrelevant" : "irrelevant"
    },
    Top: {
      icon: <Star size={10} className="fill-current" />,
      gradient: "from-amber-400 to-orange-500",
      text: language === "es" ? "TOP" : "TOP"
    }
  };
  
  const difficulty = difficultyConfig[tool.difficulty];
  
  // Fallback para categorías que no estén en el mapa
  const categoryIcon = categoryIconMap[tool.category] || "🔍";
  
  return (
    <Link to={`/tool/${tool.slug}`} className="group relative block">
      {/* Glow effect simplificado */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/20 via-[#8B5FFF]/40 to-[#7C3AED]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl overflow-hidden h-80 flex flex-col transition-all duration-500 group-hover:border-[#8B5FFF]/60 group-hover:shadow-xl group-hover:shadow-[#8B5FFF]/20 group-hover:scale-[1.02] cursor-pointer">
        
        {/* Header */}
        <div className="relative p-6">
          {/* Tags badges - posicionados a la derecha */}
          <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
            {/* Featured badge (mantenido para compatibilidad) */}
            {tool.featured && !tool.tags?.includes("Top") && (
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-2 py-1 text-xs rounded-lg text-black font-bold flex items-center space-x-1 shadow-lg">
                <Star size={10} className="fill-current" />
                <span>TOP</span>
              </div>
            )}
            
            {/* Mostrar badges para los tags si existen */}
            {tool.tags?.map((tag) => (
              tagConfig[tag] && (
                <div 
                  key={tag}
                  className={`bg-gradient-to-r ${tagConfig[tag].gradient} px-2 py-1 text-xs rounded-lg text-black font-bold flex items-center space-x-1 shadow-lg`}
                >
                  {tagConfig[tag].icon}
                  <span>{tagConfig[tag].text}</span>
                </div>
              )
            ))}
          </div>
          
          {/* Logo y contenido principal */}
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <img 
                src={tool.logo} 
                alt={tool.name} 
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#A78BFA] transition-colors duration-300">
                {tool.name}
              </h3>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-sm">{categoryIcon}</span>
                <span className="text-[#9CA3AF] text-sm font-medium">
                  {getCategoryLabel(tool.category, language) || tool.category.replace('_', ' ')}
                </span>
              </div>
              
              {/* Difficulty badge inline */}
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${difficulty.dot}`}></div>
                <span className="text-xs text-[#9CA3AF]">{difficulty.label} {getDifficultyLabel(tool.difficulty, language)}</span>
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

        {/* Price */}
        <div className="px-6 pb-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B5FFF]/20 border border-[#8B5FFF]/30">
            <Sparkles size={12} className="text-[#8B5FFF] mr-1.5" />
            <span className="text-[#8B5FFF] text-xs font-semibold">
              {tool.price[language]}
            </span>
          </div>
        </div>
        
        {/* CTA button */}
        
        {/* External link button - más discreto */}
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 bg-[#8B5FFF] p-1.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title={language === "es" ? "Ir a la herramienta" : "Go to tool"}
        >
          <ExternalLink size={12} className="text-white" />
        </a>
      </div>
    </Link>
  );
};

export default ToolCard;