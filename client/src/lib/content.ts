import fintechImage from "@assets/generated_images/fintech_mobile_app_mockup.png";
import smartHomeImage from "@assets/generated_images/smart_home_dashboard_mockup.png";
import packagingImage from "@assets/generated_images/sustainable_packaging_design.png";
import designSystemImage from "@assets/generated_images/design_system_documentation.png";
import profileImage from "@assets/generated_images/professional_headshot_of_product_designer.png";

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
  };
  projects: Project[];
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      titlePart1: "App & Web Developer building",
      titlePart2: "digital solutions",
      subtitle: "I'm a high school developer passionate about creating intuitive apps and websites. Transforming complex problems into clean code.",
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
    },
    projects: [
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
      titlePart1: "Desarrollador de Apps y Web creando",
      titlePart2: "soluciones digitales",
      subtitle: "Soy un desarrollador de preparatoria apasionado por crear aplicaciones y sitios web intuitivos. Transformando problemas complejos en código limpio.",
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
    },
    projects: [
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
      },
    ],
  },
};
