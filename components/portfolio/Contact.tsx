"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Parlons <span className="gradient-text">ensemble</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full mx-auto" />
            <p className="text-foreground/60 mt-4 text-lg">
              Vous avez un projet en tête? N'hésitez pas à me contacter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 ${
                isVisible ? "animate-slideInLeft" : ""
              }`}
              style={{
                animation: isVisible ? "slideInLeft 0.6s ease-out both" : "none",
              }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Mes coordonnées
              </h3>

              {/* Contact Details */}
              {[
                {
                  icon: "✉️",
                  label: "Email",
                  value: portfolioData.contact.email,
                  link: `mailto:${portfolioData.contact.email}`,
                },
                {
                  icon: "📱",
                  label: "Téléphone",
                  value: portfolioData.contact.phone,
                  link: `tel:${portfolioData.contact.phone}`,
                },
                {
                  icon: "📍",
                  label: "Localisation",
                  value: portfolioData.contact.location,
                  link: "#",
                },
              ].map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors group"
                  style={{
                    animation: isVisible
                      ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      : "none",
                  }}
                >
                  <span className="text-3xl">{contact.icon}</span>
                  <div>
                    <p className="text-foreground/60 text-sm">{contact.label}</p>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className="pt-8">
                <p className="text-foreground/60 text-sm mb-4">Réseaux sociaux</p>
                <div className="flex gap-4">
                  {portfolioData.contact.social.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center text-xl hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`${
                isVisible ? "animate-slideInRight" : ""
              }`}
              style={{
                animation: isVisible ? "slideInRight 0.6s ease-out 0.1s both" : "none",
              }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-xl border border-border/50 bg-background"
              >
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="votre.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50"
                  disabled={submitted}
                >
                  {submitted ? "Message envoyé! ✓" : "Envoyer le message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
