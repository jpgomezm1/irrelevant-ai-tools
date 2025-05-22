import { PlaylistItem } from "../types";

export const youtubePlaylists: PlaylistItem[] = [
  {
    id: "1",
    title: {
      es: "IA para Empresarios - Lo Básico",
      en: "AI for Entrepreneurs - The Basics"
    },
    description: {
      es: "Aprende los fundamentos de la IA aplicada a negocios con casos reales y herramientas prácticas",
      en: "Learn AI fundamentals applied to business with real cases and practical tools"
    },
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
    url: "https://youtube.com/playlist?list=ejemplo1",
    duration: "3.5 horas",
    episodes: 12,
    category: "beginner",
    featured: true
  },
  {
    id: "2",
    title: {
      es: "Automatización con IA - Casos Prácticos",
      en: "AI Automation - Practical Cases"
    },
    description: {
      es: "Descubre cómo automatizar procesos empresariales usando herramientas de IA sin conocimiento técnico",
      en: "Discover how to automate business processes using AI tools without technical knowledge"
    },
    thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=225&fit=crop",
    url: "https://youtube.com/playlist?list=ejemplo2",
    duration: "5.2 horas",
    episodes: 18,
    category: "automation",
    featured: true
  },
  {
    id: "3",
    title: {
      es: "Marketing Digital con IA",
      en: "Digital Marketing with AI"
    },
    description: {
      es: "Estrategias avanzadas de marketing digital potenciadas por inteligencia artificial",
      en: "Advanced digital marketing strategies powered by artificial intelligence"
    },
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=225&fit=crop",
    url: "https://youtube.com/playlist?list=ejemplo3",
    duration: "4.1 horas",
    episodes: 15,
    category: "marketing",
    featured: false
  }
];

export const spotifyPlaylists: PlaylistItem[] = [
  {
    id: "1",
    title: {
      es: "Enfoque Empresarial - Deep Work",
      en: "Business Focus - Deep Work"
    },
    description: {
      es: "Música instrumental y ambiental perfecta para sesiones de trabajo profundo y estrategia empresarial",
      en: "Instrumental and ambient music perfect for deep work sessions and business strategy"
    },
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/playlist/ejemplo1",
    duration: "2.5 horas",
    episodes: 45,
    category: "focus",
    featured: true
  },
  {
    id: "2",
    title: {
      es: "Podcasts de Negocios e IA",
      en: "Business & AI Podcasts"
    },
    description: {
      es: "Los mejores podcasts sobre emprendimiento, tecnología e inteligencia artificial para mantenerte actualizado",
      en: "The best podcasts about entrepreneurship, technology and AI to keep you updated"
    },
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/playlist/ejemplo2",
    duration: "12+ horas",
    episodes: 25,
    category: "podcasts",
    featured: true
  },
  {
    id: "3",
    title: {
      es: "Motivación Empresarial",
      en: "Business Motivation"
    },
    description: {
      es: "Música energética y motivacional para empezar el día con la mentalidad correcta",
      en: "Energetic and motivational music to start the day with the right mindset"
    },
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    url: "https://open.spotify.com/playlist/ejemplo3",
    duration: "1.8 horas",
    episodes: 32,
    category: "motivation",
    featured: false
  }
];