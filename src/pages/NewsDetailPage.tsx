// src/pages/NewsDetailPage.tsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Tag } from "lucide-react";
import Header from "../components/Header";
import NewsletterModal from "../components/NewsletterModal";
import NewsCard from "../components/NewsCard";
import news from "../data/news";
import { useLanguage } from "../context/LanguageContext";
import translations from "../utils/i18n";

const NewsDetailPage: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const t = translations[language];

  // Find current article
  const article = news.find((n) => n.slug === slug);

  // Related articles (same category, excluding current)
  const relatedArticles = news
    .filter((n) => n.category === article?.category && n.id !== article?.id)
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title[language],
        text: article?.summary[language],
        url: window.location.href,
      });
    } else {
      // Fallback to copy URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]">
        <Header
          currentLang={language}
          onLanguageChange={setLanguage}
          onNewsletterClick={() => setIsNewsletterModalOpen(true)}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
              {language === "es" ? "Artículo no encontrado" : "Article not found"}
            </h1>
            <Link to="/news" className="text-[#8B5FFF] hover:text-[#A78BFA]">
              {t.news.backToNews}
            </Link>
          </div>
        </div>
        <NewsletterModal
          language={language}
          isOpen={isNewsletterModalOpen}
          onClose={() => setIsNewsletterModalOpen(false)}
        />
      </div>
    );
  }

  const categoryIcons = {
    "ai-tools": "🤖",
    "industry-news": "📰",
    "tutorials": "📚",
    "trends": "📈"
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #8B5FFF 2px, transparent 0)`,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite"
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#8B5FFF]/15 via-[#8B5FFF]/3 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[15%] right-[8%] w-[350px] h-[350px] bg-gradient-radial from-[#A78BFA]/12 via-[#A78BFA]/2 to-transparent rounded-full blur-3xl animate-float-delayed" />

      {/* Header */}
      <div className="relative z-20">
        <Header
          currentLang={language}
          onLanguageChange={setLanguage}
          onNewsletterClick={() => setIsNewsletterModalOpen(true)}
        />
      </div>

      <div className="relative z-10 pt-20">
        {/* Navigation */}
        <div className="container mx-auto px-6 md:px-8 py-8">
          <nav className="flex items-center space-x-2 text-[#9CA3AF] mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              {language === "es" ? "Inicio" : "Home"}
            </Link>
            <span>/</span>
            <Link to="/news" className="hover:text-white transition-colors">
              {language === "es" ? "Noticias" : "News"}
            </Link>
            <span>/</span>
            <span className="text-[#8B5FFF] truncate">
              {article.title[language].substring(0, 50)}...
            </span>
          </nav>

          <Link
            to="/news"
            className="inline-flex items-center space-x-2 text-[#9CA3AF] hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>{t.news.backToNews}</span>
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-6 md:px-8 pb-16">
          {/* Category Badge */}
          <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full border border-[#8B5FFF]/30 bg-gradient-to-r from-[#8B5FFF]/10 via-[#8B5FFF]/5 to-transparent backdrop-blur-xl">
            <span className="text-lg mr-2">{categoryIcons[article.category]}</span>
            <span className="text-[#A78BFA] text-sm font-semibold">
              {t.news.categories[article.category as keyof typeof t.news.categories]}
            </span>
          </div>

          {/* Title and Featured Badge */}
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent leading-tight">
              {article.title[language]}
            </h1>
            {article.featured && (
              <div className="bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] px-3 py-1 text-xs rounded-full text-white font-semibold ml-4 flex-shrink-0">
                {t.news.featured}
              </div>
            )}
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 text-[#9CA3AF]">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span className="text-sm">
                {t.news.published} {formatDate(article.publishDate)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span className="text-sm">
                {article.readTime} {t.news.readTime}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span className="text-sm">
                {t.news.author} {article.author.name}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 hover:text-[#8B5FFF] transition-colors duration-300"
            >
              <Share2 size={16} />
              <span className="text-sm">
                {language === "es" ? "Compartir" : "Share"}
              </span>
            </button>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-6 mb-8">
            <p className="text-lg text-[#E5E7EB] leading-relaxed">
              {article.summary[language]}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative mb-12 rounded-3xl overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title[language]}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold 
                prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-[#E5E7EB] prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-[#E5E7EB] prose-li:mb-2
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-[#8B5FFF] prose-code:bg-[#8B5FFF]/10 prose-code:px-2 prose-code:py-1 prose-code:rounded"
              dangerouslySetInnerHTML={{
                __html: article.content[language].replace(/\n/g, '<br />')
              }}
            />
          </div>

          {/* Tags */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <Tag className="text-[#8B5FFF]" size={20} />
              <h3 className="text-white font-semibold">
                {language === "es" ? "Etiquetas" : "Tags"}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 text-[#A78BFA] rounded-full border border-[#8B5FFF]/30 text-sm font-medium backdrop-blur-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center flex items-center justify-center">
                <BookOpen className="mr-3 text-[#8B5FFF]" size={32} />
                {language === "es" ? "Artículos Relacionados" : "Related Articles"}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <NewsCard key={relatedArticle.id} article={relatedArticle} language={language} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <NewsletterModal
        language={language}
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

      {/* CSS para animaciones */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsDetailPage;