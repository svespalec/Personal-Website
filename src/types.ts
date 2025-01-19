export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillSection {
  title: string;
  description: string;
  items: SkillItem[];
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  lastUpdate: string;
  stars: number;
  forks: number;
  latestCommit: {
    hash: string;
    message: string;
    date: string;
  } | null;
}