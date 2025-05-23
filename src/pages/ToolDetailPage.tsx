import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  CheckCircle,
  Lightbulb,
  Zap,
  BookOpen,
  Play,
  FileText,
  Monitor,
  Award
} from "lucide-react";
import { Language, ToolCard as ToolCardType } from "../types";
import tools from "../data/tools";
import ToolCard from "../components/ToolCard";
import Header from "../components/Header";
import NewsletterModal from "../components/NewsletterModal";
import { getDifficultyLabel, getCategoryLabel } from "../utils/i18n";
import { useLanguage } from "../context/LanguageContext";

const ToolDetailPage: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  // Siempre scrollear al top cuando abra o cambie de herramienta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Encontrar la herramienta actual
  const tool = tools.find((t) => t.slug === slug);

  // Herramientas similares (misma categoría, excluyendo la actual)
  const similarTools = tools
    .filter((t) => t.category === tool?.category && t.id !== tool?.id)
    .slice(0, 3);

  // Función para manejar el clic de WhatsApp
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === "es"
        ? `¡Hola! Me interesa conocer más sobre ${tool?.name} y las herramientas de IA para empresas.`
        : `Hello! I'm interested in learning more about ${tool?.name} and AI tools for businesses.`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank");
  };

  // Iconos para tipos de recursos
  const resourceIcons: Record<string, React.ComponentType<any>> = {
    video: Play,
    article: FileText,
    course: BookOpen,
    tutorial: Monitor
  };

  // Configuración para los tags
  const tagConfig = {
    YC: {
      icon: <Award size={16} className="mr-2" />,
      text: "Y Combinator Backed",
      gradient: "from-orange-400 to-orange-600",
      textColor: "text-orange-500"
    },
    irrelevant: {
      icon: <Zap size={16} className="mr-2" />,
      text: "irrelevant Backed",
      gradient: "from-purple-400 to-purple-600",
      textColor: "text-purple-500"
    },
    Top: {
      icon: <Star size={16} className="mr-2 fill-current" />,
      text: "TOP",
      gradient: "from-amber-400 to-orange-500",
      textColor: "text-amber-500"
    }
  };

  if (!tool) {
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
              {language === "es" ? "Herramienta no encontrada" : "Tool not found"}
            </h1>
            <Link to="/tools" className="text-[#8B5FFF] hover:text-[#A78BFA]">
              {language === "es" ? "Volver al catálogo" : "Back to catalog"}
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

  const difficultyConfig = {
    beginner: { dot: "bg-gradient-to-r from-green-400 to-green-500", label: "🌱" },
    intermediate: { dot: "bg-gradient-to-r from-yellow-400 to-orange-500", label: "⚡" },
    advanced: { dot: "bg-gradient-to-r from-red-400 to-red-500", label: "🚀" }
  };
  const difficulty = difficultyConfig[tool.difficulty];

  const categoryIconMap: Record<string, string> = {
    content: "📝",
    design: "🎨",
    sales: "💼",
    automation: "⚙️",
    analytics: "📊"
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo consistente */}
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
        {/* Navegación de regreso */}
        <div className="container mx-auto px-6 md:px-8 py-8">
          <Link
            to="/tools"
            className="inline-flex items-center space-x-2 text-[#9CA3AF] hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>{language === "es" ? "Volver al catálogo" : "Back to catalog"}</span>
          </Link>
        </div>

        {/* Hero de la herramienta */}
        <div className="container mx-auto px-6 md:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Información principal */}
            <div>
              {/* Badge de categoría */}
              <div className="inline-flex items-center mb-6 px-4 py-2 rounded-full border border-[#8B5FFF]/30 bg-gradient-to-r from-[#8B5FFF]/10 via-[#8B5FFF]/5 to-transparent backdrop-blur-xl">
                <span className="text-lg mr-2">{categoryIconMap[tool.category]}</span>
                <span className="text-[#A78BFA] text-sm font-semibold">
                  {getCategoryLabel(tool.category as Language, language)}
                </span>
              </div>

              {/* Título y featured/tags */}
              <div className="flex flex-col mb-6">
                <div className="flex items-start justify-between mb-3">
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent">
                    {tool.name}
                  </h1>
                  
                  {/* Featured badge (if not using tags) */}
                  {tool.featured && !tool.tags?.includes('Top') && (
                    <div className="bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] px-3 py-1 text-xs rounded-full text-white font-semibold flex items-center space-x-1">
                      <Star size={12} className="fill-current" />
                      <span>{language === "es" ? "Destacado" : "Featured"}</span>
                    </div>
                  )}
                </div>
                
                {/* Tags badges */}
                {tool.tags && tool.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tool.tags.map((tag) => (
                      tagConfig[tag] && (
                        <div 
                          key={tag} 
                          className={`bg-gradient-to-r ${tagConfig[tag].gradient} px-3 py-1.5 text-sm rounded-lg text-white font-semibold flex items-center shadow-lg`}
                        >
                          {tagConfig[tag].icon}
                          <span>{tagConfig[tag].text}</span>
                        </div>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Descripción detallada */}
              <p className="text-xl text-[#E5E7EB] leading-relaxed mb-8">
                {tool.detailedDescription[language]}
              </p>

              {/* Detalles técnicos */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${difficulty.dot}`} />
                    <span className="text-sm">{difficulty.label}</span>
                  </div>
                  <p className="text-[#9CA3AF] text-sm">
                    {language === "es" ? "Dificultad:" : "Difficulty:"}
                  </p>
                  <p className="text-white font-semibold">
                    {getDifficultyLabel(tool.difficulty, language)}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-4">
                  <p className="text-[#9CA3AF] text-sm mb-2">
                    {language === "es" ? "Precio:" : "Price:"}
                  </p>
                  <p className="text-[#8B5FFF] font-bold text-lg">
                    {tool.price[language]}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* CTA principal */}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] text-white font-semibold rounded-2xl shadow-xl shadow-[#8B5FFF]/30 hover:shadow-[#8B5FFF]/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-3">
                    {language === "es" ? "Probar Gratis" : "Try Free"}
                  </span>
                  <ExternalLink size={20} />
                </a>

                {/* Botón de WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-2xl shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out border border-[#25D366]/30"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                  <div className="relative flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.150-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.390-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.130-.606.134-.133.298-.347.446-.520.149-.174.198-.298.298-.497.099-.198.050-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.500-.669-.510-.173-.008-.371-.010-.570-.010-.198 0-.520.074-.792.372-.272.297-1.040 1.016-1.040 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.200 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.360.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.570-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.510-5.260c.001-5.450 4.436-9.884 9.888-9.884 2.640 0 5.122 1.030 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.450-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .160 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.630"/>
                    </svg>
                    <span className="whitespace-nowrap">
                      {language === "es" ? "Únete a la comunidad" : "Join the community"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Logo grande */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#8B5FFF]/20 via-[#A78BFA]/30 to-[#7C3AED]/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-64 h-64 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl flex items-center justify-center p-12 shadow-2xl">
                  <img src={tool.logo} alt={tool.name} className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Casos de uso */}
        <div className="container mx-auto px-6 md:px-8 py-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            <Lightbulb className="inline-block mr-3 text-[#8B5FFF]" size={32} />
            {language === "es" ? "Casos de Uso para Empresas" : "Business Use Cases"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tool.useCases[language].map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-6 hover:border-[#8B5FFF]/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-[#8B5FFF] mt-1 flex-shrink-0" size={20} />
                  <p className="text-[#E5E7EB] leading-relaxed">{useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos Recomendados */}
        {tool.resources &&
          tool.resources[language] &&
          tool.resources[language].length > 0 && (
            <div className="container mx-auto px-6 md:px-8 py-16">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">
                <BookOpen className="inline-block mr-3 text-[#8B5FFF]" size={32} />
                {language === "es" ? "Recursos Recomendados" : "Recommended Resources"}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tool.resources[language].map((resource, index) => {
                  const IconComponent = resourceIcons[resource.type];
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-6 hover:border-[#8B5FFF]/40 hover:shadow-xl hover:shadow-[#8B5FFF]/10 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-[#8B5FFF]" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">
                            {resource.title}
                          </h3>
                          {resource.description && (
                            <p className="text-[#9CA3AF] text-sm leading-relaxed">
                              {resource.description}
                            </p>
                          )}
                          <div className="flex items-center mt-3 text-[#8B5FFF] text-sm">
                            <span className="capitalize">{resource.type}</span>
                            <ExternalLink
                              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                              size={14}
                            />
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

        {/* Herramientas similares */}
        {similarTools.length > 0 && (
          <div className="container mx-auto px-6 md:px-8 py-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              {language === "es" ? "Herramientas Similares" : "Similar Tools"}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarTools.map((similarTool) => (
                <ToolCard key={similarTool.id} tool={similarTool} language={language} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Modal */}
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

export default ToolDetailPage;
