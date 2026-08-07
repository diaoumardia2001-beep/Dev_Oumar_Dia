import React, { type ReactNode } from "react";
import {
  SiReact,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMysql,
  SiGoogle,
  SiGit,
  SiGithub,
  SiVite,
  SiFlutter,
} from "react-icons/si";
import { Cpu, Code2, Server, Wrench, Smartphone, Sparkles, Database, Bot } from "lucide-react";

export const VSCodeIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  React.createElement(
    "svg",
    { className, viewBox: "0 0 24 24", fill: "currentColor" },
    React.createElement("path", {
      d: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.276a.999.999 0 0 0-.07 1.486l3.47 3.486-3.47 3.486a.999.999 0 0 0 .07 1.486l1.322 1.217a.997.997 0 0 0 1.276.057l4.12-3.128 9.46 8.63c.47.43 1.15.54 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.66V3.34a1.5 1.5 0 0 0-.85-1.353zM18 16.5l-6-4.5 6-4.5v9z",
    })
  )
);

export interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

export interface SkillCategory {
  title: string;
  categoryIcon: ReactNode;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    categoryIcon: React.createElement(Code2, { className: "w-6 h-6 text-[#00FF88]" }),
    description: "Interface utilisateur moderne, réactive et performante",
    skills: [
      { name: "React", icon: React.createElement(SiReact, { className: "w-7 h-7" }), color: "#61DAFB" },
      { name: "Angular", icon: React.createElement(SiAngular, { className: "w-7 h-7" }), color: "#DD0031" },
      { name: "TypeScript", icon: React.createElement(SiTypescript, { className: "w-7 h-7" }), color: "#3178C6" },
      { name: "JavaScript", icon: React.createElement(SiJavascript, { className: "w-7 h-7" }), color: "#F7DF1E" },
      { name: "HTML5", icon: React.createElement(SiHtml5, { className: "w-7 h-7" }), color: "#E34F26" },
      { name: "CSS3", icon: React.createElement(SiCss, { className: "w-7 h-7" }), color: "#1572B6" },
      { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss, { className: "w-7 h-7" }), color: "#06B6D4" },
    ],
  },
  {
    title: "Backend & Base de données",
    categoryIcon: React.createElement(Server, { className: "w-6 h-6 text-[#8A2BE2]" }),
    description: "Architectures de serveur robustes et gestion de données",
    skills: [
      { name: "Node.js", icon: React.createElement(SiNodedotjs, { className: "w-7 h-7" }), color: "#5FA04E" },
      { name: "Express", icon: React.createElement(SiExpress, { className: "w-7 h-7" }), color: "#FFFFFF" },
      { name: "PHP", icon: React.createElement(SiPhp, { className: "w-7 h-7" }), color: "#777BB4" },
      { name: "MySQL", icon: React.createElement(SiMysql, { className: "w-7 h-7" }), color: "#4479A1" },
    ],
  },
  {
    title: "IA & Innovation",
    categoryIcon: React.createElement(Sparkles, { className: "w-6 h-6 text-[#00FF88]" }),
    description: "Intégration d'intelligence artificielle et modèles génératifs",
    skills: [
      { name: "Generative AI", icon: React.createElement(Bot, { className: "w-7 h-7" }), color: "#00FF88" },
      { name: "Google Gemini", icon: React.createElement(SiGoogle, { className: "w-7 h-7" }), color: "#8A2BE2" },
      { name: "RAG", icon: React.createElement(Cpu, { className: "w-7 h-7" }), color: "#00FF88" },
      { name: "FAISS", icon: React.createElement(Database, { className: "w-7 h-7" }), color: "#00D2FF" },
    ],
  },
  {
    title: "Mobile",
    categoryIcon: React.createElement(Smartphone, { className: "w-6 h-6 text-[#8A2BE2]" }),
    description: "Développement d'applications mobiles multiplateformes",
    skills: [
      { name: "Flutter", icon: React.createElement(SiFlutter, { className: "w-7 h-7" }), color: "#02569B" },
    ],
  },
  {
    title: "Outils & Workflow",
    categoryIcon: React.createElement(Wrench, { className: "w-6 h-6 text-[#00FF88]" }),
    description: "Outils de développement, suivi de version et bundling",
    skills: [
      { name: "Git", icon: React.createElement(SiGit, { className: "w-7 h-7" }), color: "#F05032" },
      { name: "GitHub", icon: React.createElement(SiGithub, { className: "w-7 h-7" }), color: "#FFFFFF" },
      { name: "VS Code", icon: React.createElement(VSCodeIcon, { className: "w-7 h-7" }), color: "#007ACC" },
      { name: "Vite", icon: React.createElement(SiVite, { className: "w-7 h-7" }), color: "#646CFF" },
    ],
  },
];
