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