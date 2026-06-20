export const personalInfo = {
  name: 'Angeli Florez',
  tagline: 'Turning complex problems into elegant, high-impact digital experiences',
  description: 'I craft high-performance web applications with meticulous attention to interaction design, animation, and user experience.',
  email: 'angelixflorez@gmail.com',
  location: 'Bogotá, Colombia',
  social: {
    github: 'https://github.com/AngelixFlorez',
    linkedin: 'https://www.linkedin.com/in/angelixflorez/',
    whatsapp: 'https://wa.me/+573214345914',
    gmail: 'mailto:angelixflorez@gmail.com',
  },
  about: [
    'With over 5 years of experience in software development, I transform ideas into powerful digital solutions. My journey spans from building scalable backend architectures to crafting immersive frontend experiences that users love.',
    'I believe technology should be both powerful and beautiful. Every line of code is an opportunity to create something that not only works flawlessly but also sparks joy and intuition in those who interact with it.',
    'Currently exploring the frontiers of web-based 3D graphics, AI-powered interfaces, and real-time collaborative experiences that push the boundaries of what the browser can do.',
  ],
  philosophy: 'Code is poetry in motion. Every function, component, and pixel is a brushstroke in a larger masterpiece of digital craftsmanship.',
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
    { name: 'Blender', level: 70 },
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
    title: 'YoMessage',
    description: 'Real-time messaging app with a stunning, fully customizable UI. Built with React 19, Express 5, Socket.IO, MongoDB, and Clerk Auth.',
    tech: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Tailwind CSS', 'Docker', 'Clerk'],
    problem: 'Existing messaging platforms offer limited customization and lack engaging real-time features like theme personalization, media sharing, and immersive chat experiences out of the box.',
    result: 'Delivered a full-featured messaging platform with 27 theme presets, 16 chat wallpapers, real-time image/video sharing, secure Clerk authentication, and one-command Docker deployment.',
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
    title: 'Ethereal Space',
    description: 'Immersive 3D collaboration platform for remote teams with virtual environments and real-time avatar interactions.',
    tech: ['Three.js', 'React Three Fiber', 'WebRTC', 'Node.js', 'PostgreSQL'],
    problem: 'Remote teams lacked engaging spatial tools for creative collaboration.',
    result: 'Adopted by 15+ design teams, average session duration of 45 minutes, NPS score of 72.',
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
    title: 'Violet Design System',
    description: 'Enterprise-grade component library powering 12 products with 200+ accessible, themeable components.',
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Tailwind'],
    problem: 'Inconsistent UI across products led to 3x development time for new features.',
    result: 'Reduced UI development time by 70%, maintained 99.9% accessibility score, used by 80+ engineers.',
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
    title: 'Wave Engine',
    description: 'Web-based creative coding environment with visual programming interface and real-time preview.',
    tech: ['React', 'Web Audio API', 'WebAssembly', 'Canvas', 'GSAP'],
    problem: 'No accessible browser-based tool existed for creative coding education.',
    result: '50k+ monthly active users, featured on Product Hunt, 4.8/5 rating.',
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
    degree: 'Systems Engineering',
    institution: 'Fundación Universitaria Monserrate',
    year: '2024 - Present',
    focus: 'Software Engineering, Algorithms, Data Structures, Human-Computer Interaction',
  },
  {
    degree: 'Modern Languages',
    institution: 'Universidad EAN',
    year: '2025 - Present',
    focus: 'English, French, German',
  },
]
