export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "mobile" | "other";
  level?: "beginner" | "intermediate" | "advanced";
}

export interface SkillCategory {
  title: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  skills: string[];
}
