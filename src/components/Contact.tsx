import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  User,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

// Safe Inline Github SVG Icon
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Safe Inline Linkedin SVG Icon
const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Veuillez remplir tous les champs du formulaire.");
      return;
    }

    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Veuillez saisir une adresse email valide.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      } else {
        setErrorMessage(
          data.error || "Impossible d'envoyer le message. Veuillez réessayer."
        );
      }
    } catch (err) {
      console.error("Erreur d'envoi du formulaire:", err);
      setErrorMessage(
        "Impossible d'envoyer le message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative py-24 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#8A2BE2]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00FF88]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#8A2BE2]/30 text-[#00FF88] text-xs sm:text-sm font-medium backdrop-blur-md mb-4">
            <MessageSquare className="w-4 h-4 text-[#8A2BE2]" />
            <span>Contact & Opportunités</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Travaillons <span className="text-[#8A2BE2]">ensemble</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Un projet, une opportunité professionnelle ou une collaboration ? Échangeons sur vos besoins applicatifs et d'intégration IA.
          </p>
        </motion.div>

        {/* 2-Column Grid: Contact Info (Left 5 cols) & Form (Right 7 cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* ZONE 1 : Carte d'Information Directe (5 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 backdrop-blur-xl hover:border-[#8A2BE2]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#00FF88]">
                  <Sparkles className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Oumar Dia</h3>
                  <p className="text-sm font-semibold text-[#8A2BE2]">
                    Développeur d’applications | IA générative
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Disponible pour étudier vos projets, opportunités d'emploi ou partenariats technologiques.
              </p>

              <div className="space-y-4 mb-8">
                {/* Email */}
                <a
                  href="mailto:diaoumardia2001@gmail.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#8A2BE2]/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#8A2BE2] group-hover:text-[#00FF88] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Email professionnel
                    </span>
                    <span className="text-sm font-medium text-white group-hover:text-[#00FF88] transition-colors truncate block">
                      diaoumardia2001@gmail.com
                    </span>
                  </div>
                </a>

                {/* Localisation */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-gray-300">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#00FF88]">
                    <MapPin className="w-5 h-5 text-[#00FF88]" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Localisation
                    </span>
                    <span className="text-sm font-medium text-white">
                      Côte d’Ivoire 🇨🇮
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Réseaux & Profils
              </span>
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub d'Oumar Dia"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#8A2BE2] hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn d'Oumar Dia"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#00FF88] hover:text-[#00FF88] hover:bg-white/10 transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#00FF88]" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* ZONE 2 : Formulaire de Contact (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 backdrop-blur-xl hover:border-[#8A2BE2]/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Envoyer un message
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Remplissez les informations ci-dessous et je vous répondrai dans les plus brefs délais.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-[#00FF88]/10 border border-[#00FF88]/40 text-center flex flex-col items-center justify-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#00FF88]" />
                <h4 className="text-xl font-bold text-white">
                  Message envoyé avec succès !
                </h4>
                <p className="text-gray-300 text-sm">
                  Merci de m'avoir contacté. Je prendrai connaissance de votre message très rapidement.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Nom */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Nom & Prénom
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="contact-name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Ex: Jean Kouassi"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Adresse Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="contact-email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="jean.kouassi@exemple.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2"
                  >
                    Votre Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    disabled={isSubmitting}
                    rows={4}
                    placeholder="Bonjour Oumar, je souhaite échanger au sujet de..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2] focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#8A2BE2] to-[#7b24cc] hover:from-[#9d3cf5] hover:to-[#8A2BE2] text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:shadow-[0_0_30px_rgba(138,43,226,0.7)] hover:scale-[1.01] active:scale-100 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
