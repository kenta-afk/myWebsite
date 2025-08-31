import { component$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { smoothScrollTo } from "~/utils/navigation";

export const HeroSection = component$(() => {
  return (
    <header class="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div class="container mx-auto px-6 text-center relative z-10">
        <Card variant="dark-glass" class="p-16 max-w-5xl mx-auto">
          <div class="w-48 h-48 bg-gradient-to-br from-gray-400 via-slate-300 to-gray-500 rounded-full mx-auto mb-12 flex items-center justify-center backdrop-filter backdrop-blur-sm border border-white border-opacity-10 shadow-2xl overflow-hidden">
            <img 
              src="/assets/profile-avatar.svg" 
              alt="Profile Avatar" 
              class="w-40 h-40 rounded-full object-cover"
            />
          </div>
          <h1 class="text-6xl md:text-7xl font-extralight text-gray-100 mb-8 tracking-wide leading-none">
            Kenta<span style="background: linear-gradient(90deg, #9ca3af, #94a3b8); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent;">-afk</span>
          </h1>
          <p class="text-3xl text-gray-300 mb-10 font-light tracking-wide">Software Engineer</p>
          <Button 
            variant="primary"
            size="lg"
            onClick$={() => smoothScrollTo('about')}
            class="bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-medium px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View My Work
          </Button>
        </Card>
      </div>
    </header>
  );
});
