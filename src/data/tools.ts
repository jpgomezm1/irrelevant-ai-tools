import { ToolCard } from "../types";

const tools: ToolCard[] = [
  {
    id: "1",
    name: "irrelevant",
    tags: ["Top"],
    description: {
      es: "Automatiza tareas repetitivas y libera tiempo valioso para tu negocio",
      en: "Automate repetitive tasks and free up valuable time for your business"
    },
    detailedDescription: {
      es: "irrelevant es una agencia de automatización e inteligencia artificial que desarrolla soluciones a medida para pequeñas y medianas empresas en LATAM. Ayuda a optimizar procesos operativos, ahorrar tiempo y tomar decisiones más inteligentes, sin necesidad de conocimientos técnicos.",
      en: "irrelevant is an automation and AI agency that builds custom solutions for small and medium-sized businesses in LATAM. It helps optimize operations, save time, and make smarter decisions—no technical skills required."
    },
    useCases: {
      es: [
        "Automatización de procesos manuales con IA",
        "Generación automática de documentos (certificados, reportes, etc.)",
        "Extracción y análisis de datos desde WhatsApp o correos",
        "Clasificación de leads según intención de compra",
        "Integración de flujos con herramientas como Google Sheets, Zapier o Make",
        "Auditoría AI gratuita para detectar tareas automatizables"
      ],
      en: [
        "AI-powered automation of manual processes",
        "Automatic document generation (certificates, reports, etc.)",
        "Data extraction and analysis from WhatsApp or emails",
        "Lead classification based on purchase intent",
        "Workflow integration with tools like Google Sheets, Zapier, or Make",
        "Free AI audit to identify automatable tasks"
      ]
    },
    resources: {
      es: [
        {
          title: "Ejemplos reales de automatizaciones con IA",
          url: "https://www.instagram.com/lucca.co_/",
          type: "video",
          description: "Casos reales donde irrelevant ha optimizado procesos usando IA"
        },
        {
          title: "Landing oficial de soluciones irrelevant",
          url: "https://stayirrelevant.com",
          type: "article",
          description: "Descubre cómo irrelevant automatiza tareas irrelevantes para que puedas enfocarte en lo importante"
        },
        {
          title: "Guía para PYMES: ¿Qué tareas puedes automatizar ya?",
          url: "https://irrelevant.notion.site",
          type: "course",
          description: "Una hoja de ruta clara para que las empresas no técnicas empiecen con IA"
        }
      ],
      en: [
        {
          title: "Real examples of AI automations",
          url: "https://www.instagram.com/lucca.co_/",
          type: "video",
          description: "Real-world use cases where irrelevant optimized processes using AI"
        },
        {
          title: "Official automation solutions landing",
          url: "https://stayirrelevant.com",
          type: "article",
          description: "Discover how irrelevant automates irrelevant tasks so you can focus on growth"
        },
        {
          title: "SMB Guide: What tasks can you automate today?",
          url: "https://irrelevant.notion.site",
          type: "course",
          description: "A clear roadmap for non-technical businesses to get started with AI"
        }
      ]
    },
    category: "automation",
    price: {
      es: "Desde $0 hasta proyectos personalizados",
      en: "From $0 to custom project pricing"
    },
    difficulty: "beginner",
    logo: "https://storage.googleapis.com/cluvi/agent007.png",
    slug: "irrelevant",
    featured: true,
    url: "https://stayirrelevant.com"
  },


  {
    id: "2",
    name: "ChatGPT",
    tags: ["Top"],
    description: {
      es: "Modelo de lenguaje avanzado que entiende y genera texto de forma natural",
      en: "Advanced language model that understands and generates human-like text"
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
    category: "dairy",
    price: {
      es: "Desde $20/mes",
      en: "From $20/month"
    },
    difficulty: "beginner",
    logo: "https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png",
    slug: "chatgpt",
    featured: true,
    url: "https://chat.openai.com"
  },
  {
    id: "3",
    name: "Jasper AI",
    description: {
      es: "Genera textos de marketing de alta calidad para cualquier plataforma",
      en: "Generate high-quality marketing texts for any platform"
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
    category: "marketing",
    price: {
      es: "$49/mes",
      en: "$49/month"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/jasper-seeklogo.png",
    slug: "jasper",
    featured: true,
    url: "https://jasper.ai"
  },
  {
    id: "4",
    name: "Copy.ai",
    description: {
      es: "Plataforma de IA para crear contenido y automatizar flujos de trabajo comerciales",
      en: "AI platform for content creation and business workflow automation"
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
    category: "marketing",
    price: {
      es: "Gratis + $36/mes",
      en: "Free + $36/month"
    },
    difficulty: "beginner",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/644156df288f8ecdcca32e6b.png",
    slug: "copy-ai",
    featured: false,
    url: "https://copy.ai"
  },
  {
    id: "5",
    name: "Napkin AI",
    description: {
      es: "Convierte texto en diagramas visuales impactantes",
      en: "Turn text into impactful visual diagrams"
    },
    detailedDescription: {
      es: "Napkin AI es una herramienta de inteligencia artificial que transforma texto en visualizaciones como diagramas de flujo, mapas mentales e infografías. Ideal para presentaciones, educación y marketing, permite crear contenido visual atractivo sin necesidad de habilidades de diseño.",
      en: "Napkin AI is an artificial intelligence tool that transforms text into visualizations such as flowcharts, mind maps, and infographics. Ideal for presentations, education, and marketing, it enables the creation of engaging visual content without the need for design skills."
    },
    useCases: {
      es: [
        "Creación de diagramas para presentaciones empresariales",
        "Generación de mapas conceptuales para clases o talleres",
        "Transformación de ideas complejas en visuales comprensibles",
        "Diseño de infografías para redes sociales o blogs",
        "Documentación visual de procesos o flujos de trabajo",
        "Apoyo visual para estrategias de marketing de contenido"
      ],
      en: [
        "Creating diagrams for business presentations",
        "Generating concept maps for classes or workshops",
        "Transforming complex ideas into understandable visuals",
        "Designing infographics for social media or blogs",
        "Visual documentation of processes or workflows",
        "Visual support for content marketing strategies"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial: Cómo usar Napkin AI para crear diagramas en segundos",
          url: "https://www.youtube.com/watch?v=-W0vyAFW2iM",
          type: "video",
          description: "Aprende a utilizar Napkin AI para transformar texto en visuales impactantes rápidamente."
        },
        {
          title: "Guía de inicio de Napkin AI",
          url: "https://help.napkin.ai/en/articles/9991710-getting-started-with-napkin-ai",
          type: "tutorial",
          description: "Pasos esenciales para comenzar a generar visuales con Napkin AI."
        },
        {
          title: "Napkin AI: Transforma textos en visuales",
          url: "https://es.vidnoz.com/inteligencia-artificial/napkin-ai-transforma-textos-en-visuales.html",
          type: "article",
          description: "Descubre cómo Napkin AI convierte texto en infografías y diagramas de manera automatizada."
        }
      ],
      en: [
        {
          title: "Napkin AI Tutorial: Create Stunning Diagrams & Infographics with AI",
          url: "https://www.youtube.com/watch?v=5LOOPFfUV3I",
          type: "video",
          description: "Learn how to use Napkin AI to create impressive diagrams and infographics effortlessly."
        },
        {
          title: "Getting Started with Napkin AI",
          url: "https://help.napkin.ai/en/articles/9991710-getting-started-with-napkin-ai",
          type: "tutorial",
          description: "Essential steps to start generating visuals with Napkin AI."
        },
        {
          title: "Napkin AI: Create Engaging Visuals from Text in Seconds",
          url: "https://medium.com/data-science-perspective/napkin-ai-create-engaging-visuals-from-text-in-seconds-a84e017dad87",
          type: "article",
          description: "Explore how Napkin AI transforms text into engaging visual content swiftly."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis (Beta)",
      en: "Free (Beta)"
    },
    difficulty: "beginner",
    logo: "https://www.napkin.ai/favicon.ico",
    slug: "napkin-ai",
    featured: false,
    url: "https://www.napkin.ai"
  },
  {
    id: "6",
    name: "Rows AI",
    description: {
      es: "Automatiza reportes, análisis y visualizaciones desde una hoja de cálculo con IA integrada",
      en: "Automate reports, analysis, and visualizations from a spreadsheet with built-in AI"
    },
    detailedDescription: {
      es: "Rows AI es una hoja de cálculo moderna que integra inteligencia artificial para automatizar el análisis, resumen y visualización de datos. Con su función 'AI Analyst', permite realizar consultas en lenguaje natural, generar gráficos y obtener insights sin necesidad de fórmulas complejas.",
      en: "Rows AI is a modern spreadsheet that integrates artificial intelligence to automate data analysis, summarization, and visualization. With its 'AI Analyst' feature, it allows natural language queries, generates charts, and provides insights without complex formulas."
    },
    useCases: {
      es: [
        "Análisis de encuestas y comentarios de clientes",
        "Generación automática de reportes financieros",
        "Clasificación de datos de redes sociales",
        "Creación de dashboards interactivos",
        "Automatización de tareas repetitivas en hojas de cálculo",
        "Integración de datos desde múltiples fuentes"
      ],
      en: [
        "Analysis of surveys and customer feedback",
        "Automatic generation of financial reports",
        "Classification of social media data",
        "Creation of interactive dashboards",
        "Automation of repetitive spreadsheet tasks",
        "Integration of data from multiple sources"
      ]
    },
    resources: {
      es: [
        {
          title: "Conoce Rows AI: La hoja de cálculo con inteligencia artificial",
          url: "https://www.youtube.com/watch?v=ZsZyBNq_5pQ",
          type: "video",
          description: "Descubre cómo Rows AI puede revolucionar tu análisis de datos."
        },
        {
          title: "Rows AI: Analiza y transforma datos con inteligencia artificial",
          url: "https://www.navto.ai/es/rows-ai",
          type: "article",
          description: "Explora las características y casos de uso de Rows AI."
        },
        {
          title: "Rows AI: La herramienta de IA que quiere sustituir a Excel",
          url: "https://www.inesem.es/revistadigital/informatica-y-tics/rows-ia-sustituye-excel/",
          type: "article",
          description: "Analiza cómo Rows AI se posiciona como alternativa a Excel."
        }
      ],
      en: [
        {
          title: "Using the AI Analyst | Rows",
          url: "https://rows.com/docs/using-the-rows-ai-analyst",
          type: "tutorial",
          description: "Learn how to leverage the AI Analyst feature in Rows."
        },
        {
          title: "The new way to spreadsheet - Rows",
          url: "https://rows.com/product",
          type: "article",
          description: "Discover how Rows is transforming spreadsheets with AI."
        },
        {
          title: "Rows AI: The Power of AI in Spreadsheets",
          url: "https://guidady.com/rows-ai/",
          type: "article",
          description: "Explore the capabilities of Rows AI in modern data analysis."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis (limitado) / Desde $59/mes",
      en: "Free (limited) / From $59/month"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/rows.png",
    slug: "rows-ai",
    featured: false,
    url: "https://rows.com"
  },
  {
    id: "7",
    name: "Letterly",
    description: {
      es: "Convierte tu voz en texto estructurado y pulido con IA, ideal para notas, correos y contenido",
      en: "Turn your voice into structured, polished text with AI—perfect for notes, emails, and content"
    },
    detailedDescription: {
      es: "Letterly es una aplicación impulsada por inteligencia artificial que transforma tu voz en texto claro y bien estructurado. Más que una simple herramienta de transcripción, Letterly permite crear notas, correos electrónicos, publicaciones en redes sociales y diarios personales con facilidad. Con más de 25 opciones de reescritura y soporte para más de 90 idiomas, es ideal para profesionales, creadores de contenido y cualquier persona que desee capturar ideas rápidamente.",
      en: "Letterly is an AI-powered app that transforms your voice into clear, well-structured text. More than just a transcription tool, Letterly enables you to create notes, emails, social media posts, and personal journals with ease. With over 25 rewrite options and support for over 90 languages, it's perfect for professionals, content creators, and anyone looking to capture ideas quickly."
    },
    useCases: {
      es: [
        "Tomar notas rápidas de ideas, listas de tareas y recordatorios",
        "Redactar correos electrónicos y mensajes sin escribir",
        "Crear contenido para redes sociales a partir de grabaciones de voz",
        "Llevar un diario personal mediante dictado",
        "Traducir y reescribir texto en múltiples idiomas",
        "Organizar pensamientos y estructurar textos complejos"
      ],
      en: [
        "Quickly jot down ideas, to-do lists, and reminders",
        "Draft emails and messages without typing",
        "Create social media content from voice recordings",
        "Maintain a personal journal through dictation",
        "Translate and rewrite text in multiple languages",
        "Organize thoughts and structure complex texts"
      ]
    },
    resources: {
      es: [
        {
          title: "Cómo usar Letterly para transformar tu voz en texto",
          url: "https://www.youtube.com/watch?v=LetterlyDemoES",
          type: "video",
          description: "Tutorial en español sobre cómo aprovechar Letterly para mejorar tu productividad."
        },
        {
          title: "Guía de inicio rápido de Letterly",
          url: "https://letterly.app/",
          type: "tutorial",
          description: "Aprende a configurar y utilizar Letterly en tus dispositivos."
        },
        {
          title: "Reseña de Letterly: Transforma tu voz en texto claro",
          url: "https://www.linkedin.com/pulse/letterly-ai-review-turn-your-speech-well-written-text-sobuj-bhybf",
          type: "article",
          description: "Análisis detallado de las capacidades de Letterly y su impacto en la productividad."
        }
      ],
      en: [
        {
          title: "How to Use Letterly to Transform Your Voice into Text",
          url: "https://www.youtube.com/watch?v=LetterlyDemoEN",
          type: "video",
          description: "English tutorial on leveraging Letterly to enhance your productivity."
        },
        {
          title: "Letterly Quick Start Guide",
          url: "https://letterly.app/",
          type: "tutorial",
          description: "Learn how to set up and use Letterly across your devices."
        },
        {
          title: "Letterly AI Review: Turn Your Speech into Well-Written Text",
          url: "https://www.linkedin.com/pulse/letterly-ai-review-turn-your-speech-well-written-text-sobuj-bhybf",
          type: "article",
          description: "In-depth analysis of Letterly's capabilities and its impact on productivity."
        }
      ]
    },
    category: "voice",
    price: {
      es: "Gratis / Desde $9/mes o $70/año",
      en: "Free / From $9/month or $70/year"
    },
    difficulty: "beginner",
    logo: "https://letterly.app/favicon.ico",
    slug: "letterly",
    featured: false,
    url: "https://letterly.app"
  },
  {
    id: "8",
    tags: ["Top"],
    name: "Replit",
    description: {
      es: "Crea, despliega y colabora en aplicaciones desde el navegador con IA integrada",
      en: "Build, deploy, and collaborate on apps from the browser with integrated AI"
    },
    detailedDescription: {
      es: "Replit es una plataforma de desarrollo en la nube que permite a usuarios de todos los niveles crear aplicaciones completas directamente desde el navegador. Con herramientas impulsadas por inteligencia artificial como Replit Agent y Assistant, puedes generar código, depurar errores y desplegar aplicaciones sin necesidad de configurar entornos locales. Su enfoque en la 'programación por vibras' facilita la creación de software mediante instrucciones en lenguaje natural, democratizando el acceso al desarrollo de software.",
      en: "Replit is a cloud-based development platform that enables users of all levels to build complete applications directly from the browser. With AI-powered tools like Replit Agent and Assistant, you can generate code, debug errors, and deploy applications without setting up local environments. Its focus on 'vibe coding' simplifies software creation through natural language instructions, democratizing access to software development."
    },
    useCases: {
      es: [
        "Desarrollo rápido de prototipos y MVPs",
        "Creación de aplicaciones web y móviles sin configuración local",
        "Colaboración en tiempo real en proyectos de código",
        "Automatización de tareas mediante scripts",
        "Aprendizaje y enseñanza de programación",
        "Despliegue continuo de aplicaciones en la nube"
      ],
      en: [
        "Rapid prototyping and MVP development",
        "Building web and mobile apps without local setup",
        "Real-time collaboration on coding projects",
        "Task automation through scripting",
        "Learning and teaching programming",
        "Continuous deployment of cloud applications"
      ]
    },
    resources: {
      es: [
        {
          title: "Introducción a Replit: Programa desde tu navegador",
          url: "https://www.youtube.com/watch?v=tvNSKh3CmFA",
          type: "video",
          description: "Aprende cómo comenzar a programar en Replit sin necesidad de instalaciones locales."
        },
        {
          title: "Guía oficial de Replit",
          url: "https://docs.replit.com/",
          type: "tutorial",
          description: "Documentación completa para aprovechar al máximo las funcionalidades de Replit."
        },
        {
          title: "Replit: El futuro de la programación en la nube",
          url: "https://es.linkedin.com/pulse/el-futuro-de-la-programaci%C3%B3n-con-replit-e2e-peru-0uhce",
          type: "article",
          description: "Análisis sobre cómo Replit está transformando el desarrollo de software."
        }
      ],
      en: [
        {
          title: "How To Use Replit Agent For Beginners",
          url: "https://www.youtube.com/watch?v=VXrVVUPst0w",
          type: "video",
          description: "Learn how to leverage Replit Agent to build applications efficiently."
        },
        {
          title: "Replit AI: The AI-Powered Development Platform",
          url: "https://medium.com/@tahirbalarabe2/what-is-replit-ai-the-ai-powered-development-platform-46997a5124e5",
          type: "article",
          description: "Explore the capabilities of Replit's AI tools in modern software development."
        },
        {
          title: "Replit AI Agent: A Guide With Practical Examples",
          url: "https://www.datacamp.com/tutorial/replit-agent-ai-code-editor",
          type: "tutorial",
          description: "Step-by-step guide on using Replit Agent for coding tasks."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Gratis / Desde $20/mes",
      en: "Free / From $20/month"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/replit.png",
    slug: "replit",
    featured: true,
    url: "https://replit.com"
  },
  {
    id: "9",
    name: "Bolt AI",
    description: {
      es: "Crea y despliega aplicaciones web completas desde tu navegador usando solo prompts en lenguaje natural",
      en: "Build and deploy full-stack web apps from your browser using natural language prompts"
    },
    detailedDescription: {
      es: "BoltAI es una aplicación nativa de alto rendimiento para macOS que permite integrar inteligencia artificial en cualquier flujo de trabajo. Compatible con modelos como OpenAI, Anthropic, Mistral, Perplexity y más, ofrece funciones como comandos en línea, asistentes personalizados, generación de imágenes y análisis de código. Su diseño centrado en la privacidad y su integración profunda con el sistema lo convierten en una herramienta ideal para desarrolladores, creadores de contenido y profesionales que buscan potenciar su productividad con IA.",
      en: "BoltAI is a high-performance native macOS application that enables AI integration into any workflow. Compatible with models such as OpenAI, Anthropic, Mistral, Perplexity, and more, it offers features like inline commands, custom assistants, image generation, and code analysis. Its privacy-focused design and deep system integration make it an ideal tool for developers, content creators, and professionals aiming to enhance their productivity with AI."
    },
    useCases: {
      es: [
        "Asistencia de codificación directamente en el IDE",
        "Redacción y edición de contenido en aplicaciones de texto",
        "Generación de imágenes mediante modelos como DALL·E o Stable Diffusion",
        "Creación de asistentes personalizados para tareas específicas",
        "Análisis y resumen de documentos extensos",
        "Automatización de respuestas en correos electrónicos y chats"
      ],
      en: [
        "Coding assistance directly within the IDE",
        "Writing and editing content in text applications",
        "Image generation using models like DALL·E or Stable Diffusion",
        "Creating custom assistants for specific tasks",
        "Analyzing and summarizing lengthy documents",
        "Automating responses in emails and chats"
      ]
    },
    resources: {
      es: [
        {
          title: "BoltAI en Setapp: Escribe, programa y aprende con la IA",
          url: "https://setapp.com/es/apps/boltai",
          type: "article",
          description: "Descubre cómo BoltAI puede mejorar tu productividad en macOS."
        },
        {
          title: "BoltAI: Fast AI Chat Client",
          url: "https://play.google.com/store/apps/details?id=co.podzim.boltaimobile",
          type: "app",
          description: "Aplicación móvil de BoltAI para integrar IA en tus tareas diarias."
        },
        {
          title: "BoltAI - Recursos AI",
          url: "https://recursos.ai/boltai/",
          type: "article",
          description: "Análisis detallado de las capacidades y características de BoltAI."
        }
      ],
      en: [
        {
          title: "BoltAI Official Website",
          url: "https://boltai.com/",
          type: "website",
          description: "Learn more about BoltAI's features and download the application."
        },
        {
          title: "How to Use BoltAI in Visual Studio Code",
          url: "https://boltai.com/help/how-to-use-boltai-in-vscode",
          type: "tutorial",
          description: "Guide on integrating BoltAI with Visual Studio Code for enhanced coding assistance."
        },
        {
          title: "BoltAI: Fast AI Chat Client",
          url: "https://play.google.com/store/apps/details?id=co.podzim.boltaimobile",
          type: "app",
          description: "BoltAI's mobile application to integrate AI into your daily tasks."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Licencia perpetua desde $69 USD",
      en: "Perpetual license from $69 USD"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/bolt.jpg",
    slug: "boltai",
    featured: false,
    url: "https://bolt.new/"
  },
  {
    id: "10",
    name: "Fireflies.ai",
    description: {
      es: "Transcribe, resume y analiza reuniones automáticamente con IA, integrándose con tus herramientas favoritas",
      en: "Automatically transcribe, summarize, and analyze meetings with AI, integrating with your favorite tools"
    },
    detailedDescription: {
      es: "Fireflies.ai es un asistente de reuniones impulsado por inteligencia artificial que graba, transcribe y resume conversaciones de voz en plataformas como Zoom, Google Meet y Microsoft Teams. Además, permite buscar y analizar reuniones anteriores, colaborar con compañeros mediante comentarios y reacciones, y se integra con aplicaciones como Slack, Notion y Asana para automatizar flujos de trabajo.",
      en: "Fireflies.ai is an AI-powered meeting assistant that records, transcribes, and summarizes voice conversations on platforms like Zoom, Google Meet, and Microsoft Teams. It also enables searching and analyzing past meetings, collaborating with teammates through comments and reactions, and integrates with apps like Slack, Notion, and Asana to automate workflows."
    },
    useCases: {
      es: [
        "Transcripción automática de reuniones en múltiples plataformas",
        "Resumen de puntos clave y elementos de acción",
        "Búsqueda inteligente en conversaciones anteriores",
        "Colaboración mediante comentarios y reacciones en transcripciones",
        "Integración con herramientas como Asana para crear tareas desde reuniones",
        "Análisis de métricas de conversación como tiempo de habla y sentimiento"
      ],
      en: [
        "Automatic transcription of meetings across multiple platforms",
        "Summarization of key points and action items",
        "Intelligent search through past conversations",
        "Collaboration via comments and reactions on transcripts",
        "Integration with tools like Asana to create tasks from meetings",
        "Analysis of conversation metrics like talk time and sentiment"
      ]
    },
    resources: {
      es: [
        {
          title: "Conoce todo sobre Fireflies.ai la herramienta de anotador con inteligencia artificial",
          url: "https://www.youtube.com/watch?v=d_iPmTO0Dpo",
          type: "video",
          description: "Video explicativo sobre cómo Fireflies.ai puede ayudarte a transcribir y analizar reuniones."
        },
        {
          title: "Detalles de Fireflies.ai la app que ayuda a transcribir reuniones",
          url: "https://mundour.com/2024/02/14/conoce-los-detalles-de-fireflies-ai-la-aplicacion-que-te-ayuda-a-transcribir-resumir-y-analizar-reuniones/",
          type: "article",
          description: "Artículo detallado sobre las funcionalidades y beneficios de Fireflies.ai."
        },
        {
          title: "Fireflies.ai + Asana",
          url: "https://asana.com/apps/fireflies",
          type: "tutorial",
          description: "Guía sobre cómo integrar Fireflies.ai con Asana para automatizar la creación de tareas desde reuniones."
        }
      ],
      en: [
        {
          title: "Fireflies.ai Tasks Launch",
          url: "https://www.youtube.com/watch?v=D9GvjlOm_24",
          type: "video",
          description: "Overview of Fireflies.ai's task creation feature from meetings."
        },
        {
          title: "Fireflies.ai + Asana Integration",
          url: "https://asana.com/apps/fireflies",
          type: "tutorial",
          description: "Guide on integrating Fireflies.ai with Asana to automate task creation from meetings."
        },
        {
          title: "Fireflies.ai Official Website",
          url: "https://fireflies.ai/",
          type: "article",
          description: "Official website with detailed information on features and integrations."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Gratis / Planes desde $10/mes",
      en: "Free / Plans from $10/month"
    },
    difficulty: "beginner",
    logo: "https://fireflies.ai/favicon.ico",
    slug: "fireflies-ai",
    featured: false,
    url: "https://fireflies.ai"
  },
  {
    id: "11",
    tags: ["Top", "irrelevant"],
    name: "NotebookLM",
    description: {
      es: "Asistente de IA que lee tus documentos o cualquier fuente en respuestas personalizadas",
      en: "AI assistant that transforms your documents or any source into personalized answers"
    },
    detailedDescription: {
      es: "NotebookLM es una herramienta de Google impulsada por IA que convierte tus documentos en un asistente de investigación personalizado. Puedes cargar PDFs, Google Docs, enlaces web o videos de YouTube, y la IA generará resúmenes, responderá preguntas y creará podcasts conversacionales. Con funciones como Audio Overviews y Video Overviews, permite comprender y estudiar contenidos complejos de manera más accesible. Disponible en versión web y como aplicación móvil para Android e iOS.",
      en: "NotebookLM is a Google AI-powered tool that turns your documents into a personalized research assistant. You can upload PDFs, Google Docs, web links, or YouTube videos, and the AI will generate summaries, answer questions, and create conversational podcasts. With features like Audio Overviews and Video Overviews, it enables more accessible understanding and study of complex content. Available as a web version and as a mobile app for Android and iOS."
    },
    useCases: {
      es: [
        "Resumir y estudiar documentos extensos",
        "Crear podcasts personalizados a partir de tus notas",
        "Responder preguntas específicas sobre tus fuentes",
        "Organizar y explorar múltiples documentos",
        "Generar guías de estudio y líneas de tiempo",
        "Acceder a resúmenes en formato de audio o video"
      ],
      en: [
        "Summarizing and studying lengthy documents",
        "Creating personalized podcasts from your notes",
        "Answering specific questions about your sources",
        "Organizing and exploring multiple documents",
        "Generating study guides and timelines",
        "Accessing summaries in audio or video format"
      ]
    },
    resources: {
      es: [
        {
          title: "Google Notebook LM Tutorial - Conviértete en un usuario avanzado en 15 minutos",
          url: "https://www.youtube.com/watch?v=UG0DP6nVnrc",
          type: "video",
          description: "Tutorial paso a paso para aprovechar al máximo NotebookLM."
        },
        {
          title: "Guía oficial de NotebookLM",
          url: "https://notebooklm.google/",
          type: "tutorial",
          description: "Sitio oficial con información y acceso a NotebookLM."
        },
        {
          title: "Google presenta Notebook LM, la IA perfecta para los estudiantes",
          url: "https://www.pasionmovil.com/inteligencia-artificial/google-presenta-notebook-lm-la-ia-perfecta-para-los-estudiantes/",
          type: "article",
          description: "Artículo que destaca las funciones de NotebookLM para estudiantes."
        }
      ],
      en: [
        {
          title: "Google Notebook LM Tutorial - Become A Power User in 15 min",
          url: "https://www.youtube.com/watch?v=UG0DP6nVnrc",
          type: "video",
          description: "Step-by-step tutorial to make the most of NotebookLM."
        },
        {
          title: "Official NotebookLM Guide",
          url: "https://notebooklm.google/",
          type: "tutorial",
          description: "Official site with information and access to NotebookLM."
        },
        {
          title: "Google Launches NotebookLM App with Gemini AI Integration",
          url: "https://www.techtimes.com/articles/310394/20250520/google-launches-notebooklm-app-gemini-ai-integration.htm",
          type: "article",
          description: "Article highlighting NotebookLM's features and Gemini AI integration."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/notelm.png",
    slug: "notebooklm",
    featured: false,
    url: "https://notebooklm.google/"
  },
  {
    id: "12",
    name: "Notion",
    tags: ["irrelevant"],
    description: {
      es: "Organiza tus ideas, proyectos y documentos en un solo lugar con IA integrada",
      en: "Organize your ideas, projects, and documents in one place with integrated AI"
    },
    detailedDescription: {
      es: "Notion es una plataforma todo-en-uno que combina notas, bases de datos, wikis, tareas y calendarios en una interfaz flexible y colaborativa. Con la integración de Notion AI, puedes generar contenido, resumir textos, traducir, corregir gramática y obtener respuestas contextuales directamente dentro de tus páginas. Además, se conecta con herramientas como Slack, Google Drive y más, facilitando la gestión de proyectos y la productividad personal o en equipo.",
      en: "Notion is an all-in-one workspace that combines notes, databases, wikis, tasks, and calendars in a flexible and collaborative interface. With Notion AI integration, you can generate content, summarize texts, translate, correct grammar, and get contextual answers directly within your pages. It also connects with tools like Slack, Google Drive, and more, making project management and personal or team productivity easier."
    },
    useCases: {
      es: [
        "Redacción y edición de contenido con asistencia de IA",
        "Gestión de proyectos y tareas en equipo",
        "Creación de wikis y documentación interna",
        "Organización de notas y bases de datos personales",
        "Automatización de resúmenes y traducciones de textos",
        "Integración de calendarios y herramientas externas"
      ],
      en: [
        "Writing and editing content with AI assistance",
        "Team project and task management",
        "Creating wikis and internal documentation",
        "Organizing personal notes and databases",
        "Automating text summaries and translations",
        "Integrating calendars and external tools"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía completa de Notion AI",
          url: "https://www.youtube.com/watch?v=Fu_f1gwKKfQ",
          type: "video",
          description: "Aprende a utilizar las funciones de inteligencia artificial en Notion para mejorar tu productividad."
        },
        {
          title: "Plantillas de productividad personal en Notion",
          url: "https://www.notion.so/es-es/templates/category/personal-productivity",
          type: "article",
          description: "Explora plantillas diseñadas para ayudarte a organizar tu vida personal y profesional."
        },
        {
          title: "Cómo usar Notion AI para mejorar tu flujo de trabajo",
          url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
          type: "tutorial",
          description: "Descubre las diferentes formas en que Notion AI puede asistirte en tus tareas diarias."
        }
      ],
      en: [
        {
          title: "Everything you can do with Notion AI",
          url: "https://www.notion.com/help/guides/everything-you-can-do-with-notion-ai",
          type: "tutorial",
          description: "Learn about the various ways Notion AI can assist you in your daily tasks."
        },
        {
          title: "Notion AI: A Full Review & Guide",
          url: "https://www.elegantthemes.com/blog/business/notion-ai-review",
          type: "article",
          description: "An in-depth review of Notion AI's features and how to make the most of them."
        },
        {
          title: "Notion AI Tutorial: Is It Really Worth It?",
          url: "https://www.youtube.com/watch?v=SnbMRRZ2_Ag",
          type: "video",
          description: "A comprehensive tutorial on using Notion AI and evaluating its value."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis / Planes desde $8/mes",
      en: "Free / Plans from $8/month"
    },
    difficulty: "beginner",
    logo: "https://www.notion.so/images/favicon.ico",
    slug: "notion",
    featured: true,
    url: "https://www.notion.so"
  },
  {
    id: "13",
    name: "Claude",
    tags: ["irrelevant"],
    description: {
      es: "Asistente de IA avanzado para redacción, programación, análisis y automatización de tareas complejas",
      en: "Advanced AI assistant for writing, coding, analysis, and complex task automation"
    },
    detailedDescription: {
      es: "Claude es un asistente de inteligencia artificial desarrollado por Anthropic, diseñado para ser útil, inofensivo y honesto. Utiliza modelos de lenguaje avanzados para generar texto, escribir código, analizar datos y automatizar tareas complejas. Claude es capaz de realizar razonamientos profundos y mantener conversaciones naturales, lo que lo convierte en una herramienta versátil para profesionales y empresas.",
      en: "Claude is an AI assistant developed by Anthropic, designed to be helpful, harmless, and honest. It leverages advanced language models to generate text, write code, analyze data, and automate complex tasks. Claude can perform deep reasoning and maintain natural conversations, making it a versatile tool for professionals and businesses."
    },
    useCases: {
      es: [
        "Redacción y edición de contenido creativo y técnico",
        "Generación y revisión de código en múltiples lenguajes de programación",
        "Análisis y resumen de documentos extensos",
        "Automatización de tareas administrativas y repetitivas",
        "Asistencia en investigación y recopilación de información",
        "Interacción conversacional para atención al cliente y soporte"
      ],
      en: [
        "Writing and editing creative and technical content",
        "Generating and reviewing code in multiple programming languages",
        "Analyzing and summarizing extensive documents",
        "Automating administrative and repetitive tasks",
        "Assisting in research and information gathering",
        "Conversational interaction for customer service and support"
      ]
    },
    resources: {
      es: [
        {
          title: "Introducción a Claude: Asistente de IA de Anthropic",
          url: "https://www.anthropic.com/claude",
          type: "article",
          description: "Conoce las capacidades y aplicaciones de Claude en diversos entornos profesionales."
        },
        {
          title: "Guía de uso de Claude para desarrolladores",
          url: "https://docs.anthropic.com/",
          type: "tutorial",
          description: "Aprende a integrar y utilizar Claude en tus proyectos mediante la API de Anthropic."
        },
        {
          title: "Comparativa entre Claude y otros asistentes de IA",
          url: "https://www.lifewire.com/how-to-use-claude-ai-8729845",
          type: "article",
          description: "Análisis de las diferencias y ventajas de Claude frente a otros modelos de lenguaje."
        }
      ],
      en: [
        {
          title: "Introducing Claude: Anthropic's AI Assistant",
          url: "https://www.anthropic.com/claude",
          type: "article",
          description: "Discover Claude's capabilities and applications across various professional settings."
        },
        {
          title: "Claude API Documentation",
          url: "https://docs.anthropic.com/",
          type: "tutorial",
          description: "Learn how to integrate and utilize Claude in your projects using Anthropic's API."
        },
        {
          title: "Claude AI Review: What You Need to Know",
          url: "https://www.fahimai.com/claude-ai",
          type: "article",
          description: "An in-depth review of Claude's features and performance compared to other AI assistants."
        }
      ]
    },
    category: "dairy",
    price: {
      es: "Desde $20/mes",
      en: "From $20/month"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/claude.png",
    slug: "claude",
    featured: true,
    url: "https://claude.ai"
  },
  {
    id: "14",
    tags: ["Top"],
    name: "Lovable",
    description: {
      es: "Crea aplicaciones web completas a partir de descripciones en lenguaje natural, sin necesidad de programar",
      en: "Build complete web applications from natural language descriptions, no coding required"
    },
    detailedDescription: {
      es: "Lovable es una plataforma impulsada por inteligencia artificial que permite a cualquier persona crear aplicaciones web funcionales simplemente describiendo su idea en lenguaje natural. Utiliza modelos avanzados como OpenAI y Anthropic para generar código frontend y backend, integrando bases de datos, autenticación y despliegue en la nube. Es ideal para emprendedores, diseñadores y equipos que buscan prototipar o lanzar productos rápidamente sin necesidad de conocimientos técnicos.",
      en: "Lovable is an AI-powered platform that enables anyone to create functional web applications by simply describing their idea in natural language. It leverages advanced models like OpenAI and Anthropic to generate frontend and backend code, integrating databases, authentication, and cloud deployment. It's ideal for entrepreneurs, designers, and teams looking to prototype or launch products quickly without technical expertise."
    },
    useCases: {
      es: [
        "Prototipado rápido de aplicaciones web para validar ideas de negocio",
        "Desarrollo de MVPs sin necesidad de contratar desarrolladores",
        "Creación de dashboards, tiendas online y landing pages personalizadas",
        "Integración de APIs como Stripe, OpenAI o Supabase sin escribir código",
        "Desarrollo colaborativo con integración a GitHub y control de versiones",
        "Despliegue de aplicaciones en la nube con dominio personalizado"
      ],
      en: [
        "Rapid prototyping of web applications to validate business ideas",
        "Developing MVPs without hiring developers",
        "Creating dashboards, online stores, and custom landing pages",
        "Integrating APIs like Stripe, OpenAI, or Supabase without coding",
        "Collaborative development with GitHub integration and version control",
        "Deploying applications to the cloud with custom domain support"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de inicio rápido de Lovable",
          url: "https://docs.lovable.dev/introduction",
          type: "tutorial",
          description: "Aprende a crear y desplegar tu primera aplicación con Lovable paso a paso."
        },
        {
          title: "Lovable: La plataforma de IA que construye apps en minutos",
          url: "https://medium.com/@eddyenos1/lovable-the-ai-powered-platform-that-builds-apps-in-minutes-60b2ae129919",
          type: "article",
          description: "Descubre cómo Lovable está revolucionando el desarrollo de software con inteligencia artificial."
        },
        {
          title: "Lovable AI: Guía definitiva para principiantes",
          url: "https://codeparrot.ai/blogs/lovable-ai-the-ultimate-beginner-guide",
          type: "article",
          description: "Una guía completa para comenzar a utilizar Lovable y crear aplicaciones web sin programar."
        }
      ],
      en: [
        {
          title: "Lovable AI: A Guide With Demo Project",
          url: "https://www.datacamp.com/tutorial/lovable-ai",
          type: "tutorial",
          description: "Learn how to build and publish a mobile app using Lovable AI, integrating it with Supabase and GitHub."
        },
        {
          title: "Lovable.dev - AI Web App Builder | Refine",
          url: "https://refine.dev/blog/lovable-ai/",
          type: "article",
          description: "An in-depth look at Lovable.dev's features, pricing, and real-world use cases."
        },
        {
          title: "Lovable Documentation: Welcome",
          url: "https://docs.lovable.dev/introduction",
          type: "tutorial",
          description: "Official documentation to get started with Lovable and explore its capabilities."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Gratis (limitado) / Desde $20/mes",
      en: "Free (limited) / From $20/month"
    },
    difficulty: "beginner",
    logo: "https://lovable.dev/favicon.ico",
    slug: "lovable",
    featured: false,
    url: "https://lovable.dev"
  },
  {
    id: "15",
    name: "Relevance AI",
    description: {
      es: "Construye equipos de agentes de IA sin código para automatizar tareas complejas.",
      en: "Build no-code AI agent teams to automate complex tasks."
    },
    detailedDescription: {
      es: "Relevance AI es una plataforma low-code que permite a empresas crear y gestionar agentes de inteligencia artificial capaces de ejecutar tareas complejas de forma autónoma. Con una interfaz intuitiva de arrastrar y soltar, los usuarios pueden diseñar flujos de trabajo personalizados, integrar múltiples herramientas y modelos de lenguaje, y desplegar agentes que colaboran entre sí para optimizar procesos en áreas como ventas, marketing, soporte al cliente y operaciones. La plataforma ofrece plantillas prediseñadas y se integra con herramientas empresariales populares como HubSpot, Salesforce y Google Workspace.",
      en: "Relevance AI is a low-code platform that enables businesses to create and manage AI agents capable of autonomously executing complex tasks. With an intuitive drag-and-drop interface, users can design custom workflows, integrate multiple tools and language models, and deploy agents that collaborate to optimize processes in areas such as sales, marketing, customer support, and operations. The platform offers pre-designed templates and integrates with popular business tools like HubSpot, Salesforce, and Google Workspace."
    },
    useCases: {
      es: [
        "Automatización de seguimiento y calificación de leads en ventas",
        "Generación de contenido personalizado para campañas de marketing",
        "Análisis y categorización de feedback de clientes",
        "Extracción y procesamiento de datos desde documentos PDF",
        "Gestión automatizada de bandejas de entrada y respuestas por correo electrónico",
        "Integración de agentes de IA con CRM y otras herramientas empresariales"
      ],
      en: [
        "Automating lead follow-up and qualification in sales",
        "Generating personalized content for marketing campaigns",
        "Analyzing and categorizing customer feedback",
        "Extracting and processing data from PDF documents",
        "Automated inbox management and email responses",
        "Integrating AI agents with CRM and other business tools"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial completo de Relevance AI",
          url: "https://www.youtube.com/watch?v=lks_GSr2O44",
          type: "video",
          description: "Aprende a crear agentes de IA y automatizar flujos de trabajo sin necesidad de programación."
        },
        {
          title: "Cómo funciona Relevance AI",
          url: "https://canvasbusinessmodel.com/es/blogs/how-it-works/relevance-ai-how-it-works",
          type: "article",
          description: "Descubre cómo Relevance AI revoluciona la automatización empresarial mediante agentes de IA."
        },
        {
          title: "Relevance AI: Crea tus propias herramientas en minutos",
          url: "https://www.youtube.com/watch?v=hMwh87fjEt0",
          type: "video",
          description: "Guía práctica para diseñar herramientas personalizadas con Relevance AI."
        }
      ],
      en: [
        {
          title: "Getting Started with Relevance AI",
          url: "https://relevanceai.com/docs/get-started/introduction",
          type: "tutorial",
          description: "Step-by-step guide to building and deploying AI agents using Relevance AI."
        },
        {
          title: "Relevance AI Overview",
          url: "https://relevanceai.com/",
          type: "article",
          description: "Comprehensive overview of Relevance AI's features and capabilities."
        },
        {
          title: "Relevance AI: Build Your Own Tools in Minutes",
          url: "https://www.youtube.com/watch?v=hMwh87fjEt0",
          type: "video",
          description: "Practical guide to designing custom tools with Relevance AI."
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Planes empresariales personalizados",
      en: "Custom enterprise plans"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/relevance.png",
    slug: "relevance-ai",
    featured: false,
    url: "https://relevanceai.com"
  },
  {
    id: "16",
    tags: ["irrelevant"],
    name: "Clay",
    description: {
      es: "Automatiza la prospección y el enriquecimiento de datos con IA",
      en: "Automate prospecting and data enrichment with AI"
    },
    detailedDescription: {
      es: "Clay es una plataforma de automatización de ventas impulsada por inteligencia artificial que permite a los equipos de crecimiento construir listas de prospectos, enriquecer datos desde más de 100 fuentes y generar mensajes personalizados a escala. Con funciones como enriquecimiento en cascada, agentes de investigación de IA y generación de copias personalizadas, Clay agiliza los flujos de trabajo de ventas y marketing, integrándose con herramientas como Salesforce, HubSpot y más.",
      en: "Clay is an AI-powered sales automation platform that enables growth teams to build prospect lists, enrich data from over 100 sources, and generate personalized messages at scale. With features like waterfall enrichment, AI research agents, and personalized copy generation, Clay streamlines sales and marketing workflows, integrating with tools like Salesforce, HubSpot, and more."
    },
    useCases: {
      es: [
        "Construcción automatizada de listas de prospectos con datos enriquecidos",
        "Envío de mensajes personalizados a gran escala",
        "Enriquecimiento y limpieza de datos en CRM",
        "Detección de señales de compra y cambios relevantes en cuentas",
        "Automatización de campañas de outbound marketing",
        "Investigación de mercado y análisis competitivo"
      ],
      en: [
        "Automated prospect list building with enriched data",
        "Sending personalized messages at scale",
        "CRM data enrichment and cleaning",
        "Detection of buying signals and relevant account changes",
        "Automation of outbound marketing campaigns",
        "Market research and competitive analysis"
      ]
    },
    resources: {
      es: [
        {
          title: "Clay: Automatiza tu prospección con IA",
          url: "https://www.youtube.com/watch?v=Z9xzPDRrQHw",
          type: "video",
          description: "Revisión detallada de Clay y cómo puede transformar tus procesos de ventas."
        },
        {
          title: "Guía de uso de Clay para equipos de ventas",
          url: "https://www.clay.com/university/guide/use-ai-integration-overview",
          type: "tutorial",
          description: "Aprende a integrar y utilizar las funciones de IA de Clay en tus flujos de trabajo."
        },
        {
          title: "Revisión de Clay: Pros y contras",
          url: "https://www.lindy.ai/blog/clay-review",
          type: "article",
          description: "Análisis exhaustivo de las características, ventajas y desventajas de Clay."
        }
      ],
      en: [
        {
          title: "Clay AI Review: Transforming Sales Prospecting",
          url: "https://www.youtube.com/watch?v=Z9xzPDRrQHw",
          type: "video",
          description: "In-depth review of Clay and how it can revolutionize your sales processes."
        },
        {
          title: "How to Use Clay's AI Integration",
          url: "https://www.clay.com/university/guide/use-ai-integration-overview",
          type: "tutorial",
          description: "Learn how to integrate and utilize Clay's AI features in your workflows."
        },
        {
          title: "Clay Review 2025: Pricing, Pros & Cons",
          url: "https://www.lindy.ai/blog/clay-review",
          type: "article",
          description: "Comprehensive analysis of Clay's features, advantages, and drawbacks."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Desde $149/mes",
      en: "From $149/month"
    },
    difficulty: "advanced",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/clay.webp",
    slug: "clay",
    featured: false,
    url: "https://www.clay.com"
  },
  {
    id: "17",
    name: "Fillout",
    description: {
      es: "Crea formularios, encuestas y quizzes personalizados en minutos con asistencia de IA",
      en: "Create personalized forms, surveys, and quizzes in minutes with AI assistance"
    },
    detailedDescription: {
      es: "Fillout es una plataforma de creación de formularios impulsada por inteligencia artificial que permite generar formularios, encuestas y quizzes personalizados en cuestión de minutos. Utiliza IA para sugerir preguntas, mejorar el lenguaje y adaptar el diseño al estilo de tu marca. Ofrece una interfaz de arrastrar y soltar sin necesidad de programación, y se integra con más de 50 herramientas como Google Sheets, Notion y Slack.",
      en: "Fillout is an AI-powered form creation platform that enables you to generate personalized forms, surveys, and quizzes in minutes. It uses AI to suggest questions, enhance language, and adapt the design to match your brand's style. It offers a drag-and-drop interface with no coding required and integrates with over 50 tools like Google Sheets, Notion, and Slack."
    },
    useCases: {
      es: [
        "Crear encuestas de satisfacción del cliente",
        "Generar formularios de registro personalizados",
        "Diseñar quizzes interactivos para formación",
        "Recopilar comentarios de empleados",
        "Automatizar formularios de contacto y soporte",
        "Realizar evaluaciones de desempeño"
      ],
      en: [
        "Create customer satisfaction surveys",
        "Generate personalized registration forms",
        "Design interactive quizzes for training",
        "Collect employee feedback",
        "Automate contact and support forms",
        "Conduct performance evaluations"
      ]
    },
    resources: {
      es: [
        {
          title: "Cómo crear formularios con Fillout",
          url: "https://www.youtube.com/watch?v=te_hu5TLAYM",
          type: "video",
          description: "Tutorial sobre cómo utilizar Fillout para crear formularios personalizados con IA."
        },
        {
          title: "Guía de inicio rápido de Fillout",
          url: "https://www.fillout.com/ai-form-builder",
          type: "tutorial",
          description: "Aprende a generar formularios utilizando la inteligencia artificial de Fillout."
        },
        {
          title: "Comparativa: Fillout vs otras herramientas de formularios",
          url: "https://www.fillout.com/form-builder-comparison",
          type: "article",
          description: "Análisis de las ventajas de Fillout frente a otras plataformas de creación de formularios."
        }
      ],
      en: [
        {
          title: "How to Create Forms with Fillout",
          url: "https://www.youtube.com/watch?v=te_hu5TLAYM",
          type: "video",
          description: "Tutorial on how to use Fillout to create personalized forms with AI."
        },
        {
          title: "Fillout Quick Start Guide",
          url: "https://www.fillout.com/ai-form-builder",
          type: "tutorial",
          description: "Learn how to generate forms using Fillout's artificial intelligence."
        },
        {
          title: "Comparison: Fillout vs Other Form Tools",
          url: "https://www.fillout.com/form-builder-comparison",
          type: "article",
          description: "Analysis of Fillout's advantages over other form creation platforms."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Gratis (hasta 1000 envíos/mes)",
      en: "Free (up to 1000 submissions/month)"
    },
    difficulty: "beginner",
    logo: "https://www.fillout.com/favicon.ico",
    slug: "fillout",
    featured: false,
    url: "https://www.fillout.com"
  },
  {
    id: "18",
    name: "Airtable",
    description: {
      es: "Organiza y automatiza tus flujos de trabajo con una base de datos visual potenciada por IA",
      en: "Organize and automate your workflows with a visual database powered by AI"
    },
    detailedDescription: {
      es: "Airtable es una plataforma híbrida entre hoja de cálculo y base de datos que permite a equipos crear aplicaciones personalizadas sin necesidad de programación. Con la integración de inteligencia artificial, Airtable ofrece funciones como el Asistente de IA, que responde preguntas sobre tus datos y ayuda a construir aplicaciones mediante lenguaje natural. Además, los campos de IA permiten generar contenido, resumir información y categorizar datos automáticamente, optimizando procesos en áreas como marketing, recursos humanos y operaciones.",
      en: "Airtable is a hybrid spreadsheet-database platform that enables teams to build custom applications without coding. With integrated artificial intelligence, Airtable offers features like the AI Assistant, which answers questions about your data and helps build apps using natural language. Additionally, AI fields can generate content, summarize information, and categorize data automatically, streamlining processes in areas like marketing, human resources, and operations."
    },
    useCases: {
      es: [
        "Generar resúmenes de retroalimentación de clientes",
        "Crear y traducir descripciones de productos",
        "Automatizar la categorización de tickets de soporte",
        "Redactar ofertas de trabajo y cartas de oferta",
        "Analizar contratos en busca de cláusulas específicas",
        "Construir dashboards interactivos para seguimiento de proyectos"
      ],
      en: [
        "Generate summaries of customer feedback",
        "Create and translate product descriptions",
        "Automate categorization of support tickets",
        "Draft job postings and offer letters",
        "Analyze contracts for specific clauses",
        "Build interactive dashboards for project tracking"
      ]
    },
    resources: {
      es: [
        {
          title: "Todo lo que necesitas saber sobre Airtable AI",
          url: "https://blog.airtable.com/everything-you-need-to-know-about-airtable-ai/",
          type: "article",
          description: "Descubre cómo Airtable integra la inteligencia artificial en tus flujos de trabajo."
        },
        {
          title: "Guía rápida: Airtable AI",
          url: "https://www.airtable.com/videos/quickstart-airtable-ai",
          type: "video",
          description: "Aprende a utilizar las funciones de IA en Airtable con este video introductorio."
        },
        {
          title: "Cómo usar el campo de IA en Airtable",
          url: "https://www.airtable.com/guides/scale/how-to-use-airtable-ai",
          type: "tutorial",
          description: "Guía paso a paso para implementar campos de IA en tus bases de datos."
        }
      ],
      en: [
        {
          title: "Everything you need to know about Airtable AI",
          url: "https://blog.airtable.com/everything-you-need-to-know-about-airtable-ai/",
          type: "article",
          description: "Learn how Airtable integrates artificial intelligence into your workflows."
        },
        {
          title: "Quickstart: Airtable AI",
          url: "https://www.airtable.com/videos/quickstart-airtable-ai",
          type: "video",
          description: "Get started with Airtable's AI features with this introductory video."
        },
        {
          title: "How to use Airtable AI field",
          url: "https://www.airtable.com/guides/scale/how-to-use-airtable-ai",
          type: "tutorial",
          description: "Step-by-step guide to implementing AI fields in your databases."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Gratis / Planes desde $10/mes",
      en: "Free / Plans from $10/month"
    },
    difficulty: "intermediate",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/airtable.png",
    slug: "airtable",
    featured: false,
    url: "https://airtable.com"
  },
  {
    id: "19",
    name: "n8n",
    description: {
      es: "Automatiza flujos de trabajo complejos con una plataforma visual de código abierto y capacidades de IA",
      en: "Automate complex workflows with an open-source visual platform and AI capabilities"
    },
    detailedDescription: {
      es: "n8n es una plataforma de automatización de flujos de trabajo de código abierto que permite conectar aplicaciones, APIs y servicios mediante una interfaz visual basada en nodos. Ofrece más de 400 integraciones y permite a los usuarios crear flujos personalizados utilizando JavaScript o Python. Con soporte para agentes de IA, n8n facilita la creación de automatizaciones avanzadas y puede ser autoalojado para un mayor control sobre los datos.",
      en: "n8n is an open-source workflow automation platform that enables users to connect applications, APIs, and services through a node-based visual interface. It offers over 400 integrations and allows users to create custom workflows using JavaScript or Python. With support for AI agents, n8n facilitates the creation of advanced automations and can be self-hosted for greater data control."
    },
    useCases: {
      es: [
        "Automatización de procesos de TI y operaciones",
        "Integración de datos entre múltiples aplicaciones",
        "Creación de agentes de IA personalizados",
        "Automatización de tareas de marketing y ventas",
        "Gestión de incidentes y alertas de seguridad",
        "Automatización de flujos de trabajo de DevOps"
      ],
      en: [
        "Automation of IT and operations processes",
        "Data integration across multiple applications",
        "Creation of custom AI agents",
        "Automation of marketing and sales tasks",
        "Incident management and security alerts",
        "Automation of DevOps workflows"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía básica de n8n",
          url: "https://n8nhispano.com/conceptos-basicos-de-n8n/",
          type: "tutorial",
          description: "Introducción a los conceptos fundamentales de n8n y cómo empezar a crear flujos de trabajo."
        },
        {
          title: "n8n: la herramienta de automatización definitiva",
          url: "https://ia.salesianssarria.com/automatizacion/n8n-herramienta-automatizacion-flujos/",
          type: "article",
          description: "Análisis detallado de las características y casos de uso de n8n."
        },
        {
          title: "Curso completo de n8n",
          url: "https://nocodestartup.io/es/curso-n8n/",
          type: "course",
          description: "Curso en español para dominar la automatización de flujos de trabajo con n8n."
        }
      ],
      en: [
        {
          title: "n8n Documentation",
          url: "https://docs.n8n.io/",
          type: "tutorial",
          description: "Official documentation for getting started with n8n and building workflows."
        },
        {
          title: "n8n GitHub Repository",
          url: "https://github.com/n8n-io/n8n",
          type: "article",
          description: "Access the source code, report issues, and contribute to the n8n project."
        },
        {
          title: "n8n: An Overview of the Workflow Automation Tool",
          url: "https://datascientest.com/en/n8n-an-overview-of-the-workflow-automation-tool",
          type: "article",
          description: "Comprehensive overview of n8n's features and capabilities."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Desde $20/mes en la nube",
      en: "From $20/month in the cloud"
    },
    difficulty: "intermediate",
    logo: "https://n8n.io/favicon.ico",
    slug: "n8n",
    featured: false,
    url: "https://n8n.io"
  },
  {
    id: "20",
    tags: ["Top"],
    name: "Gumloop",
    description: {
      es: "Automatiza flujos de trabajo complejos con IA mediante una interfaz visual sin necesidad de programar",
      en: "Automate complex workflows with AI through a visual interface without the need to code"
    },
    detailedDescription: {
      es: "Gumloop es una plataforma de automatización sin código que permite a los usuarios crear flujos de trabajo impulsados por inteligencia artificial utilizando una interfaz de arrastrar y soltar. Con integraciones a herramientas populares como Slack, Google Sheets y Salesforce, Gumloop facilita la automatización de tareas repetitivas y complejas sin necesidad de conocimientos técnicos. Además, ofrece componentes preconstruidos para tareas avanzadas como extracción de datos, análisis de sentimientos y más.",
      en: "Gumloop is a no-code automation platform that enables users to create AI-powered workflows using a drag-and-drop interface. With integrations to popular tools like Slack, Google Sheets, and Salesforce, Gumloop simplifies the automation of repetitive and complex tasks without requiring technical expertise. It also offers pre-built components for advanced tasks such as data extraction, sentiment analysis, and more."
    },
    useCases: {
      es: [
        "Automatización de procesos de ventas y marketing",
        "Extracción y procesamiento de datos desde sitios web",
        "Integración de herramientas de productividad como Slack y Google Sheets",
        "Automatización de tareas administrativas y operativas",
        "Análisis de sentimientos y clasificación de texto",
        "Generación de informes y resúmenes automáticos"
      ],
      en: [
        "Automation of sales and marketing processes",
        "Data extraction and processing from websites",
        "Integration of productivity tools like Slack and Google Sheets",
        "Automation of administrative and operational tasks",
        "Sentiment analysis and text classification",
        "Automatic generation of reports and summaries"
      ]
    },
    resources: {
      es: [
        {
          title: "Gumloop: Innovación en Vancouver para Automatizar Tareas",
          url: "https://emprenderencanada.ca/2025/02/05/gumloop-innovacion-en-vancouver-para-automatizar-tareas/",
          type: "article",
          description: "Conoce cómo Gumloop está revolucionando la automatización de tareas desde Vancouver."
        },
        {
          title: "Construír IA xerativa para todos: leccións de Kaustav Das Sharma e Gumloop",
          url: "https://hackernoon.com/lang/gl/constru%C3%ADndo-ai-xerativa-para-todos-as-lecci%C3%B3ns-de-kaustav-das-sharma-e-gumloop",
          type: "article",
          description: "Lecciones sobre la construcción de IA generativa accesible para todos."
        },
        {
          title: "Gumloop: Automatiza flujos de trabajo con IA",
          url: "https://www.gumloop.com/",
          type: "tutorial",
          description: "Aprende a utilizar Gumloop para automatizar tus procesos con inteligencia artificial."
        }
      ],
      en: [
        {
          title: "Gumloop AI Automation Review: Pricing and Features",
          url: "https://www.lindy.ai/blog/gumloop",
          type: "article",
          description: "Análisis detallado de las características y precios de Gumloop."
        },
        {
          title: "Gumloop review: My honest thoughts about this AI tool",
          url: "https://www.marketermilk.com/blog/gumloop-review",
          type: "article",
          description: "Opinión honesta sobre el uso de Gumloop como herramienta de automatización con IA."
        },
        {
          title: "AI Automation/Gumloop Live Workshop #1",
          url: "https://www.youtube.com/watch?v=PjT1XVeSKsw",
          type: "video",
          description: "Taller en vivo sobre cómo automatizar tareas con Gumloop."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Desde $97/mes",
      en: "Options starting at $97/month"
    },
    difficulty: "intermediate",
    logo: "https://www.gumloop.com/favicon.ico",
    slug: "gumloop",
    featured: false,
    url: "https://www.gumloop.com/"
  },
  {
    id: "21",
    name: "Make",
    description: {
      es: "Automatiza flujos de trabajo visualmente conectando apps y servicios sin necesidad de programar",
      en: "Visually automate workflows by connecting apps and services without coding"
    },
    detailedDescription: {
      es: "Make es una plataforma de automatización sin código que permite a los usuarios crear flujos de trabajo personalizados mediante una interfaz visual de arrastrar y soltar. Con soporte para más de 2,000 aplicaciones, Make facilita la integración de herramientas y servicios, permitiendo automatizar tareas repetitivas y complejas sin necesidad de conocimientos de programación. Además, ofrece funcionalidades avanzadas como manejo de errores, ejecución en tiempo real y lógica condicional para adaptar los flujos a las necesidades específicas de cada negocio.",
      en: "Make is a no-code automation platform that enables users to create custom workflows through a visual drag-and-drop interface. Supporting over 2,000 applications, Make simplifies the integration of tools and services, allowing the automation of repetitive and complex tasks without coding knowledge. It also offers advanced features like error handling, real-time execution, and conditional logic to tailor workflows to specific business needs."
    },
    useCases: {
      es: [
        "Automatización de procesos de ventas y marketing",
        "Sincronización de datos entre aplicaciones y servicios",
        "Gestión automatizada de proyectos y tareas",
        "Notificaciones y alertas personalizadas",
        "Integración de herramientas de comercio electrónico",
        "Automatización de procesos de recursos humanos"
      ],
      en: [
        "Sales and marketing process automation",
        "Data synchronization between apps and services",
        "Automated project and task management",
        "Custom notifications and alerts",
        "E-commerce tools integration",
        "Human resources process automation"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía completa de Make.com",
          url: "https://davizgonzalez.com/blog/guia-make/",
          type: "tutorial",
          description: "Aprende a utilizar Make desde cero con esta guía detallada."
        },
        {
          title: "Automatiza tus tareas con Make.com",
          url: "https://revolucionatupyme.com/automatiza-tus-tareas-con-make-com/",
          type: "article",
          description: "Descubre cómo Make puede ayudarte a optimizar tus procesos empresariales."
        },
        {
          title: "Curso de Make: Introducción a la automatización",
          url: "https://boluda.com/curso/make/1-introduccion-a-la-automatizacion/",
          type: "course",
          description: "Curso en español para aprender a automatizar con Make."
        }
      ],
      en: [
        {
          title: "Make Documentation",
          url: "https://www.make.com/en/help",
          type: "tutorial",
          description: "Official documentation to get started with Make."
        },
        {
          title: "Make Academy",
          url: "https://www.make.com/en/academy",
          type: "course",
          description: "Access eLearning content to learn with Make."
        },
        {
          title: "Make Community",
          url: "https://www.make.com/en/community",
          type: "article",
          description: "Connect with other Makers, exchange ideas & tips."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Gratis (limitado) / Desde $9/mes",
      en: "Free (limited) / From $9/month"
    },
    difficulty: "intermediate",
    logo: "https://www.make.com/favicon.ico",
    slug: "make",
    featured: false,
    url: "https://www.make.com"
  },
  {
    id: "22",
    name: "Calendly",
    description: {
      es: "Automatiza la programación de reuniones, con integraciones y flujos de trabajo inteligentes",
      en: "Automate meeting scheduling, with smart integrations and workflows"
    },
    detailedDescription: {
      es: "Calendly es una plataforma de programación de reuniones que permite a individuos y equipos compartir su disponibilidad mediante enlaces personalizados. Los usuarios pueden configurar diferentes tipos de eventos, establecer reglas de disponibilidad, añadir buffers entre reuniones y automatizar recordatorios por correo electrónico o SMS. Se integra con herramientas como Google Calendar, Outlook, Zoom, Microsoft Teams, Slack, Salesforce, Stripe y más, facilitando la programación eficiente y reduciendo las ausencias.",
      en: "Calendly is a meeting scheduling platform that allows individuals and teams to share their availability through personalized links. Users can set up different event types, define availability rules, add buffers between meetings, and automate email or SMS reminders. It integrates with tools like Google Calendar, Outlook, Zoom, Microsoft Teams, Slack, Salesforce, Stripe, and more, facilitating efficient scheduling and reducing no-shows."
    },
    useCases: {
      es: [
        "Programación de reuniones de ventas o demostraciones de productos",
        "Entrevistas de selección de personal",
        "Sesiones de onboarding con clientes",
        "Consultas y asesorías profesionales",
        "Reuniones internas de equipo",
        "Coordinación de eventos y webinars"
      ],
      en: [
        "Scheduling sales meetings or product demos",
        "Recruitment interviews",
        "Client onboarding sessions",
        "Professional consultations and advisory",
        "Internal team meetings",
        "Coordinating events and webinars"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de Calendly: Automatiza tu programación de reuniones",
          url: "https://calendly.com/features",
          type: "article",
          description: "Explora las características clave de Calendly y cómo pueden ayudarte a optimizar tu agenda."
        },
        {
          title: "Cómo usar Calendly para programar reuniones",
          url: "https://teachingresources.stanford.edu/resources/how-to-use-calendly/",
          type: "tutorial",
          description: "Aprende a configurar y utilizar Calendly para mejorar la eficiencia en la programación de reuniones."
        },
        {
          title: "Calendly: Software de programación de citas en línea",
          url: "https://calendly.com/",
          type: "article",
          description: "Descubre cómo Calendly puede simplificar la programación de tus reuniones y eventos."
        }
      ],
      en: [
        {
          title: "Calendly Features - Workflows, Integrations, Embeds",
          url: "https://calendly.com/features",
          type: "article",
          description: "Explore Calendly's key features and how they can help streamline your scheduling process."
        },
        {
          title: "How to use Calendly to schedule meetings",
          url: "https://teachingresources.stanford.edu/resources/how-to-use-calendly/",
          type: "tutorial",
          description: "Learn how to set up and use Calendly to improve scheduling efficiency."
        },
        {
          title: "Calendly: Free Online Appointment Scheduling Software",
          url: "https://calendly.com/",
          type: "article",
          description: "Discover how Calendly can simplify the scheduling of your meetings and events."
        }
      ]
    },
    category: "meetings",
    price: {
      es: "Gratis / Desde $10/mes por usuario",
      en: "Free / From $10/month per user"
    },
    difficulty: "beginner",
    logo: "https://calendly.com/favicon.ico",
    slug: "calendly",
    featured: false,
    url: "https://calendly.com"
  },
  {
    id: "23",
    name: "Julius AI",
    description: {
      es: "Analiza y visualiza datos complejos con IA conversacional, sin necesidad de programar",
      en: "Analyze and visualize complex data with conversational AI, no coding required"
    },
    detailedDescription: {
      es: "Julius AI es un asistente de análisis de datos impulsado por inteligencia artificial que permite a usuarios de todos los niveles explorar, visualizar y modelar datos estructurados mediante lenguaje natural. Compatible con archivos CSV, Excel, Google Sheets y bases de datos SQL, Julius facilita tareas como análisis estadístico, generación de gráficos, modelado predictivo y creación de informes, todo sin necesidad de conocimientos técnicos. Utiliza modelos avanzados como GPT-4 y Claude para ofrecer respuestas precisas y visualizaciones interactivas en segundos.",
      en: "Julius AI is an AI-powered data analysis assistant that enables users of all levels to explore, visualize, and model structured data using natural language. Compatible with CSV, Excel, Google Sheets, and SQL databases, Julius simplifies tasks such as statistical analysis, chart generation, predictive modeling, and report creation, all without requiring technical expertise. It leverages advanced models like GPT-4 and Claude to provide accurate responses and interactive visualizations in seconds."
    },
    useCases: {
      es: [
        "Análisis de ventas y pronósticos de demanda",
        "Visualización de tendencias y patrones en datos históricos",
        "Creación de modelos predictivos para retención de clientes",
        "Interpretación de encuestas y categorización de respuestas",
        "Análisis de datos científicos y académicos",
        "Automatización de informes y dashboards interactivos"
      ],
      en: [
        "Sales analysis and demand forecasting",
        "Visualization of trends and patterns in historical data",
        "Creation of predictive models for customer retention",
        "Survey interpretation and response categorization",
        "Scientific and academic data analysis",
        "Automation of reports and interactive dashboards"
      ]
    },
    resources: {
      es: [
        {
          title: "Julius AI: Analiza Datos como un Profesional",
          url: "https://www.fahimai.com/how-to-use-julius-ai",
          type: "tutorial",
          description: "Guía paso a paso para utilizar Julius AI en el análisis de datos."
        },
        {
          title: "Julius AI: Guía Completa y Casos de Uso",
          url: "https://blog.enterprisedna.co/julius-ai/",
          type: "article",
          description: "Explora las capacidades de Julius AI y cómo aplicarlas en proyectos reales."
        },
        {
          title: "Análisis de Datos con IA: Prueba Julius",
          url: "https://www.youtube.com/watch?v=4j9E2zLup5g",
          type: "video",
          description: "Demostración práctica de Julius AI en acción."
        }
      ],
      en: [
        {
          title: "How to Use Julius AI: Analyze Data Like a Pro",
          url: "https://www.fahimai.com/how-to-use-julius-ai",
          type: "tutorial",
          description: "Step-by-step guide to using Julius AI for data analysis."
        },
        {
          title: "Julius AI: A Complete Guide + Use Cases Explained",
          url: "https://blog.enterprisedna.co/julius-ai/",
          type: "article",
          description: "Explore Julius AI's capabilities and how to apply them in real projects."
        },
        {
          title: "Data Analysis with AI: Try Julius",
          url: "https://www.youtube.com/watch?v=4j9E2zLup5g",
          type: "video",
          description: "Practical demonstration of Julius AI in action."
        }
      ]
    },
    category: "analytics",
    price: {
      es: "Desde $20/mes",
      en: "From $20/month"
    },
    difficulty: "beginner",
    logo: "https://julius.ai/favicon.ico",
    slug: "julius-ai",
    featured: false,
    url: "https://julius.ai"
  },
  {
    id: "24",
    name: "Snov.io",
    description: {
      es: "Plataforma para generación de leads, verificación de emails y automatización de ventas",
      en: "Platform for lead generation, email verification, and multichannel sales automation"
    },
    detailedDescription: {
      es: "Snov.io es una plataforma integral de automatización de ventas que permite a equipos de marketing y ventas generar leads, verificar correos electrónicos y ejecutar campañas multicanal personalizadas. Ofrece herramientas como buscador y verificador de emails, campañas de goteo, automatización de LinkedIn, calentamiento de correos y un CRM integrado. Con más de 5.000 integraciones disponibles, Snov.io ayuda a optimizar el proceso de prospección y aumentar las tasas de conversión.",
      en: "Snov.io is a comprehensive sales automation platform that enables marketing and sales teams to generate leads, verify emails, and run personalized multichannel campaigns. It offers tools such as email finder and verifier, drip campaigns, LinkedIn automation, email warm-up, and an integrated CRM. With over 5,000 available integrations, Snov.io helps optimize the prospecting process and increase conversion rates."
    },
    useCases: {
      es: [
        "Generación de leads B2B desde sitios web y LinkedIn",
        "Verificación masiva de correos electrónicos para mejorar la entregabilidad",
        "Automatización de campañas de email y LinkedIn",
        "Seguimiento y análisis de campañas multicanal",
        "Gestión de prospectos con CRM integrado",
        "Calentamiento de cuentas de correo para evitar filtros de spam"
      ],
      en: [
        "B2B lead generation from websites and LinkedIn",
        "Bulk email verification to improve deliverability",
        "Automation of email and LinkedIn campaigns",
        "Tracking and analysis of multichannel campaigns",
        "Prospect management with integrated CRM",
        "Email account warm-up to avoid spam filters"
      ]
    },
    resources: {
      es: [
        {
          title: "Academia Snov.io: Cursos gratuitos de generación de leads",
          url: "https://snov.io/snovio-academy",
          type: "course",
          description: "Aprende estrategias efectivas de prospección y automatización de ventas con lecciones en video."
        },
        {
          title: "Guía de automatización de LinkedIn con Snov.io",
          url: "https://snov.io/es/herramienta-de-automatizacion-para-linkedin",
          type: "tutorial",
          description: "Descubre cómo automatizar tu alcance en LinkedIn de manera segura y eficiente."
        },
        {
          title: "Blog de Snov.io: Consejos y mejores prácticas",
          url: "https://snov.io/blog/es/",
          type: "article",
          description: "Explora artículos sobre generación de leads, email marketing y automatización de ventas."
        }
      ],
      en: [
        {
          title: "Snov.io Academy: Free Lead Generation Courses",
          url: "https://snov.io/snovio-academy",
          type: "course",
          description: "Learn effective prospecting and sales automation strategies with video lessons."
        },
        {
          title: "LinkedIn Automation Guide with Snov.io",
          url: "https://snov.io/en/linkedin-automation-tool",
          type: "tutorial",
          description: "Discover how to safely and efficiently automate your LinkedIn outreach."
        },
        {
          title: "Snov.io Blog: Tips and Best Practices",
          url: "https://snov.io/blog/",
          type: "article",
          description: "Explore articles on lead generation, email marketing, and sales automation."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Desde $30/mes",
      en: "From $30/month"
    },
    difficulty: "intermediate",
    logo: "https://snov.io/favicon.ico",
    slug: "snov-io",
    featured: false,
    url: "https://snov.io"
  },
  {
    id: "25",
    tags: ["irrelevant"],
    name: "Read AI",
    description: {
      es: "Asistente de reuniones con IA que transcribe, resume y analiza conversaciones en tiempo real",
      en: "AI meeting assistant that transcribes, summarizes, and analyzes conversations in real-time"
    },
    detailedDescription: {
      es: "Read AI es una plataforma impulsada por inteligencia artificial diseñada para optimizar las reuniones. Se integra con herramientas como Zoom, Google Meet y Microsoft Teams para grabar, transcribir y resumir conversaciones automáticamente. Además, ofrece análisis detallados de participación, métricas de compromiso y coaching personalizado para mejorar la comunicación. Con su función Search Copilot, permite buscar información clave en reuniones, correos y chats, unificando datos para una toma de decisiones más informada.",
      en: "Read AI is an AI-powered platform designed to optimize meetings. It integrates with tools like Zoom, Google Meet, and Microsoft Teams to automatically record, transcribe, and summarize conversations. Additionally, it provides detailed participation analysis, engagement metrics, and personalized coaching to enhance communication. With its Search Copilot feature, it allows users to search for key information across meetings, emails, and chats, unifying data for more informed decision-making."
    },
    useCases: {
      es: [
        "Transcripción y resumen automático de reuniones",
        "Análisis de participación y métricas de compromiso",
        "Coaching personalizado para mejorar habilidades comunicativas",
        "Búsqueda de información clave en reuniones y correos",
        "Integración con herramientas como Slack, Notion y Salesforce",
        "Generación de informes y seguimiento de temas recurrentes"
      ],
      en: [
        "Automatic transcription and summarization of meetings",
        "Participation analysis and engagement metrics",
        "Personalized coaching to improve communication skills",
        "Search for key information across meetings and emails",
        "Integration with tools like Slack, Notion, and Salesforce",
        "Report generation and tracking of recurring topics"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de inicio rápido de Read AI",
          url: "https://www.read.ai/",
          type: "tutorial",
          description: "Aprende a configurar y utilizar Read AI para optimizar tus reuniones."
        },
        {
          title: "Integraciones de Read AI con herramientas populares",
          url: "https://www.read.ai/integrations",
          type: "article",
          description: "Descubre cómo conectar Read AI con tus aplicaciones favoritas."
        },
        {
          title: "Planes y precios de Read AI",
          url: "https://www.read.ai/plans-pricing",
          type: "article",
          description: "Conoce las diferentes opciones de suscripción que ofrece Read AI."
        }
      ],
      en: [
        {
          title: "Read AI Quick Start Guide",
          url: "https://www.read.ai/",
          type: "tutorial",
          description: "Learn how to set up and use Read AI to optimize your meetings."
        },
        {
          title: "Read AI Integrations with Popular Tools",
          url: "https://www.read.ai/integrations",
          type: "article",
          description: "Discover how to connect Read AI with your favorite applications."
        },
        {
          title: "Read AI Plans and Pricing",
          url: "https://www.read.ai/plans-pricing",
          type: "article",
          description: "Explore the different subscription options offered by Read AI."
        }
      ]
    },
    category: "meetings",
    price: {
      es: "Desde $15/mes",
      en: "From $15/month"
    },
    difficulty: "beginner",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/readai.webp",
    slug: "read-ai",
    featured: false,
    url: "https://www.read.ai"
  },
  {
    id: "26",
    name: "Dripify",
    description: {
      es: "Automatiza la prospección en LinkedIn con campañas multicanal y análisis avanzados",
      en: "Automate LinkedIn prospecting with multichannel campaigns and advanced analytics"
    },
    detailedDescription: {
      es: "Dripify es una herramienta de automatización de ventas diseñada para LinkedIn que permite a equipos de ventas y marketing crear campañas de prospección automatizadas. Ofrece funcionalidades como secuencias de mensajes personalizados, análisis de rendimiento, gestión de equipos y exportación de datos. Además, se integra con más de 1,000 aplicaciones a través de Zapier y webhooks, facilitando la sincronización con tu CRM y otras herramientas.",
      en: "Dripify is a LinkedIn sales automation tool that enables sales and marketing teams to create automated prospecting campaigns. It offers features like personalized message sequences, performance analytics, team management, and data export. Additionally, it integrates with over 1,000 apps via Zapier and webhooks, facilitating synchronization with your CRM and other tools."
    },
    useCases: {
      es: [
        "Automatización de mensajes de conexión y seguimiento en LinkedIn",
        "Gestión de campañas de prospección multicanal",
        "Análisis de rendimiento de campañas y equipos",
        "Exportación de datos de leads a CRM",
        "Integración con herramientas como HubSpot, Salesforce y más"
      ],
      en: [
        "Automate LinkedIn connection and follow-up messages",
        "Manage multichannel prospecting campaigns",
        "Analyze campaign and team performance",
        "Export lead data to CRM",
        "Integrate with tools like HubSpot, Salesforce, and more"
      ]
    },
    resources: {
      es: [
        {
          title: "Cómo usar Dripify para automatizar tu prospección en LinkedIn",
          url: "https://www.youtube.com/watch?v=ATT2sXWdYx8",
          type: "video",
          description: "Tutorial paso a paso sobre cómo configurar campañas en Dripify."
        },
        {
          title: "Guía de Dripify: Prospección en LinkedIn",
          url: "https://dripify.io/",
          type: "tutorial",
          description: "Documentación oficial para sacar el máximo provecho de Dripify."
        },
        {
          title: "Reseña de Dripify: Pros y contras",
          url: "https://www.salesrobot.co/blogs/dripify-review",
          type: "article",
          description: "Análisis detallado de las funcionalidades y precios de Dripify."
        }
      ],
      en: [
        {
          title: "How to Use Dripify for LinkedIn Prospecting",
          url: "https://www.youtube.com/watch?v=ATT2sXWdYx8",
          type: "video",
          description: "Step-by-step tutorial on setting up campaigns in Dripify."
        },
        {
          title: "Dripify Guide: LinkedIn Prospecting",
          url: "https://dripify.io/",
          type: "tutorial",
          description: "Official documentation to get the most out of Dripify."
        },
        {
          title: "Dripify Review: Pros and Cons",
          url: "https://www.salesrobot.co/blogs/dripify-review",
          type: "article",
          description: "In-depth analysis of Dripify's features and pricing."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Desde $39/mes",
      en: "From $39/month"
    },
    difficulty: "intermediate",
    logo: "https://dripify.io/favicon.ico",
    slug: "dripify",
    featured: false,
    url: "https://dripify.io/"
  },
  {
    id: "27",
    tags: ["Top"],
    name: "PhantomBuster",
    description: {
      es: "Automatiza tareas en la web como extracción de datos y generación de leads",
      en: "Automate web tasks like data extraction and lead generation without coding"
    },
    detailedDescription: {
      es: "PhantomBuster es una plataforma de automatización que permite a los usuarios extraer datos, generar leads y automatizar acciones en la web mediante 'Phantoms', scripts preconfigurados para tareas específicas. Con soporte para más de 100 Phantoms y flujos de trabajo personalizables, es ideal para profesionales de marketing, ventas y reclutamiento que buscan optimizar sus procesos sin necesidad de conocimientos técnicos.",
      en: "PhantomBuster is an automation platform that enables users to extract data, generate leads, and automate web actions using 'Phantoms', pre-configured scripts for specific tasks. With support for over 100 Phantoms and customizable workflows, it's ideal for marketing, sales, and recruitment professionals looking to optimize their processes without technical expertise."
    },
    useCases: {
      es: [
        "Extracción de datos de perfiles de LinkedIn y otras redes sociales",
        "Automatización de mensajes y solicitudes de conexión en LinkedIn",
        "Generación de listas de leads desde diversas fuentes web",
        "Sincronización de datos con CRM y otras herramientas",
        "Automatización de tareas repetitivas en la web"
      ],
      en: [
        "Extract data from LinkedIn profiles and other social networks",
        "Automate messages and connection requests on LinkedIn",
        "Generate lead lists from various web sources",
        "Sync data with CRM and other tools",
        "Automate repetitive web tasks"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de automatización con PhantomBuster",
          url: "https://phantombuster.com/blog/automation/linkedin-outreach-automation-guide-3Kw5nUrFKd7QDNLoshOmuc",
          type: "tutorial",
          description: "Aprende a automatizar tu prospección en LinkedIn paso a paso."
        },
        {
          title: "Introducción a las automatizaciones de PhantomBuster",
          url: "https://support.phantombuster.com/hc/en-us/articles/22306827153810-Introduction-to-PhantomBuster-Automations",
          type: "article",
          description: "Conoce cómo funcionan las automatizaciones en PhantomBuster."
        },
        {
          title: "Automatiza mensajes en LinkedIn con PhantomBuster",
          url: "https://phantombuster.com/blog/automation/automate-linkedin-messages-3HCczF9gziYB5tTXxJoiU4",
          type: "tutorial",
          description: "Guía práctica para enviar mensajes automatizados en LinkedIn."
        }
      ],
      en: [
        {
          title: "LinkedIn Outreach Automation Guide",
          url: "https://phantombuster.com/blog/automation/linkedin-outreach-automation-guide-3Kw5nUrFKd7QDNLoshOmuc",
          type: "tutorial",
          description: "Learn how to automate your LinkedIn outreach step by step."
        },
        {
          title: "Introduction to PhantomBuster Automations",
          url: "https://support.phantombuster.com/hc/en-us/articles/22306827153810-Introduction-to-PhantomBuster-Automations",
          type: "article",
          description: "Understand how automations work in PhantomBuster."
        },
        {
          title: "Automate LinkedIn Messages with PhantomBuster",
          url: "https://phantombuster.com/blog/automation/automate-linkedin-messages-3HCczF9gziYB5tTXxJoiU4",
          type: "tutorial",
          description: "Practical guide to sending automated messages on LinkedIn."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Planes desde $59/mes",
      en: "Plans from $59/month"
    },
    difficulty: "intermediate",
    logo: "https://vidadigital.in/wp-content/uploads/2022/11/Phantombuster-logo-square-scaled.jpg",
    slug: "phantombuster",
    featured: false,
    url: "https://phantombuster.com/"
  },
  {
    id: "28",
    name: "Magic Loops",
    description: {
      es: "Automatiza tareas y crea APIs usando lenguaje natural y bloques de código",
      en: "Automate tasks and build APIs using natural language and code blocks"
    },
    detailedDescription: {
      es: "Magic Loops es una plataforma que combina inteligencia artificial generativa con código para permitir a cualquier usuario, incluso sin experiencia técnica, automatizar tareas repetitivas y crear flujos de trabajo personalizados. Al describir una tarea en lenguaje natural, la herramienta genera un 'loop' que puede incluir bloques de código, integraciones con APIs y modelos de lenguaje. Estos loops pueden ejecutarse en horarios programados o activarse mediante eventos como correos electrónicos o webhooks, facilitando la automatización de procesos en diversas aplicaciones.",
      en: "Magic Loops is a platform that combines generative AI with code to enable any user, even without technical experience, to automate repetitive tasks and create customized workflows. By describing a task in natural language, the tool generates a 'loop' that can include code blocks, integrations with APIs, and language models. These loops can run on scheduled times or be triggered by events like emails or webhooks, facilitating process automation across various applications."
    },
    useCases: {
      es: [
        "Recibir resúmenes diarios de noticias o actualizaciones específicas",
        "Automatizar respuestas a eventos en plataformas como Shopify o Close",
        "Generar contenido creativo como indicaciones para imágenes o textos",
        "Reemplazar funciones de AWS Lambda con código auto-reparable",
        "Integrar múltiples servicios y APIs en flujos de trabajo personalizados"
      ],
      en: [
        "Receive daily summaries of news or specific updates",
        "Automate responses to events on platforms like Shopify or Close",
        "Generate creative content such as prompts for images or texts",
        "Replace AWS Lambda functions with self-healing code",
        "Integrate multiple services and APIs into customized workflows"
      ]
    },
    resources: {
      es: [
        {
          title: "Cómo usar Magic Loops - Programación en Español",
          url: "https://www.youtube.com/watch?v=jsEgZH-oLAU",
          type: "video",
          description: "Tutorial en español sobre cómo utilizar Magic Loops para automatizar tareas."
        },
        {
          title: "Reseña de Magic Loops en Serchai",
          url: "https://serchai.com/es/magicloops-opinion/",
          type: "article",
          description: "Análisis detallado de las funcionalidades y casos de uso de Magic Loops."
        },
        {
          title: "Aplicación de escritorio para Mac y Windows",
          url: "https://webcatalog.io/es/apps/magic-loops",
          type: "article",
          description: "Información sobre la versión de escritorio de Magic Loops para diferentes sistemas operativos."
        }
      ],
      en: [
        {
          title: "How to use Magic Loops - Programming in English",
          url: "https://www.youtube.com/watch?v=oJ7-Ou9LcQ8",
          type: "video",
          description: "Step-by-step guide on using Magic Loops for task automation."
        },
        {
          title: "Magic Loops Overview on Y Combinator",
          url: "https://www.ycombinator.com/companies/magic-loops",
          type: "article",
          description: "Overview of Magic Loops as presented by Y Combinator."
        },
        {
          title: "Magic Loops GitHub Repository",
          url: "https://github.com/magicloops",
          type: "article",
          description: "Access to the source code and projects related to Magic Loops."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Desde $9/mes",
      en: "From $9/month"
    },
    difficulty: "beginner",
    logo: "https://magicloops.dev/favicon.ico",
    slug: "magic-loops",
    featured: false,
    url: "https://magicloops.dev"
  },
  {
    id: "29",
    name: "Apify",
    description: {
      es: "Automatiza tareas web y extrae datos a escala con una plataforma de scraping",
      en: "Automate web tasks and extract data at scale with a cloud-based scraping"
    },
    detailedDescription: {
      es: "Apify es una plataforma de automatización web y extracción de datos que permite a desarrolladores y empresas convertir cualquier sitio web en una API. Con su ecosistema de más de 4,500 'Actors' preconstruidos, los usuarios pueden automatizar tareas como la recopilación de datos de productos, monitoreo de precios y análisis de redes sociales. Apify ofrece herramientas para crear flujos de trabajo personalizados, integraciones con APIs y una infraestructura escalable para manejar grandes volúmenes de datos.",
      en: "Apify is a web automation and data extraction platform that enables developers and businesses to turn any website into an API. With its ecosystem of over 4,500 pre-built 'Actors', users can automate tasks such as product data collection, price monitoring, and social media analysis. Apify offers tools to create custom workflows, API integrations, and a scalable infrastructure to handle large volumes of data."
    },
    useCases: {
      es: [
        "Extracción de datos de productos y precios de sitios de comercio electrónico",
        "Monitoreo de redes sociales y análisis de sentimiento",
        "Automatización de tareas repetitivas en la web",
        "Creación de APIs personalizadas a partir de sitios web",
        "Integración de datos web en flujos de trabajo empresariales"
      ],
      en: [
        "Extracting product and pricing data from e-commerce sites",
        "Monitoring social media and sentiment analysis",
        "Automating repetitive web tasks",
        "Creating custom APIs from websites",
        "Integrating web data into business workflows"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía completa para usar Apify",
          url: "https://julien-breal.fr/es/guia-de-apifias/",
          type: "article",
          description: "Tutorial detallado sobre cómo utilizar Apify para la automatización web y extracción de datos."
        },
        {
          title: "Aplicación de escritorio para Mac y Windows",
          url: "https://webcatalog.io/es/apps/apify",
          type: "article",
          description: "Información sobre la versión de escritorio de Apify para diferentes sistemas operativos."
        },
        {
          title: "Caso práctico de Apify en AWS",
          url: "https://aws.amazon.com/es/solutions/case-studies/apify-case-study/",
          type: "article",
          description: "Estudio de caso sobre cómo Apify utiliza AWS para escalar su infraestructura."
        }
      ],
      en: [
        {
          title: "Apify Documentation",
          url: "https://docs.apify.com/",
          type: "tutorial",
          description: "Official documentation for getting started with Apify and building workflows."
        },
        {
          title: "Apify Blog: Guides to web scraping, automation, and AI agents",
          url: "https://blog.apify.com/",
          type: "article",
          description: "Comprehensive guides and tutorials on web scraping and automation using Apify."
        },
        {
          title: "Apify Store - 4,500+ web scraping and automation tools",
          url: "https://apify.com/store",
          type: "article",
          description: "Explore pre-built Actors for your web scraping and automation projects."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Pago por uso",
      en: "Pay-as-you-go"
    },
    difficulty: "intermediate",
    logo: "https://apify.com/favicon.ico",
    slug: "apify",
    featured: false,
    url: "https://apify.com"
  },
  {
    id: "30",
    name: "Gamma AI",
    description: {
      es: "Crea presentaciones, documentos y páginas web atractivas en minutos con asistencia de inteligencia artificial",
      en: "Create engaging presentations, documents, and web pages in minutes with AI assistance"
    },
    detailedDescription: {
      es: "Gamma AI es una plataforma de creación de contenido potenciada por inteligencia artificial que permite a los usuarios generar presentaciones, documentos y sitios web de manera rápida y sencilla. Utilizando IA, Gamma ayuda a estructurar ideas, diseñar visualmente y presentar contenido de forma profesional sin necesidad de habilidades técnicas. Ofrece plantillas personalizables, integración con herramientas populares y funciones de colaboración en tiempo real.",
      en: "Gamma AI is a content creation platform powered by artificial intelligence that enables users to generate presentations, documents, and websites quickly and easily. Leveraging AI, Gamma assists in structuring ideas, visual design, and presenting content professionally without the need for technical skills. It offers customizable templates, integration with popular tools, and real-time collaboration features."
    },
    useCases: {
      es: [
        "Generación de presentaciones empresariales y educativas",
        "Creación de documentos informativos y reportes",
        "Diseño de páginas web y portafolios personales",
        "Colaboración en tiempo real en proyectos de contenido",
        "Automatización del diseño y formato de materiales visuales"
      ],
      en: [
        "Generating business and educational presentations",
        "Creating informational documents and reports",
        "Designing websites and personal portfolios",
        "Real-time collaboration on content projects",
        "Automating design and formatting of visual materials"
      ]
    },
    resources: {
      es: [
        {
          title: "Revisión en profundidad de Gamma.app y herramientas de presentación con IA",
          url: "https://plusai.com/es/blog/gamma-and-other-ai-presentation-tools",
          type: "article",
          description: "Análisis detallado de las funcionalidades y casos de uso de Gamma AI."
        },
        {
          title: "Gamma: tu solución con Inteligencia Artificial para crear ágilmente presentaciones, documentos y más",
          url: "https://videolab.tec.mx/es/para-crear-videos-con-ia/gamma-tu-solucion-con-inteligencia-artificial-para-crear-agilmente-presentaciones-documentos-y",
          type: "article",
          description: "Descripción general de Gamma AI y sus aplicaciones en la creación de contenido."
        },
        {
          title: "Gamma: IA para la creación de presentaciones con solo un prompt",
          url: "https://martescoach.oscarschmitz.com/p/gamma-ia-para-la-creacion-de-presentaciones",
          type: "article",
          description: "Exploración de cómo Gamma AI facilita la creación de presentaciones mediante inteligencia artificial."
        }
      ],
      en: [
        {
          title: "Gamma AI: Intelligent Content Creation Platform",
          url: "https://gamma.app/",
          type: "article",
          description: "Official website of Gamma AI, showcasing its features and capabilities."
        },
        {
          title: "Gamma AI Review: Features, Pros, and Cons",
          url: "https://10web.io/ai-tools/gamma-ai/",
          type: "article",
          description: "Comprehensive review of Gamma AI's functionalities and user experience."
        },
        {
          title: "Gamma AI: Creating Presentations with AI",
          url: "https://www.pageon.ai/es/blog/what-is-gamma-app-and-what-you-need-to-know",
          type: "article",
          description: "Overview of Gamma AI and its applications in content creation."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis con opciones premium",
      en: "Free with premium options"
    },
    difficulty: "beginner",
    logo: "https://aimode.co/wp-content/uploads/2025/03/Gamma-App-Logo.webp",
    slug: "gamma-ai",
    featured: false,
    url: "https://gamma.app"
  },
  {
    id: "31",
    name: "Prompt Genie",
    description: {
      es: "Optimiza tus prompts para modelos de IA como ChatGPT",
      en: "Optimize your prompts for AI models like ChatGPT"
    },
    detailedDescription: {
      es: "Prompt Genie es una herramienta impulsada por inteligencia artificial que transforma indicaciones básicas en 'SUPER Prompts' detallados y optimizados, mejorando la calidad de las respuestas de modelos como ChatGPT, Claude y Gemini. Ofrece una extensión de Chrome que se integra directamente en la interfaz de ChatGPT, permitiendo refinar las indicaciones en tiempo real sin necesidad de una clave API. Además, permite guardar y organizar tus mejores indicaciones para su reutilización futura.",
      en: "Prompt Genie is an AI-powered tool that transforms basic prompts into detailed and optimized 'SUPER Prompts', enhancing the quality of responses from models like ChatGPT, Claude, and Gemini. It offers a Chrome extension that integrates directly into the ChatGPT interface, allowing real-time prompt refinement without the need for an API key. Additionally, it enables you to save and organize your best prompts for future reuse."
    },
    useCases: {
      es: [
        "Mejorar la generación de contenido de marketing y copys publicitarios",
        "Optimizar guiones de video y descripciones de productos",
        "Crear perfiles de cliente ideales y propuestas de valor",
        "Desarrollar planes de lecciones y esquemas educativos",
        "Refinar prompts para obtener respuestas más precisas de modelos de IA"
      ],
      en: [
        "Enhance marketing content and ad copy generation",
        "Optimize video scripts and product descriptions",
        "Create ideal customer profiles and value propositions",
        "Develop lesson plans and educational outlines",
        "Refine prompts to obtain more accurate AI model responses"
      ]
    },
    resources: {
      es: [
        {
          title: "Análisis de Prompt Genie: Características y Opiniones",
          url: "https://iasensei.net/prompt-genie/",
          type: "article",
          description: "Revisión detallada de Prompt Genie, sus funcionalidades y beneficios para mejorar tus prompts."
        },
        {
          title: "Prompt Genie: Herramienta de IA para generar y optimizar prompts",
          url: "https://www.toolify.ai/es/tool/prompt-genie",
          type: "article",
          description: "Descripción de las características principales de Prompt Genie y cómo utilizarla eficazmente."
        },
        {
          title: "Prompt Genie - Aplicación de escritorio para Mac y Windows",
          url: "https://webcatalog.io/es/apps/prompt-genie",
          type: "article",
          description: "Información sobre la aplicación de escritorio de Prompt Genie para diferentes sistemas operativos."
        }
      ],
      en: [
        {
          title: "Prompt Genie Review: Features, Pros, and Cons",
          url: "https://10web.io/ai-tools/prompt-genie/",
          type: "article",
          description: "Comprehensive review of Prompt Genie's features, advantages, and potential drawbacks."
        },
        {
          title: "Prompt Genie - Chrome Web Store",
          url: "https://chromewebstore.google.com/detail/prompt-genie/inafdkdkghgibhijaplaobmomoahefin",
          type: "article",
          description: "Access and install the Prompt Genie Chrome extension to enhance your AI prompt crafting."
        },
        {
          title: "Prompt Genie: Easily Generate Better Prompts for ChatGPT",
          url: "https://deepgram.com/ai-apps/prompt-genie",
          type: "article",
          description: "Overview of how Prompt Genie assists in creating more effective prompts for ChatGPT."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Plan anual desde $8.33/mes",
      en: "Annual plan from $8.33/month"
    },
    difficulty: "beginner",
    logo: "https://10web.io/wp-content/uploads/2024/08/Prompt_Genie_logo.png",
    slug: "prompt-genie",
    featured: false,
    url: "https://www.prompt-genie.com"
  },
  {
    id: "32",
    name: "Coda",
    description: {
      es: "Fusiona documentos, hojas de cálculo en un solo espacio con IA",
      en: "Merge docs, spreadsheets, and apps into a single workspace powered by AI"
    },
    detailedDescription: {
      es: "Coda es una plataforma todo-en-uno que combina la flexibilidad de los documentos, la estructura de las hojas de cálculo y la potencia de las aplicaciones, todo en un solo espacio de trabajo colaborativo. Con la integración de inteligencia artificial, Coda permite automatizar tareas, generar contenido y conectar datos de diversas fuentes, facilitando la creación de soluciones personalizadas para equipos de cualquier tamaño.",
      en: "Coda is an all-in-one platform that blends the flexibility of documents, the structure of spreadsheets, and the power of applications into a single collaborative workspace. With AI integration, Coda enables task automation, content generation, and data connection from various sources, facilitating the creation of customized solutions for teams of any size."
    },
    useCases: {
      es: [
        "Crear wikis y documentación interna",
        "Gestionar proyectos y tareas con seguimiento personalizado",
        "Automatizar flujos de trabajo y procesos repetitivos",
        "Integrar datos de múltiples fuentes en tiempo real",
        "Diseñar aplicaciones internas sin necesidad de programación"
      ],
      en: [
        "Create wikis and internal documentation",
        "Manage projects and tasks with customized tracking",
        "Automate workflows and repetitive processes",
        "Integrate data from multiple sources in real-time",
        "Design internal applications without coding"
      ]
    },
    resources: {
      es: [
        {
          title: "Aprende cómo usar Coda",
          url: "https://coda.io/%40alex-vaughtton/aprende-coda",
          type: "course",
          description: "Curso en español para aprender a utilizar Coda y mejorar tu productividad diaria."
        },
        {
          title: "¿Qué es Coda? La herramienta de productividad no-code",
          url: "https://nocodespain.es/que-es-coda-herramienta-productividad-no-code/",
          type: "article",
          description: "Análisis de las funcionalidades y ventajas de Coda como herramienta no-code."
        },
        {
          title: "Revisión de Coda.io 2024: Transformando la colaboración y la productividad",
          url: "https://www.aitoolgo.com/es/learning/detail/coda-io-review-2024-best-document-project-management",
          type: "article",
          description: "Reseña detallada de Coda.io y su impacto en la gestión de documentos y proyectos."
        }
      ],
      en: [
        {
          title: "Coda: Your all-in-one collaborative workspace",
          url: "https://coda.io/",
          type: "article",
          description: "Official website showcasing Coda's features and capabilities."
        },
        {
          title: "Coda (document editor) - Wikipedia",
          url: "https://en.wikipedia.org/wiki/Coda_(document_editor)",
          type: "article",
          description: "Comprehensive overview of Coda's history, features, and development."
        },
        {
          title: "Coda Review: Features, Pricing and Alternatives",
          url: "https://www.techrepublic.com/article/coda-review/",
          type: "article",
          description: "In-depth review of Coda's functionalities and how it compares to other tools."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Planes desde $10/mes",
      en: "Plans starting at $10/month"
    },
    difficulty: "intermediate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Coda.io_Logo.svg/800px-Coda.io_Logo.svg.png",
    slug: "coda",
    featured: false,
    url: "https://coda.io"
  },
  {
    id: "33",
    name: "ManyChat",
    description: {
      es: "Automatiza conversaciones en Instagram y WhatsApp para aumentar ventas y engagement",
      en: "Automate conversations on Instagram and WhatsApp to boost sales and engagement"
    },
    detailedDescription: {
      es: "ManyChat es una plataforma de automatización de marketing conversacional que permite crear chatbots y flujos de mensajes interactivos en canales como Instagram, WhatsApp, Facebook Messenger y SMS. Con su constructor visual de flujos, puedes diseñar experiencias personalizadas para tus clientes, automatizar respuestas a comentarios y mensajes directos, y recopilar información valiosa para tus campañas de marketing.",
      en: "ManyChat is a conversational marketing automation platform that enables the creation of chatbots and interactive message flows on channels like Instagram, WhatsApp, Facebook Messenger, and SMS. With its visual flow builder, you can design personalized experiences for your customers, automate responses to comments and direct messages, and gather valuable information for your marketing campaigns."
    },
    useCases: {
      es: [
        "Automatizar respuestas a comentarios y mensajes directos en redes sociales",
        "Generar y calificar leads a través de conversaciones automatizadas",
        "Enviar campañas de marketing personalizadas por SMS y Messenger",
        "Integrar chatbots en sitios web para atención al cliente 24/7",
        "Recopilar datos de clientes potenciales para campañas de remarketing"
      ],
      en: [
        "Automate responses to comments and direct messages on social media",
        "Generate and qualify leads through automated conversations",
        "Send personalized marketing campaigns via SMS and Messenger",
        "Integrate chatbots on websites for 24/7 customer support",
        "Collect potential customer data for remarketing campaigns"
      ]
    },
    resources: {
      es: [
        {
          title: "Cómo empezar con la Automatización de DMs de Instagram",
          url: "https://manychat.com/blog/como-empezar-con-la-automatizacion-de-dms-de-instagram-4-automatizaciones-que-necesitas-%F0%9F%A4%A9",
          type: "article",
          description: "Guía para automatizar mensajes directos en Instagram y mejorar la interacción con tus seguidores."
        },
        {
          title: "ManyChat: Herramienta Chatbots para Marketing Conversacional",
          url: "https://aplicaciones-ai.com/manychat/",
          type: "article",
          description: "Análisis de las funcionalidades de ManyChat y cómo puede beneficiar a tu estrategia de marketing."
        },
        {
          title: "Tutorial De ManyChat 2025 | Automatiza Tu Marketing En Redes Sociales",
          url: "https://www.youtube.com/watch?v=NtRwguQ3gbM",
          type: "video",
          description: "Tutorial en video sobre cómo utilizar ManyChat para automatizar tu marketing en redes sociales."
        }
      ],
      en: [
        {
          title: "Chat Marketing Made Easy with Manychat",
          url: "https://manychat.com/",
          type: "article",
          description: "Official website showcasing ManyChat's features and capabilities."
        },
        {
          title: "Manychat for Instagram",
          url: "https://manychat.com/product/instagram",
          type: "article",
          description: "Overview of ManyChat's Instagram DM marketing features."
        },
        {
          title: "Marketing Automation: Types, Tools, and Best Practices",
          url: "https://manychat.com/blog/marketing-automation/",
          type: "article",
          description: "Comprehensive guide on marketing automation and how ManyChat fits in."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Planes desde $15/mes",
      en: "Plans starting at $15/month"
    },
    difficulty: "beginner",
    logo: "https://wpforms.com/wp-content/uploads/cache/integrations/11feaa2e60afe044c942216f1600ee9f.png",
    slug: "manychat",
    featured: false,
    url: "https://manychat.com"
  },
  {
    id: "34",
    tags: ["irrelevant"],
    name: "ClickUp",
    description: {
      es: "Centraliza tareas, documentos y automatizaciones en una plataforma de gestión de proyectos con AI",
      en: "Centralize tasks, docs, and automations in an project management platform powered by AI"
    },
    detailedDescription: {
      es: "ClickUp es una plataforma de productividad y gestión de proyectos que integra tareas, documentos, chat, pizarras, automatizaciones y más en un solo lugar. Su enfoque modular permite personalizar flujos de trabajo mediante ClickApps, vistas personalizadas (lista, tablero, Gantt, calendario, etc.) y automatizaciones sin código. Con la incorporación de ClickUp Brain, su asistente de inteligencia artificial, los equipos pueden generar contenido, resumir información y automatizar tareas repetitivas, mejorando la eficiencia y colaboración.",
      en: "ClickUp is a productivity and project management platform that integrates tasks, docs, chat, whiteboards, automations, and more in one place. Its modular approach allows for customizable workflows through ClickApps, personalized views (list, board, Gantt, calendar, etc.), and no-code automations. With the addition of ClickUp Brain, its AI assistant, teams can generate content, summarize information, and automate repetitive tasks, enhancing efficiency and collaboration."
    },
    useCases: {
      es: [
        "Gestión integral de proyectos con múltiples vistas personalizables",
        "Automatización de tareas repetitivas sin necesidad de programación",
        "Colaboración en tiempo real mediante chat, comentarios y pizarras",
        "Seguimiento de objetivos y métricas clave con paneles personalizados",
        "Integración con herramientas como Google Drive, Slack y Trello"
      ],
      en: [
        "Comprehensive project management with multiple customizable views",
        "Automation of repetitive tasks without the need for coding",
        "Real-time collaboration through chat, comments, and whiteboards",
        "Tracking goals and key metrics with custom dashboards",
        "Integration with tools like Google Drive, Slack, and Trello"
      ]
    },
    resources: {
      es: [
        {
          title: "ClickUp: La herramienta integral para gestionar proyectos",
          url: "https://cmospain.com/clickup-herramienta-gestionar-proyectos/",
          type: "article",
          description: "Análisis detallado de las funcionalidades y ventajas de ClickUp para la gestión de proyectos."
        },
        {
          title: "ClickUp: Una plataforma de gestión de proyectos todo en uno",
          url: "https://www.egosbi.com/clickup-gestion-de-proyecto/",
          type: "article",
          description: "Descripción de cómo ClickUp centraliza la gestión de tareas, documentos y comunicación en una sola plataforma."
        },
        {
          title: "Cómo utilizar ClickUp para la gestión de proyectos",
          url: "https://www.youtube.com/watch?v=UWqo9g5BcSA",
          type: "video",
          description: "Tutorial en video sobre cómo utilizar ClickUp para gestionar proyectos de manera eficiente."
        }
      ],
      en: [
        {
          title: "ClickUp™ for Project Management Solutions",
          url: "https://clickup.com/teams/project-management",
          type: "article",
          description: "Overview of ClickUp's project management solutions and features."
        },
        {
          title: "ClickUp™ Product Features",
          url: "https://clickup.com/features",
          type: "article",
          description: "Detailed description of ClickUp's features and capabilities."
        },
        {
          title: "5 Essential ClickUp Features Every Project Manager Should Know",
          url: "https://www.youtube.com/watch?v=tyVFh7SMlEs",
          type: "video",
          description: "Video highlighting five essential features of ClickUp for project managers."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis / Planes desde $10",
      en: "Free / lans starting at $10"
    },
    difficulty: "intermediate",
    logo: "https://1000logos.net/wp-content/uploads/2022/06/ClickUp-Emblem.png",
    slug: "clickup",
    featured: false,
    url: "https://clickup.com"
  },
  {
    id: "35",
    name: "SmartSuite",
    description: {
      es: "Plataforma colaborativa para gestionar proyectos, tareas y procesos empresariales en un solo lugar",
      en: "Collaborative platform to manage projects, tasks, and business processes all in one place"
    },
    detailedDescription: {
      es: "SmartSuite es una plataforma de gestión del trabajo que permite a los equipos planificar, rastrear y administrar cualquier flujo de trabajo, ya sea un proyecto, un proceso en curso o tareas rutinarias diarias. Ofrece características como usuarios y permisos, integraciones, confianza y seguridad, colaboración en equipo, automatización de flujos de trabajo y más.",
      en: "SmartSuite is a work management platform that enables teams to plan, track, and manage any workflow, whether it's a project, an ongoing process, or routine daily tasks. It offers features like user permissions, integrations, trust and security, team collaboration, workflow automation, and more."
    },
    useCases: {
      es: [
        "Gestión de proyectos y tareas en equipos colaborativos",
        "Automatización de procesos empresariales sin necesidad de programación",
        "Seguimiento de objetivos y métricas clave",
        "Integración con herramientas existentes para centralizar la información",
        "Personalización de flujos de trabajo según las necesidades del equipo"
      ],
      en: [
        "Project and task management in collaborative teams",
        "Business process automation without the need for coding",
        "Tracking of goals and key metrics",
        "Integration with existing tools to centralize information",
        "Customization of workflows according to team needs"
      ]
    },
    resources: {
      es: [
        {
          title: "¿Qué es SmartSuite? ¿Cuánto cuesta? Ventajas y desventajas",
          url: "https://www.smartsuite.com/blog/que-es-smartsuite-cuanto-cuesta-ventajas-y-desventajas",
          type: "article",
          description: "Análisis detallado de las funcionalidades y costos de SmartSuite."
        },
        {
          title: "Aplicación de escritorio para Mac y Windows",
          url: "https://webcatalog.io/es/apps/smartsuite",
          type: "article",
          description: "Información sobre la versión de escritorio de SmartSuite para diferentes sistemas operativos."
        },
        {
          title: "SmartSuite: Una plataforma de gestión del trabajo colaborativa",
          url: "https://www.toolify.ai/es/tool/smartsuite",
          type: "article",
          description: "Descripción de las características principales de SmartSuite y cómo utilizarla eficazmente."
        }
      ],
      en: [
        {
          title: "SmartSuite: One Platform for Managing Work",
          url: "https://www.smartsuite.com/",
          type: "article",
          description: "Overview of SmartSuite's features and capabilities."
        },
        {
          title: "SmartSuite – Plataforma de Seguimiento a la Gestión Estratégica",
          url: "https://smartsuite1.com/",
          type: "article",
          description: "Information on SmartSuite's strategic management tracking platform."
        },
        {
          title: "SmartSuite - Aplicaciones en Google Play",
          url: "https://play.google.com/store/apps/details?hl=es&id=com.smartsuitern",
          type: "article",
          description: "SmartSuite's mobile application available on Google Play."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Desde $10/usuario/mes",
      en: "From $10/user/month"
    },
    difficulty: "intermediate",
    logo: "https://www.rosemet.com/wp-content/uploads/2024/07/SmartSuite-Icon.png",
    slug: "smartsuite",
    featured: false,
    url: "https://www.smartsuite.com/"
  },
  {
    id: "36",
    tags: ["irrelevant"],
    name: "HubSpot",
    description: {
      es: "Plataforma CRM para marketing, ventas y servicio al cliente impulsada por IA",
      en: "CRM platform for marketing, sales, and customer service powered by AI"
    },
    detailedDescription: {
      es: "HubSpot es una plataforma para clientes impulsada por IA que ofrece todo el software, integraciones y recursos que necesitas para conectar tu marketing, ventas y servicio al cliente. La plataforma conectada de HubSpot te permite hacer crecer tu negocio de manera más efectiva al centrarte en lo que más importa: tus clientes.",
      en: "HubSpot is a customer platform powered by AI that offers all the software, integrations, and resources you need to connect your marketing, sales, and customer service. HubSpot's connected platform allows you to grow your business more effectively by focusing on what matters most: your customers."
    },
    useCases: {
      es: [
        "Automatización de campañas de marketing y generación de leads",
        "Gestión de relaciones con clientes y seguimiento de ventas",
        "Análisis de datos y métricas de rendimiento",
        "Integración con herramientas existentes para centralizar la información",
        "Formación y certificación en marketing digital a través de HubSpot Academy"
      ],
      en: [
        "Automation of marketing campaigns and lead generation",
        "Customer relationship management and sales tracking",
        "Data analysis and performance metrics",
        "Integration with existing tools to centralize information",
        "Training and certification in digital marketing through HubSpot Academy"
      ]
    },
    resources: {
      es: [
        {
          title: "Software de marketing para empresas de todos los tamaños",
          url: "https://www.hubspot.es/products/marketing",
          type: "article",
          description: "Información sobre las herramientas de marketing de HubSpot."
        },
        {
          title: "HubSpot Academy",
          url: "https://academy.hubspot.com/es/",
          type: "course",
          description: "Plataforma de formación en inbound marketing, ventas y servicio al cliente."
        },
        {
          title: "Smarketing con Sales Hub y Marketing Hub de HubSpot",
          url: "https://www.hubspot.com/web-guide/es/smarketing-with-hubspots-sales-and-marketing-hubs",
          type: "article",
          description: "Cómo combinar Sales Hub y Marketing Hub para mejorar la estrategia de marketing y ventas."
        }
      ],
      en: [
        {
          title: "Free CRM Software & Tools for Your Whole Team",
          url: "https://www.hubspot.com/products/crm",
          type: "article",
          description: "Overview of HubSpot's free CRM features and tools."
        },
        {
          title: "HubSpot Academy",
          url: "https://academy.hubspot.com/",
          type: "course",
          description: "Training platform for inbound marketing, sales, and customer service."
        },
        {
          title: "IBD Stock Of The Day HubSpot Builds AI Marketing Platform",
          url: "https://www.investors.com/research/ibd-stock-of-the-day/hubspot-stock-ai-marketing-platform-acquisitions/",
          type: "article",
          description: "Analysis of HubSpot's AI marketing platform and recent acquisitions."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Gratis / Planes desde $50/mes",
      en: "Free / Plans starting at $50/month"
    },
    difficulty: "intermediate",
    logo: "https://www.hubspot.com/favicon.ico",
    slug: "hubspot",
    featured: false,
    url: "https://www.hubspot.com/"
  },
  {
    id: "37",
    name: "ADPList",
    description: {
      es: "Conecta con mentores globales en diseño, tecnología y negocios para impulsar tu carrera profesional",
      en: "Connect with global mentors in design, technology, and business to boost your professional career"
    },
    detailedDescription: {
      es: "ADPList es una plataforma gratuita de mentoría que conecta a profesionales con mentores experimentados en áreas como diseño de producto, desarrollo de software, inteligencia artificial, marketing y gestión de productos. Con más de 32,000 mentores en 140 países, ADPList facilita sesiones uno a uno, eventos comunitarios y oportunidades de networking para ayudar a los usuarios a crecer profesionalmente y alcanzar sus objetivos laborales.",
      en: "ADPList is a free mentorship platform that connects professionals with experienced mentors in areas such as product design, software development, artificial intelligence, marketing, and product management. With over 32,000 mentors across 140 countries, ADPList facilitates one-on-one sessions, community events, and networking opportunities to help users grow professionally and achieve their career goals."
    },
    useCases: {
      es: [
        "Recibir orientación profesional personalizada",
        "Prepararse para entrevistas de trabajo",
        "Desarrollar habilidades técnicas y blandas",
        "Expandir la red de contactos profesionales",
        "Obtener retroalimentación sobre portafolios y proyectos"
      ],
      en: [
        "Receive personalized career guidance",
        "Prepare for job interviews",
        "Develop technical and soft skills",
        "Expand professional network",
        "Get feedback on portfolios and projects"
      ]
    },
    resources: {
      es: [
        {
          title: "ADPList: una plataforma para hacer contactos e impulsar carreras",
          url: "https://www.redaccion.com.ar/adp-list-una-plataforma-para-hacer-contactos-e-impulsar-trayectorias-en-el-mundo-laboral/",
          type: "article",
          description: "Artículo que explora cómo ADPList ayuda a profesionales a conectar con mentores y avanzar en sus carreras."
        },
        {
          title: "¿Qué es un programa de mentoría?",
          url: "https://blog.adplist.org/post/what-is-a-mentorship-program",
          type: "article",
          description: "Explicación detallada sobre los programas de mentoría y cómo funcionan en ADPList."
        },
        {
          title: "Sesión: ¿Cómo dar el siguiente paso en mi carrera?",
          url: "https://adplist.org/session/como-doy-el-siguiente-paso-en-mi-carrera",
          type: "video",
          description: "Evento en línea que ofrece consejos prácticos para avanzar en la carrera profesional."
        }
      ],
      en: [
        {
          title: "ADPList Official Website",
          url: "https://adplist.org/",
          type: "article",
          description: "Official website providing access to mentorship sessions and community events."
        },
        {
          title: "Become a Mentor on ADPList",
          url: "https://adplist.org/become-a-mentor",
          type: "article",
          description: "Information on how to join ADPList as a mentor and share your expertise."
        },
        {
          title: "Mentors Directory",
          url: "https://adplist.org/mentors",
          type: "article",
          description: "Browse and connect with mentors across various industries and expertise."
        }
      ]
    },
    category: "network",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://adplist.org/favicon.ico",
    slug: "adplist",
    featured: false,
    url: "https://adplist.org"
  },
  {
    id: "38",
    name: "LinkedIn",
    description: {
      es: "Red profesional líder para conectar, buscar empleo y fortalecer tu marca personal en el ámbito laboral",
      en: "Leading professional network to connect, job search, and strengthen your personal brand in the workplace"
    },
    detailedDescription: {
      es: "LinkedIn es la mayor red profesional del mundo, con más de mil millones de miembros en más de 200 países. Permite a los usuarios crear perfiles profesionales, establecer conexiones, buscar oportunidades laborales, compartir contenido y acceder a recursos educativos como LinkedIn Learning. Además, ofrece herramientas para empresas, como páginas corporativas, soluciones de reclutamiento y publicidad segmentada, facilitando la interacción entre profesionales y organizaciones.",
      en: "LinkedIn is the world's largest professional network, with over one billion members across more than 200 countries. It enables users to create professional profiles, establish connections, search for job opportunities, share content, and access educational resources like LinkedIn Learning. Additionally, it offers tools for businesses, such as company pages, recruitment solutions, and targeted advertising, facilitating interaction between professionals and organizations."
    },
    useCases: {
      es: [
        "Buscar y postularse a empleos",
        "Construir y mantener una red de contactos profesionales",
        "Compartir y consumir contenido relevante del sector",
        "Desarrollar habilidades a través de cursos en línea",
        "Promocionar productos o servicios empresariales"
      ],
      en: [
        "Search and apply for jobs",
        "Build and maintain a professional network",
        "Share and consume industry-relevant content",
        "Develop skills through online courses",
        "Promote business products or services"
      ]
    },
    resources: {
      es: [
        {
          title: "Acerca de LinkedIn",
          url: "https://about.linkedin.com/es-es",
          type: "article",
          description: "Información oficial sobre la misión, visión y servicios de LinkedIn."
        },
        {
          title: "¿Qué es LinkedIn, para qué sirve y cómo funciona?",
          url: "https://www.exprimiendolinkedin.com/que-es-linkedin-para-que-sirve-como-funciona/",
          type: "article",
          description: "Guía completa sobre el funcionamiento y beneficios de LinkedIn."
        },
        {
          title: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning/",
          type: "course",
          description: "Plataforma de aprendizaje en línea con cursos impartidos por expertos en diversas áreas."
        }
      ],
      en: [
        {
          title: "LinkedIn Official Website",
          url: "https://www.linkedin.com/",
          type: "article",
          description: "Access LinkedIn's main platform to connect with professionals and explore opportunities."
        },
        {
          title: "LinkedIn Learning",
          url: "https://www.linkedin.com/learning/",
          type: "course",
          description: "Online learning platform offering courses taught by industry experts."
        },
        {
          title: "Everything to know about LinkedIn",
          url: "https://www.businessinsider.com/linkedin",
          type: "article",
          description: "Comprehensive overview of LinkedIn's features and functionalities."
        }
      ]
    },
    category: "network",
    price: {
      es: "Gratis con opciones premium desde $39.99/mes",
      en: "Free with premium options starting at $39.99/month"
    },
    difficulty: "beginner",
    logo: "https://www.linkedin.com/favicon.ico",
    slug: "linkedin",
    featured: false,
    url: "https://www.linkedin.com"
  },
  {
    id: "39",
    name: "Metricool",
    description: {
      es: "Gestiona, analiza y automatiza tus redes sociales y campañas publicitarias desde una sola plataforma",
      en: "Manage, analyze, and automate your social media and ad campaigns from a single platform"
    },
    detailedDescription: {
      es: "Metricool es una plataforma todo-en-uno que permite a profesionales, agencias y marcas gestionar sus redes sociales y campañas publicitarias desde un único lugar. Ofrece funcionalidades como planificación de contenido, análisis de métricas, generación de informes personalizados, seguimiento de competidores y gestión de anuncios en plataformas como Google Ads y Facebook Ads. Además, cuenta con un asistente de inteligencia artificial que ayuda a optimizar textos para publicaciones y mejorar la estrategia de contenidos.",
      en: "Metricool is an all-in-one platform that enables professionals, agencies, and brands to manage their social media and ad campaigns from a single place. It offers features like content scheduling, metric analysis, custom report generation, competitor tracking, and ad management on platforms like Google Ads and Facebook Ads. Additionally, it includes an AI assistant that helps optimize post texts and enhance content strategy."
    },
    useCases: {
      es: [
        "Planificación y programación de contenido en múltiples redes sociales",
        "Análisis de rendimiento de publicaciones y campañas publicitarias",
        "Generación de informes personalizados para clientes o equipos",
        "Seguimiento y análisis de la competencia en redes sociales",
        "Optimización de textos para publicaciones mediante IA"
      ],
      en: [
        "Planning and scheduling content across multiple social networks",
        "Analyzing performance of posts and ad campaigns",
        "Generating custom reports for clients or teams",
        "Tracking and analyzing competitors on social media",
        "Optimizing post texts using AI"
      ]
    },
    resources: {
      es: [
        {
          title: "Qué es Metricool: la herramienta para el social media",
          url: "https://metricool.com/es/que-es-metricool/",
          type: "article",
          description: "Descubre cómo Metricool puede ayudarte a gestionar y analizar tus redes sociales y campañas publicitarias."
        },
        {
          title: "Cómo Crear una Estrategia de Marketing Desde Cero",
          url: "https://metricool.com/es/como-crear-estrategia-de-marketing/",
          type: "article",
          description: "Guía paso a paso para desarrollar una estrategia de marketing digital efectiva utilizando Metricool."
        },
        {
          title: "Informes de la herramienta Metricool Personaliza tus ...",
          url: "https://www.youtube.com/watch?v=J9ThVZsvwPA",
          type: "video",
          description: "Tutorial sobre cómo crear y personalizar informes en Metricool."
        }
      ],
      en: [
        {
          title: "Metricool: The Social Media Management Tool",
          url: "https://metricool.com/",
          type: "article",
          description: "Learn how Metricool can help you manage and analyze your social media and ad campaigns."
        },
        {
          title: "How to Use Metricool: A Complete Social Media Management Tool",
          url: "https://metricool.com/what-is-metricool/",
          type: "article",
          description: "Comprehensive guide on using Metricool for social media management."
        },
        {
          title: "Metricool Review: Analysis of a Powerful Social Media Management Tool",
          url: "https://www.wealth-ideas.com/metricool-review/",
          type: "article",
          description: "In-depth review of Metricool's features and benefits."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Planes desde $12/mes",
      en: "Plans starting at $12/month"
    },
    difficulty: "beginner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Logo-metricool.png/1200px-Logo-metricool.png",
    slug: "metricool",
    featured: false,
    url: "https://metricool.com"
  },
  {
    id: "40",
    name: "Kommo",
    description: {
      es: "CRM de ventas que integra mensajería instantánea, automatizaciones y bots para potenciar tus ventas",
      en: "Sales CRM integrating instant messaging, automations, and bots to boost your sales"
    },
    detailedDescription: {
      es: "Kommo es un CRM enfocado en ventas conversacionales que permite a las empresas gestionar sus interacciones con clientes a través de aplicaciones de mensajería como WhatsApp, Instagram y Facebook Messenger. Ofrece funcionalidades como automatización de tareas mediante bots, gestión de embudos de ventas, integración con múltiples canales de comunicación y un panel de control unificado para todas las conversaciones. Su enfoque en la mensajería instantánea facilita una comunicación más directa y efectiva con los clientes.",
      en: "Kommo is a conversational sales CRM that enables businesses to manage customer interactions through messaging apps like WhatsApp, Instagram, and Facebook Messenger. It offers features such as task automation via bots, sales pipeline management, integration with multiple communication channels, and a unified dashboard for all conversations. Its focus on instant messaging facilitates more direct and effective communication with customers."
    },
    useCases: {
      es: [
        "Automatización de respuestas en WhatsApp y otras plataformas de mensajería",
        "Gestión centralizada de conversaciones con clientes en múltiples canales",
        "Implementación de bots para tareas repetitivas y respuestas frecuentes",
        "Seguimiento de leads y oportunidades en un embudo de ventas visual",
        "Integración con herramientas como Google Sheets y Zapier"
      ],
      en: [
        "Automating responses on WhatsApp and other messaging platforms",
        "Centralized management of customer conversations across multiple channels",
        "Implementing bots for repetitive tasks and FAQs",
        "Tracking leads and opportunities in a visual sales pipeline",
        "Integration with tools like Google Sheets and Zapier"
      ]
    },
    resources: {
      es: [
        {
          title: "CRM de ventas conversacionales — Kommo",
          url: "https://www.kommo.com/es/",
          type: "article",
          description: "Descubre cómo Kommo puede ayudarte a gestionar tus ventas a través de la mensajería instantánea."
        },
        {
          title: "¿Qué es la venta conversacional? - Kommo",
          url: "https://www.kommo.com/es/recursos/como-empezar/que-es-venta-conversacional/",
          type: "article",
          description: "Aprende sobre el enfoque de ventas conversacionales y cómo implementarlo en tu negocio."
        },
        {
          title: "CRM de Ventas en WhatsApp, Instagram y Más | Tutorial Kommo",
          url: "https://www.youtube.com/watch?v=Q8ODalvYU2U",
          type: "video",
          description: "Tutorial sobre cómo utilizar Kommo para gestionar ventas en plataformas de mensajería."
        }
      ],
      en: [
        {
          title: "Conversational Sales CRM — Kommo",
          url: "https://www.kommo.com/en/",
          type: "article",
          description: "Learn how Kommo can help you manage sales through instant messaging."
        },
        {
          title: "What is Conversational Sales? - Kommo",
          url: "https://www.kommo.com/en/resources/how-to-start/what-is-conversational-sales/",
          type: "article",
          description: "Understand the concept of conversational sales and how to apply it to your business."
        },
        {
          title: "Kommo CRM: Features, Reviews, and Alternatives",
          url: "https://www.generatorlanding.com/blog/kommo-opiniones-caracteristicas",
          type: "article",
          description: "Detailed overview of Kommo's features and user experiences."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Planes desde $15/usuario/mes",
      en: "Plans starting at $15/user/month"
    },
    difficulty: "intermediate",
    logo: "https://www.kommo.com/favicon.ico",
    slug: "kommo",
    featured: false,
    url: "https://www.kommo.com"
  },
  {
    id: "41",
    name: "Leadsales",
    description: {
      es: "CRM que centraliza tus chats de WhatsApp, Instagram y Facebook",
      en: "CRM that centralizes your WhatsApp, Instagram, and Facebook chats"
    },
    detailedDescription: {
      es: "Leadsales es un CRM mexicano diseñado para pequeñas y medianas empresas que venden a través de canales como WhatsApp, Facebook e Instagram. Permite organizar conversaciones en embudos visuales tipo kanban, asignar chats automáticamente a miembros del equipo, programar mensajes y realizar seguimientos efectivos. Su interfaz sencilla y enfoque en ventas conversacionales lo hacen ideal para equipos que buscan escalar sin complicaciones técnicas.",
      en: "Leadsales is a Mexican CRM designed for small and medium-sized businesses that sell through channels like WhatsApp, Facebook, and Instagram. It allows organizing conversations into visual kanban-style pipelines, automatically assigning chats to team members, scheduling messages, and effectively following up. Its simple interface and focus on conversational sales make it ideal for teams looking to scale without technical complications."
    },
    useCases: {
      es: [
        "Centralizar y gestionar conversaciones de ventas desde WhatsApp, Facebook e Instagram",
        "Asignar automáticamente chats a miembros del equipo para un seguimiento eficiente",
        "Crear embudos de ventas personalizados con vistas tipo kanban",
        "Programar mensajes de texto y audio para mejorar la comunicación con clientes",
        "Realizar seguimientos y recordatorios automáticos para no perder oportunidades de venta"
      ],
      en: [
        "Centralize and manage sales conversations from WhatsApp, Facebook, and Instagram",
        "Automatically assign chats to team members for efficient follow-up",
        "Create customized sales pipelines with kanban-style views",
        "Schedule text and audio messages to enhance customer communication",
        "Set up automatic follow-ups and reminders to avoid losing sales opportunities"
      ]
    },
    resources: {
      es: [
        {
          title: "Reseña de Leadsales: CRM para WhatsApp y Redes Sociales",
          url: "https://kalot.com.mx/site/2023/09/12/leadsales-crm-whatsapp-redes-sociales/",
          type: "article",
          description: "Análisis detallado de las funcionalidades y beneficios de Leadsales para la gestión de ventas en plataformas de mensajería."
        },
        {
          title: "Opiniones sobre Leadsales: características, precios y funciones",
          url: "https://leadsales.io/blog/leadsales-opiniones-reales-caracteristicas/",
          type: "article",
          description: "Opiniones de usuarios y descripción de las principales características de Leadsales."
        },
        {
          title: "Leadsales CRM - Opiniones, precios y características",
          url: "https://www.capterra.es/software/215729/leadsales-crm",
          type: "article",
          description: "Evaluaciones de usuarios sobre Leadsales en la plataforma Capterra."
        }
      ],
      en: [
        {
          title: "Leadsales: what is it and how does this WhatsApp CRM work?",
          url: "https://leadsales.io/en/blog/leadsales-what-is-it-and-how-does-this-crm-for-whatsapp-work/",
          type: "article",
          description: "Overview of Leadsales' features and how it helps businesses manage sales through messaging platforms."
        },
        {
          title: "Leadsales targets LatAm businesses with conversational commerce tool for WhatsApp",
          url: "https://techcrunch.com/2023/08/28/whatsapp-leadsales-conversational-commerce/",
          type: "article",
          description: "Article discussing Leadsales' approach to conversational commerce in Latin America."
        },
        {
          title: "Leadsales CRM Whatsapp [Revisión Honesta] - YouTube",
          url: "https://www.youtube.com/watch?v=VMDB34VRLGQ",
          type: "video",
          description: "Video review of Leadsales CRM and its functionalities."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Desde $83.99 USD/mes",
      en: "From $83.99 USD/month"
    },
    difficulty: "beginner",
    logo: "https://leadsales.io/favicon.ico",
    slug: "leadsales",
    featured: false,
    url: "https://leadsales.io"
  },
  {
    id: "42",
    name: "Chatbase",
    description: {
      es: "Crea agentes de IA personalizados para tu sitio web entrenados con tus propios datos",
      en: "Build custom AI agents for your website trained on your own data"
    },
    detailedDescription: {
      es: "Chatbase es una plataforma que permite crear agentes de IA conversacionales entrenados con contenido personalizado, como documentos, enlaces web o bases de datos. Estos agentes pueden integrarse fácilmente en sitios web mediante widgets o APIs, ofreciendo soporte automatizado y respuestas precisas a los usuarios. La plataforma es ideal para empresas que buscan mejorar la atención al cliente y automatizar consultas frecuentes.",
      en: "Chatbase is a platform that allows you to create conversational AI agents trained with custom content, such as documents, web links, or databases. These agents can be easily integrated into websites via widgets or APIs, providing automated support and accurate responses to users. The platform is ideal for businesses looking to enhance customer service and automate frequent inquiries."
    },
    useCases: {
      es: [
        "Automatizar la atención al cliente en sitios web",
        "Proporcionar respuestas rápidas a preguntas frecuentes",
        "Integrar chatbots personalizados en plataformas existentes",
        "Entrenar agentes de IA con documentación específica de la empresa",
        "Reducir la carga de trabajo del equipo de soporte"
      ],
      en: [
        "Automate customer service on websites",
        "Provide quick answers to frequently asked questions",
        "Integrate custom chatbots into existing platforms",
        "Train AI agents with company-specific documentation",
        "Reduce workload for support teams"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de inicio rápido de Chatbase",
          url: "https://www.chatbase.co/",
          type: "article",
          description: "Aprende cómo crear y entrenar tu primer agente de IA con Chatbase."
        },
        {
          title: "Tutorial en video: Cómo integrar Chatbase en tu sitio web",
          url: "https://www.youtube.com/watch?v=example_es",
          type: "video",
          description: "Paso a paso para integrar un agente de Chatbase en tu página."
        },
        {
          title: "Documentación oficial de Chatbase",
          url: "https://www.chatbase.co/docs",
          type: "article",
          description: "Referencia completa de las funcionalidades y APIs disponibles."
        }
      ],
      en: [
        {
          title: "Chatbase Quick Start Guide",
          url: "https://www.chatbase.co/",
          type: "article",
          description: "Learn how to create and train your first AI agent with Chatbase."
        },
        {
          title: "Video Tutorial: Integrating Chatbase into Your Website",
          url: "https://www.youtube.com/watch?v=example_en",
          type: "video",
          description: "Step-by-step guide to embedding a Chatbase agent on your page."
        },
        {
          title: "Chatbase Official Documentation",
          url: "https://www.chatbase.co/docs",
          type: "article",
          description: "Comprehensive reference of available features and APIs."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Planes desde $40/mes",
      en: "Plans starting at $40/month"
    },
    difficulty: "beginner",
    logo: "https://www.chatbase.co/favicon.ico",
    slug: "chatbase",
    featured: false,
    url: "https://www.chatbase.co/"
  },
  {
    id: "43",
    name: "DeepSeek",
    description: {
      es: "Modelo de lenguaje avanzado que ofrece capacidades de razonamiento comparables a los líderes del mercado, de forma gratuita",
      en: "Advanced language model offering reasoning capabilities comparable to market leaders, available for free"
    },
    detailedDescription: {
      es: "DeepSeek es un modelo de lenguaje desarrollado por una startup china que ha ganado reconocimiento por su rendimiento comparable a modelos líderes como ChatGPT. Ofrece respuestas precisas y capacidades de razonamiento avanzado, siendo una opción atractiva para desarrolladores y empresas que buscan integrar inteligencia artificial en sus aplicaciones sin incurrir en altos costos.",
      en: "DeepSeek is a language model developed by a Chinese startup that has gained recognition for its performance comparable to leading models like ChatGPT. It offers accurate responses and advanced reasoning capabilities, making it an attractive option for developers and businesses looking to integrate AI into their applications without incurring high costs."
    },
    useCases: {
      es: [
        "Desarrollo de chatbots y asistentes virtuales",
        "Automatización de procesos de atención al cliente",
        "Análisis y generación de contenido",
        "Integración en aplicaciones empresariales",
        "Investigación y desarrollo en inteligencia artificial"
      ],
      en: [
        "Development of chatbots and virtual assistants",
        "Automation of customer service processes",
        "Content analysis and generation",
        "Integration into business applications",
        "Research and development in artificial intelligence"
      ]
    },
    resources: {
      es: [
        {
          title: "Introducción a DeepSeek",
          url: "https://deep-seek.chat/",
          type: "article",
          description: "Conoce las características y capacidades del modelo de lenguaje DeepSeek."
        },
        {
          title: "Tutorial: Cómo integrar DeepSeek en tu aplicación",
          url: "https://www.youtube.com/watch?v=example_ds_es",
          type: "video",
          description: "Guía paso a paso para utilizar DeepSeek en tus proyectos."
        },
        {
          title: "Documentación oficial de DeepSeek",
          url: "https://api-docs.deepseek.com/",
          type: "article",
          description: "Referencia completa para desarrolladores que deseen utilizar DeepSeek."
        }
      ],
      en: [
        {
          title: "Introduction to DeepSeek",
          url: "https://deep-seek.chat/",
          type: "article",
          description: "Learn about the features and capabilities of the DeepSeek language model."
        },
        {
          title: "Tutorial: Integrating DeepSeek into Your Application",
          url: "https://www.youtube.com/watch?v=example_ds_en",
          type: "video",
          description: "Step-by-step guide to using DeepSeek in your projects."
        },
        {
          title: "DeepSeek Official Documentation",
          url: "https://api-docs.deepseek.com/",
          type: "article",
          description: "Comprehensive reference for developers looking to utilize DeepSeek."
        }
      ]
    },
    category: "dairy",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://brandlogos.net/wp-content/uploads/2025/02/deepseek_logo_icon-logo_brandlogos.net_s5bgc.png",
    slug: "deepseek",
    featured: false,
    url: "https://deep-seek.chat/"
  },
  {
    id: "44",
    tags: ["Top"],
    name: "ElevenLabs",
    description: {
      es: "Genera voces realistas y clones personalizados en más de 30 idiomas con inteligencia artificial avanzada",
      en: "Generate realistic voices and personalized clones in over 30 languages with advanced artificial intelligence"
    },
    detailedDescription: {
      es: "ElevenLabs es una plataforma de inteligencia artificial especializada en síntesis de voz y clonación vocal. Permite crear voces realistas y personalizadas a partir de muestras de audio, facilitando la generación de contenido en múltiples idiomas y estilos. Su tecnología es utilizada en audiolibros, videojuegos, doblajes y más, ofreciendo herramientas como clonación instantánea y profesional, además de APIs para integraciones personalizadas.",
      en: "ElevenLabs is an AI platform specializing in voice synthesis and voice cloning. It enables the creation of realistic and personalized voices from audio samples, facilitating content generation in multiple languages and styles. Its technology is used in audiobooks, video games, dubbing, and more, offering tools like instant and professional cloning, as well as APIs for custom integrations."
    },
    useCases: {
      es: [
        "Narración de audiolibros con voces personalizadas",
        "Doblaje de videos y películas en múltiples idiomas",
        "Creación de asistentes virtuales con voces únicas",
        "Generación de contenido para videojuegos y aplicaciones interactivas",
        "Accesibilidad para personas con dificultades del habla mediante clonación de su propia voz"
      ],
      en: [
        "Narration of audiobooks with personalized voices",
        "Dubbing of videos and movies in multiple languages",
        "Creation of virtual assistants with unique voices",
        "Content generation for video games and interactive applications",
        "Accessibility for individuals with speech difficulties through cloning their own voice"
      ]
    },
    resources: {
      es: [
        {
          title: "Cómo clonar tu voz con ElevenLabs",
          url: "https://www.youtube.com/watch?v=J6o-p4v-5fQ",
          type: "video",
          description: "Tutorial paso a paso para clonar tu voz utilizando ElevenLabs."
        },
        {
          title: "Guía de precios de ElevenLabs",
          url: "https://elevenlabs.io/pricing",
          type: "article",
          description: "Información detallada sobre los planes y precios de ElevenLabs."
        },
        {
          title: "Clonación de voz profesional con ElevenLabs",
          url: "https://elevenlabs.io/voice-cloning",
          type: "article",
          description: "Descripción de las capacidades de clonación de voz profesional de ElevenLabs."
        }
      ],
      en: [
        {
          title: "How to Clone Your Voice with ElevenLabs",
          url: "https://www.youtube.com/watch?v=J6o-p4v-5fQ",
          type: "video",
          description: "Step-by-step tutorial on cloning your voice using ElevenLabs."
        },
        {
          title: "ElevenLabs Pricing Guide",
          url: "https://elevenlabs.io/pricing",
          type: "article",
          description: "Detailed information about ElevenLabs' plans and pricing."
        },
        {
          title: "Professional Voice Cloning with ElevenLabs",
          url: "https://elevenlabs.io/voice-cloning",
          type: "article",
          description: "Overview of ElevenLabs' professional voice cloning capabilities."
        }
      ]
    },
    category: "voice",
    price: {
      es: "Plan gratuito con 10,000 créditos/mes; planes de pago desde $5/mes",
      en: "Free plan with 10,000 credits/month; paid plans starting at $5/month"
    },
    difficulty: "intermediate",
    logo: "https://elevenlabs.io/favicon.ico",
    slug: "elevenlabs",
    featured: false,
    url: "https://elevenlabs.io"
  },
  {
    id: "45",
    tags: ["Top"],
    name: "HeyGen",
    description: {
      es: "Genera videos profesionales con avatares de IA en más de 175 idiomas, sin necesidad de cámara ni edición",
      en: "Generate professional videos with AI avatars in over 175 languages, no camera or editing needed"
    },
    detailedDescription: {
      es: "HeyGen es una plataforma de generación de videos impulsada por inteligencia artificial que permite crear contenido profesional mediante avatares realistas. Ofrece una amplia gama de avatares, incluyendo opciones personalizadas, y soporta más de 175 idiomas y dialectos. Ideal para marketing, formación y comunicación empresarial, HeyGen facilita la creación de videos sin necesidad de habilidades técnicas o equipos de grabación.",
      en: "HeyGen is an AI-powered video generation platform that enables the creation of professional content using realistic avatars. It offers a wide range of avatars, including custom options, and supports over 175 languages and dialects. Ideal for marketing, training, and business communication, HeyGen simplifies video creation without the need for technical skills or recording equipment."
    },
    useCases: {
      es: [
        "Creación de videos de marketing con avatares personalizados",
        "Producción de contenido educativo y de formación",
        "Generación de videos en múltiples idiomas para audiencias globales",
        "Desarrollo de presentaciones empresariales dinámicas",
        "Automatización de mensajes de ventas y atención al cliente"
      ],
      en: [
        "Creating marketing videos with custom avatars",
        "Producing educational and training content",
        "Generating videos in multiple languages for global audiences",
        "Developing dynamic business presentations",
        "Automating sales and customer service messages"
      ]
    },
    resources: {
      es: [
        {
          title: "HeyGen: qué es y cómo funciona la IA de video",
          url: "https://olhardigital.com.br/2024/07/02/internet-e-redes-sociais/heygen-o-que-e-e-como-funciona-ia-de-video/",
          type: "article",
          description: "Explora las funcionalidades de HeyGen y cómo puede transformar la creación de videos."
        },
        {
          title: "HeyGen AI Review 2025",
          url: "https://www.elegantthemes.com/blog/business/heygen-ai-review",
          type: "article",
          description: "Análisis detallado de las capacidades y características de HeyGen."
        },
        {
          title: "HeyGen: A Comprehensive AI-Powered Video Generation Platform",
          url: "https://designboyo.com/topic/heygen-a-comprehensive-ai-powered-video-generation-platform/",
          type: "article",
          description: "Revisión completa de la plataforma de generación de videos HeyGen."
        }
      ],
      en: [
        {
          title: "HeyGen: AI Video Generator | #1 on G2's 2025 Top 100 List",
          url: "https://www.heygen.com/",
          type: "article",
          description: "Overview of HeyGen's features and its recognition as a top AI video generator."
        },
        {
          title: "HeyGen Pricing | Free & Paid Plans from $24/mo",
          url: "https://www.heygen.com/pricing",
          type: "article",
          description: "Detailed information on HeyGen's pricing plans and features."
        },
        {
          title: "Create Advanced Interactive AI Avatars - HeyGen",
          url: "https://www.heygen.com/interactive-avatar",
          type: "article",
          description: "Learn how to create interactive AI avatars using HeyGen."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $24/mes",
      en: "Pplans starting at $24/month"
    },
    difficulty: "beginner",
    logo: "https://www.heygen.com/favicon.ico",
    slug: "heygen",
    featured: false,
    url: "https://www.heygen.com"
  },
  {
    id: "46",
    name: "DupDub",
    description: {
      es: "Plataforma integral de creación de contenido con IA: voz en off, avatares, traducción de videos y más",
      en: "All-in-one AI content creation platform: voiceovers, avatars, video translation, and more"
    },
    detailedDescription: {
      es: "DupDub es una plataforma de creación de contenido impulsada por inteligencia artificial que ofrece herramientas como conversión de texto a voz, clonación de voz, generación de avatares y traducción de videos. Con soporte para más de 40 idiomas y más de 700 voces, DupDub facilita la creación de contenido multimedia de alta calidad para diversas aplicaciones, desde marketing hasta educación.",
      en: "DupDub is an AI-powered content creation platform offering tools like text-to-speech conversion, voice cloning, avatar generation, and video translation. Supporting over 40 languages and more than 700 voices, DupDub simplifies the creation of high-quality multimedia content for various applications, from marketing to education."
    },
    useCases: {
      es: [
        "Generación de voces en off realistas para videos y presentaciones",
        "Creación de avatares animados para contenido interactivo",
        "Traducción y doblaje de videos en múltiples idiomas",
        "Clonación de voz para personalizar experiencias de usuario",
        "Producción de contenido educativo y de formación"
      ],
      en: [
        "Generating realistic voiceovers for videos and presentations",
        "Creating animated avatars for interactive content",
        "Translating and dubbing videos in multiple languages",
        "Voice cloning to personalize user experiences",
        "Producing educational and training content"
      ]
    },
    resources: {
      es: [
        {
          title: "DupDub: Revoluciona la creación de contenido con herramientas impulsadas por IA",
          url: "https://www.trendingaitools.com/ai-tools/dupdub/",
          type: "article",
          description: "Descubre cómo DupDub puede transformar tu proceso de creación de contenido."
        },
        {
          title: "DupDub Review: ¿Vale la pena esta herramienta de IA?",
          url: "https://digiz.ai/dupdub-review-is-this-ai-tool-worth-your-time-and-money/",
          type: "article",
          description: "Análisis de las características y beneficios de DupDub."
        },
        {
          title: "DupDub: Convertir texto en voz en línea con generador de voz IA",
          url: "https://www.toolpilot.ai/products/dupdub",
          type: "article",
          description: "Explora las capacidades de conversión de texto a voz de DupDub."
        }
      ],
      en: [
        {
          title: "DupDub AI Tools: Social Media Content Creation Software",
          url: "https://www.dupdub.com/",
          type: "article",
          description: "Overview of DupDub's AI tools for content creation."
        },
        {
          title: "DupDub Pricing Plans | Start Your Free 3-Day Trial Today",
          url: "https://www.dupdub.com/pricing",
          type: "article",
          description: "Detailed information on DupDub's pricing plans and features."
        },
        {
          title: "DupDub Review - Features, Pricing & Deals",
          url: "https://www.toolsforhumans.ai/ai-tools/dupdub",
          type: "article",
          description: "Comprehensive review of DupDub's features and pricing."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $11/mes",
      en: "Plans starting at $11/month"
    },
    difficulty: "beginner",
    logo: "https://www.dupdub.com/favicon.ico",
    slug: "dupdub",
    featured: false,
    url: "https://www.dupdub.com"
  },
  {
    id: "47",
    name: "Synthesia",
    description: {
      es: "Crea videos profesionales con avatares de IA en más de 140 idiomas, sin necesidad de cámaras ni actores",
      en: "Create professional videos with AI avatars in over 140 languages, no cameras or actors needed"
    },
    detailedDescription: {
      es: "Synthesia es una plataforma de generación de videos impulsada por inteligencia artificial que permite transformar texto en videos profesionales utilizando avatares realistas. Con más de 230 avatares disponibles y soporte para más de 140 idiomas, es ideal para crear contenido de formación, marketing y comunicaciones internas sin necesidad de equipos de grabación. La plataforma ofrece herramientas como clonación de voz, personalización de avatares y plantillas prediseñadas, facilitando la producción de videos de alta calidad de manera eficiente.",
      en: "Synthesia is an AI-powered video generation platform that transforms text into professional videos using realistic avatars. With over 230 avatars and support for more than 140 languages, it's ideal for creating training, marketing, and internal communication content without the need for filming equipment. The platform offers tools like voice cloning, avatar customization, and pre-designed templates, enabling efficient production of high-quality videos."
    },
    useCases: {
      es: [
        "Creación de videos de formación y capacitación multilingües",
        "Producción de contenido de marketing y presentaciones de productos",
        "Generación de comunicaciones internas y actualizaciones empresariales",
        "Desarrollo de videos educativos y tutoriales",
        "Personalización de contenido con avatares y voces específicas"
      ],
      en: [
        "Creating multilingual training and onboarding videos",
        "Producing marketing content and product presentations",
        "Generating internal communications and company updates",
        "Developing educational videos and tutorials",
        "Personalizing content with specific avatars and voices"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial completo de Synthesia: Crea videos con IA",
          url: "https://www.youtube.com/watch?v=ZEEIEs2ey_4",
          type: "video",
          description: "Aprende a utilizar Synthesia para crear videos profesionales con avatares de IA."
        },
        {
          title: "Guía de precios de Synthesia",
          url: "https://help.synthesia.io/en/collections/9616932-plans-pricing",
          type: "article",
          description: "Información detallada sobre los planes y precios disponibles en Synthesia."
        },
        {
          title: "Cómo utilizar Synthesia para generar videos con IA",
          url: "https://zapier.com/blog/synthesia-ai-video/",
          type: "article",
          description: "Descubre cómo aprovechar Synthesia para crear contenido de video eficiente."
        }
      ],
      en: [
        {
          title: "Synthesia AI Tutorial: Complete AI Video Maker 2025",
          url: "https://www.youtube.com/watch?v=ZEEIEs2ey_4",
          type: "video",
          description: "Learn how to use Synthesia to create professional AI-generated videos."
        },
        {
          title: "Synthesia Pricing & Plans",
          url: "https://help.synthesia.io/en/collections/9616932-plans-pricing",
          type: "article",
          description: "Detailed information about Synthesia's available plans and pricing."
        },
        {
          title: "Using Synthesia to generate AI videos",
          url: "https://zapier.com/blog/synthesia-ai-video/",
          type: "article",
          description: "Explore how to leverage Synthesia for efficient video content creation."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $29/mes",
      en: "Plans starting at $29/month"
    },
    difficulty: "intermediate",
    logo: "https://logowik.com/content/uploads/images/synthesia8926.jpg",
    slug: "synthesia",
    featured: false,
    url: "https://www.synthesia.io"
  },
  {
    id: "48",
    name: "Flux 1.1",
    description: {
      es: "Genera imágenes de alta calidad a partir de texto con velocidad y precisión mejoradas",
      en: "Generate high-quality images from text with enhanced speed and accuracy"
    },
    detailedDescription: {
      es: "Flux 1.1 es un modelo de generación de imágenes por IA que transforma descripciones textuales en imágenes detalladas y coherentes. Ofrece una generación seis veces más rápida que su predecesor y mejora la calidad de imagen, la adherencia al prompt y la diversidad de resultados. Es ideal para artistas, diseñadores y creadores de contenido que buscan eficiencia y calidad en la generación de imágenes.",
      en: "Flux 1.1 is an AI image generation model that transforms textual descriptions into detailed and coherent images. It offers six times faster generation than its predecessor and improves image quality, prompt adherence, and result diversity. It's ideal for artists, designers, and content creators seeking efficiency and quality in image generation."
    },
    useCases: {
      es: [
        "Creación rápida de ilustraciones y conceptos visuales",
        "Generación de imágenes para contenido de marketing y redes sociales",
        "Prototipado visual en diseño de productos y moda",
        "Producción de material educativo y presentaciones visuales",
        "Experimentación artística y exploración creativa"
      ],
      en: [
        "Rapid creation of illustrations and visual concepts",
        "Image generation for marketing content and social media",
        "Visual prototyping in product and fashion design",
        "Production of educational materials and visual presentations",
        "Artistic experimentation and creative exploration"
      ]
    },
    resources: {
      es: [
        {
          title: "Generador de imágenes Flux AI",
          url: "https://flux-ai.io/",
          type: "article",
          description: "Explora las capacidades de Flux 1.1 para generar imágenes a partir de texto."
        },
        {
          title: "Flux 1.1 Pro: Generación de imágenes avanzada",
          url: "https://flux1-1.ai/",
          type: "article",
          description: "Descubre las mejoras y características de Flux 1.1 Pro en generación de imágenes."
        },
        {
          title: "Cómo usar Flux 1.1 para crear imágenes",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Tutorial paso a paso sobre cómo utilizar Flux 1.1 para generar imágenes."
        }
      ],
      en: [
        {
          title: "Flux AI Image Generator",
          url: "https://flux-ai.io/",
          type: "article",
          description: "Explore Flux 1.1's capabilities for generating images from text."
        },
        {
          title: "Flux 1.1 Pro: Advanced Image Generation",
          url: "https://flux1-1.ai/",
          type: "article",
          description: "Discover the improvements and features of Flux 1.1 Pro in image generation."
        },
        {
          title: "How to Use Flux 1.1 to Create Images",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Step-by-step tutorial on using Flux 1.1 to generate images."
        }
      ]
    },
    category: "content",
    price: {
      es: "Plan gratuito con funciones limitadas",
      en: "Free plan with limited features"
    },
    difficulty: "intermediate",
    logo: "https://flux-ai.io/favicon.ico",
    slug: "flux-1-1",
    featured: false,
    url: "https://flux-ai.io/"
  },
  {
    id: "49",
    name: "MidJourney",
    description: {
      es: "Genera arte digital de alta calidad a partir de descripciones textuales utilizando IA avanzada",
      en: "Generate high-quality digital art from textual descriptions using advanced AI"
    },
    detailedDescription: {
      es: "MidJourney es una plataforma de generación de imágenes por IA que transforma descripciones textuales en obras de arte digitales detalladas y estilizadas. Operando a través de Discord, permite a los usuarios crear imágenes únicas mediante comandos específicos, ofreciendo una amplia gama de estilos y ajustes personalizados.",
      en: "MidJourney is an AI image generation platform that transforms textual descriptions into detailed and stylized digital artworks. Operating through Discord, it allows users to create unique images using specific commands, offering a wide range of styles and customizable settings."
    },
    useCases: {
      es: [
        "Creación de arte conceptual para proyectos creativos",
        "Generación de imágenes para contenido de redes sociales y marketing",
        "Diseño de personajes y escenarios para videojuegos",
        "Exploración artística y desarrollo de estilo personal",
        "Producción de material visual para presentaciones y publicaciones"
      ],
      en: [
        "Concept art creation for creative projects",
        "Image generation for social media and marketing content",
        "Character and environment design for video games",
        "Artistic exploration and personal style development",
        "Production of visual materials for presentations and publications"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía para comenzar con MidJourney",
          url: "https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide",
          type: "article",
          description: "Aprende cómo utilizar MidJourney para generar imágenes con IA."
        },
        {
          title: "Cómo usar MidJourney para generar imágenes",
          url: "https://www.digitaltrends.com/computing/how-to-use-midjourney-to-generate-ai-images/",
          type: "article",
          description: "Tutorial sobre cómo generar imágenes con MidJourney."
        },
        {
          title: "MidJourney: ¿El mejor generador de imágenes por IA?",
          url: "https://www.youtube.com/watch?v=HW0lrj1qIkw",
          type: "video",
          description: "Análisis comparativo de MidJourney con otros generadores de imágenes por IA."
        }
      ],
      en: [
        {
          title: "Getting Started with MidJourney",
          url: "https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide",
          type: "article",
          description: "Learn how to use MidJourney to generate AI images."
        },
        {
          title: "How to Use MidJourney to Generate Images",
          url: "https://www.digitaltrends.com/computing/how-to-use-midjourney-to-generate-ai-images/",
          type: "article",
          description: "Tutorial on generating images with MidJourney."
        },
        {
          title: "Is MidJourney the Best AI Image Generator?",
          url: "https://www.youtube.com/watch?v=HW0lrj1qIkw",
          type: "video",
          description: "Comparative analysis of MidJourney with other AI image generators."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $10/mes",
      en: "Plans starting at $10/month"
    },
    difficulty: "intermediate",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/midjourney.png",
    slug: "midjourney",
    featured: false,
    url: "https://www.midjourney.com/"
  },
  {
    id: "50",
    name: "Leonardo AI",
    description: {
      es: "Plataforma de IA generativa para crear imágenes y videos de alta calidad a partir de texto o imágenes",
      en: "Generative AI platform to create high-quality images and videos from text or images"
    },
    detailedDescription: {
      es: "Leonardo AI es una plataforma de inteligencia artificial generativa que permite a los usuarios crear imágenes y videos de alta calidad a partir de descripciones textuales o imágenes existentes. Utiliza modelos de IA entrenados con millones de datos visuales para generar arte en una variedad de estilos, y ofrece herramientas avanzadas para personalizar, editar y postprocesar las imágenes generadas. La plataforma incluye funciones como 'Flow State' para generar múltiples opciones visuales, 'Elements' para mantener la coherencia visual, y 'Phoenix', su primer modelo fundamental para generación de imágenes. También incluye 'Motion 2.0' para convertir imágenes en videos animados.",
      en: "Leonardo AI is a generative artificial intelligence platform that allows users to create high-quality images and videos from textual descriptions or existing images. It uses AI models trained with millions of visual data to generate art in various styles and offers advanced tools to customize, edit, and post-process the generated images. The platform includes features like 'Flow State' to generate multiple visual options, 'Elements' to maintain visual consistency, and 'Phoenix', its first foundational model for image generation. It also includes 'Motion 2.0' to turn images into animated videos."
    },
    useCases: {
      es: [
        "Creación de arte conceptual y diseño gráfico",
        "Generación de contenido visual para marketing y redes sociales",
        "Producción de ilustraciones para libros y publicaciones",
        "Desarrollo de activos visuales para videojuegos",
        "Conversión de imágenes en videos animados para presentaciones"
      ],
      en: [
        "Concept art creation and graphic design",
        "Visual content generation for marketing and social media",
        "Illustration production for books and publications",
        "Development of visual assets for video games",
        "Conversion of images into animated videos for presentations"
      ]
    },
    resources: {
      es: [
        {
          title: "Leonardo AI: Generador de imágenes por IA",
          url: "https://leonardo.ai/",
          type: "article",
          description: "Explora las capacidades de Leonardo AI para generar contenido visual a partir de texto."
        },
        {
          title: "Tutorial de Leonardo AI: Generador de imágenes",
          url: "https://www.youtube.com/watch?v=36rSjS5hV4Y",
          type: "video",
          description: "Aprende a utilizar Leonardo AI para crear imágenes con IA."
        },
        {
          title: "Cómo generar imágenes con Leonardo AI",
          url: "https://intercom.help/leonardo-ai/en/articles/8942360-how-to-generate-images-with-leonardo-ai",
          type: "article",
          description: "Guía paso a paso para generar imágenes con Leonardo AI."
        }
      ],
      en: [
        {
          title: "Leonardo AI: AI Image Generator",
          url: "https://leonardo.ai/",
          type: "article",
          description: "Explore Leonardo AI's capabilities for generating visual content from text."
        },
        {
          title: "Leonardo AI Tutorial: Image Generator",
          url: "https://www.youtube.com/watch?v=36rSjS5hV4Y",
          type: "video",
          description: "Learn how to use Leonardo AI to create images with AI."
        },
        {
          title: "How to Generate Images with Leonardo AI",
          url: "https://intercom.help/leonardo-ai/en/articles/8942360-how-to-generate-images-with-leonardo-ai",
          type: "article",
          description: "Step-by-step guide to generating images with Leonardo AI."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $10/mes",
      en: "Plans starting at $10/month"
    },
    difficulty: "intermediate",
    logo: "https://leonardo.ai/favicon.ico",
    slug: "leonardo-ai",
    featured: false,
    url: "https://leonardo.ai/"
  },
  {
    id: "51",
    name: "Kling AI",
    description: {
      es: "Generador de videos con IA que transforma texto e imágenes en clips animados de alta calidad",
      en: "AI video generator that transforms text and images into high-quality animated clips"
    },
    detailedDescription: {
      es: "Kling AI es una herramienta avanzada de generación de videos con inteligencia artificial desarrollada por Kuaishou Technology. Permite crear videos realistas a partir de descripciones textuales o imágenes estáticas, ofreciendo una creación de videos rápida y de calidad profesional. La plataforma incluye funciones como generación de texto a video, imagen a video, pincel de movimiento, extensión de video, modelo de cara, sincronización de labios, movimiento de cámara, prueba virtual, elementos, marco de inicio/fin y API. Desde su lanzamiento, ha generado más de 10 millones de videos.",
      en: "Kling AI is an advanced AI video generation tool developed by Kuaishou Technology. It allows users to create realistic videos from textual descriptions or static images, offering fast and professional-quality video creation. The platform includes features such as text-to-video generation, image-to-video conversion, motion brush, video extension, face model, lip synchronization, camera movement, virtual try-on, elements, start/end frame, and API. Since its launch, it has generated over 10 million videos."
    },
    useCases: {
      es: [
        "Creación de videos promocionales y publicitarios",
        "Generación de contenido animado para redes sociales",
        "Producción de videos educativos y tutoriales",
        "Desarrollo de presentaciones visuales dinámicas",
        "Transformación de imágenes estáticas en videos animados"
      ],
      en: [
        "Creation of promotional and advertising videos",
        "Generation of animated content for social media",
        "Production of educational and tutorial videos",
        "Development of dynamic visual presentations",
        "Transformation of static images into animated videos"
      ]
    },
    resources: {
      es: [
        {
          title: "Generador de videos Kling AI",
          url: "https://pollo.ai/es/m/kling-ai",
          type: "article",
          description: "Explora las capacidades de Kling AI para generar videos a partir de texto e imágenes."
        },
        {
          title: "Cómo usar Kling AI para crear videos con IA",
          url: "https://www.youtube.com/watch?v=m6zEjDALPqE",
          type: "video",
          description: "Tutorial paso a paso sobre cómo utilizar Kling AI para generar videos."
        },
        {
          title: "Prueba el generador de videos Kling AI en línea",
          url: "https://www.goenhance.ai/es/video-models/kling-ai",
          type: "article",
          description: "Descubre cómo crear videos de alta calidad con Kling AI."
        }
      ],
      en: [
        {
          title: "Kling AI Video Generator",
          url: "https://pollo.ai/es/m/kling-ai",
          type: "article",
          description: "Explore Kling AI's capabilities for generating videos from text and images."
        },
        {
          title: "How to Use Kling AI to Create Videos with AI",
          url: "https://www.youtube.com/watch?v=m6zEjDALPqE",
          type: "video",
          description: "Step-by-step tutorial on using Kling AI to generate videos."
        },
        {
          title: "Try Kling AI Video Generator Online",
          url: "https://www.goenhance.ai/es/video-models/kling-ai",
          type: "article",
          description: "Learn how to create high-quality videos with Kling AI."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $10/mes",
      en: "Plans starting at $10/month"
    },
    difficulty: "intermediate",
    logo: "https://www.fahimai.com/wp-content/uploads/2024/11/Kling-AI-CTA.png",
    slug: "kling-ai",
    featured: false,
    url: "https://kling.ai/"
  },
  {
    id: "52",
    tags: ["irrelevant"],
    name: "Sora AI",
    description: {
      es: "Genera videos realistas de hasta 60 segundos a partir de texto, imágenes o clips existentes",
      en: "Generate realistic videos up to 60 seconds from text, images, or existing clips"
    },
    detailedDescription: {
      es: "Sora es el modelo de generación de video de OpenAI que transforma descripciones textuales, imágenes o videos en clips realistas de hasta 60 segundos. Ofrece herramientas como 'Remix' para modificar elementos dentro del video, 'Re-cut' para extender escenas, 'Storyboard' para organizar secuencias y 'Loop' para crear videos repetitivos sin interrupciones. Disponible para suscriptores de ChatGPT Plus y Pro, Sora permite generar videos en diferentes resoluciones y relaciones de aspecto.",
      en: "Sora is OpenAI's video generation model that transforms text descriptions, images, or videos into realistic clips up to 60 seconds long. It offers tools like 'Remix' to modify elements within the video, 'Re-cut' to extend scenes, 'Storyboard' to organize sequences, and 'Loop' to create seamless repeating videos. Available to ChatGPT Plus and Pro subscribers, Sora allows generating videos in various resolutions and aspect ratios."
    },
    useCases: {
      es: [
        "Creación de videos promocionales y publicitarios",
        "Generación de contenido educativo y tutoriales",
        "Producción de videos para redes sociales",
        "Desarrollo de prototipos visuales para cine y animación",
        "Transformación de ideas escritas en videos realistas"
      ],
      en: [
        "Creation of promotional and advertising videos",
        "Generation of educational content and tutorials",
        "Production of videos for social media",
        "Development of visual prototypes for film and animation",
        "Transformation of written ideas into realistic videos"
      ]
    },
    resources: {
      es: [
        {
          title: "Página oficial de Sora",
          url: "https://openai.com/sora/",
          type: "article",
          description: "Explora las capacidades de Sora y accede a la plataforma."
        },
        {
          title: "Sora: Generador de video de OpenAI",
          url: "https://openai.com/index/sora-is-here/",
          type: "article",
          description: "Conoce más sobre el lanzamiento y características de Sora."
        },
        {
          title: "Sora AI: ¿Vale la pena el bombo?",
          url: "https://www.youtube.com/watch?v=SkQcG-sxnyI",
          type: "video",
          description: "Análisis y demostración de las capacidades de Sora."
        }
      ],
      en: [
        {
          title: "Sora Official Page",
          url: "https://openai.com/sora/",
          type: "article",
          description: "Explore Sora's capabilities and access the platform."
        },
        {
          title: "Sora: OpenAI's Video Generator",
          url: "https://openai.com/index/sora-is-here/",
          type: "article",
          description: "Learn more about Sora's launch and features."
        },
        {
          title: "Sora AI: Is It Worth the Hype?",
          url: "https://www.youtube.com/watch?v=SkQcG-sxnyI",
          type: "video",
          description: "Analysis and demonstration of Sora's capabilities."
        }
      ]
    },
    category: "content",
    price: {
      es: "Incluido en ChatGPT Plus y Pro",
      en: "Included in ChatGPT Plus and Pro"
    },
    difficulty: "intermediate",
    logo: "https://openai.com/favicon.ico",
    slug: "sora-ai",
    featured: false,
    url: "https://openai.com/sora/"
  },
  {
    id: "53",
    name: "Luma AI",
    description: {
      es: "Genera videos realistas de 5 segundos a partir de texto o imágenes con movimiento fluido y coherente",
      en: "Generate realistic 5-second videos from text or images with smooth and coherent motion"
    },
    detailedDescription: {
      es: "Dream Machine es el modelo de generación de video de Luma Labs que permite crear videos de 5 segundos de duración a partir de descripciones textuales o imágenes. Utiliza modelos avanzados de IA para capturar movimientos realistas y coherencia visual. Los usuarios pueden generar hasta 30 videos gratuitos, con opciones de suscripción para producciones más extensas. La plataforma está disponible en la web y en iOS.",
      en: "Dream Machine is Luma Labs' video generation model that enables the creation of 5-second videos from text descriptions or images. It employs advanced AI models to capture realistic motion and visual coherence. Users can generate up to 30 free videos, with subscription options for more extensive productions. The platform is available on the web and iOS."
    },
    useCases: {
      es: [
        "Creación de contenido visual para redes sociales",
        "Generación de videos promocionales cortos",
        "Producción de videos educativos y tutoriales",
        "Desarrollo de prototipos visuales para proyectos creativos",
        "Transformación de imágenes estáticas en videos animados"
      ],
      en: [
        "Creation of visual content for social media",
        "Generation of short promotional videos",
        "Production of educational videos and tutorials",
        "Development of visual prototypes for creative projects",
        "Transformation of static images into animated videos"
      ]
    },
    resources: {
      es: [
        {
          title: "Dream Machine: Generador de video de Luma AI",
          url: "https://lumalabs.ai/dream-machine",
          type: "article",
          description: "Explora las capacidades de Dream Machine y accede a la plataforma."
        },
        {
          title: "Guía para generar videos con Dream Machine",
          url: "https://lumalabs.ai/create/ai-video-generator-from-image",
          type: "article",
          description: "Aprende a crear videos a partir de texto o imágenes con Dream Machine."
        },
        {
          title: "Dream Machine: ¿Vale la pena?",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Análisis y demostración de las capacidades de Dream Machine."
        }
      ],
      en: [
        {
          title: "Dream Machine: Luma AI's Video Generator",
          url: "https://lumalabs.ai/dream-machine",
          type: "article",
          description: "Explore Dream Machine's capabilities and access the platform."
        },
        {
          title: "Guide to Generating Videos with Dream Machine",
          url: "https://lumalabs.ai/create/ai-video-generator-from-image",
          type: "article",
          description: "Learn how to create videos from text or images with Dream Machine."
        },
        {
          title: "Dream Machine: Is It Worth It?",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Analysis and demonstration of Dream Machine's capabilities."
        }
      ]
    },
    category: "content",
    price: {
      es: "30 videos gratuitos",
      en: "30 free videos"
    },
    difficulty: "intermediate",
    logo: "https://logos-world.net/wp-content/uploads/2024/11/Luma-Labs-Logo.png",
    slug: "luma-ai-dream-machine",
    featured: false,
    url: "https://lumalabs.ai/dream-machine"
  },
  {
    id: "54",
    tags: ["Top"],
    name: "Pika AI",
    description: {
      es: "Genera videos cortos y dinámicos a partir de texto o imágenes con efectos avanzados",
      en: "Generate short, dynamic videos from text or images with advanced effects"
    },
    detailedDescription: {
      es: "Pika AI es una plataforma de generación de videos impulsada por inteligencia artificial desarrollada por Pika Labs. Permite a los usuarios crear videos de hasta 10 segundos en resolución 1080p a partir de descripciones textuales o imágenes. La versión más reciente, Pika 2.2, introduce 'Pikaframes', un sistema de transición de fotogramas clave que permite transiciones suaves y controladas. Además, ofrece funciones como 'Pikaswaps' para reemplazar elementos en videos y 'Selfie With Your Younger Self' para crear interacciones entre versiones actuales y pasadas del usuario.",
      en: "Pika AI is an AI-powered video generation platform developed by Pika Labs. It enables users to create videos up to 10 seconds long in 1080p resolution from text descriptions or images. The latest version, Pika 2.2, introduces 'Pikaframes', a keyframe transition system allowing smooth and controlled transitions. Additionally, it offers features like 'Pikaswaps' to replace elements in videos and 'Selfie With Your Younger Self' to create interactions between current and past versions of the user."
    },
    useCases: {
      es: [
        "Creación de contenido visual para redes sociales",
        "Generación de videos promocionales cortos",
        "Producción de videos educativos y tutoriales",
        "Desarrollo de prototipos visuales para proyectos creativos",
        "Transformación de imágenes estáticas en videos animados"
      ],
      en: [
        "Creation of visual content for social media",
        "Generation of short promotional videos",
        "Production of educational videos and tutorials",
        "Development of visual prototypes for creative projects",
        "Transformation of static images into animated videos"
      ]
    },
    resources: {
      es: [
        {
          title: "Pika Labs: Generador de videos con IA",
          url: "https://pikalabsai.org/",
          type: "article",
          description: "Explora las capacidades de Pika AI y accede a la plataforma."
        },
        {
          title: "Cómo usar Pika Labs - Generador de imágenes a video",
          url: "https://www.youtube.com/watch?v=MZh2RhG4tkM",
          type: "video",
          description: "Tutorial paso a paso sobre cómo utilizar Pika Labs para generar videos."
        },
        {
          title: "Pika AI: Generador de videos con IA",
          url: "https://pollo.ai/m/pika-ai",
          type: "article",
          description: "Descubre cómo crear videos de alta calidad con Pika AI."
        }
      ],
      en: [
        {
          title: "Pika Labs: AI Video Generator",
          url: "https://pikalabsai.org/",
          type: "article",
          description: "Explore Pika AI's capabilities and access the platform."
        },
        {
          title: "How to Use Pika Labs - Image to Video Generator",
          url: "https://www.youtube.com/watch?v=MZh2RhG4tkM",
          type: "video",
          description: "Step-by-step tutorial on using Pika Labs to generate videos."
        },
        {
          title: "Pika AI: AI Video Generator",
          url: "https://pollo.ai/m/pika-ai",
          type: "article",
          description: "Learn how to create high-quality videos with Pika AI."
        }
      ]
    },
    category: "content",
    price: {
      es: "Plan gratuito con funciones limitadas",
      en: "Free plan with limited features"
    },
    difficulty: "beginner",
    logo: "https://www.fahimai.com/wp-content/uploads/2024/08/CTA-27.png",
    slug: "pika-ai",
    featured: false,
    url: "https://pikalabsai.org/"
  },
  {
    id: "55",
    name: "Runway",
    description: {
      es: "Plataforma de generación de videos con IA que transforma texto, imágenes o videos en clips realistas",
      en: "AI video generation platform that transforms text, images, or videos into realistic clips"
    },
    detailedDescription: {
      es: "Runway es una plataforma de inteligencia artificial generativa que permite crear videos realistas a partir de texto, imágenes o videos existentes. Su modelo más reciente, Gen-4, ofrece capacidades avanzadas para mantener la coherencia de personajes y escenas a lo largo de múltiples tomas, abordando un desafío común en los videos generados por IA. Runway ha sido utilizado en producciones cinematográficas y musicales, y ha establecido asociaciones con estudios como Lionsgate para integrar sus modelos en la industria del cine.",
      en: "Runway is a generative artificial intelligence platform that enables the creation of realistic videos from text, images, or existing videos. Its latest model, Gen-4, offers advanced capabilities to maintain character and scene consistency across multiple shots, addressing a common challenge in AI-generated videos. Runway has been used in film and music productions and has established partnerships with studios like Lionsgate to integrate its models into the film industry."
    },
    useCases: {
      es: [
        "Creación de videos promocionales y publicitarios",
        "Generación de contenido educativo y tutoriales",
        "Producción de videos para redes sociales",
        "Desarrollo de prototipos visuales para cine y animación",
        "Transformación de ideas escritas en videos realistas"
      ],
      en: [
        "Creation of promotional and advertising videos",
        "Generation of educational content and tutorials",
        "Production of videos for social media",
        "Development of visual prototypes for film and animation",
        "Transformation of written ideas into realistic videos"
      ]
    },
    resources: {
      es: [
        {
          title: "Runway: Herramientas para la imaginación humana",
          url: "https://runwayml.com/",
          type: "article",
          description: "Explora las capacidades de Runway y accede a la plataforma."
        },
        {
          title: "Cómo usar Runway ML para principiantes",
          url: "https://www.youtube.com/watch?v=2znljxhxdIM",
          type: "video",
          description: "Tutorial paso a paso sobre cómo utilizar Runway ML para generar videos."
        },
        {
          title: "Runway: Generador de videos con IA",
          url: "https://www.vadoo.tv/runway-ai-video-generator",
          type: "article",
          description: "Descubre cómo crear videos de alta calidad con Runway."
        }
      ],
      en: [
        {
          title: "Runway: Tools for Human Imagination",
          url: "https://runwayml.com/",
          type: "article",
          description: "Explore Runway's capabilities and access the platform."
        },
        {
          title: "How to Use Runway ML for Beginners",
          url: "https://www.youtube.com/watch?v=2znljxhxdIM",
          type: "video",
          description: "Step-by-step tutorial on using Runway ML to generate videos."
        },
        {
          title: "Runway: AI-Powered Video Creator",
          url: "https://www.vadoo.tv/runway-ai-video-generator",
          type: "article",
          description: "Learn how to create high-quality videos with Runway."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $12/mes",
      en: "Plans starting at $12/month"
    },
    difficulty: "intermediate",
    logo: "https://pngdownloads.wordpress.com/wp-content/uploads/2024/04/runway-ai-black-symbol-logo-png.jpg",
    slug: "runway",
    featured: false,
    url: "https://runwayml.com/"
  },
  {
    id: "56",
    name: "Voiceflow",
    description: {
      es: "Plataforma sin código para diseñar, prototipar y desplegar agentes conversacionales de voz y chat",
      en: "No-code platform to design, prototype, and deploy voice and chat conversational agents"
    },
    detailedDescription: {
      es: "Voiceflow es una plataforma sin código que permite a equipos de producto diseñar, desarrollar y desplegar experiencias de IA conversacional, como chatbots y asistentes de voz. Ofrece un constructor visual de arrastrar y soltar para crear flujos conversacionales complejos sin necesidad de programación. Voiceflow admite integraciones con modelos de IA, APIs y plataformas de mensajería, facilitando la colaboración entre diseñadores, desarrolladores y partes interesadas.",
      en: "Voiceflow is a no-code platform that enables product teams to design, develop, and deploy conversational AI experiences like chatbots and voice assistants. It offers a visual drag-and-drop builder to create complex conversational flows without coding. Voiceflow supports integrations with AI models, APIs, and messaging platforms, facilitating collaboration among designers, developers, and stakeholders."
    },
    useCases: {
      es: [
        "Automatización del soporte al cliente",
        "Desarrollo de asistentes virtuales para sitios web",
        "Creación de prototipos de experiencias conversacionales",
        "Integración de agentes de IA en aplicaciones empresariales",
        "Diseño de flujos conversacionales para dispositivos inteligentes"
      ],
      en: [
        "Customer support automation",
        "Development of virtual assistants for websites",
        "Prototyping conversational experiences",
        "Integration of AI agents into business applications",
        "Designing conversational flows for smart devices"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Voiceflow",
          url: "https://www.voiceflow.com/",
          type: "article",
          description: "Explora las capacidades de Voiceflow y accede a la plataforma."
        },
        {
          title: "Guía para crear un proyecto en Voiceflow",
          url: "https://voiceflow.zendesk.com/hc/en-us/articles/15965489787789-Step-1-Create-a-Project",
          type: "article",
          description: "Aprende a crear tu primer proyecto en Voiceflow paso a paso."
        },
        {
          title: "Revisión de Voiceflow: Características y precios",
          url: "https://chatimize.com/reviews/voiceflow/",
          type: "article",
          description: "Análisis detallado de las funcionalidades y planes de Voiceflow."
        }
      ],
      en: [
        {
          title: "Voiceflow Official Website",
          url: "https://www.voiceflow.com/",
          type: "article",
          description: "Explore Voiceflow's capabilities and access the platform."
        },
        {
          title: "Step 1 - Create a Project in Voiceflow",
          url: "https://voiceflow.zendesk.com/hc/en-us/articles/15965489787789-Step-1-Create-a-Project",
          type: "article",
          description: "Learn how to create your first project in Voiceflow step by step."
        },
        {
          title: "Voiceflow Review: Features and Pricing",
          url: "https://chatimize.com/reviews/voiceflow/",
          type: "article",
          description: "Detailed analysis of Voiceflow's functionalities and plans."
        }
      ]
    },
    category: "voice",
    price: {
      es: "Planes desde $60/mes",
      en: "Plans starting at $60/month"
    },
    difficulty: "intermediate",
    logo: "https://pbs.twimg.com/profile_images/1770088656230916096/bny49PuI_400x400.jpg",
    slug: "voiceflow",
    featured: false,
    url: "https://www.voiceflow.com/"
  },
  {
    id: "57",
    tags: ["irrelevant"],
    name: "Vapi",
    description: {
      es: "Plataforma para crear, probar y desplegar agentes de voz con IA",
      en: "Platform to build, test, and deploy AI voice agents"
    },
    detailedDescription: {
      es: "Vapi es una plataforma orientada a desarrolladores para crear asistentes de voz impulsados por inteligencia artificial que manejan llamadas telefónicas con intervención humana mínima. Permite construir y desplegar agentes de voz de IA que pueden responder o realizar llamadas, utilizando una base de conocimientos sobre tu negocio o productos para proporcionar respuestas informadas en tiempo real. Vapi ofrece una interfaz de construcción intuitiva para crear tus propios agentes de soporte al cliente.",
      en: "Vapi is a developer-focused platform for creating AI-powered voice assistants that handle phone calls with minimal human intervention. It allows building and deploying AI voice agents that can answer or make calls, using a knowledge base about your business or products to provide informed responses in real-time. Vapi offers an intuitive building interface for creating your own customer support agents."
    },
    useCases: {
      es: [
        "Automatización de llamadas de soporte al cliente",
        "Programación de citas en sectores regulados",
        "Calificación de prospectos mediante llamadas salientes",
        "Investigación de mercado a través de encuestas telefónicas",
        "Integración de agentes de voz en sistemas existentes"
      ],
      en: [
        "Automation of customer support calls",
        "Appointment scheduling in regulated sectors",
        "Lead qualification through outbound calls",
        "Market research via phone surveys",
        "Integration of voice agents into existing systems"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Vapi",
          url: "https://vapi.ai/",
          type: "article",
          description: "Explora las capacidades de Vapi y accede a la plataforma."
        },
        {
          title: "Cómo construir un asistente de voz con Vapi",
          url: "https://www.youtube.com/watch?v=U6bs_1bKEnM",
          type: "video",
          description: "Guía paso a paso para crear asistentes de voz con Vapi y Zapier."
        },
        {
          title: "Revisión de Vapi AI: Pros y contras",
          url: "https://www.lindy.ai/blog/vapi-ai",
          type: "article",
          description: "Análisis detallado de las funcionalidades y casos de uso de Vapi."
        }
      ],
      en: [
        {
          title: "Vapi Official Website",
          url: "https://vapi.ai/",
          type: "article",
          description: "Explore Vapi's capabilities and access the platform."
        },
        {
          title: "How to Build an AI Voice Assistant with Vapi",
          url: "https://www.youtube.com/watch?v=U6bs_1bKEnM",
          type: "video",
          description: "Step-by-step guide to creating voice assistants with Vapi and Zapier."
        },
        {
          title: "Vapi AI Review: Pros and Cons",
          url: "https://www.lindy.ai/blog/vapi-ai",
          type: "article",
          description: "Detailed analysis of Vapi's functionalities and use cases."
        }
      ]
    },
    category: "voice",
    price: {
      es: "Pago por uso",
      en: "Pay per Use"
    },
    difficulty: "advanced",
    logo: "https://vapi.ai/favicon.ico",
    slug: "vapi",
    featured: false,
    url: "https://vapi.ai/"
  },
  {
    id: "58",
    name: "Bland AI",
    description: {
      es: "Automatiza llamadas con agentes de voz que suenan humanos, disponibles 24/7 y personalizables para ventas y más",
      en: "Automate calls with human-sounding voice agents, available 24/7 and customizable for sales and more"
    },
    detailedDescription: {
      es: "Bland AI es una plataforma que permite automatizar llamadas telefónicas mediante agentes de voz impulsados por inteligencia artificial que suenan naturales y pueden hablar cualquier idioma. Estos agentes pueden manejar tareas como ventas, programación de citas y soporte al cliente, operando las 24 horas del día. La plataforma ofrece herramientas como 'Conversational Pathways' para controlar el flujo de las conversaciones y la integración con webhooks para acciones en tiempo real.",
      en: "Bland AI is a platform that enables the automation of phone calls through AI-powered voice agents that sound natural and can speak any language. These agents can handle tasks such as sales, appointment scheduling, and customer support, operating 24/7. The platform offers tools like 'Conversational Pathways' to control the flow of conversations and integration with webhooks for real-time actions."
    },
    useCases: {
      es: [
        "Automatización de llamadas de ventas y soporte",
        "Programación de citas y recordatorios",
        "Encuestas telefónicas automatizadas",
        "Integración con sistemas CRM para seguimiento de clientes",
        "Atención al cliente multilingüe sin intervención humana"
      ],
      en: [
        "Automation of sales and support calls",
        "Appointment scheduling and reminders",
        "Automated phone surveys",
        "Integration with CRM systems for customer follow-up",
        "Multilingual customer service without human intervention"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Bland AI",
          url: "https://www.bland.ai/",
          type: "article",
          description: "Explora las capacidades de Bland AI y accede a la plataforma."
        },
        {
          title: "Cómo Bland AI está revolucionando las llamadas telefónicas",
          url: "https://www.bland.ai/blogs/conversational-ai",
          type: "article",
          description: "Descubre cómo Bland AI transforma la comunicación empresarial."
        },
        {
          title: "Todo sobre Bland AI: Automatiza tus llamadas con IA",
          url: "https://www.youtube.com/watch?v=w7UQ6MgxM0Q",
          type: "video",
          description: "Video explicativo sobre las funcionalidades de Bland AI."
        }
      ],
      en: [
        {
          title: "Bland AI Official Website",
          url: "https://www.bland.ai/",
          type: "article",
          description: "Explore Bland AI's capabilities and access the platform."
        },
        {
          title: "How Bland AI is Revolutionizing Phone Calls",
          url: "https://www.bland.ai/blogs/conversational-ai",
          type: "article",
          description: "Learn how Bland AI transforms business communication."
        },
        {
          title: "All About Bland AI: Automate Your Calls with AI",
          url: "https://www.youtube.com/watch?v=w7UQ6MgxM0Q",
          type: "video",
          description: "Explanatory video about Bland AI's functionalities."
        }
      ]
    },
    category: "voice",
    price: {
      es: "$0.09 por minuto de llamada",
      en: "$0.09 per call minute"
    },
    difficulty: "intermediate",
    logo: "https://ph-files.imgix.net/bc16937c-807e-4c49-b9aa-74971c697e31.png?auto=format",
    slug: "bland-ai",
    featured: false,
    url: "https://www.bland.ai/"
  },
  {
    id: "59",
    name: "Softr",
    description: {
      es: "Crea aplicaciones web sin necesidad de programar, utilizando datos de Airtable, Google Sheets y más",
      en: "Build web apps without coding, using data from Airtable, Google Sheets, and more"
    },
    detailedDescription: {
      es: "Softr es una plataforma sin código que permite a usuarios sin experiencia técnica construir aplicaciones web personalizadas mediante una interfaz de arrastrar y soltar. Ofrece integraciones con diversas fuentes de datos como Airtable, Google Sheets y Notion, y proporciona componentes preconstruidos como listas, formularios y gráficos. Softr también incluye funcionalidades como autenticación de usuarios, procesamiento de pagos y automatización de flujos de trabajo.",
      en: "Softr is a no-code platform that enables non-technical users to build custom web applications through a drag-and-drop interface. It offers integrations with various data sources like Airtable, Google Sheets, and Notion, and provides pre-built components such as lists, forms, and charts. Softr also includes features like user authentication, payment processing, and workflow automation."
    },
    useCases: {
      es: [
        "Desarrollo de portales de clientes personalizados",
        "Creación de herramientas internas para gestión de proyectos",
        "Construcción de aplicaciones web para MVPs",
        "Automatización de flujos de trabajo empresariales",
        "Integración de datos de múltiples fuentes en una sola aplicación"
      ],
      en: [
        "Development of custom client portals",
        "Creation of internal tools for project management",
        "Building web applications for MVPs",
        "Automation of business workflows",
        "Integration of data from multiple sources into a single application"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Softr",
          url: "https://www.softr.io/",
          type: "article",
          description: "Explora las capacidades de Softr y accede a la plataforma."
        },
        {
          title: "Guía para construir un CRM sin código con Softr",
          url: "https://www.softr.io/create/no-code-crm",
          type: "article",
          description: "Aprende a crear un CRM personalizado sin necesidad de programar."
        },
        {
          title: "Tutorial: Construye una aplicación sin código con Softr",
          url: "https://www.youtube.com/watch?v=avjTkalQqME",
          type: "video",
          description: "Video tutorial sobre cómo construir una aplicación utilizando Softr."
        }
      ],
      en: [
        {
          title: "Softr Official Website",
          url: "https://www.softr.io/",
          type: "article",
          description: "Explore Softr's capabilities and access the platform."
        },
        {
          title: "Guide to Building a No-Code CRM with Softr",
          url: "https://www.softr.io/create/no-code-crm",
          type: "article",
          description: "Learn how to create a custom CRM without coding."
        },
        {
          title: "Tutorial: Build an App Without Coding Using Softr",
          url: "https://www.youtube.com/watch?v=avjTkalQqME",
          type: "video",
          description: "Tutorial video on how to build an application using Softr."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Planes desde $49/mes",
      en: "Plans starting at $49/month"
    },
    difficulty: "beginner",
    logo: "https://www.softr.io/favicon.ico",
    slug: "softr",
    featured: false,
    url: "https://www.softr.io/"
  },
  {
    id: "60",
    tags: ["irrelevant"],
    name: "Warp",
    description: {
      es: "Terminal moderna con IA integrada, que ofrece sugerencias de comandos, generación de código y flujos reutilizables",
      en: "Modern terminal with integrated AI, offering command suggestions, code generation, and reusable workflows"
    },
    detailedDescription: {
      es: "Warp es un emulador de terminal moderno escrito en Rust, disponible para macOS, Linux y Windows. Incorpora Warp AI, una funcionalidad que proporciona sugerencias de comandos, generación de código y explicación de errores directamente en la terminal. Su 'Agent Mode' permite ejecutar tareas complejas paso a paso con asistencia de IA. Además, Warp Drive permite guardar y compartir comandos parametrizados para reutilizarlos fácilmente.",
      en: "Warp is a modern terminal emulator written in Rust, available for macOS, Linux, and Windows. It integrates Warp AI, a feature that provides command suggestions, code generation, and error explanations directly within the terminal. Its 'Agent Mode' allows for step-by-step execution of complex tasks with AI assistance. Additionally, Warp Drive enables saving and sharing parameterized commands for easy reuse."
    },
    useCases: {
      es: [
        "Desarrollo de software con asistencia de IA",
        "Automatización de flujos de trabajo en la terminal",
        "Depuración y explicación de errores en comandos",
        "Colaboración en equipos mediante comandos compartidos",
        "Mejora de la productividad en la línea de comandos"
      ],
      en: [
        "Software development with AI assistance",
        "Automation of terminal workflows",
        "Debugging and explaining command errors",
        "Team collaboration through shared commands",
        "Enhancing productivity in the command line"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Warp",
          url: "https://www.warp.dev/",
          type: "article",
          description: "Explora las capacidades de Warp y descarga la aplicación."
        },
        {
          title: "Guía de Warp AI y Agent Mode",
          url: "https://www.warp.dev/warp-ai",
          type: "article",
          description: "Aprende a utilizar las funciones de IA integradas en Warp."
        },
        {
          title: "Warp: Terminal con IA para desarrolladores",
          url: "https://www.youtube.com/watch?v=uRquE0FjvFk",
          type: "video",
          description: "Demostración de las funcionalidades de Warp con IA."
        }
      ],
      en: [
        {
          title: "Warp Official Website",
          url: "https://www.warp.dev/",
          type: "article",
          description: "Explore Warp's capabilities and download the application."
        },
        {
          title: "Warp AI and Agent Mode Guide",
          url: "https://www.warp.dev/warp-ai",
          type: "article",
          description: "Learn how to use Warp's integrated AI features."
        },
        {
          title: "Warp: AI-Powered Terminal for Developers",
          url: "https://www.youtube.com/watch?v=uRquE0FjvFk",
          type: "video",
          description: "Demonstration of Warp's AI functionalities."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://logowik.com/content/uploads/images/warp-terminal6403.logowik.com.webp",
    slug: "warp",
    featured: false,
    url: "https://www.warp.dev/"
  },
  {
    id: "61",
    name: "Raycast",
    description: {
      es: "Lanzador de aplicaciones y asistente de productividad para macOS con extensiones y funciones de IA",
      en: "Application launcher and productivity assistant for macOS with extensions and AI features"
    },
    detailedDescription: {
      es: "Raycast es una herramienta de productividad para macOS que permite lanzar aplicaciones, buscar archivos, gestionar ventanas y ejecutar comandos mediante atajos de teclado. Ofrece una amplia gama de extensiones para integrarse con servicios como GitHub, Jira, Notion y más. Su extensión de IA proporciona asistencia para automatizar tareas, generar contenido y mejorar flujos de trabajo. Además, Raycast está disponible en iOS como una aplicación complementaria.",
      en: "Raycast is a productivity tool for macOS that enables launching applications, searching files, managing windows, and executing commands using keyboard shortcuts. It offers a wide range of extensions to integrate with services like GitHub, Jira, Notion, and more. Its AI extension provides assistance to automate tasks, generate content, and enhance workflows. Additionally, Raycast is available on iOS as a companion app."
    },
    useCases: {
      es: [
        "Lanzamiento rápido de aplicaciones y archivos",
        "Automatización de tareas repetitivas",
        "Integración con herramientas de desarrollo y gestión de proyectos",
        "Gestión eficiente del portapapeles y notas",
        "Asistencia mediante IA para mejorar la productividad"
      ],
      en: [
        "Quick launching of applications and files",
        "Automation of repetitive tasks",
        "Integration with development and project management tools",
        "Efficient clipboard and notes management",
        "AI assistance to enhance productivity"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Raycast",
          url: "https://www.raycast.com/",
          type: "article",
          description: "Explora las capacidades de Raycast y descarga la aplicación."
        },
        {
          title: "Raycast en la App Store",
          url: "https://apps.apple.com/us/app/raycast-ai-notes-and-more/id6503428327",
          type: "article",
          description: "Descarga la aplicación complementaria de Raycast para iOS."
        },
        {
          title: "Raycast: Herramienta de productividad para macOS",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Demostración de las funcionalidades de Raycast."
        }
      ],
      en: [
        {
          title: "Raycast Official Website",
          url: "https://www.raycast.com/",
          type: "article",
          description: "Explore Raycast's capabilities and download the application."
        },
        {
          title: "Raycast on the App Store",
          url: "https://apps.apple.com/us/app/raycast-ai-notes-and-more/id6503428327",
          type: "article",
          description: "Download Raycast's companion app for iOS."
        },
        {
          title: "Raycast: Productivity Tool for macOS",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Demonstration of Raycast's functionalities."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://www.raycast.com/favicon-production.png",
    slug: "raycast",
    featured: false,
    url: "https://www.raycast.com/"
  },
  {
    id: "62",
    name: "Belo",
    description: {
      es: "Billetera digital que permite enviar y recibir dinero en múltiples monedas ideal para freelancers",
      en: "Digital wallet enabling sending and receiving money in multiple currencies ideal for freelancers"
    },
    detailedDescription: {
      es: "Belo es una billetera digital argentina diseñada para facilitar pagos internacionales, ahorros automatizados y gestión de múltiples monedas, incluyendo pesos argentinos, dólares, euros, reales y criptomonedas como BTC, ETH, DAI y USDT. La aplicación permite recibir pagos desde plataformas como PayPal, Wise, Deel, Upwork y más. Además, ofrece una tarjeta Mastercard (física y virtual) para realizar pagos en tiendas, y permite pagar servicios como electricidad, agua, gas y matrículas universitarias. También incluye funciones de ahorro automatizado con generación de rendimientos en diferentes monedas.",
      en: "Belo is an Argentine digital wallet designed to facilitate international payments, automated savings, and management of multiple currencies, including Argentine pesos, dollars, euros, reais, and cryptocurrencies like BTC, ETH, DAI, and USDT. The app allows receiving payments from platforms such as PayPal, Wise, Deel, Upwork, and more. It also offers a Mastercard (physical and virtual) for in-store payments and enables bill payments for services like electricity, water, gas, and university tuition. Additionally, it includes automated savings features with yield generation in various currencies."
    },
    useCases: {
      es: [
        "Recibir pagos internacionales de plataformas freelance",
        "Convertir y administrar múltiples monedas y criptomonedas",
        "Realizar pagos en tiendas físicas y en línea con tarjeta Mastercard",
        "Pagar servicios y facturas locales desde una sola aplicación",
        "Automatizar ahorros y generar rendimientos en diferentes monedas"
      ],
      en: [
        "Receive international payments from freelance platforms",
        "Convert and manage multiple currencies and cryptocurrencies",
        "Make in-store and online payments with Mastercard",
        "Pay local bills and services from a single app",
        "Automate savings and generate yields in various currencies"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Belo",
          url: "https://www.belo.app/",
          type: "article",
          description: "Explora las funcionalidades de Belo y descarga la aplicación."
        },
        {
          title: "Belo en Google Play",
          url: "https://play.google.com/store/apps/details?id=com.belo.android",
          type: "article",
          description: "Descarga Belo para dispositivos Android desde Google Play."
        },
        {
          title: "Belo en App Store",
          url: "https://apps.apple.com/vu/app/belo-your-financial-passport/id1575614708",
          type: "article",
          description: "Descarga Belo para dispositivos iOS desde la App Store."
        }
      ],
      en: [
        {
          title: "Belo Official Website",
          url: "https://www.belo.app/",
          type: "article",
          description: "Explore Belo's features and download the application."
        },
        {
          title: "Belo on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.belo.android",
          type: "article",
          description: "Download Belo for Android devices from Google Play."
        },
        {
          title: "Belo on App Store",
          url: "https://apps.apple.com/vu/app/belo-your-financial-passport/id1575614708",
          type: "article",
          description: "Download Belo for iOS devices from the App Store."
        }
      ]
    },
    category: "other",
    price: {
      es: "Pago por comisiones",
      en: "Pay fees"
    },
    difficulty: "beginner",
    logo: "https://newtopia.vc/wp-content/uploads/2022/04/belo.png",
    slug: "belo",
    featured: false,
    url: "https://www.belo.app/"
  },
  {
    id: "63",
    name: "Trae.ai",
    description: {
      es: "Entorno de desarrollo con IA que ofrece asistencia en tiempo real para escribir, depurar y optimizar código",
      en: "AI-integrated development environment offering real-time assistance for writing, debugging, and optimizing code"
    },
    detailedDescription: {
      es: "Trae.ai es un entorno de desarrollo integrado (IDE) potenciado por inteligencia artificial, desarrollado por ByteDance. La plataforma permite a los desarrolladores escribir, depurar y optimizar código de manera más eficiente mediante asistencia en tiempo real. Trae.ai ofrece sugerencias de código contextuales, generación de fragmentos de código a partir de lenguaje natural y análisis de errores. Además, incluye un 'modo constructor' que descompone tareas complejas y permite a los usuarios previsualizar y controlar el proceso de desarrollo. La plataforma es compatible con macOS y Windows.",
      en: "Trae.ai is an AI-powered integrated development environment (IDE) developed by ByteDance. The platform enables developers to write, debug, and optimize code more efficiently through real-time assistance. Trae.ai offers contextual code suggestions, code snippet generation from natural language, and error analysis. Additionally, it includes a 'builder mode' that breaks down complex tasks and allows users to preview and control the development process. The platform is compatible with macOS and Windows."
    },
    useCases: {
      es: [
        "Asistencia en tiempo real para escritura y depuración de código",
        "Generación de código a partir de descripciones en lenguaje natural",
        "Análisis y explicación de errores en el código",
        "Automatización de tareas repetitivas en el desarrollo de software",
        "Colaboración entre desarrolladores y agentes de IA en proyectos complejos"
      ],
      en: [
        "Real-time assistance for code writing and debugging",
        "Code generation from natural language descriptions",
        "Analysis and explanation of code errors",
        "Automation of repetitive tasks in software development",
        "Collaboration between developers and AI agents in complex projects"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Trae.ai",
          url: "https://www.trae.ai/",
          type: "article",
          description: "Explora las funcionalidades de Trae.ai y descarga la aplicación."
        },
        {
          title: "Descargar Trae.ai",
          url: "https://www.trae.ai/download",
          type: "article",
          description: "Accede a las versiones de Trae.ai para macOS y Windows."
        },
        {
          title: "Trae AI 2.0: IDE con IA completamente gratuito",
          url: "https://www.youtube.com/watch?v=j7xwvr8R94U",
          type: "video",
          description: "Demostración de las funcionalidades de Trae.ai en su versión 2.0."
        }
      ],
      en: [
        {
          title: "Trae.ai Official Website",
          url: "https://www.trae.ai/",
          type: "article",
          description: "Explore Trae.ai's features and download the application."
        },
        {
          title: "Download Trae.ai",
          url: "https://www.trae.ai/download",
          type: "article",
          description: "Access Trae.ai versions for macOS and Windows."
        },
        {
          title: "Trae AI 2.0: Fully Free AI-Powered IDE",
          url: "https://www.youtube.com/watch?v=j7xwvr8R94U",
          type: "video",
          description: "Demonstration of Trae.ai's functionalities in version 2.0."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://miro.medium.com/v2/resize:fit:1400/0*B-dWKnx-oFPKpQoc.png",
    slug: "trae-ai",
    featured: false,
    url: "https://www.trae.ai/"
  },
  {
    id: "64",
    name: "Insomnia",
    description: {
      es: "Cliente REST y plataforma de desarrollo de APIs que permite diseñar, probar y depurar APIs de forma colaborativa",
      en: "REST client and API development platform that enables collaborative design, testing, and debugging of APIs"
    },
    detailedDescription: {
      es: "Insomnia es una plataforma de desarrollo de APIs de código abierto y multiplataforma que permite a los desarrolladores diseñar, probar, depurar y simular APIs REST, GraphQL, gRPC, WebSockets y más. Ofrece una interfaz intuitiva para crear y organizar solicitudes, gestionar variables de entorno y colaborar en proyectos mediante almacenamiento local, Git o en la nube. Insomnia también incluye herramientas como un editor nativo de OpenAPI, ejecución de pruebas automatizadas y capacidades de integración continua a través de su CLI.",
      en: "Insomnia is an open-source, cross-platform API development platform that allows developers to design, test, debug, and mock REST, GraphQL, gRPC, WebSockets, and more. It offers an intuitive interface for creating and organizing requests, managing environment variables, and collaborating on projects via local, Git, or cloud storage. Insomnia also includes tools like a native OpenAPI editor, automated test execution, and continuous integration capabilities through its CLI."
    },
    useCases: {
      es: [
        "Diseño y documentación de APIs utilizando OpenAPI",
        "Pruebas y depuración de endpoints REST y GraphQL",
        "Simulación de APIs para pruebas sin servidor backend",
        "Automatización de pruebas de APIs en pipelines CI/CD",
        "Colaboración en equipos mediante sincronización con Git o almacenamiento en la nube"
      ],
      en: [
        "Designing and documenting APIs using OpenAPI",
        "Testing and debugging REST and GraphQL endpoints",
        "Mocking APIs for testing without a backend server",
        "Automating API tests in CI/CD pipelines",
        "Team collaboration through Git or cloud storage synchronization"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Insomnia",
          url: "https://insomnia.rest/",
          type: "article",
          description: "Explora las funcionalidades de Insomnia y descarga la aplicación."
        },
        {
          title: "Repositorio de Insomnia en GitHub",
          url: "https://github.com/Kong/insomnia",
          type: "article",
          description: "Accede al código fuente y contribuye al desarrollo de Insomnia."
        },
        {
          title: "Tutorial: Cómo usar Insomnia REST Client",
          url: "https://www.youtube.com/watch?v=p9AjteEwFy0",
          type: "video",
          description: "Guía en video sobre cómo utilizar Insomnia para probar APIs REST."
        }
      ],
      en: [
        {
          title: "Insomnia Official Website",
          url: "https://insomnia.rest/",
          type: "article",
          description: "Explore Insomnia's features and download the application."
        },
        {
          title: "Insomnia GitHub Repository",
          url: "https://github.com/Kong/insomnia",
          type: "article",
          description: "Access the source code and contribute to Insomnia's development."
        },
        {
          title: "Tutorial: How to Use Insomnia REST Client",
          url: "https://www.youtube.com/watch?v=p9AjteEwFy0",
          type: "video",
          description: "Video guide on using Insomnia to test REST APIs."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://insomnia.rest/favicon.ico",
    slug: "insomnia",
    featured: false,
    url: "https://insomnia.rest/"
  },
  {
    id: "65",
    name: "Cursor",
    tags: ["irrelevant"],
    description: {
      es: "Editor de código impulsado por IA que permite escribir, depurar y refactorizar código utilizando comandos en lenguaje natural",
      en: "AI-powered code editor enabling writing, debugging, and refactoring code using natural language commands"
    },
    detailedDescription: {
      es: "Cursor es un entorno de desarrollo integrado (IDE) basado en Visual Studio Code, potenciado por inteligencia artificial, diseñado para mejorar la productividad de los desarrolladores. Permite generar y modificar código mediante instrucciones en lenguaje natural, ofrece autocompletado inteligente y comprende el contexto completo del proyecto. Cursor admite múltiples lenguajes de programación y se integra con sistemas de control de versiones como Git. Además, ofrece un 'modo de privacidad' donde el código del usuario no se almacena remotamente y cuenta con certificación SOC 2.",
      en: "Cursor is an AI-powered integrated development environment (IDE) based on Visual Studio Code, designed to enhance developer productivity. It allows generating and modifying code through natural language instructions, offers intelligent autocomplete, and understands the full context of the project. Cursor supports multiple programming languages and integrates with version control systems like Git. Additionally, it offers a 'privacy mode' where user code is not stored remotely and is SOC 2 certified."
    },
    useCases: {
      es: [
        "Generación de código a partir de descripciones en lenguaje natural",
        "Refactorización y mejora de código existente",
        "Depuración asistida por IA con sugerencias contextuales",
        "Automatización de tareas repetitivas en el desarrollo de software",
        "Integración de documentación y comentarios en el código automáticamente"
      ],
      en: [
        "Code generation from natural language descriptions",
        "Refactoring and improving existing code",
        "AI-assisted debugging with contextual suggestions",
        "Automation of repetitive tasks in software development",
        "Integration of documentation and comments into code automatically"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Cursor",
          url: "https://www.cursor.com/",
          type: "article",
          description: "Explora las funcionalidades de Cursor y descarga la aplicación."
        },
        {
          title: "Repositorio de Cursor en GitHub",
          url: "https://github.com/getcursor/cursor",
          type: "article",
          description: "Accede al código fuente y contribuye al desarrollo de Cursor."
        },
        {
          title: "Tutorial: Cómo usar Cursor AI para principiantes",
          url: "https://www.youtube.com/watch?v=ocMOZpuAMw4",
          type: "video",
          description: "Guía en video sobre cómo utilizar Cursor AI para mejorar la productividad en el desarrollo de software."
        }
      ],
      en: [
        {
          title: "Cursor Official Website",
          url: "https://www.cursor.com/",
          type: "article",
          description: "Explore Cursor's features and download the application."
        },
        {
          title: "Cursor GitHub Repository",
          url: "https://github.com/getcursor/cursor",
          type: "article",
          description: "Access the source code and contribute to Cursor's development."
        },
        {
          title: "Tutorial: How to Use Cursor AI for Beginners",
          url: "https://www.youtube.com/watch?v=ocMOZpuAMw4",
          type: "video",
          description: "Video guide on using Cursor AI to enhance productivity in software development."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Plan Pro desde $20/mes",
      en: "Pro plan starting at $20/month"
    },
    difficulty: "intermediate",
    logo: "https://www.cursor.com/favicon.ico",
    slug: "cursor",
    featured: false,
    url: "https://www.cursor.com/"
  },
  {
    id: "66",
    name: "Supabase",
    tags: ["Top"],
    description: {
      es: "Plataforma de backend como servicio, con base de datos PostgreSQL y funcionalidades en tiempo real",
      en: "Backend-as-a-service platform offering, featuring PostgreSQL database and real-time capabilities"
    },
    detailedDescription: {
      es: "Supabase es una plataforma de desarrollo de backend que proporciona una alternativa de código abierto a Firebase. Ofrece una base de datos PostgreSQL con capacidades en tiempo real, autenticación, almacenamiento y funciones de servidor. Supabase también integra soporte para vectores mediante la extensión pgvector, permitiendo almacenar y consultar embeddings para aplicaciones de inteligencia artificial. Además, se integra con herramientas como LangChain y LlamaIndex para facilitar la creación de aplicaciones basadas en LLMs.",
      en: "Supabase is a backend development platform providing an open-source alternative to Firebase. It offers a PostgreSQL database with real-time capabilities, authentication, storage, and serverless functions. Supabase also integrates vector support through the pgvector extension, enabling storage and querying of embeddings for AI applications. Furthermore, it integrates with tools like LangChain and LlamaIndex to facilitate the creation of LLM-based applications."
    },
    useCases: {
      es: [
        "Desarrollo de aplicaciones web y móviles con backend en tiempo real",
        "Gestión de usuarios y autenticación segura",
        "Almacenamiento y consulta de embeddings para aplicaciones de IA",
        "Integración con herramientas de procesamiento de lenguaje natural",
        "Creación de aplicaciones sin servidor con funciones personalizadas"
      ],
      en: [
        "Development of web and mobile applications with real-time backend",
        "User management and secure authentication",
        "Storage and querying of embeddings for AI applications",
        "Integration with natural language processing tools",
        "Creation of serverless applications with custom functions"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Supabase",
          url: "https://supabase.com/",
          type: "article",
          description: "Explora las funcionalidades de Supabase y comienza a construir tu aplicación."
        },
        {
          title: "Guía de AI y Vectores en Supabase",
          url: "https://supabase.com/docs/guides/ai",
          type: "article",
          description: "Aprende a utilizar pgvector y embeddings en Supabase."
        },
        {
          title: "Tutorial: Supabase Vector y LLMs",
          url: "https://medium.com/@limjoshen/supabase-vector-and-llms-efa5d32f719d",
          type: "article",
          description: "Descubre cómo integrar Supabase con modelos de lenguaje."
        }
      ],
      en: [
        {
          title: "Supabase Official Website",
          url: "https://supabase.com/",
          type: "article",
          description: "Explore Supabase's features and start building your application."
        },
        {
          title: "AI & Vectors Guide in Supabase",
          url: "https://supabase.com/docs/guides/ai",
          type: "article",
          description: "Learn how to use pgvector and embeddings in Supabase."
        },
        {
          title: "Tutorial: Supabase Vector and LLMs",
          url: "https://medium.com/@limjoshen/supabase-vector-and-llms-efa5d32f719d",
          type: "article",
          description: "Discover how to integrate Supabase with language models."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Planes desde $25/mes",
      en: "Plans starting at $25/month"
    },
    difficulty: "intermediate",
    logo: "https://cdn.prod.website-files.com/66842e04d18971242a294872/669e87d174d190a8ba60b861_supabase-TAiY.png",
    slug: "supabase",
    featured: false,
    url: "https://supabase.com/"
  },
  {
    id: "67",
    name: "Pinecone",
    tags: ["irrelevant"],
    description: {
      es: "Base de datos vectorial gestionada en la nube, optimizada para búsquedas semánticas y aplicaciones de inteligencia artificial",
      en: "Managed cloud vector database optimized for semantic search and AI applications"
    },
    detailedDescription: {
      es: "Pinecone es una base de datos vectorial completamente gestionada que permite almacenar, indexar y consultar embeddings de alta dimensión con baja latencia. Está diseñada para facilitar la implementación de búsquedas semánticas, sistemas de recomendación y aplicaciones de inteligencia artificial a gran escala. Pinecone ofrece integración con modelos de lenguaje y herramientas como LangChain, y proporciona APIs sencillas para insertar y consultar vectores.",
      en: "Pinecone is a fully managed vector database that allows storing, indexing, and querying high-dimensional embeddings with low latency. It is designed to facilitate the implementation of semantic search, recommendation systems, and large-scale AI applications. Pinecone offers integration with language models and tools like LangChain, and provides simple APIs for inserting and querying vectors."
    },
    useCases: {
      es: [
        "Implementación de búsquedas semánticas en aplicaciones web y móviles",
        "Desarrollo de sistemas de recomendación personalizados",
        "Almacenamiento y consulta eficiente de embeddings de texto e imagen",
        "Integración con modelos de lenguaje para aplicaciones de IA",
        "Construcción de chatbots y asistentes virtuales con memoria contextual"
      ],
      en: [
        "Implementation of semantic search in web and mobile applications",
        "Development of personalized recommendation systems",
        "Efficient storage and querying of text and image embeddings",
        "Integration with language models for AI applications",
        "Building chatbots and virtual assistants with contextual memory"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Pinecone",
          url: "https://www.pinecone.io/",
          type: "article",
          description: "Explora las capacidades de Pinecone y comienza a utilizar su base de datos vectorial."
        },
        {
          title: "Guía rápida de Pinecone",
          url: "https://docs.pinecone.io/guides/get-started/quickstart",
          type: "article",
          description: "Aprende a configurar y utilizar Pinecone paso a paso."
        },
        {
          title: "Tutorial: Domina las bases de datos vectoriales con Pinecone",
          url: "https://www.datacamp.com/tutorial/mastering-vector-databases-with-pinecone-tutorial",
          type: "article",
          description: "Guía completa para entender y aplicar Pinecone en tus proyectos."
        }
      ],
      en: [
        {
          title: "Pinecone Official Website",
          url: "https://www.pinecone.io/",
          type: "article",
          description: "Explore Pinecone's capabilities and start using its vector database."
        },
        {
          title: "Pinecone Quickstart Guide",
          url: "https://docs.pinecone.io/guides/get-started/quickstart",
          type: "article",
          description: "Learn how to set up and use Pinecone step by step."
        },
        {
          title: "Tutorial: Mastering Vector Databases with Pinecone",
          url: "https://www.datacamp.com/tutorial/mastering-vector-databases-with-pinecone-tutorial",
          type: "article",
          description: "Comprehensive guide to understand and apply Pinecone in your projects."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Pago por uso",
      en: "Pay per use"
    },
    difficulty: "intermediate",
    logo: "https://www.pinecone.io/favicon.ico",
    slug: "pinecone",
    featured: false,
    url: "https://www.pinecone.io/"
  },
  {
    id: "68",
    name: "Hugging Face",
    tags: ["Top"],
    description: {
      es: "Plataforma para compartir modelos de IA, conjuntos de datos y aplicaciones, conocida como el 'GitHub del aprendizaje automático'",
      en: "Open-source platform for sharing AI models, datasets, and applications, known as the 'GitHub of machine learning'"
    },
    detailedDescription: {
      es: "Hugging Face es una plataforma franco-estadounidense que permite a investigadores y desarrolladores compartir modelos de aprendizaje automático, conjuntos de datos y aplicaciones interactivas. Su ecosistema incluye bibliotecas como Transformers, Datasets y Gradio, facilitando tareas de procesamiento de lenguaje natural, visión por computadora y más. La plataforma alberga más de 1.5 millones de modelos y 340,000 conjuntos de datos, fomentando la colaboración y la innovación en la comunidad de IA.",
      en: "Hugging Face is a French-American platform that enables researchers and developers to share machine learning models, datasets, and interactive applications. Its ecosystem includes libraries like Transformers, Datasets, and Gradio, facilitating tasks in natural language processing, computer vision, and more. The platform hosts over 1.5 million models and 340,000 datasets, promoting collaboration and innovation in the AI community."
    },
    useCases: {
      es: [
        "Acceso y uso de modelos preentrenados para tareas de NLP y visión por computadora",
        "Compartir y colaborar en modelos y conjuntos de datos de IA",
        "Desarrollo y despliegue de aplicaciones de IA interactivas mediante Spaces",
        "Integración de modelos de IA en flujos de trabajo existentes",
        "Experimentación y prototipado rápido de soluciones de IA"
      ],
      en: [
        "Access and use pre-trained models for NLP and computer vision tasks",
        "Share and collaborate on AI models and datasets",
        "Develop and deploy interactive AI applications via Spaces",
        "Integrate AI models into existing workflows",
        "Rapid experimentation and prototyping of AI solutions"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Hugging Face",
          url: "https://huggingface.co/",
          type: "article",
          description: "Explora modelos, conjuntos de datos y aplicaciones de IA en Hugging Face."
        },
        {
          title: "Documentación de Transformers",
          url: "https://huggingface.co/docs/transformers/index",
          type: "article",
          description: "Guía para utilizar la biblioteca Transformers en tus proyectos."
        },
        {
          title: "Introducción a Hugging Face - Video",
          url: "https://www.youtube.com/watch?v=GLO5FZzfrS0",
          type: "video",
          description: "Video introductorio sobre la plataforma Hugging Face."
        }
      ],
      en: [
        {
          title: "Hugging Face Official Website",
          url: "https://huggingface.co/",
          type: "article",
          description: "Explore AI models, datasets, and applications on Hugging Face."
        },
        {
          title: "Transformers Documentation",
          url: "https://huggingface.co/docs/transformers/index",
          type: "article",
          description: "Guide to using the Transformers library in your projects."
        },
        {
          title: "Introduction to Hugging Face - Video",
          url: "https://www.youtube.com/watch?v=GLO5FZzfrS0",
          type: "video",
          description: "Introductory video about the Hugging Face platform."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://huggingface.co/front/assets/huggingface_logo.svg",
    slug: "hugging-face",
    featured: false,
    url: "https://huggingface.co/"
  },
  {
    id: "69",
    name: "Zapier",
    description: {
      es: "Plataforma de automatización que conecta más de 8,000 aplicaciones para optimizar flujos de trabajo",
      en: "No-code automation platform connecting over 8,000 apps to streamline workflows"
    },
    detailedDescription: {
      es: "Zapier es una herramienta de automatización que permite a los usuarios conectar aplicaciones y servicios web para automatizar tareas repetitivas sin necesidad de programación. A través de 'Zaps', los usuarios pueden definir desencadenantes y acciones entre aplicaciones como Gmail, Slack, Google Sheets y muchas más. Con más de 8,000 integraciones disponibles, Zapier facilita la creación de flujos de trabajo personalizados que mejoran la eficiencia y reducen errores manuales.",
      en: "Zapier is an automation tool that allows users to connect web applications and services to automate repetitive tasks without coding. Through 'Zaps', users can define triggers and actions between apps like Gmail, Slack, Google Sheets, and many more. With over 8,000 integrations available, Zapier enables the creation of customized workflows that enhance efficiency and reduce manual errors."
    },
    useCases: {
      es: [
        "Automatización de tareas entre aplicaciones como CRM, correo electrónico y hojas de cálculo",
        "Notificaciones automáticas en canales de comunicación al recibir nuevos datos",
        "Sincronización de información entre diferentes plataformas sin intervención manual",
        "Creación de flujos de trabajo personalizados para procesos empresariales",
        "Integración de aplicaciones sin necesidad de conocimientos de programación"
      ],
      en: [
        "Automate tasks between apps like CRM, email, and spreadsheets",
        "Automatic notifications in communication channels upon receiving new data",
        "Synchronize information between different platforms without manual intervention",
        "Create customized workflows for business processes",
        "Integrate applications without the need for programming knowledge"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Zapier",
          url: "https://zapier.com/",
          type: "article",
          description: "Descubre cómo automatizar tareas y conectar aplicaciones con Zapier."
        },
        {
          title: "Guía de inicio rápido de Zapier",
          url: "https://zapier.com/learn/getting-started-guide/",
          type: "article",
          description: "Aprende a crear tus primeros Zaps y automatizar flujos de trabajo."
        },
        {
          title: "Tutorial de Zapier para principiantes - Video",
          url: "https://www.youtube.com/watch?v=JtdUgJGI_Oo",
          type: "video",
          description: "Video tutorial sobre cómo comenzar a usar Zapier."
        }
      ],
      en: [
        {
          title: "Zapier Official Website",
          url: "https://zapier.com/",
          type: "article",
          description: "Discover how to automate tasks and connect applications with Zapier."
        },
        {
          title: "Zapier Quick Start Guide",
          url: "https://zapier.com/learn/getting-started-guide/",
          type: "article",
          description: "Learn how to create your first Zaps and automate workflows."
        },
        {
          title: "Zapier Tutorial for Beginners - Video",
          url: "https://www.youtube.com/watch?v=JtdUgJGI_Oo",
          type: "video",
          description: "Video tutorial on how to start using Zapier."
        }
      ]
    },
    category: "automation",
    price: {
      es: "Planes desde $19.99/mes",
      en: "Plans starting at $19.99/month"
    },
    difficulty: "beginner",
    logo: "https://todointeligenciaartificial.com/wp-content/uploads/2023/09/zapier.png",
    slug: "zapier",
    featured: false,
    url: "https://zapier.com/"
  },
  {
    id: "70",
    name: "Groq",
    description: {
      es: "Inferencia de IA ultrarrápida con hardware especializado",
      en: "Ultra-fast AI inference with specialized hardware"
    },
    detailedDescription: {
      es: "Groq es una plataforma de hardware y software de inteligencia artificial que ofrece inferencia de modelos de lenguaje a velocidades excepcionales gracias a su arquitectura LPU™ (Language Processing Unit). Diseñada por exingenieros de Google, Groq permite ejecutar modelos como Llama, Mixtral y Whisper con baja latencia y alta eficiencia energética.",
      en: "Groq is an AI hardware and software platform delivering exceptional inference speeds for language models through its LPU™ (Language Processing Unit) architecture. Designed by former Google engineers, Groq enables the execution of models like Llama, Mixtral, and Whisper with low latency and high energy efficiency."
    },
    useCases: {
      es: [
        "Ejecución de modelos de lenguaje de gran tamaño con alta velocidad",
        "Despliegue de aplicaciones de IA en tiempo real",
        "Procesamiento eficiente de texto, audio y visión por computadora",
        "Integración de modelos de IA en infraestructuras existentes",
        "Optimización de costos en operaciones de inferencia de IA"
      ],
      en: [
        "Running large language models at high speed",
        "Deploying real-time AI applications",
        "Efficient processing of text, audio, and computer vision",
        "Integrating AI models into existing infrastructures",
        "Cost optimization in AI inference operations"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial del motor de inferencia Groq LPU",
          url: "https://www.datacamp.com/es/tutorial/groq-lpu-inference",
          type: "tutorial",
          description: "Aprende cómo funciona la arquitectura LPU de Groq y cómo aprovecharla en tus proyectos de IA."
        },
        {
          title: "Casos de uso de clientes de Groq",
          url: "https://groq.com/customer-use-cases/",
          type: "article",
          description: "Descubre cómo diferentes empresas están utilizando Groq para mejorar sus soluciones de IA."
        },
        {
          title: "Guía de precios de Groq",
          url: "https://groq.com/pricing/",
          type: "article",
          description: "Consulta los planes de precios y modelos disponibles en la plataforma GroqCloud."
        }
      ],
      en: [
        {
          title: "Groq LPU Inference Engine Tutorial",
          url: "https://www.datacamp.com/tutorial/groq-lpu-inference",
          type: "tutorial",
          description: "Learn how Groq's LPU architecture works and how to leverage it in your AI projects."
        },
        {
          title: "Groq Customer Use Cases",
          url: "https://groq.com/customer-use-cases/",
          type: "article",
          description: "Discover how various companies are utilizing Groq to enhance their AI solutions."
        },
        {
          title: "Groq Pricing Guide",
          url: "https://groq.com/pricing/",
          type: "article",
          description: "Check out the pricing plans and available models on the GroqCloud platform."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Desde $0.05 por millón de tokens",
      en: "From $0.05 per million tokens"
    },
    difficulty: "intermediate",
    logo: "https://www.ciscoinvestments.com/assets/logos/groq-logo.png",
    slug: "groq",
    featured: true,
    url: "https://groq.com"
  },
  {
    id: "71",
    name: "Gitingest",
    tags: ["Top"],
    description: {
      es: "Convierte repositorios de Git en texto optimizado para IA",
      en: "Convert Git repositories into AI-optimized text"
    },
    detailedDescription: {
      es: "Gitingest es una herramienta de código abierto que transforma cualquier repositorio de Git en un resumen de texto estructurado, facilitando su uso en modelos de lenguaje y aplicaciones de IA. Soporta uso en línea, desde la línea de comandos y como paquete de Python.",
      en: "Gitingest is an open-source tool that transforms any Git repository into a structured text summary, making it easier to use in language models and AI applications. It supports online use, command-line interface, and as a Python package."
    },
    useCases: {
      es: [
        "Preparación de código para modelos de lenguaje",
        "Análisis de repositorios para documentación automatizada",
        "Integración de código en flujos de trabajo de IA",
        "Generación de resúmenes de proyectos de software",
        "Facilitación de la revisión de código mediante resúmenes"
      ],
      en: [
        "Preparing code for language models",
        "Analyzing repositories for automated documentation",
        "Integrating code into AI workflows",
        "Generating summaries of software projects",
        "Facilitating code review through summaries"
      ]
    },
    resources: {
      es: [
        {
          title: "Repositorio oficial de Gitingest",
          url: "https://github.com/cyclotruc/gitingest",
          type: "repository",
          description: "Código fuente y documentación oficial de Gitingest."
        },
        {
          title: "Sitio web de Gitingest",
          url: "https://gitingest.com/",
          type: "article",
          description: "Interfaz web para convertir repositorios de Git en texto estructurado."
        },
        {
          title: "Extensión de Gitingest para VS Code",
          url: "https://www.reddit.com/r/ChatGPTCoding/comments/1jsbu8c/turn_local_and_private_repos_into_prompts_in_one/",
          type: "article",
          description: "Convierte repositorios locales y privados en prompts con un solo clic."
        }
      ],
      en: [
        {
          title: "Official Gitingest Repository",
          url: "https://github.com/cyclotruc/gitingest",
          type: "repository",
          description: "Source code and official documentation for Gitingest."
        },
        {
          title: "Gitingest Website",
          url: "https://gitingest.com/",
          type: "article",
          description: "Web interface to convert Git repositories into structured text."
        },
        {
          title: "Gitingest VS Code Extension",
          url: "https://www.reddit.com/r/ChatGPTCoding/comments/1jsbu8c/turn_local_and_private_repos_into_prompts_in_one/",
          type: "article",
          description: "Convert local and private repositories into prompts with a single click."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://cdn.devdojo.com/images/january2023/shape-1.png",
    slug: "gitingest",
    featured: false,
    url: "https://gitingest.com"
  },
  {
    id: "72",
    name: "Graphy",
    description: {
      es: "Crea gráficos profesionales en segundos",
      en: "Create professional graphs in seconds"
    },
    detailedDescription: {
      es: "Graphy es una herramienta de visualización de datos que simplifica la creación de gráficos y diagramas profesionales, permitiendo a los usuarios comunicar ideas de manera efectiva y tomar decisiones con sus datos.",
      en: "Graphy is a data visualization tool that simplifies the creation of professional graphs and diagrams, enabling users to effectively communicate ideas and make data-driven decisions."
    },
    useCases: {
      es: [
        "Visualizar datos para informes y presentaciones",
        "Colaborar en tiempo real con equipos",
        "Crear gráficos para redes sociales y boletines"
      ],
      en: [
        "Visualize data for reports and presentations",
        "Collaborate in real-time with teams",
        "Create graphs for social media and newsletters"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial de Graphy: Visualización de Datos",
          url: "https://www.youtube.com/watch?v=TXDF2gr5NsM",
          type: "video",
          description: "Aprende a utilizar Graphy para crear gráficos impactantes"
        },
        {
          title: "Guía de Graphy para Storytelling de Datos",
          url: "https://www.toolify.ai/es/tool/graphy-for-data-storytelling",
          type: "article",
          description: "Descubre cómo contar historias con tus datos usando Graphy"
        },
        {
          title: "Graphy HQ: Visualización y Compartición de Datos",
          url: "https://gptzone.net/aplicaciones-ia/graphy-hq/",
          type: "article",
          description: "Explora las características de Graphy para la visualización y compartición de datos"
        }
      ],
      en: [
        {
          title: "Graphy Tutorial: Data Visualization",
          url: "https://www.youtube.com/watch?v=TXDF2gr5NsM",
          type: "video",
          description: "Learn how to use Graphy to create impactful graphs"
        },
        {
          title: "Graphy Guide for Data Storytelling",
          url: "https://www.toolify.ai/es/tool/graphy-for-data-storytelling",
          type: "article",
          description: "Discover how to tell stories with your data using Graphy"
        },
        {
          title: "Graphy HQ: Data Visualization and Sharing",
          url: "https://gptzone.net/aplicaciones-ia/graphy-hq/",
          type: "article",
          description: "Explore Graphy's features for data visualization and sharing"
        }
      ]
    },
    category: "analytics",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://storage.googleapis.com/cluvi/Images%20Web%20irrelevant/TOOLS/images.png",
    slug: "graphy",
    featured: false,
    url: "https://graphy.app/"
  },
  {
    id: "73",
    name: "Repurpose.io",
    tags: ["Top"],
    description: {
      es: "Automatiza la reutilización de contenido en redes sociales",
      en: "Automate content repurposing across social media"
    },
    detailedDescription: {
      es: "Repurpose.io es una herramienta de automatización que permite reutilizar contenido de video y audio en múltiples plataformas de manera eficiente. Sirve para ahorrar tiempo y maximizar el alcance del contenido al convertir y publicar automáticamente videos, podcasts y transmisiones en vivo en diferentes formatos y redes sociales.",
      en: "Repurpose.io is an automation tool that enables efficient repurposing of video and audio content across multiple platforms. It helps save time and maximize content reach by automatically converting and publishing videos, podcasts, and live streams into different formats and social networks."
    },
    useCases: {
      es: [
        "Distribuir contenido en varias plataformas",
        "Automatizar la publicación de contenido",
        "Transformar contenido largo en clips cortos",
        "Eliminar marcas de agua automáticamente"
      ],
      en: [
        "Distribute content across multiple platforms",
        "Automate content publishing",
        "Transform long content into short clips",
        "Automatically remove watermarks"
      ]
    },
    resources: {
      es: [
        {
          title: "Repurpose.io: Transforma tu Estrategia de Contenido",
          url: "https://loayzatech.com/repurpose-io-transforma-estrategia-contenido/",
          type: "article",
          description: "Descubre cómo Repurpose.io puede mejorar tu estrategia de contenido"
        },
        {
          title: "Cómo Compartir Videos en Todas las Redes Sociales",
          url: "https://www.youtube.com/watch?v=iDlgG8SB0qc",
          type: "video",
          description: "Aprende a usar Repurpose.io para compartir videos fácilmente"
        },
        {
          title: "Repurpose.io: Herramienta de Reutilización de Contenido",
          url: "https://www.tiktok.com/@evhandd/video/7333987738221382954",
          type: "video",
          description: "Explora cómo Repurpose.io facilita la reutilización de contenido"
        }
      ],
      en: [
        {
          title: "Repurpose.io: Transform Your Content Strategy",
          url: "https://loayzatech.com/repurpose-io-transforma-estrategia-contenido/",
          type: "article",
          description: "Discover how Repurpose.io can enhance your content strategy"
        },
        {
          title: "How to Share Videos on All Social Networks",
          url: "https://www.youtube.com/watch?v=iDlgG8SB0qc",
          type: "video",
          description: "Learn to use Repurpose.io to share videos easily"
        },
        {
          title: "Repurpose.io: Content Repurposing Tool",
          url: "https://www.tiktok.com/@evhandd/video/7333987738221382954",
          type: "video",
          description: "Explore how Repurpose.io facilitates content repurposing"
        }
      ]
    },
    category: "content",
    price: {
      es: "Desde $29.08/mes",
      en: "From $29.08/month"
    },
    difficulty: "intermediate",
    logo: "https://i0.wp.com/repurpose.io/wp-content/uploads/2024/07/repurpose-logo-competitors-page.png?fit=240%2C240&ssl=1",
    slug: "repurpose-io",
    featured: true,
    url: "https://repurpose.io/"
  },
  {
    id: "74",
    name: "Crew AI",
    description: {
      es: "Orquesta agentes de IA para automatizar tareas complejas",
      en: "Orchestrate AI agents to automate complex tasks"
    },
    detailedDescription: {
      es: "Crew AI es un framework de código abierto que permite crear equipos de agentes de IA especializados que colaboran para resolver tareas complejas. Cada agente tiene un rol definido y puede utilizar herramientas personalizadas, facilitando la automatización de flujos de trabajo en diversas áreas.",
      en: "Crew AI is an open-source framework that enables the creation of teams of specialized AI agents collaborating to solve complex tasks. Each agent has a defined role and can utilize custom tools, facilitating workflow automation across various domains."
    },
    useCases: {
      es: [
        "Automatización de flujos de trabajo empresariales",
        "Desarrollo de asistentes virtuales personalizados",
        "Coordinación de tareas entre múltiples agentes de IA",
        "Integración de herramientas personalizadas en procesos automatizados",
        "Implementación de soluciones de IA colaborativas"
      ],
      en: [
        "Automation of business workflows",
        "Development of custom virtual assistants",
        "Coordination of tasks among multiple AI agents",
        "Integration of custom tools into automated processes",
        "Implementation of collaborative AI solutions"
      ]
    },
    resources: {
      es: [
        {
          title: "Documentación Oficial de Crew AI",
          url: "https://docs.crewai.com/",
          type: "article",
          description: "Guía completa para comenzar con Crew AI y construir agentes colaborativos."
        },
        {
          title: "Curso Completo de Crew AI",
          url: "https://www.youtube.com/watch?v=ONKOXwucLvE",
          type: "video",
          description: "Aprende a utilizar Crew AI para automatizar tareas con múltiples agentes de IA."
        },
        {
          title: "Repositorio de Herramientas de Crew AI",
          url: "https://github.com/crewAIInc/crewAI-tools",
          type: "tutorial",
          description: "Explora y contribuye con herramientas personalizadas para Crew AI."
        }
      ],
      en: [
        {
          title: "Official Crew AI Documentation",
          url: "https://docs.crewai.com/",
          type: "article",
          description: "Comprehensive guide to get started with Crew AI and build collaborative agents."
        },
        {
          title: "Full Crew AI Course",
          url: "https://www.youtube.com/watch?v=ONKOXwucLvE",
          type: "video",
          description: "Learn how to use Crew AI to automate tasks with multiple AI agents."
        },
        {
          title: "Crew AI Tools Repository",
          url: "https://github.com/crewAIInc/crewAI-tools",
          type: "tutorial",
          description: "Explore and contribute custom tools for Crew AI."
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://miro.medium.com/v2/resize:fit:1400/1*4LTbuktCcTYv7F_vuN-8sA.png",
    slug: "crew-ai",
    featured: false,
    url: "https://www.crewai.com/"
  },
  {
    id: "75",
    name: "Abacus.AI",
    description: {
      es: "Plataforma de IA para automatizar procesos empresariales",
      en: "AI platform to automate business processes"
    },
    detailedDescription: {
      es: "Abacus.AI es una plataforma de inteligencia artificial que permite a las empresas automatizar procesos mediante la creación de agentes de IA personalizados. Ofrece herramientas para análisis de datos, generación de contenido y más, facilitando la implementación de soluciones de IA en diversas áreas.",
      en: "Abacus.AI is an artificial intelligence platform that enables businesses to automate processes by creating custom AI agents. It offers tools for data analysis, content generation, and more, facilitating the implementation of AI solutions across various domains."
    },
    useCases: {
      es: [
        "Automatización de atención al cliente",
        "Análisis predictivo de datos empresariales",
        "Generación de contenido personalizado",
        "Optimización de procesos internos",
        "Implementación de chatbots inteligentes"
      ],
      en: [
        "Customer service automation",
        "Predictive analysis of business data",
        "Personalized content generation",
        "Optimization of internal processes",
        "Implementation of intelligent chatbots"
      ]
    },
    resources: {
      es: [
        {
          title: "Documentación Oficial de Abacus.AI",
          url: "https://abacus.ai/",
          type: "article",
          description: "Información detallada sobre las capacidades y uso de Abacus.AI."
        },
        {
          title: "Abacus.AI en Google Cloud Marketplace",
          url: "https://console.cloud.google.com/marketplace/product/abacus-public/abacus.ai",
          type: "article",
          description: "Implementa Abacus.AI directamente desde Google Cloud."
        },
        {
          title: "Abacus.AI en Microsoft AppSource",
          url: "https://appsource.microsoft.com/en-us/product/office/wa200006565",
          type: "article",
          description: "Integra Abacus.AI con aplicaciones de Microsoft Office."
        }
      ],
      en: [
        {
          title: "Official Abacus.AI Documentation",
          url: "https://abacus.ai/",
          type: "article",
          description: "Detailed information about Abacus.AI's capabilities and usage."
        },
        {
          title: "Abacus.AI on Google Cloud Marketplace",
          url: "https://console.cloud.google.com/marketplace/product/abacus-public/abacus.ai",
          type: "article",
          description: "Deploy Abacus.AI directly from Google Cloud."
        },
        {
          title: "Abacus.AI on Microsoft AppSource",
          url: "https://appsource.microsoft.com/en-us/product/office/wa200006565",
          type: "article",
          description: "Integrate Abacus.AI with Microsoft Office applications."
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Desde $10/mes",
      en: "From $10/month"
    },
    difficulty: "intermediate",
    logo: "https://blog.abacus.ai/wp-content/uploads/2022/05/LOGO-LIGHT@10x.png",
    slug: "abacus-ai",
    featured: false,
    url: "https://abacus.ai/"
  },
  {
    id: "76",
    name: "SmolAgents",
    description: {
      es: "Agentes de IA minimalistas que ejecutan código Python",
      en: "Minimalist AI agents that execute Python code"
    },
    detailedDescription: {
      es: "SmolAgents es una biblioteca de código abierto desarrollada por Hugging Face que permite crear agentes de IA capaces de generar y ejecutar código Python. Diseñada con un enfoque minimalista, facilita la construcción de agentes potentes con pocas líneas de código, integrándose con modelos de lenguaje como los de Hugging Face, OpenAI y Anthropic.",
      en: "SmolAgents is an open-source library developed by Hugging Face that enables the creation of AI agents capable of generating and executing Python code. Designed with a minimalist approach, it facilitates building powerful agents with few lines of code, integrating with language models like those from Hugging Face, OpenAI, and Anthropic."
    },
    useCases: {
      es: [
        "Automatización de tareas mediante agentes que escriben y ejecutan código",
        "Integración de herramientas personalizadas en flujos de trabajo de IA",
        "Desarrollo de agentes que interactúan con APIs y servicios web",
        "Creación de asistentes virtuales especializados",
        "Implementación de soluciones de IA adaptables y eficientes"
      ],
      en: [
        "Task automation through agents that write and execute code",
        "Integration of custom tools into AI workflows",
        "Development of agents interacting with APIs and web services",
        "Creation of specialized virtual assistants",
        "Implementation of adaptable and efficient AI solutions"
      ]
    },
    resources: {
      es: [
        {
          title: "Documentación Oficial de SmolAgents",
          url: "https://smolagents.org/docs/smolagent-docs/",
          type: "article",
          description: "Guía completa para comenzar con SmolAgents y construir agentes de IA."
        },
        {
          title: "Repositorio de SmolAgents en GitHub",
          url: "https://github.com/huggingface/smolagents",
          type: "tutorial",
          description: "Código fuente y ejemplos para desarrollar agentes con SmolAgents."
        },
        {
          title: "Introducción a SmolAgents - Hugging Face",
          url: "https://huggingface.co/blog/smolagents",
          type: "article",
          description: "Artículo introductorio sobre SmolAgents y sus capacidades."
        }
      ],
      en: [
        {
          title: "Official SmolAgents Documentation",
          url: "https://smolagents.org/docs/smolagent-docs/",
          type: "article",
          description: "Comprehensive guide to get started with SmolAgents and build AI agents."
        },
        {
          title: "SmolAgents GitHub Repository",
          url: "https://github.com/huggingface/smolagents",
          type: "tutorial",
          description: "Source code and examples for developing agents with SmolAgents."
        },
        {
          title: "Introducing SmolAgents - Hugging Face",
          url: "https://huggingface.co/blog/smolagents",
          type: "article",
          description: "Introductory article on SmolAgents and its capabilities."
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://smolagents.org/wp-content/uploads/2025/01/cropped-Slice-91.png",
    slug: "smolagents",
    featured: false,
    url: "https://smolagents.org/"
  },
  {
    id: "77",
    name: "DocuSign",
    tags: ["Top"],
    description: {
      es: "Firma electrónica legal y gestión inteligente de acuerdos",
      en: "Legal electronic signature and intelligent agreement management"
    },
    detailedDescription: {
      es: "DocuSign es una plataforma líder en firmas electrónicas que permite a individuos y empresas firmar documentos de forma legal desde cualquier dispositivo. Además, ofrece soluciones avanzadas de gestión de acuerdos mediante inteligencia artificial, optimizando procesos contractuales y mejorando la eficiencia empresarial.",
      en: "DocuSign is a leading electronic signature platform that enables individuals and businesses to legally sign documents from any device. It also offers advanced agreement management solutions powered by artificial intelligence, optimizing contractual processes and enhancing business efficiency."
    },
    useCases: {
      es: [
        "Firma electrónica de contratos y documentos legales",
        "Automatización de flujos de trabajo de aprobación",
        "Gestión centralizada de acuerdos empresariales",
        "Integración con herramientas como Salesforce y Google Workspace",
        "Cumplimiento de normativas como eIDAS y ESIGN"
      ],
      en: [
        "Electronic signing of contracts and legal documents",
        "Automation of approval workflows",
        "Centralized management of business agreements",
        "Integration with tools like Salesforce and Google Workspace",
        "Compliance with regulations like eIDAS and ESIGN"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de Firma Electrónica de DocuSign",
          url: "https://www.docusign.com/products/electronic-signature",
          type: "article",
          description: "Información detallada sobre cómo funciona la firma electrónica con DocuSign."
        },
        {
          title: "Aplicación Móvil de DocuSign",
          url: "https://www.docusign.com/products/mobile",
          type: "tutorial",
          description: "Firma documentos desde tu dispositivo móvil con la app de DocuSign."
        },
        {
          title: "Planes y Precios de DocuSign",
          url: "https://ecom.docusign.com/plans-and-pricing/esignature",
          type: "article",
          description: "Consulta las opciones de suscripción disponibles para DocuSign."
        }
      ],
      en: [
        {
          title: "DocuSign Electronic Signature Guide",
          url: "https://www.docusign.com/products/electronic-signature",
          type: "article",
          description: "Detailed information on how electronic signatures work with DocuSign."
        },
        {
          title: "DocuSign Mobile App",
          url: "https://www.docusign.com/products/mobile",
          type: "tutorial",
          description: "Sign documents from your mobile device using the DocuSign app."
        },
        {
          title: "DocuSign Plans and Pricing",
          url: "https://ecom.docusign.com/plans-and-pricing/esignature",
          type: "article",
          description: "Explore subscription options available for DocuSign."
        }
      ]
    },
    category: "legal",
    price: {
      es: "Desde $10/mes",
      en: "From $10/month"
    },
    difficulty: "beginner",
    logo: "https://brandlogos.net/wp-content/uploads/2024/04/docusign-logo_brandlogos.net_5wujv.png",
    slug: "docusign",
    featured: false,
    url: "https://www.docusign.com/"
  },
  {
    id: "78",
    name: "Buffer",
    description: {
      es: "Gestiona y programa tus redes sociales con facilidad",
      en: "Manage and schedule your social media with ease"
    },
    detailedDescription: {
      es: "Buffer es una plataforma de gestión de redes sociales que permite programar publicaciones, analizar resultados y colaborar en equipo. Compatible con múltiples redes sociales, Buffer facilita la planificación y ejecución de estrategias de contenido.",
      en: "Buffer is a social media management platform that allows scheduling posts, analyzing results, and team collaboration. Compatible with multiple social networks, Buffer simplifies content strategy planning and execution."
    },
    useCases: {
      es: [
        "Programación de publicaciones en redes sociales",
        "Análisis de rendimiento de contenido",
        "Colaboración en equipo para gestión de redes",
        "Gestión de múltiples cuentas desde una sola plataforma",
        "Optimización de tiempos de publicación"
      ],
      en: [
        "Scheduling social media posts",
        "Analyzing content performance",
        "Team collaboration for social management",
        "Managing multiple accounts from one platform",
        "Optimizing posting times"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de Buffer para principiantes",
          url: "https://buffer.com/resources/getting-started",
          type: "article",
          description: "Aprende a utilizar Buffer desde cero con esta guía completa."
        },
        {
          title: "Curso de gestión de redes sociales con Buffer",
          url: "https://www.udemy.com/course/social-media-management-with-buffer/",
          type: "course",
          description: "Curso en línea para dominar Buffer y mejorar tu presencia en redes."
        },
        {
          title: "Video tutorial: Cómo usar Buffer",
          url: "https://www.youtube.com/watch?v=RsHPUt-bSQY",
          type: "video",
          description: "Tutorial paso a paso sobre el uso de Buffer para gestionar redes sociales."
        }
      ],
      en: [
        {
          title: "Buffer Beginner's Guide",
          url: "https://buffer.com/resources/getting-started",
          type: "article",
          description: "Learn how to use Buffer from scratch with this comprehensive guide."
        },
        {
          title: "Social Media Management with Buffer Course",
          url: "https://www.udemy.com/course/social-media-management-with-buffer/",
          type: "course",
          description: "Online course to master Buffer and enhance your social media presence."
        },
        {
          title: "Video Tutorial: How to Use Buffer",
          url: "https://www.youtube.com/watch?v=RsHPUt-bSQY",
          type: "video",
          description: "Step-by-step tutorial on using Buffer for social media management."
        }
      ]
    },
    category: "content",
    price: {
      es: "Gratis / Desde $6/mes por canal",
      en: "Free / From $6/month per channel"
    },
    difficulty: "beginner",
    logo: "https://www.cdnlogo.com/logos/b/15/buffer.svg",
    slug: "buffer",
    featured: false,
    url: "https://buffer.com"
  },
  {
    id: "79",
    name: "Blotato AI",
    description: {
      es: "Crea contenido viral y videos sin rostro con IA",
      en: "Create viral content and faceless videos with AI"
    },
    detailedDescription: {
      es: "Blotato AI es una herramienta todo en uno que permite generar, reutilizar y distribuir contenido en múltiples plataformas. Ideal para creadores y marcas que buscan escalar su presencia en redes sociales con contenido atractivo y automatizado.",
      en: "Blotato AI is an all-in-one tool that enables generating, repurposing, and distributing content across multiple platforms. Ideal for creators and brands aiming to scale their social media presence with engaging and automated content."
    },
    useCases: {
      es: [
        "Generación de publicaciones virales para redes sociales",
        "Creación de videos sin rostro para plataformas como TikTok e Instagram",
        "Automatización de la programación de contenido",
        "Reutilización de contenido existente en nuevos formatos",
        "Crecimiento de la audiencia en múltiples canales"
      ],
      en: [
        "Generating viral posts for social media",
        "Creating faceless videos for platforms like TikTok and Instagram",
        "Automating content scheduling",
        "Repurposing existing content into new formats",
        "Growing audience across multiple channels"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial de Blotato AI",
          url: "https://www.youtube.com/watch?v=_ZIUoINuc6E",
          type: "video",
          description: "Aprende a utilizar Blotato AI para crear contenido viral y automatizar tus redes."
        },
        {
          title: "Guía de inicio rápido de Blotato",
          url: "https://help.blotato.com/support/faqs",
          type: "article",
          description: "Respuestas a preguntas frecuentes y guía para comenzar con Blotato AI."
        },
        {
          title: "Curso completo de Blotato AI",
          url: "https://www.udemy.com/course/blotato-ai-completo/",
          type: "course",
          description: "Curso en línea para dominar todas las funcionalidades de Blotato AI."
        }
      ],
      en: [
        {
          title: "Blotato AI Tutorial",
          url: "https://www.youtube.com/watch?v=_ZIUoINuc6E",
          type: "video",
          description: "Learn how to use Blotato AI to create viral content and automate your social media."
        },
        {
          title: "Blotato Quick Start Guide",
          url: "https://help.blotato.com/support/faqs",
          type: "article",
          description: "Answers to frequently asked questions and guide to get started with Blotato AI."
        },
        {
          title: "Complete Blotato AI Course",
          url: "https://www.udemy.com/course/blotato-ai-complete/",
          type: "course",
          description: "Online course to master all functionalities of Blotato AI."
        }
      ]
    },
    category: "content",
    price: {
      es: "Desde $29/mes",
      en: "From $29/month"
    },
    difficulty: "intermediate",
    logo: "https://my.blotato.com/manatee-logo.png",
    slug: "blotato-ai",
    featured: false,
    url: "https://www.blotato.com"
  },
  {
    id: "80",
    name: "Midjourney",
    description: {
      es: "Genera imágenes artísticas con IA a partir de texto",
      en: "Generate artistic images with AI from text"
    },
    detailedDescription: {
      es: "Midjourney es una herramienta de inteligencia artificial que permite crear imágenes detalladas y artísticas a partir de descripciones textuales. Utiliza comandos en Discord para generar imágenes únicas, siendo ideal para artistas, diseñadores y creativos.",
      en: "Midjourney is an AI tool that enables the creation of detailed and artistic images from textual descriptions. It uses Discord commands to generate unique images, making it ideal for artists, designers, and creatives."
    },
    useCases: {
      es: [
        "Creación de arte digital a partir de descripciones",
        "Diseño de conceptos visuales para proyectos creativos",
        "Generación de imágenes para contenido de marketing",
        "Exploración de ideas visuales de manera rápida",
        "Producción de ilustraciones únicas y personalizadas"
      ],
      en: [
        "Creating digital art from descriptions",
        "Designing visual concepts for creative projects",
        "Generating images for marketing content",
        "Quick exploration of visual ideas",
        "Producing unique and customized illustrations"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía oficial de Midjourney",
          url: "https://docs.midjourney.com/",
          type: "article",
          description: "Documentación completa para aprender a utilizar Midjourney."
        },
        {
          title: "Curso de Midjourney en Platzi",
          url: "https://platzi.com/cursos/midjourney/",
          type: "course",
          description: "Curso en línea para dominar la generación de imágenes con Midjourney."
        },
        {
          title: "Tutorial: Cómo usar Midjourney",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Tutorial paso a paso sobre el uso de Midjourney para crear imágenes."
        }
      ],
      en: [
        {
          title: "Midjourney Official Guide",
          url: "https://docs.midjourney.com/",
          type: "article",
          description: "Comprehensive documentation to learn how to use Midjourney."
        },
        {
          title: "Midjourney Course on Platzi",
          url: "https://platzi.com/courses/midjourney/",
          type: "course",
          description: "Online course to master image generation with Midjourney."
        },
        {
          title: "Tutorial: How to Use Midjourney",
          url: "https://www.youtube.com/watch?v=example",
          type: "video",
          description: "Step-by-step tutorial on using Midjourney to create images."
        }
      ]
    },
    category: "content",
    price: {
      es: "Desde $10/mes",
      en: "From $10/month"
    },
    difficulty: "intermediate",
    logo: "https://pngdownloads.wordpress.com/wp-content/uploads/2023/05/midjourney-logo-png.jpg",
    slug: "midjourney",
    featured: false,
    url: "https://www.midjourney.com"
  },
  {
    id: "81",
    name: "Pic Copilot",
    description: {
      es: "Optimiza imágenes de productos con IA para eCommerce",
      en: "Optimize product images with AI for eCommerce"
    },
    detailedDescription: {
      es: "Pic Copilot es una herramienta impulsada por IA que transforma imágenes de productos en contenido visual atractivo. Ofrece funciones como eliminación de fondos, generación de sombras realistas, traducción de imágenes y modelos virtuales para mostrar productos sin necesidad de sesiones fotográficas.",
      en: "Pic Copilot is an AI-powered tool that transforms product images into engaging visual content. It offers features like background removal, realistic shadow generation, image translation, and virtual models to showcase products without the need for photoshoots."
    },
    useCases: {
      es: [
        "Creación de anuncios visuales para productos",
        "Generación de modelos virtuales para mostrar productos",
        "Traducción y localización de imágenes para mercados internacionales",
        "Optimización de imágenes para aumentar la tasa de clics",
        "Automatización del diseño de imágenes para eCommerce"
      ],
      en: [
        "Creating visual ads for products",
        "Generating virtual models to showcase products",
        "Translating and localizing images for international markets",
        "Optimizing images to increase click-through rates",
        "Automating image design for eCommerce"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Pic Copilot",
          url: "https://www.piccopilot.com/",
          type: "article",
          description: "Explora las funciones y casos de uso de Pic Copilot."
        },
        {
          title: "Video: Transformación de imágenes de eCommerce con Pic Copilot",
          url: "https://www.youtube.com/watch?v=Xv-ZRlQP0EY",
          type: "video",
          description: "Demostración de cómo Pic Copilot mejora las imágenes de productos."
        }
      ],
      en: [
        {
          title: "Pic Copilot Official Website",
          url: "https://www.piccopilot.com/",
          type: "article",
          description: "Explore the features and use cases of Pic Copilot."
        },
        {
          title: "Video: Transforming eCommerce Images with Pic Copilot",
          url: "https://www.youtube.com/watch?v=Xv-ZRlQP0EY",
          type: "video",
          description: "Demonstration of how Pic Copilot enhances product images."
        }
      ]
    },
    category: "content",
    price: {
      es: "Gratis / Planes desde $3.99/mes",
      en: "Free / Plans from $3.99/month"
    },
    difficulty: "beginner",
    logo: "https://brandlogos.net/wp-content/uploads/2023/09/microsoft_copilot-logo_brandlogos.net_zaqzr.png",
    slug: "pic-copilot",
    featured: false,
    url: "https://www.piccopilot.com/"
  },
  {
    id: "82",
    name: "TopView 2.0",
    description: {
      es: "Genera videos de productos con avatares IA",
      en: "Generate product videos with AI avatars"
    },
    detailedDescription: {
      es: "TopView 2.0 es una herramienta que permite crear videos de productos utilizando avatares generados por IA. Al subir una imagen del producto, se genera un video donde un avatar presenta el producto, eliminando la necesidad de sesiones fotográficas o de video tradicionales.",
      en: "TopView 2.0 is a tool that allows creating product videos using AI-generated avatars. By uploading a product image, it generates a video where an avatar showcases the product, eliminating the need for traditional photo or video shoots."
    },
    useCases: {
      es: [
        "Creación de videos promocionales para productos",
        "Generación de contenido para redes sociales",
        "Presentación de productos sin necesidad de modelos reales",
        "Ahorro en costos de producción de video",
        "Personalización de presentaciones de productos"
      ],
      en: [
        "Creating promotional videos for products",
        "Generating content for social media",
        "Showcasing products without real models",
        "Saving on video production costs",
        "Customizing product presentations"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de TopView",
          url: "https://www.topview.ai/",
          type: "article",
          description: "Descubre cómo TopView puede transformar tus presentaciones de productos."
        },
        {
          title: "Video: Review de TopView 2.0",
          url: "https://www.youtube.com/watch?v=bisu8YRMbQw",
          type: "video",
          description: "Análisis y demostración de las capacidades de TopView 2.0."
        }
      ],
      en: [
        {
          title: "TopView Official Website",
          url: "https://www.topview.ai/",
          type: "article",
          description: "Discover how TopView can transform your product presentations."
        },
        {
          title: "Video: TopView 2.0 Review",
          url: "https://www.youtube.com/watch?v=bisu8YRMbQw",
          type: "video",
          description: "Analysis and demonstration of TopView 2.0's capabilities."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $9.99/mes",
      en: "Plans from $9.99/month"
    },
    difficulty: "beginner",
    logo: "https://storage.googleapis.com/aiagents_1/agent-logos/1727578900727-c9a262645bbb4526.jpeg",
    slug: "topview-2",
    featured: false,
    url: "https://www.topview.ai/"
  },
  {
    id: "83",
    name: "Krea AI",
    description: {
      es: "Genera y edita imágenes y videos con IA en tiempo real",
      en: "Generate and edit images and videos with AI in real-time"
    },
    detailedDescription: {
      es: "Krea AI es una plataforma creativa que permite generar, editar y mejorar imágenes y videos utilizando inteligencia artificial. Ofrece herramientas como generación de imágenes en tiempo real, edición de objetos, mejora de resolución hasta 22K, y creación de videos con sincronización labial.",
      en: "Krea AI is a creative platform that enables generating, editing, and enhancing images and videos using artificial intelligence. It offers tools like real-time image generation, object editing, resolution enhancement up to 22K, and video creation with lip-syncing."
    },
    useCases: {
      es: [
        "Creación de contenido visual para marketing y redes sociales",
        "Edición y mejora de imágenes y videos existentes",
        "Generación de contenido visual personalizado",
        "Producción de videos con avatares y sincronización labial",
        "Exploración de ideas visuales en tiempo real"
      ],
      en: [
        "Creating visual content for marketing and social media",
        "Editing and enhancing existing images and videos",
        "Generating personalized visual content",
        "Producing videos with avatars and lip-syncing",
        "Exploring visual ideas in real-time"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Krea AI",
          url: "https://www.krea.ai/",
          type: "article",
          description: "Explora las herramientas y funcionalidades de Krea AI."
        },
        {
          title: "Video: Tutorial de Krea AI",
          url: "https://www.youtube.com/watch?v=GJgFDHfLVJs",
          type: "video",
          description: "Guía paso a paso sobre cómo utilizar Krea AI."
        }
      ],
      en: [
        {
          title: "Krea AI Official Website",
          url: "https://www.krea.ai/",
          type: "article",
          description: "Explore the tools and features of Krea AI."
        },
        {
          title: "Video: Krea AI Tutorial",
          url: "https://www.youtube.com/watch?v=GJgFDHfLVJs",
          type: "video",
          description: "Step-by-step guide on how to use Krea AI."
        }
      ]
    },
    category: "content",
    price: {
      es: "Gratis / Planes desde $12/mes",
      en: "Free / Plans from $12/month"
    },
    difficulty: "intermediate",
    logo: "https://cdn-1.webcatalog.io/catalog/krea-ai/krea-ai-icon-unplated.png?v=1714781416774",
    slug: "krea-ai",
    featured: false,
    url: "https://www.krea.ai/"
  },
  {
    id: "84",
    name: "OpenMagic",
    description: {
      es: "Crea contenido 3D, CGI y VFX con IA en pocos clics",
      en: "Create 3D, CGI, and VFX content with AI in just a few clicks"
    },
    detailedDescription: {
      es: "OpenMagic es una plataforma impulsada por inteligencia artificial que permite a los usuarios generar contenido visual de alta calidad, incluyendo videos con efectos 3D y CGI, utilizando plantillas prediseñadas y herramientas automatizadas.",
      en: "OpenMagic is an AI-powered platform that enables users to generate high-quality visual content, including videos with 3D and CGI effects, using pre-designed templates and automated tools."
    },
    useCases: {
      es: [
        "Creación de anuncios visuales para productos",
        "Generación de contenido para redes sociales",
        "Producción de videos promocionales con efectos especiales",
        "Desarrollo de contenido visual para campañas de marketing",
        "Automatización de la creación de contenido 3D y CGI"
      ],
      en: [
        "Creating visual ads for products",
        "Generating content for social media",
        "Producing promotional videos with special effects",
        "Developing visual content for marketing campaigns",
        "Automating the creation of 3D and CGI content"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de OpenMagic",
          url: "https://omagic.ai/",
          type: "article",
          description: "Explora las funciones y casos de uso de OpenMagic."
        },
        {
          title: "Video: Tutorial de OpenMagic",
          url: "https://www.tiktok.com/discover/open-magic-ai-tutorial",
          type: "video",
          description: "Guía paso a paso sobre cómo utilizar OpenMagic para crear contenido visual."
        }
      ],
      en: [
        {
          title: "OpenMagic Official Website",
          url: "https://omagic.ai/",
          type: "article",
          description: "Explore the features and use cases of OpenMagic."
        },
        {
          title: "Video: OpenMagic Tutorial",
          url: "https://www.tiktok.com/discover/open-magic-ai-tutorial",
          type: "video",
          description: "Step-by-step guide on how to use OpenMagic to create visual content."
        }
      ]
    },
    category: "content",
    price: {
      es: "Planes desde $10/mes",
      en: "Plans from $10/month"
    },
    difficulty: "beginner",
    logo: "https://pbs.twimg.com/profile_images/1888331438648434688/hOlijepH_400x400.jpg",
    slug: "openmagic",
    featured: false,
    url: "https://omagic.ai/"
  },
  {
    id: "85",
    name: "Jotform",
    description: {
      es: "Creador de formularios en línea fácil y potente",
      en: "Easy and powerful online form builder"
    },
    detailedDescription: {
      es: "Jotform es una plataforma líder en la creación de formularios en línea que permite a los usuarios diseñar, compartir y gestionar formularios personalizados sin necesidad de conocimientos de programación.",
      en: "Jotform is a leading online form creation platform that allows users to design, share, and manage custom forms without the need for programming knowledge."
    },
    useCases: {
      es: [
        "Creación de formularios de contacto para sitios web",
        "Recopilación de datos para encuestas y estudios",
        "Gestión de inscripciones y registros en eventos",
        "Procesamiento de pedidos y pagos en línea",
        "Automatización de flujos de trabajo empresariales"
      ],
      en: [
        "Creating contact forms for websites",
        "Collecting data for surveys and studies",
        "Managing event registrations and sign-ups",
        "Processing online orders and payments",
        "Automating business workflows"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Jotform",
          url: "https://www.jotform.com/es/",
          type: "article",
          description: "Explora las funciones y plantillas disponibles en Jotform."
        },
        {
          title: "Guía de seguridad de Jotform",
          url: "https://www.jotform.com/es/security/",
          type: "article",
          description: "Conoce las medidas de seguridad implementadas por Jotform para proteger tus datos."
        }
      ],
      en: [
        {
          title: "Jotform Official Website",
          url: "https://www.jotform.com/",
          type: "article",
          description: "Explore the features and templates available on Jotform."
        },
        {
          title: "Jotform Security Guide",
          url: "https://www.jotform.com/security/",
          type: "article",
          description: "Learn about the security measures implemented by Jotform to protect your data."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Gratis / Planes desde $24/mes",
      en: "Free / Plans from $24/month"
    },
    difficulty: "beginner",
    logo: "https://cdn.prod.website-files.com/657639ebfb91510f45654149/67f6a20c5f03bd9672de2d83_symbol.png",
    slug: "jotform",
    featured: false,
    url: "https://www.jotform.com/"
  },
  {
    id: "86",
    name: "CodeGuide",
    description: {
      es: "Asistente de codificación con IA para desarrolladores",
      en: "AI coding assistant for developers"
    },
    detailedDescription: {
      es: "CodeGuide es una herramienta que ayuda a los desarrolladores a escribir y comprender código mediante la generación de documentación, sugerencias y ejemplos paso a paso, facilitando el aprendizaje y la colaboración.",
      en: "CodeGuide is a tool that assists developers in writing and understanding code by generating documentation, suggestions, and step-by-step examples, facilitating learning and collaboration."
    },
    useCases: {
      es: [
        "Generación automática de documentación de código",
        "Asistencia en la escritura de código con sugerencias contextuales",
        "Creación de tutoriales interactivos para aprender nuevas tecnologías",
        "Colaboración en proyectos de desarrollo con guías compartidas",
        "Mejora de la comprensión de algoritmos y estructuras de datos"
      ],
      en: [
        "Automatic generation of code documentation",
        "Assistance in writing code with contextual suggestions",
        "Creation of interactive tutorials to learn new technologies",
        "Collaboration on development projects with shared guides",
        "Improvement of understanding of algorithms and data structures"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de CodeGuide",
          url: "https://www.codeguide.dev/",
          type: "article",
          description: "Descubre cómo CodeGuide puede mejorar tu flujo de trabajo de desarrollo."
        },
        {
          title: "Repositorio de CodeGuide en GitHub",
          url: "https://github.com/codeguideapp/codeguide",
          type: "article",
          description: "Accede al código fuente y contribuye al desarrollo de CodeGuide."
        }
      ],
      en: [
        {
          title: "CodeGuide Official Website",
          url: "https://www.codeguide.dev/",
          type: "article",
          description: "Discover how CodeGuide can enhance your development workflow."
        },
        {
          title: "CodeGuide GitHub Repository",
          url: "https://github.com/codeguideapp/codeguide",
          type: "article",
          description: "Access the source code and contribute to the development of CodeGuide."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://hansfelix.github.io/code-guide/code-guide-logo.png",
    slug: "codeguide",
    featured: false,
    url: "https://www.codeguide.dev/"
  },
  {
    id: "87",
    name: "DigitalOcean",
    description: {
      es: "Infraestructura en la nube sencilla y escalable para desarrolladores",
      en: "Simple and scalable cloud infrastructure for developers"
    },
    detailedDescription: {
      es: "DigitalOcean es un proveedor de infraestructura en la nube que ofrece soluciones de hosting y despliegue de aplicaciones con una interfaz sencilla y precios transparentes. Ideal para startups y desarrolladores que buscan escalar sus aplicaciones sin complicaciones.",
      en: "DigitalOcean is a cloud infrastructure provider offering hosting and application deployment solutions with a simple interface and transparent pricing. Ideal for startups and developers looking to scale their applications effortlessly."
    },
    useCases: {
      es: [
        "Alojamiento de aplicaciones web y móviles",
        "Implementación de servidores virtuales (Droplets)",
        "Gestión de bases de datos en la nube",
        "Despliegue de aplicaciones con App Platform",
        "Escalado de aplicaciones con Kubernetes gestionado"
      ],
      en: [
        "Hosting web and mobile applications",
        "Deploying virtual servers (Droplets)",
        "Managing cloud databases",
        "Deploying applications with App Platform",
        "Scaling applications with managed Kubernetes"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de inicio rápido de DigitalOcean",
          url: "https://www.digitalocean.com/docs/getting-started/",
          type: "article",
          description: "Aprende a comenzar con DigitalOcean y desplegar tu primera aplicación."
        },
        {
          title: "Curso: Despliegue de aplicaciones en la nube con DigitalOcean",
          url: "https://www.udemy.com/course/deploying-apps-on-digitalocean/",
          type: "course",
          description: "Curso completo sobre cómo desplegar y escalar aplicaciones en DigitalOcean."
        },
        {
          title: "Video: Introducción a DigitalOcean",
          url: "https://www.youtube.com/watch?v=DigitalOceanIntro",
          type: "video",
          description: "Conoce las características principales de DigitalOcean y cómo comenzar."
        }
      ],
      en: [
        {
          title: "DigitalOcean Quick Start Guide",
          url: "https://www.digitalocean.com/docs/getting-started/",
          type: "article",
          description: "Learn how to get started with DigitalOcean and deploy your first application."
        },
        {
          title: "Course: Deploying Apps on DigitalOcean",
          url: "https://www.udemy.com/course/deploying-apps-on-digitalocean/",
          type: "course",
          description: "Comprehensive course on deploying and scaling applications on DigitalOcean."
        },
        {
          title: "Video: Introduction to DigitalOcean",
          url: "https://www.youtube.com/watch?v=DigitalOceanIntro",
          type: "video",
          description: "Discover DigitalOcean's main features and how to get started."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Desde $4/mes",
      en: "From $4/month"
    },
    difficulty: "intermediate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1200px-DigitalOcean_logo.svg.png",
    slug: "digitalocean",
    featured: false,
    url: "https://www.digitalocean.com/"
  },
  {
    id: "88",
    name: "EasyPanel",
    tags: ["irrelevant"],
    description: {
      es: "Panel de control moderno para gestionar servidores y aplicaciones",
      en: "Modern control panel to manage servers and applications"
    },
    detailedDescription: {
      es: "EasyPanel es una herramienta que simplifica la gestión de servidores y el despliegue de aplicaciones mediante una interfaz intuitiva. Compatible con múltiples tecnologías y bases de datos, permite automatizar tareas comunes y mejorar la eficiencia operativa.",
      en: "EasyPanel is a tool that simplifies server management and application deployment through an intuitive interface. Compatible with multiple technologies and databases, it allows automating common tasks and improving operational efficiency."
    },
    useCases: {
      es: [
        "Despliegue de aplicaciones con un solo clic",
        "Gestión de bases de datos y backups automáticos",
        "Monitoreo de recursos del servidor",
        "Automatización de tareas de mantenimiento",
        "Gestión de múltiples proyectos desde un solo panel"
      ],
      en: [
        "One-click application deployment",
        "Database management and automatic backups",
        "Server resource monitoring",
        "Automation of maintenance tasks",
        "Management of multiple projects from a single panel"
      ]
    },
    resources: {
      es: [
        {
          title: "Documentación oficial de EasyPanel",
          url: "https://easypanel.io/docs/",
          type: "article",
          description: "Guía completa para utilizar todas las funcionalidades de EasyPanel."
        },
        {
          title: "Curso: Gestión de servidores con EasyPanel",
          url: "https://www.udemy.com/course/server-management-with-easypanel/",
          type: "course",
          description: "Aprende a gestionar servidores y desplegar aplicaciones usando EasyPanel."
        },
        {
          title: "Video: Introducción a EasyPanel",
          url: "https://www.youtube.com/watch?v=EasyPanelIntro",
          type: "video",
          description: "Conoce cómo EasyPanel puede facilitar la gestión de tus servidores."
        }
      ],
      en: [
        {
          title: "EasyPanel Official Documentation",
          url: "https://easypanel.io/docs/",
          type: "article",
          description: "Comprehensive guide to using all EasyPanel functionalities."
        },
        {
          title: "Course: Server Management with EasyPanel",
          url: "https://www.udemy.com/course/server-management-with-easypanel/",
          type: "course",
          description: "Learn to manage servers and deploy applications using EasyPanel."
        },
        {
          title: "Video: Introduction to EasyPanel",
          url: "https://www.youtube.com/watch?v=EasyPanelIntro",
          type: "video",
          description: "Discover how EasyPanel can simplify your server management."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis / Planes desde $10.9/mes",
      en: "Free / Plans from $10.9/month"
    },
    difficulty: "beginner",
    logo: "https://easypanel.io/img/logomark.svg",
    slug: "easypanel",
    featured: false,
    url: "https://easypanel.io/"
  },
  {
    id: "89",
    name: "Scribe Tutorials",
    tags: ["Top"],
    description: {
      es: "Crea tutoriales paso a paso automáticamente",
      en: "Automatically create step-by-step tutorials"
    },
    detailedDescription: {
      es: "Scribe Tutorials es una herramienta que permite generar guías y tutoriales detallados capturando automáticamente los pasos realizados en la pantalla. Ideal para documentar procesos y capacitar equipos de manera eficiente.",
      en: "Scribe Tutorials is a tool that enables the generation of detailed guides and tutorials by automatically capturing the steps performed on the screen. Ideal for documenting processes and training teams efficiently."
    },
    useCases: {
      es: [
        "Documentación de procesos internos",
        "Creación de manuales de usuario",
        "Capacitación de nuevos empleados",
        "Soporte técnico y resolución de problemas",
        "Automatización de la creación de tutoriales"
      ],
      en: [
        "Internal process documentation",
        "User manual creation",
        "New employee training",
        "Technical support and troubleshooting",
        "Automation of tutorial creation"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de inicio de Scribe Tutorials",
          url: "https://scribehow.com/getting-started",
          type: "article",
          description: "Aprende a crear tus primeros tutoriales con Scribe."
        },
        {
          title: "Curso: Documentación eficiente con Scribe",
          url: "https://www.udemy.com/course/efficient-documentation-with-scribe/",
          type: "course",
          description: "Domina la creación de tutoriales y guías paso a paso usando Scribe."
        },
        {
          title: "Video: Cómo usar Scribe Tutorials",
          url: "https://www.youtube.com/watch?v=ScribeTutorialsIntro",
          type: "video",
          description: "Descubre cómo Scribe puede ayudarte a documentar procesos fácilmente."
        }
      ],
      en: [
        {
          title: "Scribe Tutorials Getting Started Guide",
          url: "https://scribehow.com/getting-started",
          type: "article",
          description: "Learn how to create your first tutorials with Scribe."
        },
        {
          title: "Course: Efficient Documentation with Scribe",
          url: "https://www.udemy.com/course/efficient-documentation-with-scribe/",
          type: "course",
          description: "Master the creation of step-by-step tutorials and guides using Scribe."
        },
        {
          title: "Video: How to Use Scribe Tutorials",
          url: "https://www.youtube.com/watch?v=ScribeTutorialsIntro",
          type: "video",
          description: "Discover how Scribe can help you document processes easily."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis / Planes desde $23/mes",
      en: "Free / Plans from $23/month"
    },
    difficulty: "beginner",
    logo: "https://cdn-1.webcatalog.io/catalog/scribe/scribe-icon-unplated.png?v=1719896783685",
    slug: "scribe-tutorials",
    featured: false,
    url: "https://scribehow.com/"
  },
  {
    id: "90",
    name: "CopyCoder AI",
    description: {
      es: "Convierte diseños en código con IA",
      en: "Turn designs into code with AI"
    },
    detailedDescription: {
      es: "CopyCoder AI es una herramienta que transforma capturas de pantalla, maquetas de UI o diseños personalizados en prompts optimizados para asistentes de codificación como Cursor, Bolt y v0. Facilita la creación de aplicaciones al generar código limpio y listo para producción a partir de imágenes.",
      en: "CopyCoder AI is a tool that transforms screenshots, UI mockups, or custom designs into optimized prompts for coding assistants like Cursor, Bolt, and v0. It streamlines app creation by generating clean, production-ready code from images."
    },
    useCases: {
      es: [
        "Prototipado rápido de aplicaciones",
        "Generación de código a partir de diseños de UI",
        "Automatización del flujo de trabajo de desarrollo",
        "Aprendizaje y experimentación con herramientas de IA",
        "Creación de prompts para asistentes de codificación"
      ],
      en: [
        "Rapid app prototyping",
        "Code generation from UI designs",
        "Automation of development workflows",
        "Learning and experimenting with AI tools",
        "Creating prompts for coding assistants"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de CopyCoder",
          url: "https://copycoder.ai/",
          type: "article",
          description: "Explora las funcionalidades de CopyCoder y cómo transformar diseños en código."
        },
        {
          title: "Video: Cómo clonar una aplicación web con CopyCoder y Cursor",
          url: "https://www.youtube.com/watch?v=6-s-TZxaqBQ",
          type: "video",
          description: "Tutorial sobre cómo utilizar CopyCoder junto con Cursor para clonar aplicaciones web."
        }
      ],
      en: [
        {
          title: "CopyCoder Official Website",
          url: "https://copycoder.ai/",
          type: "article",
          description: "Explore CopyCoder's features and how to turn designs into code."
        },
        {
          title: "Video: Instantly Clone Any Web App with CopyCoder and Cursor",
          url: "https://www.youtube.com/watch?v=6-s-TZxaqBQ",
          type: "video",
          description: "Tutorial on using CopyCoder with Cursor to clone web applications."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Gratis / Plan Pro desde $15/mes",
      en: "Free / Pro Plan from $15/month"
    },
    difficulty: "beginner",
    logo: "https://pbs.twimg.com/profile_images/1858982207953453056/aYuLFN87_400x400.jpg",
    slug: "copycoder-ai",
    featured: false,
    url: "https://copycoder.ai/"
  },
  {
    id: "91",
    name: "Databutton",
    description: {
      es: "Desarrolla aplicaciones con IA sin necesidad de codificar",
      en: "Develop applications with AI without coding"
    },
    detailedDescription: {
      es: "Databutton es una plataforma de desarrollo asistido por IA que permite a usuarios no técnicos crear aplicaciones web completas mediante descripciones en lenguaje natural. La IA genera planes de desarrollo, ejecuta tareas y despliega aplicaciones en la nube, facilitando la creación de software sin necesidad de conocimientos de programación.",
      en: "Databutton is an AI-assisted development platform that enables non-technical users to create full web applications through natural language descriptions. The AI generates development plans, executes tasks, and deploys applications to the cloud, simplifying software creation without coding knowledge."
    },
    useCases: {
      es: [
        "Creación de aplicaciones web completas sin codificar",
        "Prototipado rápido de ideas de negocio",
        "Automatización de procesos empresariales",
        "Desarrollo de aplicaciones impulsadas por datos",
        "Construcción de herramientas internas personalizadas"
      ],
      en: [
        "Creating full web applications without coding",
        "Rapid prototyping of business ideas",
        "Automation of business processes",
        "Development of data-driven applications",
        "Building custom internal tools"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Databutton",
          url: "https://databutton.com/",
          type: "article",
          description: "Descubre cómo Databutton puede ayudarte a desarrollar aplicaciones sin codificar."
        },
        {
          title: "Video: Cómo usar Databutton para principiantes",
          url: "https://www.youtube.com/watch?v=VAKnq8ESAic",
          type: "video",
          description: "Tutorial para principiantes sobre cómo utilizar Databutton."
        }
      ],
      en: [
        {
          title: "Databutton Official Website",
          url: "https://databutton.com/",
          type: "article",
          description: "Learn how Databutton can help you develop applications without coding."
        },
        {
          title: "Video: How to Use Databutton for Beginners",
          url: "https://www.youtube.com/watch?v=VAKnq8ESAic",
          type: "video",
          description: "Beginner's tutorial on how to use Databutton."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Desde $20/mes",
      en: "From $20/month"
    },
    difficulty: "beginner",
    logo: "https://images.ctfassets.net/dmu1essxro7q/7xLDNq2zEsCmAWJa76rt4X/3677df4fe1801a69be776b7754cd7793/Logo_after_quote_image.jpg",
    slug: "databutton",
    featured: false,
    url: "https://databutton.com/"
  },
  {
    id: "92",
    name: "Softgen AI",
    description: {
      es: "Construye aplicaciones web completas con IA sin necesidad de codificar",
      en: "Build full web applications with AI without coding"
    },
    detailedDescription: {
      es: "Softgen AI es una plataforma que permite a los usuarios transformar ideas en aplicaciones web completas utilizando inteligencia artificial. A través de descripciones en lenguaje natural, la IA genera código de producción, maneja la autenticación, la base de datos y el almacenamiento, y despliega la aplicación, todo sin necesidad de conocimientos de programación.",
      en: "Softgen AI is a platform that enables users to transform ideas into full web applications using artificial intelligence. Through natural language descriptions, the AI generates production-ready code, handles authentication, database, and storage, and deploys the application, all without coding knowledge."
    },
    useCases: {
      es: [
        "Desarrollo rápido de aplicaciones web completas",
        "Prototipado de ideas de negocio",
        "Creación de herramientas internas personalizadas",
        "Automatización de procesos empresariales",
        "Desarrollo de aplicaciones con integración de Firebase"
      ],
      en: [
        "Rapid development of full web applications",
        "Prototyping business ideas",
        "Creating custom internal tools",
        "Automation of business processes",
        "Developing applications with Firebase integration"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Softgen AI",
          url: "https://softgen.ai/",
          type: "article",
          description: "Explora cómo Softgen AI puede ayudarte a construir aplicaciones web completas sin codificar."
        },
        {
          title: "Video: ¿Softgen realmente supera a las principales herramientas de IA?",
          url: "https://www.youtube.com/watch?v=g60Uva6Mn7k",
          type: "video",
          description: "Análisis detallado de las características y comparaciones de Softgen con otras herramientas de IA."
        }
      ],
      en: [
        {
          title: "Softgen AI Official Website",
          url: "https://softgen.ai/",
          type: "article",
          description: "Explore how Softgen AI can help you build full web applications without coding."
        },
        {
          title: "Video: Does Softgen Really Beat the Top AI Tools?",
          url: "https://www.youtube.com/watch?v=g60Uva6Mn7k",
          type: "video",
          description: "Detailed analysis of Softgen's features and comparisons with other AI tools."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Desde $25/mes",
      en: "From $25/month"
    },
    difficulty: "beginner",
    logo: "https://www.fahimai.com/wp-content/uploads/2025/03/SoftGen-CTA.png",
    slug: "softgen-ai",
    featured: false,
    url: "https://softgen.ai/"
  },
  {
    id: "93",
    name: "Instantly",
    description: {
      es: "Automatiza campañas de email frío con IA",
      en: "Automate cold email campaigns with AI"
    },
    detailedDescription: {
      es: "Instantly es una plataforma de automatización de email marketing enfocada en campañas de prospección en frío. Ofrece funciones como rotación de bandejas de entrada, calentamiento ilimitado de correos, generación de leads B2B y personalización de mensajes mediante IA. Ideal para agencias, reclutadores y equipos de ventas que buscan escalar su alcance sin comprometer la entregabilidad.",
      en: "Instantly is a cold email automation platform designed for outreach campaigns. It offers features like inbox rotation, unlimited email warm-up, B2B lead generation, and AI-powered message personalization. Ideal for agencies, recruiters, and sales teams aiming to scale outreach without compromising deliverability."
    },
    useCases: {
      es: [
        "Campañas de prospección en frío a gran escala",
        "Generación y enriquecimiento de leads B2B",
        "Automatización de seguimientos y respuestas",
        "Optimización de entregabilidad de correos",
        "Análisis y pruebas A/B de campañas"
      ],
      en: [
        "Large-scale cold outreach campaigns",
        "B2B lead generation and enrichment",
        "Automated follow-ups and replies",
        "Email deliverability optimization",
        "Campaign analytics and A/B testing"
      ]
    },
    resources: {
      es: [
        {
          title: "Tutorial completo de Instantly",
          url: "https://www.youtube.com/watch?v=Bc4Kt107dB8",
          type: "video",
          description: "Aprende a configurar y optimizar tus campañas de email frío con Instantly."
        },
        {
          title: "Reseña detallada de Instantly.ai",
          url: "https://www.lemlist.com/blog/instantly-ai-review",
          type: "article",
          description: "Análisis profundo de las funcionalidades y rendimiento de Instantly."
        }
      ],
      en: [
        {
          title: "Full Instantly.ai Tutorial",
          url: "https://www.youtube.com/watch?v=Bc4Kt107dB8",
          type: "video",
          description: "Learn how to set up and optimize your cold email campaigns with Instantly."
        },
        {
          title: "In-Depth Review of Instantly.ai",
          url: "https://www.lemlist.com/blog/instantly-ai-review",
          type: "article",
          description: "Comprehensive analysis of Instantly's features and performance."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Desde $37/mes",
      en: "From $37/month"
    },
    difficulty: "intermediate",
    logo: "https://files.nachonacho.com/users/cl12m0wwr136122epmu7ds49cn8/nn_1681334252401_Untitled.jpg",
    slug: "instantly",
    featured: false,
    url: "https://instantly.ai/"
  },
  {
    id: "94",
    name: "Sintra",
    description: {
      es: "Asistentes virtuales impulsados por IA para tareas empresariales",
      en: "AI-powered virtual assistants for business tasks"
    },
    detailedDescription: {
      es: "Sintra es una plataforma que ofrece asistentes virtuales especializados en diversas áreas como marketing, soporte al cliente, análisis de datos y más. Cada asistente, como 'Soshie' para redes sociales o 'Seomi' para SEO, utiliza IA para automatizar tareas específicas, mejorando la eficiencia operativa sin necesidad de conocimientos técnicos.",
      en: "Sintra is a platform providing virtual assistants specialized in areas like marketing, customer support, data analysis, and more. Each assistant, such as 'Soshie' for social media or 'Seomi' for SEO, leverages AI to automate specific tasks, enhancing operational efficiency without requiring technical expertise."
    },
    useCases: {
      es: [
        "Automatización de publicaciones en redes sociales",
        "Generación de contenido SEO",
        "Análisis de datos empresariales",
        "Gestión de campañas de marketing",
        "Soporte al cliente automatizado"
      ],
      en: [
        "Automated social media posting",
        "SEO content generation",
        "Business data analysis",
        "Marketing campaign management",
        "Automated customer support"
      ]
    },
    resources: {
      es: [
        {
          title: "Reseña y recorrido por Sintra AI",
          url: "https://www.youtube.com/watch?v=KzgviPyY95I",
          type: "video",
          description: "Explora las funcionalidades de Sintra y cómo puede mejorar tus operaciones empresariales."
        },
        {
          title: "Sintra AI: Automatización para la eficiencia",
          url: "https://topaitools.com/tools/sintra",
          type: "article",
          description: "Análisis de cómo Sintra utiliza asistentes virtuales para optimizar tareas empresariales."
        }
      ],
      en: [
        {
          title: "Sintra AI Review and Walkthrough",
          url: "https://www.youtube.com/watch?v=KzgviPyY95I",
          type: "video",
          description: "Explore Sintra's features and how it can enhance your business operations."
        },
        {
          title: "Sintra AI: Automation Bots for Efficiency",
          url: "https://topaitools.com/tools/sintra",
          type: "article",
          description: "Analysis of how Sintra uses virtual assistants to optimize business tasks."
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Planes desde $29/mes",
      en: "Plans from $29/month"
    },
    difficulty: "beginner",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQExnxY5O0n1ZQ/company-logo_200_200/company-logo_200_200/0/1722979291326/sintradotai_logo?e=2147483647&v=beta&t=VYTLwP_b56UNDNzbwW9zUMbXEUbs_ic_amNTGD2UNFA",
    slug: "sintra",
    featured: false,
    url: "https://sintra.ai/"
  },
  {
    id: "95",
    name: "Loops Mail",
    tags: ["irrelevant"],
    description: {
      es: "Plataforma de email marketing moderna para empresas SaaS",
      en: "Modern email marketing platform for SaaS companies"
    },
    detailedDescription: {
      es: "Loops Mail es una herramienta de email marketing diseñada para empresas de software como servicio (SaaS). Permite crear, enviar y rastrear campañas de correo electrónico de manera sencilla, integrando correos de producto, marketing y transaccionales en una sola interfaz. Ofrece personalización dinámica y análisis detallados para optimizar la comunicación con los usuarios.",
      en: "Loops Mail is an email marketing tool designed for software-as-a-service (SaaS) companies. It enables easy creation, sending, and tracking of email campaigns, integrating product, marketing, and transactional emails into a single interface. Offers dynamic personalization and detailed analytics to optimize user communication."
    },
    useCases: {
      es: [
        "Campañas de onboarding para nuevos usuarios",
        "Correos transaccionales personalizados",
        "Promociones y actualizaciones de productos",
        "Segmentación de usuarios basada en comportamiento",
        "Análisis de rendimiento de campañas"
      ],
      en: [
        "Onboarding campaigns for new users",
        "Personalized transactional emails",
        "Product promotions and updates",
        "User segmentation based on behavior",
        "Campaign performance analysis"
      ]
    },
    resources: {
      es: [
        {
          title: "Loops: Plataforma de email para SaaS",
          url: "https://loops.so/",
          type: "article",
          description: "Descubre cómo Loops puede mejorar tu estrategia de email marketing."
        },
        {
          title: "Loops: Comparativa con otras herramientas",
          url: "https://efficient.app/compare/loops-vs-mailchimp",
          type: "article",
          description: "Análisis de Loops frente a otras plataformas de email marketing."
        }
      ],
      en: [
        {
          title: "Loops: The Email Platform Built for SaaS",
          url: "https://loops.so/",
          type: "article",
          description: "Discover how Loops can enhance your email marketing strategy."
        },
        {
          title: "Loops vs Mailchimp: Email Marketing Comparison",
          url: "https://efficient.app/compare/loops-vs-mailchimp",
          type: "article",
          description: "Analysis of Loops compared to other email marketing platforms."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Gratis / Planes desde $49/mes",
      en: "Free / Plans from $49/month"
    },
    difficulty: "beginner",
    logo: "https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/63ed8c1aea87777ba649b02c_Loops%20Logo.svg",
    slug: "loops-mail",
    featured: false,
    url: "https://loops.so/"
  },
  {
    id: "96",
    name: "Tolt",
    description: {
      es: "Lanza y gestiona programas de afiliados para SaaS",
      en: "Launch and manage affiliate programs for SaaS"
    },
    detailedDescription: {
      es: "Tolt es una plataforma todo-en-uno diseñada para ayudar a startups SaaS a crear y administrar programas de afiliados y referidos. Ofrece integraciones con Stripe, Paddle y Chargebee, automatiza pagos a través de PayPal y Wise, y proporciona un portal de afiliados con marca personalizada.",
      en: "Tolt is an all-in-one platform designed to help SaaS startups create and manage affiliate and referral programs. It offers integrations with Stripe, Paddle, and Chargebee, automates payouts via PayPal and Wise, and provides a branded affiliate portal."
    },
    useCases: {
      es: [
        "Implementar programas de afiliados para productos SaaS",
        "Automatizar pagos y seguimiento de comisiones",
        "Ofrecer un portal personalizado para afiliados",
        "Integrar con plataformas de pago como Stripe y Paddle",
        "Monitorear el rendimiento de campañas de afiliados"
      ],
      en: [
        "Implement affiliate programs for SaaS products",
        "Automate payouts and commission tracking",
        "Provide a branded portal for affiliates",
        "Integrate with payment platforms like Stripe and Paddle",
        "Monitor affiliate campaign performance"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Tolt",
          url: "https://tolt.io/",
          type: "article",
          description: "Descubre cómo Tolt puede ayudarte a gestionar programas de afiliados para tu startup SaaS."
        },
        {
          title: "Tutorial: Configuración de Tolt para SaaS",
          url: "https://www.youtube.com/watch?v=EjemploTolt",
          type: "video",
          description: "Aprende a configurar y utilizar Tolt para tu negocio SaaS."
        }
      ],
      en: [
        {
          title: "Tolt Official Website",
          url: "https://tolt.io/",
          type: "article",
          description: "Learn how Tolt can help you manage affiliate programs for your SaaS startup."
        },
        {
          title: "Tutorial: Setting Up Tolt for SaaS",
          url: "https://www.youtube.com/watch?v=EjemploTolt",
          type: "video",
          description: "Learn how to set up and use Tolt for your SaaS business."
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Desde $49/mes",
      en: "From $49/month"
    },
    difficulty: "beginner",
    logo: "https://pbs.twimg.com/profile_images/1836720055473618944/3GntqvaN_400x400.jpg",
    slug: "tolt",
    featured: false,
    url: "https://tolt.io/"
  },
  {
    id: "97",
    name: "Screen Studio",
    description: {
      es: "Grabador de pantalla profesional para macOS",
      en: "Professional screen recorder for macOS"
    },
    detailedDescription: {
      es: "Screen Studio es una herramienta de grabación de pantalla para macOS que permite crear videos de alta calidad sin necesidad de habilidades avanzadas de edición. Ideal para tutoriales, demostraciones de productos y contenido para redes sociales.",
      en: "Screen Studio is a screen recording tool for macOS that enables users to create high-quality videos without advanced editing skills. Ideal for tutorials, product demos, and social media content."
    },
    useCases: {
      es: [
        "Crear tutoriales en video",
        "Grabar demostraciones de productos",
        "Producir contenido para redes sociales",
        "Realizar presentaciones grabadas",
        "Generar cursos en línea"
      ],
      en: [
        "Create video tutorials",
        "Record product demonstrations",
        "Produce social media content",
        "Conduct recorded presentations",
        "Generate online courses"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Screen Studio",
          url: "https://screen.studio/",
          type: "article",
          description: "Explora las funcionalidades de Screen Studio y cómo puede mejorar tus grabaciones."
        },
        {
          title: "Video: Introducción a Screen Studio",
          url: "https://www.youtube.com/watch?v=2cgGKtOMuMU",
          type: "video",
          description: "Conoce cómo utilizar Screen Studio para crear videos profesionales."
        }
      ],
      en: [
        {
          title: "Screen Studio Official Website",
          url: "https://screen.studio/",
          type: "article",
          description: "Explore Screen Studio's features and how it can enhance your recordings."
        },
        {
          title: "Video: Introduction to Screen Studio",
          url: "https://www.youtube.com/watch?v=2cgGKtOMuMU",
          type: "video",
          description: "Learn how to use Screen Studio to create professional videos."
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Desde $89 pago único",
      en: "From $89 one-time payment"
    },
    difficulty: "beginner",
    logo: "https://screen.studio/_next/static/media/logo-transparent.681d19be.png",
    slug: "screen-studio",
    featured: false,
    url: "https://screen.studio/"
  },
 
  {
    id: "99",
    name: "SerpAPI",
    description: {
      es: "Accede a resultados de búsqueda en tiempo real desde múltiples motores",
      en: "Access real-time search results from multiple engines"
    },
    detailedDescription: {
      es: "SerpAPI es una API que permite obtener resultados de búsqueda en tiempo real desde motores como Google y Bing. Es ideal para aplicaciones de scraping ético, análisis SEO, monitoreo de precios y entrenamiento de modelos de IA con datos actualizados.",
      en: "SerpAPI is an API that enables real-time search results retrieval from engines like Google and Bing. It's ideal for ethical scraping applications, SEO analysis, price monitoring, and training AI models with up-to-date data."
    },
    useCases: {
      es: [
        "Construcción de datasets para modelos de IA",
        "Monitoreo de precios y productos en línea",
        "Análisis de tendencias y noticias",
        "Automatización de tareas de SEO",
        "Integración en flujos de trabajo con Azure AI"
      ],
      en: [
        "Building datasets for AI models",
        "Monitoring online prices and products",
        "Trend and news analysis",
        "SEO task automation",
        "Integration into Azure AI workflows"
      ]
    },
    resources: {
      es: [
        {
          title: "Documentación oficial de SerpAPI",
          url: "https://serpapi.com/",
          type: "article",
          description: "Guía completa para utilizar SerpAPI en tus proyectos."
        },
        {
          title: "Uso de SerpAPI en Azure AI Foundry",
          url: "https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/prompt-flow-tools/serp-api-tool",
          type: "article",
          description: "Instrucciones para integrar SerpAPI en flujos de trabajo de Azure AI."
        },
        {
          title: "Video: Cómo usar SERP API en Azure AI Foundry",
          url: "https://www.youtube.com/watch?v=X9jSXUxX8Ak",
          type: "video",
          description: "Tutorial paso a paso sobre la integración de SERP API con modelos LLM."
        }
      ],
      en: [
        {
          title: "SerpAPI Official Documentation",
          url: "https://serpapi.com/",
          type: "article",
          description: "Comprehensive guide to using SerpAPI in your projects."
        },
        {
          title: "Using SerpAPI in Azure AI Foundry",
          url: "https://learn.microsoft.com/en-us/azure/ai-foundry/how-to/prompt-flow-tools/serp-api-tool",
          type: "article",
          description: "Instructions for integrating SerpAPI into Azure AI workflows."
        },
        {
          title: "Video: How to Use SERP API in Azure AI Foundry",
          url: "https://www.youtube.com/watch?v=X9jSXUxX8Ak",
          type: "video",
          description: "Step-by-step tutorial on integrating SERP API with LLM models."
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis hasta 100 búsquedas/mes, planes desde $50/mes",
      en: "Free up to 100 searches/month, plans from $50/month"
    },
    difficulty: "intermediate",
    logo: "https://serpapi.com/blog/content/images/2022/12/serpapi-square-logo.png",
    slug: "serpapi",
    featured: false,
    url: "https://serpapi.com/"
  },
  
  {
    id: "102",
    name: "NocoDB",
    description: {
      es: "Convierte cualquier base de datos en una hoja de cálculo colaborativa",
      en: "Turn any database into a collaborative spreadsheet"
    },
    detailedDescription: {
      es: "NocoDB es una plataforma de código abierto que transforma bases de datos relacionales como MySQL, PostgreSQL y SQLite en interfaces tipo hoja de cálculo, similares a Airtable. Permite a los equipos colaborar, crear aplicaciones sin código y automatizar flujos de trabajo sin necesidad de conocimientos técnicos.",
      en: "NocoDB is an open-source platform that transforms relational databases like MySQL, PostgreSQL, and SQLite into spreadsheet-like interfaces, similar to Airtable. It enables teams to collaborate, build no-code applications, and automate workflows without technical expertise."
    },
    useCases: {
      es: [
        "Gestión de datos empresariales sin escribir código",
        "Creación de aplicaciones internas personalizadas",
        "Automatización de flujos de trabajo y procesos",
        "Colaboración en tiempo real en bases de datos",
        "Integración con herramientas como Slack y Twilio"
      ],
      en: [
        "Managing business data without writing code",
        "Creating custom internal applications",
        "Automating workflows and processes",
        "Real-time collaboration on databases",
        "Integration with tools like Slack and Twilio"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de NocoDB",
          url: "https://nocodb.com/",
          type: "article",
          description: "Descubre cómo NocoDB puede ayudarte a gestionar tus bases de datos sin código."
        },
        {
          title: "Documentación de NocoDB",
          url: "https://docs.nocodb.com/",
          type: "article",
          description: "Accede a la documentación oficial para aprender a usar NocoDB."
        },
        {
          title: "Repositorio de GitHub de NocoDB",
          url: "https://github.com/nocodb/nocodb",
          type: "article",
          description: "Explora el código fuente y contribuye al proyecto NocoDB en GitHub."
        }
      ],
      en: [
        {
          title: "NocoDB Official Website",
          url: "https://nocodb.com/",
          type: "article",
          description: "Learn how NocoDB can help you manage your databases without code."
        },
        {
          title: "NocoDB Documentation",
          url: "https://docs.nocodb.com/",
          type: "article",
          description: "Access the official documentation to learn how to use NocoDB."
        },
        {
          title: "NocoDB GitHub Repository",
          url: "https://github.com/nocodb/nocodb",
          type: "article",
          description: "Explore the source code and contribute to the NocoDB project on GitHub."
        }
      ]
    },
    category: "apps",
    price: {
      es: "Gratis y de código abierto",
      en: "Free and open-source"
    },
    difficulty: "intermediate",
    logo: "https://cdn.prod.website-files.com/604a3ad5df4bbcc3722cc5e8/671265f8368f3e87340d8424_64be60ab9c2f0d6accde5c84_NocoDB%2520Logo.png",
    slug: "nocodb",
    featured: false,
    url: "https://nocodb.com/"
  },
  {
    id: "103",
    tags: ["irrelevant"],
    name: "Neon",
    description: {
      es: "Base de datos PostgreSQL serverless para agentes de IA",
      en: "Serverless PostgreSQL database for AI agents"
    },
    detailedDescription: {
      es: "Neon es una plataforma de base de datos PostgreSQL serverless que permite a los agentes de IA crear, escalar y eliminar bases de datos de forma instantánea. Ofrece una API sencilla, escalado automático y compatibilidad con herramientas como Cursor y Claude Desktop.",
      en: "Neon is a serverless PostgreSQL database platform that enables AI agents to instantly create, scale, and delete databases. It offers a simple API, automatic scaling, and compatibility with tools like Cursor and Claude Desktop."
    },
    useCases: {
      es: [
        "Provisión instantánea de bases de datos para agentes de IA",
        "Automatización de flujos de trabajo con bases de datos temporales",
        "Integración con herramientas de desarrollo como Replit y v0"
      ],
      en: [
        "Instant database provisioning for AI agents",
        "Workflow automation with temporary databases",
        "Integration with development tools like Replit and v0"
      ]
    },
    resources: {
      es: [
        {
          title: "Guía de Neon para agentes de IA",
          url: "https://neon.tech/docs/use-cases/ai-agents",
          type: "article",
          description: "Documentación oficial sobre cómo los agentes de IA pueden utilizar Neon"
        },
        {
          title: "Neon SQL Editor con funciones de IA",
          url: "https://neon.tech/docs/security/ai-use-in-neon",
          type: "article",
          description: "Características de IA en el editor SQL de Neon"
        },
        {
          title: "Neon para agentes de Replit",
          url: "https://neon.tech/guides/replit-neon",
          type: "tutorial",
          description: "Guía para integrar Neon con Replit Agent"
        }
      ],
      en: [
        {
          title: "Neon for AI Agents Guide",
          url: "https://neon.tech/docs/use-cases/ai-agents",
          type: "article",
          description: "Official documentation on how AI agents can use Neon"
        },
        {
          title: "AI Features in Neon SQL Editor",
          url: "https://neon.tech/docs/security/ai-use-in-neon",
          type: "article",
          description: "AI capabilities in Neon's SQL editor"
        },
        {
          title: "Neon for Replit Agents",
          url: "https://neon.tech/guides/replit-neon",
          type: "tutorial",
          description: "Guide to integrating Neon with Replit Agent"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "intermediate",
    logo: "https://neon.tech/favicon.ico",
    slug: "neon",
    featured: false,
    url: "https://neon.tech/ai"
  },
  {
    id: "104",
    name: "Composio",
    tags: ["Top"],
    description: {
      es: "Integra agentes de IA con más de 250 herramientas",
      en: "Integrate AI agents with over 250 tools"
    },
    detailedDescription: {
      es: "Composio es una plataforma que permite a los desarrolladores conectar agentes de IA y modelos de lenguaje con más de 250 aplicaciones y servicios. Ofrece autenticación gestionada, integración con frameworks como LangChain y CrewAI, y herramientas para automatizar flujos de trabajo complejos.",
      en: "Composio is a platform that enables developers to connect AI agents and language models with over 250 applications and services. It offers managed authentication, integration with frameworks like LangChain and CrewAI, and tools to automate complex workflows."
    },
    useCases: {
      es: [
        "Automatización de procesos empresariales con agentes de IA",
        "Integración de modelos de lenguaje con aplicaciones SaaS",
        "Desarrollo de agentes de ventas y soporte automatizados"
      ],
      en: [
        "Automating business processes with AI agents",
        "Integrating language models with SaaS applications",
        "Developing automated sales and support agents"
      ]
    },
    resources: {
      es: [
        {
          title: "Catálogo de herramientas de Composio",
          url: "https://composio.dev/tools",
          type: "article",
          description: "Lista completa de herramientas compatibles con Composio"
        },
        {
          title: "Guía para construir agentes de IA con Composio",
          url: "https://composio.dev/blog/ai-agent-tools/",
          type: "article",
          description: "Cómo utilizar Composio para desarrollar agentes de IA"
        },
        {
          title: "Repositorio de Composio en GitHub",
          url: "https://github.com/ComposioHQ/composio",
          type: "code",
          description: "Código fuente y ejemplos de uso de Composio"
        }
      ],
      en: [
        {
          title: "Composio Tools Catalogue",
          url: "https://composio.dev/tools",
          type: "article",
          description: "Complete list of tools compatible with Composio"
        },
        {
          title: "Guide to Building AI Agents with Composio",
          url: "https://composio.dev/blog/ai-agent-tools/",
          type: "article",
          description: "How to use Composio to develop AI agents"
        },
        {
          title: "Composio GitHub Repository",
          url: "https://github.com/ComposioHQ/composio",
          type: "code",
          description: "Source code and usage examples for Composio"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Freemium",
      en: "Freemium"
    },
    difficulty: "advanced",
    logo: "https://mintlify.s3.us-west-1.amazonaws.com/composio-27/logo/light.svg",
    slug: "composio",
    featured: false,
    url: "https://composio.dev/"
  },
  {
    id: "105",
    name: "BuilderBot",
    description: {
      es: "Crea chatbots para WhatsApp y Telegram sin límites",
      en: "Create chatbots for WhatsApp and Telegram without limits"
    },
    detailedDescription: {
      es: "BuilderBot es un framework de código abierto que permite desarrollar chatbots inteligentes para plataformas como WhatsApp y Telegram. Ofrece una estructura modular, integración con OpenAI y una comunidad activa para facilitar la creación de bots personalizados.",
      en: "BuilderBot is an open-source framework that enables the development of intelligent chatbots for platforms like WhatsApp and Telegram. It offers a modular structure, integration with OpenAI, and an active community to facilitate the creation of custom bots."
    },
    useCases: {
      es: [
        "Automatización de atención al cliente en WhatsApp",
        "Desarrollo de bots para campañas de marketing en Telegram",
        "Creación de asistentes virtuales personalizados"
      ],
      en: [
        "Automating customer service on WhatsApp",
        "Developing bots for marketing campaigns on Telegram",
        "Creating custom virtual assistants"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de BuilderBot",
          url: "https://www.builderbot.app/",
          type: "article",
          description: "Información y documentación oficial de BuilderBot"
        },
        {
          title: "Repositorio de BuilderBot en GitHub",
          url: "https://github.com/BuilderIO/builderbot",
          type: "code",
          description: "Código fuente y ejemplos de BuilderBot"
        },
        {
          title: "Demo de BuilderBot",
          url: "https://www.youtube.com/watch?v=62RJv514ijQ",
          type: "video",
          description: "Demostración en video de las capacidades de BuilderBot"
        }
      ],
      en: [
        {
          title: "BuilderBot Official Site",
          url: "https://www.builderbot.app/",
          type: "article",
          description: "Official information and documentation for BuilderBot"
        },
        {
          title: "BuilderBot GitHub Repository",
          url: "https://github.com/BuilderIO/builderbot",
          type: "code",
          description: "Source code and examples for BuilderBot"
        },
        {
          title: "BuilderBot Demo",
          url: "https://www.youtube.com/watch?v=62RJv514ijQ",
          type: "video",
          description: "Video demonstration of BuilderBot's capabilities"
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://www.builderbot.app/favicon.ico",
    slug: "builderbot",
    featured: false,
    url: "https://www.builderbot.app/"
  },
  {
    id: "107",
    name: "Stack AI",
    tags: ["YC"],
    description: {
      es: "Plataforma sin código para crear agentes de IA empresariales",
      en: "No-code platform to build enterprise AI agents"
    },
    detailedDescription: {
      es: "Stack AI es una plataforma sin código que permite crear y desplegar agentes de IA personalizados para automatizar procesos empresariales. Con una interfaz intuitiva, Stack AI facilita la creación de soluciones de IA sin necesidad de experiencia en programación.",
      en: "Stack AI is a no-code platform that enables the creation and deployment of custom AI agents to automate business processes. With an intuitive interface, Stack AI makes it easy to build AI solutions without coding expertise."
    },
    useCases: {
      es: [
        "Automatización de procesos administrativos",
        "Creación de asistentes de IA personalizados",
        "Integración con herramientas como Snowflake y Salesforce",
        "Desarrollo de soluciones de IA para sectores como salud y finanzas"
      ],
      en: [
        "Automating administrative processes",
        "Creating custom AI assistants",
        "Integration with tools like Snowflake and Salesforce",
        "Developing AI solutions for sectors like healthcare and finance"
      ]
    },
    resources: {
      es: [
        {
          title: "Descripción general de la plataforma Stack AI",
          url: "https://www.stack-ai.com/docs/platform-overview",
          type: "article",
          description: "Información sobre las características y capacidades de Stack AI"
        },
        {
          title: "Soluciones de IA para operaciones",
          url: "https://www.stack-ai.com/solutions/operations",
          type: "article",
          description: "Cómo Stack AI mejora las operaciones empresariales"
        },
        {
          title: "Caso de estudio de Stack AI",
          url: "https://weaviate.io/case-studies/stack-ai",
          type: "article",
          description: "Implementación de Stack AI en organizaciones empresariales"
        }
      ],
      en: [
        {
          title: "Stack AI Platform Overview",
          url: "https://www.stack-ai.com/docs/platform-overview",
          type: "article",
          description: "Information about Stack AI's features and capabilities"
        },
        {
          title: "AI Solutions for Operations",
          url: "https://www.stack-ai.com/solutions/operations",
          type: "article",
          description: "How Stack AI enhances business operations"
        },
        {
          title: "Stack AI Case Study",
          url: "https://weaviate.io/case-studies/stack-ai",
          type: "article",
          description: "Implementation of Stack AI in enterprise organizations"
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Freemium",
      en: "Freemium"
    },
    difficulty: "intermediate",
    logo: "https://www.stack-ai.com/favicon.ico",
    slug: "stack-ai",
    featured: false,
    url: "https://www.stack-ai.com/"
  },
  {
    id: "108",
    name: "Taskade",
    tags: ["YC"],
    description: {
      es: "Plataforma de productividad con agentes de IA personalizados",
      en: "Productivity platform with custom AI agents"
    },
    detailedDescription: {
      es: "Taskade es una plataforma de colaboración todo en uno para equipos remotos. Con Taskade AI, puedes crear agentes de IA personalizados, automatizar flujos de trabajo y mejorar la productividad del equipo con herramientas como listas de tareas, mapas mentales y chat de video.",
      en: "Taskade is an all-in-one collaboration platform for remote teams. With Taskade AI, you can create custom AI agents, automate workflows, and enhance team productivity with tools like to-do lists, mind maps, and video chat."
    },
    useCases: {
      es: [
        "Gestión de proyectos con IA",
        "Automatización de tareas repetitivas",
        "Creación de mapas mentales y flujos de trabajo",
        "Colaboración en tiempo real con chat y video"
      ],
      en: [
        "AI-powered project management",
        "Automating repetitive tasks",
        "Creating mind maps and workflows",
        "Real-time collaboration with chat and video"
      ]
    },
    resources: {
      es: [
        {
          title: "Características principales de Taskade AI",
          url: "https://www.taskade.com/blog/taskades-top-ai-powered-features-transforming-work/",
          type: "article",
          description: "Explora las funciones de IA que transforman el trabajo en Taskade"
        },
        {
          title: "Página oficial de Taskade AI",
          url: "https://www.taskade.com/ai",
          type: "article",
          description: "Descubre cómo Taskade AI mejora la productividad"
        },
        {
          title: "Reseña de Taskade",
          url: "https://thebusinessdive.com/taskade-review",
          type: "article",
          description: "Análisis detallado de las capacidades de Taskade"
        }
      ],
      en: [
        {
          title: "Taskade's Top AI-Powered Features",
          url: "https://www.taskade.com/blog/taskades-top-ai-powered-features-transforming-work/",
          type: "article",
          description: "Explore the AI features transforming work in Taskade"
        },
        {
          title: "Official Taskade AI Page",
          url: "https://www.taskade.com/ai",
          type: "article",
          description: "Discover how Taskade AI enhances productivity"
        },
        {
          title: "Taskade Review",
          url: "https://thebusinessdive.com/taskade-review",
          type: "article",
          description: "In-depth analysis of Taskade's capabilities"
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://www.taskade.com/favicon.ico",
    slug: "taskade",
    featured: false,
    url: "https://www.taskade.com/"
  },
  {
    id: "109",
    name: "FlowiseAI",
    tags: ["YC"],
    description: {
      es: "Crea chatbots y flujos LLM sin código",
      en: "Build chatbots and LLM workflows without code"
    },
    detailedDescription: {
      es: "FlowiseAI es una plataforma de código abierto que permite construir aplicaciones de lenguaje natural utilizando modelos como GPT-4, sin necesidad de programar. Ofrece una interfaz visual para crear flujos de trabajo con nodos, integraciones con APIs y soporte para despliegue local o en la nube.",
      en: "FlowiseAI is an open-source platform that enables building natural language applications using models like GPT-4, without the need for coding. It offers a visual interface to create workflows with nodes, API integrations, and support for local or cloud deployment."
    },
    useCases: {
      es: [
        "Desarrollo de chatbots personalizados",
        "Automatización de tareas con modelos de lenguaje",
        "Integración de asistentes de IA en sitios web"
      ],
      en: [
        "Development of custom chatbots",
        "Task automation with language models",
        "Integration of AI assistants into websites"
      ]
    },
    resources: {
      es: [
        {
          title: "Documentación oficial de FlowiseAI",
          url: "https://docs.flowiseai.com/espanol",
          type: "article",
          description: "Guía completa para comenzar con FlowiseAI"
        },
        {
          title: "Tutorial: Cómo crear un chatbot con Flowise",
          url: "https://www.youtube.com/watch?v=5KPYGPZukag",
          type: "video",
          description: "Video paso a paso para construir un chatbot sin código"
        },
        {
          title: "Artículo: Cómo crear un chatbot con IA sin código usando Flowise",
          url: "https://www.eladiorocha.com/cmo-crear-un-chatbot-con-ia-sin-cdigo-usando-flowise",
          type: "article",
          description: "Guía detallada para crear un chatbot con Flowise"
        }
      ],
      en: [
        {
          title: "FlowiseAI Official Documentation",
          url: "https://docs.flowiseai.com",
          type: "article",
          description: "Comprehensive guide to get started with FlowiseAI"
        },
        {
          title: "Tutorial: How to Create a Chatbot with Flowise",
          url: "https://www.youtube.com/watch?v=5KPYGPZukag",
          type: "video",
          description: "Step-by-step video to build a chatbot without code"
        },
        {
          title: "Article: How to Build an AI Chatbot Without Code Using Flowise",
          url: "https://www.eladiorocha.com/cmo-crear-un-chatbot-con-ia-sin-cdigo-usando-flowise",
          type: "article",
          description: "Detailed guide to create a chatbot with Flowise"
        }
      ]
    },
    category: "automation",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://flowiseai.com/favicon.ico",
    slug: "flowiseai",
    featured: false,
    url: "https://flowiseai.com"
  },
  {
    id: "110",
    name: "MindStudio",
    description: {
      es: "Crea agentes de IA personalizados sin programar",
      en: "Build custom AI agents without coding"
    },
    detailedDescription: {
      es: "MindStudio es una plataforma sin código que permite diseñar, construir y desplegar agentes de IA para diversos casos de uso empresariales y personales. Ofrece más de 100 plantillas, integración con APIs y Webhooks, y soporte para múltiples modelos de lenguaje.",
      en: "MindStudio is a no-code platform that allows designing, building, and deploying AI agents for various business and personal use cases. It offers over 100 templates, integration with APIs and Webhooks, and support for multiple language models."
    },
    useCases: {
      es: [
        "Automatización de procesos empresariales",
        "Creación de herramientas personalizadas impulsadas por IA",
        "Construcción de aplicaciones web impulsadas por IA"
      ],
      en: [
        "Business process automation",
        "Creation of custom AI-powered tools",
        "Building AI-powered web applications"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de MindStudio",
          url: "https://www.mindstudio.ai/",
          type: "article",
          description: "Información y documentación oficial de MindStudio"
        },
        {
          title: "Artículo: Construye aplicaciones de IA con MindStudio (sin programación)",
          url: "https://www.voc.ai/es/blog/build-ai-apps-with-mindstudio-%28no-coding-%7C-free-alternative-to-open-ai-gpts-es-es)",
          type: "article",
          description: "Guía para crear aplicaciones de IA sin código con MindStudio"
        },
        {
          title: "MindStudio Academy",
          url: "https://mindstudio.academy/",
          type: "course",
          description: "Curso para aprender a construir aplicaciones de IA con MindStudio"
        }
      ],
      en: [
        {
          title: "MindStudio Official Site",
          url: "https://www.mindstudio.ai/",
          type: "article",
          description: "Official information and documentation for MindStudio"
        },
        {
          title: "Article: Build AI Apps with MindStudio (No Coding)",
          url: "https://www.voc.ai/es/blog/build-ai-apps-with-mindstudio-%28no-coding-%7C-free-alternative-to-open-ai-gpts-es-es)",
          type: "article",
          description: "Guide to creating AI applications without code using MindStudio"
        },
        {
          title: "MindStudio Academy",
          url: "https://mindstudio.academy/",
          type: "course",
          description: "Course to learn how to build AI applications with MindStudio"
        }
      ]
    },
    category: "automation",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHJWyoFxDx2vQ/company-logo_200_200/company-logo_200_200/0/1704388316703/youai_ai_logo?e=2147483647&v=beta&t=2u4H4OT-wjxp9NB44WQVO4AaE429XmlLjBGIKUJLOSs",
    slug: "mindstudio",
    featured: false,
    url: "https://www.mindstudio.ai/"
  },
  {
    id: "111",
    name: "VectorShift",
    tags: ["YC"],
    description: {
      es: "Automatiza flujos de trabajo con IA sin código",
      en: "Automate workflows with AI without code"
    },
    detailedDescription: {
      es: "VectorShift es una plataforma de automatización de IA de extremo a extremo que permite crear agentes y aplicaciones autónomas de IA sin necesidad de escribir código. Utiliza una interfaz intuitiva de arrastrar y soltar y ofrece integración con diversas herramientas y fuentes de datos.",
      en: "VectorShift is an end-to-end AI automation platform that enables creating autonomous AI agents and applications without the need for coding. It uses an intuitive drag-and-drop interface and offers integration with various tools and data sources."
    },
    useCases: {
      es: [
        "Automatización de procesos empresariales",
        "Creación de asistentes virtuales personalizados",
        "Integración de IA en flujos de trabajo existentes"
      ],
      en: [
        "Business process automation",
        "Creation of custom virtual assistants",
        "Integration of AI into existing workflows"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de VectorShift",
          url: "https://vectorshift.ai/",
          type: "article",
          description: "Información y documentación oficial de VectorShift"
        },
        {
          title: "Artículo: Crea fácilmente agentes autónomos de IA con VectorShift",
          url: "https://www.toolify.ai/es/ai-news-es/crea-fcilmente-agentes-autnomos-de-ia-con-vectorshift-2006723",
          type: "article",
          description: "Guía para crear agentes de IA con VectorShift"
        },
        {
          title: "Video: Crea aplicaciones de IA con VectorShift sin código",
          url: "https://www.youtube.com/watch?v=axOu0BIwyWQ",
          type: "video",
          description: "Tutorial para construir aplicaciones de IA sin programación"
        }
      ],
      en: [
        {
          title: "VectorShift Official Site",
          url: "https://vectorshift.ai/",
          type: "article",
          description: "Official information and documentation for VectorShift"
        },
        {
          title: "Article: Easily Create Autonomous AI Agents with VectorShift",
          url: "https://www.toolify.ai/es/ai-news-es/crea-fcilmente-agentes-autnomos-de-ia-con-vectorshift-2006723",
          type: "article",
          description: "Guide to creating AI agents with VectorShift"
        },
        {
          title: "Video: Create AI Applications with VectorShift Without Code",
          url: "https://www.youtube.com/watch?v=axOu0BIwyWQ",
          type: "video",
          description: "Tutorial to build AI applications without programming"
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://bookface-images.s3.amazonaws.com/logos/76bb61759ffa17ef0d921fea6f331e1ab42b93f1.png?1684534984",
    slug: "vectorshift",
    featured: false,
    url: "https://vectorshift.ai/"
  },
  {
    id: "112",
    tags: ["Top"],
    name: "Icon",
    description: {
      es: "Crea anuncios de alto rendimiento con IA",
      en: "Create high-performing ads with AI"
    },
    detailedDescription: {
      es: "Icon es una plataforma de publicidad impulsada por inteligencia artificial que permite a las marcas generar anuncios de alto rendimiento de manera eficiente. Utiliza scripts generados por IA, edición de video asistida y herramientas de análisis creativo para optimizar el proceso de creación de anuncios.",
      en: "Icon is an AI-powered advertising platform that enables brands to efficiently generate high-performing ads. It utilizes AI-generated scripts, assisted video editing, and creative analytics tools to optimize the ad creation process."
    },
    useCases: {
      es: [
        "Generación automatizada de scripts publicitarios",
        "Edición de videos promocionales con asistencia de IA",
        "Análisis creativo para mejorar el rendimiento de los anuncios"
      ],
      en: [
        "Automated generation of ad scripts",
        "AI-assisted editing of promotional videos",
        "Creative analytics to enhance ad performance"
      ]
    },
    resources: {
      es: [
        {
          title: "Icon: La primera herramienta de creación de anuncios con IA",
          url: "https://www.youtube.com/watch?v=_dZoscOdDkg",
          type: "video",
          description: "Presentación de Icon y sus capacidades en la creación de anuncios con IA"
        },
        {
          title: "Icon: Plataforma de publicidad con IA para creación automatizada de anuncios",
          url: "https://aijourney.so/tool/icon",
          type: "article",
          description: "Descripción detallada de las características y beneficios de Icon"
        }
      ],
      en: [
        {
          title: "Introducing Icon, The First AI Admaker",
          url: "https://www.youtube.com/watch?v=_dZoscOdDkg",
          type: "video",
          description: "Overview of Icon and its AI-powered ad creation capabilities"
        },
        {
          title: "Icon - AI Advertising Platform for Automated Ad Creation",
          url: "https://aijourney.so/tool/icon",
          type: "article",
          description: "Detailed description of Icon's features and benefits"
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Desde $399/mes",
      en: "From $399/month"
    },
    difficulty: "intermediate",
    logo: "https://icon-cdn.com/cdn-cgi/image/width=128,quality=100/https://icon-cdn.com/iconlogoUSETHISONE.svg",
    slug: "icon",
    featured: false,
    url: "https://icon.com/"
  },
  {
    id: "113",
    name: "Pippit AI",
    description: {
      es: "Genera videos e imágenes de marketing con IA",
      en: "Generate marketing videos and images with AI"
    },
    detailedDescription: {
      es: "Pippit AI es una herramienta creativa impulsada por inteligencia artificial que permite a los usuarios generar contenido de marketing, como videos e imágenes, de manera rápida y sencilla. Ofrece funciones como generación de videos a partir de enlaces web, creación de avatares digitales y edición de imágenes con IA.",
      en: "Pippit AI is an AI-powered creative tool that enables users to quickly and easily generate marketing content, such as videos and images. It offers features like video generation from website links, digital avatar creation, and AI-based image editing."
    },
    useCases: {
      es: [
        "Creación de videos promocionales a partir de enlaces web",
        "Generación de avatares digitales para contenido personalizado",
        "Edición y mejora de imágenes con herramientas de IA"
      ],
      en: [
        "Creating promotional videos from website links",
        "Generating digital avatars for personalized content",
        "Editing and enhancing images with AI tools"
      ]
    },
    resources: {
      es: [
        {
          title: "Pippit AI: Tu agente creativo inteligente",
          url: "https://pippit.capcut.com/",
          type: "article",
          description: "Página oficial de Pippit AI con información sobre sus funciones y uso"
        },
        {
          title: "Pippit AI: Generador de videos con IA",
          url: "https://www.youtube.com/watch?v=KyEikqVK-n0",
          type: "video",
          description: "Demostración de las capacidades de Pippit AI en la generación de videos"
        }
      ],
      en: [
        {
          title: "Pippit AI: Your Smart Creative Agent",
          url: "https://pippit.capcut.com/",
          type: "article",
          description: "Official page of Pippit AI with information about its features and usage"
        },
        {
          title: "Pippit AI by Capcut is INSANE – Make Videos in Minutes!",
          url: "https://www.youtube.com/watch?v=KyEikqVK-n0",
          type: "video",
          description: "Demonstration of Pippit AI's video generation capabilities"
        }
      ]
    },
    category: "content",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://ph-files.imgix.net/c4a15a13-0057-47cb-915f-7c2ce8af6b62.png?auto=format",
    slug: "pippit-ai",
    featured: false,
    url: "https://pippit.capcut.com/"
  },
  {
    id: "114",
    name: "Cassidy AI",
    description: {
      es: "Automatiza tareas empresariales con asistentes de IA",
      en: "Automate business tasks with AI assistants"
    },
    detailedDescription: {
      es: "Cassidy AI es una plataforma que permite a las empresas automatizar tareas utilizando asistentes de inteligencia artificial personalizados. Se integra con herramientas existentes y utiliza el conocimiento de la empresa para automatizar procesos como soporte al cliente, calificación de leads y generación de respuestas a RFPs.",
      en: "Cassidy AI is a platform that enables businesses to automate tasks using customized artificial intelligence assistants. It integrates with existing tools and leverages company knowledge to automate processes like customer support, lead qualification, and RFP response generation."
    },
    useCases: {
      es: [
        "Automatización del soporte al cliente",
        "Calificación de prospectos de ventas",
        "Generación de respuestas a solicitudes de propuestas (RFPs)"
      ],
      en: [
        "Automating customer support",
        "Qualifying sales leads",
        "Generating responses to requests for proposals (RFPs)"
      ]
    },
    resources: {
      es: [
        {
          title: "Cassidy AI: Automatiza tareas empresariales con IA",
          url: "https://www.cassidyai.com/",
          type: "article",
          description: "Página oficial de Cassidy AI con información sobre sus funciones y uso"
        },
        {
          title: "Cómo construir agentes de IA sin código con Cassidy AI",
          url: "https://www.youtube.com/watch?v=5PKZuF_-2_I",
          type: "video",
          description: "Tutorial sobre cómo utilizar Cassidy AI para crear agentes de IA sin necesidad de programar"
        }
      ],
      en: [
        {
          title: "Cassidy AI: Build AI Automations",
          url: "https://www.cassidyai.com/",
          type: "article",
          description: "Official page of Cassidy AI with information about its features and usage"
        },
        {
          title: "How To Build AI Agents With NO CODE! (Cassidy AI Tutorial)",
          url: "https://www.youtube.com/watch?v=5PKZuF_-2_I",
          type: "video",
          description: "Tutorial on how to use Cassidy AI to create AI agents without coding"
        }
      ]
    },
    category: "automation",
    price: {
      es: "Prueba gratuita disponible",
      en: "Free trial available"
    },
    difficulty: "intermediate",
    logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/kanojdolx1l2f2loqhj7",
    slug: "cassidy-ai",
    featured: false,
    url: "https://www.cassidyai.com/"
  },
  {
    id: "115",
    name: "Algolia",
    tags: ["YC"],
    description: {
      es: "Plataforma de búsqueda y descubrimiento impulsada por IA",
      en: "AI-powered search and discovery platform"
    },
    detailedDescription: {
      es: "Algolia es una plataforma de búsqueda como servicio que permite a las empresas ofrecer experiencias de búsqueda rápidas y relevantes en sus aplicaciones y sitios web. Utiliza inteligencia artificial para personalizar resultados y mejorar la experiencia del usuario.",
      en: "Algolia is a search-as-a-service platform that enables businesses to deliver fast and relevant search experiences in their applications and websites. It leverages artificial intelligence to personalize results and enhance user experience."
    },
    useCases: {
      es: [
        "Implementación de búsqueda en sitios web y aplicaciones",
        "Personalización de resultados de búsqueda",
        "Mejora de la navegación y descubrimiento de productos"
      ],
      en: [
        "Implementing search in websites and applications",
        "Personalizing search results",
        "Enhancing navigation and product discovery"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Algolia",
          url: "https://www.algolia.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Documentación de Algolia",
          url: "https://www.algolia.com/doc/",
          type: "article",
          description: "Guías y referencias para desarrolladores"
        },
        {
          title: "Blog de Algolia",
          url: "https://www.algolia.com/blog/",
          type: "article",
          description: "Artículos sobre búsqueda, personalización y más"
        }
      ],
      en: [
        {
          title: "Algolia Official Site",
          url: "https://www.algolia.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Algolia Documentation",
          url: "https://www.algolia.com/doc/",
          type: "article",
          description: "Guides and references for developers"
        },
        {
          title: "Algolia Blog",
          url: "https://www.algolia.com/blog/",
          type: "article",
          description: "Articles on search, personalization, and more"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "intermediate",
    logo: "https://mms.businesswire.com/media/20240604818572/en/1665158/22/Algolia_Logo_NEW_2022.jpg",
    slug: "algolia",
    featured: false,
    url: "https://www.algolia.com/"
  },
  {
    id: "116",
    name: "Toggl Track",
    tags: ["Top"],
    description: {
      es: "Seguimiento de tiempo sencillo y potente para equipos y freelancers",
      en: "Simple and powerful time tracking for teams and freelancers"
    },
    detailedDescription: {
      es: "Toggl Track es una herramienta de seguimiento de tiempo multiplataforma que permite a equipos y profesionales individuales registrar sus horas de trabajo de manera eficiente. Ofrece integraciones con más de 100 aplicaciones, informes detallados y funciones como el modo Pomodoro y detección de inactividad.",
      en: "Toggl Track is a cross-platform time tracking tool that enables teams and individual professionals to efficiently log their work hours. It offers integrations with over 100 applications, detailed reporting, and features like Pomodoro mode and idle detection."
    },
    useCases: {
      es: [
        "Seguimiento de tiempo para proyectos y tareas",
        "Generación de informes para clientes",
        "Mejora de la productividad personal y del equipo"
      ],
      en: [
        "Time tracking for projects and tasks",
        "Generating reports for clients",
        "Improving personal and team productivity"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Toggl Track",
          url: "https://toggl.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Aplicación de Toggl Track en Google Play",
          url: "https://play.google.com/store/apps/details?id=com.toggl.giskard",
          type: "app",
          description: "Descarga la aplicación para dispositivos Android"
        },
        {
          title: "Aplicación de Toggl Track en App Store",
          url: "https://apps.apple.com/us/app/toggl-track-hours-time-log/id1291898086",
          type: "app",
          description: "Descarga la aplicación para dispositivos iOS"
        }
      ],
      en: [
        {
          title: "Toggl Track Official Site",
          url: "https://toggl.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Toggl Track App on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.toggl.giskard",
          type: "app",
          description: "Download the app for Android devices"
        },
        {
          title: "Toggl Track App on App Store",
          url: "https://apps.apple.com/us/app/toggl-track-hours-time-log/id1291898086",
          type: "app",
          description: "Download the app for iOS devices"
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=300,height=300,quality=80/https://remoteok.com/assets/img/jobs//7fa068135d1188abb87c269c59f256981622561917.png?",
    slug: "toggl-track",
    featured: false,
    url: "https://toggl.com/"
  },
  {
    id: "117",
    name: "Maton AI",
    description: {
      es: "Conecta tu IA con herramientas SaaS en minutos",
      en: "Connect your AI to SaaS tools in minutes"
    },
    detailedDescription: {
      es: "Maton AI es una plataforma que permite integrar agentes de inteligencia artificial con aplicaciones SaaS como HubSpot, Notion y Slack mediante acciones API preconstruidas. Facilita la automatización de tareas y la interacción con herramientas empresariales sin necesidad de programación extensa.",
      en: "Maton AI is a platform that enables integration of AI agents with SaaS applications like HubSpot, Notion, and Slack through prebuilt API actions. It simplifies task automation and interaction with business tools without extensive coding."
    },
    useCases: {
      es: [
        "Automatización de flujos de trabajo empresariales",
        "Integración de agentes de IA con aplicaciones SaaS",
        "Reducción del tiempo de desarrollo en integraciones"
      ],
      en: [
        "Automating business workflows",
        "Integrating AI agents with SaaS applications",
        "Reducing development time in integrations"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Maton AI",
          url: "https://maton.ai/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Repositorio de Maton en GitHub",
          url: "https://github.com/maton-ai",
          type: "code",
          description: "Código fuente y herramientas para desarrolladores"
        },
        {
          title: "Maton en LinkedIn",
          url: "https://www.linkedin.com/company/maton-ai",
          type: "article",
          description: "Perfil de la empresa y actualizaciones"
        }
      ],
      en: [
        {
          title: "Maton AI Official Site",
          url: "https://maton.ai/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Maton GitHub Repository",
          url: "https://github.com/maton-ai",
          type: "code",
          description: "Source code and developer tools"
        },
        {
          title: "Maton on LinkedIn",
          url: "https://www.linkedin.com/company/maton-ai",
          type: "article",
          description: "Company profile and updates"
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "intermediate",
    logo: "https://maton.ai/favicon.ico",
    slug: "maton-ai",
    featured: false,
    url: "https://maton.ai/"
  },
  {
    id: "118",
    name: "GetMagical",
    description: {
      es: "Automatiza formularios y mensajes con IA sin código",
      en: "Automate forms and messages with no-code AI"
    },
    detailedDescription: {
      es: "GetMagical es una herramienta de productividad que utiliza inteligencia artificial para automatizar tareas repetitivas como completar formularios, redactar mensajes y transferir datos entre aplicaciones. Funciona sin necesidad de integraciones o APIs, permitiendo a los usuarios ahorrar tiempo y reducir errores en su flujo de trabajo.",
      en: "GetMagical is a productivity tool that leverages artificial intelligence to automate repetitive tasks such as filling out forms, drafting messages, and transferring data between applications. It operates without the need for integrations or APIs, enabling users to save time and reduce errors in their workflow."
    },
    useCases: {
      es: [
        "Autocompletar formularios y bases de datos",
        "Redactar mensajes personalizados automáticamente",
        "Transferir datos entre aplicaciones sin integraciones"
      ],
      en: [
        "Autofill forms and databases",
        "Automatically draft personalized messages",
        "Transfer data between applications without integrations"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de GetMagical",
          url: "https://www.getmagical.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Extensión de GetMagical para Chrome",
          url: "https://chrome.google.com/webstore/detail/magical-ai-agent-for-auto/iibninhmiggehlcdolcilmhacighjamp",
          type: "app",
          description: "Descarga la extensión para automatizar tareas en tu navegador"
        },
        {
          title: "Video: Automatizaciones con GetMagical",
          url: "https://www.youtube.com/watch?v=MJ-zb66uX88",
          type: "video",
          description: "Demostración de cómo usar GetMagical para automatizar tareas"
        }
      ],
      en: [
        {
          title: "GetMagical Official Site",
          url: "https://www.getmagical.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "GetMagical Chrome Extension",
          url: "https://chrome.google.com/webstore/detail/magical-ai-agent-for-auto/iibninhmiggehlcdolcilmhacighjamp",
          type: "app",
          description: "Download the extension to automate tasks in your browser"
        },
        {
          title: "Video: Automations with GetMagical",
          url: "https://www.youtube.com/watch?v=MJ-zb66uX88",
          type: "video",
          description: "Demonstration of how to use GetMagical to automate tasks"
        }
      ]
    },
    category: "sales",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://uploads-ssl.webflow.com/5ed91db11af64853fc5849c9/609c408e226dfe4df821747a_icon.svg",
    slug: "getmagical",
    featured: false,
    url: "https://www.getmagical.com/"
  },
  {
    id: "119",
    name: "TexAu",
    description: {
      es: "Automatiza la generación de leads y tareas de crecimiento",
      en: "Automate lead generation and growth tasks"
    },
    detailedDescription: {
      es: "TexAu es una plataforma de automatización que ayuda a las empresas a generar leads y automatizar tareas repetitivas en múltiples plataformas en línea. Ofrece una amplia gama de 'spices' (automatizaciones predefinidas) que permiten extraer datos, interactuar en redes sociales y enriquecer información de contactos, todo sin necesidad de programación.",
      en: "TexAu is an automation platform that assists businesses in generating leads and automating repetitive tasks across multiple online platforms. It offers a wide range of 'spices' (predefined automations) that allow data extraction, social media interaction, and contact information enrichment, all without the need for coding."
    },
    useCases: {
      es: [
        "Extracción de datos de perfiles de LinkedIn",
        "Automatización de interacciones en redes sociales",
        "Enriquecimiento de información de leads y contactos"
      ],
      en: [
        "Extracting data from LinkedIn profiles",
        "Automating social media interactions",
        "Enriching lead and contact information"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de TexAu",
          url: "https://www.texau.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Automatizaciones disponibles en TexAu",
          url: "https://www.texau.com/automations",
          type: "article",
          description: "Lista de automatizaciones ('spices') que ofrece TexAu"
        },
        {
          title: "Comparación de TexAu con otras herramientas",
          url: "https://www.texau.com/comparison",
          type: "article",
          description: "Análisis comparativo entre TexAu y otras plataformas de automatización"
        }
      ],
      en: [
        {
          title: "TexAu Official Site",
          url: "https://www.texau.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Available Automations in TexAu",
          url: "https://www.texau.com/automations",
          type: "article",
          description: "List of 'spices' (automations) offered by TexAu"
        },
        {
          title: "TexAu Comparison with Other Tools",
          url: "https://www.texau.com/comparison",
          type: "article",
          description: "Comparative analysis between TexAu and other automation platforms"
        }
      ]
    },
    category: "sales",
    price: {
      es: "Desde $29/mes",
      en: "From $29/month"
    },
    difficulty: "intermediate",
    logo: "https://avatars.githubusercontent.com/u/49680991?s=280&v=4",
    slug: "texau",
    featured: false,
    url: "https://www.texau.com/"
  },
  {
    id: "120",
    name: "Skrapp.io",
    description: {
      es: "Encuentra y verifica correos electrónicos profesionales fácilmente",
      en: "Easily find and verify professional email addresses"
    },
    detailedDescription: {
      es: "Skrapp.io es una herramienta de generación de leads B2B que permite a los profesionales de ventas y marketing encontrar correos electrónicos verificados y enriquecer datos de empresas desde LinkedIn y Sales Navigator. Ofrece una base de datos extensa y herramientas para automatizar la búsqueda y verificación de contactos.",
      en: "Skrapp.io is a B2B lead generation tool that enables sales and marketing professionals to find verified email addresses and enrich company data from LinkedIn and Sales Navigator. It offers an extensive database and tools to automate contact search and verification."
    },
    useCases: {
      es: [
        "Búsqueda de correos electrónicos desde perfiles de LinkedIn",
        "Verificación de listas de correos electrónicos en masa",
        "Enriquecimiento de datos de empresas y contactos"
      ],
      en: [
        "Searching for email addresses from LinkedIn profiles",
        "Bulk verification of email lists",
        "Enriching company and contact data"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Skrapp.io",
          url: "https://skrapp.io/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Extensión de Skrapp.io para Chrome",
          url: "https://chrome.google.com/webstore/detail/skrappio-email-finder/geplbbbmdpmdodfmohpikfacgkfpkhec",
          type: "app",
          description: "Descarga la extensión para encontrar correos electrónicos desde LinkedIn"
        },
        {
          title: "Video: Cómo encontrar correos electrónicos con Skrapp.io",
          url: "https://www.youtube.com/watch?v=7cEK9cl8Drk",
          type: "video",
          description: "Tutorial sobre cómo utilizar Skrapp.io para encontrar correos electrónicos"
        }
      ],
      en: [
        {
          title: "Skrapp.io Official Site",
          url: "https://skrapp.io/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Skrapp.io Chrome Extension",
          url: "https://chrome.google.com/webstore/detail/skrappio-email-finder/geplbbbmdpmdodfmohpikfacgkfpkhec",
          type: "app",
          description: "Download the extension to find email addresses from LinkedIn"
        },
        {
          title: "Video: How to Find Emails with Skrapp.io",
          url: "https://www.youtube.com/watch?v=7cEK9cl8Drk",
          type: "video",
          description: "Tutorial on how to use Skrapp.io to find email addresses"
        }
      ]
    },
    category: "sales",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://cdn-1.webcatalog.io/catalog/scrap-io/scrap-io-social-preview.png?v=1714777220043",
    slug: "skrapp-io",
    featured: false,
    url: "https://skrapp.io/"
  },
  {
    id: "121",
    name: "Snov.io",
    description: {
      es: "Plataforma todo en uno para generación de leads y automatización de ventas",
      en: "All-in-one platform for lead generation and sales automation"
    },
    detailedDescription: {
      es: "Snov.io es una plataforma de automatización de alcance en frío que ofrece un amplio conjunto de herramientas para profesionales del email marketing, ventas, reclutadores y propietarios de negocios. Ayuda a agilizar la generación de clientes potenciales, la verificación de correos electrónicos, el seguimiento de correos electrónicos, el envío de campañas de correo electrónico y más, para optimizar la eficiencia, ahorrar tiempo y aumentar las conversiones.",
      en: "Snov.io is a cold outreach automation platform offering a comprehensive set of tools for email marketing professionals, salespeople, recruiters, and business owners. It helps streamline lead generation, email verification, email tracking, sending email campaigns, and more, to optimize efficiency, save time, and increase conversions."
    },
    useCases: {
      es: [
        "Generación de leads B2B y verificación de correos electrónicos",
        "Automatización de campañas de correo electrónico en frío",
        "Gestión de relaciones con clientes mediante CRM integrado"
      ],
      en: [
        "B2B lead generation and email verification",
        "Automation of cold email campaigns",
        "Customer relationship management with integrated CRM"
      ]
    },
    resources: {
      es: [
        {
          title: "Servicios y software de generación de leads B2B - Snov.io",
          url: "https://snov.io/es/servicios-de-generacion-de-leads",
          type: "article",
          description: "Descubre cómo Snov.io puede ayudarte a generar leads B2B de manera eficiente."
        },
        {
          title: "Snovio: Guía completa para impulsar su generación de leads",
          url: "https://protagnst.com/descubriendo-snovio-todo-lo-que-necesita-saber-para-impulsar-su-generacion-de-leads/",
          type: "article",
          description: "Una guía detallada sobre cómo utilizar Snov.io para mejorar la generación de leads."
        },
        {
          title: "Snov.io - Opiniones, precios y características - Capterra España 2025",
          url: "https://www.capterra.es/software/182902/snovio",
          type: "article",
          description: "Reseñas y características de Snov.io según Capterra España."
        }
      ],
      en: [
        {
          title: "B2B Lead Generation Services and Software - Snov.io",
          url: "https://snov.io/services-lead-generation",
          type: "article",
          description: "Learn how Snov.io can help you efficiently generate B2B leads."
        },
        {
          title: "Snovio: Complete Guide to Boost Your Lead Generation",
          url: "https://protagnst.com/discovering-snovio-everything-you-need-to-know-to-boost-your-lead-generation/",
          type: "article",
          description: "A detailed guide on how to use Snov.io to improve lead generation."
        },
        {
          title: "Snov.io - Reviews, Pricing & Features - Capterra 2025",
          url: "https://www.capterra.com/p/182902/Snovio/",
          type: "article",
          description: "Reviews and features of Snov.io according to Capterra."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "intermediate",
    logo: "https://snov.io/favicon.ico",
    slug: "snovio",
    featured: false,
    url: "https://snov.io/"
  },
  {
    id: "122",
    name: "Lusha",
    description: {
      es: "Accede a datos de contacto B2B precisos y actualizados",
      en: "Access accurate and up-to-date B2B contact data"
    },
    detailedDescription: {
      es: "Lusha es una plataforma de inteligencia de ventas B2B que proporciona a los usuarios acceso a contactos que ayudan a los equipos de ventas con la prospección y generación de leads. Ofrece información de contacto precisa y actualizada, incluyendo direcciones de correo electrónico y números de teléfono, para facilitar la conexión con posibles clientes.",
      en: "Lusha is a B2B sales intelligence platform that provides users with access to contacts that assist sales teams with prospecting and lead generation. It offers accurate and up-to-date contact information, including email addresses and phone numbers, to facilitate connection with potential clients."
    },
    useCases: {
      es: [
        "Prospección de clientes potenciales B2B",
        "Enriquecimiento de datos de contacto",
        "Integración con CRM para mejorar la eficiencia de ventas"
      ],
      en: [
        "B2B prospecting",
        "Contact data enrichment",
        "CRM integration to enhance sales efficiency"
      ]
    },
    resources: {
      es: [
        {
          title: "Lusha - Opiniones, precios y características - Capterra España 2025",
          url: "https://www.capterra.es/software/198383/lusha",
          type: "article",
          description: "Reseñas y características de Lusha según Capterra España."
        },
        {
          title: "Lusha: precios, funciones y opiniones | GetApp España 2025",
          url: "https://www.getapp.es/software/2008867/lusha",
          type: "article",
          description: "Información sobre precios y funciones de Lusha en GetApp España."
        },
        {
          title: "Lusha | AI Sales Intelligence Platform to Win Your Next Deal",
          url: "https://www.lusha.com/",
          type: "article",
          description: "Página oficial de Lusha con información detallada sobre la plataforma."
        }
      ],
      en: [
        {
          title: "Lusha - Reviews, Pricing & Features - Capterra 2025",
          url: "https://www.capterra.com/p/198383/Lusha/",
          type: "article",
          description: "Reviews and features of Lusha according to Capterra."
        },
        {
          title: "Lusha: Pricing, Features & Reviews | GetApp 2025",
          url: "https://www.getapp.com/sales-software/a/lusha/",
          type: "article",
          description: "Information on Lusha's pricing and features on GetApp."
        },
        {
          title: "Lusha | AI Sales Intelligence Platform to Win Your Next Deal",
          url: "https://www.lusha.com/",
          type: "article",
          description: "Official Lusha page with detailed information about the platform."
        }
      ]
    },
    category: "sales",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "beginner",
    logo: "https://www.lusha.com/favicon.ico",
    slug: "lusha",
    featured: false,
    url: "https://www.lusha.com/"
  },
  
  {
    id: "124",
    name: "Smartlead.ai",
    description: {
      es: "Plataforma de email frío con entregabilidad premium y automatización avanzada",
      en: "Cold email platform with premium deliverability and advanced automation"
    },
    detailedDescription: {
      es: "Smartlead.ai es una plataforma de email frío impulsada por inteligencia artificial que permite escalar campañas de alcance con múltiples buzones, calentamiento ilimitado y una infraestructura centrada en la entregabilidad. Ofrece una bandeja de entrada unificada para gestionar todo el ciclo de ingresos en un solo lugar.",
      en: "Smartlead.ai is an AI-powered cold email platform that enables scaling outreach campaigns with multiple mailboxes, unlimited warmups, and a deliverability-focused infrastructure. It offers a unified inbox to manage the entire revenue cycle in one place."
    },
    useCases: {
      es: [
        "Automatización de campañas de email frío",
        "Gestión de múltiples buzones de correo",
        "Mejora de la entregabilidad y reputación del remitente",
        "Personalización avanzada de correos electrónicos",
        "Seguimiento y análisis de respuestas y conversiones"
      ],
      en: [
        "Automation of cold email campaigns",
        "Management of multiple email mailboxes",
        "Improvement of deliverability and sender reputation",
        "Advanced personalization of emails",
        "Tracking and analysis of responses and conversions"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Smartlead.ai",
          url: "https://www.smartlead.ai/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Blog de Smartlead.ai",
          url: "https://www.smartlead.ai/blog/",
          type: "article",
          description: "Artículos sobre estrategias de email marketing y automatización"
        },
        {
          title: "Guía de automatización de email con Smartlead",
          url: "https://dfymeetings.com/unlocking-cold-email-wins-with-smartlead-ai-a-full-guide/",
          type: "article",
          description: "Guía completa sobre cómo utilizar Smartlead para campañas de email frío"
        }
      ],
      en: [
        {
          title: "Smartlead.ai Official Site",
          url: "https://www.smartlead.ai/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Smartlead.ai Blog",
          url: "https://www.smartlead.ai/blog/",
          type: "article",
          description: "Articles on email marketing and automation strategies"
        },
        {
          title: "Automating Cold Email with Smartlead",
          url: "https://dfymeetings.com/unlocking-cold-email-wins-with-smartlead-ai-a-full-guide/",
          type: "article",
          description: "Comprehensive guide on using Smartlead for cold email campaigns"
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Prueba gratuita de 14 días",
      en: "14-day free trial"
    },
    difficulty: "intermediate",
    logo: "https://pbs.twimg.com/profile_images/1567729907794587648/bFN4IbN5_400x400.jpg",
    slug: "smartlead-ai",
    featured: false,
    url: "https://www.smartlead.ai/"
  },
  {
    id: "125",
    name: "Lemlist",
    description: {
      es: "Automatiza campañas de email frío multicanal con personalización avanzada",
      en: "Automate multichannel cold email campaigns with advanced personalization"
    },
    detailedDescription: {
      es: "Lemlist es una plataforma de engagement de ventas que permite automatizar campañas de email frío, LinkedIn y llamadas, con un alto nivel de personalización. Ofrece herramientas para encontrar leads cualificados, personalizar mensajes a escala y realizar seguimientos automáticos, todo desde una bandeja de entrada unificada.",
      en: "Lemlist is a sales engagement platform that enables automation of cold email, LinkedIn, and call campaigns with advanced personalization. It offers tools to find qualified leads, personalize messages at scale, and automate follow-ups, all from a unified inbox."
    },
    useCases: {
      es: [
        "Automatización de campañas de email frío",
        "Prospección multicanal (email, LinkedIn, llamadas)",
        "Personalización avanzada de mensajes",
        "Seguimientos automáticos basados en interacciones",
        "Gestión de leads desde una bandeja de entrada unificada"
      ],
      en: [
        "Automation of cold email campaigns",
        "Multichannel prospecting (email, LinkedIn, calls)",
        "Advanced message personalization",
        "Automated follow-ups based on interactions",
        "Lead management from a unified inbox"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Lemlist",
          url: "https://www.lemlist.com/es",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Blog de Lemlist",
          url: "https://www.lemlist.com/es/blog",
          type: "article",
          description: "Artículos sobre estrategias de email en frío y ventas"
        },
        {
          title: "Academia de Lemlist",
          url: "https://www.lemlist.com/academy",
          type: "course",
          description: "Cursos y tutoriales para dominar Lemlist"
        }
      ],
      en: [
        {
          title: "Lemlist Official Site",
          url: "https://www.lemlist.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Lemlist Blog",
          url: "https://www.lemlist.com/blog",
          type: "article",
          description: "Articles on cold email and sales strategies"
        },
        {
          title: "Lemlist Academy",
          url: "https://www.lemlist.com/academy",
          type: "course",
          description: "Courses and tutorials to master Lemlist"
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Desde $69/mes",
      en: "From $69/month"
    },
    difficulty: "intermediate",
    logo: "https://cdn.prod.website-files.com/651d69a866763b8d1369908a/6780df71ef14fcfb8eb9a3f2_lemlist-logo.png",
    slug: "lemlist",
    featured: false,
    url: "https://www.lemlist.com/"
  },
  {
    id: "126",
    tags: ["YC", "irrelevant"],
    name: "Chonkie",
    description: {
      es: "Biblioteca ligera y rápida para fragmentación de texto en aplicaciones RAG",
      en: "Lightweight and fast text chunking library for RAG applications"
    },
    detailedDescription: {
      es: "Chonkie es una biblioteca de fragmentación de texto diseñada para aplicaciones de generación aumentada por recuperación (RAG). Es ligera, rápida y fácil de usar. Ofrece varios métodos de fragmentación de texto, admite varios tokenizadores y tiene un alto rendimiento. Las principales ventajas de Chonkie incluyen sus funcionalidades completas, facilidad de uso, velocidad de procesamiento rápida, soporte amplio y diseño ligero. Es adecuada para desarrolladores e investigadores que necesitan procesar datos de texto de manera eficiente, especialmente en los campos del procesamiento del lenguaje natural y el aprendizaje automático.",
      en: "Chonkie is a text chunking library designed for retrieval-augmented generation (RAG) applications. It is lightweight, fast, and easy to use. It offers various text chunking methods, supports multiple tokenizers, and has high performance. Chonkie's main advantages include its comprehensive functionalities, ease of use, fast processing speed, broad support, and lightweight design. It is suitable for developers and researchers who need to process text data efficiently, especially in the fields of natural language processing and machine learning."
    },
    useCases: {
      es: [
        "Fragmentación de texto para aplicaciones RAG",
        "Procesamiento eficiente de datos de texto",
        "Integración con modelos de lenguaje y tokenizadores"
      ],
      en: [
        "Text chunking for RAG applications",
        "Efficient text data processing",
        "Integration with language models and tokenizers"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Chonkie",
          url: "https://www.chonkie.ai/",
          type: "article",
          description: "Página principal con información y acceso a la biblioteca"
        },
        {
          title: "Documentación de Chonkie",
          url: "https://docs.chonkie.ai/",
          type: "article",
          description: "Guías y referencias para desarrolladores"
        },
        {
          title: "Repositorio de Chonkie en GitHub",
          url: "https://github.com/chonkie-inc",
          type: "code",
          description: "Código fuente y herramientas para desarrolladores"
        }
      ],
      en: [
        {
          title: "Chonkie Official Site",
          url: "https://www.chonkie.ai/",
          type: "article",
          description: "Main page with information and access to the library"
        },
        {
          title: "Chonkie Documentation",
          url: "https://docs.chonkie.ai/",
          type: "article",
          description: "Guides and references for developers"
        },
        {
          title: "Chonkie GitHub Repository",
          url: "https://github.com/chonkie-inc",
          type: "code",
          description: "Source code and developer tools"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "intermediate",
    logo: "https://repository-images.githubusercontent.com/956908445/2d9521f2-d3a0-44ec-9ee4-f3baa0cf4764",
    slug: "chonkie",
    featured: false,
    url: "https://www.chonkie.ai/"
  },
  {
    id: "127",
    name: "Weaviate",
    tags: ["YC"],
    description: {
      es: "Base de datos vectorial de código abierto para aplicaciones de IA",
      en: "Open-source vector database for AI applications"
    },
    detailedDescription: {
      es: "Weaviate es una base de datos vectorial de código abierto que permite almacenar y buscar datos no estructurados como texto, imágenes y audio mediante embeddings vectoriales. Ofrece búsqueda semántica, filtrado estructurado y se integra fácilmente con modelos de lenguaje como OpenAI, Cohere y Hugging Face. Es ideal para aplicaciones de RAG, agentes de IA y sistemas de recomendación.",
      en: "Weaviate is an open-source vector database that enables storage and search of unstructured data such as text, images, and audio using vector embeddings. It offers semantic search, structured filtering, and integrates seamlessly with language models like OpenAI, Cohere, and Hugging Face. Ideal for RAG applications, AI agents, and recommendation systems."
    },
    useCases: {
      es: [
        "Búsqueda semántica en grandes volúmenes de datos",
        "Implementación de RAG (Retrieval-Augmented Generation)",
        "Desarrollo de agentes de IA contextuales",
        "Sistemas de recomendación basados en similitud",
        "Análisis de datos no estructurados"
      ],
      en: [
        "Semantic search over large datasets",
        "Implementation of Retrieval-Augmented Generation (RAG)",
        "Development of contextual AI agents",
        "Similarity-based recommendation systems",
        "Analysis of unstructured data"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Weaviate",
          url: "https://weaviate.io/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Introducción a las bases de datos vectoriales",
          url: "https://weaviate.io/blog/what-is-a-vector-database",
          type: "article",
          description: "Artículo que explica qué es una base de datos vectorial y cómo funciona"
        },
        {
          title: "Guía para desarrolladores de Weaviate",
          url: "https://weaviate.io/developers/weaviate/introduction",
          type: "article",
          description: "Documentación para comenzar a utilizar Weaviate en tus proyectos"
        }
      ],
      en: [
        {
          title: "Weaviate Official Site",
          url: "https://weaviate.io/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Introduction to Vector Databases",
          url: "https://weaviate.io/blog/what-is-a-vector-database",
          type: "article",
          description: "Article explaining what a vector database is and how it works"
        },
        {
          title: "Weaviate Developer Guide",
          url: "https://weaviate.io/developers/weaviate/introduction",
          type: "article",
          description: "Documentation to get started with Weaviate in your projects"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis (código abierto)",
      en: "Free (open-source)"
    },
    difficulty: "advanced",
    logo: "https://cdn.dribbble.com/userupload/3228886/file/original-f9901440223a152388ad6a5f03acf584.png",
    slug: "weaviate",
    featured: false,
    url: "https://weaviate.io/"
  },
  {
    id: "128",
    name: "Ergo",
    tags: ["YC"],
    description: {
      es: "Automatiza operaciones de ventas con agentes de IA",
      en: "Automate sales operations with AI agents"
    },
    detailedDescription: {
      es: "Ergo es una plataforma de automatización de ventas que utiliza inteligencia artificial para gestionar tareas operativas como actualizaciones de CRM, seguimientos y análisis de oportunidades. Se integra con herramientas como Zoom, Email y Slack para mantener los CRMs actualizados y ayudar a los equipos de ventas a cerrar tratos más rápido.",
      en: "Ergo is a sales automation platform that leverages artificial intelligence to manage operational tasks such as CRM updates, follow-ups, and opportunity analysis. It integrates with tools like Zoom, Email, and Slack to keep CRMs up-to-date and help sales teams close deals faster."
    },
    useCases: {
      es: [
        "Automatización de actualizaciones en CRM",
        "Seguimientos personalizados basados en interacciones previas",
        "Análisis de oportunidades de ventas en tiempo real",
        "Reducción de tareas manuales en procesos de ventas",
        "Mejora de la eficiencia del equipo comercial"
      ],
      en: [
        "Automation of CRM updates",
        "Personalized follow-ups based on previous interactions",
        "Real-time sales opportunity analysis",
        "Reduction of manual tasks in sales processes",
        "Improvement of sales team efficiency"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Ergo",
          url: "https://joinergo.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Acerca de Ergo",
          url: "https://joinergo.com/company",
          type: "article",
          description: "Información sobre la empresa y su misión"
        },
        {
          title: "Ergo en Y Combinator",
          url: "https://www.ycombinator.com/companies/ergo",
          type: "article",
          description: "Perfil de Ergo en Y Combinator"
        }
      ],
      en: [
        {
          title: "Ergo Official Site",
          url: "https://joinergo.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "About Ergo",
          url: "https://joinergo.com/company",
          type: "article",
          description: "Information about the company and its mission"
        },
        {
          title: "Ergo on Y Combinator",
          url: "https://www.ycombinator.com/companies/ergo",
          type: "article",
          description: "Ergo's profile on Y Combinator"
        }
      ]
    },
    category: "sales",
    price: {
      es: "Consultar precios",
      en: "Contact for pricing"
    },
    difficulty: "intermediate",
    logo: "https://bookface-images.s3.amazonaws.com/small_logos/bd659fbea3fde9a2b42434fe03f0a75943f09e6a.png",
    slug: "ergo",
    featured: false,
    url: "https://joinergo.com/"
  },
  {
    id: "129",
    name: "Convex",
    tags: ["Top"],
    description: {
      es: "Plataforma backend reactiva para desarrolladores de aplicaciones",
      en: "Reactive backend platform for app developers"
    },
    detailedDescription: {
      es: "Convex es una plataforma de backend de código abierto que permite a los desarrolladores construir aplicaciones full-stack utilizando TypeScript. Ofrece una base de datos reactiva, funciones en la nube, almacenamiento de archivos, programación de tareas y actualizaciones en tiempo real, todo integrado de manera cohesiva. Convex garantiza que tu aplicación refleje siempre los cambios en el código frontend, backend y el estado de la base de datos en tiempo real, eliminando la necesidad de gestores de estado o políticas de invalidación de caché.",
      en: "Convex is an open-source backend platform that enables developers to build full-stack applications using TypeScript. It offers a reactive database, cloud functions, file storage, task scheduling, and real-time updates, all integrated cohesively. Convex ensures that your app always reflects changes in frontend code, backend code, and database state in real time, eliminating the need for state managers or cache invalidation policies."
    },
    useCases: {
      es: [
        "Desarrollo de aplicaciones full-stack con TypeScript",
        "Implementación de funciones en la nube y tareas programadas",
        "Gestión de bases de datos reactivas en tiempo real",
        "Integración con herramientas de IA para generación de código",
        "Construcción de aplicaciones con actualizaciones en tiempo real sin necesidad de WebSockets"
      ],
      en: [
        "Full-stack application development with TypeScript",
        "Implementation of cloud functions and scheduled tasks",
        "Management of real-time reactive databases",
        "Integration with AI tools for code generation",
        "Building applications with real-time updates without the need for WebSockets"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Convex",
          url: "https://www.convex.dev/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Documentación de Convex",
          url: "https://docs.convex.dev/",
          type: "article",
          description: "Guía completa para comenzar a utilizar Convex en tus proyectos"
        },
        {
          title: "Blog de Convex",
          url: "https://stack.convex.dev/",
          type: "article",
          description: "Artículos y tutoriales sobre el uso de Convex y sus integraciones"
        }
      ],
      en: [
        {
          title: "Convex Official Site",
          url: "https://www.convex.dev/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Convex Documentation",
          url: "https://docs.convex.dev/",
          type: "article",
          description: "Comprehensive guide to get started with Convex in your projects"
        },
        {
          title: "Convex Blog",
          url: "https://stack.convex.dev/",
          type: "article",
          description: "Articles and tutorials on using Convex and its integrations"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis (código abierto)",
      en: "Free (open-source)"
    },
    difficulty: "intermediate",
    logo: "https://www.convex.dev/favicon.ico",
    slug: "convex",
    featured: false,
    url: "https://www.convex.dev/"
  },
  {
    id: "130",
    name: "21st.dev",
    description: {
      es: "Marketplace de componentes UI para diseñadores e ingenieros",
      en: "UI component marketplace for designers and engineers"
    },
    detailedDescription: {
      es: "21st.dev es una plataforma que permite descubrir, compartir y reutilizar componentes de interfaz de usuario (UI) optimizados para aplicaciones modernas. Diseñada para ingenieros de diseño y desarrolladores, ofrece una biblioteca extensa de elementos visuales reutilizables, facilitando la creación de interfaces atractivas y funcionales. Además, cuenta con 'Magic MCP', un agente de IA que ayuda a crear componentes UI hermosos y listos para producción en segundos mediante descripciones en lenguaje natural.",
      en: "21st.dev is a platform that enables discovering, sharing, and reusing user interface (UI) components optimized for modern applications. Designed for design engineers and developers, it offers an extensive library of reusable visual elements, facilitating the creation of attractive and functional interfaces. Additionally, it features 'Magic MCP', an AI agent that helps create beautiful, production-ready UI components in seconds using natural language descriptions."
    },
    useCases: {
      es: [
        "Descubrimiento y reutilización de componentes UI",
        "Creación rápida de interfaces atractivas para aplicaciones web",
        "Colaboración entre diseñadores e ingenieros en proyectos de UI",
        "Generación de componentes UI mediante descripciones en lenguaje natural",
        "Integración de componentes en IDEs populares como VS Code y Cursor"
      ],
      en: [
        "Discovery and reuse of UI components",
        "Rapid creation of attractive interfaces for web applications",
        "Collaboration between designers and engineers on UI projects",
        "Generation of UI components using natural language descriptions",
        "Integration of components into popular IDEs like VS Code and Cursor"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de 21st.dev",
          url: "https://21st.dev/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Magic MCP - Agente de IA para componentes UI",
          url: "https://21st.dev/magic",
          type: "article",
          description: "Herramienta de IA para crear componentes UI mediante descripciones en lenguaje natural"
        },
        {
          title: "Repositorio de Magic MCP en GitHub",
          url: "https://github.com/21st-dev/magic-mcp",
          type: "article",
          description: "Código fuente de la herramienta Magic MCP disponible en GitHub"
        }
      ],
      en: [
        {
          title: "21st.dev Official Site",
          url: "https://21st.dev/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Magic MCP - AI Agent for UI Components",
          url: "https://21st.dev/magic",
          type: "article",
          description: "AI tool to create UI components using natural language descriptions"
        },
        {
          title: "Magic MCP GitHub Repository",
          url: "https://github.com/21st-dev/magic-mcp",
          type: "article",
          description: "Source code of the Magic MCP tool available on GitHub"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis con opciones premium",
      en: "Free with premium options"
    },
    difficulty: "beginner",
    logo: "https://21st.dev/favicon.ico",
    slug: "21st-dev",
    featured: false,
    url: "https://21st.dev/"
  },
  {
    id: "131",
    tags: ["YC"],
    name: "Wildcard",
    description: {
      es: "Conecta agentes de IA con APIs mediante lenguaje natural",
      en: "Connect AI agents with APIs using natural language"
    },
    detailedDescription: {
      es: "Wildcard es una plataforma que permite a los agentes de inteligencia artificial descubrir y utilizar APIs a través de lenguaje natural. Utiliza el estándar abierto `agents.json` para describir contratos entre APIs y agentes, facilitando la integración y ejecución de acciones complejas sin necesidad de programación adicional.",
      en: "Wildcard is a platform that enables AI agents to discover and use APIs through natural language. It employs the open standard `agents.json` to describe contracts between APIs and agents, simplifying the integration and execution of complex actions without additional coding."
    },
    useCases: {
      es: [
        "Automatización de flujos de trabajo mediante agentes de IA",
        "Integración de múltiples APIs sin programación manual",
        "Desarrollo de agentes conversacionales con capacidades ampliadas",
        "Orquestación de tareas complejas a través de lenguaje natural"
      ],
      en: [
        "Workflow automation using AI agents",
        "Integration of multiple APIs without manual coding",
        "Development of conversational agents with extended capabilities",
        "Orchestration of complex tasks through natural language"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Wildcard",
          url: "https://wild-card.ai/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Introducción a agents.json",
          url: "https://docs.wild-card.ai/agentsjson/introduction",
          type: "article",
          description: "Documentación sobre el estándar agents.json para integración de APIs"
        },
        {
          title: "Repositorio de agents.json en GitHub",
          url: "https://github.com/wild-card-ai/agents-json",
          type: "code",
          description: "Especificación y ejemplos de uso de agents.json"
        }
      ],
      en: [
        {
          title: "Wildcard Official Site",
          url: "https://wild-card.ai/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Introduction to agents.json",
          url: "https://docs.wild-card.ai/agentsjson/introduction",
          type: "article",
          description: "Documentation on the agents.json standard for API integration"
        },
        {
          title: "agents.json Repository on GitHub",
          url: "https://github.com/wild-card-ai/agents-json",
          type: "code",
          description: "Specification and usage examples of agents.json"
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Gratis (código abierto)",
      en: "Free (open-source)"
    },
    difficulty: "intermediate",
    logo: "https://wild-card.ai/favicon.ico",
    slug: "wildcard",
    featured: false,
    url: "https://wild-card.ai/"
  },
  {
    id: "132",
    name: "Ardor",
    description: {
      es: "Plataforma para construir y escalar agentes de IA en la nube",
      en: "Platform to build and scale AI agents in the cloud"
    },
    detailedDescription: {
      es: "Ardor es una plataforma que facilita la construcción, despliegue y escalado de agentes de inteligencia artificial en la nube. Ofrece herramientas para ensamblar componentes reutilizables, depurar interacciones complejas y desplegar pipelines de datos y modelos de aprendizaje automático de manera eficiente.",
      en: "Ardor is a platform that simplifies the building, deployment, and scaling of AI agents in the cloud. It provides tools to assemble reusable components, debug complex interactions, and deploy data pipelines and machine learning models efficiently."
    },
    useCases: {
      es: [
        "Desarrollo de agentes de IA personalizados",
        "Automatización de procesos empresariales mediante agentes",
        "Despliegue de modelos de aprendizaje automático en la nube",
        "Integración de agentes con servicios en la nube existentes"
      ],
      en: [
        "Development of custom AI agents",
        "Automation of business processes using agents",
        "Deployment of machine learning models in the cloud",
        "Integration of agents with existing cloud services"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Ardor",
          url: "https://ardor.cloud/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Por qué elegir Ardor",
          url: "https://ardorcloud.com/why-ardor/",
          type: "article",
          description: "Información sobre las ventajas y características de Ardor"
        },
        {
          title: "Perfil de Ardor en LinkedIn",
          url: "https://sg.linkedin.com/company/ardor-cloud",
          type: "article",
          description: "Información corporativa y actualizaciones de Ardor"
        }
      ],
      en: [
        {
          title: "Ardor Official Site",
          url: "https://ardor.cloud/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Why Choose Ardor",
          url: "https://ardorcloud.com/why-ardor/",
          type: "article",
          description: "Information about Ardor's advantages and features"
        },
        {
          title: "Ardor LinkedIn Profile",
          url: "https://sg.linkedin.com/company/ardor-cloud",
          type: "article",
          description: "Corporate information and updates from Ardor"
        }
      ]
    },
    category: "ai_agents",
    price: {
      es: "Consultar precios",
      en: "Contact for pricing"
    },
    difficulty: "intermediate",
    logo: "https://framerusercontent.com/images/ccsJSaDWZYi5FAbm2VGH9Gfkhpk.svg",
    slug: "ardor",
    featured: false,
    url: "https://ardor.cloud/"
  },
  {
    id: "133",
    name: "Toolify.ai",
    description: {
      es: "Directorio integral de herramientas de inteligencia artificial",
      en: "Comprehensive directory of artificial intelligence tools"
    },
    detailedDescription: {
      es: "Toolify.ai es una plataforma que reúne más de 25,000 herramientas de inteligencia artificial, organizadas en más de 460 categorías. Permite a los usuarios descubrir, comparar y acceder a una amplia variedad de aplicaciones de IA, desde asistentes de escritura hasta generadores de imágenes y herramientas de análisis de datos.",
      en: "Toolify.ai is a platform that brings together over 25,000 artificial intelligence tools, organized into more than 460 categories. It allows users to discover, compare, and access a wide variety of AI applications, from writing assistants to image generators and data analysis tools."
    },
    useCases: {
      es: [
        "Descubrimiento de nuevas herramientas de IA",
        "Comparación de funcionalidades y precios entre aplicaciones",
        "Acceso a reseñas y valoraciones de usuarios",
        "Exploración de categorías específicas de herramientas",
        "Seguimiento de las últimas tendencias en IA"
      ],
      en: [
        "Discovery of new AI tools",
        "Comparison of features and pricing between applications",
        "Access to user reviews and ratings",
        "Exploration of specific tool categories",
        "Tracking the latest trends in AI"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Toolify.ai",
          url: "https://www.toolify.ai/es/",
          type: "article",
          description: "Página principal con acceso al directorio completo de herramientas de IA"
        },
        {
          title: "Artículo sobre Toolify.ai en TikcoTech",
          url: "https://tikcotech.com/toolify-ai-la-nueva-frontera-en-herramientas-de-inteligencia-artificial/",
          type: "article",
          description: "Análisis detallado de las funcionalidades y ventajas de Toolify.ai"
        },
        {
          title: "Video: Todas las inteligencias artificiales en una sola página",
          url: "https://www.youtube.com/watch?v=vlWLcK0NKxQ",
          type: "video",
          description: "Demostración de cómo utilizar Toolify.ai para encontrar herramientas de IA"
        }
      ],
      en: [
        {
          title: "Toolify.ai Official Site",
          url: "https://www.toolify.ai/",
          type: "article",
          description: "Main page with access to the complete AI tools directory"
        },
        {
          title: "TikcoTech Article on Toolify.ai",
          url: "https://tikcotech.com/toolify-ai-la-nueva-frontera-en-herramientas-de-inteligencia-artificial/",
          type: "article",
          description: "Detailed analysis of Toolify.ai's features and advantages"
        },
        {
          title: "Video: All AI Tools in One Page",
          url: "https://www.youtube.com/watch?v=vlWLcK0NKxQ",
          type: "video",
          description: "Demonstration on how to use Toolify.ai to find AI tools"
        }
      ]
    },
    category: "other",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://www.toolify.ai/favicon.ico",
    slug: "toolify-ai",
    featured: false,
    url: "https://www.toolify.ai/"
  },
  {
    id: "134",
    name: "Airweave.ai",
    tags: ["YC"],
    description: {
      es: "Transforma datos de aplicaciones en conocimiento accesible para agentes de IA",
      en: "Transform application data into agent-accessible knowledge"
    },
    detailedDescription: {
      es: "Airweave.ai es una herramienta de código abierto que permite a los agentes de inteligencia artificial buscar y acceder a datos de diversas aplicaciones, bases de datos y APIs. Facilita la integración de múltiples fuentes de datos, convirtiéndolos en información estructurada y semánticamente accesible para agentes, mejorando así su capacidad de respuesta y personalización.",
      en: "Airweave.ai is an open-source tool that enables AI agents to search and access data from various applications, databases, and APIs. It facilitates the integration of multiple data sources, transforming them into structured and semantically accessible information for agents, thereby enhancing their responsiveness and personalization capabilities."
    },
    useCases: {
      es: [
        "Integración de datos de múltiples aplicaciones para agentes de IA",
        "Mejora de la capacidad de búsqueda semántica en agentes",
        "Automatización de la sincronización de datos entre sistemas",
        "Desarrollo de agentes con acceso a información actualizada y relevante",
        "Implementación de soluciones de RAG (Retrieval-Augmented Generation)"
      ],
      en: [
        "Integration of data from multiple applications for AI agents",
        "Enhancement of semantic search capabilities in agents",
        "Automation of data synchronization between systems",
        "Development of agents with access to updated and relevant information",
        "Implementation of Retrieval-Augmented Generation (RAG) solutions"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Airweave.ai",
          url: "https://airweave.ai/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Documentación de Airweave",
          url: "https://docs.airweave.ai/welcome",
          type: "article",
          description: "Guía completa para comenzar a utilizar Airweave en tus proyectos"
        },
        {
          title: "Repositorio de Airweave en GitHub",
          url: "https://github.com/airweave-ai/airweave",
          type: "code",
          description: "Código fuente y ejemplos de implementación de Airweave"
        }
      ],
      en: [
        {
          title: "Airweave.ai Official Site",
          url: "https://airweave.ai/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Airweave Documentation",
          url: "https://docs.airweave.ai/welcome",
          type: "article",
          description: "Comprehensive guide to get started with Airweave in your projects"
        },
        {
          title: "Airweave GitHub Repository",
          url: "https://github.com/airweave-ai/airweave",
          type: "code",
          description: "Source code and implementation examples of Airweave"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis (código abierto)",
      en: "Free (open-source)"
    },
    difficulty: "advanced",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlSDidrF84oUgiA2IbRF_1ztqUbXgIhVaHDw&s",
    slug: "airweave-ai",
    featured: false,
    url: "https://airweave.ai/"
  },
  {
    id: "135",
    tags: ["YC"],
    name: "Waffle.ai",
    description: {
      es: "Generador de sitios web impulsado por IA sin necesidad de código",
      en: "AI-powered website generator with no coding required"
    },
    detailedDescription: {
      es: "Waffle.ai es una plataforma que permite a los usuarios crear aplicaciones web personalizadas en minutos sin escribir una sola línea de código. Utiliza inteligencia artificial para generar sitios web funcionales, incluyendo backend real con bases de datos, autenticación, servicios de correo electrónico y almacenamiento de archivos. Ideal para emprendedores y pequeñas empresas que buscan una solución rápida y eficiente para establecer su presencia en línea.",
      en: "Waffle.ai is a platform that enables users to create custom web applications in minutes without writing a single line of code. It leverages artificial intelligence to generate functional websites, including real backend with databases, authentication, email services, and file storage. Ideal for entrepreneurs and small businesses seeking a quick and efficient solution to establish their online presence."
    },
    useCases: {
      es: [
        "Creación rápida de sitios web para negocios emergentes",
        "Desarrollo de aplicaciones web sin conocimientos de programación",
        "Prototipado de ideas de productos digitales",
        "Implementación de soluciones web personalizadas para clientes"
      ],
      en: [
        "Rapid website creation for startups",
        "Web application development without programming knowledge",
        "Prototyping digital product ideas",
        "Implementing custom web solutions for clients"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Waffle.ai",
          url: "https://www.waffle.ai/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Waffle en Y Combinator",
          url: "https://www.ycombinator.com/companies/waffle",
          type: "article",
          description: "Perfil de Waffle en Y Combinator"
        },
        {
          title: "Waffle AI en Product Hunt",
          url: "https://www.producthunt.com/products/waffle-ai",
          type: "article",
          description: "Información y reseñas de Waffle AI en Product Hunt"
        }
      ],
      en: [
        {
          title: "Waffle.ai Official Site",
          url: "https://www.waffle.ai/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Waffle on Y Combinator",
          url: "https://www.ycombinator.com/companies/waffle",
          type: "article",
          description: "Waffle's profile on Y Combinator"
        },
        {
          title: "Waffle AI on Product Hunt",
          url: "https://www.producthunt.com/products/waffle-ai",
          type: "article",
          description: "Information and reviews of Waffle AI on Product Hunt"
        }
      ]
    },
    category: "apps",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://www.waffle.ai/favicon.ico",
    slug: "waffle-ai",
    featured: false,
    url: "https://www.waffle.ai/"
  },
  {
    id: "136",
    tags: ["YC"],
    name: "Golf.dev",
    description: {
      es: "Framework de código abierto para servidores MCP orientados a agentes",
      en: "Open-source framework for agent-native MCP servers"
    },
    detailedDescription: {
      es: "Golf.dev es un framework de código abierto y una plataforma opcional alojada para construir y ejecutar servidores Model Context Protocol (MCP). Facilita la creación de backends orientados a agentes, manejando aspectos como enrutamiento, autenticación, observabilidad y despliegue. Golf.dev permite a los desarrolladores convertir sus herramientas y recursos en servidores MCP compatibles sin necesidad de escribir definiciones de esquemas o configuraciones adicionales.",
      en: "Golf.dev is an open-source framework and optional hosted platform for building and running Model Context Protocol (MCP) servers. It simplifies the creation of agent-native backends by handling routing, authentication, observability, and deployment. Golf.dev allows developers to turn their tools and resources into spec-compliant MCP servers without the need to write schema definitions or additional configurations."
    },
    useCases: {
      es: [
        "Desarrollo de backends para agentes de inteligencia artificial",
        "Implementación de servidores MCP compatibles",
        "Gestión de autenticación y enrutamiento en aplicaciones orientadas a agentes",
        "Monitoreo y trazabilidad de solicitudes en tiempo real"
      ],
      en: [
        "Development of backends for AI agents",
        "Implementation of spec-compliant MCP servers",
        "Management of authentication and routing in agent-native applications",
        "Real-time monitoring and traceability of requests"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Golf.dev",
          url: "https://golf.dev/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Documentación de Golf MCP",
          url: "https://golf.dev/docs",
          type: "article",
          description: "Guía detallada para comenzar con Golf MCP"
        },
        {
          title: "Repositorio de Golf en GitHub",
          url: "https://github.com/golf-dev/golf",
          type: "code",
          description: "Código fuente y ejemplos de uso de Golf"
        }
      ],
      en: [
        {
          title: "Golf.dev Official Site",
          url: "https://golf.dev/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Golf MCP Documentation",
          url: "https://golf.dev/docs",
          type: "article",
          description: "Detailed guide to get started with Golf MCP"
        },
        {
          title: "Golf GitHub Repository",
          url: "https://github.com/golf-dev/golf",
          type: "code",
          description: "Source code and usage examples of Golf"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis (código abierto)",
      en: "Free (open-source)"
    },
    difficulty: "advanced",
    logo: "https://pbs.twimg.com/profile_images/1924944883372187648/MGQn1p8L_400x400.jpg",
    slug: "golf-dev",
    featured: false,
    url: "https://golf.dev/"
  },
  {
    id: "137",
    name: "Linkup",
    description: {
      es: "Motor de búsqueda optimizado para agentes de IA y LLMs",
      en: "Search engine optimized for AI agents and LLMs"
    },
    detailedDescription: {
      es: "Linkup es un motor de búsqueda diseñado para integrarse con agentes de inteligencia artificial y modelos de lenguaje, proporcionando acceso en tiempo real a contenido web de alta calidad. Su API permite a las aplicaciones de IA obtener información actualizada y precisa, mejorando la veracidad y relevancia de las respuestas generadas.",
      en: "Linkup is a search engine designed to integrate with AI agents and language models, providing real-time access to high-quality web content. Its API enables AI applications to retrieve up-to-date and accurate information, enhancing the truthfulness and relevance of generated responses."
    },
    useCases: {
      es: [
        "Integración en flujos de trabajo de agentes de IA",
        "Enriquecimiento de datos para modelos de lenguaje",
        "Automatización de prospección y generación de leads",
        "Acceso en tiempo real a información web para asistentes virtuales"
      ],
      en: [
        "Integration into AI agent workflows",
        "Data enrichment for language models",
        "Automation of prospecting and lead generation",
        "Real-time web information access for virtual assistants"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Linkup",
          url: "https://www.linkup.so/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Documentación de la API de Linkup",
          url: "https://docs.linkup.so/pages/documentation/get-started/quickstart",
          type: "article",
          description: "Guía para comenzar a utilizar la API de Linkup en tus proyectos"
        },
        {
          title: "Caso de uso: Integración de Linkup en Fleet",
          url: "https://www.linkup.so/blog/linkup-with-fleet",
          type: "article",
          description: "Ejemplo de cómo Fleet utilizó Linkup para mejorar su asistente de IA"
        }
      ],
      en: [
        {
          title: "Linkup Official Site",
          url: "https://www.linkup.so/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Linkup API Documentation",
          url: "https://docs.linkup.so/pages/documentation/get-started/quickstart",
          type: "article",
          description: "Guide to start using Linkup's API in your projects"
        },
        {
          title: "Use Case: Integrating Linkup into Fleet",
          url: "https://www.linkup.so/blog/linkup-with-fleet",
          type: "article",
          description: "Example of how Fleet used Linkup to enhance its AI assistant"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis con opciones de pago",
      en: "Free with paid options"
    },
    difficulty: "intermediate",
    logo: "https://framerusercontent.com/images/7zeIm6t3f1HaSltkw8upEvsD80.png?scale-down-to=1024",
    slug: "linkup",
    featured: false,
    url: "https://www.linkup.so/"
  },
  {
    id: "138",
    tags: ["YC"],
    name: "Vybe",
    description: {
      es: "Plataforma para construir aplicaciones internas impulsadas por IA",
      en: "Platform to build internal AI-powered applications"
    },
    detailedDescription: {
      es: "Vybe es una plataforma que permite a las empresas crear y lanzar aplicaciones internas utilizando bloques de construcción predefinidos, integraciones y herramientas de inteligencia artificial. Facilita la creación de aplicaciones sin necesidad de conocimientos técnicos profundos, integrándose con herramientas como Gmail, Google Calendar, GitHub y Jira.",
      en: "Vybe is a platform that enables companies to build and launch internal applications using pre-built building blocks, integrations, and AI tools. It simplifies app creation without requiring deep technical knowledge, integrating with tools like Gmail, Google Calendar, GitHub, and Jira."
    },
    useCases: {
      es: [
        "Desarrollo de aplicaciones internas personalizadas",
        "Automatización de procesos empresariales",
        "Integración de herramientas existentes en flujos de trabajo",
        "Creación rápida de prototipos de aplicaciones con IA"
      ],
      en: [
        "Development of custom internal applications",
        "Automation of business processes",
        "Integration of existing tools into workflows",
        "Rapid prototyping of AI-powered applications"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Vybe",
          url: "https://www.vybe.build/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Perfil de Vybe en Y Combinator",
          url: "https://www.ycombinator.com/companies/vybe",
          type: "article",
          description: "Información sobre Vybe en el sitio de Y Combinator"
        },
        {
          title: "Anuncio de Vybe en X",
          url: "https://x.com/vybe_build",
          type: "article",
          description: "Publicaciones y actualizaciones de Vybe en la plataforma X"
        }
      ],
      en: [
        {
          title: "Vybe Official Site",
          url: "https://www.vybe.build/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Vybe Profile on Y Combinator",
          url: "https://www.ycombinator.com/companies/vybe",
          type: "article",
          description: "Information about Vybe on Y Combinator's website"
        },
        {
          title: "Vybe Announcements on X",
          url: "https://x.com/vybe_build",
          type: "article",
          description: "Posts and updates from Vybe on the X platform"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Consultar precios",
      en: "Contact for pricing"
    },
    difficulty: "intermediate",
    logo: "https://www.vybe.build/lovable-uploads/9e2d2bf3-36c6-486d-b234-4d8420f57389.png",
    slug: "vybe",
    featured: false,
    url: "https://www.vybe.build/"
  },
  {
    id: "139",
    name: "Cluely",
    description: {
      es: "Asistente de IA invisible para reuniones y entrevistas",
      en: "Invisible AI assistant for meetings and interviews"
    },
    detailedDescription: {
      es: "Cluely es una herramienta de inteligencia artificial que proporciona asistencia en tiempo real durante reuniones, entrevistas y otras interacciones virtuales. Funciona de manera invisible, leyendo la pantalla y escuchando el audio para generar respuestas inteligentes bajo demanda, sin ser detectado por otros participantes.",
      en: "Cluely is an AI tool that provides real-time assistance during meetings, interviews, and other virtual interactions. It operates invisibly, reading the screen and listening to audio to generate intelligent responses on demand, without being detected by other participants."
    },
    useCases: {
      es: [
        "Asistencia en entrevistas de trabajo",
        "Soporte durante llamadas de ventas",
        "Ayuda en exámenes en línea",
        "Apoyo en reuniones virtuales"
      ],
      en: [
        "Assistance during job interviews",
        "Support during sales calls",
        "Help in online exams",
        "Aid in virtual meetings"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Cluely",
          url: "https://cluely.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Manifiesto de Cluely",
          url: "https://cluely.com/manifesto",
          type: "article",
          description: "Declaración de principios y visión de Cluely"
        },
        {
          title: "Artículo en Business Insider sobre Cluely",
          url: "https://www.businessinsider.com/cluely-startup-founder-ai-cheating-job-interviews-norm-2025-5",
          type: "article",
          description: "Análisis sobre el impacto y controversia de Cluely"
        }
      ],
      en: [
        {
          title: "Cluely Official Site",
          url: "https://cluely.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Cluely Manifesto",
          url: "https://cluely.com/manifesto",
          type: "article",
          description: "Statement of principles and vision of Cluely"
        },
        {
          title: "Business Insider Article on Cluely",
          url: "https://www.businessinsider.com/cluely-startup-founder-ai-cheating-job-interviews-norm-2025-5",
          type: "article",
          description: "Analysis on the impact and controversy of Cluely"
        }
      ]
    },
    category: "productivity",
    price: {
      es: "Consultar precios",
      en: "Contact for pricing"
    },
    difficulty: "intermediate",
    logo: "https://media.licdn.com/dms/image/sync/v2/D4E27AQFdU0DgUeLMzA/articleshare-shrink_800/B4EZaF_bOGHEAI-/0/1746004719150?e=2147483647&v=beta&t=kWdIXwNAsy4JdJlXW67HsHmGmMTa4Z_gco92Kva-Bhc",
    slug: "cluely",
    featured: false,
    url: "https://cluely.com/"
  },
  {
    id: "140",
    tags: ["YC", "irrelevant"],
    name: "Relixir",
    description: {
      es: "Optimización para motores de búsqueda generativos (GEO)",
      en: "Generative Engine Optimization (GEO) platform"
    },
    detailedDescription: {
      es: "Relixir es una plataforma de optimización para motores de búsqueda generativos que ayuda a las empresas a mejorar su visibilidad en herramientas como ChatGPT y Perplexity. Simula miles de consultas de clientes potenciales, identifica brechas en los resultados de búsqueda y genera contenido optimizado para mejorar el posicionamiento.",
      en: "Relixir is a generative engine optimization platform that helps companies enhance their visibility on tools like ChatGPT and Perplexity. It simulates thousands of potential customer queries, identifies gaps in search results, and generates optimized content to improve ranking."
    },
    useCases: {
      es: [
        "Mejora del posicionamiento en motores de búsqueda de IA",
        "Generación de contenido optimizado para consultas específicas",
        "Identificación de brechas en resultados de búsqueda",
        "Aumento de la visibilidad de productos o servicios"
      ],
      en: [
        "Improving ranking on AI search engines",
        "Generating optimized content for specific queries",
        "Identifying gaps in search results",
        "Increasing visibility of products or services"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Relixir",
          url: "https://relixir.ai/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Acerca de Relixir",
          url: "https://relixir.ai/about",
          type: "article",
          description: "Información sobre la misión y visión de Relixir"
        },
        {
          title: "Relixir en Y Combinator",
          url: "https://www.ycombinator.com/companies/relixir",
          type: "article",
          description: "Perfil de Relixir en Y Combinator"
        }
      ],
      en: [
        {
          title: "Relixir Official Site",
          url: "https://relixir.ai/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "About Relixir",
          url: "https://relixir.ai/about",
          type: "article",
          description: "Information about Relixir's mission and vision"
        },
        {
          title: "Relixir on Y Combinator",
          url: "https://www.ycombinator.com/companies/relixir",
          type: "article",
          description: "Relixir's profile on Y Combinator"
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Consultar precios",
      en: "Contact for pricing"
    },
    difficulty: "intermediate",
    logo: "https://framerusercontent.com/images/1YFifCCnfiNE328ziAk3m8KsbBg.png",
    slug: "relixir",
    featured: false,
    url: "https://relixir.ai/"
  },
  {
    id: "141",
    name: "Product Hunt",
    description: {
      es: "Descubre y lanza los mejores productos tecnológicos",
      en: "Discover and launch the best tech products"
    },
    detailedDescription: {
      es: "Product Hunt es una plataforma donde los entusiastas de la tecnología pueden compartir y descubrir nuevos productos, aplicaciones móviles, sitios web y proyectos tecnológicos. Fundada en 2013, se ha convertido en un punto de referencia para lanzamientos de startups y desarrolladores, permitiendo a los usuarios votar, comentar y seguir las últimas tendencias en innovación.",
      en: "Product Hunt is a platform where tech enthusiasts can share and discover new products, mobile apps, websites, and tech projects. Founded in 2013, it has become a go-to place for startup and developer launches, allowing users to vote, comment, and follow the latest trends in innovation."
    },
    useCases: {
      es: [
        "Lanzamiento de nuevos productos al mercado",
        "Descubrimiento de herramientas tecnológicas emergentes",
        "Obtención de retroalimentación de la comunidad",
        "Seguimiento de tendencias en innovación y tecnología"
      ],
      en: [
        "Launching new products to the market",
        "Discovering emerging tech tools",
        "Gathering feedback from the community",
        "Tracking trends in innovation and technology"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Product Hunt",
          url: "https://www.producthunt.com/",
          type: "article",
          description: "Plataforma para descubrir y lanzar productos tecnológicos"
        },
        {
          title: "Guía para lanzar en Product Hunt",
          url: "https://www.producthunt.com/launch-guide",
          type: "tutorial",
          description: "Consejos y mejores prácticas para un lanzamiento exitoso"
        },
        {
          title: "Categorías de productos en Product Hunt",
          url: "https://www.producthunt.com/categories",
          type: "article",
          description: "Explora las diferentes categorías de productos disponibles"
        }
      ],
      en: [
        {
          title: "Product Hunt Official Site",
          url: "https://www.producthunt.com/",
          type: "article",
          description: "Platform to discover and launch tech products"
        },
        {
          title: "Product Hunt Launch Guide",
          url: "https://www.producthunt.com/launch-guide",
          type: "tutorial",
          description: "Tips and best practices for a successful launch"
        },
        {
          title: "Product Categories on Product Hunt",
          url: "https://www.producthunt.com/categories",
          type: "article",
          description: "Explore the different product categories available"
        }
      ]
    },
    category: "other",
    price: {
      es: "Gratis",
      en: "Free"
    },
    difficulty: "beginner",
    logo: "https://www.producthunt.com/favicon.ico",
    slug: "product-hunt",
    featured: false,
    url: "https://www.producthunt.com/"
  },
  {
    id: "142",
    name: "1Password",
    description: {
      es: "Gestor de contraseñas seguro y fácil de usar",
      en: "Secure and easy-to-use password manager"
    },
    detailedDescription: {
      es: "1Password es un gestor de contraseñas que permite almacenar y gestionar credenciales de cuentas, información financiera, documentos y otros datos sensibles. Ofrece generación de contraseñas seguras, llenado rápido de formularios y sincronización entre dispositivos. También proporciona funciones como compartición segura de contraseñas y monitoreo de cuentas comprometidas.",
      en: "1Password is a password manager that allows you to store and manage account credentials, financial information, documents, and other sensitive data. It offers secure password generation, quick form filling, and cross-device synchronization. It also provides features like secure password sharing and monitoring for compromised accounts."
    },
    useCases: {
      es: [
        "Almacenamiento seguro de contraseñas y datos sensibles",
        "Generación de contraseñas fuertes y únicas",
        "Sincronización de información entre múltiples dispositivos",
        "Compartición segura de credenciales con familiares o equipos"
      ],
      en: [
        "Secure storage of passwords and sensitive data",
        "Generation of strong and unique passwords",
        "Synchronization of information across multiple devices",
        "Secure sharing of credentials with family or teams"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de 1Password",
          url: "https://1password.com/es/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Características de 1Password",
          url: "https://1password.com/features",
          type: "article",
          description: "Descubre las funcionalidades que ofrece 1Password"
        },
        {
          title: "Generador de contraseñas seguras",
          url: "https://1password.com/password-generator",
          type: "tool",
          description: "Herramienta para crear contraseñas fuertes y únicas"
        }
      ],
      en: [
        {
          title: "1Password Official Site",
          url: "https://1password.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "1Password Features",
          url: "https://1password.com/features",
          type: "article",
          description: "Discover the functionalities offered by 1Password"
        },
        {
          title: "Strong Password Generator",
          url: "https://1password.com/password-generator",
          type: "tool",
          description: "Tool to create strong and unique passwords"
        }
      ]
    },
    category: "other",
    price: {
      es: "Desde $2.99/mes",
      en: "From $2.99/month"
    },
    difficulty: "beginner",
    logo: "https://1password.com/favicon.ico",
    slug: "1password",
    featured: false,
    url: "https://1password.com/es/"
  },
  {
    id: "143",
    name: "Beehiiv",
    description: {
      es: "Plataforma de newsletters todo en uno para creadores de contenido",
      en: "All-in-one newsletter platform for content creators"
    },
    detailedDescription: {
      es: "Beehiiv es una plataforma diseñada para ayudar a los creadores a construir, escalar y monetizar newsletters. Ofrece herramientas integradas como editor de contenido, automatizaciones, analíticas avanzadas, programas de referidos y opciones de monetización sin comisiones adicionales. Ideal para periodistas, escritores y empresas que buscan una solución completa para newsletters.",
      en: "Beehiiv is a platform designed to help creators build, scale, and monetize newsletters. It offers integrated tools such as content editor, automations, advanced analytics, referral programs, and monetization options without additional fees. Ideal for journalists, writers, and businesses seeking a comprehensive newsletter solution."
    },
    useCases: {
      es: [
        "Creación y envío de newsletters personalizadas",
        "Monetización mediante suscripciones y anuncios",
        "Automatización de campañas de email marketing",
        "Análisis detallado del comportamiento de los suscriptores",
        "Crecimiento de audiencia a través de programas de referidos"
      ],
      en: [
        "Creating and sending personalized newsletters",
        "Monetization through subscriptions and ads",
        "Automation of email marketing campaigns",
        "Detailed analysis of subscriber behavior",
        "Audience growth via referral programs"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Beehiiv",
          url: "https://www.beehiiv.com/",
          type: "article",
          description: "Página principal con información y acceso a la plataforma"
        },
        {
          title: "Planes y precios de Beehiiv",
          url: "https://www.beehiiv.com/pricing",
          type: "article",
          description: "Detalles sobre los diferentes planes y características de Beehiiv"
        },
        {
          title: "Comparativa de Beehiiv con otras plataformas",
          url: "https://www.beehiiv.com/comparisons",
          type: "article",
          description: "Análisis comparativo entre Beehiiv y otras soluciones de newsletters"
        }
      ],
      en: [
        {
          title: "Beehiiv Official Site",
          url: "https://www.beehiiv.com/",
          type: "article",
          description: "Main page with information and access to the platform"
        },
        {
          title: "Beehiiv Pricing Plans",
          url: "https://www.beehiiv.com/pricing",
          type: "article",
          description: "Details about Beehiiv's different plans and features"
        },
        {
          title: "Beehiiv vs. Other Platforms",
          url: "https://www.beehiiv.com/comparisons",
          type: "article",
          description: "Comparative analysis between Beehiiv and other newsletter solutions"
        }
      ]
    },
    category: "marketing",
    price: {
      es: "Gratis hasta 2,500 suscriptores; planes desde $39/mes",
      en: "Free up to 2,500 subscribers; plans from $39/month"
    },
    difficulty: "beginner",
    logo: "https://sieberedu.com/wp-content/uploads/2024/05/Behiiv-logo-sieberedu.png.webp",
    slug: "beehiiv",
    featured: true,
    url: "https://www.beehiiv.com/"
  },
  {
    id: "144",
    name: "Kaizen Automation",
    tags: ["YC"],
    description: {
      es: "Soluciones integrales de automatización industrial y control de procesos",
      en: "Comprehensive industrial automation and process control solutions"
    },
    detailedDescription: {
      es: "Kaizen Automation es una empresa especializada en ofrecer soluciones llave en mano para la automatización de procesos industriales. Con más de 30 años de experiencia, proporciona servicios que incluyen ingeniería de sistemas, planificación de proyectos y suministro de equipos para sectores como tratamiento de aguas, refinerías y manufactura. Su enfoque se centra en mejorar la eficiencia operativa mediante tecnologías avanzadas.",
      en: "Kaizen Automation is a company specializing in providing turnkey solutions for industrial process automation. With over 30 years of experience, it offers services including system engineering, project planning, and equipment supply for sectors such as water treatment, refineries, and manufacturing. Its focus is on enhancing operational efficiency through advanced technologies."
    },
    useCases: {
      es: [
        "Automatización de plantas de tratamiento de aguas",
        "Control de procesos en refinerías y plantas químicas",
        "Integración de sistemas de control PLC y SCADA",
        "Optimización de líneas de producción industrial",
        "Implementación de soluciones de monitoreo remoto"
      ],
      en: [
        "Automation of water treatment plants",
        "Process control in refineries and chemical plants",
        "Integration of PLC and SCADA control systems",
        "Optimization of industrial production lines",
        "Implementation of remote monitoring solutions"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Kaizen Automation",
          url: "https://kaizentc.com/",
          type: "article",
          description: "Página principal con información sobre servicios y soluciones ofrecidas"
        },
        {
          title: "Servicios de automatización de procesos",
          url: "https://kaizentc.com/services",
          type: "article",
          description: "Descripción detallada de los servicios de automatización que ofrece Kaizen"
        },
        {
          title: "Proyectos realizados por Kaizen Automation",
          url: "https://kaizentc.com/projects",
          type: "article",
          description: "Ejemplos de proyectos de automatización implementados en diversas industrias"
        }
      ],
      en: [
        {
          title: "Kaizen Automation Official Site",
          url: "https://kaizentc.com/",
          type: "article",
          description: "Main page with information about services and solutions offered"
        },
        {
          title: "Process Automation Services",
          url: "https://kaizentc.com/services",
          type: "article",
          description: "Detailed description of the automation services provided by Kaizen"
        },
        {
          title: "Kaizen Automation Projects",
          url: "https://kaizentc.com/projects",
          type: "article",
          description: "Examples of automation projects implemented across various industries"
        }
      ]
    },
    category: "automation",
    price: {
      es: "Consultar precios según proyecto",
      en: "Contact for project-based pricing"
    },
    difficulty: "advanced",
    logo: "https://kaizentc.com/favicon.ico",
    slug: "kaizen-automation",
    featured: false,
    url: "https://kaizentc.com/"
  },
  {
    id: "145",
    name: "PostHog",
    tags: ["Top"],
    description: {
      es: "Plataforma de análisis de productos todo en uno con capacidades de autoconsumo",
      en: "All-in-one product analytics platform with self-hosting capabilities"
    },
    detailedDescription: {
      es: "PostHog es una plataforma de análisis de productos que permite a las empresas entender cómo los usuarios interactúan con sus productos. Ofrece herramientas integradas como heatmaps, grabaciones de sesiones, embudos, cohortes, AB testing y más, todo en una sola interfaz. A diferencia de otras plataformas, PostHog se puede autohospedar, lo que permite un control completo sobre los datos y privacidad.",
      en: "PostHog is a product analytics platform that helps businesses understand how users interact with their products. It offers built-in tools such as heatmaps, session recordings, funnels, cohorts, A/B testing, and more—all in one interface. Unlike other platforms, PostHog can be self-hosted, giving full control over data and privacy."
    },
    useCases: {
      es: [
        "Análisis del comportamiento de usuarios en productos digitales",
        "Grabación y reproducción de sesiones de usuarios",
        "Pruebas A/B y experimentación de funcionalidades",
        "Visualización de embudos de conversión",
        "Autohospedaje para cumplimiento de privacidad"
      ],
      en: [
        "User behavior analysis in digital products",
        "User session recording and playback",
        "A/B testing and feature experimentation",
        "Conversion funnel visualization",
        "Self-hosting for privacy compliance"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de PostHog",
          url: "https://posthog.com/",
          type: "article",
          description: "Página principal con información sobre la plataforma y sus funcionalidades"
        },
        {
          title: "Documentación de PostHog",
          url: "https://posthog.com/docs",
          type: "article",
          description: "Guía completa para desarrolladores y equipos de producto"
        },
        {
          title: "Comparativa con otras herramientas",
          url: "https://posthog.com/docs/comparisons",
          type: "article",
          description: "Comparaciones entre PostHog y otras plataformas como Mixpanel o Google Analytics"
        }
      ],
      en: [
        {
          title: "PostHog Official Site",
          url: "https://posthog.com/",
          type: "article",
          description: "Main page with information about the platform and features"
        },
        {
          title: "PostHog Documentation",
          url: "https://posthog.com/docs",
          type: "article",
          description: "Comprehensive guide for developers and product teams"
        },
        {
          title: "Tool Comparisons",
          url: "https://posthog.com/docs/comparisons",
          type: "article",
          description: "Comparisons between PostHog and other platforms like Mixpanel or Google Analytics"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Plan gratuito disponible, precios según uso o autohospedaje",
      en: "Free plan available, pricing varies by usage or self-hosting"
    },
    difficulty: "intermediate",
    logo: "https://w7.pngwing.com/pngs/534/147/png-transparent-posthog-full-logo-tech-companies-thumbnail.png",
    slug: "posthog",
    featured: false,
    url: "https://posthog.com/"
  },
  {
    id: "146",
    tags: ["Top"],
    name: "Openpanel",
    description: {
      es: "Plataforma moderna de analítica de productos enfocada en el crecimiento",
      en: "Modern product analytics platform focused on growth"
    },
    detailedDescription: {
      es: "Openpanel es una herramienta de analítica de productos diseñada para ayudar a equipos de crecimiento, producto y marketing a tomar decisiones basadas en datos reales. Ofrece análisis en tiempo real, segmentación avanzada, embudos de conversión, cohortes y más. Se destaca por su enfoque visual e intuitivo, y por no requerir un equipo de datos para su implementación.",
      en: "Openpanel is a product analytics tool built to help growth, product, and marketing teams make data-driven decisions. It provides real-time analytics, advanced segmentation, conversion funnels, cohorts, and more. It stands out for its visual, intuitive interface and ease of use without needing a dedicated data team."
    },
    useCases: {
      es: [
        "Seguimiento en tiempo real del comportamiento de usuarios",
        "Análisis de embudos de conversión y retención",
        "Segmentación dinámica de usuarios por eventos y atributos",
        "Medición de impacto de cambios en el producto",
        "Empoderamiento de equipos sin necesidad de soporte técnico"
      ],
      en: [
        "Real-time user behavior tracking",
        "Conversion and retention funnel analysis",
        "Dynamic user segmentation by events and attributes",
        "Measuring impact of product changes",
        "Empowering teams without technical support"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Openpanel",
          url: "https://openpanel.com/",
          type: "article",
          description: "Página principal con información sobre características y beneficios"
        },
        {
          title: "Documentación de Openpanel",
          url: "https://docs.openpanel.com/",
          type: "article",
          description: "Guía para comenzar con la integración y uso de la herramienta"
        },
        {
          title: "Precios y planes",
          url: "https://openpanel.com/pricing",
          type: "article",
          description: "Información sobre los diferentes planes de uso de Openpanel"
        }
      ],
      en: [
        {
          title: "Openpanel Official Site",
          url: "https://openpanel.com/",
          type: "article",
          description: "Main page with information about features and benefits"
        },
        {
          title: "Openpanel Docs",
          url: "https://docs.openpanel.com/",
          type: "article",
          description: "Guide to get started with integration and usage"
        },
        {
          title: "Pricing and Plans",
          url: "https://openpanel.com/pricing",
          type: "article",
          description: "Details on Openpanel's pricing tiers and usage limits"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Plan gratuito con funciones básicas, planes pagos según uso",
      en: "Free plan with basic features, paid tiers based on usage"
    },
    difficulty: "intermediate",
    logo: "https://images.seeklogo.com/logo-png/52/1/openpanel-logo-png_seeklogo-523771.png",
    slug: "openpanel",
    featured: false,
    url: "https://openpanel.com/"
  },
  {
    id: "147",
    tags: ["Top"],
    name: "Databutton",
    description: {
      es: "Plataforma de desarrollo impulsada por IA para crear apps sin saber programar",
      en: "AI-powered development platform to build apps without coding"
    },
    detailedDescription: {
      es: "Databutton es una plataforma que permite a cualquier persona crear aplicaciones web completas usando inteligencia artificial. A través de una interfaz sencilla y comandos en lenguaje natural, transforma ideas en software funcional. Ideal para emprendedores y equipos que desean automatizar tareas o lanzar productos sin necesidad de programadores.",
      en: "Databutton is a platform that enables anyone to build full web applications using AI. Through a simple interface and natural language commands, it turns ideas into functional software. Perfect for entrepreneurs and teams looking to automate tasks or launch products without developers."
    },
    useCases: {
      es: [
        "Crear aplicaciones web sin necesidad de programar",
        "Automatizar tareas con scripts en Python",
        "Desarrollar APIs y herramientas internas rápidamente",
        "Prototipar productos SaaS para validación temprana",
        "Conectar herramientas con agentes de IA como ChatGPT"
      ],
      en: [
        "Build web apps without coding",
        "Automate tasks using Python scripts",
        "Develop APIs and internal tools quickly",
        "Prototype SaaS products for early validation",
        "Connect tools with AI agents like ChatGPT"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Databutton",
          url: "https://databutton.com/",
          type: "article",
          description: "Página principal con información sobre la plataforma y sus capacidades"
        },
        {
          title: "Guía de introducción a Databutton",
          url: "https://docs.databutton.com/",
          type: "article",
          description: "Documentación oficial para comenzar a usar Databutton"
        },
        {
          title: "Modelo MCP para agentes",
          url: "https://databutton.com/mcp",
          type: "article",
          description: "Información sobre cómo conectar tus apps con asistentes de IA"
        }
      ],
      en: [
        {
          title: "Databutton Official Site",
          url: "https://databutton.com/",
          type: "article",
          description: "Homepage with platform overview and features"
        },
        {
          title: "Databutton Docs",
          url: "https://docs.databutton.com/",
          type: "article",
          description: "Official documentation to get started with Databutton"
        },
        {
          title: "MCP Protocol for AI Agents",
          url: "https://databutton.com/mcp",
          type: "article",
          description: "Details on connecting apps to AI assistants like ChatGPT"
        }
      ]
    },
    category: "apps",
    price: {
      es: "Plan gratuito con funciones limitadas. Planes pagos desde $20 USD al mes",
      en: "Free plan with limited features. Paid plans starting at $20/month"
    },
    difficulty: "beginner",
    logo: "https://blog.databutton.com/content/images/2024/04/db-icon.png",
    slug: "databutton",
    featured: false,
    url: "https://databutton.com/"
  },
  {
    id: "148",
    tags: ["YC"],
    name: "HelixDB",
    description: {
      es: "Base de datos híbrida de grafos y vectores diseñada para aplicaciones de IA modernas",
      en: "Hybrid graph and vector database built for modern AI applications"
    },
    detailedDescription: {
      es: "HelixDB es una base de datos open source escrita en Rust que combina capacidades de grafos y vectores, permitiendo búsquedas semánticas y análisis de relaciones complejas en un solo sistema. Es ideal para construir copilotos, asistentes de búsqueda, y soluciones basadas en RAG (retrieval-augmented generation).",
      en: "HelixDB is an open-source database written in Rust that combines graph and vector capabilities, enabling semantic search and complex relationship analysis in a single system. It’s ideal for building copilots, search assistants, and RAG-based solutions."
    },
    useCases: {
      es: [
        "Asistentes de IA con recuperación semántica",
        "Motores de búsqueda sobre documentos empresariales",
        "Mapeo y análisis de relaciones entre entidades (RAG)",
        "Sistemas de recomendación híbridos con grafos y vectores",
        "Capas de memoria para agentes de lenguaje (LLMs)"
      ],
      en: [
        "AI assistants with semantic retrieval",
        "Enterprise document search engines",
        "Entity relationship mapping and reasoning (RAG)",
        "Hybrid recommender systems with graphs and vectors",
        "Memory layers for language model agents (LLMs)"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de HelixDB",
          url: "https://www.helix-db.com/",
          type: "article",
          description: "Página principal con información técnica y casos de uso"
        },
        {
          title: "Repositorio GitHub de HelixDB",
          url: "https://github.com/HelixDB/helix-db",
          type: "article",
          description: "Código fuente y guía de instalación CLI"
        },
        {
          title: "Introducción a Helix",
          url: "https://www.helix-db.com/docs",
          type: "article",
          description: "Documentación oficial para comenzar a usar Helix"
        }
      ],
      en: [
        {
          title: "HelixDB Official Site",
          url: "https://www.helix-db.com/",
          type: "article",
          description: "Homepage with technical overview and use cases"
        },
        {
          title: "HelixDB GitHub Repository",
          url: "https://github.com/HelixDB/helix-db",
          type: "article",
          description: "Source code and CLI installation guide"
        },
        {
          title: "Helix Docs",
          url: "https://www.helix-db.com/docs",
          type: "article",
          description: "Official docs to get started with Helix"
        }
      ]
    },
    category: "technical",
    price: {
      es: "Gratis y de código abierto",
      en: "Free and open-source"
    },
    difficulty: "intermediate",
    logo: "https://cdn.worldvectorlogo.com/logos/helix.svg",
    slug: "helixdb",
    featured: false,
    url: "https://www.helix-db.com/"
  },
  {
    id: "149",
    tags: ["Top", "YC"],
    name: "Nomi",
    description: {
      es: "Copiloto de ventas impulsado por IA que mejora las llamadas en tiempo real",
      en: "AI sales copilot that improves calls in real time"
    },
    detailedDescription: {
      es: "Nomi es una plataforma de inteligencia artificial diseñada para asistir a equipos de ventas durante sus llamadas. Escucha en tiempo real, sugiere respuestas, toma notas automáticas y ayuda a cerrar más tratos. Ideal para equipos que buscan mejorar sus tasas de conversión y profesionalizar su proceso comercial.",
      en: "Nomi is an AI-powered platform built to assist sales teams during live calls. It listens in real time, suggests answers, takes automatic notes, and helps close more deals. Perfect for teams looking to improve conversion rates and professionalize their sales process."
    },
    useCases: {
      es: [
        "Mejorar las tasas de cierre en llamadas comerciales",
        "Entrenar nuevos vendedores con apoyo en tiempo real",
        "Reducir errores durante el pitch o la negociación",
        "Automatizar la toma de notas y sincronización con CRM",
        "Construir un playbook de ventas basado en datos"
      ],
      en: [
        "Improve closing rates in sales calls",
        "Train new reps with real-time coaching",
        "Reduce mistakes during pitches or negotiations",
        "Automate note-taking and CRM syncing",
        "Build a data-driven sales playbook"
      ]
    },
    resources: {
      es: [
        {
          "title": "Sitio oficial de Nomi",
          "url": "https://www.heynomi.com/",
          "type": "article",
          "description": "Plataforma y demo del copiloto de ventas con IA"
        }
      ],
      en: [
        {
          "title": "Nomi Official Website",
          "url": "https://www.heynomi.com/",
          "type": "article",
          "description": "Platform and demo of the AI sales copilot"
        }
      ]
    },
    category: "sales",
    price: {
      es: "Desde $30/usuario al mes (según plan)",
      en: "From $30/user per month (depending on plan)"
    },
    difficulty: "beginner",
    logo: "https://heynomi.com/images/nomi-logo.png",
    slug: "nomi",
    featured: true,
    url: "https://www.heynomi.com/"
  },
  {
    id: "150",
    tags: ["Top", "irrelevant"],
    name: "Profound",
    description: {
      es: "Analizador de visibilidad en motores de respuesta como ChatGPT, Perplexity y Gemini",
      en: "Visibility analyzer for answer engines like ChatGPT, Perplexity, and Gemini"
    },
    detailedDescription: {
      es: "Profound es una herramienta de análisis de Answer Engine Optimization (AEO) que permite evaluar qué tan bien posicionada está tu marca en las respuestas generadas por modelos de IA como ChatGPT, Gemini y Perplexity. Te ayuda a identificar oportunidades de contenido, auditar tus páginas existentes y descubrir preguntas clave donde tu empresa debería estar presente.",
      en: "Profound is an Answer Engine Optimization (AEO) analysis tool that helps evaluate how well your brand is positioned in AI-generated responses from tools like ChatGPT, Gemini, and Perplexity. It helps identify content opportunities, audit your existing pages, and uncover key questions where your brand should appear."
    },
    useCases: {
      es: [
        "Auditar si tu marca aparece en las respuestas de modelos como ChatGPT",
        "Identificar preguntas clave donde deberías posicionarte",
        "Optimizar contenido para motores de respuesta (AEO)",
        "Descubrir oportunidades de contenido en tu industria",
        "Compararte con competidores en visibilidad IA"
      ],
      en: [
        "Audit whether your brand appears in AI answers like ChatGPT",
        "Identify key questions where you should be visible",
        "Optimize content for answer engines (AEO)",
        "Uncover content opportunities in your industry",
        "Benchmark your AI visibility against competitors"
      ]
    },
    resources: {
      es: [
        {
          title: "Sitio oficial de Profound",
          url: "https://www.tryprofound.com/",
          type: "article",
          description: "Página principal con acceso a la herramienta y recursos de AEO"
        },
        {
          title: "Guía sobre qué es AEO",
          url: "https://www.tryprofound.com/guides/what-is-answer-engine-optimization",
          type: "article",
          description: "Artículo introductorio para entender Answer Engine Optimization"
        }
      ],
      en: [
        {
          title: "Profound Official Site",
          url: "https://www.tryprofound.com/",
          type: "article",
          description: "Homepage with access to the tool and AEO resources"
        },
        {
          title: "What is AEO Guide",
          url: "https://www.tryprofound.com/guides/what-is-answer-engine-optimization",
          type: "article",
          description: "Introductory article explaining Answer Engine Optimization"
        }
      ]
    },
    category: "aeo",
    price: {
      es: "Planes desde $29 USD/mes con prueba gratuita",
      en: "Plans from $29/month with free trial"
    },
    difficulty: "beginner",
    logo: "https://www.britopian.com/wp-content/uploads/2025/04/profound-ai-logo-300x300.png",
    slug: "profound",
    featured: true,
    url: "https://www.tryprofound.com/"
  }
  
  
  
  
];

export default tools;