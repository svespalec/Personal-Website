export interface SkillItem {
  name: string;
  description?: string;
}

export interface SkillSection {
  title: string;
  icon: string;
  description: string;
  items: SkillItem[];
}

export const skills: SkillSection[] = [
  {
    title: "Languages",
    icon: "mdi:code-braces",
    description: "Programming languages I'm proficient in",
    items: [
      { name: "C/C++", description: "Systems programming, performance-critical applications, game hacking & anticheats" },
      { name: "C#", description: "Desktop applications & game development" },
      { name: "Python", description: "Automation, scripting & backend development" },
      { name: "D", description: "Systems programming with modern features" },
      { name: "HTML", description: "Markup language for web structure" },
      { name: "CSS", description: "Styling and design for web applications" },
      { name: "Javascript", description: "Dynamic web development & browser scripting" },
      { name: "Typescript", description: "Type-safe JavaScript for scalable applications" },
      { name: "Go", description: "Concurrent programming & backend services" },
      { name: "SQL", description: "Database querying & management" }
    ]
  },
  {
    title: "Frameworks",
    icon: "mdi:layers",
    description: "Frameworks and libraries I work with",
    items: [
      { name: "React", description: "Modern UI development with component-based architecture" },
      { name: "Node", description: "Server-side JavaScript runtime environment" },
      { name: "Bun", description: "Fast all-in-one JavaScript runtime & toolkit" },
      { name: "Vite", description: "Next-generation frontend tooling" },
      { name: "Boost", description: "C++ libraries for high-performance computing" },
      { name: "Zydis", description: "Fast and lightweight x86/x86-64 disassembler" },
      { name: "Express", description: "Fast, unopinionated web framework for Node.js" },
      { name: "Flask", description: "Lightweight Python web framework" },
      { name: "FastAPI", description: "Modern Python web framework with automatic API docs" },
      { name: "ImGUI", description: "Immediate mode GUI for game tools & debugging" },
      { name: "MongoDB", description: "NoSQL database for scalable applications" }
    ]
  },
  {
    title: "Tools",
    icon: "mdi:tools",
    description: "Development tools and technologies I use",
    items: [
      { name: "Git", description: "Version control system for code management" },
      { name: "Docker", description: "Container platform for application deployment" },
      { name: "Woodpecker", description: "Lightweight CI/CD automation tool" },
      { name: "Jenkins", description: "Continuous integration & deployment automation" },
      { name: "GitHub", description: "Code hosting & collaboration platform" },
      { name: "Visual Studio", description: "Full-featured IDE for .NET & C++" },
      { name: "Linux", description: "Open-source operating system & development environment" },
      { name: "CI/CD", description: "Continuous integration & deployment practices" },
      { name: "Webpack", description: "Module bundler for JavaScript applications" },
      { name: "IDA", description: "Advanced disassembler & debugger for reverse engineering" },
      { name: "x64dbg", description: "Open-source x64/x32 Windows debugger" },
      { name: "GitLab", description: "DevOps platform & source code management" },
      { name: "Ghidra", description: "Software reverse engineering framework" },
      { name: "Binary Ninja", description: "Reverse engineering platform & decompiler" },
      { name: "Visual Studio Code", description: "Lightweight, extensible code editor" },
      { name: "ReClass", description: "Memory class reconstruction tool" },
      { name: "Cheat Engine", description: "Memory scanner/debugger for game modding" }
    ]
  }
];