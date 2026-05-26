"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

export function About() {
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
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          {/* Left side - Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-accent">À propos</span> de moi
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full" />
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {portfolioData.about}
            </p>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { label: "Projets réalisés", value: "5" },
                { label: "Clients satisfaits", value: "4" },
                { label: "Années d'expérience", value: "2" },
                { label: "Technologies", value: "4" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-lg bg-background border border-border/50 ${
                    isVisible ? `animate-slideInLeft` : ""
                  }`}
                  style={{
                    animation: isVisible ? `slideInLeft 0.6s ease-out ${index * 0.1}s both` : "none",
                  }}
                >
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Decorative Element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Gradient circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 blur-3xl animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 blur-2xl animate-pulse-glow" />
              <div className="absolute inset-16 rounded-full border-2 border-accent/30 flex items-center justify-center">
                <div className="text-6xl">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
