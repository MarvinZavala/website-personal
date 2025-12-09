
import localfyImage from "@assets/screenshot-1765160017897.png";
import onlyPicImage from "@assets/screenshot-1765160140194.png";
import negozappImage from "@assets/screenshot-1765218655116.png";
import zummitImage from "@assets/screenshot-1765219186328.png";
import strategikImage from "@assets/strategik-new.png";
import absPlumbingImage from "@assets/screenshot-1765219563334.png";
import twinHandymanImage from "@assets/screenshot-1765219596917.png";
import oasisImage from "@assets/screenshot-1765220011149.png";

export type Language = 'en' | 'es';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  role: string;
  year: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  technologies: string[];
  links: {
    live?: string;
    code?: string;
  };
}

export interface Content {
  nav: {
    work: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    stackTitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    viewWork: string;
    contactMe: string;
    techTitle: string;
    techSubtitle: string;
  };
  contactSection: {
    title: string;
    subtitle: string;
    role: string;
    available: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
    email: string;
    phone: string;
    socials: {
      github: string;
      linkedin: string;
      instagram: string;
    };
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
      company: string;
      impact: string;
    }[];
  };
  footer: {
    cta: string;
    rights: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    experience: string;
    roles: {
      highschool: { title: string; date: string; company: string };
      freelance: { title: string; date: string; company: string };
      projects: { title: string; date: string; company: string };
    };
    photoCaption: string;
  };
  caseStudy: {
    back: string;
    role: string;
    year: string;
    client: string;
    deliverables: string;
    challengeTitle: string;
    solutionTitle: string;
    resultTitle: string;
    notFound: string;
    techStack: string;
    viewLive: string;
    viewCode: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      features: string[];
      icon: string;
    }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  projects: Project[];
  skills: string[];
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      titlePart1: "Turning raw code into",
      titlePart2: "real products",
      subtitle: "I don't just write syntax; I build experiences. From local startups to AI art platforms, I create software that makes a difference.",
      stackTitle: "Tech Stack",
      projectsTitle: "Projects I've Built",
      projectsSubtitle: "Selected Work 2024-2025",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      techTitle: "Technologies",
      techSubtitle: "The raw materials of innovation.",
    },
    contactSection: {
      title: "Get in Touch",
      subtitle: "Ready to start a project?",
      role: "App & Web Developer",
      available: "Available for freelance",
      emailLabel: "Email",
      phoneLabel: "Phone",
      socialLabel: "Socials",
      email: "zavalarivas4@gmail.com",
      phone: "+1 (341) 219-7006",
      socials: {
        github: "https://github.com/MarvinZavala",
        linkedin: "https://www.linkedin.com/in/marvin-zavaladev/",
        instagram: "https://instagram.com/codemarvin",
      },
      cta: "Let's work together",
    },
    testimonials: {
      title: "Trusted by",
      subtitle: "Real results for real businesses.",
      items: [
        {
          quote: "Marvin didn't just build a website; he built our entire booking engine. Our emergency calls went up 40% in just the first month.",
          author: "Alex Rivera",
          role: "Owner",
          company: "Twin Handyman",
          impact: "40% Increase in Leads"
        },
        {
          quote: "We needed a platform that screamed 'trust' for our fintech users. Marvin delivered a pixel-perfect infrastructure that handles millions in transactions flawlessly.",
          author: "Sarah Chen",
          role: "CTO",
          company: "Zummit Payments",
          impact: "99.9% Uptime Scale"
        },
        {
          quote: "Speed and precision. Automating our client onboarding with AI saved us hours every week. The ROI on this development was immediate.",
          author: "David Mendez",
          role: "Director",
          company: "Strategik Agency",
          impact: "20hrs/week Saved"
        },
        {
          quote: "Building an AI art platform requires deep technical skill. Marvin made complex image processing look simple for the end user.",
          author: "Elena K.",
          role: "Co-Founder",
          company: "OnlyPic Art",
          impact: "10K+ AI Generations"
        }
      ]
    },
    process: {
      title: "How I Work",
      subtitle: "Simple steps. Serious results.",
      steps: [
        {
          number: "01",
          title: "Blueprint",
          description: "We define the roadmap and architecture. No guessing, just planning."
        },
        {
          number: "02",
          title: "Build",
          description: "Agile sprints with clean, scalable code. You see progress every week."
        },
        {
          number: "03",
          title: "Polish",
          description: "Rigorous testing for speed, SEO, and zero bugs. Performance is priority."
        },
        {
          number: "04",
          title: "Launch",
          description: "Smooth deployment to the cloud. I handle the servers; you handle the growth."
        }
      ]
    },
    footer: {
      cta: "Let's build something great.",
      rights: "© 2024 Marvin Zavala. All rights reserved.",
    },
    about: {
      title: "Code is not just about logic. It's about solving real human problems.",
      p1: "I bridge the gap between creative design and technical implementation.",
      p2: "My philosophy is rooted in simplicity—solving real problems with clean, efficient code.",
      p3: "Always exploring new technologies to build better digital experiences.",
      experience: "Education & Experience",
      roles: {
        highschool: { title: "High School Student", date: "Present", company: "High School" },
        freelance: { title: "Freelance Developer", date: "2023 — Present", company: "Self-Employed" },
        projects: { title: "Lead Developer", date: "2022 — Present", company: "Personal Projects" },
      },
      photoCaption: "Always learning, always building.",
    },
    services: {
      title: "Premium Services",
      subtitle: "Comprehensive technical solutions for your business",
      items: [
        {
          title: "Full Stack Web",
          description: "High-performance websites that convert visitors into customers.",
          features: ["React & Next.js", "SEO Optimized", "Interactive UI"],
          icon: "web"
        },
        {
          title: "Mobile Apps",
          description: "Native applications for iOS and Android.",
          features: ["React Native / Expo", "Offline Support", "App Store Deploy"],
          icon: "mobile"
        },
        {
          title: "Cloud & Backend",
          description: "Scalable infrastructure that grows with you.",
          features: ["AWS & Firebase", "Database Design", "API Development"],
          icon: "cloud"
        },
        {
          title: "UI/UX Design",
          description: "Digital experiences that look and feel professional.",
          features: ["Modern Aesthetics", "Prototipado", "Design Systems"],
          icon: "design"
        },
        {
          title: "AI Integrations",
          description: "Smart applications powered by LLMs like Claude, ChatGPT & Gemini.",
          features: ["Custom RAG Chatbots", "Process Automation", "OpenAI & Anthropic API"],
          icon: "ai"
        }
      ]
    },
    caseStudy: {
      back: "Back to Work",
      role: "Role",
      year: "Year",
      client: "Client",
      deliverables: "Deliverables",
      challengeTitle: "The Challenge",
      solutionTitle: "The Solution",
      resultTitle: "The Result",
      notFound: "Project not found",
      techStack: "Technologies Used",
      viewLive: "Visit Website",
      viewCode: "View Code",
    },
    skills: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "React Native", "PostgreSQL", "Figma"],
    projects: [
      // BLUE Group
      {
        id: "twin-handyman",
        title: "Twin Handyman & Plumbing",
        category: "Service Business • Lead Gen",
        image: twinHandymanImage,
        description: "Bay Area's #1 trusted plumbing and handyman service website. Features instant virtual estimates, 24/7 emergency booking, and a showcase of over 500+ happy clients.",
        role: "Web Developer",
        year: "2024",
        client: "Twin Handyman",
        challenge: "The client needed to stand out in a competitive market and streamline their booking process for emergency services.",
        solution: "Built a high-trust, conversion-focused site with a 'Free Virtual Estimate' feature and clear emergency call-to-actions. Integrated review showcasing to build instant credibility.",
        result: "The new site has cemented their reputation as the #1 trusted local experts, driving a steady stream of high-value leads and reducing administrative time for estimates.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
        links: {
          live: "https://twinhandymanplumbing.com",
        }
      },
      {
        id: "zummit-payments",
        title: "Zummit Payments",
        category: "Fintech • Payment Processing",
        image: zummitImage,
        description: "Premium merchant services platform helping businesses save up to 90% on processing fees. Features secure credit card processing and POS integration.",
        role: "Lead Frontend Developer",
        year: "2024",
        client: "Zummit Payments",
        challenge: "Merchants struggle with opaque pricing and complex integrations. The challenge was to build a trustworthy, high-performance platform that simplifies payment processing.",
        solution: "Developed a modern, responsive interface using React and Tailwind CSS. Focused on clear value proposition, speed, and trust signals with a professional blue aesthetic.",
        result: "The platform processes over $100K+ monthly for 10,000+ customers with 99.9% uptime. Successfully positioned as a transparent alternative in the payments industry.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
        links: {
          live: "https://zummitpayments.com",
        }
      },
      {
        id: "abs-plumbing",
        title: "AB's Plumbing",
        category: "Service Business • Local SEO",
        image: absPlumbingImage,
        description: "Professional business website for a Bay Area plumbing service. Focused on lead generation, trust building, and local SEO dominance.",
        role: "Web Developer",
        year: "2024",
        client: "AB's Plumbing",
        challenge: "The client needed to establish trust instantly and convert emergency visitors into calls. Local SEO competition in the Bay Area is extremely high.",
        solution: "Designed a high-conversion landing page with clear CTAs, 'Licensed & Insured' trust signals, and a mobile-first layout for emergency users.",
        result: "Generated over 500+ 5-star reviews and expanded service coverage to 16+ cities. Significant increase in emergency call volume.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
        links: {
          live: "https://abs-plumbingservices.com",
        }
      },
      {
        id: "oasis-oakland",
        title: "Oasis Oakland",
        category: "Mobile App • Community",
        image: oasisImage,
        description: "A free mobile app connecting Oakland residents with essential community services like healthcare, food, and education. Available in 3 languages.",
        role: "Lead Developer",
        year: "2024",
        client: "Community Project",
        challenge: "Access to essential services is often fragmented and hard to find. The challenge was to create a centralized, offline-first resource that requires no login and is accessible to non-English speakers.",
        solution: "Developed a cross-platform mobile app using React Native with offline caching, multi-language support (English, Spanish, Mandarin), and an interactive map for service discovery.",
        result: "The app is now helping thousands of Oakland residents find verified free resources. It features smart filtering, real-time status updates, and privacy-first data handling.",
        technologies: ["React Native", "TypeScript", "Google Maps API", "Local Storage"],
        links: {
          live: "https://oasisoakland.com",
        }
      },
      // GREEN/TEAL/AQUA Group
      {
        id: "strategik-agency",
        title: "Strategik Agency",
        category: "Agency Website • Digital Marketing",
        image: strategikImage,
        description: "Modern digital agency website featuring AI-powered solutions, automated workflows, and high-conversion landing pages for businesses in El Salvador.",
        role: "Lead Developer",
        year: "2025",
        client: "Strategik Agency",
        challenge: "The agency needed a high-performance website that could demonstrate their technical expertise in automation and AI while maintaining a 98% satisfaction rate.",
        solution: "Built a lightning-fast site using Next.js with advanced animations and integrated lead generation forms. Features include an AI RAG chatbot demo and automated booking system.",
        result: "The site achieves perfect Lighthouse scores and has helped over 500+ businesses digitize. The automated quoting system reduced response time to under 2 hours.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "AI RAG", "TypeScript"],
        links: {
          live: "https://strategikagency.com",
        }
      },
      {
        id: "localfy",
        title: "Localfy",
        category: "Food Delivery • Startup",
        image: localfyImage,
        description: "A local food delivery platform for El Salvador with the lowest commissions in the market. Connecting communities.",
        role: "Founder & Lead Developer",
        year: "2025",
        client: "Own Venture",
        challenge: "Existing delivery platforms charge high commissions (up to 30%), hurting local businesses. The goal was to create a sustainable model with lower fees (15%) without sacrificing quality.",
        solution: "I built a complete ecosystem: a user app for ordering, a business dashboard for management, and a driver app. Features include real-time tracking, secure payments, and category filtering.",
        result: "Launching soon in El Salvador. The platform is designed to empower local businesses by keeping more revenue in their pockets while offering users a seamless experience.",
        technologies: ["React Native", "Node.js", "PostgreSQL", "Socket.io", "Google Maps API"],
        links: {
          live: "https://getlocalfy.com",
        }
      },
      // PURPLE/CREATIVE Group
      {
        id: "onlypic",
        title: "OnlyPic.art",
        category: "AI Art Platform • Web App",
        image: onlyPicImage,
        description: "Transform photos into AI masterpieces and monetize creativity. A platform for creators to share and earn from their AI art.",
        role: "Creator & Lead Developer",
        year: "2025",
        client: "Personal Project",
        challenge: "Building a secure platform for monetizing AI art with military-grade encryption and handling high-resolution image processing at scale was the primary technical hurdle.",
        solution: "I implemented advanced AI models for photo transformation, a secure marketplace for unlocking originals, and a creator monetization system that allows artists to keep 80% of earnings.",
        result: "The platform has processed over 10K+ AI transformations and hosts 5K+ active creators, generating significant revenue for the artist community.",
        technologies: ["Next.js", "Firebase", "Stripe", "AI Models", "Tailwind CSS"],
        links: {
          live: "https://onlypic.art",
        }
      },
      {
        id: "negozapp",
        title: "Negozapp",
        category: "SaaS • Business Tools",
        image: negozappImage,
        description: "All-in-one platform to digitize local businesses. Features digital catalogs, booking systems, invoicing, and an AI assistant for business insights.",
        role: "Creator & Lead Developer",
        year: "2025",
        client: "Personal Project",
        challenge: "Local businesses struggle with fragmented tools. The challenge was to unify inventory, sales, bookings, and AI insights into a single, easy-to-use platform optimized for the Central American market.",
        solution: "Built a comprehensive SaaS solution with a React frontend and AI integration. Features include automated invoicing, real-time inventory management, and an AI assistant that learns from customer data.",
        result: "Currently serving 150+ active businesses with over 10,000 invoices generated. Empowering local entrepreneurs with enterprise-level tools. 100% commission-free model.",
        technologies: ["React", "Tailwind CSS", "AI Models", "Node.js", "PostgreSQL"],
        links: {
          live: "https://negozapp.com",
        }
      },
    ],
  },
  es: {
    nav: {
      work: "Trabajos",
      about: "Sobre mí",
      services: "Servicios",
      contact: "Contacto",
    },
    hero: {
      titlePart1: "Convirtiendo código en",
      titlePart2: "productos reales",
      subtitle: "No solo escribo sintaxis; construyo experiencias. Desde startups locales hasta plataformas de arte IA, creo software que marca la diferencia.",
      stackTitle: "Tech Stack",
      projectsTitle: "Proyectos que he construido",
      projectsSubtitle: "Trabajos Seleccionados 2024-2025",
      viewWork: "Ver Mis Trabajos",
      contactMe: "Contáctame",
      techTitle: "Tecnologías",
      techSubtitle: "La materia prima de la innovación.",
    },
    contactSection: {
      title: "Contáctame",
      subtitle: "¿Listo para iniciar un proyecto?",
      role: "Desarrollador Web y App",
      available: "Disponible para freelance",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      socialLabel: "Redes Sociales",
      email: "zavalarivas4@gmail.com",
      phone: "+1 (341) 219-7006",
      socials: {
        github: "https://github.com/MarvinZavala",
        linkedin: "https://www.linkedin.com/in/marvin-zavaladev/",
        instagram: "https://instagram.com/codemarvin",
      },
      cta: "Trabajemos juntos",
    },
    testimonials: {
      title: "Confianza",
      subtitle: "Resultados reales para empresas reales.",
      items: [
        {
          quote: "Marvin no solo hizo una web; construyó nuestro motor de reservas. Nuestras llamadas de emergencia subieron un 40% en solo un mes.",
          author: "Alex Rivera",
          role: "Propietario",
          company: "Twin Handyman",
          impact: "40% Más Leads"
        },
        {
          quote: "Necesitábamos una plataforma que gritara 'confianza'. Marvin entregó una infraestructura pixel-perfect que maneja millones en transacciones.",
          author: "Sarah Chen",
          role: "CTO",
          company: "Zummit Payments",
          impact: "Escalado al 99.9% Uptime"
        },
        {
          quote: "Velocidad y precisión. Automatizar nuestro onboarding de clientes con IA nos ahorró horas cada semana. El ROI fue inmediato.",
          author: "David Mendez",
          role: "Director",
          company: "Strategik Agency",
          impact: "20hrs/sem Ahorradas"
        },
        {
          quote: "Crear una plataforma de arte IA requiere una técnica profunda. Marvin hizo que el procesamiento de imágenes complejo pareciera simple.",
          author: "Elena K.",
          role: "Cofundadora",
          company: "OnlyPic Art",
          impact: "10K+ Generaciones IA"
        }
      ]
    },
    process: {
      title: "Cómo Trabajo",
      subtitle: "Pasos simples. Resultados serios.",
      steps: [
        {
          number: "01",
          title: "Estrategia",
          description: "Definimos la hoja de ruta y arquitectura. Sin adivinanzas, solo planificación."
        },
        {
          number: "02",
          title: "Desarrollo",
          description: "Sprints ágiles con código limpio. Verás progreso tangible cada semana."
        },
        {
          number: "03",
          title: "Optimización",
          description: "Pruebas rigurosas de velocidad y SEO. Un producto libre de errores."
        },
        {
          number: "04",
          title: "Lanzamiento",
          description: "Despliegue fluido a la nube. Yo manejo los servidores, tú el crecimiento."
        }
      ]
    },
    footer: {
      cta: "Construyamos algo genial.",
      rights: "© 2024 Marvin Zavala. Todos los derechos reservados.",
    },
    about: {
      title: "El código no es solo lógica. Se trata de resolver problemas humanos reales.",
      p1: "Uno el diseño creativo con la implementación técnica.",
      p2: "Mi filosofía se basa en la simplicidad: resolver problemas reales con código limpio y eficiente.",
      p3: "Siempre explorando nuevas tecnologías para crear mejores experiencias digitales.",
      experience: "Educación y Experiencia",
      roles: {
        highschool: { title: "Estudiante de Preparatoria", date: "Presente", company: "High School" },
        freelance: { title: "Desarrollador Freelance", date: "2023 — Presente", company: "Autónomo" },
        projects: { title: "Desarrollador Líder", date: "2022 — Presente", company: "Proyectos Personales" },
      },
      photoCaption: "Siempre aprendiendo, siempre construyendo.",
    },
    services: {
      title: "Servicios Premium",
      subtitle: "Soluciones técnicas integrales para tu negocio",
      items: [
        {
          title: "Desarrollo Web",
          description: "Sitios web de alto rendimiento que convierten visitas en clientes.",
          features: ["React y Next.js", "Optimización SEO", "UI Interactiva"],
          icon: "web"
        },
        {
          title: "Apps Móviles",
          description: "Aplicaciones nativas para iOS y Android.",
          features: ["React Native / Expo", "Soporte Offline", "Despliegue en Tiendas"],
          icon: "mobile"
        },
        {
          title: "Cloud y Backend",
          description: "Infraestructura escalable que crece contigo.",
          features: ["AWS y Firebase", "Diseño de Bases de Datos", "Desarrollo de API"],
          icon: "cloud"
        },
        {
          title: "UI/UX Design",
          description: "Experiencias digitales que se ven y se sienten profesionales.",
          features: ["Estética Moderna", "Prototipado", "Sistemas de Diseño"],
          icon: "design"
        },
        {
          title: "AI Integrations",
          description: "Aplicaciones inteligentes impulsadas por LLMs como Claude, ChatGPT y Gemini.",
          features: ["Custom RAG Chatbots", "Process Automation", "OpenAI & Anthropic API"],
          icon: "ai"
        }
      ]
    },
    caseStudy: {
      back: "Volver a Trabajos",
      role: "Rol",
      year: "Año",
      client: "Cliente",
      deliverables: "Entregables",
      challengeTitle: "El Desafío",
      solutionTitle: "La Solución",
      resultTitle: "El Resultado",
      notFound: "Proyecto no encontrado",
      techStack: "Tecnologías",
      viewLive: "Ver Sitio",
      viewCode: "Ver Código",
    },
    skills: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "React Native", "PostgreSQL", "Figma"],
    projects: [
      // BLUE Group
      {
        id: "twin-handyman",
        title: "Twin Handyman & Plumbing",
        category: "Negocio de Servicios • Lead Gen",
        image: twinHandymanImage,
        description: "El sitio web de servicios de plomería y handyman #1 de confianza en el Área de la Bahía. Ofrece estimaciones virtuales instantáneas y reservas de emergencia 24/7.",
        role: "Desarrollador Web",
        year: "2024",
        client: "Twin Handyman",
        challenge: "El cliente necesitaba destacar en un mercado competitivo y agilizar su proceso de reservas para servicios de emergencia.",
        solution: "Construí un sitio de alta confianza enfocado en conversión con función de 'Estimación Virtual Gratuita' y llamadas a la acción claras. Integré reseñas para credibilidad instantánea.",
        result: "El nuevo sitio ha consolidado su reputación como los expertos locales #1 de confianza, generando un flujo constante de clientes potenciales de alto valor.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
        links: {
          live: "https://twinhandymanplumbing.com",
        }
      },
      {
        id: "zummit-payments",
        title: "Zummit Payments",
        category: "Fintech • Procesamiento de Pagos",
        image: zummitImage,
        description: "Plataforma de servicios mercantiles que ayuda a negocios a ahorrar hasta un 90% en comisiones. Procesamiento seguro de tarjetas e integración POS.",
        role: "Desarrollador Frontend Líder",
        year: "2024",
        client: "Zummit Payments",
        challenge: "Los comerciantes luchan con precios opacos e integraciones complejas. El reto fue construir una plataforma confiable y transparente que simplifique los pagos.",
        solution: "Desarrollé una interfaz moderna y responsiva usando React y Tailwind CSS. Enfocado en una propuesta de valor clara, velocidad y confianza con una estética azul profesional.",
        result: "La plataforma procesa más de $100K+ mensuales para 10,000+ clientes con 99.9% de uptime. Posicionada exitosamente como una alternativa transparente en la industria.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
        links: {
          live: "https://zummitpayments.com",
        }
      },
      {
        id: "abs-plumbing",
        title: "AB's Plumbing",
        category: "Negocio de Servicios • SEO Local",
        image: absPlumbingImage,
        description: "Sitio web profesional para servicio de plomería en el Área de la Bahía. Enfocado en generación de leads y dominio de SEO local.",
        role: "Desarrollador Web",
        year: "2024",
        client: "AB's Plumbing",
        challenge: "El cliente necesitaba generar confianza instantánea y convertir visitantes de emergencia en llamadas. La competencia de SEO local es muy alta.",
        solution: "Diseñé una landing page de alta conversión con llamadas a la acción claras, señales de confianza y diseño mobile-first.",
        result: "Generó más de 500+ reseñas de 5 estrellas y expandió la cobertura a 16+ ciudades. Aumento significativo en llamadas de emergencia.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
        links: {
          live: "https://abs-plumbingservices.com",
        }
      },
      {
        id: "oasis-oakland",
        title: "Oasis Oakland",
        category: "App Móvil • Comunidad",
        image: oasisImage,
        description: "Una app móvil gratuita que conecta a residentes de Oakland con servicios comunitarios esenciales como salud, alimentos y educación. Disponible en 3 idiomas.",
        role: "Desarrollador Líder",
        year: "2024",
        client: "Proyecto Comunitario",
        challenge: "El acceso a servicios esenciales a menudo está fragmentado y es difícil de encontrar. El reto fue crear un recurso centralizado, 'offline-first' que no requiera registro y sea accesible para no hablantes de inglés.",
        solution: "Desarrollé una app móvil multiplataforma usando React Native con caché offline, soporte multi-idioma (Inglés, Español, Mandarín) y un mapa interactivo para descubrir servicios.",
        result: "La app ahora ayuda a miles de residentes de Oakland a encontrar recursos gratuitos verificados. Cuenta con filtros inteligentes, actualizaciones de estado en tiempo real y manejo de datos privado.",
        technologies: ["React Native", "TypeScript", "Google Maps API", "Local Storage"],
        links: {
          live: "https://oasisoakland.com",
        }
      },
      // GREEN/TEAL/AQUA Group
      {
        id: "strategik-agency",
        title: "Strategik Agency",
        category: "Sitio Web de Agencia • Marketing Digital",
        image: strategikImage,
        description: "Sitio web moderno para agencia digital con soluciones de IA, flujos automatizados y páginas de alta conversión para negocios en El Salvador.",
        role: "Desarrollador Líder",
        year: "2025",
        client: "Strategik Agency",
        challenge: "La agencia necesitaba un sitio de alto rendimiento que demostrara su experiencia técnica en automatización e IA manteniendo una tasa de satisfacción del 98%.",
        solution: "Construí un sitio ultra rápido usando Next.js con animaciones avanzadas y formularios de generación de leads. Incluye demo de chatbot RAG y sistema de reservas.",
        result: "El sitio logra puntuaciones perfectas en Lighthouse y ha ayudado a +500 negocios a digitalizarse. El sistema de cotización redujo el tiempo de respuesta a menos de 2 horas.",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "AI RAG", "TypeScript"],
        links: {
          live: "https://strategikagency.com",
        }
      },
      {
        id: "localfy",
        title: "Localfy",
        category: "Delivery de Comida • Startup",
        image: localfyImage,
        description: "Lo mejor de tu ciudad. Una plataforma de delivery para El Salvador con las comisiones más bajas del mercado.",
        role: "Fundador y Desarrollador Líder",
        year: "2025",
        client: "Emprendimiento Propio",
        challenge: "Las plataformas existentes cobran comisiones altas (hasta 30%), afectando a los negocios locales. El reto fue crear un modelo sostenible con tarifas justas (15%) manteniendo alta calidad.",
        solution: "Desarrollé un ecosistema completo: app de usuario, panel de control para negocios y app de repartidores. Incluye rastreo en tiempo real, pagos seguros y gestión de inventario.",
        result: "Próximamente en El Salvador. Una plataforma diseñada para el mercado local que permite a los negocios crecer mientras ofrece una excelente experiencia a los usuarios.",
        technologies: ["React Native", "Node.js", "PostgreSQL", "Socket.io", "Google Maps API"],
        links: {
          live: "https://getlocalfy.com",
        }
      },
      // PURPLE/CREATIVE Group
      {
        id: "onlypic",
        title: "OnlyPic.art",
        category: "Plataforma de Arte IA • Web App",
        image: onlyPicImage,
        description: "Transforma fotos en obras maestras de IA y monetiza tu creatividad. Una plataforma para que creadores compartan y ganen con su arte.",
        role: "Creador y Desarrollador Líder",
        year: "2025",
        client: "Proyecto Personal",
        challenge: "Construir una plataforma segura para monetizar arte IA con encriptación de grado militar y manejar el procesamiento de imágenes de alta resolución a escala fue el principal reto técnico.",
        solution: "Implementé modelos avanzados de IA para la transformación de fotos, un mercado seguro para desbloquear originales y un sistema de monetización para creadores.",
        result: "La plataforma ha procesado más de 10K+ transformaciones de IA y aloja a más de 5K+ creadores activos, generando ingresos significativos para la comunidad.",
        technologies: ["Next.js", "Firebase", "Stripe", "AI Models", "Tailwind CSS"],
        links: {
          live: "https://onlypic.art",
        }
      },
      {
        id: "negozapp",
        title: "Negozapp",
        category: "SaaS • Herramientas de Negocio",
        image: negozappImage,
        description: "Plataforma todo en uno para digitalizar negocios locales. Incluye catálogo digital, sistema de reservas, facturación y un asistente de IA.",
        role: "Creador y Desarrollador Líder",
        year: "2025",
        client: "Proyecto Personal",
        challenge: "Los negocios locales luchan con herramientas fragmentadas. El reto fue unificar inventario, ventas, reservas e IA en una sola plataforma fácil de usar y optimizada para Centroamérica.",
        solution: "Desarrollé una solución SaaS integral con frontend en React e integración de IA. Incluye facturación automatizada, gestión de inventario en tiempo real y un asistente de IA inteligente.",
        result: "Actualmente sirviendo a +150 negocios activos con más de 10,000 facturas generadas. Empoderando a emprendedores locales con herramientas de nivel empresarial sin comisiones.",
        technologies: ["React", "Tailwind CSS", "AI Models", "Node.js", "PostgreSQL"],
        links: {
          live: "https://negozapp.com",
        }
      },
    ],
  },
};
