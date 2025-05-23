// src/data/news.ts
import { NewsArticle } from "../types";

const news: NewsArticle[] = [
  {
    id: "1",
    title: {
      es: "OpenAI lanza GPT-4 Turbo con mayor velocidad y menor costo",
      en: "OpenAI launches GPT-4 Turbo with higher speed and lower cost"
    },
    summary: {
      es: "La nueva versión de GPT-4 promete revolucionar la automatización empresarial con mejores capacidades y precios más accesibles.",
      en: "The new version of GPT-4 promises to revolutionize business automation with better capabilities and more accessible prices."
    },
    content: {
      es: `OpenAI ha anunciado oficialmente el lanzamiento de GPT-4 Turbo, una versión mejorada de su modelo de inteligencia artificial más avanzado. Esta nueva iteración promete cambiar el panorama de la automatización empresarial con características que los empresarios han estado esperando.

## Principales mejoras

### Velocidad mejorada
La nueva versión procesa solicitudes hasta 3 veces más rápido que su predecesor, lo que significa respuestas casi instantáneas para tareas críticas de negocio.

### Reducción de costos
OpenAI ha reducido los precios en un 60%, haciendo que esta tecnología sea más accesible para pequeñas y medianas empresas.

### Mayor contexto
Ahora puede procesar documentos de hasta 128,000 tokens, equivalente a aproximadamente 300 páginas de texto.

## Impacto en los negocios

Para los empresarios, esto significa:
- **Atención al cliente 24/7** más eficiente
- **Análisis de documentos** masivos en segundos
- **Generación de contenido** a escala industrial
- **Automatización de procesos** complejos

## Disponibilidad

GPT-4 Turbo está disponible a partir de hoy para todos los usuarios de la API de OpenAI, con planes de integración gradual en ChatGPT Plus durante las próximas semanas.`,
      en: `OpenAI has officially announced the launch of GPT-4 Turbo, an improved version of its most advanced artificial intelligence model. This new iteration promises to change the landscape of business automation with features that entrepreneurs have been waiting for.

## Main improvements

### Enhanced speed
The new version processes requests up to 3 times faster than its predecessor, meaning almost instant responses for critical business tasks.

### Cost reduction
OpenAI has reduced prices by 60%, making this technology more accessible to small and medium businesses.

### Greater context
It can now process documents up to 128,000 tokens, equivalent to approximately 300 pages of text.

## Business impact

For entrepreneurs, this means:
- More efficient **24/7 customer service**
- **Document analysis** of massive files in seconds
- **Content generation** at industrial scale
- **Process automation** for complex workflows

## Availability

GPT-4 Turbo is available starting today for all OpenAI API users, with plans for gradual integration into ChatGPT Plus over the coming weeks.`
    },
    category: "ai-tools",
    publishDate: "2025-01-15",
    readTime: 5,
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    slug: "openai-gpt4-turbo-launch",
    tags: ["OpenAI", "GPT-4", "Automatización", "IA"],
    author: {
      name: "Mr. Irrelevant",
      avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
    }
  },
  {
    id: "2",
    title: {
      es: "5 Herramientas de IA que están transformando el marketing digital en 2025",
      en: "5 AI Tools that are transforming digital marketing in 2025"
    },
    summary: {
      es: "Descubre las herramientas más innovadoras que están ayudando a las empresas a automatizar sus estrategias de marketing y aumentar sus conversiones.",
      en: "Discover the most innovative tools that are helping companies automate their marketing strategies and increase their conversions."
    },
    content: {
      es: `El marketing digital está experimentando una revolución silenciosa gracias a la inteligencia artificial. Las empresas que adoptan estas tecnologías están viendo resultados extraordinarios en sus campañas.

## 1. Jasper AI - Copywriting inteligente

Jasper se ha convertido en el estándar de oro para la creación de contenido persuasivo. Su capacidad para generar copy que convierte ha ayudado a miles de empresas a mejorar sus tasas de conversión.

**Resultados típicos:**
- 40% de mejora en tasas de apertura de emails
- 25% de aumento en conversiones de landing pages
- 60% de reducción en tiempo de creación de contenido

## 2. Midjourney - Diseño visual automático

La creación de imágenes para campañas ya no requiere diseñadores costosos. Midjourney permite crear visuales impactantes en minutos.

## 3. Claude AI - Análisis de datos profundo

Excelente para analizar métricas de marketing y encontrar insights accionables en grandes volúmenes de datos.

## 4. Runway ML - Video marketing automatizado

La producción de video se ha democratizado completamente con herramientas como Runway ML.

## 5. Copy.ai - Multiplicador de contenido

Perfecta para crear variaciones de anuncios y contenido para testing A/B masivo.

## Conclusión

Estas herramientas no son solo tendencias pasajeras; representan el futuro del marketing digital. Las empresas que las adopten ahora tendrán una ventaja competitiva significativa.`,
      en: `Digital marketing is experiencing a silent revolution thanks to artificial intelligence. Companies adopting these technologies are seeing extraordinary results in their campaigns.

## 1. Jasper AI - Smart copywriting

Jasper has become the gold standard for creating persuasive content. Its ability to generate converting copy has helped thousands of companies improve their conversion rates.

**Typical results:**
- 40% improvement in email open rates
- 25% increase in landing page conversions
- 60% reduction in content creation time

## 2. Midjourney - Automatic visual design

Creating images for campaigns no longer requires expensive designers. Midjourney allows creating impactful visuals in minutes.

## 3. Claude AI - Deep data analysis

Excellent for analyzing marketing metrics and finding actionable insights in large volumes of data.

## 4. Runway ML - Automated video marketing

Video production has been completely democratized with tools like Runway ML.

## 5. Copy.ai - Content multiplier

Perfect for creating ad variations and content for massive A/B testing.

## Conclusion

These tools are not just passing trends; they represent the future of digital marketing. Companies that adopt them now will have a significant competitive advantage.`
    },
    category: "tutorials",
    publishDate: "2025-01-12",
    readTime: 8,
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    slug: "5-ai-tools-marketing-2025",
    tags: ["Marketing Digital", "IA", "Herramientas", "Automatización"],
    author: {
      name: "Mr. Irrelevant",
      avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
    }
  },
  {
    id: "3",
    title: {
      es: "Google anuncia Gemini Ultra: El competidor directo de GPT-4",
      en: "Google announces Gemini Ultra: The direct competitor to GPT-4"
    },
    summary: {
      es: "La nueva IA de Google promete superar a ChatGPT en capacidades multimodales y razonamiento complejo.",
      en: "Google's new AI promises to surpass ChatGPT in multimodal capabilities and complex reasoning."
    },
    content: {
      es: `Google ha lanzado oficialmente Gemini Ultra, su respuesta más ambiciosa a ChatGPT y GPT-4. Esta nueva IA multimodal promete revolucionar la forma en que las empresas interactúan con la inteligencia artificial.

## Características destacadas

### Capacidades multimodales
Gemini Ultra puede procesar simultáneamente texto, imágenes, audio y video, ofreciendo una experiencia más rica e intuitiva.

### Razonamiento avanzado
Supera a GPT-4 en tareas de razonamiento complejo y resolución de problemas matemáticos.

### Integración con Google Workspace
Se integra nativamente con Gmail, Google Docs, Sheets y Drive, facilitando la adopción empresarial.

## Impacto empresarial

Para los negocios, Gemini Ultra representa:
- **Análisis visual** de documentos y presentaciones
- **Automatización avanzada** de workflows
- **Asistencia inteligente** en reuniones virtuales
- **Procesamiento multimodal** de datos

## Disponibilidad y precios

Gemini Ultra estará disponible a partir de febrero 2025, con un modelo de precios competitivo que desafía directamente a OpenAI.

La guerra de las IA ha comenzado oficialmente, y los empresarios son los grandes beneficiados.`,
      en: `Google has officially launched Gemini Ultra, its most ambitious response to ChatGPT and GPT-4. This new multimodal AI promises to revolutionize how businesses interact with artificial intelligence.

## Key features

### Multimodal capabilities
Gemini Ultra can simultaneously process text, images, audio, and video, offering a richer and more intuitive experience.

### Advanced reasoning
It surpasses GPT-4 in complex reasoning tasks and mathematical problem-solving.

### Google Workspace integration
It integrates natively with Gmail, Google Docs, Sheets, and Drive, facilitating enterprise adoption.

## Business impact

For businesses, Gemini Ultra represents:
- **Visual analysis** of documents and presentations
- **Advanced automation** of workflows
- **Smart assistance** in virtual meetings
- **Multimodal processing** of data

## Availability and pricing

Gemini Ultra will be available starting February 2025, with a competitive pricing model that directly challenges OpenAI.

The AI war has officially begun, and entrepreneurs are the big winners.`
    },
    category: "industry-news",
    publishDate: "2025-01-10",
    readTime: 6,
    featured: false,
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=400&fit=crop",
    slug: "google-gemini-ultra-announcement",
    tags: ["Google", "Gemini", "IA", "Competencia"],
    author: {
      name: "Mr. Irrelevant",
      avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
    }
  },
  {
  "id": "4",
  "title": {
    "es": "Meta presenta Llama 3: La nueva generación de modelos de lenguaje",
    "en": "Meta introduces Llama 3: The next generation of language models"
  },
  "summary": {
    "es": "Meta lanza Llama 3, una nueva versión de su modelo de lenguaje de código abierto, con mejoras en precisión y eficiencia.",
    "en": "Meta launches Llama 3, a new version of its open-source language model, with improvements in accuracy and efficiency."
  },
  "content": {
    "es": "Meta ha presentado Llama 3, la última iteración de su modelo de lenguaje de código abierto. Esta nueva versión destaca por mejoras significativas en la precisión del lenguaje natural y la eficiencia computacional, permitiendo a los desarrolladores crear aplicaciones más inteligentes y accesibles. Llama 3 está diseñada para funcionar en dispositivos de bajos recursos, democratizando aún más el acceso a la inteligencia artificial.",
    "en": "Meta has introduced Llama 3, the latest iteration of its open-source language model. This new version stands out for significant improvements in natural language accuracy and computational efficiency, enabling developers to create smarter and more accessible applications. Llama 3 is designed to run on low-resource devices, further democratizing access to artificial intelligence."
  },
  "category": "ai-tools",
  "publishDate": "2025-03-20",
  "readTime": 6,
  "featured": true,
  "image": "https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?w=800&h=400&fit=crop",
  "slug": "meta-llama-3-launch",
  "tags": ["Meta", "Llama", "IA", "Open Source"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "5",
  "title": {
    "es": "DeepMind desarrolla un nuevo sistema de IA capaz de resolver problemas de matemáticas avanzadas",
    "en": "DeepMind develops new AI system capable of solving advanced math problems"
  },
  "summary": {
    "es": "DeepMind ha creado una inteligencia artificial que resuelve problemas matemáticos complejos con una precisión sin precedentes.",
    "en": "DeepMind has created an artificial intelligence that solves complex mathematical problems with unprecedented accuracy."
  },
  "content": {
    "es": "DeepMind, la división de inteligencia artificial de Alphabet, ha presentado un nuevo sistema de IA capaz de resolver problemas matemáticos de alto nivel, incluyendo ecuaciones diferenciales y geometría avanzada. Este logro supone un avance notable en el razonamiento abstracto de las máquinas y abre nuevas posibilidades para la investigación científica y la educación. El sistema ya está siendo probado en colaboración con instituciones académicas y promete transformar la forma en que se enseñan y resuelven problemas matemáticos complejos.",
    "en": "DeepMind, Alphabet's artificial intelligence division, has introduced a new AI system capable of solving high-level mathematical problems, including differential equations and advanced geometry. This achievement marks a significant advance in machine abstract reasoning and opens new possibilities for scientific research and education. The system is already being tested in collaboration with academic institutions and promises to transform the way complex mathematical problems are taught and solved."
  },
  "category": "ai-research",
  "publishDate": "2025-04-05",
  "readTime": 6,
  "featured": false,
  "image": "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=400&fit=crop",
  "slug": "deepmind-math-ai",
  "tags": ["DeepMind", "IA", "Matemáticas", "Investigación"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "6",
  "title": {
    "es": "Científicos desarrollan visión robótica 'sobrehumana' capaz de ver a través de humo y lluvia",
    "en": "Scientists develop 'superhuman' robotic vision able to see through smoke and rain"
  },
  "summary": {
    "es": "Un nuevo sistema robótico permite ver a través de humo espeso, lluvia intensa e incluso a la vuelta de las esquinas, superando las limitaciones de la visión humana.",
    "en": "A new robotic system enables seeing through thick smoke, heavy rain, and even around corners, surpassing the limitations of human vision."
  },
  "content": {
    "es": "Científicos han desarrollado un sistema robótico de visión que supera las capacidades humanas, permitiendo a los robots ver a través de humo espeso, lluvia intensa y detectar objetos ocultos a la vuelta de las esquinas. Esta tecnología utiliza algoritmos avanzados y sensores especializados para reconstruir imágenes en condiciones extremas, abriendo nuevas posibilidades en seguridad, rescate y automatización industrial. El avance representa un hito importante en la robótica y la inteligencia artificial aplicada, con potencial para transformar industrias enteras y salvar vidas en situaciones de desastre[2].",
    "en": "Scientists have developed a robotic vision system that surpasses human capabilities, allowing robots to see through thick smoke, heavy rain, and detect objects hidden around corners. This technology uses advanced algorithms and specialized sensors to reconstruct images under extreme conditions, opening new possibilities in security, rescue, and industrial automation. The breakthrough represents a major milestone in robotics and applied artificial intelligence, with the potential to transform entire industries and save lives in disaster scenarios[2]."
  },
  "category": "ai-research",
  "publishDate": "2025-02-25",
  "readTime": 5,
  "featured": true,
  "image": "https://images.unsplash.com/photo-1635070041078-e3630be46b51?w=800&h=400&fit=crop",
  "slug": "superhuman-robotic-vision",
  "tags": ["Robótica", "IA", "Visión artificial", "Investigación"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "7",
  "title": {
    "es": "NVIDIA anuncia GPUs cuánticas híbridas para acelerar la inteligencia artificial",
    "en": "NVIDIA announces hybrid quantum GPUs to accelerate artificial intelligence"
  },
  "summary": {
    "es": "NVIDIA presenta una nueva generación de GPUs que combinan procesamiento clásico y cuántico, prometiendo un salto en el rendimiento de IA.",
    "en": "NVIDIA unveils a new generation of GPUs combining classical and quantum processing, promising a leap in AI performance."
  },
  "content": {
    "es": "NVIDIA ha sorprendido al sector tecnológico con el anuncio de sus primeras GPUs híbridas, que integran procesamiento clásico y cuántico en un solo chip. Esta innovación permitirá acelerar algoritmos de inteligencia artificial complejos y resolver problemas que antes eran inalcanzables para la computación tradicional. Los primeros prototipos ya están siendo probados en centros de investigación y se espera su llegada al mercado para finales de 2025. Expertos afirman que este avance podría marcar el inicio de una nueva era en la computación de alto rendimiento.",
    "en": "NVIDIA has surprised the tech sector with the announcement of its first hybrid GPUs, integrating classical and quantum processing on a single chip. This innovation will accelerate complex AI algorithms and solve problems previously unreachable by traditional computing. The first prototypes are already being tested in research centers, with market release expected by the end of 2025. Experts claim this breakthrough could mark the beginning of a new era in high-performance computing."
  },
  "category": "industry-news",
  "publishDate": "2025-05-10",
  "readTime": 5,
  "featured": true,
  "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
  "slug": "nvidia-hybrid-quantum-gpu",
  "tags": ["NVIDIA", "GPU", "Computación cuántica", "IA"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "8",
  "title": {
    "es": "Microsoft lanza Copilot X: IA integrada en Windows y Office para todos los usuarios",
    "en": "Microsoft launches Copilot X: AI integrated into Windows and Office for all users"
  },
  "summary": {
    "es": "Microsoft presenta Copilot X, la nueva generación de asistentes de IA que estará disponible de forma nativa en Windows 12 y en la suite Office, facilitando la productividad diaria.",
    "en": "Microsoft introduces Copilot X, the new generation of AI assistants natively available in Windows 12 and Office suite, enhancing daily productivity."
  },
  "content": {
    "es": "Microsoft ha anunciado el lanzamiento global de Copilot X, su asistente de inteligencia artificial más avanzado, que estará integrado en Windows 12 y en todas las aplicaciones de Office. Copilot X permitirá a los usuarios redactar correos, resumir documentos, generar presentaciones y automatizar tareas repetitivas con comandos de lenguaje natural. La compañía asegura que la privacidad y la seguridad de los datos han sido reforzadas, y que la herramienta estará disponible para consumidores y empresas a partir de septiembre de 2025.",
    "en": "Microsoft has announced the global launch of Copilot X, its most advanced AI assistant, which will be integrated into Windows 12 and all Office applications. Copilot X will allow users to draft emails, summarize documents, generate presentations, and automate repetitive tasks using natural language commands. The company states that data privacy and security have been enhanced, and the tool will be available for consumers and businesses starting September 2025."
  },
  "category": "ai-tools",
  "publishDate": "2025-05-18",
  "readTime": 5,
  "featured": true,
  "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
  "slug": "microsoft-copilot-x-launch",
  "tags": ["Microsoft", "Copilot", "Windows", "Office", "IA"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "9",
  "title": {
    "es": "Apple revela su propio modelo de IA generativa: Apple Intelligence",
    "en": "Apple unveils its own generative AI model: Apple Intelligence"
  },
  "summary": {
    "es": "Apple presenta 'Apple Intelligence', su primer modelo de IA generativa integrado en todos sus dispositivos, con enfoque en privacidad y personalización.",
    "en": "Apple introduces 'Apple Intelligence', its first generative AI model integrated across all its devices, focusing on privacy and personalization."
  },
  "content": {
    "es": "En el marco de la WWDC 2025, Apple anunció 'Apple Intelligence', su sistema de IA generativa diseñado para funcionar de manera nativa en iPhone, iPad y Mac. Este modelo permite redactar textos, resumir correos, crear imágenes y automatizar tareas cotidianas, todo con procesamiento local para garantizar la privacidad del usuario. Apple Intelligence estará disponible en la próxima actualización de iOS y macOS, y promete transformar la experiencia digital de millones de usuarios.",
    "en": "At WWDC 2025, Apple announced 'Apple Intelligence', its generative AI system designed to run natively on iPhone, iPad, and Mac. This model enables text drafting, email summarization, image creation, and daily task automation, all with on-device processing to ensure user privacy. Apple Intelligence will be available in the upcoming iOS and macOS updates, promising to transform the digital experience for millions of users."
  },
  "category": "ai-tools",
  "publishDate": "2025-06-03",
  "readTime": 5,
  "featured": true,
  "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop",
  "slug": "apple-intelligence-launch",
  "tags": ["Apple", "IA", "Generative AI", "Privacidad"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "10",
  "title": {
    "es": "IBM presenta Watson Code Assistant: IA que programa junto a los desarrolladores",
    "en": "IBM launches Watson Code Assistant: AI that codes alongside developers"
  },
  "summary": {
    "es": "IBM lanza Watson Code Assistant, una herramienta de inteligencia artificial que ayuda a los desarrolladores a escribir, depurar y optimizar código en tiempo real.",
    "en": "IBM launches Watson Code Assistant, an artificial intelligence tool that helps developers write, debug, and optimize code in real time."
  },
  "content": {
    "es": "IBM ha presentado Watson Code Assistant, una nueva herramienta de IA diseñada para integrarse en los entornos de desarrollo más populares. Esta solución permite a los programadores recibir sugerencias de código, detectar errores y optimizar algoritmos al instante. Watson Code Assistant soporta varios lenguajes de programación y utiliza aprendizaje profundo para adaptarse al estilo de cada usuario. IBM afirma que esta herramienta puede reducir el tiempo de desarrollo hasta en un 35% y mejorar la calidad del software entregado.",
    "en": "IBM has introduced Watson Code Assistant, a new AI tool designed to integrate with the most popular development environments. This solution allows programmers to receive code suggestions, detect bugs, and optimize algorithms instantly. Watson Code Assistant supports multiple programming languages and uses deep learning to adapt to each user's style. IBM claims this tool can reduce development time by up to 35% and improve the quality of delivered software."
  },
  "category": "ai-tools",
  "publishDate": "2025-04-28",
  "readTime": 5,
  "featured": false,
  "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
  "slug": "ibm-watson-code-assistant",
  "tags": ["IBM", "Watson", "Programación", "IA"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "11",
  "title": {
    "es": "Samsung presenta baterías de grafeno para smartphones con carga ultra rápida",
    "en": "Samsung unveils graphene batteries for smartphones with ultra-fast charging"
  },
  "summary": {
    "es": "Samsung anuncia la llegada de baterías de grafeno para móviles, permitiendo cargas completas en menos de 10 minutos y mayor durabilidad.",
    "en": "Samsung announces the arrival of graphene batteries for smartphones, enabling full charges in under 10 minutes and greater durability."
  },
  "content": {
    "es": "Samsung ha revelado su nueva generación de baterías de grafeno para smartphones, una tecnología que promete revolucionar la industria móvil. Estas baterías permiten cargas completas en menos de 10 minutos y ofrecen una vida útil hasta cinco veces mayor que las de iones de litio. Además, son más ligeras y resistentes al calor, lo que mejora la seguridad y el rendimiento de los dispositivos. La compañía planea lanzar sus primeros modelos equipados con esta tecnología a finales de 2025.",
    "en": "Samsung has unveiled its new generation of graphene batteries for smartphones, a technology set to revolutionize the mobile industry. These batteries allow full charges in under 10 minutes and offer up to five times the lifespan of lithium-ion batteries. They are also lighter and more heat-resistant, improving both device safety and performance. The company plans to launch its first models equipped with this technology by the end of 2025."
  },
  "category": "technology-news",
  "publishDate": "2025-05-21",
  "readTime": 5,
  "featured": true,
  "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=400&fit=crop",
  "slug": "samsung-graphene-batteries-launch",
  "tags": ["Samsung", "Baterías", "Grafeno", "Smartphones", "Innovación"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "12",
  "title": {
    "es": "Boston Dynamics introduce robots de asistencia doméstica con IA avanzada",
    "en": "Boston Dynamics introduces home assistant robots with advanced AI"
  },
  "summary": {
    "es": "Boston Dynamics lanza una nueva línea de robots domésticos equipados con inteligencia artificial para ayudar en tareas del hogar y brindar compañía.",
    "en": "Boston Dynamics launches a new line of home robots equipped with artificial intelligence to assist with household tasks and provide companionship."
  },
  "content": {
    "es": "Boston Dynamics ha presentado sus primeros robots de asistencia doméstica, capaces de realizar tareas como limpieza, organización y monitoreo del hogar. Gracias a su avanzada IA, estos robots pueden adaptarse a los hábitos y preferencias de los usuarios, interactuar de forma natural y aprender nuevas tareas con el tiempo. La compañía destaca que la seguridad y la privacidad han sido prioridades en el diseño, y que los robots podrán integrarse con otros dispositivos inteligentes del hogar. El lanzamiento comercial está previsto para finales de 2025.",
    "en": "Boston Dynamics has unveiled its first home assistant robots, capable of performing tasks such as cleaning, organizing, and home monitoring. Thanks to their advanced AI, these robots can adapt to users' habits and preferences, interact naturally, and learn new tasks over time. The company emphasizes that safety and privacy were top priorities in the design, and that the robots will be able to integrate with other smart home devices. Commercial launch is scheduled for late 2025."
  },
  "category": "technology-news",
  "publishDate": "2025-05-15",
  "readTime": 5,
  "featured": false,
  "image": "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=800&h=400&fit=crop",
  "slug": "boston-dynamics-home-robots",
  "tags": ["Boston Dynamics", "Robots", "IA", "Domótica"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  "id": "13",
  "title": {
    "es": "Amazon lanza Alexa Pro: un asistente de voz con IA emocional y capacidades multimodales",
    "en": "Amazon launches Alexa Pro: a voice assistant with emotional AI and multimodal capabilities"
  },
  "summary": {
    "es": "Amazon presenta Alexa Pro, la nueva generación de su asistente inteligente, ahora capaz de reconocer emociones y responder con empatía, además de analizar imágenes y sonidos.",
    "en": "Amazon introduces Alexa Pro, the new generation of its smart assistant, now able to recognize emotions and respond empathetically, as well as analyze images and sounds."
  },
  "content": {
    "es": "Amazon ha anunciado Alexa Pro, la evolución más avanzada de su asistente de voz. Gracias a la integración de IA emocional, Alexa Pro puede identificar el estado de ánimo del usuario a través del tono de voz y adaptar sus respuestas para ofrecer una experiencia más humana y empática. Además, incorpora capacidades multimodales que le permiten analizar imágenes y sonidos del entorno, facilitando tareas como la identificación de objetos o la detección de anomalías en el hogar. Alexa Pro estará disponible en nuevos dispositivos Echo a partir de octubre de 2025.",
    "en": "Amazon has announced Alexa Pro, the most advanced evolution of its voice assistant. Thanks to the integration of emotional AI, Alexa Pro can identify the user's mood through voice tone and adapt its responses to offer a more human and empathetic experience. It also incorporates multimodal capabilities that allow it to analyze images and sounds from the environment, facilitating tasks such as object identification or anomaly detection at home. Alexa Pro will be available on new Echo devices starting October 2025."
  },
  "category": "ai-tools",
  "publishDate": "2025-05-20",
  "readTime": 5,
  "featured": false,
  "image": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=400&fit=crop",
  "slug": "amazon-alexa-pro-launch",
  "tags": ["Amazon", "Alexa", "IA emocional", "Multimodal", "Asistentes"],
  "author": {
    "name": "Mr. Irrelevant",
    "avatar": "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  id: "14",
  title: {
    es: "Google I/O 2025: Gemini Ultra, Veo 3 y el futuro de la IA según Google",
    en: "Google I/O 2025: Gemini Ultra, Veo 3, and the Future of AI According to Google"
  },
  summary: {
    es: "En su conferencia anual, Google presentó Gemini Ultra, el generador de video Veo 3 y nuevas herramientas de IA que redefinen la búsqueda y la productividad.",
    en: "At its annual conference, Google unveiled Gemini Ultra, the Veo 3 video generator, and new AI tools that redefine search and productivity."
  },
  content: {
    es: `Google celebró su conferencia anual para desarrolladores, Google I/O 2025, en el Shoreline Amphitheatre de Mountain View, California. Durante el evento, la compañía presentó una serie de innovaciones centradas en la inteligencia artificial.

**Gemini Ultra**

Google anunció Gemini Ultra, disponible inicialmente en EE. UU., que ofrece el "nivel más alto de acceso" a sus aplicaciones y servicios impulsados por IA. Con un precio de $249.99 al mes, incluye el generador de video Veo 3, la nueva aplicación de edición de video Flow y una capacidad de IA avanzada llamada modo Deep Think de Gemini 2.5 Pro, que aún no se ha lanzado.

**Veo 3**

Veo 3 es el nuevo modelo de generación de video de Google que puede generar efectos de sonido, ruidos de fondo e incluso diálogos para acompañar los videos que crea. Veo 3 mejora la calidad de las imágenes generadas en comparación con su predecesor, Veo 2.

**Imagen 4**

Google también presentó Imagen 4, su generador de imágenes impulsado por IA, que es más rápido que Imagen 3 y capaz de renderizar detalles finos como telas, gotas de agua y pelaje animal, en estilos tanto fotorrealistas como abstractos.

**Modo IA en la Búsqueda**

La compañía introdujo el Modo IA en su motor de búsqueda, permitiendo a los usuarios interactuar con un agente de IA que puede visitar páginas web, resumirlas y ayudar en tareas como compras en línea.

**Gafas inteligentes Android XR**

Google mostró gafas inteligentes basadas en Android XR, desarrolladas en colaboración con Gentle Monster y Warby Parker. Estas gafas cuentan con cámara, micrófono y altavoces, y pueden mostrar notificaciones en una pantalla opcional en la lente.

Para más detalles, puedes consultar el artículo completo en TechCrunch: https://techcrunch.com/2025/05/20/google-i-o-2025-everything-announced-at-this-years-developer-conference/`,
    en: `Google held its annual developer conference, Google I/O 2025, at the Shoreline Amphitheatre in Mountain View, California. During the event, the company introduced a series of innovations focused on artificial intelligence.

**Gemini Ultra**

Google announced Gemini Ultra, initially available in the U.S., offering the "highest level of access" to its AI-powered apps and services. Priced at $249.99 per month, it includes the Veo 3 video generator, the new Flow video editing app, and an advanced AI capability called Deep Think mode of Gemini 2.5 Pro, which hasn't launched yet.

**Veo 3**

Veo 3 is Google's new video generation model that can generate sound effects, background noises, and even dialogue to accompany the videos it creates. Veo 3 improves the quality of footage it can generate compared to its predecessor, Veo 2.

**Imagen 4**

Google also introduced Imagen 4, its AI-powered image generator, which is faster than Imagen 3 and capable of rendering fine details like fabrics, water droplets, and animal fur, in both photorealistic and abstract styles.

**AI Mode in Search**

The company introduced AI Mode in its search engine, allowing users to interact with an AI agent that can visit web pages, summarize them, and assist in tasks like online shopping.

**Android XR Smart Glasses**

Google showcased smart glasses based on Android XR, developed in collaboration with Gentle Monster and Warby Parker. These glasses feature a camera, microphone, and speakers, and can display notifications on an optional display on the lens.

For more details, you can read the full article on TechCrunch: https://techcrunch.com/2025/05/20/google-i-o-2025-everything-announced-at-this-years-developer-conference/`
  },
  category: "ai-tools",
  publishDate: "2025-05-20",
  readTime: 6,
  featured: true,
  image: "ttps://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
  slug: "google-io-2025-announcements",
  tags: ["Google I/O", "Gemini Ultra", "Veo 3", "AI", "Android XR"],
  author: {
    name: "Mr. Irrelevant",
    avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  id: "15",
  title: {
    es: "OpenAI adquiere la startup de Jony Ive para desarrollar dispositivos de IA",
    en: "OpenAI Acquires Jony Ive's Startup to Develop AI Devices"
  },
  summary: {
    es: "OpenAI ha adquirido la empresa io, fundada por el exdiseñador de Apple Jony Ive, en una operación valorada en 6.500 millones de dólares, con el objetivo de crear una nueva generación de dispositivos impulsados por inteligencia artificial.",
    en: "OpenAI has acquired io, a company founded by former Apple designer Jony Ive, in a deal valued at $6.5 billion, aiming to develop a new generation of AI-powered devices."
  },
  content: {
    es: `OpenAI ha anunciado la adquisición de io, una startup de hardware fundada por el exdiseñador de Apple Jony Ive, en una operación valorada en 6.500 millones de dólares. Esta adquisición marca la entrada de OpenAI en el desarrollo de dispositivos físicos de inteligencia artificial, combinando su experiencia en software con el reconocido diseño de Ive.

El objetivo de esta colaboración es crear una nueva familia de dispositivos que integren la inteligencia artificial de manera más natural en la vida cotidiana, alejándose de las pantallas tradicionales y buscando una interacción más intuitiva con la tecnología. Aunque los detalles específicos sobre los productos aún no se han revelado, se espera que los primeros dispositivos resultantes de esta alianza se lancen en 2026.

Jony Ive y su firma de diseño, LoveFrom, asumirán responsabilidades creativas y de diseño en OpenAI, manteniéndose como una entidad independiente. Esta asociación refleja una visión compartida de desarrollar herramientas que inspiren y empoderen a los usuarios, redefiniendo la forma en que interactuamos con la inteligencia artificial.`,
    en: `OpenAI has announced the acquisition of io, a hardware startup founded by former Apple designer Jony Ive, in a deal valued at $6.5 billion. This acquisition marks OpenAI's entry into the development of physical AI devices, combining its software expertise with Ive's renowned design.

The collaboration aims to create a new family of devices that integrate artificial intelligence more naturally into daily life, moving away from traditional screens and seeking a more intuitive interaction with technology. While specific product details have not been disclosed, the first devices resulting from this partnership are expected to launch in 2026.

Jony Ive and his design firm, LoveFrom, will assume creative and design responsibilities at OpenAI, remaining as an independent entity. This partnership reflects a shared vision of developing tools that inspire and empower users, redefining how we interact with artificial intelligence.`
  },
  category: "ai-hardware",
  publishDate: "2025-05-21",
  readTime: 5,
  featured: true,
  image: "https://images.unsplash.com/photo-1687442136019-21780ecad995?w=800&h=400&fit=crop",
  slug: "openai-acquires-jony-ive-io",
  tags: ["OpenAI", "Jony Ive", "AI Devices", "Acquisition"],
  author: {
    name: "Mr. Irrelevant",
    avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  id: "16",
  title: {
    es: "Anthropic lanza Claude 4: modelos de IA con razonamiento avanzado y autonomía prolongada",
    en: "Anthropic Launches Claude 4: AI Models with Advanced Reasoning and Extended Autonomy"
  },
  summary: {
    es: "Anthropic presentó sus nuevos modelos de inteligencia artificial, Claude Opus 4 y Claude Sonnet 4, capaces de realizar tareas complejas y mantener operaciones autónomas durante horas.",
    en: "Anthropic unveiled its new AI models, Claude Opus 4 and Claude Sonnet 4, capable of performing complex tasks and maintaining autonomous operations for hours."
  },
  content: {
    es: `Durante su primera conferencia para desarrolladores, Anthropic lanzó dos nuevos modelos de inteligencia artificial: Claude Opus 4 y Claude Sonnet 4. Estos modelos, parte de la familia Claude 4, están diseñados para analizar grandes conjuntos de datos, ejecutar tareas de largo alcance y realizar acciones complejas.

**Claude Opus 4**

Opus 4 es el modelo más avanzado de Anthropic hasta la fecha, capaz de mantener un "esfuerzo enfocado" a lo largo de múltiples pasos en un flujo de trabajo. En pruebas con clientes, Opus 4 logró operar de forma autónoma durante casi siete horas, superando significativamente a su predecesor, Claude 3.7 Sonnet, que alcanzaba 45 minutos de autonomía. Este modelo ha demostrado ser superior en tareas de codificación y uso de herramientas, superando a competidores como Google Gemini 2.5 Pro y OpenAI's o3 y GPT-4.1 en evaluaciones específicas.

**Claude Sonnet 4**

Sonnet 4, diseñado como un reemplazo directo de Sonnet 3.7, ofrece mejoras en codificación y matemáticas, además de seguir instrucciones con mayor precisión. Ambos modelos pueden alternar entre razonamiento interno y uso de herramientas externas, como búsquedas web, para mejorar la calidad de sus respuestas. También pueden extraer y guardar hechos en "memoria" para manejar tareas de manera más confiable, construyendo lo que Anthropic describe como "conocimiento tácito" con el tiempo.

**Disponibilidad y precios**

Claude Opus 4 está disponible para usuarios de pago a través de la API de Anthropic, Amazon Bedrock y Google Vertex AI, con precios de $15 por millón de tokens de entrada y $75 por millón de tokens de salida. Claude Sonnet 4 está disponible tanto para usuarios gratuitos como de pago, con precios de $3 por millón de tokens de entrada y $15 por millón de tokens de salida.

Para más detalles, puedes consultar el artículo completo en TechCrunch: https://techcrunch.com/2025/05/22/anthropics-new-claude-4-ai-models-can-reason-over-many-steps/`,
    en: `During its inaugural developer conference, Anthropic launched two new AI models: Claude Opus 4 and Claude Sonnet 4. These models, part of the Claude 4 family, are designed to analyze large datasets, execute long-horizon tasks, and perform complex actions.

**Claude Opus 4**

Opus 4 is Anthropic's most advanced model to date, capable of maintaining "focused effort" across many steps in a workflow. In client tests, Opus 4 operated autonomously for nearly seven hours, significantly outperforming its predecessor, Claude 3.7 Sonnet, which achieved 45 minutes of autonomy. This model has demonstrated superiority in coding tasks and tool use, outperforming competitors like Google Gemini 2.5 Pro and OpenAI's o3 and GPT-4.1 in specific evaluations.

**Claude Sonnet 4**

Sonnet 4, designed as a direct replacement for Sonnet 3.7, offers improvements in coding and math, and follows instructions more precisely. Both models can alternate between internal reasoning and external tool use, such as web searches, to enhance response quality. They can also extract and save facts into "memory" to handle tasks more reliably, building what Anthropic describes as "tacit knowledge" over time.

**Availability and Pricing**

Claude Opus 4 is available to paying users via Anthropic's API, Amazon Bedrock, and Google Vertex AI, priced at $15 per million input tokens and $75 per million output tokens. Claude Sonnet 4 is available to both free and paid users, priced at $3 per million input tokens and $15 per million output tokens.

For more details, you can read the full article on TechCrunch: https://techcrunch.com/2025/05/22/anthropics-new-claude-4-ai-models-can-reason-over-many-steps/`
  },
  category: "ai-tools",
  publishDate: "2025-05-22",
  readTime: 6,
  featured: true,
  image: "https://images.unsplash.com/photo-1687442136019-21780ecad995?w=800&h=400&fit=crop",
  slug: "anthropic-claude-4-launch",
  tags: ["Anthropic", "Claude 4", "AI Models", "Opus 4", "Sonnet 4"],
  author: {
    name: "Mr. Irrelevant",
    avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
},
{
  id: "17",
  title: {
    es: "OpenAI presenta Codex: una nueva era en herramientas de codificación agenticas",
    en: "OpenAI Introduces Codex: A New Era in Agentic Coding Tools"
  },
  summary: {
    es: "OpenAI ha lanzado Codex, un agente de inteligencia artificial diseñado para automatizar tareas complejas de programación, marcando un avance significativo en las herramientas de codificación impulsadas por IA.",
    en: "OpenAI has launched Codex, an AI agent designed to automate complex programming tasks, marking a significant advancement in AI-powered coding tools."
  },
  content: {
    es: `OpenAI ha presentado Codex, un nuevo agente de inteligencia artificial que representa un paso adelante en las herramientas de codificación agenticas. A diferencia de los asistentes de código tradicionales que ofrecen autocompletado, Codex puede ejecutar tareas completas de desarrollo de software basadas en comandos de lenguaje natural.

Este agente es capaz de escribir código, identificar errores, ejecutar pruebas y explicar bases de código existentes. Integrado en ChatGPT, Codex permite a los usuarios interactuar con el agente a través de una interfaz conversacional, facilitando su uso tanto para desarrolladores como para no desarrolladores.

Codex forma parte de una nueva cohorte de herramientas de codificación agenticas que incluyen productos como Devin, SWE-Agent y OpenHands. Estas herramientas están diseñadas para operar de manera autónoma, permitiendo a los usuarios delegar tareas sin necesidad de interactuar directamente con el código generado.

Disponible inicialmente para suscriptores de ChatGPT Pro, Team y Enterprise, Codex se ejecuta en un entorno seguro y aislado, sin acceso a internet, y está diseñado para detectar y rechazar solicitudes de generación de código malicioso. Con este lanzamiento, OpenAI busca redefinir los flujos de trabajo de desarrollo de software y aumentar la productividad de los desarrolladores.`,
    en: `OpenAI has introduced Codex, a new artificial intelligence agent that represents a leap forward in agentic coding tools. Unlike traditional code assistants that offer autocomplete suggestions, Codex can execute complete software development tasks based on natural language commands.

This agent is capable of writing code, identifying bugs, running tests, and explaining existing codebases. Integrated into ChatGPT, Codex allows users to interact with the agent through a conversational interface, making it accessible to both developers and non-developers.

Codex is part of a new cohort of agentic coding tools that include products like Devin, SWE-Agent, and OpenHands. These tools are designed to operate autonomously, enabling users to delegate tasks without needing to interact directly with the generated code.

Initially available to ChatGPT Pro, Team, and Enterprise subscribers, Codex runs in a secure, isolated environment without internet access and is designed to detect and reject requests for malicious code generation. With this launch, OpenAI aims to redefine software development workflows and enhance developer productivity.`
  },
  category: "ai-tools",
  publishDate: "2025-05-20",
  readTime: 6,
  featured: true,
  image: "https://images.unsplash.com/photo-1687442136019-21780ecad995?w=800&h=400&fit=crop",
  slug: "openai-codex-launch",
  tags: ["OpenAI", "Codex", "Agentic Coding", "AI Tools"],
  author: {
    name: "Mr. Irrelevant",
    avatar: "https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png"
  }
}






];

export default news;