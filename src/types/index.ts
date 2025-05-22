
export interface ToolCard {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
  };
  category: 'content' | 'design' | 'sales' | 'automation' | 'analytics';
  price: {
    es: string;
    en: string;
  };
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  logo: string;
  slug: string;
  featured: boolean;
  url: string;
}

export interface HeaderProps {
  currentLang: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
  onNewsletterClick: () => void;
}

export interface FilterOptions {
  category: string | null;
  difficulty: string | null;
  search: string;
}

export type Language = 'es' | 'en';
