import { component$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import { Container } from "~/components/ui/container";
import { SkillCategoryCard } from "~/components/skill-category-card";
import { skillCategories } from "~/utils/skills-data";

export const SkillsSection = component$(() => {
  return (
    <section id="skills" class="section-bg py-32">
      <Container>
        <Card variant="glass" class="p-16">
          <h2 class="text-5xl font-light text-white mb-16 text-center tracking-wide">Skills & Technologies</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((category) => (
              <SkillCategoryCard key={category.title} category={category} />
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
});
