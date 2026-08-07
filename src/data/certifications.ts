import React, { type ReactNode } from "react";
import {
  Sparkles,
  Bot,
  BrainCircuit,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Code,
} from "lucide-react";
import { SiAnthropic, SiPython } from "react-icons/si";

export interface CertificateItem {
  name: string;
  description: string;
  skills: string[];
  icon: ReactNode;
}

export interface CertificationCategory {
  categoryTitle: string;
  organization: string;
  date: string;
  logo: ReactNode;
  accentColor: string;
  certificates: CertificateItem[];
}

export const certificationCategories: CertificationCategory[] = [
  {
    categoryTitle: "Anthropic — Generative AI & Agentic Development",
    organization: "Anthropic",
    date: "Août 2026",
    logo: React.createElement(SiAnthropic, { className: "w-7 h-7 text-white" }),
    accentColor: "#8A2BE2",
    certificates: [
      {
        name: "Claude 101",
        description:
          "Fondations et maîtrise des capacités des modèles Claude pour la conception d'applications IA avancées.",
        skills: ["Claude API", "Prompting", "AI Application"],
        icon: React.createElement(Bot, { className: "w-5 h-5 text-[#00FF88]" }),
      },
      {
        name: "Claude Code 101",
        description:
          "Utilisation avancée de Claude pour l'assistance au développement, la génération et l'optimisation de code.",
        skills: ["AI Coding", "Refactoring", "Code Generation"],
        icon: React.createElement(Code, { className: "w-5 h-5 text-[#8A2BE2]" }),
      },
      {
        name: "AI Fluency for Builders",
        description:
          "Principes fondamentaux et bonnes pratiques d'ingénierie pour bâtir avec les Modèles de Langage (LLM).",
        skills: ["LLM Architecture", "AI Best Practices", "System Design"],
        icon: React.createElement(Sparkles, { className: "w-5 h-5 text-[#00FF88]" }),
      },
      {
        name: "Introduction to Agent Skills",
        description:
          "Conception et intégration de compétences et d'outils modulaires pour les agents autonomes.",
        skills: ["Tool Use", "Function Calling", "Agent Skills"],
        icon: React.createElement(Terminal, { className: "w-5 h-5 text-[#8A2BE2]" }),
      },
      {
        name: "Introduction to Subagents",
        description:
          "Architecture et orchestration multi-agents pour décomposer et résoudre des tâches complexes.",
        skills: ["Multi-Agent Systems", "Subagents", "Orchestration"],
        icon: React.createElement(Layers, { className: "w-5 h-5 text-[#00FF88]" }),
      },
      {
        name: "Introduction to Model Context Protocol (MCP)",
        description:
          "Standardisation de l'intégration de données et de contextes dynamiques pour les agents IA.",
        skills: ["MCP", "Context Protocol", "Data Integration"],
        icon: React.createElement(Cpu, { className: "w-5 h-5 text-[#8A2BE2]" }),
      },
      {
        name: "AI Capabilities & Limitations",
        description:
          "Évaluation critique, sécurité, cas d'usage optimaux et compréhension des limites des LLMs.",
        skills: ["AI Safety", "Evaluation", "Model Limits"],
        icon: React.createElement(ShieldCheck, { className: "w-5 h-5 text-[#00FF88]" }),
      },
    ],
  },
  {
    categoryTitle: "Developers.Institute",
    organization: "Developers.Institute",
    date: "Mai 2026 - Juillet 2026",
    logo: React.createElement(BrainCircuit, { className: "w-7 h-7 text-[#00FF88]" }),
    accentColor: "#00FF88",
    certificates: [
      {
        name: "COT GenAI & Machine Learning Bootcamp - 2026 - Full Time",
        description:
          "Formation intensive à temps plein axée sur la data science, le Machine Learning et la création de solutions d'IA générative.",
        skills: ["Python", "Machine Learning", "Data Analysis", "Generative AI", "LLM"],
        icon: React.createElement(SiPython, { className: "w-5 h-5 text-[#3776AB]" }),
      },
    ],
  },
];
