
const translations = {
  es: {
    hero: {
      title: "Catálogo de Herramientas AI para Empresas",
      subtitle: "Descubre las mejores herramientas para hacer crecer tu negocio sin complicaciones técnicas",
      whatsappCta: "Únete a nuestra comunidad de WhatsApp GRATIS",
      socialProof: "Más de 500 empresarios ya se unieron"
    },
    header: {
      newsletter: "Suscribirse",
      menu: "Menú",
      catalog: "Catálogo",
      language: "Idioma"
    },
    filters: {
      search: "Buscar herramientas...",
      allCategories: "Todas",
      showing: "Mostrando",
      tools: "herramientas"
    },
    categories: {
      content: "Contenido",
      design: "Diseño", 
      sales: "Ventas",
      automation: "Automatización",
      analytics: "Análisis"
    },
    difficulty: {
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
      all: "Todos los niveles"
    },
    newsletter: {
      title: "Únete a nuestro newsletter",
      subtitle: "Recibe las mejores herramientas AI cada semana",
      placeholder: "Tu email",
      button: "Suscribirse",
      success: "¡Gracias por suscribirte!",
      name: "Tu nombre"
    },
    whatsapp: {
      title: "Únete a nuestra comunidad",
      subtitle: "Conecta con otros empresarios y recibe consejos diarios sobre herramientas AI",
      button: "Unirse ahora",
      disclaimer: "Puedes salir del grupo cuando quieras"
    },
    footer: {
      copyright: "© 2025 Irrelevant. Todos los derechos reservados.",
      privacyPolicy: "Política de Privacidad",
      terms: "Términos de Uso"
    },
    cta: {
      tryFree: "Probar Gratis"
    }
  },
  en: {
    hero: {
      title: "AI Tools Catalog for Businesses",
      subtitle: "Discover the best tools to grow your business without technical complications",
      whatsappCta: "Join our FREE WhatsApp community",
      socialProof: "500+ entrepreneurs already joined"
    },
    header: {
      newsletter: "Subscribe",
      menu: "Menu",
      catalog: "Catalog",
      language: "Language"
    },
    filters: {
      search: "Search tools...",
      allCategories: "All",
      showing: "Showing",
      tools: "tools"
    },
    categories: {
      content: "Content",
      design: "Design",
      sales: "Sales", 
      automation: "Automation",
      analytics: "Analytics"
    },
    difficulty: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      all: "All levels"
    },
    newsletter: {
      title: "Join our newsletter",
      subtitle: "Receive the best AI tools every week",
      placeholder: "Your email",
      button: "Subscribe",
      success: "Thank you for subscribing!",
      name: "Your name"
    },
    whatsapp: {
      title: "Join our community",
      subtitle: "Connect with other entrepreneurs and receive daily AI tools tips",
      button: "Join now",
      disclaimer: "You can leave the group at any time"
    },
    footer: {
      copyright: "© 2025 Irrelevant. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      terms: "Terms of Use"
    },
    cta: {
      tryFree: "Try Free"
    }
  }
};

export default translations;

export const getDifficultyLabel = (
  difficulty: 'beginner' | 'intermediate' | 'advanced', 
  lang: 'es' | 'en'
): string => {
  return translations[lang].difficulty[difficulty];
};

export const getCategoryLabel = (
  category: 'content' | 'design' | 'sales' | 'automation' | 'analytics', 
  lang: 'es' | 'en'
): string => {
  return translations[lang].categories[category];
};
