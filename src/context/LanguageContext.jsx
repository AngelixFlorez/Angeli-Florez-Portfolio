import { createContext, useContext, useState, useCallback } from 'react'

const translations = {
  en: {
    nav: { home: 'Home', about: 'About Me', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
    hero: {
      badge: 'STUDENT',
      career: 'Systems Engineering',
      tagline: 'Turning complex problems into elegant, high-impact digital experiences',
      explore: 'Explore My Work',
      opportunities: 'Available for opportunities',
      contact: 'Get in Touch',
    },
    about: {
      title: 'About Me', label: 'About',
      heading1: 'Transforming ideas into',
      heading2: 'digital reality',
      sp1Label: 'Full-Stack Architecture',
      sp1Desc: 'Scalable systems with modern frontend & backend stacks',
      sp2Label: 'Creative Development',
      sp2Desc: '3D web experiences & advanced motion design',
      sp3Label: 'System Design',
      sp3Desc: 'High-performance distributed architectures',
      sp4Label: 'UI Engineering',
      sp4Desc: 'Design-driven development with pixel-perfect precision',
      para1: 'With over 5 years of experience in software development, I transform ideas into powerful digital solutions. My journey spans from building scalable backend architectures to crafting immersive frontend experiences that users love.',
      para2: 'I believe technology should be both powerful and beautiful. Every line of code is an opportunity to create something that not only works flawlessly but also sparks joy and intuition in those who interact with it.',
      para3: 'Currently exploring the frontiers of web-based 3D graphics, AI-powered interfaces, and real-time collaborative experiences that push the boundaries of what the browser can do.',
      philosophy: 'Code is poetry in motion. Every function, component, and pixel is a brushstroke in a larger masterpiece of digital craftsmanship.',
    },
    skills: { title: 'Technical', highlight: 'expertise', label: 'Skills', subtitle: 'A comprehensive toolkit spanning frontend, backend, creative technologies, and cloud infrastructure.' },
    projects: { label: 'Projects', title: 'Selected', highlight: 'work', subtitle: 'A curated selection of projects that showcase my expertise in building high-performance, visually compelling digital experiences.', problem: 'Problem', result: 'Result', demo: 'Live Demo', repo: 'Repository' },
    education: { label: 'Education', subtitle: 'Academic background and professional development' },
    contact: { label: 'Contact', title: "Let's create something", highlight: 'amazing', subtitle: "Have a project in mind or just want to connect? I'd love to hear from you. Let's build something extraordinary together.", findMe: 'Find me on', name: 'Name', email: 'Email', message: 'Message', send: 'Send Message', sending: 'Sending...', success: 'Message Sent!', yourName: 'Your name', yourEmail: 'Your email', yourMessage: 'Your message...', subject: 'Subject' },
    footer: { rights: 'All rights reserved.', back: 'Back to top' },
    loading: {
      text: 'Loading',
      word1: 'Initializing',
      word2: 'Loading assets',
      word3: 'Compiling shaders',
      word4: 'Almost ready',
      portfolio: 'Portfolio',
    },
  },
  es: {
    nav: { home: 'Inicio', about: 'Sobre Mí', skills: 'Habilidades', projects: 'Proyectos', education: 'Educación', contact: 'Contacto' },
    hero: {
      badge: 'ESTUDIANTE',
      career: 'Ingeniería de Sistemas',
      tagline: 'Transformando problemas complejos en experiencias digitales elegantes y de alto impacto',
      explore: 'Explorar mi Trabajo',
      opportunities: 'Disponible para oportunidades',
      contact: 'Contáctame',
    },
    about: {
      title: 'Sobre Mí', label: 'Sobre Mí',
      heading1: 'Transformando ideas en',
      heading2: 'realidad digital',
      sp1Label: 'Arquitectura Full-Stack',
      sp1Desc: 'Sistemas escalables con stacks modernos de frontend y backend',
      sp2Label: 'Desarrollo Creativo',
      sp2Desc: 'Experiencias web 3D y diseño de movimiento avanzado',
      sp3Label: 'Diseño de Sistemas',
      sp3Desc: 'Arquitecturas distribuidas de alto rendimiento',
      sp4Label: 'Ingeniería UI',
      sp4Desc: 'Desarrollo impulsado por diseño con precisión de píxel perfecto',
      para1: 'Con más de 5 años de experiencia en desarrollo de software, transformo ideas en soluciones digitales potentes. Mi trayectoria abarca desde la creación de arquitecturas backend escalables hasta la elaboración de experiencias frontend inmersivas que los usuarios aman.',
      para2: 'Creo que la tecnología debe ser poderosa y hermosa. Cada línea de código es una oportunidad para crear algo que no solo funcione a la perfección, sino que también genere alegría e intuición en quienes interactúan con ella.',
      para3: 'Actualmente explorando las fronteras de los gráficos 3D basados en web, interfaces impulsadas por IA y experiencias colaborativas en tiempo real que empujan los límites de lo que el navegador puede hacer.',
      philosophy: 'El código es poesía en movimiento. Cada función, componente y píxel es una pincelada en una obra maestra más grande de artesanía digital.',
    },
    skills: { title: 'Experiencia', highlight: 'técnica', label: 'Habilidades', subtitle: 'Un conjunto completo de herramientas que abarca frontend, backend, tecnologías creativas e infraestructura en la nube.' },
    projects: { label: 'Proyectos', title: 'Trabajo', highlight: 'seleccionado', subtitle: 'Una selección curada de proyectos que muestran mi experiencia en la creación de experiencias digitales de alto rendimiento y visualmente atractivas.', problem: 'Problema', result: 'Resultado', demo: 'Demo en Vivo', repo: 'Repositorio' },
    education: { label: 'Educación', subtitle: 'Formación académica y desarrollo profesional' },
    contact: { label: 'Contacto', title: 'Creemos algo', highlight: 'increíble', subtitle: '¿Tienes un proyecto en mente o solo quieres conectar? Me encantaría saber de ti. Construyamos algo extraordinario juntos.', findMe: 'Encuéntrame en', name: 'Nombre', email: 'Correo', message: 'Mensaje', send: 'Enviar Mensaje', sending: 'Enviando...', success: '¡Mensaje Enviado!', yourName: 'Tu nombre', yourEmail: 'Tu correo', yourMessage: 'Tu mensaje...', subject: 'Asunto' },
    footer: { rights: 'Todos los derechos reservados.', back: 'Volver arriba' },
    loading: {
      text: 'Cargando',
      word1: 'Inicializando',
      word2: 'Cargando recursos',
      word3: 'Compilando shaders',
      word4: 'Casi listo',
      portfolio: 'Portafolio',
    },
  },
  fr: {
    nav: { home: 'Accueil', about: 'À Propos', skills: 'Compétences', projects: 'Projets', education: 'Formation', contact: 'Contact' },
    hero: {
      badge: 'ÉTUDIANT',
      career: 'Génie Informatique',
      tagline: 'Transformer des problèmes complexes en expériences numériques élégantes à fort impact',
      explore: 'Explorer mon Travail',
      opportunities: 'Disponible pour opportunités',
      contact: 'Me Contacter',
    },
    about: {
      title: 'À Propos de Moi', label: 'À Propos',
      heading1: 'Transformer des idées en',
      heading2: 'réalité numérique',
      sp1Label: 'Architecture Full-Stack',
      sp1Desc: 'Systèmes évolutifs avec des piles modernes frontend & backend',
      sp2Label: 'Développement Créatif',
      sp2Desc: 'Expériences web 3D et design de mouvement avancé',
      sp3Label: 'Conception de Systèmes',
      sp3Desc: 'Architectures distribuées haute performance',
      sp4Label: 'Ingénierie UI',
      sp4Desc: 'Développement axé sur le design avec une précision parfaite',
      para1: 'Avec plus de 5 ans d\'expérience en développement logiciel, je transforme des idées en solutions numériques puissantes. Mon parcours va de la construction d\'architectures backend évolutives à la création d\'expériences frontend immersives que les utilisateurs adorent.',
      para2: 'Je crois que la technologie doit être à la fois puissante et belle. Chaque ligne de code est une opportunité de créer quelque chose qui non seulement fonctionne parfaitement, mais qui apporte aussi joie et intuition à ceux qui interagissent avec elle.',
      para3: 'Actuellement, j\'explore les frontières des graphiques 3D basés sur le web, des interfaces alimentées par l\'IA et des expériences collaboratives en temps réel qui repoussent les limites du navigateur.',
      philosophy: 'Le code est de la poésie en mouvement. Chaque fonction, composant et pixel est un coup de pinceau dans un chef-d\'œuvre plus vaste d\'artisanat numérique.',
    },
    skills: { title: 'Expertise', highlight: 'technique', label: 'Compétences', subtitle: 'Une boîte à outils complète couvrant le frontend, le backend, les technologies créatives et l\'infrastructure cloud.' },
    projects: { label: 'Projets', title: 'Travail', highlight: 'sélectionné', subtitle: 'Une sélection de projets qui démontrent mon expertise dans la création d\'expériences numériques performantes et visuellement captivantes.', problem: 'Problème', result: 'Résultat', demo: 'Démo en Direct', repo: 'Dépôt' },
    education: { label: 'Formation', subtitle: 'Formation académique et développement professionnel' },
    contact: { label: 'Contact', title: 'Créons quelque chose', highlight: 'd\'incroyable', subtitle: 'Vous avez un projet en tête ou vous souhaitez simplement échanger ? Je serais ravi de vous entendre. Construisons ensemble quelque chose d\'extraordinaire.', findMe: 'Retrouvez-moi sur', name: 'Nom', email: 'Email', message: 'Message', send: 'Envoyer', sending: 'Envoi...', success: 'Message Envoyé !', yourName: 'Votre nom', yourEmail: 'Votre email', yourMessage: 'Votre message...', subject: 'Sujet' },
    footer: { rights: 'Tous droits réservés.', back: 'Retour en haut' },
    loading: {
      text: 'Chargement',
      word1: 'Initialisation',
      word2: 'Chargement des ressources',
      word3: 'Compilation des shaders',
      word4: 'Presque prêt',
      portfolio: 'Portfolio',
    },
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  const t = useCallback((section, key) => {
    return translations[lang]?.[section]?.[key] ?? key
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => prev === 'en' ? 'es' : prev === 'es' ? 'fr' : 'en')
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
