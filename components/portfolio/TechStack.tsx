"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

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
    { title: "Frontend", items: portfolioData.techStack.frontend },
    { title: "Backend", items: portfolioData.techStack.backend },
    { title: "Outils & Databases", items: portfolioData.techStack.tools },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
          <div className="grid md:grid-cols-3 gap-8">
            {stacks.map((stack, stackIndex) => (
              <div
                key={stack.title}
                className={`group p-8 rounded-xl border border-border/50 bg-background hover:border-accent/50 transition-all duration-300 ${
                  isVisible ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animation: isVisible
                    ? `slideInLeft 0.6s ease-out ${stackIndex * 0.15}s both`
                    : "none",
                }}
              >
                {/* Stack Title */}
                <h3 className="text-xl font-bold text-accent mb-6">
                  {stack.title}
                </h3>

                {/* Tech Items */}
                <div className="space-y-3">
                  {stack.items.map((tech, index) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-2 rounded-lg group/item hover:bg-card/50 transition-colors"
                      style={{
                        animation: isVisible
                          ? `fadeInUp 0.6s ease-out ${
                              stackIndex * 0.15 + index * 0.05
                            }s both`
                          : "none",
                      }}
                    >
                      <span className="text-2xl group-hover/item:scale-125 transition-transform">
                        {tech.icon}
                      </span>
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
