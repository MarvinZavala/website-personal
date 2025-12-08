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
      stripe: { title: string; date: string; company: string };
      airbnb: { title: string; date: string; company: string };
      fantasy: { title: string; date: string; company: string };
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
      titlePart1: "Product Designer crafting",
      titlePart2: "thoughtful",
      subtitle: "I specialize in simplifying complex systems into intuitive, approachable interfaces. Currently building the future of fintech at Stripe.",
    },
    footer: {
      cta: "Let's build something great.",
      rights: "© 2024 Alex Chen. All rights reserved.",
    },
    about: {
      title: "Design is not just what it looks like and feels like. Design is how it works.",
      p1: "Hello! I'm Alex, a product designer based in San Francisco. With over 7 years of experience in digital product design, I bridge the gap between user needs and business goals through clean, functional, and aesthetic solutions.",
      p2: "My philosophy is rooted in \"Swiss Design\" principles—stripping away the non-essential to let the content shine. I believe that good design should be invisible, intuitive, and accessible to everyone.",
      p3: "When I'm not pushing pixels in Figma or prototyping in Framer, you can find me exploring the California coast with my film camera, brewing the perfect pour-over coffee, or reading about architectural history.",
      experience: "Experience",
      roles: {
        stripe: { title: "Senior Product Designer", date: "2022 — Present", company: "Stripe" },
        airbnb: { title: "Product Designer", date: "2019 — 2022", company: "Airbnb" },
        fantasy: { title: "UI/UX Designer", date: "2017 — 2019", company: "Fantasy Interactive" },
      },
      photoCaption: "Captured in my home studio, 2024.",
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
        category: "Mobile App • Fintech",
        image: fintechImage,
        description: "Redefining personal finance management for the digital native generation. We focused on clarity, trust, and speed.",
        role: "Lead Product Designer",
        year: "2023",
        client: "Nova Inc.",
        challenge: "Every project starts with a problem. For Nova Finance, the main challenge was balancing functionality with simplicity. The users needed a powerful tool that didn't feel overwhelming. We conducted extensive user research to understand the core workflows.",
        solution: "Our approach focused on reduction. We removed every non-essential element until only the core value proposition remained. The visual language was designed to be calming and trustworthy, utilizing a restrained color palette and generous whitespace.",
        result: "The final product was launched to critical acclaim. User retention increased by 40% in the first quarter, and the clean design language set a new standard for the industry.",
      },
      {
        id: "smart-home",
        title: "Luma Home",
        category: "Web Dashboard • IoT",
        image: smartHomeImage,
        description: "A centralized dashboard for controlling your entire smart home ecosystem. Designed for tablet and desktop with a focus on dark mode accessibility.",
        role: "UI/UX Designer",
        year: "2022",
        client: "Luma",
        challenge: "Integrating hundreds of different device types into a single, cohesive interface was the primary hurdle. Users needed to control everything from lightbulbs to security cameras without switching contexts.",
        solution: "We developed a modular card-based system that adapts to different device capabilities. We also prioritized a 'Dark Mode first' approach to reduce glare for always-on displays in the home.",
        result: "Luma Home won the 'Best IoT Interface' award in 2023. Users reported a 50% reduction in time spent managing devices compared to previous solutions.",
      },
      {
        id: "eco-packaging",
        title: "Roots Coffee",
        category: "Physical Product • Branding",
        image: packagingImage,
        description: "Sustainable packaging design for a specialty coffee roaster. Using 100% biodegradable materials with minimal ink usage.",
        role: "Art Director",
        year: "2024",
        client: "Roots Coffee Roasters",
        challenge: "Creating premium packaging that stands out on the shelf while strictly adhering to zero-waste principles. We couldn't use foil linings or plastic valves.",
        solution: "We utilized high-grade compostable kraft paper and water-based soy inks. The design relies on strong typography and botanical illustrations to convey quality without special finishes.",
        result: "Sales increased by 25% after the rebrand. The packaging was featured in several design annuals for its commitment to sustainability without sacrificing aesthetics.",
      },
      {
        id: "design-system",
        title: "Orbit System",
        category: "Design Operations • UI Kit",
        image: designSystemImage,
        description: "A comprehensive design system built for scale. Standardizing components, tokens, and patterns across 4 different product lines.",
        role: "Systems Designer",
        year: "2023",
        client: "Internal",
        challenge: "The company had 4 different products with 4 different visual styles and codebases. Development was slow, and the user experience was fragmented.",
        solution: "We built Orbit from the ground up, starting with core tokens (color, spacing, typography) and building up to complex patterns. We treated the system as a product itself, with versioning and documentation.",
        result: "Development velocity increased by 3x. Onboarding new designers now takes 2 days instead of 2 weeks. The system is now the single source of truth for the entire organization.",
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
      titlePart1: "Diseñador de Productos creando experiencias",
      titlePart2: "reflexivas",
      subtitle: "Me especializo en simplificar sistemas complejos en interfaces intuitivas y accesibles. Actualmente construyendo el futuro fintech en Stripe.",
    },
    footer: {
      cta: "Construyamos algo genial.",
      rights: "© 2024 Alex Chen. Todos los derechos reservados.",
    },
    about: {
      title: "El diseño no es solo cómo se ve y se siente. El diseño es cómo funciona.",
      p1: "¡Hola! Soy Alex, un diseñador de productos basado en San Francisco. Con más de 7 años de experiencia en diseño digital, conecto las necesidades del usuario con los objetivos de negocio a través de soluciones limpias, funcionales y estéticas.",
      p2: "Mi filosofía se basa en los principios del \"Diseño Suizo\"—eliminando lo no esencial para dejar brillar el contenido. Creo que el buen diseño debe ser invisible, intuitivo y accesible para todos.",
      p3: "Cuando no estoy moviendo píxeles en Figma o prototipando en Framer, puedes encontrarme explorando la costa de California con mi cámara de rollo, preparando el café perfecto o leyendo sobre historia de la arquitectura.",
      experience: "Experiencia",
      roles: {
        stripe: { title: "Diseñador Senior de Producto", date: "2022 — Presente", company: "Stripe" },
        airbnb: { title: "Diseñador de Producto", date: "2019 — 2022", company: "Airbnb" },
        fantasy: { title: "Diseñador UI/UX", date: "2017 — 2019", company: "Fantasy Interactive" },
      },
      photoCaption: "Capturado en mi estudio, 2024.",
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
        category: "App Móvil • Fintech",
        image: fintechImage,
        description: "Redefiniendo la gestión de finanzas personales para la generación digital. Nos enfocamos en claridad, confianza y velocidad.",
        role: "Diseñador Principal",
        year: "2023",
        client: "Nova Inc.",
        challenge: "Cada proyecto comienza con un problema. Para Nova Finance, el desafío principal era equilibrar la funcionalidad con la simplicidad. Los usuarios necesitaban una herramienta poderosa que no se sintiera abrumadora.",
        solution: "Nuestro enfoque se centró en la reducción. Eliminamos cada elemento no esencial hasta que solo quedó la propuesta de valor principal. El lenguaje visual fue diseñado para ser calmado y confiable.",
        result: "El producto final fue lanzado con aclamación crítica. La retención de usuarios aumentó un 40% en el primer trimestre, y el lenguaje de diseño limpio estableció un nuevo estándar.",
      },
      {
        id: "smart-home",
        title: "Luma Home",
        category: "Dashboard Web • IoT",
        image: smartHomeImage,
        description: "Un panel centralizado para controlar todo el ecosistema de tu hogar inteligente. Diseñado para tablet y escritorio con enfoque en modo oscuro.",
        role: "Diseñador UI/UX",
        year: "2022",
        client: "Luma",
        challenge: "Integrar cientos de tipos de dispositivos diferentes en una interfaz única y cohesiva fue el obstáculo principal. Los usuarios necesitaban controlar todo, desde bombillas hasta cámaras.",
        solution: "Desarrollamos un sistema modular basado en tarjetas que se adapta a diferentes capacidades de dispositivos. También priorizamos un enfoque 'Dark Mode first' para reducir el brillo en pantallas siempre encendidas.",
        result: "Luma Home ganó el premio 'Mejor Interfaz IoT' en 2023. Los usuarios reportaron una reducción del 50% en el tiempo dedicado a gestionar dispositivos.",
      },
      {
        id: "eco-packaging",
        title: "Roots Coffee",
        category: "Producto Físico • Branding",
        image: packagingImage,
        description: "Diseño de empaque sostenible para un tostador de café de especialidad. Usando materiales 100% biodegradables con uso mínimo de tinta.",
        role: "Director de Arte",
        year: "2024",
        client: "Roots Coffee Roasters",
        challenge: "Crear un empaque premium que destaque en el estante mientras se adhiere estrictamente a principios de cero residuos. No podíamos usar revestimientos de aluminio ni válvulas de plástico.",
        solution: "Utilizamos papel kraft compostable de alta calidad y tintas de soja a base de agua. El diseño se basa en una tipografía fuerte e ilustraciones botánicas para transmitir calidad.",
        result: "Las ventas aumentaron un 25% después del cambio de marca. El empaque fue presentado en varios anuarios de diseño por su compromiso con la sostenibilidad.",
      },
      {
        id: "design-system",
        title: "Orbit System",
        category: "Operaciones de Diseño • UI Kit",
        image: designSystemImage,
        description: "Un sistema de diseño integral construido para escalar. Estandarizando componentes, tokens y patrones en 4 líneas de productos diferentes.",
        role: "Diseñador de Sistemas",
        year: "2023",
        client: "Interno",
        challenge: "La empresa tenía 4 productos diferentes con 4 estilos visuales y bases de código diferentes. El desarrollo era lento y la experiencia del usuario estaba fragmentada.",
        solution: "Construimos Orbit desde cero, comenzando con tokens principales (color, espaciado, tipografía) y construyendo patrones complejos. Tratamos el sistema como un producto en sí mismo.",
        result: "La velocidad de desarrollo aumentó 3 veces. La incorporación de nuevos diseñadores ahora toma 2 días en lugar de 2 semanas. El sistema es ahora la única fuente de verdad.",
      },
    ],
  },
};
