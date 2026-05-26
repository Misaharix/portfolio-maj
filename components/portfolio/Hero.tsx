"use client";

import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4"
    >
      <div className="max-w-4xl w-full">
        <div className="space-y-8 animate-fadeInUp">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="text-sm font-semibold tracking-wider text-muted/60 uppercase">
              Bienvenue sur mon portfolio
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">{portfolioData.name}</span>
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold gradient-text">
              {portfolioData.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            {portfolioData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-6 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors duration-300"
            >
              Me contacter
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-float">
            <div className="flex justify-center">
              <div className="border border-accent/30 rounded-full p-3 animate-pulse-glow">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
