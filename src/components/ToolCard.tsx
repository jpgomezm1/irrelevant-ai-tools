
import React from "react";
import { ToolCard as ToolCardType, Language } from "../types";
import { getDifficultyLabel, getCategoryLabel } from "../utils/i18n";

interface ToolCardProps {
  tool: ToolCardType;
  language: Language;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, language }) => {
  const difficultyColorMap = {
    beginner: "bg-green-500",
    intermediate: "bg-yellow-500",
    advanced: "bg-red-500",
  };
  
  const categoryIconMap = {
    content: "📝",
    design: "🎨",
    sales: "💼",
    automation: "⚙️",
    analytics: "📊",
  };
  
  return (
    <div className="glass-card h-80 flex flex-col overflow-hidden rounded-xl">
      {/* Featured badge */}
      {tool.featured && (
        <div className="absolute top-3 right-3">
          <span className="bg-primary px-3 py-1 text-xs rounded-full text-white font-medium">
            {language === "es" ? "Destacado" : "Featured"}
          </span>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Logo and name */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 p-1">
            <img 
              src={tool.logo} 
              alt={tool.name} 
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          </div>
          <h3 className="text-h3 text-text-primary">{tool.name}</h3>
        </div>
        
        {/* Category badge */}
        <div className="flex items-center mb-2">
          <span className="mr-2">{categoryIconMap[tool.category]}</span>
          <span className="text-text-secondary text-sm">
            {getCategoryLabel(tool.category, language)}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-text-secondary mb-4 flex-1">
          {tool.description[language]}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          {/* Difficulty */}
          <div className="flex items-center">
            <span 
              className={`w-2 h-2 rounded-full ${difficultyColorMap[tool.difficulty]} mr-2`}
            ></span>
            <span className="text-text-tertiary text-sm">
              {getDifficultyLabel(tool.difficulty, language)}
            </span>
          </div>
          
          {/* Price */}
          <span className="text-primary font-medium">
            {tool.price[language]}
          </span>
        </div>
      </div>
      
      {/* CTA */}
      <a 
        href={tool.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-card-bg border-t border-card-border p-4 text-center text-primary hover:bg-primary/10 transition-colors"
      >
        {language === "es" ? "Probar Gratis" : "Try Free"}
      </a>
    </div>
  );
};

export default ToolCard;
