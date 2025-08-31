import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { usePageEffects } from "~/hooks/use-page-effects";
import { HeroSection } from "~/sections/hero-section";
import { AboutSection } from "~/sections/about-section";
import { ProjectsSection } from "~/sections/projects-section";
import { SkillsSection } from "~/sections/skills-section";
import { APP_CONFIG } from "~/config/app";

export default component$(() => {
  usePageEffects();

  return (
    <div class="text-slate-100 min-h-screen" 
         style={{
           "font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
           "background": "linear-gradient(135deg, #000000 0%, #0d0d0d 30%, #080808 70%, #000000 100%)",
           "min-height": "100vh"
         }}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
});

export const head: DocumentHead = {
  title: APP_CONFIG.site.name,
  meta: [
    {
      name: "description",
      content: APP_CONFIG.site.description,
    },
    {
      name: "keywords",
      content: "Kenta-afk, portfolio, web developer, full-stack, React, Qwik, TypeScript",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "author",
      content: APP_CONFIG.site.author,
    },
    {
      property: "og:title",
      content: APP_CONFIG.site.name,
    },
    {
      property: "og:description", 
      content: APP_CONFIG.site.description,
    },
    {
      property: "og:url",
      content: APP_CONFIG.site.url,
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    },
  ],
  scripts: [
    {
      props: {
        src: "https://cdn.tailwindcss.com",
      },
    },
  ],
};
