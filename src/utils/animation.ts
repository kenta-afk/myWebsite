export const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

export const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Wait for DOM to be ready
  setTimeout(() => {
    document.querySelectorAll('.card-hover, .glass-effect').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  }, 100);

  return observer;
};
