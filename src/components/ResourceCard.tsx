import React from "react";
import { ResourceItem, Language } from "../types";
import { ExternalLink, Star, BookOpen, Users, Mail, Zap } from "lucide-react";

interface ResourceCardProps {
  resource: ResourceItem;
  language: Language;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, language }) => {
  const typeIcons = {
    course: BookOpen,
    community: Users,
    newsletter: Mail,
    book: BookOpen,
    tool: Zap
  };

  const typeColors = {
    course: {
      gradient: "from-blue-500 to-blue-600",
      accent: "text-blue-400",
      border: "border-blue-500/30",
      bg: "from-blue-500/10 to-blue-600/10"
    },
    community: {
      gradient: "from-purple-500 to-purple-600",
      accent: "text-purple-400", 
      border: "border-purple-500/30",
      bg: "from-purple-500/10 to-purple-600/10"
    },
    newsletter: {
      gradient: "from-green-500 to-green-600",
      accent: "text-green-400",
      border: "border-green-500/30", 
      bg: "from-green-500/10 to-green-600/10"
    },
    book: {
      gradient: "from-orange-500 to-orange-600",
      accent: "text-orange-400",
      border: "border-orange-500/30",
      bg: "from-orange-500/10 to-orange-600/10"
    },
    tool: {
      gradient: "from-cyan-500 to-cyan-600",
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "from-cyan-500/10 to-cyan-600/10"
    }
  };

  const colors = typeColors[resource.type];
  const IconComponent = typeIcons[resource.type];

  return (
    <a 
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      <div className={`relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border ${colors.border} rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:border-opacity-60 group-hover:shadow-xl group-hover:scale-[1.02] cursor-pointer`}>
        
        {/* Featured badge */}
        {resource.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className={`bg-gradient-to-r ${colors.gradient} px-3 py-1 text-xs rounded-lg text-white font-bold shadow-lg`}>
              {language === "es" ? "RECOMENDADO" : "RECOMMENDED"}
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={resource.thumbnail} 
            alt={resource.title[language]}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Type badge */}
          <div className="absolute bottom-4 left-4">
            <div className={`flex items-center space-x-2 bg-gradient-to-r ${colors.bg} backdrop-blur-xl border ${colors.border} rounded-full px-3 py-1`}>
              <IconComponent size={14} className={colors.accent} />
              <span className={`text-sm font-semibold capitalize ${colors.accent}`}>
                {resource.type === 'course' ? (language === 'es' ? 'Curso' : 'Course') :
                 resource.type === 'community' ? (language === 'es' ? 'Comunidad' : 'Community') :
                 resource.type === 'newsletter' ? 'Newsletter' :
                 resource.type === 'book' ? (language === 'es' ? 'Libro' : 'Book') :
                 (language === 'es' ? 'Herramienta' : 'Tool')}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300 line-clamp-2">
            {resource.title[language]}
          </h3>

          {/* Description */}
          <p className="text-[#E5E7EB] text-sm leading-relaxed mb-4 flex-1 line-clamp-3 group-hover:text-white transition-colors duration-300">
            {resource.description[language]}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-4">
            <div className="flex items-center space-x-2">
              <span className={`${colors.accent} font-semibold`}>
                {resource.price[language]}
              </span>
            </div>
            {resource.rating && (
              <div className="flex items-center space-x-1">
                <Star size={12} className="text-yellow-400 fill-current" />
                <span>{resource.rating}</span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-auto">
            <div className={`bg-gradient-to-r ${colors.bg} border-t ${colors.border} p-4 -mx-6 -mb-6 group-hover:from-opacity-30 group-hover:to-opacity-30 transition-all duration-300`}>
              <div className={`flex items-center justify-center space-x-2 ${colors.accent} group-hover:text-white font-semibold text-sm transition-colors duration-300`}>
                <span>{language === "es" ? "Ver Recurso" : "View Resource"}</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;