import React from "react";
import { ToolCard as ToolCardType, Language } from "../types";
import { getDifficultyLabel, getCategoryLabel } from "../utils/i18n";
import { ExternalLink, Star } from "lucide-react";

interface ToolCardProps {
  tool: ToolCardType;
  language: Language;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, language }) => {
  const difficultyConfig = {
    beginner: { dot: "bg-green-500", glow: "shadow-green-500/30" },
    intermediate: { dot: "bg-yellow-500", glow: "shadow-yellow-500/30" },
    advanced: { dot: "bg-red-500", glow: "shadow-red-500/30" },
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
    <div className="group relative">
      {/* Subtle hover glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden h-80 flex flex-col transition-all duration-300 group-hover:border-gray-600/70 group-hover:bg-gray-900/90">
        
        {/* Header */}
        <div className="relative p-6">
          {/* Featured badge */}
          {tool.featured && (
            <div className="absolute top-4 right-4">
              <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-3 py-1 text-xs rounded-full text-white font-semibold flex items-center space-x-1 shadow-lg">
                <Star size={10} className="fill-current" />
                <span>{language === "es" ? "Destacado" : "Featured"}</span>
              </div>
            </div>
          )}
          
          {/* Logo and name */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2.5 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={tool.logo} 
                alt={tool.name} 
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-100 transition-colors duration-300">
                {tool.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm">{categoryIconMap[tool.category]}</span>
                <span className="text-gray-400 text-sm font-medium">
                  {getCategoryLabel(tool.category, language)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="px-6 pb-4 flex-1">
          <p className="text-gray-300 text-sm leading-relaxed">
            {tool.description[language]}
          </p>
        </div>
        
        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-xl border border-gray-600/30 rounded-xl">
            {/* Difficulty */}
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${difficulty.dot} shadow-lg ${difficulty.glow}`}></div>
              <span className="text-gray-300 text-xs font-medium uppercase tracking-wide">
                {getDifficultyLabel(tool.difficulty, language)}
              </span>
            </div>
            
            {/* Price */}
            <span className="text-purple-400 font-bold text-sm">
              {tool.price[language]}
            </span>
          </div>
        </div>
        
        {/* CTA */}
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group/btn relative overflow-hidden mt-auto"
        >
          <div className="bg-gray-800/60 border-t border-gray-600/50 p-4 text-center transition-all duration-300 group-hover/btn:bg-gray-700/60">
            <div className="flex items-center justify-center space-x-2 text-purple-400 group-hover/btn:text-purple-300 font-semibold transition-colors duration-300">
              <span>{language === "es" ? "Probar Gratis" : "Try Free"}</span>
              <ExternalLink size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </div>
          </div>
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
        </a>
      </div>
    </div>
  );
};

export default ToolCard;