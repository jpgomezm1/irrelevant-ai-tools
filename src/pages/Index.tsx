import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatsAppModal from "../components/WhatsAppModal";
import NewsletterModal from "../components/NewsletterModal";
import LeadMagnetModal from "../components/LeadMagnetModal";
import { useLanguage } from "../context/LanguageContext";
import { useLeadMagnetTimer } from "../hooks/useLeadMagnetTimer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wrench,
  Newspaper,
  GraduationCap,
  Users,
  Zap,
  Star,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Instagram,
  Linkedin,
  Music
} from "lucide-react";

const Index = () => {
  const { language, setLanguage } = useLanguage();

  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const { shouldShow: shouldShowLeadMagnet, handleClose: handleCloseLeadMagnet } = useLeadMagnetTimer({
    delayInSeconds: 5, // 10 segundos para pruebas
    storageKey: 'leadMagnetShown_index'
  });

  // Update page title and meta based on language
  useEffect(() => {
    document.title =
      language === "es"
        ? "Irrelevant | Herramientas de IA para emprendedores - Comunidad y Recursos"
        : "Irrelevant | AI Tools for Entrepreneurs - Community and Resources";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        language === "es"
          ? "Únete a la comunidad de emprendedores más grande de IA en español. Descubre herramientas, recursos y estrategias para hacer crecer tu negocio."
          : "Join the largest AI entrepreneurs community. Discover tools, resources and strategies to grow your business."
      );
    }
  }, [language]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo unificado para toda la página */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]" />

      {/* Animated Grid Pattern - Global */}
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

      {/* Dynamic Neural Network Lines - Global */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradientGlobal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5FFF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q400,100 800,150 T1600,200"
          stroke="url(#lineGradientGlobal)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        >
          <animate
            attributeName="d"
            values="M0,200 Q400,100 800,150 T1600,200;M0,250 Q400,150 800,100 T1600,180;M0,200 Q400,100 800,150 T1600,200"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M0,400 Q600,300 1200,350 T1800,400"
          stroke="url(#lineGradientGlobal)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse delay-1000"
        >
          <animate
            attributeName="d"
            values="M0,400 Q600,300 1200,350 T1800,400;M0,350 Q600,450 1200,300 T1800,380;M0,400 Q600,300 1200,350 T1800,400"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Floating Orbs - Global */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#8B5FFF]/20 via-[#8B5FFF]/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#A78BFA]/15 via-[#A78BFA]/3 to-transparent rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-[50%] right-[20%] w-[300px] h-[300px] bg-gradient-radial from-[#7C3AED]/20 via-[#7C3AED]/5 to-transparent rounded-full blur-2xl animate-pulse" />

      {/* Cyber Grid Overlay - Global */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5FFF]/5 to-transparent" />

      {/* Contenido - Todo en relative z-10 para estar encima del fondo */}
      <div className="relative z-10">
        <Header
          currentLang={language}
          onLanguageChange={setLanguage}
          onNewsletterClick={() => setIsNewsletterModalOpen(true)}
        />

        <Hero language={language} onJoinWhatsApp={() => setIsWhatsAppModalOpen(true)} />

        {/* Sección de servicios principales */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent mb-6">
                {language === "es" ? "¿Qué encontrarás aquí?" : "What will you find here?"}
              </h2>
              <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
                {language === "es"
                  ? "Todo lo que necesitas para integrar IA en tu negocio de manera efectiva y sin complicaciones"
                  : "Everything you need to integrate AI into your business effectively and without complications"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Herramientas de IA */}
              <Link to="/tools" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/20 via-[#8B5FFF]/40 to-[#7C3AED]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-[#8B5FFF]/60 group-hover:shadow-xl group-hover:shadow-[#8B5FFF]/20 group-hover:scale-[1.02]">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="text-[#8B5FFF]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {language === "es" ? "Herramientas de IA" : "AI Tools"}
                  </h3>
                  <p className="text-[#E5E7EB] leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {language === "es"
                      ? "Catálogo curado de las mejores herramientas de IA para automatizar y hacer crecer tu negocio"
                      : "Curated catalog of the best AI tools to automate and grow your business"}
                  </p>
                  <div className="flex items-center text-[#8B5FFF] font-semibold group-hover:text-white transition-colors duration-300">
                    <span>{language === "es" ? "Explorar herramientas" : "Explore tools"}</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Noticias y Tendencias */}
              <Link to="/news" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/20 via-[#8B5FFF]/40 to-[#7C3AED]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-[#8B5FFF]/60 group-hover:shadow-xl group-hover:shadow-[#8B5FFF]/20 group-hover:scale-[1.02]">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Newspaper className="text-[#8B5FFF]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {language === "es" ? "Noticias y Tendencias" : "News & Trends"}
                  </h3>
                  <p className="text-[#E5E7EB] leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {language === "es"
                      ? "Mantente al día con las últimas novedades del mundo de la IA aplicada a negocios"
                      : "Stay up to date with the latest news from the world of AI applied to business"}
                  </p>
                  <div className="flex items-center text-[#8B5FFF] font-semibold group-hover:text-white transition-colors duration-300">
                    <span>{language === "es" ? "Leer noticias" : "Read news"}</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              {/* Recursos de Aprendizaje */}
              <Link to="/resources" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/20 via-[#8B5FFF]/40 to-[#7C3AED]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-[#8B5FFF]/60 group-hover:shadow-xl group-hover:shadow-[#8B5FFF]/20 group-hover:scale-[1.02]">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="text-[#8B5FFF]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#A78BFA] transition-colors duration-300">
                    {language === "es" ? "Recursos de Aprendizaje" : "Learning Resources"}
                  </h3>
                  <p className="text-[#E5E7EB] leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {language === "es"
                      ? "Playlists, cursos y comunidades recomendadas para dominar la IA en tu empresa"
                      : "Recommended playlists, courses and communities to master AI in your business"}
                  </p>
                  <div className="flex items-center text-[#8B5FFF] font-semibold group-hover:text-white transition-colors duration-300">
                    <span>{language === "es" ? "Ver recursos" : "View resources"}</span>
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Nueva sección: Problemas que resolvemos */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === "es" ? "¿Te identificas con esto?" : "Does this sound familiar?"}
              </h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                {language === "es"
                  ? "Los empresarios exitosos comparten los mismos desafíos cuando se trata de tecnología"
                  : "Successful entrepreneurs share the same challenges when it comes to technology"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-red-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === "es" ? "Sin tiempo para aprender" : "No time to learn"}
                </h3>
                <p className="text-[#9CA3AF]">
                  {language === "es"
                    ? "Horas perdidas tratando de entender nuevas herramientas que prometen revolucionar tu negocio"
                    : "Hours lost trying to understand new tools that promise to revolutionize your business"}
                </p>
              </div>
              <div className="text-center bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-yellow-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === "es" ? "Tareas que no generan valor" : "Tasks that don't add value"}
                </h3>
                <p className="text-[#9CA3AF]">
                  {language === "es"
                    ? "Tu tiempo se va en actividades operativas mientras tu competencia se enfoca en crecer"
                    : "Your time goes to operational activities while your competition focuses on growing"}
                </p>
              </div>
              <div className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {language === "es" ? "Crecimiento estancado" : "Stagnant growth"}
                </h3>
                <p className="text-[#9CA3AF]">
                  {language === "es"
                    ? "Sabes que la IA puede acelerar tu negocio, pero no sabes por dónde empezar"
                    : "You know AI can accelerate your business, but don't know where to start"}
                </p>
              </div>
            </div>

            {/* CTA sutil a Stay Irrelevant */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5FFF]/30 via-[#A78BFA]/30 to-[#7C3AED]/30 rounded-3xl blur-xl opacity-60" />
              <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/95 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {language === "es"
                    ? "Recupera tu tiempo más valioso"
                    : "Get back your most valuable time"}
                </h3>
                <p className="text-lg text-[#E5E7EB] leading-relaxed mb-8 max-w-2xl mx-auto">
                  {language === "es"
                    ? "Imagínate tener de vuelta 15-20 horas semanales para enfocarte solo en lo que realmente mueve la aguja de tu negocio: vender y crecer."
                    : "Imagine getting back 15-20 hours per week to focus only on what really moves the needle in your business: selling and growing."}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-[#E5E7EB] font-medium">
                      {language === "es" ? "Automatización inteligente" : "Smart automation"}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-[#E5E7EB] font-medium">
                      {language === "es" ? "Implementación rápida" : "Quick implementation"}
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <CheckCircle className="text-green-400" size={24} />
                    <span className="text-[#E5E7EB] font-medium">
                      {language === "es" ? "Resultados medibles" : "Measurable results"}
                    </span>
                  </div>
                </div>

                <a
                  href="https://stayirrelevant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-2xl shadow-xl shadow-[#8B5FFF]/30 hover:shadow-[#8B5FFF]/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-3">
                    {language === "es"
                      ? "Descubre cómo recuperar tu tiempo"
                      : "Discover how to get your time back"}
                  </span>
                  <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <p className="text-[#9CA3AF] text-sm mt-4">
                  {language === "es" ? "Sin compromisos • Resultados en 30 días" : "No commitments • Results in 30 days"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de estadísticas y beneficios mejorada */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {language === "es" ? "Una comunidad que crece contigo" : "A community that grows with you"}
              </h2>
              <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
                {language === "es"
                  ? "Empresarios reales compartiendo herramientas que funcionan y estrategias que generan resultados medibles"
                  : "Real entrepreneurs sharing tools that work and strategies that generate measurable results"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
                <p className="text-[#9CA3AF] mb-2">
                  {language === "es" ? "Empresarios conectados" : "Connected entrepreneurs"}
                </p>
                <div className="flex items-center justify-center text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  {language === "es" ? "Creciendo diariamente" : "Growing daily"}
                </div>
              </div>
              <div className="text-center bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                <p className="text-[#9CA3AF] mb-2">
                  {language === "es" ? "Herramientas probadas" : "Tested tools"}
                </p>
                <div className="flex items-center justify-center text-blue-400 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  {language === "es" ? "Actualizadas semanalmente" : "Updated weekly"}
                </div>
              </div>
              <div className="text-center bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/20 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">4.9★</h3>
                <p className="text-[#9CA3AF] mb-2">
                  {language === "es" ? "Satisfacción promedio" : "Average satisfaction"}
                </p>
                <div className="flex items-center justify-center text-yellow-400 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                  {language === "es" ? "Basado en feedback real" : "Based on real feedback"}
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">
                {language === "es" ? "Síguenos en redes sociales" : "Follow us on social media"}
              </h3>
              <p className="text-[#9CA3AF] mb-8">
                {language === "es"
                  ? "Contenido diario sobre herramientas AI, casos de éxito y estrategias empresariales"
                  : "Daily content about AI tools, success stories and business strategies"}
              </p>

              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.instagram.com/irrelevantclub.co?igsh=MWZycnlhMTN1MTMzeA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
                  <div className="relative w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <Instagram className="text-white" size={28} />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@irrelevantclub.co?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-black to-gray-800 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
                  <div className="relative w-14 h-14 bg-gradient-to-r from-black to-gray-800 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <Music className="text-white" size={28} />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/irrelevant-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500" />
                  <div className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <Linkedin className="text-white" size={28} />
                  </div>
                </a>
              </div>
            </div>

            {/* CTA final mejorado */}
            <div className="text-center">
              <button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-2xl shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out border border-[#25D366]/30"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative flex items-center">
                  <svg
                    className="w-6 h-6 mr-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                  </svg>
                  <span className="whitespace-nowrap">
                    {language === "es" ? "Únete GRATIS a la comunidad" : "Join the community for FREE"}
                  </span>
                  <div className="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Trust indicators mejorados */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs md:text-sm text-[#6B7280]">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="whitespace-nowrap">
                    {language === "es" ? "100+ emprendedores activos" : "100+ active entrepreneurs"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-2 animate-pulse delay-500" />
                  <span className="whitespace-nowrap">
                    {language === "es" ? "100% gratuito siempre" : "100% free forever"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-2 animate-pulse delay-1000" />
                  <span className="whitespace-nowrap">
                    {language === "es" ? "Contenido diario exclusivo" : "Exclusive daily content"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Irrelevant. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
              </p>
              <div className="flex space-x-6">
                <Link to="/tools" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Herramientas" : "Tools"}
                </Link>
                <Link to="/news" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Noticias" : "News"}
                </Link>
                <Link to="/resources" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Recursos" : "Resources"}
                </Link>
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Política de Privacidad" : "Privacy Policy"}
                </a>
                <a href="#" className="text-gray-300 hover:text-[#8B5FFF] transition-colors">
                  {language === "es" ? "Términos de Uso" : "Terms of Use"}
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <WhatsAppModal
        language={language}
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      <NewsletterModal
        language={language}
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />

      <LeadMagnetModal
        language={language}
        isOpen={shouldShowLeadMagnet}
        onClose={handleCloseLeadMagnet}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
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

export default Index;