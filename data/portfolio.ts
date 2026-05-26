export const portfolioData = {
  name: "Votre Nom",
  title: "Full Stack Developer",
  description: "Je suis un développeur passionné par la création d'expériences numériques innovantes et performantes.",
  about: "Avec plusieurs années d'expérience en développement web, je maîtrise l'ensemble de la pile technologique moderne. Je suis spécialisé dans la création d'applications fullstack scalables et performantes, avec une attention particulière à l'expérience utilisateur et à la qualité du code.",
  
  techStack: {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "Vue.js", icon: "💚" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Next.js", icon: "⚫" },
    ],
    backend: [
      { name: "Node.js", icon: "💚" },
      { name: "Laravel", icon: "🔴" },
      { name: "Python", icon: "🐍" },
      { name: "Express", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
    tools: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🔧" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "⚪" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plateforme de commerce électronique complète avec panier, paiement et gestion d'inventaire.",
      image: "/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec temps réel et notifications.",
      image: "/projects/taskapp.jpg",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "Plateforme de blog moderne avec système de commentaires et recommandations.",
      image: "/projects/blog.jpg",
      tags: ["Next.js", "PostgreSQL", "TypeScript"],
      link: "#",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Tableau de bord d'analyse en temps réel avec graphiques interactifs.",
      image: "/projects/analytics.jpg",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
  ],

  education: [
    {
      degree: "Master en Informatique",
      school: "Université de Technologie",
      year: "2022 - 2024",
      description: "Spécialisation en développement web et architecture logicielle.",
    },
    {
      degree: "Licence en Informatique",
      school: "Université Nationale",
      year: "2019 - 2022",
      description: "Formation complète en informatique et développement.",
    },
    {
      degree: "Certifications",
      school: "Plateformes en ligne",
      year: "2021 - Present",
      description: "AWS Solutions Architect, Google Cloud Professional, Kubernetes Administration.",
    },
  ],

  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description: "Développement d'applications fullstack, leadership technique et mentoring.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2021 - 2023",
      description: "Création de sites web et applications personnalisées pour clients variés.",
    },
  ],

  contact: {
    email: "votre.email@example.com",
    phone: "+33 X XX XX XX XX",
    location: "France",
    social: [
      { name: "GitHub", url: "#", icon: "💻" },
      { name: "LinkedIn", url: "#", icon: "💼" },
      { name: "Twitter", url: "#", icon: "🐦" },
      { name: "Email", url: "mailto:votre.email@example.com", icon: "✉️" },
    ],
  },
};
