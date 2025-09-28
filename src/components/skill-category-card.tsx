import { component$ } from "@builder.io/qwik";
import type { SkillCategory } from "~/types/skill";

interface SkillCategoryCardProps {
  readonly category: SkillCategory;
  readonly className?: string;
  readonly iconSize?: string;
  readonly titleLevel?: 'h2' | 'h3' | 'h4';
}

export const SkillCategoryCard = component$<SkillCategoryCardProps>(({
  category,
  className = "text-center p-8 rounded-2xl glass-effect hover:bg-gray-600 hover:bg-opacity-10 transition-all duration-300 group",
  iconSize = "w-10 h-10",
  titleLevel = 'h3',
}) => {
  const TitleTag = titleLevel;

  return (
    <div class={className}>
      <div
        class={`w-20 h-20 ${category.bgColor} rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <svg
          class={`${iconSize} ${category.iconColor}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d={category.icon}
          />
        </svg>
      </div>
      <TitleTag class="text-2xl font-light text-gray-100 mb-6 tracking-wide">
        {category.title}
      </TitleTag>
      <div class="space-y-3" role="list" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <span
            key={skill}
            class="tech-tag inline-block px-4 py-2 rounded-full text-sm font-medium m-1"
            role="listitem"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});
