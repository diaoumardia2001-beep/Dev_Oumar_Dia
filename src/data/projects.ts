import React, { type ReactNode } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiGoogle,
  SiAngular,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { Cpu, Database, BrainCircuit, Bot } from "lucide-react";

export interface TechBadge {
  name: string;
  icon?: ReactNode;
  color?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: TechBadge[];
  githubUrl?: string;
  demoUrl?: string;
  isFeatured?: boolean;
}

export const projectsList: Project[] = [
  {
    title: "CivicAI CI 🇨🇮",
    category: "GovTech / IA générative",
    description:
      "Assistant citoyen intelligent basé sur l’intelligence artificielle générative permettant de simplifier l’accès aux démarches administratives en Côte d’Ivoire.",
    isFeatured: true,
    githubUrl: "https://github.com/diaoumardia2001-beep/Dev_Oumar_Dia",
    demoUrl: "/demo-in-development?project=CivicAI%20CI%20%F0%9F%87%A8%F0%9F%87%AE",
    technologies: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-4 h-4" }), color: "#61DAFB" },
      { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "w-4 h-4" }), color: "#3178C6" },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-4 h-4" }), color: "#06B6D4" },
      { name: "Node.js", icon: React.createElement(SiNodedotjs, { className: "w-4 h-4" }), color: "#5FA04E" },
      { name: "FastAPI", icon: React.createElement(SiFastapi, { className: "w-4 h-4" }), color: "#009688" },
      { name: "Gemini API", icon: React.createElement(SiGoogle, { className: "w-4 h-4" }), color: "#8A2BE2" },
      { name: "RAG", icon: React.createElement(BrainCircuit, { className: "w-4 h-4" }), color: "#00FF88" },
      { name: "FAISS", icon: React.createElement(Database, { className: "w-4 h-4" }), color: "#00D2FF" },
    ],
  },
  {
    title: "Application de gestion d’équipements médicaux",
    category: "Application métier",
    description:
      "Application web complète permettant la gestion, l'inventaire et le suivi de la maintenance des équipements médicaux hospitaliers.",
    githubUrl: "https://github.com/diaoumardia2001-beep",
    demoUrl: "/demo-in-development?project=Application%20de%20gestion%20d%E2%80%99%C3%A9quipements%20m%C3%A9dicaux",
    technologies: [
      { name: "Angular", icon: React.createElement(SiAngular, { className: "w-4 h-4" }), color: "#DD0031" },
      { name: "Node.js", icon: React.createElement(SiNodedotjs, { className: "w-4 h-4" }), color: "#5FA04E" },
      { name: "MySQL", icon: React.createElement(SiMysql, { className: "w-4 h-4" }), color: "#4479A1" },
    ],
  },
  {
    title: "DI Bootcamp May",
    category: "IA & Machine Learning",
    description:
      "Projet réalisé dans le cadre d’un bootcamp technologique mettant en pratique des concepts avancés d’intelligence artificielle, de data science et de développement de solutions innovantes.",
    githubUrl: "https://github.com/diaoumardia2001-beep",
    demoUrl: "/demo-in-development?project=DI%20Bootcamp%20May",
    technologies: [
      { name: "Python", icon: React.createElement(SiPython, { className: "w-4 h-4" }), color: "#3776AB" },
      { name: "Machine Learning", icon: React.createElement(Cpu, { className: "w-4 h-4" }), color: "#00FF88" },
      { name: "Data Science", icon: React.createElement(BrainCircuit, { className: "w-4 h-4" }), color: "#8A2BE2" },
      { name: "IA", icon: React.createElement(Bot, { className: "w-4 h-4" }), color: "#00FF88" },
    ],
  },
];
