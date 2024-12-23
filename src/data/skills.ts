import type { SkillSection } from '../types';

export const skills: SkillSection[] = [
  {
    title: "Languages",
    description: "System-level to high-level development",
    items: ["C++", "Python", "TypeScript", "Go", "SQL"],
    icon: "mdi:code-braces",
  },
  {
    title: "Frameworks",
    description: "Modern development ecosystems",
    items: ["React", "Node.js", "Flask", "Express", "FastAPI"],
    icon: "mdi:cube-outline",
  },
  {
    title: "Tools",
    description: "Professional development workflow",
    items: ["Git", "Docker", "Jenkins", "Linux", "AWS"],
    icon: "mdi:tools",
  },
  {
    title: "Security",
    description: "System security and analysis",
    items: ["Reverse Engineering", "Malware Analysis", "Pen Testing", "Security Architecture"],
    icon: "mdi:shield-outline",
  }
];