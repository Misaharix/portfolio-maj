"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="#" className="text-2xl font-bold gradient-text mb-2 block">
              Misaharitsoa
            </Link>
            <p className="text-foreground/60 text-sm">
              Créateur de solutions numériques innovantes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-foreground/60 text-sm">
              {[
                { name: "Accueil", href: "#hero" },
                { name: "Projets", href: "#projects" },
                { name: "Compétences", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Commençons</h3>
            <p className="text-foreground/60 text-sm mb-4">
              Prêt à transformer votre idée en réalité? Contactez-moi dès maintenant.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium"
            >
              Me contacter
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

        {/* Divider */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2026 Tous droits réservés.
          </p>
          <div className="flex gap-6 text-foreground/60 text-sm">
            <a href="#" className="hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
