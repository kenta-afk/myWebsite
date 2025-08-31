import { component$, Slot, type QwikMouseEvent, type PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  onClick$?: PropFunction<(event: QwikMouseEvent<HTMLButtonElement, MouseEvent>) => void>;
}

export const Button = component$<ButtonProps>(({ variant = 'primary', size = 'md', class: className = '', onClick$, ...props }) => {
  const baseClasses = "font-medium transition-all duration-300 transform hover:scale-105";
  
  const variantClasses = {
    primary: "glass-effect text-gray-200 hover:bg-gray-600 hover:bg-opacity-80",
    secondary: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    ghost: "text-gray-300 hover:text-gray-100"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-8 py-4 rounded-full",
    lg: "px-10 py-4 text-lg rounded-full"
  };
  
  return (
    <button 
      class={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick$={onClick$}
      {...props}
    >
      <Slot />
    </button>
  );
});
