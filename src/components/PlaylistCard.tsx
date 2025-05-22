import React from "react";
import { PlaylistItem, Language } from "../types";
import { Play, Clock, Hash, ExternalLink } from "lucide-react";

interface PlaylistCardProps {
  playlist: PlaylistItem;
  language: Language;
  platform: 'youtube' | 'spotify';
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist, language, platform }) => {
  const platformColors = {
    youtube: {
      gradient: "from-red-500 to-red-600",
      accent: "text-red-400",
      border: "border-red-500/30",
      bg: "from-red-500/10 to-red-600/10"
    },
    spotify: {
      gradient: "from-green-500 to-green-600", 
      accent: "text-green-400",
      border: "border-green-500/30",
      bg: "from-green-500/10 to-green-600/10"
    }
  };

  const colors = platformColors[platform];

  return (
    <a 
      href={playlist.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      <div className={`relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border ${colors.border} rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:border-opacity-60 group-hover:shadow-xl group-hover:scale-[1.02] cursor-pointer`}>
        
        {/* Featured badge */}
        {playlist.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className={`bg-gradient-to-r ${colors.gradient} px-3 py-1 text-xs rounded-lg text-white font-bold shadow-lg`}>
              {language === "es" ? "DESTACADO" : "FEATURED"}
            </div>
          </div>
        )}

        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={playlist.thumbnail} 
            alt={playlist.title[language]}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`w-16 h-16 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
              <Play className="text-white ml-1" size={24} fill="currentColor" />
            </div>
          </div>

          {/* Platform badge */}
          <div className="absolute bottom-4 left-4">
            <div className={`flex items-center space-x-2 bg-gradient-to-r ${colors.bg} backdrop-blur-xl border ${colors.border} rounded-full px-3 py-1`}>
              <span className="text-sm font-semibold capitalize ${colors.accent}">
                {platform}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300 line-clamp-2">
            {playlist.title[language]}
          </h3>

          {/* Description */}
          <p className="text-[#E5E7EB] text-sm leading-relaxed mb-4 flex-1 line-clamp-3 group-hover:text-white transition-colors duration-300">
            {playlist.description[language]}
          </p>

          {/* CTA */}
          <div className="mt-auto">
            <div className={`bg-gradient-to-r ${colors.bg} border-t ${colors.border} p-4 -mx-6 -mb-6 group-hover:from-opacity-30 group-hover:to-opacity-30 transition-all duration-300`}>
              <div className={`flex items-center justify-center space-x-2 ${colors.accent} group-hover:text-white font-semibold text-sm transition-colors duration-300`}>
                <span>{language === "es" ? "Ver Episodio" : "View Episode"}</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PlaylistCard;