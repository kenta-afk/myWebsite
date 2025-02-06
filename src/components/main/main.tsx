import { component$ } from "@builder.io/qwik";

export const Main = component$(() => {
  return (
    <main>
      <h1 id="about">about</h1>
      <p class="c_card_text">
        Name : Kenta-afk <br />
        Location : Japan Fukuoka <br />
        Language : Python, Typescript, Go <br />
        Frontend : Vue, qwik <br />
        Backend : FastAPI, Laravel, Gin, Graphql <br />
        Database : MySQL <br />
        Infrastructure : Docker, AWS, Cloudflare <br />
      </p>
    

      <h1 id="works">works</h1>
    </main>
  );
});
