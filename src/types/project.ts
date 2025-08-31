export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: string;
  category: string;
  url?: string;
  githubUrl?: string;
}
