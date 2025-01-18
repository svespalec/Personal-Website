export interface SkillSection {
  title: string;
  description?: string;
  items: string[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}