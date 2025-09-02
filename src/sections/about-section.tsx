import { component$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/card";
import { Container } from "~/components/ui/container";
import { socialLinks } from "~/utils/social-links";

export const AboutSection = component$(() => {
  return (
    <section id="about" class="section-bg py-32">
      <Container>
        <Card variant="glass" class="p-16 mb-16">
          <h2 class="text-4xl font-light text-white mb-12 text-center tracking-wide">About Me</h2>
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p class="text-slate-300 leading-relaxed text-xl mb-8 font-light">
                福岡の専門学校でAIについて学んでいる学生です。
                ソフトウェア開発では、バックエンド領域が専門で設計のスペシャリストを目指しています。
              </p>
              <p class="text-slate-300 leading-relaxed text-xl font-light">
                機能性と変更容易性について興味があり、システムの設計を学んでいます。
              </p>
            </div>
            <div class="space-y-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex items-center p-6 glass-effect rounded-2xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 group transform hover:scale-105 hover:shadow-2xl"
                >
                  <div class={`w-14 h-14 ${link.bgColor} rounded-xl flex items-center justify-center mr-6 shadow-lg`}>
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={link.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-medium text-white group-hover:text-violet-200 text-lg">{link.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
});
