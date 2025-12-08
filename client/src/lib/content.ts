import fintechImage from "@assets/generated_images/fintech_mobile_app_mockup.png";
import smartHomeImage from "@assets/generated_images/smart_home_dashboard_mockup.png";
import packagingImage from "@assets/generated_images/sustainable_packaging_design.png";
import designSystemImage from "@assets/generated_images/design_system_documentation.png";
import profileImage from "@assets/generated_images/professional_headshot_of_product_designer.png";
import localfyImage from "@assets/screenshot-1765160017897.png";
import onlyPicImage from "@assets/screenshot-1765160140194.png";
import negozappImage from "@assets/screenshot-1765218655116.png";
import zummitImage from "@assets/screenshot-1765219186328.png";
import strategikImage from "@assets/screenshot-1765219432817.png";
import absPlumbingImage from "@assets/screenshot-1765219563334.png";

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
    contact: string;
  };
  hero: {
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    stackTitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
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
  projects: Project[];
  skills: string[];
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      titlePart1: "Turning raw code into",
      titlePart2: "real products",
      subtitle: "I don't just write syntax; I build experiences. From local startups to AI art platforms, I create software that makes a difference.",
      stackTitle: "Tech Stack",
      projectsTitle: "Projects I've Built",
      projectsSubtitle: "Selected Work 2024-2025",
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
    footer: {
      cta: "Let's build something great.",
      rights: "© 2024 Marvin Zavala. All rights reserved.",
    },
    about: {
      title: "Code is not just about logic. It's about solving real human problems.",
      p1: "Hello! I'm Marvin, a developer and high school student. I've been coding since I discovered my passion for building things on the web. I bridge the gap between creative design and technical implementation.",
      p2: "My philosophy is rooted in continuous learning and simplicity. I believe that the best code is clean, maintainable, and solves the user's problem efficiently.",
      p3: "When I'm not coding or studying, you can find me exploring new technologies, participating in hackathons, or refining my latest personal project.",
      experience: "Education & Experience",
      roles: {
        highschool: { title: "High School Student", date: "Present", company: "High School" },
        freelance: { title: "Freelance Developer", date: "2023 — Present", company: "Self-Employed" },
        projects: { title: "Lead Developer", date: "2022 — Present", company: "Personal Projects" },
      },
      photoCaption: "Always learning, always building.",
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
      {
        id: "fintech-app",
        title: "Nova Finance",
        category: "Mobile App • Development",
        image: fintechImage,
        description: "A personal finance management app built for the digital native generation. Focused on performance and security.",
        role: "Full Stack Developer",
        year: "2023",
        client: "Project",
        challenge: "The main challenge was ensuring real-time data updates while maintaining a smooth 60fps UI. Security was also a top priority for handling transaction data.",
        solution: "I implemented a local-first architecture with encrypted on-device storage. The UI was built with React Native for cross-platform performance.",
        result: "The app successfully handles thousands of transactions with zero lag. It taught me the importance of optimizing render cycles in mobile development.",
        technologies: ["React Native", "SQLite", "TypeScript", "Reanimated"],
        links: {
          code: "https://github.com/marvinzavala/nova-finance",
        }
      },
      {
        id: "smart-home",
        title: "Luma Home",
        category: "Web Dashboard • IoT",
        image: smartHomeImage,
        description: "A centralized dashboard for controlling smart home devices. Built with modern web technologies for responsiveness.",
        role: "Frontend Developer",
        year: "2022",
        client: "Project",
        challenge: "Integrating various API standards from different device manufacturers into a unified interface was complex. Real-time state management was crucial.",
        solution: "I used WebSockets for real-time communication and a modular component system. The dashboard supports dark mode and is fully responsive.",
        result: "A fully functional dashboard that aggregates multiple smart devices. It reduced the friction of managing a smart home ecosystem.",
        technologies: ["React", "WebSockets", "IoT APIs", "Chart.js"],
        links: {}
      },
      {
        id: "eco-packaging",
        title: "Roots Coffee",
        category: "E-commerce • Web Design",
        image: packagingImage,
        description: "An e-commerce platform for a sustainable coffee brand. Focused on a fast checkout experience and SEO optimization.",
        role: "Web Developer",
        year: "2024",
        client: "Roots Coffee",
        challenge: "The client needed a custom storefront that reflected their eco-friendly brand while ensuring high conversion rates and fast load times.",
        solution: "I built a custom storefront using Next.js for server-side rendering and optimal SEO. The checkout flow was streamlined to reduce cart abandonment.",
        result: "The site achieves a 100/100 Lighthouse performance score. Sales conversion improved significantly due to the optimized user flow.",
        technologies: ["Next.js", "Shopify API", "Framer Motion"],
        links: {}
      },
      {
        id: "design-system",
        title: "Orbit UI",
        category: "Component Library • Dev Tools",
        image: designSystemImage,
        description: "A comprehensive component library built for scalability. Standardizing UI elements across multiple projects.",
        role: "Library Author",
        year: "2023",
        client: "Open Source",
        challenge: "Creating components that are flexible enough for various use cases but strict enough to maintain consistency. Accessibility was a key requirement.",
        solution: "I built the library with strict TypeScript typing and WAI-ARIA compliance. Documentation was generated automatically from the code comments.",
        result: "A robust set of components that accelerates development time. It is now used as the foundation for all my personal and freelance projects.",
        technologies: ["React", "Storybook", "TypeScript", "Rollup"],
        links: {
          code: "https://github.com/marvinzavala/orbit-ui",
        }
      },
    ],
  },
  es: {
    nav: {
      work: "Trabajos",
      about: "Sobre mí",
      contact: "Contacto",
    },
    hero: {
      titlePart1: "Convirtiendo código en",
      titlePart2: "productos reales",
      subtitle: "No solo escribo sintaxis; construyo experiencias. Desde startups locales hasta plataformas de arte IA, creo software que marca la diferencia.",
      stackTitle: "Tech Stack",
      projectsTitle: "Proyectos que he construido",
      projectsSubtitle: "Trabajos Seleccionados 2024-2025",
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
    footer: {
      cta: "Construyamos algo genial.",
      rights: "© 2024 Marvin Zavala. Todos los derechos reservados.",
    },
    about: {
      title: "El código no es solo lógica. Se trata de resolver problemas humanos reales.",
      p1: "¡Hola! Soy Marvin, desarrollador y estudiante de preparatoria. He estado programando desde que descubrí mi pasión por construir cosas en la web. Conecto el diseño creativo con la implementación técnica.",
      p2: "Mi filosofía se basa en el aprendizaje continuo y la simplicidad. Creo que el mejor código es limpio, mantenible y resuelve el problema del usuario de manera eficiente.",
      p3: "Cuando no estoy programando o estudiando, puedes encontrarme explorando nuevas tecnologías, participando en hackathons o refinando mi último proyecto personal.",
      experience: "Educación y Experiencia",
      roles: {
        highschool: { title: "Estudiante de Preparatoria", date: "Presente", company: "High School" },
        freelance: { title: "Desarrollador Freelance", date: "2023 — Presente", company: "Autónomo" },
        projects: { title: "Desarrollador Líder", date: "2022 — Presente", company: "Proyectos Personales" },
      },
      photoCaption: "Siempre aprendiendo, siempre construyendo.",
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
      {
        id: "fintech-app",
        title: "Nova Finance",
        category: "App Móvil • Desarrollo",
        image: fintechImage,
        description: "Una app de gestión de finanzas personales para la generación digital. Enfocada en rendimiento y seguridad.",
        role: "Desarrollador Full Stack",
        year: "2023",
        client: "Proyecto",
        challenge: "El desafío principal fue asegurar actualizaciones de datos en tiempo real manteniendo una UI fluida a 60fps. La seguridad también fue prioridad.",
        solution: "Implementé una arquitectura local-first con almacenamiento encriptado. La UI fue construida con React Native para rendimiento multiplataforma.",
        result: "La app maneja miles de transacciones sin lag. Me enseñó la importancia de optimizar ciclos de renderizado en desarrollo móvil.",
        technologies: ["React Native", "SQLite", "TypeScript", "Reanimated"],
        links: {
          code: "https://github.com/marvinzavala/nova-finance",
        }
      },
      {
        id: "smart-home",
        title: "Luma Home",
        category: "Dashboard Web • IoT",
        image: smartHomeImage,
        description: "Un panel centralizado para controlar dispositivos inteligentes. Construido con tecnologías web modernas.",
        role: "Desarrollador Frontend",
        year: "2022",
        client: "Proyecto",
        challenge: "Integrar varios estándares de API de diferentes fabricantes en una interfaz unificada fue complejo. La gestión de estado en tiempo real fue crucial.",
        solution: "Usé WebSockets para comunicación en tiempo real y un sistema de componentes modular. El dashboard soporta modo oscuro y es responsivo.",
        result: "Un dashboard funcional que agrega múltiples dispositivos. Redujo la fricción de gestionar un ecosistema de hogar inteligente.",
        technologies: ["React", "WebSockets", "IoT APIs", "Chart.js"],
        links: {}
      },
      {
        id: "eco-packaging",
        title: "Roots Coffee",
        category: "E-commerce • Diseño Web",
        image: packagingImage,
        description: "Una plataforma de comercio electrónico para una marca de café sostenible. Enfocada en checkout rápido y SEO.",
        role: "Desarrollador Web",
        year: "2024",
        client: "Roots Coffee",
        challenge: "El cliente necesitaba una tienda personalizada que reflejara su marca ecológica mientras aseguraba altas tasas de conversión.",
        solution: "Construí una tienda personalizada usando Next.js para renderizado del lado del servidor y SEO óptimo. El flujo de pago fue optimizado.",
        result: "El sitio logra una puntuación de rendimiento Lighthouse de 100/100. La conversión de ventas mejoró significativamente.",
        technologies: ["Next.js", "Shopify API", "Framer Motion"],
        links: {}
      },
      {
        id: "design-system",
        title: "Orbit UI",
        category: "Librería de Componentes • Dev Tools",
        image: designSystemImage,
        description: "Una librería de componentes integral construida para escalar. Estandarizando elementos UI en múltiples proyectos.",
        role: "Autor de Librería",
        year: "2023",
        client: "Open Source",
        challenge: "Crear componentes flexibles para varios casos de uso pero estrictos para mantener consistencia. La accesibilidad fue un requisito clave.",
        solution: "Construí la librería con tipado estricto de TypeScript y cumplimiento WAI-ARIA. La documentación se generó automáticamente.",
        result: "Un set robusto de componentes que acelera el tiempo de desarrollo. Ahora es la base para todos mis proyectos personales.",
        technologies: ["React", "Storybook", "TypeScript", "Rollup"],
        links: {
          code: "https://github.com/marvinzavala/orbit-ui",
        }
      },
    ],
  },
};
