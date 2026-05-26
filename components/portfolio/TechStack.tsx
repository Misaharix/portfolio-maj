"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";
// Import des vraies icônes technologiques
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiNodedotjs, SiNestjs, SiDjango, SiPostgresql, 
  SiMongodb, SiDocker, SiGit, SiVercel,
  SiC, SiPython, SiPhp, SiOpenjdk,SiMysql,SiElasticsearch,SiPostman,
} from "react-icons/si";

// Fonction utilitaire pour associer le slug string à son vrai composant d'icône coloré
function getTechIcon(iconSlug: string) {

  const icons: Record<string, React.ReactNode> = {
    // Languages
    c: <SiC className="w-6 h-6 text-[#A8B9CC]" />,
    nodejs: <SiNodedotjs className="w-6 h-6 text-[#339933]" />,
    python: <SiPython className="w-6 h-6 text-[#3776AB]" />,
    php: <SiPhp className="w-6 h-6 text-[#777BB4]" />,
    java: <SiOpenjdk className="w-6 h-6 text-[#007396]" />,
    
    // Frontend
    nextjs: <SiNextdotjs className="w-6 h-6 text-foreground" />,
    react: <SiReact className="w-6 h-6 text-[#61DAFB]" />,
    typescript: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
    tailwindcss: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
    
    // Backend
    nestjs: <SiNestjs className="w-6 h-6 text-[#E0234E]" />,
    django: <SiDjango className="w-6 h-6 text-[#092E20]" />,
    
    // Tools
    postgresql: <SiPostgresql className="w-6 h-6 text-[#4169E1]" />,
    mysql: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
    elasticsearch: <SiElasticsearch className="w-6 h-6 text-[#005571]" />,
    mongodb: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
    postman: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
    docker: <SiDocker className="w-6 h-6 text-[#2496ED]" />,
    git: <SiGit className="w-6 h-6 text-[#F05032]" />,
    vercel: <SiVercel className="w-6 h-6 text-foreground" />,
  };

  return icons[iconSlug] || <span>🛠️</span>;
}

export function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stacks = [
    { title: "Langages", items: portfolioData.techStack.languages },
    { title: "Frontend", items: portfolioData.techStack.frontend },
    { title: "Backend", items: portfolioData.techStack.backend },
    { title: "Outils & Databases", items: portfolioData.techStack.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto"> {/* Élargi le conteneur max pour accueillir les 4 colonnes */}
        <div
          ref={ref}
          className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mon <span className="gradient-text">Stack Technologique</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
            <p className="text-foreground/60 mt-4 text-lg">
              Les technologies avec lesquelles je travaille et que je maîtrise
            </p>
          </div>

          {/* Tech Stack Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Grille ajustée à 4 colonnes */}
            {stacks.map((stack, stackIndex) => (
              <div
                key={stack.title}
                className={`group p-6 rounded-xl border border-border/50 bg-background hover:border-accent/50 transition-all duration-300 relative ${
                  isVisible ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animation: isVisible
                    ? `slideInLeft 0.6s ease-out ${stackIndex * 0.12}s both`
                    : "none",
                }}
              >
                {/* Stack Title */}
                <h3 className="text-xl font-bold text-accent mb-6">
                  {stack.title}
                </h3>

                {/* Tech Items */}
                <div className="space-y-3">
                  {stack.items?.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-2 rounded-lg group/item hover:bg-card/50 transition-colors"
                      style={{
                        animation: isVisible
                          ? `fadeInUp 0.6s ease-out ${
                              stackIndex * 0.12 + index * 0.04
                            }s both`
                          : "none",
                      }}
                    >
                      {/* Affichage de la vraie icône via la fonction utilitaire */}
                      <div className="group-hover/item:scale-110 transition-transform duration-200">
                        {getTechIcon(tech.icon)}
                      </div>
                      <span className="text-foreground/80 font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Border Animation */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="mt-16 text-center">
            <p className="text-foreground/60 text-sm">
              Et j'apprends constamment de nouvelles technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}