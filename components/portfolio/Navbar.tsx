"use client";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Formation", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="#" className="animate-slideInLeft">
            <div className="text-2xl font-bold gradient-text">Misaharitsoa</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 items-center">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                // --- CLASSES MODIFIÉES POUR LE THÈME VIOLET ---
                // px-4 py-2 rounded-full : crée la forme de pilule
                // hover:bg-violet-600 : fond violet au survol (Tailwind standard)
                // hover:text-white : texte blanc pour le contraste
                className="px-4 py-2 rounded-full text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-violet-600 hover:text-white"
                style={{
                  animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-muted"
          >
            <div className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border pb-4 pt-2 px-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // Effet pilule violet également appliqué au menu mobile
                className="block px-4 py-2 mt-1 rounded-full text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-violet-600 hover:text-white text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}