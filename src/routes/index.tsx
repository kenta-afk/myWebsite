import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import "../components/main/style.css";
import "../components/header/style.css";

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
      content:
        "kenta-afk, kenta, afk, portfolio, web, developer, web developer, software, engineer, software engineer",
    },
  ],
};
