import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/ui/container";
import { ProjectCard } from "~/components/project-card";
import { featuredProjects } from "~/utils/projects-data";

export const ProjectsSection = component$(() => {
  return (
    <section id="projects" class="projects-bg py-32">
      <Container maxWidth="7xl">
        <div class="text-center mb-20">
          <h2 class="text-5xl font-light text-white mb-8 tracking-wide">Featured Projects</h2>
        </div>
        <div class="grid lg:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
});
