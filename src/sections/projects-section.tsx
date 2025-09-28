import { component$, useComputed$ } from "@builder.io/qwik";
import { Container } from "~/components/ui/container";
import { ProjectCard } from "~/components/project-card";
import { featuredProjects } from "~/utils/projects-data";
import type { Project } from "~/types/project";
import styles from "~/styles/projects-section.module.css";

interface GridConfiguration {
  readonly sm?: number;
  readonly md?: number;
  readonly lg?: number;
  readonly xl?: number;
}

interface ProjectsSectionProps {
  readonly title?: string;
  readonly projects?: readonly Project[];
  readonly sectionId?: string;
  readonly className?: string;
  readonly containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl";
  readonly gridCols?: GridConfiguration;
  readonly emptyMessage?: string;
}

export const ProjectsSection = component$<ProjectsSectionProps>(({
  title = "Featured Projects",
  projects = featuredProjects,
  sectionId = "projects",
  className,
  containerMaxWidth = "7xl",
  gridCols = { lg: 2 },
  emptyMessage = "No projects to display",
}) => {
  const memoizedProjects = useComputed$(() => projects);

  const sectionClasses = useComputed$(() =>
    className ? `${styles.section} projects-bg ${className}` : `${styles.section} projects-bg`
  );

  const gridClasses = useComputed$(() => {
    const classes = [styles.projectsGrid];
    if (gridCols.sm) classes.push(`${styles.projectsGrid}.sm${gridCols.sm}`);
    if (gridCols.md) classes.push(`${styles.projectsGrid}.md${gridCols.md}`);
    if (gridCols.lg) classes.push(`${styles.projectsGrid}.lg${gridCols.lg}`);
    if (gridCols.xl) classes.push(`${styles.projectsGrid}.xl${gridCols.xl}`);
    return classes.join(" ");
  });

  return (
    <section
      id={sectionId}
      class={sectionClasses.value}
      aria-labelledby={`${sectionId}-heading`}
    >
      <Container maxWidth={containerMaxWidth}>
        <div class={styles.headerContainer}>
          <h2
            id={`${sectionId}-heading`}
            class={styles.title}
          >
            {title}
          </h2>
        </div>
        {memoizedProjects.value && memoizedProjects.value.length > 0 ? (
          <div class={gridClasses.value} role="list" aria-label="Featured projects">
            {memoizedProjects.value.map((project) => (
              <div key={project.id} role="listitem">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <p class={styles.emptyState} role="status">
            {emptyMessage}
          </p>
        )}
      </Container>
    </section>
  );
});
