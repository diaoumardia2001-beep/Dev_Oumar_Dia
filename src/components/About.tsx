import { motion, type Variants } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
  BrainCircuit,
  Sparkles,
  Terminal,
  CheckCircle2,
} from "lucide-react";

export default function About() {
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

  const dynamicTimeline = [
    {
      icon: GraduationCap,
      title: "BTS Développeur d’Applications",
      category: "Formation Académique",
      badgeColor: "border-[#8A2BE2]/40 text-[#8A2BE2] bg-[#8A2BE2]/10",
      description:
        "Acquisition d'une base rigoureuse en modélisation logicielle, génie logiciel, algorithmique et conception de bases de données.",
    },
    {
      icon: Code2,
      title: "Développement Front-end & Web Client",
      category: "Expérience Technique",
      badgeColor: "border-[#00FF88]/40 text-[#00FF88] bg-[#00FF88]/10",
      description:
        "Conception et optimisation d'interfaces utilisateurs modernes, interactives et réactives avec React, TypeScript, Angular et Tailwind CSS.",
    },
    {
      icon: BrainCircuit,
      title: "Spécialisation IA Générative & RAG",
      category: "Orientation IA",
      badgeColor: "border-[#8A2BE2]/40 text-[#00FF88] bg-[#8A2BE2]/10",
      description:
        "Intégration d'architectures RAG (Retrieval-Augmented Generation), de modèles de langage (Google Gemini), FAISS et d'agents IA dans des applications métier.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-24 relative py-24 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#8A2BE2]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00FF88]/10 blur-[150px] rounded-full pointer-events-none" />

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
            <User className="w-4 h-4 text-[#8A2BE2]" />
            <span>À propos & Parcours</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Développeur d’applications & <span className="text-[#8A2BE2]">Pionnier IA</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Mon identité professionnelle, ma formation et ma spécialisation en intelligence artificielle générative.
          </p>
        </motion.div>

        {/* 2-Part Grid: Présentation (Left) & Timeline (Right) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* PARTIE 1 : Présentation Personnelle (5 cols) */}
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

              <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                <p>
                  Formé en développement d'applications, je conçois des solutions numériques complètes alliant architecture logicielle robuste et interfaces utilisateurs ergonomiques.
                </p>
                <p>
                  Mon approche combine la rigueur du développement web moderne avec les opportunités offertes par l'intelligence artificielle générative pour concevoir des produits à forte valeur ajoutée.
                </p>
              </div>
            </div>

            {/* Core Values / Commitments */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span>Développement logiciel fiable & scalable</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#8A2BE2] shrink-0" />
                <span>Architectures RAG & Modèles Génératifs (LLM)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#00FF88] shrink-0" />
                <span>Création d'applications concrètes & utiles</span>
              </div>
            </div>
          </motion.div>

          {/* PARTIE 2 : Parcours & Formation Timeline (7 cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 backdrop-blur-xl hover:border-[#8A2BE2]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#00FF88]">
                <Terminal className="w-6 h-6 text-[#00FF88]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Parcours & Formation</h3>
                <p className="text-xs font-semibold text-gray-400">
                  Chronologie de ma montée en compétences
                </p>
              </div>
            </div>

            <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8">
              {dynamicTimeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 p-1.5 rounded-full bg-[#050505] border border-white/20 group-hover:border-[#00FF88] transition-colors">
                      <IconComponent className="w-4 h-4 text-[#00FF88]" />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00FF88] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
