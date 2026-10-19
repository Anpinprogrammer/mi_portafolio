export type Locale = 'es' | 'en'
export type Localized = Record<Locale, string>
export type Project = {
  id: string
  title: string
  category: Localized
  description: Localized
  technologies: string[]
  github?: string
  demo?: string
  type: 'finance' | 'logistics' | 'retail'
  feature: string
}
export const personal = {
  name: 'Andrés Pineda',
  email: 'andresspinedago@gmail.com',
  linkedin: 'https://www.linkedin.com/in/andrespinedasoftware/',
  // Set your verified GitHub profile URL here. No URL was provided in the resumes.
  github: '',
  location: 'Colombia',
  whatsapp: '573146098819',
} as const
export const projects: Project[] = [
  {
    id: 'rutanet',
    title: 'RutaNet',
    category: { es: 'FINTECH / ANALÍTICA', en: 'FINTECH / ANALYTICS' },
    description: {
      es: 'Plataforma financiera para conductores por aplicación. Centraliza turnos, ingresos, gastos y análisis de rentabilidad en un solo dashboard.',
      en: 'Financial management for rideshare drivers. Brings shifts, income, expenses, and profitability insights into one dashboard.',
    },
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'React Query'],
    type: 'finance',
    feature: '01',
  },
  {
    id: 'gilan',
    title: 'Gilan Logistics',
    category: { es: 'LOGÍSTICA / OPERACIONES', en: 'LOGISTICS / OPERATIONS' },
    description: {
      es: 'Gestión integral de entregas, clientes, mensajeros, liquidaciones y nómina con APIs REST y flujos de trabajo automatizados.',
      en: 'End-to-end logistics operations for deliveries, customers, couriers, settlements and payroll, powered by REST APIs and automated workflows.',
    },
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    type: 'logistics',
    feature: '02',
  },
  {
    id: 'mecatos',
    title: 'Mecatos El Santi',
    category: { es: 'RETAIL / GESTIÓN', en: 'RETAIL / MANAGEMENT' },
    description: {
      es: 'Sistema empresarial para ventas, inventario, compras y cierre de caja, con permisos por rol, facturación automatizada y tareas asíncronas.',
      en: 'Business platform for sales, inventory, purchasing and cash closing, with role-based access, automated invoicing and background jobs.',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'Redis', 'BullMQ', 'MongoDB'],
    type: 'retail',
    feature: '03',
  },
]
export const skills = [
  {
    key: 'frontend',
    list: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    key: 'backend',
    list: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  { key: 'devops', list: ['Redis', 'BullMQ', 'Vercel', 'Render', 'Git', 'GitHub'] },
  {
    key: 'tools',
    list: ['Postman', 'Webhooks', 'API Integrations', 'AI Tools', 'Workflow Automation'],
  },
] as const
export const jobs = [
  {
    company: 'LEAN TECH',
    period: '2022 — 2026',
    role: { es: 'Especialista en soporte técnico', en: 'Technical Support Specialist' },
    description: {
      es: 'Soporte técnico remoto en inglés, diagnóstico de problemas de software y documentación de soluciones.',
      en: 'English-language remote technical support, software troubleshooting, and technical solution documentation.',
    },
  },
  {
    company: 'BINANCE',
    period: '2021 — 2022',
    role: { es: 'Analista KYC', en: 'KYC Analyst' },
    description: {
      es: 'Validación digital de clientes, análisis de inconsistencias y aplicación de procesos de cumplimiento.',
      en: 'Digital customer verification, identification of inconsistencies, and structured compliance processes.',
    },
  },
  {
    company: 'AIRBNB',
    period: '2020 — 2021',
    role: { es: 'Formador de nuevos colaboradores', en: 'New Hire Trainer' },
    description: {
      es: 'Capacitación en herramientas internas, resolución de casos complejos y optimización de procesos.',
      en: 'Trained new team members in internal tools, complex case resolution, and operational workflows.',
    },
  },
]
export const copy = {
  es: {
    nav: ['Inicio', 'Habilidades', 'Proyectos', 'Sobre mí', 'Experiencia', 'Contacto'],
    available: 'Abierto a oportunidades',
    eyebrow: 'HOLA, SOY ANDRÉS PINEDA',
    heroStart: 'Construyo software',
    heroEnd: 'que mueve ideas.',
    heroBody:
      'Ingeniero de Software enfocado en experiencias digitales, sistemas escalables y automatización inteligente. De la idea al producto.',
    projectsCTA: 'Explorar proyectos',
    contactCTA: 'Hablemos',
    scroll: 'DESLIZA PARA EXPLORAR',
    heroMetric1: 'FULL-STACK',
    heroMetric2: 'AUTOMATIZACIÓN',
    heroMetric3: 'INTEGRACIONES',
    skillsEyebrow: '01 / MIS HERRAMIENTAS',
    skillsTitle: 'Mi ecosistema',
    skillsTitle2: 'tecnológico.',
    skillsIntro:
      'Herramientas que utilizo para construir soluciones robustas, modernas y mantenibles.',
    frontend: 'Frontend',
    backend: 'Backend & datos',
    devops: 'Cloud & DevOps',
    tools: 'Herramientas & automatización',
    projectsEyebrow: '02 / TRABAJOS SELECCIONADOS',
    projectsTitle: 'Ideas convertidas',
    projectsTitle2: 'en productos.',
    projectsIntro:
      'Una selección de soluciones reales, diseñadas para resolver necesidades operativas y de negocio.',
    projectDetail: 'Ver detalles',
    repo: 'Código fuente',
    live: 'Demo',
    unavailable: 'Enlace pendiente de configurar',
    aboutEyebrow: '03 / SOBRE MÍ',
    aboutTitle: 'Ingeniería con',
    aboutTitle2: 'propósito.',
    aboutText:
      'Me apasiona convertir desafíos reales en productos digitales intuitivos y robustos. Trabajo en todo el ciclo de desarrollo, conectando interfaces cuidadas, APIs eficientes y flujos automatizados que simplifican operaciones.',
    aboutSecond:
      'Mi experiencia en soporte técnico, análisis y formación aporta una perspectiva centrada en las personas y en la resolución práctica de problemas.',
    location: 'Basado en Colombia',
    language: 'Español nativo · Inglés C1',
    education: 'Ingeniería de Software · Politécnico Grancolombiano',
    experienceEyebrow: '04 / MI TRAYECTORIA',
    experienceTitle: 'Experiencia que',
    experienceTitle2: 'construye criterio.',
    experienceIntro: 'Un recorrido entre la tecnología, el análisis y las personas.',
    educationTitle: 'Formación académica',
    educationDetail: 'Politécnico Grancolombiano · 2023–2026',
    contactEyebrow: '05 / CONECTEMOS',
    contactTitle: '¿Construimos algo',
    contactTitle2: 'extraordinario?',
    contactIntro: '¿Tienes una idea, un reto técnico o una oportunidad? Me encantaría conocerla.',
    name: 'Tu nombre',
    email: 'Tu correo electrónico',
    message: 'Cuéntame sobre tu proyecto...',
    send: 'Enviar mensaje',
    mailNote: 'El formulario abrirá tu aplicación de correo con el mensaje preparado.',
    cv: 'Descargar CV',
    bottom: 'Diseñado y desarrollado con intención.',
    rights: 'Todos los derechos reservados.',
    validation: 'Completa todos los campos con un correo válido.',
  },
  en: {
    nav: ['Home', 'Skills', 'Projects', 'About', 'Experience', 'Contact'],
    available: 'Open to opportunities',
    eyebrow: 'HEY, I’M ANDRÉS PINEDA',
    heroStart: 'Building software',
    heroEnd: 'that moves ideas.',
    heroBody:
      'Software Engineer focused on digital experiences, scalable systems, and intelligent automation. From concept to product.',
    projectsCTA: 'Explore my work',
    contactCTA: 'Let’s talk',
    scroll: 'SCROLL TO EXPLORE',
    heroMetric1: 'FULL-STACK',
    heroMetric2: 'AUTOMATION',
    heroMetric3: 'INTEGRATIONS',
    skillsEyebrow: '01 / MY TOOLKIT',
    skillsTitle: 'My technology',
    skillsTitle2: 'ecosystem.',
    skillsIntro: 'The tools I use to build robust, modern, and maintainable solutions.',
    frontend: 'Frontend',
    backend: 'Backend & data',
    devops: 'Cloud & DevOps',
    tools: 'Tools & automation',
    projectsEyebrow: '02 / SELECTED WORK',
    projectsTitle: 'Ideas turned',
    projectsTitle2: 'into products.',
    projectsIntro:
      'A selection of real-world solutions built to solve operational and business challenges.',
    projectDetail: 'View details',
    repo: 'Source code',
    live: 'Live demo',
    unavailable: 'Link not configured yet',
    aboutEyebrow: '03 / ABOUT ME',
    aboutTitle: 'Engineering with',
    aboutTitle2: 'purpose.',
    aboutText:
      'I love turning real challenges into intuitive, reliable digital products. I work across the development lifecycle, connecting polished interfaces, efficient APIs, and automated workflows that make operations simpler.',
    aboutSecond:
      'My background in technical support, analysis, and training brings a people-first, practical approach to solving problems.',
    location: 'Based in Colombia',
    language: 'Native Spanish · C1 English',
    education: 'Software Engineering · Politécnico Grancolombiano',
    experienceEyebrow: '04 / MY JOURNEY',
    experienceTitle: 'Experience that',
    experienceTitle2: 'builds perspective.',
    experienceIntro: 'A path through technology, analysis, and people.',
    educationTitle: 'Education',
    educationDetail: 'Politécnico Grancolombiano · 2023–2026',
    contactEyebrow: '05 / LET’S CONNECT',
    contactTitle: 'Let’s build something',
    contactTitle2: 'remarkable.',
    contactIntro:
      'Have an idea, a technical challenge, or an opportunity? I’d love to hear about it.',
    name: 'Your name',
    email: 'Your email address',
    message: 'Tell me about your project...',
    send: 'Send message',
    mailNote: 'The form will open your email app with the message prefilled.',
    cv: 'Download résumé',
    bottom: 'Designed and developed with intention.',
    rights: 'All rights reserved.',
    validation: 'Fill in every field with a valid email address.',
  },
} as const
