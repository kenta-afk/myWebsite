import type { SkillCategory } from "~/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    bgColor: "bg-gray-700",
    iconColor: "text-gray-300",
    skills: ["React", "Vue", "Qwik"],
  },
  {
    title: "Backend",
    icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
    bgColor: "bg-slate-700",
    iconColor: "text-slate-300",
    skills: ["Python", "Rust", "GraphQL", "Grpc"],
  },
  {
    title: "Database",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    bgColor: "bg-zinc-700",
    iconColor: "text-zinc-300",
    skills: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"],
  },
];
