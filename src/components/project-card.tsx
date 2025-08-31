import { component$ } from "@builder.io/qwik";
import type { Project } from "~/types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = component$<ProjectCardProps>(({ project }) => {
  return (
    <div class="card-hover rounded-3xl overflow-hidden border border-white border-opacity-10 shadow-2xl">
      <div class={`h-72 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div class="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
        <div class="text-white text-center relative z-10">
          <div class="text-5xl mb-4 filter drop-shadow-lg">{project.icon}</div>
          <p class="text-base opacity-90 font-light tracking-wide">{project.category}</p>
        </div>
      </div>
      <div class="p-10">
        <h3 class="text-3xl font-light mb-6 text-gray-100 tracking-wide">{project.title}</h3>
        <p class="text-gray-300 mb-8 leading-relaxed text-lg font-light">
          {project.description}
        </p>
        <div class="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              class="tech-tag px-4 py-2 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <button 
          class="text-gray-400 hover:text-gray-200 font-medium transition-all duration-300 flex items-center group text-lg"
          onClick$={() => {
            if (project.url) {
              window.open(project.url, '_blank');
            } else {
              alert('プロジェクトの詳細ページに移動します（デモ版）');
            }
          }}
        >
          View Details
          <svg class="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
});
