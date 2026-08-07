import { motion, type Variants } from "framer-motion";
import { Cpu } from "lucide-react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="skills"
      className="scroll-mt-24 relative py-24 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#8A2BE2]/15 blur-[150px] rounded-full pointer-events-none" />
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
            <Cpu className="w-4 h-4 text-[#8A2BE2]" />
            <span>Technologies & Expertise</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mon Stack <span className="text-[#8A2BE2]">Technologique</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Un ensemble d'outils et de technologies modernes maîtrisés pour créer des applications web, mobiles et IA performantes.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category) => {
            const isFeatured = category.title === "IA & Innovation";

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`group relative rounded-3xl p-6 lg:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#8A2BE2]/10 via-white/[0.04] to-[#00FF88]/5 border-2 border-[#8A2BE2]/40 hover:border-[#00FF88]/60 shadow-[0_10px_30px_rgba(138,43,226,0.2)] hover:shadow-[0_15px_40px_rgba(0,255,136,0.25)]"
                    : "bg-white/[0.03] border border-white/10 hover:border-[#8A2BE2]/40 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                }`}
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-2xl border transition-colors ${
                          isFeatured
                            ? "bg-[#8A2BE2]/20 border-[#8A2BE2]/40 text-[#00FF88]"
                            : "bg-white/5 border-white/10 group-hover:border-[#8A2BE2]/40"
                        }`}
                      >
                        {category.categoryIcon}
                      </div>
                      <h3
                        className={`text-xl font-bold transition-colors ${
                          isFeatured
                            ? "text-white group-hover:text-[#00FF88]"
                            : "text-white group-hover:text-[#00FF88]"
                        }`}
                      >
                        {category.title}
                      </h3>
                    </div>

                    {isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#00FF88] text-[11px] font-semibold tracking-wide uppercase">
                        Cœur de profil
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-default ${
                        isFeatured
                          ? "bg-white/10 border border-white/15 hover:border-[#00FF88] hover:bg-white/15 hover:-translate-y-0.5 shadow-sm"
                          : "bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:-translate-y-0.5 shadow-sm"
                      }`}
                    >
                      <span className="text-base flex items-center" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="text-gray-200 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
