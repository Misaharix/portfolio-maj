"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState} from "react";
import Image from 'next/image';

export function Projects() {
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
              <a
                key={project.id}
                href={project.link}
                className={`group block ${
                  isVisible ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animation: isVisible
                    ? `slideInLeft 0.6s ease-out ${index * 0.15}s both`
                    : "none",
                }}
              >
                <div className="overflow-hidden rounded-xl border border-border/50 bg-background hover:border-accent/50 transition-all duration-300 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 md:h-56 bg-gradient-to-br from-accent/10 to-secondary/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                        📸
                      </div>
                    </div>
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
                    <div className="mt-4 inline-flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>En savoir plus</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent/10 hover:border-accent/50 transition-colors duration-300"
            >
              Voir tous mes projets
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
