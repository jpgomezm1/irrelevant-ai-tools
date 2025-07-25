import React from "react";
import translations from "../utils/i18n";
import { Language } from "../types";

interface HeroProps {
 language: Language;
 onJoinWhatsApp: () => void;
}

const Hero: React.FC<HeroProps> = ({ language, onJoinWhatsApp }) => {
 const t = translations[language];

 // Función para abrir WhatsApp directamente
 const handleWhatsAppClick = () => {
   window.open('https://chat.whatsapp.com/JMSMme18JN9B6zHdRC6ZGg', '_blank');
 };

 // Función para navegar a las herramientas
 const handleToolsClick = () => {
   window.location.href = '/tools';
 };

 return (
   <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
     <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
       <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[100dvh] py-12 md:py-16 lg:py-20">
         
         {/* Left Column - Content */}
         <div className="order-2 lg:order-1 text-center lg:text-left">
           {/* Featured Badge */}

           
           {/* Main Title */}
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-6 md:mb-8">
 <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#A78BFA] to-[#8B5FFF] bg-clip-text text-transparent">
   {language === "es" ? "150+ Tools de IA" : "150+ AI Tools"}
 </span>
 <span className="block bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent mt-2">
   {language === "es" ? "Probadas y Actualizadas" : "Tested and Updated"}
 </span>
</h1>

{/* Enhanced Subtitle */}
<p className="text-lg sm:text-xl md:text-2xl text-[#9CA3AF] mb-8 md:mb-12 leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
 {language === "es" 
   ? "La plataforma completa con herramientas de IA verificadas, recursos de aprendizaje y noticias para que no te pierdas cómo la IA está cambiando el mundo." 
   : "The complete platform with verified AI tools, learning resources and news so you don't miss how AI is changing the world."}
</p>
           
           {/* Key Features */}
           <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 justify-center lg:justify-start">
             <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 rounded-full border border-[#8B5FFF]/20">
               <span className="text-[#8B5FFF] mr-1.5 sm:mr-2">🎯</span>
               <span className="text-[#E5E7EB] text-xs sm:text-sm font-medium">
                 {language === "es" ? "Para builders" : "For builders"}
               </span>
             </div>
             <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 rounded-full border border-[#8B5FFF]/20">
               <span className="text-[#8B5FFF] mr-1.5 sm:mr-2">⚡</span>
               <span className="text-[#E5E7EB] text-xs sm:text-sm font-medium">
                 {language === "es" ? "Ideas a realidad" : "Ideas to reality"}
               </span>
             </div>
             <div className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 rounded-full border border-[#8B5FFF]/20">
               <span className="text-[#8B5FFF] mr-1.5 sm:mr-2">📊</span>
               <span className="text-[#E5E7EB] text-xs sm:text-sm font-medium">
                 {language === "es" ? "Comunidad activa" : "Active community"}
               </span>
             </div>
           </div>
           
           {/* Botones CTA */}
           <div className="space-y-3 sm:space-y-4">
             {/* Botón Principal - Explorar Herramientas */}
             <button 
               onClick={handleToolsClick}
               className="group relative inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] lg:min-w-[320px] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold text-white bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#8B5FFF] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl shadow-xl shadow-[#8B5FFF]/20 hover:shadow-[#8B5FFF]/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out border border-[#8B5FFF]/30"
             >
               <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5FFF] via-[#7C3AED] to-[#8B5FFF] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
               <div className="relative flex items-center">
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39zM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7z"/>
                 </svg>
                 <span className="whitespace-nowrap text-sm sm:text-base">
                   {language === "es" ? "Explorar Herramientas IA" : "Explore AI Tools"}
                 </span>
                 <div className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                   <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </div>
               </div>
             </button>

             {/* Botón Secundario - WhatsApp */}
             <button 
               onClick={handleWhatsAppClick}
               className="group relative inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] lg:min-w-[320px] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-xl shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out border border-[#25D366]/30"
             >
               <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
               <div className="relative flex items-center">
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                 </svg>
                 <span className="whitespace-nowrap text-sm sm:text-base">
                   {language === "es" ? "Únete a la comunidad" : "Join the community"}
                 </span>
                 <div className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                   <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                   </svg>
                 </div>
               </div>
             </button>
             
             {/* Trust Indicators */}
             <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 md:gap-6 text-xs md:text-sm text-[#6B7280]">
               <div className="flex items-center">
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
                 <span className="whitespace-nowrap text-xs sm:text-sm">
                   {language === "es" ? "100+ builders" : "100+ builders"}
                 </span>
               </div>
               <div className="flex items-center">
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-1.5 sm:mr-2 animate-pulse delay-500"></div>
                 <span className="whitespace-nowrap text-xs sm:text-sm">
                   {language === "es" ? "100% gratuito" : "100% free"}
                 </span>
               </div>
               <div className="flex items-center">
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full mr-1.5 sm:mr-2 animate-pulse delay-1000"></div>
                 <span className="whitespace-nowrap text-xs sm:text-sm">
                   {language === "es" ? "Actualizado diariamente" : "Updated daily"}
                 </span>
               </div>
             </div>
           </div>
         </div>
         
         {/* Right Column - Mr. Irrelevant Visual */}
         <div className="order-1 lg:order-2 relative">
           <div className="relative max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
             {/* Magical Aura Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FFF]/20 via-[#A78BFA]/30 to-[#7C3AED]/20 rounded-full blur-3xl animate-pulse scale-110"></div>
             
             {/* Floating Elements Around Character */}
             <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-3 sm:w-4 h-3 sm:h-4 bg-[#8B5FFF] rounded-full animate-bounce delay-0"></div>
             <div className="absolute -top-8 sm:-top-12 right-8 sm:right-12 w-2 sm:w-3 h-2 sm:h-3 bg-[#A78BFA] rounded-full animate-bounce delay-300"></div>
             <div className="absolute top-16 sm:top-20 -right-4 sm:-right-6 w-3 sm:w-5 h-3 sm:h-5 bg-[#7C3AED] rounded-full animate-bounce delay-700"></div>
             <div className="absolute bottom-12 sm:bottom-16 -left-3 sm:-left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#8B5FFF] rounded-full animate-bounce delay-1000"></div>
             
             {/* Tech Rings */}
             <div className="absolute inset-0 border-2 border-[#8B5FFF]/20 rounded-full animate-spin-slow"></div>
             <div className="absolute inset-4 border border-[#A78BFA]/30 rounded-full animate-spin-reverse"></div>
             
             {/* Main Character Container */}
             <div className="relative bg-gradient-to-br from-[#8B5FFF]/10 via-transparent to-[#7C3AED]/10 backdrop-blur-2xl border border-[#8B5FFF]/20 rounded-full p-6 sm:p-8 hover:scale-105 transition-transform duration-700">
               <img 
                 src="https://storage.googleapis.com/cluvi/wizard.png" 
                 alt="Mr. Irrelevant - AI Vision Connector"
                 className="w-full h-auto relative z-10 drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(139,95,255,0.5)] transition-all duration-500"
               />
               
               {/* Magic Sparkles */}
               <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-0"></div>
               <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#A78BFA] rounded-full animate-ping delay-500"></div>
               <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#8B5FFF] rounded-full animate-ping delay-1000"></div>
             </div>
             
             {/* Quote Bubble */}
             <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 bg-gradient-to-r from-[#8B5FFF]/90 to-[#7C3AED]/90 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-[#8B5FFF]/30 max-w-[180px] sm:max-w-xs animate-float">
               <p className="text-white text-xs sm:text-sm font-medium">
                 {language === "es" ? "¡Materializa tus ideas con IA!" : "Bring your ideas to life with AI!"}
               </p>
               <div className="absolute -top-2 left-6 sm:left-8 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-[#8B5FFF] to-[#7C3AED] rotate-45"></div>
             </div>
           </div>
         </div>
       </div>
     </div>
     
     {/* Additional CSS for animations */}
     <style jsx>{`
       @keyframes float {
         0%, 100% { transform: translateY(0px); }
         50% { transform: translateY(-20px); }
       }
       @keyframes spin-slow {
         from { transform: rotate(0deg); }
         to { transform: rotate(360deg); }
       }
       @keyframes spin-reverse {
         from { transform: rotate(360deg); }
         to { transform: rotate(0deg); }
       }
       .animate-float { animation: float 6s ease-in-out infinite; }
       .animate-spin-slow { animation: spin-slow 20s linear infinite; }
       .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
       .bg-size-200 { background-size: 200% 200%; }
       .bg-pos-0 { background-position: 0% 50%; }
       .bg-pos-100 { background-position: 100% 50%; }
     `}</style>
   </section>
 );
};

export default Hero;