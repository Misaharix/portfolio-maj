export const portfolioData = {
  name: "RABESA Misaharitsoa",
  title: "Full Stack Developer Next.js/Nest.js",
  description: "Je suis un développeur passionné par la création d'expériences numériques innovantes et performantes.",
  about: "Avec des années d'expérience en développement web, je maîtrise l'ensemble de la pile technologique moderne. Je suis spécialisé dans la création d'applications fullstack scalables et performantes, avec une attention particulière à l'expérience utilisateur et à la qualité du code.",
  
  techStack: {
    languages: [
      { name: "C", icon: "c" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
      { name: "Java", icon: "java" },
    ],
    frontend: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
    backend: [
      
      { name: "Nest.js", icon: "nestjs" },
      { name: "Django", icon: "django" },
    ],
    tools: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Postman (Test API)", icon: "postman" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Vercel", icon: "vercel" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "303Export",
      description: "Plateforme de commerce électronique complète avec panier, paiement et gestion d'inventaire.",
      image: "/projects/303.png",
      tags: ["Next.js", "Nest.js", "Postgres", "Stripe"],
      link: "https://303-export.tanalabs.net/",
    },
    {
      id: 2,
      title: "Unité de Coordinnation de Projet Santé (UCP_Santé)",
      description: "Système de gestion du personnel comprenant les formulaires d’embauche, la gestion des congés, la gestion des rôles et des autorisations de chaque compte pour la validation des demandes de congé, ainsi qu’un tableau de bord administrateur.",
      image: "/projects/ucp.png",
      tags: ["Next.js", "Django", "Postgres"],
      link: "#",
    },
    {
      id: 3,
      title: "Skincare",
      description: "Application collaborative de gestion des tâches avec synchronisation en temps réel de 4salons, notifications, système de réservation, tableau de bord administrateur et gestion de caisse.",
      image: "/projects/skinscare.png",
      tags: ["Next.js", "Nest.js", "Postgres"],
      link: "https://skinscare.tanalabs.net/",
    },
    {
      id: 4,
      title: "ESPA",
      description: "Site Vitrine Ecole Superieur Polytechnique d'Antananarivo",
      image: "/projects/espa.png",
      tags: ["Next.js"],
      link: "https://espa-v1-whje.vercel.app/",
    },
    {
      id: 5,
      title: "ESPA",
      description: "Apllication web d'inscription et réinscription Ecole Superieur Polytechnique d'Antananarivo",
      image: "/projects/espa.png",
      tags: ["Next.js", "Symfony","Automatisation Données Python ", "Postgres"],
      link: "#",
    },
     {
      id: 6,
      title: "Economic Development Board of Madagascar (EDBM)",
      description: "Explotation de Données et Transfert de Données csv dans SGBD(Postgres)",
      image: "/projects/edbm.png",
      tags: ["Excel"," Python ","Elasticsearch", "Postgres"],
      link: "#",
    },
  ],

  education: [
    {
      degree: "Master 1 en Informatique",
      school: "CNTEMAD — Université spécialisée dans l’enseignement à distance à Madagascar.",
      year: "2026",
      description: "Spécialisation en développement web et architecture logicielle.",
    },
    {
      degree: "Licence en Informatique",
      school: "CNTEMAD — Université spécialisée dans l’enseignement à distance à Madagascar.",
      year: "2022-2025",
      description: "Parcours Base de données et Genie Logiciel",
    },
    {
      degree: "Certifications Creation mini-jeux video web",
      school: "Orange Digital Center ",
      year: "2025",
      description: "Formation en création de mini-jeux vidéo web avec Phaser.js en JavaScript.",
    },
    {
      degree: "Certifications Design UI/UX et Wordpress",
      school: "Orange Digital Center ",
      year: "2025",
      description: "Formation en design graphique et intégration directe des maquettes sur WordPress.",
    },
    {
      degree: "Certifications Programmation C et Structure de données",
      school: "Orange Digital Center ",
      year: "2025",
      description: "Formation Programmations C et structure de données language C",
    },
  ],

  experience: [
    {
      title: "Junior FullStack Developer",
      company: "Tanalabs — Société de prestation de services et de consulting",
      period: "Avril 2026 – Aujourd’hui",
      description: "Plateforme de commerce électronique De 303-Export complète avec panier, paiement et gestion d'inventaire.",
    },
    {
    title: "Stagiaire FullStack Developer ",
      company: "Ucp_Santé",
      period: "Janvier 2026 -Juin 2026 (6 mois)",
      description: "Système de gestion du personnel comprenant les formulaires d’embauche, la gestion des congés, la gestion des rôles et des autorisations de chaque compte pour la validation des demandes de congé, ainsi qu’un tableau de bord administrateur.",
    },
     {
      title: "Junior FullStack Developer",
      company: "Tanalabs — Société de prestation de services et de consulting",
      period: "Aout 2025 – Mai 2026 (9mois)",
      description: "Application collaborative de gestion des tâches chez Skinscare avec synchronisation en temps réel de 4salons, notifications, système de réservation, tableau de bord administrateur et gestion de caisse.",
    },
    {
      title: "Stagiaire Developer",
      company: "Ecole Supérieur Polytechnique d'Antananarivo",
      period: "Novembre 2025 – Mars 2026 (5 mois)",
      description: "Site Vitrine Ecole Superieur Polytechnique d'Antananarivo et Apllication web d'inscription et réinscription Ecole Superieur Polytechnique d'Antananarivo",
    },
    {
      title: "Stagiaire",
      company: "Economic Development Board Of Madagascar",
      period: "Fevrier 2025 – Juin 2026 (5 mois)",
      description: "Explotation de Données et Transfert de Données csv dans SGBD(Postgres)",
    },
  ],

  contact: {
    email: "votre.email@example.com",
    phone: "+261 34 94 224 68",
    location: "Madagascar",
    social: [
      { name: "GitHub", url: "https://github.com/Misaharix", icon: "github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/misaharitsoa-rabesa-3822312a4/", icon: "linkedin" },
      { name: "Email", url: "mailto:misaharitsoa@gmail.com", icon: "email" },
    ],
  },
};