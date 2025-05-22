import React from "react";
import ToolCard from "./ToolCard";
import { ToolCard as ToolCardType, Language } from "../types";
import { Search, Filter } from "lucide-react";

interface ToolGridProps {
  tools: ToolCardType[];
  language: Language;
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools, language }) => {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Fondo exacto del Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D1A] via-[#1A1B2E] to-[#0F1219]"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #8B5FFF 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>
      
      {/* Dynamic Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5FFF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <path d="M0,80 Q250,30 500,60 T1000,80" stroke="url(#lineGradient3)" strokeWidth="2" fill="none" className="animate-pulse">
          <animate attributeName="d" 
            values="M0,80 Q250,30 500,60 T1000,80;M0,120 Q250,80 500,30 T1000,60;M0,80 Q250,30 500,60 T1000,80" 
            dur="8s" repeatCount="indefinite"/>
        </path>
        <path d="M0,180 Q350,130 700,160 T1200,180" stroke="url(#lineGradient3)" strokeWidth="1.5" fill="none" className="animate-pulse delay-1000">
          <animate attributeName="d" 
            values="M0,180 Q350,130 700,160 T1200,180;M0,130 Q350,230 700,110 T1200,160;M0,180 Q350,130 700,160 T1200,180" 
            dur="10s" repeatCount="indefinite"/>
        </path>
      </svg>
      
      {/* Floating Orbs */}
      <div className="absolute top-[8%] left-[3%] w-[300px] h-[300px] bg-gradient-radial from-[#8B5FFF]/15 via-[#8B5FFF]/4 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-[12%] right-[5%] w-[250px] h-[250px] bg-gradient-radial from-[#A78BFA]/12 via-[#A78BFA]/3 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-[30%] right-[12%] w-[200px] h-[200px] bg-gradient-radial from-[#7C3AED]/15 via-[#7C3AED]/4 to-transparent rounded-full blur-2xl animate-pulse"></div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B5FFF]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} language={language} />
            ))}
          </div>
        ) : (
          <div className="relative">
            {/* Enhanced background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5FFF]/10 via-transparent to-[#8B5FFF]/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-r from-[#8B5FFF]/10 via-[#1A1B2E]/60 to-[#7C3AED]/10 backdrop-blur-xl border border-[#8B5FFF]/30 rounded-3xl p-12 text-center shadow-2xl shadow-[#8B5FFF]/10">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-[#8B5FFF]/20 to-[#7C3AED]/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-xl border border-[#8B5FFF]/20">
                <Search size={32} className="text-[#9CA3AF]" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === "es"
                  ? "No se encontraron herramientas"
                  : "No tools found"}
              </h3>
              
              {/* Description */}
              <p className="text-[#9CA3AF] text-lg mb-6 max-w-md mx-auto leading-relaxed">
                {language === "es"
                  ? "Intenta modificar tus filtros de búsqueda o explora otras categorías"
                  : "Try modifying your search filters or explore other categories"}
              </p>
              
              {/* Suggestions */}
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 px-4 py-2 rounded-full border border-[#8B5FFF]/20 backdrop-blur-xl">
                  <Filter size={16} className="text-[#8B5FFF]" />
                  <span className="text-[#E5E7EB] text-sm">
                    {language === "es" ? "Prueba otros filtros" : "Try other filters"}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#8B5FFF]/10 to-[#7C3AED]/10 px-4 py-2 rounded-full border border-[#8B5FFF]/20 backdrop-blur-xl">
                  <Search size={16} className="text-[#8B5FFF]" />
                  <span className="text-[#E5E7EB] text-sm">
                    {language === "es" ? "Busca términos diferentes" : "Search different terms"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ToolGrid;