export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView({ behavior: "smooth" });
};

export const handleAnchorClick = (e: Event) => {
  const target = e.target as HTMLElement;
  if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
    e.preventDefault();
    const id = target.getAttribute("href")?.slice(1);
    if (id) smoothScrollTo(id);
  }
};
