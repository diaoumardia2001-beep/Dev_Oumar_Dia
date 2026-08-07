import { useState, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Cpu, Code2, Database } from "lucide-react";
import profileImg from "../assets/images/profile/oumar-dia.png";

const techStack = [
  { name: "React", icon: <Code2 className="w-4 h-4 text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <Code2 className="w-4 h-4 text-[#3178C6]" /> },
  { name: "Node.js", icon: <Cpu className="w-4 h-4 text-[#5FA04E]" /> },
  { name: "IA générative", icon: <Sparkles className="w-4 h-4 text-[#8A2BE2]" /> },
  { name: "RAG", icon: <Database className="w-4 h-4 text-[#00FF88]" /> },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Throttled mouse parallax for performance
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    window.requestAnimationFrame(() => {
      const x = (clientX / innerWidth - 0.5) * 12;
      const y = (clientY / innerHeight - 0.5) * 12;
      setMousePos({ x, y });
    });
  }, []);

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="scroll-mt-24 relative min-h-screen flex flex-col justify-between px-4 sm:px-6 pt-24 sm:pt-28 pb-8 bg-[#050505] text-white overflow-x-hidden"
    >
      {/* Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-1/4 w-[28rem] sm:w-[32rem] h-[28rem] sm:h-[32rem] bg-[#8A2BE2]/30 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 md:right-1/4 w-[28rem] sm:w-[32rem] h-[28rem] sm:h-[32rem] bg-[#00FF88]/25 blur-[150px] rounded-full pointer-events-none"
      />

      {/* Cyber Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column: Text Content & Action Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-last lg:order-first">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#8A2BE2]/40 text-[#00FF88] text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                <Code2 className="w-4 h-4 text-[#8A2BE2]" />
                <span>Développeur d'applications & IA</span>
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white leading-tight"
            >
              Bonjour, je suis <br />
              <span>Oumar </span>
              <span className="text-[#8A2BE2]">Dia</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6"
            >
              <span className="text-[#8A2BE2]">Développeur d’applications</span>{" "}
              <span className="text-gray-500 font-normal">|</span>{" "}
              <span className="text-[#00FF88]">IA générative</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed mb-8"
            >
              Je conçois des solutions numériques modernes combinant développement logiciel et intelligence artificielle pour résoudre des problèmes concrets.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10"
            >
              {/* Voir mes projets (Primary) */}
              <a
                href="#projects"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#7b24cc] hover:from-[#9d3cf5] hover:to-[#8A2BE2] text-white font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(138,43,226,0.5)] hover:shadow-[0_0_35px_rgba(138,43,226,0.8)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#8A2BE2]"
              >
                <span>Voir mes projets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Me contacter (Secondary) */}
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium hover:border-[#00FF88] hover:text-[#00FF88] hover:bg-white/5 transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#00FF88]"
              >
                <Mail className="w-4 h-4 text-[#00FF88]" />
                <span>Me contacter</span>
              </a>
            </motion.div>

            {/* Tech Stack Line */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3"
            >
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-gray-300 hover:border-[#8A2BE2]/40 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Seamless Real Portrait & AI Elements (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 flex justify-center order-first lg:order-last relative"
          >
            {/* Parallax & Floating Motion Container */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                x: mousePos.x * 0.3,
              }}
              transition={{
                y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 0.25, ease: "easeOut" },
              }}
              className="relative w-full max-w-xs sm:max-w-md lg:max-w-none flex justify-center items-end"
            >
              {/* Purple Glow Orb Left */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.35, 0.5, 0.35],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-[26rem] sm:h-[30rem] bg-[#8A2BE2]/40 blur-[130px] rounded-full pointer-events-none"
                style={{
                  transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                }}
              />

              {/* Green Glow Orb Right */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-[26rem] sm:h-[30rem] bg-[#00FF88]/30 blur-[130px] rounded-full pointer-events-none"
                style={{
                  transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`,
                }}
              />

              {/* Floating Code Snippet Card */}
              <div className="absolute top-10 left-0 z-0 bg-white/[0.03] border border-white/10 backdrop-blur-md p-3.5 rounded-xl text-[11px] font-mono text-gray-400 opacity-60 leading-relaxed pointer-events-none hidden sm:block">
                <span className="text-purple-400">const</span> developer = &#123;<br />
                &nbsp;&nbsp;passion: <span className="text-green-400">'code'</span>,<br />
                &nbsp;&nbsp;focus: <span className="text-green-400">'impact'</span>,<br />
                &nbsp;&nbsp;goal: <span className="text-green-400">'innovation'</span><br />
                &#125;
              </div>

              {/* Floating Tech Keyword Card */}
              <div className="absolute top-1/3 right-0 z-0 bg-white/[0.03] border border-white/10 backdrop-blur-md p-3.5 rounded-xl text-[10px] font-mono text-gray-400 opacity-50 tracking-widest leading-relaxed pointer-events-none uppercase hidden sm:block">
                AI<br />
                SOLUTIONS<br />
                IMPACT<br />
                INNOVATION
              </div>

              {/* Constellation Network SVG Overlay */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
                viewBox="0 0 400 500"
                fill="none"
              >
                <circle cx="50" cy="110" r="3" fill="#8A2BE2" />
                <circle cx="350" cy="130" r="3.5" fill="#00FF88" />
                <circle cx="330" cy="270" r="2.5" fill="#8A2BE2" />
                <circle cx="65" cy="310" r="3" fill="#00FF88" />
                <path d="M50 110 L110 70 M350 130 L310 190 M330 270 L370 330" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              {/* Floating Tech Particle Lights */}
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-14 w-2 h-2 rounded-full bg-[#00FF88] blur-[1px] pointer-events-none"
              />
              <motion.div
                animate={{ y: [0, 15, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/3 left-4 w-2 h-2 rounded-full bg-[#8A2BE2] blur-[1px] pointer-events-none"
              />

              {/* Cardless Portrait Container (100% Frameless) */}
              <div className="relative w-full max-w-[320px] sm:max-w-[430px] lg:max-w-[480px] flex justify-center">
                {/* Feather Mask & Bottom Gradient Fade into #050505 */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
                  <img
                    src={profileImg}
                    alt="Oumar Dia - Développeur d'applications et IA générative"
                    className="w-full h-[400px] sm:h-[550px] lg:h-[620px] object-cover object-top filter brightness-[1.03] contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Rim Light Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#8A2BE2]/15 via-transparent to-[#00FF88]/20 mix-blend-screen pointer-events-none" />

                  {/* Bottom Gradient Fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Center Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center justify-center gap-2 mt-8 z-10 pointer-events-none"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#00FF88]"
          />
        </div>
        <span className="text-[11px] font-medium text-gray-400 tracking-wider">
          Scroll pour découvrir
        </span>
      </motion.div>
    </section>
  );
}