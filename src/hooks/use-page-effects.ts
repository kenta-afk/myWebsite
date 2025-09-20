import { useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { handleAnchorClick } from "~/utils/navigation";
import { setupIntersectionObserver } from "~/utils/animation";

export const usePageEffects = () => {
  const isLoaded = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    isLoaded.value = true;

    // Setup smooth scrolling for anchor links
    document.addEventListener("click", handleAnchorClick);

    // Setup intersection observer for animations
    const observer = setupIntersectionObserver();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      observer.disconnect();
    };
  });

  return { isLoaded };
};
