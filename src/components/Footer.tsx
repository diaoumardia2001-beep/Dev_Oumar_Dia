import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Compétences", href: "#skills" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#050505] text-white pt-16 pb-12 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
      {/* Background Glow Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[15rem] bg-[#8A2BE2]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Main Footer Layout (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 text-center md:text-left items-start">
          {/* Col 1 : Identity & Statement (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] rounded-lg px-1 py-0.5"
            >
              Oumar
              <span className="text-[#8A2BE2] drop-shadow-[0_0_10px_rgba(138,43,226,0.7)] ml-0.5">
                .
              </span>
            </a>
            <p className="text-sm font-semibold text-[#8A2BE2]">
              Développeur d’applications | IA générative
            </p>
            <p className="text-gray-400 text-sm max-w-md mx-auto md:mx-0 leading-relaxed">
              "Construire des solutions numériques modernes et intelligentes."
            </p>
          </div>

          {/* Col 2 : Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#00FF88] transition-colors focus:outline-none focus:ring-1 focus:ring-[#00FF88] rounded px-1 py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 : Social Networks (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              Réseaux professionnels
            </h4>
            <div className="flex justify-center md:justify-start gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub d'Oumar Dia"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#8A2BE2] hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn d'Oumar Dia"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:border-[#00FF88] hover:text-[#00FF88] hover:bg-white/10 transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Oumar Dia. Tous droits réservés.</p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-[#8A2BE2] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00FF88]" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
