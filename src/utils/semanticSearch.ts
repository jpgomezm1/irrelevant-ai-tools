import { ToolCard, Language } from "../types";

// Esta función analiza qué tan relevante es una herramienta para una búsqueda
export const getToolRelevance = (
  tool: ToolCard,
  query: string,
  language: Language
): number => {
  if (!query) return 0;
  
  // Normalizar la búsqueda (quitar mayúsculas, espacios extra)
  const normalizedQuery = query.toLowerCase().trim();
  
  // Palabras clave para categorías en español e inglés
  const categoryKeywords: Record<string, string[]> = {
    content: [
      "contenido", "texto", "escribir", "redacción", "artículos", "blog",
      "content", "text", "writing", "articles", "blog"
    ],
    design: [
      "diseño", "imagen", "gráfico", "fotos", "visual", "fotografía", 
      "design", "image", "graphic", "photos", "visual", "photography"
    ],
    sales: [
      "ventas", "clientes", "marketing", "email", "vender", "comercial",
      "sales", "customers", "marketing", "email", "sell", "commercial"
    ],
    automation: [
      "automatización", "automatizar", "flujo", "proceso", "tareas",
      "automation", "automate", "workflow", "process", "tasks"
    ],
    analytics: [
      "análisis", "estadísticas", "datos", "métricas", "reportes",
      "analytics", "statistics", "data", "metrics", "reports"
    ]
  };
  
  // Recopilar todo el texto de la herramienta
  const toolText = [
    tool.name.toLowerCase(),
    tool.description[language].toLowerCase(),
    tool.detailedDescription[language].toLowerCase(),
    ...tool.useCases[language].map(useCase => useCase.toLowerCase())
  ].join(' ');
  
  // Calcular puntuación
  let score = 0;
  
  // Dividir la búsqueda en palabras
  const keywords = normalizedQuery.split(/\s+/);
  
  // Comprobar cada palabra de la búsqueda
  for (const keyword of keywords) {
    // Ignorar palabras muy cortas
    if (keyword.length <= 2) continue;
    
    // Si la palabra aparece directamente
    if (toolText.includes(keyword)) {
      score += 10;
      
      // Bonus si aparece en el nombre
      if (tool.name.toLowerCase().includes(keyword)) {
        score += 20;
      }
      
      // Bonus si aparece en la descripción corta
      if (tool.description[language].toLowerCase().includes(keyword)) {
        score += 10;
      }
    }
    
    // Comprobar si la palabra está relacionada con alguna categoría
    for (const [category, words] of Object.entries(categoryKeywords)) {
      if (words.includes(keyword) && tool.category === category) {
        score += 15;
      }
    }
  }
  
  return score;
};

// Función principal para buscar herramientas de forma inteligente
export const findRelevantTools = (
  tools: ToolCard[],
  query: string,
  language: Language
): ToolCard[] => {
  if (!query || query.trim() === '') {
    return tools;
  }
  
  // Calcular relevancia para cada herramienta
  const toolsWithScores = tools.map(tool => ({
    tool,
    score: getToolRelevance(tool, query, language)
  }));
  
  // Filtrar las que tengan puntuación positiva y ordenar
  const relevantTools = toolsWithScores
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.tool);
  
  return relevantTools.length > 0 ? relevantTools : tools;
};