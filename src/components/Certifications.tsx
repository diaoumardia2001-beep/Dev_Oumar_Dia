import { motion, type Variants } from "framer-motion";
import { Award, Calendar, Sparkles, GraduationCap } from "lucide-react";
import { certificationCategories } from "../data/certifications";

export default function Certifications() {
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

  const academicDegree = {
    title: "BTS Développeur d’Applications",
    organization: "Formation Académique",
    date: "Diplôme d'État",
    description:
      "Formation supérieure spécialisée dans la conception d'architectures applicatives, le génie logiciel, le développement web et la gestion de systèmes d'information.",
    skills: ["Génie Logiciel", "Algorithmique", "Bases de Données", "Architecture Web"],
    badgeText: "Diplôme",
  };

  return (
    <section
      id="certifications"
      className="scroll-mt-24 relative py-24 px-4 sm:px-6 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Orbs */}
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
            <Award className="w-4 h-4 text-[#8A2BE2]" />
            <span>Certifications & Apprentissage Continu</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications <span className="text-[#8A2BE2]">IA</span> & Formations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Mon parcours d'apprentissage continu et mes accréditations spécialisées en IA Générative, Agents Autonomes et développement logiciel.
          </p>
        </motion.div>

        {/* Formations & Certifications Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-16"
        >
          {/* Academic Degree Special Featured Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-[#8A2BE2]/10 border border-white/10 p-6 sm:p-8 backdrop-blur-xl hover:border-[#8A2BE2]/40 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#00FF88]">
                  <GraduationCap className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {academicDegree.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A2BE2]">
                    {academicDegree.organization}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#00FF88] text-xs font-semibold">
                  {academicDegree.badgeText}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-[#00FF88]" />
                  <span>{academicDegree.date}</span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {academicDegree.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {academicDegree.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                >
                  <Sparkles className="w-3 h-3 text-[#00FF88]" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Specialization & Certification Categories */}
          {certificationCategories.map((category) => (
            <div key={category.categoryTitle} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(138,43,226,0.15)]">
                    {category.logo}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {category.categoryTitle}
                    </h3>
                    <p className="text-xs font-semibold text-[#8A2BE2]">
                      Organisme : {category.organization}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-[#00FF88] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{category.date}</span>
                </div>
              </div>

              {/* Certificates Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.certificates.map((cert) => (
                  <motion.div
                    key={cert.name}
                    variants={cardVariants}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-3xl bg-white/[0.03] border border-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#8A2BE2]/50 hover:bg-white/[0.06] hover:shadow-[0_10px_30px_rgba(138,43,226,0.15)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header Icon & Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#8A2BE2]/40 transition-colors">
                          {cert.icon}
                        </div>
                        <span className="text-[11px] font-semibold text-gray-300 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                          {category.organization}
                        </span>
                      </div>

                      {/* Certificate Name */}
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#00FF88] transition-colors leading-snug">
                        {cert.name}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {cert.description}
                      </p>
                    </div>

                    {/* Skills Badges */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-gray-300 group-hover:border-[#00FF88]/30 transition-colors"
                          >
                            <Sparkles className="w-2.5 h-2.5 text-[#00FF88]" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
