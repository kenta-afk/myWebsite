import { component$, useComputed$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import { Container } from "~/components/ui/container";
import { SkillCategoryCard } from "~/components/skill-category-card";
import { skillCategories } from "~/utils/skills-data";
import type { SkillCategory } from "~/types/skill";
import styles from "~/styles/skills-section.module.css";

interface GridConfiguration {
  readonly sm?: number;
  readonly md?: number;
  readonly lg?: number;
  readonly xl?: number;
}

interface SkillsSectionProps {
  readonly title?: string;
  readonly categories?: readonly SkillCategory[];
  readonly sectionId?: string;
  readonly className?: string;
  readonly gridCols?: GridConfiguration;
  readonly emptyMessage?: string;
}

export const SkillsSection = component$<SkillsSectionProps>(({
  title = "Skills",
  categories = skillCategories,
  sectionId = "skills",
  className,
  gridCols = { md: 2, lg: 3 },
  emptyMessage = "No skills to display",
}) => {
  const memoizedCategories = useComputed$(() => categories);

  const sectionClasses = useComputed$(() =>
    className ? `${styles.section} section-bg ${className}` : `${styles.section} section-bg`
  );

  const gridClasses = useComputed$(() => {
    const classes = [styles.skillsGrid];
    if (gridCols.sm) classes.push(`${styles.skillsGrid}.sm${gridCols.sm}`);
    if (gridCols.md) classes.push(`${styles.skillsGrid}.md${gridCols.md}`);
    if (gridCols.lg) classes.push(`${styles.skillsGrid}.lg${gridCols.lg}`);
    if (gridCols.xl) classes.push(`${styles.skillsGrid}.xl${gridCols.xl}`);
    return classes.join(" ");
  });

  return (
    <section
      id={sectionId}
      class={sectionClasses.value}
      aria-labelledby={`${sectionId}-heading`}
    >
      <Container>
        <Card variant="glass" class={styles.card}>
          <h2
            id={`${sectionId}-heading`}
            class={styles.title}
          >
            {title}
          </h2>
          {memoizedCategories.value && memoizedCategories.value.length > 0 ? (
            <div class={gridClasses.value} role="list" aria-label="Skill categories">
              {memoizedCategories.value.map((category) => (
                <div key={category.title} role="listitem">
                  <SkillCategoryCard category={category} />
                </div>
              ))}
            </div>
          ) : (
            <p class={styles.emptyState} role="status">
              {emptyMessage}
            </p>
          )}
        </Card>
      </Container>
    </section>
  );
});
