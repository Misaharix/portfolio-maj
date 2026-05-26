"use client";

import { portfolioData } from "@/data/portfolio";
import { useEffect, useRef, useState } from "react";
// Correction de l'import : SiLinkedin au lieu de SiLinkedIn
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import emailjs from "@emailjs/browser";

function getContactIcon(iconSlug: string, className = "w-6 h-6") {
  const icons: Record<string, React.ReactNode> = {
    email_info: <HiOutlineMail className={`${className} text-accent`} />,
    phone_info: <HiOutlinePhone className={`${className} text-accent`} />,
    location_info: <HiOutlineLocationMarker className={`${className} text-accent`} />,
    github: <SiGithub className={className} />,
    linkedin: <SiLinkedin className={`${className} text-[#0A66C2]`} />, // Mis à jour ici aussi
    email: <HiOutlineMail className={className} />,
  };
  return icons[iconSlug] || <span>📍</span>;
}

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);

    // Vos identifiants EmailJS sont bien enregistrés ici
    const SERVICE_ID = "service_8rlmqym";
    const TEMPLATE_ID = "template_ssuw38j";
    const PUBLIC_KEY = "ZY0f2bqcu1Ecx_ldC";

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          formRef.current,
          PUBLIC_KEY
        );
        
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          
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
              className={`space-y-8 ${isVisible ? "animate-slideInLeft" : ""}`}
              style={{ animation: isVisible ? "slideInLeft 0.6s ease-out both" : "none" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-8">Mes coordonnées</h3>

              {[
                { icon: "email_info", label: "Email", value: portfolioData.contact.email, link: `mailto:${portfolioData.contact.email}` },
                { icon: "phone_info", label: "Téléphone", value: portfolioData.contact.phone, link: `tel:${portfolioData.contact.phone}` },
                { icon: "location_info", label: "Localisation", value: portfolioData.contact.location, link: "#" },
              ].map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.link}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors group"
                  style={{ animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : "none" }}
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    {getContactIcon(contact.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">{contact.label}</p>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors">{contact.value}</p>
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center text-xl hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:scale-110 text-foreground"
                      title={social.name}
                    >
                      {getContactIcon(social.icon, "w-5 h-5")}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`${isVisible ? "animate-slideInRight" : ""}`}
              style={{ animation: isVisible ? "slideInRight 0.6s ease-out 0.1s both" : "none" }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-xl border border-border/50 bg-background"
              >
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nom</label>
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
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
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
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
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

                {error && (
                  <p className="text-red-500 text-sm font-medium animate-pulse">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-60 flex justify-center items-center"
                  disabled={isSending || submitted}
                >
                  {isSending ? (
                    <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    "Message envoyé! ✓"
                  ) : (
                    "Envoyer le message"
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}