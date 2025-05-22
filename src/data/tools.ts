
import { ToolCard } from "../types";

const tools: ToolCard[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: {
      es: "Crea contenido y automatiza atención al cliente",
      en: "Create content and automate customer support"
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
  },
  {
    id: "4",
    name: "Canva",
    description: {
      es: "Diseña posts y materiales sin ser diseñador",
      en: "Design posts and materials without being a designer"
    },
    category: "design",
    price: {
      es: "Gratis + $15/mes",
      en: "Free + $15/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/C/canva-logo-B4BE25729A-seeklogo.com.png",
    slug: "canva",
    featured: true,
    url: "https://canva.com"
  },
  {
    id: "5",
    name: "Figma",
    description: {
      es: "Diseña interfaces y prototipos colaborativos",
      en: "Design interfaces and collaborative prototypes"
    },
    category: "design",
    price: {
      es: "Gratis + $12/mes",
      en: "Free + $12/month"
    },
    difficulty: "intermediate",
    logo: "https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png",
    slug: "figma",
    featured: false,
    url: "https://figma.com"
  },
  {
    id: "6",
    name: "Midjourney",
    description: {
      es: "Genera imágenes profesionales con AI",
      en: "Generate professional images with AI"
    },
    category: "design",
    price: {
      es: "$10/mes",
      en: "$10/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/M/midjourney-logo-19DD771773-seeklogo.com.png",
    slug: "midjourney",
    featured: true,
    url: "https://midjourney.com"
  },
  {
    id: "7",
    name: "HubSpot",
    description: {
      es: "Gestiona clientes y ventas desde un lugar",
      en: "Manage customers and sales from one place"
    },
    category: "sales",
    price: {
      es: "Gratis + $50/mes",
      en: "Free + $50/month"
    },
    difficulty: "intermediate",
    logo: "https://seeklogo.com/images/H/hubspot-logo-A06A6E0EB9-seeklogo.com.png",
    slug: "hubspot",
    featured: true,
    url: "https://hubspot.com"
  },
  {
    id: "8",
    name: "Pipedrive",
    description: {
      es: "CRM simple para equipos de ventas",
      en: "Simple CRM for sales teams"
    },
    category: "sales",
    price: {
      es: "$15/mes",
      en: "$15/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/P/pipedrive-logo-D382A4C085-seeklogo.com.png",
    slug: "pipedrive",
    featured: false,
    url: "https://pipedrive.com"
  },
  {
    id: "9",
    name: "Calendly",
    description: {
      es: "Automatiza la programación de reuniones",
      en: "Automate meeting scheduling"
    },
    category: "sales",
    price: {
      es: "Gratis + $8/mes",
      en: "Free + $8/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/C/calendly-logo-6C1BECE6D8-seeklogo.com.png",
    slug: "calendly",
    featured: false,
    url: "https://calendly.com"
  },
  {
    id: "10",
    name: "Zapier",
    description: {
      es: "Conecta herramientas y automatiza tareas",
      en: "Connect tools and automate tasks"
    },
    category: "automation",
    price: {
      es: "Gratis + $30/mes",
      en: "Free + $30/month"
    },
    difficulty: "intermediate",
    logo: "https://seeklogo.com/images/Z/zapier-logo-BD3656B013-seeklogo.com.png",
    slug: "zapier",
    featured: true,
    url: "https://zapier.com"
  },
  {
    id: "11",
    name: "Make",
    description: {
      es: "Automatización visual sin código",
      en: "Visual automation without code"
    },
    category: "automation",
    price: {
      es: "Gratis + $9/mes",
      en: "Free + $9/month"
    },
    difficulty: "intermediate",
    logo: "https://seeklogo.com/images/M/make-logo-367A31D555-seeklogo.com.png",
    slug: "make",
    featured: false,
    url: "https://make.com"
  },
  {
    id: "12",
    name: "IFTTT",
    description: {
      es: "Automatizaciones simples entre apps",
      en: "Simple automations between apps"
    },
    category: "automation",
    price: {
      es: "Gratis + $3/mes",
      en: "Free + $3/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/I/ifttt-logo-844DF26108-seeklogo.com.png",
    slug: "ifttt",
    featured: false,
    url: "https://ifttt.com"
  },
  {
    id: "13",
    name: "Google Analytics",
    description: {
      es: "Analiza el tráfico de tu sitio web",
      en: "Analyze your website traffic"
    },
    category: "analytics",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://seeklogo.com/images/G/google-analytics-logo-357AE1D4C4-seeklogo.com.png",
    slug: "google-analytics",
    featured: true,
    url: "https://analytics.google.com"
  },
  {
    id: "14",
    name: "Hotjar",
    description: {
      es: "Visualiza el comportamiento de tus usuarios",
      en: "Visualize your users' behavior"
    },
    category: "analytics",
    price: {
      es: "Gratis + $39/mes",
      en: "Free + $39/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/H/hotjar-logo-EFEECEECEC-seeklogo.com.png",
    slug: "hotjar",
    featured: false,
    url: "https://hotjar.com"
  },
  {
    id: "15",
    name: "Metabase",
    description: {
      es: "Crea dashboards y reportes personalizados",
      en: "Create custom dashboards and reports"
    },
    category: "analytics",
    price: {
      es: "Gratis + $85/mes",
      en: "Free + $85/month"
    },
    difficulty: "advanced",
    logo: "https://seeklogo.com/images/M/metabase-logo-606B6E7F5B-seeklogo.com.png",
    slug: "metabase",
    featured: false,
    url: "https://metabase.com"
  }
];

export default tools;
