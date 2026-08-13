import { useState, useEffect } from "react";
import { Hammer, ArrowLeft, Sparkles, Bot, ShieldCheck } from "lucide-react";

export default function DemoInDevelopment() {
  const [projectName, setProjectName] = useState("CivicAI CI 🇨🇮");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const project = params.get("project");
    if (project) {
      setProjectName(project);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[#8A2BE2]/15 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00FF88]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation Header minimaliste */}
      <header className="relative z-10 max-w-6xl mx-auto w-full p-6 flex justify-between items-center">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#8A2BE2] transition-all text-xs sm:text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 text-[#00FF88]" />
          <span>Retour au portfolio</span>
        </a>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#8A2BE2]" />
          <span className="text-xs font-semibold text-gray-400">Oumar Dia — Portfolio</span>
        </div>
      </header>

      {/* Main Content Card */}
      <main className="relative z-10 max-w-2xl mx-auto px-4 py-12 text-center my-auto">
        <div className="rounded-3xl bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-[#8A2BE2]/10 border-2 border-[#8A2BE2]/40 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_50px_rgba(138,43,226,0.25)]">
          {/* Badge & Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-[#8A2BE2]/20 border border-[#8A2BE2]/50 text-[#00FF88] mb-6">
            <Hammer className="w-10 h-10 animate-bounce" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="px-3.5 py-1 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30 text-[#00FF88] text-xs font-semibold uppercase tracking-wider">
              Version Preview
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            {projectName}
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-[#8A2BE2] mb-6">
            Démonstration en cours de développement
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Cette application est actuellement en cours de développement. 
            La version publique sera disponible très prochainement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 text-left text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-[#00FF88] shrink-0" />
              <span>Intégration RAG & LLM avancée</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#8A2BE2] shrink-0" />
              <span>Tests de performance & sécurité</span>
            </div>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8A2BE2] to-[#7b24cc] hover:from-[#9d3cf5] hover:to-[#8A2BE2] text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(138,43,226,0.5)] hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au portfolio</span>
          </a>
        </div>
      </main>

      {/* Footer minimaliste */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full p-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Oumar Dia. Tous droits réservés.
      </footer>
    </div>
  );
}
