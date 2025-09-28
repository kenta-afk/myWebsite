import { component$, useComputed$, $ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import { smoothScrollTo } from "~/utils/navigation";
import styles from "~/styles/hero-section.module.css";

interface HeroSectionProps {
  readonly name?: string;
  readonly nameHighlight?: string;
  readonly title?: string;
  readonly buttonText?: string;
  readonly profileImage?: string;
  readonly profileImageAlt?: string;
  readonly scrollTarget?: string;
  readonly className?: string;
  readonly cardClassName?: string;
  readonly buttonClassName?: string;
}

export const HeroSection = component$<HeroSectionProps>(({
  name = "Kenta",
  nameHighlight = "-afk",
  title = "Software Engineer",
  buttonText = "View My Work",
  profileImage = "/assets/kenta-afk.webp",
  profileImageAlt = "Profile Avatar",
  scrollTarget = "about",
  className,
  cardClassName,
  buttonClassName,
}) => {
  const handleScrollToSection = $(() => smoothScrollTo(scrollTarget));

  const heroClasses = useComputed$(() =>
    className ? `${styles.hero} hero-bg ${className}` : `${styles.hero} hero-bg`
  );

  const cardClasses = useComputed$(() =>
    cardClassName ? `${styles.card} ${cardClassName}` : styles.card
  );

  const buttonClasses = useComputed$(() =>
    buttonClassName ? `${styles.button} ${buttonClassName}` : styles.button
  );

  return (
    <header class={heroClasses.value} role="banner">
      <div class={styles.container}>
        <Card variant="dark-glass" class={cardClasses.value}>
          <div
            class={styles.profileContainer}
            role="img"
            aria-label={profileImageAlt}
          >
            <img
              src={profileImage}
              alt={profileImageAlt}
              class={styles.profileImage}
              loading="eager"
            />
          </div>
          <h1 class={styles.title}>
            {name}
            <span
              class={styles.nameHighlight}
              aria-label={nameHighlight}
            >
              {nameHighlight}
            </span>
          </h1>
          <p class={styles.subtitle} role="doc-subtitle">
            {title}
          </p>
          <button
            onClick$={handleScrollToSection}
            class={buttonClasses.value}
            aria-label={`${buttonText} - Navigate to ${scrollTarget} section`}
          >
            {buttonText}
          </button>
        </Card>
      </div>
    </header>
  );
});
