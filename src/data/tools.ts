import { ToolCard } from "../types";

const tools: ToolCard[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: {
      es: "Crea contenido y automatiza atención al cliente",
      en: "Create content and automate customer support"
    },
    detailedDescription: {
      es: "ChatGPT es una inteligencia artificial conversacional desarrollada por OpenAI que puede ayudar a las empresas a automatizar tareas de comunicación, crear contenido de calidad y mejorar la experiencia del cliente.",
      en: "ChatGPT is a conversational AI developed by OpenAI that can help businesses automate communication tasks, create quality content, and improve customer experience."
    },
    useCases: {
      es: [
        "Automatización de atención al cliente 24/7",
        "Creación de contenido para redes sociales",
        "Redacción de emails y newsletters",
        "Generación de ideas de marketing",
        "Análisis y resumen de documentos",
        "Traducción de contenido multiidioma"
      ],
      en: [
        "24/7 customer service automation",
        "Social media content creation",
        "Email and newsletter writing",
        "Marketing idea generation",
        "Document analysis and summarization",
        "Multi-language content translation"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial Completo de ChatGPT para Empresas",
          url: "https://www.youtube.com/watch?v=JTxsNm9IdYU",
          type: "video",
          description: "Aprende a implementar ChatGPT en tu empresa paso a paso con casos prácticos"
        },
        {
          title: "Guía Oficial de OpenAI para Empresas",
          url: "https://openai.com/enterprise",
          type: "article",
          description: "Documentación oficial para implementación empresarial y mejores prácticas"
        },
        {
          title: "Curso: IA para Marketing Digital",
          url: "https://www.coursera.org/learn/ai-for-digital-marketing",
          type: "course",
          description: "Curso completo sobre el uso de IA en marketing y comunicación empresarial"
        }
      ],
      en: [
        {
          title: "Complete ChatGPT Tutorial for Business",
          url: "https://www.youtube.com/watch?v=JTxsNm9IdYU",
          type: "video",
          description: "Learn to implement ChatGPT in your business step by step with practical cases"
        },
        {
          title: "OpenAI Official Enterprise Guide",
          url: "https://openai.com/enterprise",
          type: "article",
          description: "Official documentation for enterprise implementation and best practices"
        },
        {
          title: "Course: AI for Digital Marketing",
          url: "https://www.coursera.org/learn/ai-for-digital-marketing",
          type: "course",
          description: "Complete course on using AI in marketing and business communication"
        }
      ]
    },
    category: "content",
    price: {
      es: "Gratis + $20/mes",
      en: "Free + $20/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png",
    slug: "chatgpt",
    featured: true,
    url: "https://chat.openai.com"
  },
  {
    id: "2",
    name: "Jasper",
    description: {
      es: "Genera textos de marketing de alta calidad",
      en: "Generate high-quality marketing texts"
    },
    detailedDescription: {
      es: "Jasper es una plataforma de IA especializada en marketing que ayuda a las empresas a crear contenido persuasivo y de alta conversión para todas sus necesidades de marketing digital.",
      en: "Jasper is an AI marketing platform that helps businesses create persuasive and high-converting content for all their digital marketing needs."
    },
    useCases: {
      es: [
        "Creación de copy para anuncios publicitarios",
        "Redacción de páginas de ventas (landing pages)",
        "Generación de contenido para blogs",
        "Creación de emails de marketing",
        "Desarrollo de estrategias de contenido",
        "Optimización SEO de textos"
      ],
      en: [
        "Ad copy creation for advertising",
        "Sales page (landing page) writing",
        "Blog content generation",
        "Marketing email creation",
        "Content strategy development",
        "SEO text optimization"
      ]
    },
    resources: {
      es: [
        {
          title: "Masterclass de Copywriting con IA",
          url: "https://www.youtube.com/watch?v=CopywritingIA",
          type: "video",
          description: "Aprende técnicas avanzadas de copywriting utilizando Jasper para maximizar conversiones"
        },
        {
          title: "Guía de Templates de Jasper",
          url: "https://www.jasper.ai/blog/jasper-templates-guide",
          type: "tutorial",
          description: "Tutorial completo sobre cómo usar las plantillas de Jasper para diferentes tipos de contenido"
        },
        {
          title: "Blog Oficial de Jasper",
          url: "https://www.jasper.ai/blog",
          type: "article",
          description: "Recursos, casos de estudio y mejores prácticas para marketing con IA"
        }
      ],
      en: [
        {
          title: "AI Copywriting Masterclass",
          url: "https://www.youtube.com/watch?v=CopywritingIA",
          type: "video",
          description: "Learn advanced copywriting techniques using Jasper to maximize conversions"
        },
        {
          title: "Jasper Templates Guide",
          url: "https://www.jasper.ai/blog/jasper-templates-guide",
          type: "tutorial",
          description: "Complete tutorial on how to use Jasper templates for different types of content"
        },
        {
          title: "Official Jasper Blog",
          url: "https://www.jasper.ai/blog",
          type: "article",
          description: "Resources, case studies and best practices for AI marketing"
        }
      ]
    },
    category: "content",
    price: {
      es: "$49/mes",
      en: "$49/month"
    },
    difficulty: "intermediate",
    logo: "https://www.jasper.ai/images/logos/jasper-secondary.svg",
    slug: "jasper",
    featured: true,
    url: "https://jasper.ai"
  },
  {
    id: "3",
    name: "Copy.ai",
    description: {
      es: "Escribe emails y posts que conviertan",
      en: "Write converting emails and posts"
    },
    detailedDescription: {
      es: "Copy.ai es una herramienta de inteligencia artificial diseñada para ayudar a empresarios y marketers a crear contenido que convierta, desde emails hasta posts de redes sociales.",
      en: "Copy.ai is an AI tool designed to help entrepreneurs and marketers create converting content, from emails to social media posts."
    },
    useCases: {
      es: [
        "Secuencias de email marketing automatizadas",
        "Posts para redes sociales que generen engagement",
        "Descripciones de productos para ecommerce",
        "Títulos y meta descripciones SEO",
        "Scripts para videos de marketing",
        "Contenido para campañas publicitarias"
      ],
      en: [
        "Automated email marketing sequences",
        "Engaging social media posts",
        "Ecommerce product descriptions",
        "SEO titles and meta descriptions",
        "Marketing video scripts",
        "Advertising campaign content"
      ]
    },
    resources: {
      es: [
        {
          title: "Email Marketing con IA - Estrategias Avanzadas",
          url: "https://www.youtube.com/watch?v=EmailMarketingIA",
          type: "video",
          description: "Descubre cómo crear secuencias de email que conviertan usando Copy.ai"
        },
        {
          title: "Copy.ai Academy: Curso Gratuito",
          url: "https://www.copy.ai/academy",
          type: "course",
          description: "Curso oficial gratuito para dominar todas las funcionalidades de Copy.ai"
        },
        {
          title: "Plantillas de Copy para Redes Sociales",
          url: "https://www.copy.ai/blog/social-media-templates",
          type: "tutorial",
          description: "Guía práctica con plantillas listas para usar en diferentes redes sociales"
        }
      ],
      en: [
        {
          title: "AI Email Marketing - Advanced Strategies",
          url: "https://www.youtube.com/watch?v=EmailMarketingIA",
          type: "video",
          description: "Discover how to create converting email sequences using Copy.ai"
        },
        {
          title: "Copy.ai Academy: Free Course",
          url: "https://www.copy.ai/academy",
          type: "course",
          description: "Official free course to master all Copy.ai functionalities"
        },
        {
          title: "Social Media Copy Templates",
          url: "https://www.copy.ai/blog/social-media-templates",
          type: "tutorial",
          description: "Practical guide with ready-to-use templates for different social networks"
        }
      ]
    },
    category: "content",
    price: {
      es: "Gratis + $36/mes",
      en: "Free + $36/month"
    },
    difficulty: "beginner",
    logo: "https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62a1d2b2d61c0de0602d24aa_Sqaure%20copy.svg",
    slug: "copy-ai",
    featured: false,
    url: "https://copy.ai"
  }
];

export default tools;