import type { SkillSection } from '../types';

export const skills: SkillSection[] = [
  {
    title: "Languages",
    description: "Core programming languages I use for development and security research",
    items: [
      { name: "C++", description: "Systems programming & performance-critical applications" },
      { name: "Python", description: "Automation, data analysis & security tools" },
      { name: "TypeScript", description: "Full-stack web development with type safety" },
      { name: "Go", description: "Concurrent systems & microservices" },
      { name: "SQL", description: "Database design & complex queries" }
    ],
    icon: "mdi:code-braces",
  },
  {
    title: "Frameworks",
    description: "Modern frameworks and libraries for building scalable applications",
    items: [
      { name: "React", description: "Building interactive user interfaces" },
      { name: "Node.js", description: "Server-side JavaScript runtime" },
      { name: "Flask", description: "Lightweight Python web applications" },
      { name: "Express", description: "Fast, unopinionated web framework" },
      { name: "FastAPI", description: "Modern Python APIs with automatic OpenAPI docs" }
    ],
    icon: "mdi:cube-outline",
  },
  {
    title: "Tools",
    description: "DevOps and development tools for efficient workflows",
    items: [
      { name: "Git", description: "Version control & collaboration" },
      { name: "Docker", description: "Container virtualization & deployment" },
      { name: "Jenkins", description: "Continuous integration & deployment" },
      { name: "Linux", description: "System administration & development" },
      { name: "AWS", description: "Cloud infrastructure & services" }
    ],
    icon: "mdi:tools",
  },
  {
    title: "Security",
    description: "Cybersecurity expertise and defensive techniques",
    items: [
      { name: "Reverse Engineering", description: "Binary analysis & vulnerability research" },
      { name: "Malware Analysis", description: "Threat detection & behavioral analysis" },
      { name: "Pen Testing", description: "Security assessment & exploitation" },
      { name: "Security Architecture", description: "Secure system design & implementation" }
    ],
    icon: "mdi:shield-outline",
  }
];