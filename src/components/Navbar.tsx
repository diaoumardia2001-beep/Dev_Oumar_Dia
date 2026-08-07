import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Accueil", href: "#home", id: "home" },
    { name: "Compétences", href: "#skills", id: "skills" },
    { name: "À propos", href: "#about", id: "about" },
    { name: "Projets", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Track scroll position for header glass opacity & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl border transition-all duration-300 px-5 sm:px-6 py-3.5 backdrop-blur-xl ${
          scrolled
            ? "bg-[#050505]/85 border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-white/[0.04] border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] rounded-lg px-1 py-0.5 transition-colors"
        >
          Oumar
          <span className="text-[#8A2BE2] drop-shadow-[0_0_10px_rgba(138,43,226,0.7)] ml-0.5">
            .
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] rounded-md px-1 py-0.5 ${
                  isActive
                    ? "text-[#8A2BE2] font-semibold"
                    : "text-gray-300 hover:text-[#00FF88]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#00FF88] rounded-full shadow-[0_0_8px_rgba(138,43,226,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            type="button"
            aria-label={open ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
            className="text-white p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#8A2BE2]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5 text-[#00FF88]" /> : <Menu className="w-5 h-5 text-gray-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/15 bg-[#050505]/95 backdrop-blur-2xl p-5 shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-[#00FF88] border-l-4 border-[#8A2BE2]"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}