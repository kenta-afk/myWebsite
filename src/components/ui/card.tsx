import { component$, Slot } from "@builder.io/qwik";

interface CardProps {
  class?: string;
  variant?: 'glass' | 'dark-glass' | 'card-hover';
}

export const Card = component$<CardProps>(({ class: className = '', variant = 'glass' }) => {
  const variantClasses = {
    'glass': 'glass-effect',
    'dark-glass': 'dark-glass',
    'card-hover': 'card-hover'
  };
  
  return (
    <div class={`${variantClasses[variant]} rounded-2xl ${className}`}>
      <Slot />
    </div>
  );
});
