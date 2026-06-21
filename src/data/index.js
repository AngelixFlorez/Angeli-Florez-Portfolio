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
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 92 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Framer Motion', level: 85 },
  ],
  Backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 82 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'GraphQL', level: 80 },
    { name: 'REST APIs', level: 90 },
  ],
  'Creative Tech': [
    { name: 'Three.js', level: 85 },
    { name: 'WebGL/GLSL', level: 75 },
    { name: 'GSAP', level: 80 },
    { name: 'Figma', level: 82 },

  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'Vercel', level: 88 },
    { name: 'CI/CD', level: 82 },
    { name: 'Terraform', level: 70 },
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
    key: 'ethereal',
    title: 'Ethereal Space',
    tech: ['Three.js', 'React Three Fiber', 'WebRTC', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&q=80',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
    ],
    demo: 'https://example.com',
    repo: 'https://github.com',
    color: '#3b82f6',
  },
  {
    key: 'violet',
    title: 'Violet Design System',
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    ],
    demo: 'https://example.com',
    repo: 'https://github.com',
    color: '#7c3aed',
  },
  {
    key: 'wave',
    title: 'Wave Engine',
    tech: ['React', 'Web Audio API', 'WebAssembly', 'Canvas', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80',
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    ],
    demo: 'https://example.com',
    repo: 'https://github.com',
    color: '#60a5fa',
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
