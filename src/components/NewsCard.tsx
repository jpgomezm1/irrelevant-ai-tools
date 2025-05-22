// src/components/NewsCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { NewsArticle, Language } from "../types";
import { Clock, Calendar, User } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
  language: Language;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, language }) => {
  const categoryIcons = {
    "ai-tools": "🤖",
    "industry-news": "📰",
    "tutorials": "📚",
    "trends": "📈"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <Link to={`/news/${article.slug}`} className="group relative block">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/20 via-[#8B5FFF]/40 to-[#7C3AED]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <article className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:border-[#8B5FFF]/60 group-hover:shadow-xl group-hover:shadow-[#8B5FFF]/20 group-hover:scale-[1.02] cursor-pointer">
        
        {/* Featured badge */}
        {article.featured && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs rounded-lg text-black font-bold shadow-lg">
              {language === "es" ? "DESTACADO" : "FEATURED"}
            </div>
          </div>
        )}

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title[language]}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Category badge */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-2 bg-[#8B5FFF]/20 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-full px-3 py-1">
              <span className="text-sm">{categoryIcons[article.category]}</span>
              <span className="text-[#A78BFA] text-xs font-semibold">
                {language === "es" ? 
                  (article.category === "ai-tools" ? "Herramientas IA" :
                   article.category === "industry-news" ? "Noticias" :
                   article.category === "tutorials" ? "Tutoriales" : "Tendencias") :
                  (article.category === "ai-tools" ? "AI Tools" :
                   article.category === "industry-news" ? "Industry News" :
                   article.category === "tutorials" ? "Tutorials" : "Trends")
                }
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta info */}
          <div className="flex items-center space-x-4 text-xs text-[#9CA3AF] mb-3">
            <div className="flex items-center space-x-1">
              <Calendar size={12} />
              <span>{formatDate(article.publishDate)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={12} />
              <span>{article.readTime} {language === "es" ? "min" : "min"}</span>
            </div>
            <div className="flex items-center space-x-1">
              <User size={12} />
              <span>{article.author.name}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#A78BFA] transition-colors duration-300 line-clamp-2">
            {article.title[language]}
          </h3>

          {/* Summary */}
          <p className="text-[#E5E7EB] text-sm leading-relaxed mb-4 flex-1 line-clamp-3 group-hover:text-white transition-colors duration-300">
            {article.summary[language]}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-[#8B5FFF]/20 text-[#A78BFA] rounded-full border border-[#8B5FFF]/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read more */}
          <div className="mt-auto">
            <div className="bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 border-t border-[#8B5FFF]/30 p-4 -mx-6 -mb-6 group-hover:from-[#8B5FFF]/30 group-hover:to-[#7C3AED]/30 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2 text-[#8B5FFF] group-hover:text-white font-semibold text-sm transition-colors duration-300">
                <span>{language === "es" ? "Leer artículo" : "Read article"}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;