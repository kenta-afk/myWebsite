import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";


export default component$(() => {
  return (
    <>
      <Header />
      <Footer />
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
      content: "kenta-afk, kenta, afk, portfolio, web, developer, web developer, software, engineer, software engineer",
    },
  ],
  
};
