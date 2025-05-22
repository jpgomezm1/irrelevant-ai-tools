import { ResourceItem } from "../types";

export const otherResources: ResourceItem[] = [
  {
    id: "1",
    title: {
      es: "AI for Everyone - Coursera",
      en: "AI for Everyone - Coursera"
    },
    description: {
      es: "Curso fundamental de Andrew Ng sobre IA para profesionales no técnicos. Perfecto para empresarios que quieren entender el panorama de la IA",
      en: "Andrew Ng's fundamental AI course for non-technical professionals. Perfect for entrepreneurs who want to understand the AI landscape"
    },
    type: "course",
    url: "https://www.coursera.org/learn/ai-for-everyone",
    price: {
      es: "$49/mes",
      en: "$49/month"
    },
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: "2",
    title: {
      es: "Comunidad AI Entrepreneurs",
      en: "AI Entrepreneurs Community"
    },
    description: {
      es: "Comunidad exclusiva de Discord con más de 5,000 empresarios implementando IA en sus negocios. Networking y casos reales diarios",
      en: "Exclusive Discord community with 5,000+ entrepreneurs implementing AI in their businesses. Daily networking and real cases"
    },
    type: "community",
    url: "https://discord.gg/ai-entrepreneurs",
    price: {
      es: "Gratis",
      en: "Free"
    },
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: "3",
    title: {
      es: "The AI Revolution Newsletter",
      en: "The AI Revolution Newsletter"
    },
    description: {
      es: "Newsletter semanal con las últimas herramientas de IA, casos de uso empresariales y análisis de tendencias del mercado",
      en: "Weekly newsletter with the latest AI tools, business use cases and market trend analysis"
    },
    type: "newsletter",
    url: "https://airevolution.substack.com",
    price: {
      es: "Gratis + $15/mes Premium",
      en: "Free + $15/month Premium"
    },
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: "4",
    title: {
      es: "Prompt Engineering Masterclass",
      en: "Prompt Engineering Masterclass"
    },
    description: {
      es: "Curso intensivo sobre ingeniería de prompts para maximizar el potencial de ChatGPT, Claude y otras IAs en tu empresa",
      en: "Intensive course on prompt engineering to maximize the potential of ChatGPT, Claude and other AIs in your business"
    },
    type: "course",
    url: "https://promptengineering.com/masterclass",
    price: {
      es: "$197 único pago",
      en: "$197 one-time payment"
    },
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    featured: true
  }
];