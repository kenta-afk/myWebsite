import { component$ } from "@builder.io/qwik";
import type { Project } from "~/types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = component$<ProjectCardProps>(({ project }) => {
  return (
    <div class="card-hover rounded-2xl overflow-hidden border border-white border-opacity-10 shadow-2xl h-[400px] flex flex-col">
      <div class="p-8 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-light text-gray-100 tracking-wide">
              {project.title}
            </h3>
            <span class="text-xs uppercase text-gray-400 font-medium tracking-widest">
              {project.category}
            </span>
          </div>
          <p class="text-gray-300 mb-8 leading-relaxed text-base font-light line-clamp-3">
            {project.description}
          </p>
          <div class="mb-8">
            <div class="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
              Tech Stack
            </div>
            <p class="text-gray-300 text-sm font-light leading-relaxed">
              {project.technologies.join(" • ")}
            </p>
          </div>
        </div>
        <button
          class="text-gray-400 hover:text-gray-200 font-medium transition-all duration-300 flex items-center group text-base self-start"
          style="outline: none; border: none;"
          onClick$={() => {
            if (project.url) {
              window.open(project.url, "_blank");
            } else {
              alert("プロジェクトの詳細ページに移動します（デモ版）");
            }
          }}
        >
          View Details
          <svg
            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
});
