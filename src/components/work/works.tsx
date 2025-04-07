import { component$ } from "@builder.io/qwik";
import { useGithubAPI } from "~/routes";
import { Work } from "./work";

export const Works = component$(() => {
  const repos = useGithubAPI();

  const works = [
    "discord-bot-with-hono",
    "baseball-app",
    "phase4-Product",
    "binary-mahjong",
    "setsuna"
  ];

  return (
    <main>
      <h1 id="works" class="title">
        works
      </h1>
      <div class="works-container">
        {repos.value.repos
          .filter((repo: any) => works.includes(repo.name))
          .map((repo: any) => (
            <Work key={repo.name} name={repo.name} />
          ))}

        {works
          .filter(
            (name) =>
              !repos.value.repos.some((repo: any) => repo.name === name),
          )
          .map((name) => (
            <Work key={name} name={name} />
          ))}
      </div>
    </main>
  );
});
