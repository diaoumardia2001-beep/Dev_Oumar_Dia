import { motion, type Variants } from "framer-motion";
import { FolderGit2, ExternalLink, Sparkles, Bot, Layers } from "lucide-react";
import { projectsList } from "../data/projects";

// Safe Inline Github SVG icon
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

export default function Projects() {
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const featuredProject = projectsList.find((p) => p.isFeatured) || projectsList[0];
  const secondaryProjects = projectsList.filter((p) => !p.isFeatured);

  return (
    <section
      id="projects"
      className="scroll-mt-24 relative py-24 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[30rem] h-[30rem] bg-[#8A2BE2]/15 blur-[160px] rounded-full pointer-events-none" />
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
            <FolderGit2 className="w-4 h-4 text-[#8A2BE2]" />
            <span>Réalisations & Solutions</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mes Projets <span className="text-[#8A2BE2]">Innovants</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Une sélection d'applications concrètes combinant ingénierie logicielle, intelligence artificielle et création de valeur métier.
          </p>
        </motion.div>

        {/* Projects Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {/* FEATURED HERO PROJECT CARD */}
          {featuredProject && (
            <motion.div
              variants={cardVariants}
              className="group relative rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-[#8A2BE2]/10 border-2 border-[#8A2BE2]/50 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_0_35px_rgba(138,43,226,0.2)] hover:border-[#00FF88]/60 hover:shadow-[0_0_45px_rgba(0,255,136,0.25)] transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Details & Tech */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#00FF88] text-xs font-semibold uppercase tracking-wider">
                      {featuredProject.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-[#00FF88] animate-pulse" />
                      Projet Phare IA
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#00FF88] transition-colors leading-tight">
                    {featuredProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech Badges with Icons */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/15 text-xs font-medium text-gray-200 hover:border-white/30 transition-colors"
                      >
                        {tech.icon && (
                          <span style={{ color: tech.color || "#00FF88" }}>
                            {tech.icon}
                          </span>
                        )}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                    {featuredProject.demoUrl && (
                      <a
                        href={featuredProject.demoUrl}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#8A2BE2] hover:bg-[#7b24cc] text-white text-sm font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(138,43,226,0.4)] hover:scale-105"
                      >
                        <span>Voir la démo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white text-sm font-medium hover:border-[#00FF88] hover:text-[#00FF88] hover:bg-white/10 transition-all duration-300 hover:scale-105"
                      >
                        <GithubIcon className="w-4 h-4 text-gray-300" />
                        <span>Code GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Side: Visual Cyber Banner Placeholder */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-tr from-[#050505] via-[#8A2BE2]/20 to-[#00FF88]/10 border border-white/10 p-6 flex flex-col justify-center items-center text-center min-h-[220px] group-hover:border-[#8A2BE2]/40 transition-colors">
                  <Bot className="w-16 h-16 text-[#00FF88] mb-4 animate-bounce" />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
                    GovTech & Intelligence Artificielle
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Assistant RAG Citoyen & Démarches Administratives
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* SECONDARY PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[#8A2BE2]/50 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-[#00FF88] text-xs font-semibold">
                      {project.category}
                    </span>
                    <Layers className="w-4 h-4 text-gray-500 group-hover:text-[#8A2BE2] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00FF88] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                      >
                        {tech.icon && (
                          <span style={{ color: tech.color || "#00FF88" }}>
                            {tech.icon}
                          </span>
                        )}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs font-medium hover:border-[#8A2BE2] hover:bg-white/10 transition-all duration-300"
                    >
                      <GithubIcon className="w-4 h-4 text-gray-300" />
                      <span>Code GitHub</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#8A2BE2] text-white text-xs font-semibold hover:bg-[#7b24cc] transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.3)]"
                    >
                      <span>Voir la démo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
