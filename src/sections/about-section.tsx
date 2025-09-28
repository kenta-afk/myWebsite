import { component$, useComputed$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import { Container } from "~/components/ui/container";
import { socialLinks as defaultSocialLinks } from "~/utils/social-links";
import type { SocialLink } from "~/utils/social-links";
import styles from "~/styles/about-section.module.css";

interface AboutSectionProps {
  readonly title?: string;
  readonly description?: readonly string[];
  readonly socialLinks?: readonly SocialLink[];
  readonly sectionId?: string;
  readonly className?: string;
  readonly containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl" | "7xl";
  readonly showSocialLinks?: boolean;
}

export const AboutSection = component$<AboutSectionProps>(({
  title = "About Me",
  description = [
    "福岡の専門学校でAIについて学んでいる学生です。ソフトウェア開発では、バックエンド領域が専門で設計のスペシャリストを目指しています。",
    "機能性と変更容易性について興味があり、システムの設計を学んでいます。"
  ],
  socialLinks = defaultSocialLinks,
  sectionId = "about",
  className,
  containerMaxWidth = "6xl",
  showSocialLinks = true,
}) => {
  const memoizedSocialLinks = useComputed$(() => socialLinks);
  const memoizedDescription = useComputed$(() => description);

  const sectionClasses = useComputed$(() =>
    className ? `${styles.section} section-bg ${className}` : `${styles.section} section-bg`
  );

  return (
    <section
      id={sectionId}
      class={sectionClasses.value}
      aria-labelledby={`${sectionId}-heading`}
    >
      <Container maxWidth={containerMaxWidth}>
        <Card variant="glass" class={styles.card}>
          <h2
            id={`${sectionId}-heading`}
            class={styles.title}
          >
            {title}
          </h2>
          <div class={styles.contentGrid}>
            <div class={styles.description}>
              {memoizedDescription.value.map((paragraph, index) => (
                <p
                  key={index}
                  class={styles.paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {showSocialLinks && memoizedSocialLinks.value && memoizedSocialLinks.value.length > 0 && (
              <div class={styles.socialLinksContainer} role="list" aria-label="Social media links">
                {memoizedSocialLinks.value.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={styles.socialLink}
                    role="listitem"
                    aria-label={`Visit ${link.name} profile`}
                  >
                    <div
                      class={`${styles.socialIcon} ${link.bgColor}`}
                      aria-hidden="true"
                    >
                      <svg
                        class={styles.socialIconSvg}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={link.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 class={styles.socialName}>
                        {link.name}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </Card>
      </Container>
    </section>
  );
});
