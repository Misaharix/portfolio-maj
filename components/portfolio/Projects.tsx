"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

type ProjectType = typeof portfolioData.projects[0];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
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

  // Gestion de la fermeture par la touche Échap et blocage du scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
            <p className="text-foreground/60 mt-4 text-lg">
              Découvrez une sélection de mes projets les plus intéressants
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group block cursor-pointer ${
                  isVisible ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animation: isVisible
                    ? `slideInLeft 0.6s ease-out ${index * 0.15}s both`
                    : "none",
                }}
              >
                <div className="overflow-hidden rounded-xl border border-border/50 bg-background hover:border-accent/50 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                  
                  {/* Image Réelle sur la carte */}
                  <div className="relative h-48 md:h-56 bg-muted overflow-hidden border-b border-border/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index === 0}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/60 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Link */}
                    <div className="mt-4 inline-flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                      <span>En savoir plus</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent/10 hover:border-accent/50 transition-colors duration-300"
            >
              Voir tous mes projets
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* --- COMPOSANT MODAL CORRIGÉ --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background border border-border rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scaleUp flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/60 hover:bg-accent/10 border border-border hover:border-accent/30 text-foreground/70 hover:text-accent transition-colors"
              aria-label="Fermer la modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Réelle dans la modal au lieu de l'appareil photo */}
            <div className="relative h-64 md:h-80 w-full bg-muted border-b border-border">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 42rem"
                priority
              />
            </div>

            {/* Contenu détaillé */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <div className="h-0.5 w-12 bg-accent rounded-full" />
              </div>

              <p className="text-foreground/80 leading-relaxed text-base">
                {selectedProject.description}
              </p>

              {/* Technologies utilisées */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted/60">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Liens de redirection */}
              <div className="flex justify-end gap-4 pt-4 border-t border-border/50">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-card/50 transition-colors"
                >
                  Fermer
                </button>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors inline-flex items-center gap-2"
                >
                  Visiter le site
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}