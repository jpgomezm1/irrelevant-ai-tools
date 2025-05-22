export interface ToolCard {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  detailedDescription: {
    es: string;
    en: string;
  };
  useCases: {
    es: string[];
    en: string[];
  };
  resources?: {
    es: {
      title: string;
      url: string;
      type: 'video' | 'article' | 'course' | 'tutorial';
      description?: string;
    }[];
    en: {
      title: string;
      url: string;
      type: 'video' | 'article' | 'course' | 'tutorial';
      description?: string;
    }[];
  };
  category: string;
  price: {
    es: string;
    en: string;
  };
  difficulty: "beginner" | "intermediate" | "advanced";
  logo: string;
  slug: string;
  featured: boolean;
  url: string;
}

export interface NewsArticle {
  id: string;
  title: {
    es: string;
    en: string;
  };
  summary: {
    es: string;
    en: string;
  };
  content: {
    es: string;
    en: string;
  };
  category: 'ai-tools' | 'industry-news' | 'tutorials' | 'trends';
  publishDate: string;
  readTime: number; // en minutos
  featured: boolean;
  image: string;
  slug: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

export type Language = "es" | "en";

export interface FilterOptions {
  category: string | null;
  difficulty: string | null;
  search: string;
}

export interface NewsFilterOptions {
  category: string | null;
  search: string;
}

export interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onNewsletterClick: () => void;
}

export interface PlaylistItem {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  thumbnail: string;
  url: string;
  duration?: string;
  episodes?: number;
  category: string;
  featured: boolean;
}

export interface ResourceItem {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  type: 'course' | 'community' | 'book' | 'newsletter' | 'tool';
  url: string;
  price: {
    es: string;
    en: string;
  };
  rating?: number;
  thumbnail: string;
  featured: boolean;
}

export interface ResourcesFilterOptions {
  platform: string | null;
  category: string | null;
  search: string;
}