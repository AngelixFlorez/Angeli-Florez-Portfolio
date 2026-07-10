export const personalInfo = {
  name: 'Angeli Florez',
  email: 'angelixflorez@gmail.com',
  location: 'Bogotá, Colombia',
  social: {
    github: 'https://github.com/AngelixFlorez',
    linkedin: 'https://www.linkedin.com/in/angelixflorez/',
    whatsapp: 'https://wa.me/+573214345914',
    gmail: 'mailto:angelixflorez@gmail.com',
  },
}

export const skills = {
  Frontend: [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Vite', level: 85 },
  ],
  Backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Express', level: 85 },
    { name: 'Socket.IO', level: 80 },
    { name: 'MongoDB', level: 82 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'Java', level: 75 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Python', level: 82 },
  ],
  'Cloud & DevOps': [
    { name: 'Docker', level: 75 },
    { name: 'Clerk', level: 80 },
  ],
}

export const projects = [
  {
    key: 'yomessage',
    title: 'YoMessage',
    tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'Docker', 'Clerk'],
    image: '/projectImages/YoMessagePortada.png',
    images: [
      '/projectImages/YoMessagePortada.png',
      '/projectImages/YoMessage1.png',
      '/projectImages/YoMessage2.png',
      '/projectImages/YoMessage3.png',
      '/projectImages/YoMessage4.png',
      '/projectImages/YoMessage5.png',
    ],
    demo: 'https://yomessageapp.onrender.com/',
    repo: 'https://github.com/AngelixFlorez/YoMessage',
    color: '#6366f1',
  },
  {
    key: 'panmac',
    title: 'PanMac',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Express', 'Vite', 'Node.js'],
    image: '/projectImages/PanMac/panMacPortada.png',
    images: ['/projectImages/PanMac/panMacPortada.png'],
    demo: 'https://ecommerce-panmac.onrender.com',
    repo: 'https://github.com/AngelixFlorez/Ecommerce-PanMac',
    color: '#f59e0b',
  },
  {
    key: 'geminiclone',
    title: 'Gemini Clone',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: '/projectImages/GeminiClone/geminiClonePortada.png',
    images: ['/projectImages/GeminiClone/geminiClonePortada.png'],
    demo: 'https://gemini-clone-cgag.onrender.com',
    repo: 'https://github.com/AngelixFlorez/Gemini-Clone',
    color: '#4285f4',
  },
  {
    key: 'bloggeo',
    title: 'Bloggeo',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'Vite', 'Java', 'Spring Boot'],
    image: '/projectImages/Bloggeo/bloggeoPortada.png',
    images: ['/projectImages/Bloggeo/bloggeoPortada.png'],
    demo: 'https://blog-8zre.onrender.com',
    repo: 'https://github.com/AngelixFlorez/Blog-Plataform',
    color: '#10b981',
  },
]

export const education = [
  {
    key: 'systems-engineering',
    institution: 'Fundación Universitaria Monserrate',
    year: '2024 - Present',
  },
  {
    key: 'modern-languages',
    institution: 'Universidad EAN',
    year: '2025 - Present',
  },
]
