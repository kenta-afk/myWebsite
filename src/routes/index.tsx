import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import "../components/main/style.css";
import "../components/header/style.css";
import "../components/work/style.css";

export const useGithubAPI = routeLoader$(async () => {
  try {
    const response = await fetch("https://ungh.cc/users/kenta-afk/repos");

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
});

export default component$(() => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
});

export const head: DocumentHead = {
  title: "Kenta-afk Portfolio",
  meta: [
    {
      name: "description",
      content: "kenta-afk's portfolio",
    },
    {
      name: "keywords",
      content: "kenta-afk, kenta, portfolio, web, developer",
    },
  ],
};
