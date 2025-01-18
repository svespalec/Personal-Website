import type { SkillSection } from '../types';

export const skills: SkillSection[] = [
  {
    title: "Languages",
    items: ["C++", "Python", "TypeScript", "Go", "SQL"],
    icon: "mdi:code-braces",
  },
  {
    title: "Frameworks",
    items: ["React", "Node.js", "Flask", "Express", "FastAPI"],
    icon: "mdi:cube-outline",
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Jenkins", "Linux", "AWS"],
    icon: "mdi:tools",
  },
  {
    title: "Security",
    items: ["Reverse Engineering", "Malware Analysis", "Pen Testing", "Security Architecture"],
    icon: "mdi:shield-outline",
  }
];