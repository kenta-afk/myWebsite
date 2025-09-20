import { component$ } from "@builder.io/qwik";
import type { SkillCategory } from "~/types/skill";

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard = component$<SkillCategoryCardProps>(
  ({ category }) => {
    return (
      <div class="text-center p-8 rounded-2xl glass-effect hover:bg-gray-600 hover:bg-opacity-10 transition-all duration-300 group">
        <div
          class={`w-20 h-20 ${category.bgColor} rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <svg
            class={`w-10 h-10 ${category.iconColor}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d={category.icon}
            />
          </svg>
        </div>
        <h3 class="text-2xl font-light text-gray-100 mb-6 tracking-wide">
          {category.title}
        </h3>
        <div class="space-y-3">
          {category.skills.map((skill) => (
            <span
              key={skill}
              class="tech-tag inline-block px-4 py-2 rounded-full text-sm font-medium m-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  },
);
