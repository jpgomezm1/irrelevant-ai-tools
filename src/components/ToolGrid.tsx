
import React from "react";
import ToolCard from "./ToolCard";
import { ToolCard as ToolCardType, Language } from "../types";

interface ToolGridProps {
  tools: ToolCardType[];
  language: Language;
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools, language }) => {
  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-h3 mb-4 text-text-primary">
              {language === "es"
                ? "No se encontraron herramientas"
                : "No tools found"}
            </h3>
            <p className="text-text-secondary">
              {language === "es"
                ? "Intenta modificar tus filtros de búsqueda"
                : "Try modifying your search filters"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolGrid;
