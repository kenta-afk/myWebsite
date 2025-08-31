import { component$, Slot } from "@builder.io/qwik";

interface ContainerProps {
  class?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl';
}

export const Container = component$<ContainerProps>(({ class: className = '', maxWidth = '6xl' }) => {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md', 
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };
  
  return (
    <div class={`container mx-auto px-6 ${className}`}>
      <div class={`${maxWidthClasses[maxWidth]} mx-auto`}>
        <Slot />
      </div>
    </div>
  );
});
