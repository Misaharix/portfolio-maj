"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

export function Education() {
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
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mon <span className="gradient-text">Parcours</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className={`relative ${
                  isVisible ? "animate-slideInLeft" : ""
                }`}
                style={{
                  animation: isVisible
                    ? `slideInLeft 0.6s ease-out ${index * 0.15}s both`
                    : "none",
                }}
              >
                {/* Timeline marker */}
                <div className="absolute -left-6 top-0 md:-left-12 w-12 h-12 rounded-full border-4 border-accent bg-background flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div className="ml-8 md:ml-0 md:pl-12 pb-8 border-l-2 border-accent/20 md:border-l-0 md:pb-0">
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-accent/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-accent mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-foreground font-semibold mb-1">
                          {edu.school}
                        </p>
                        <p className="text-foreground/60 text-sm mb-3">
                          {edu.year}
                        </p>
                        <p className="text-foreground/70">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Experience Section */}
            <div className="mt-16 pt-16 border-t border-border/30">
              <h3 className="text-2xl font-bold text-accent mb-8">Expérience</h3>
              <div className="space-y-8">
                {portfolioData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative ${
                      isVisible ? "animate-slideInLeft" : ""
                    }`}
                    style={{
                      animation: isVisible
                        ? `slideInLeft 0.6s ease-out ${
                            (portfolioData.education.length + index) * 0.15
                          }s both`
                        : "none",
                    }}
                  >
                    {/* Timeline marker */}
                    <div className="absolute -left-6 top-0 md:-left-12 w-12 h-12 rounded-full border-4 border-secondary bg-background flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-secondary" />
                    </div>

                    {/* Content */}
                    <div className="ml-8 md:ml-0 md:pl-12 pb-8 border-l-2 border-secondary/20 md:border-l-0 md:pb-0">
                      <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-secondary/50 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4">
                          <div className="flex-grow">
                            <h4 className="text-xl font-bold text-secondary mb-1">
                              {exp.title}
                            </h4>
                            <p className="text-foreground font-semibold mb-1">
                              {exp.company}
                            </p>
                            <p className="text-foreground/60 text-sm mb-3">
                              {exp.period}
                            </p>
                            <p className="text-foreground/70">
                              {exp.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
