import { component$ } from "@builder.io/qwik";

export const Main = component$(() => {
  return (
    <main>
      <h1 id="about" class="title">
        about
      </h1>
      <p class="c_card_text">
        Name : Kenta-afk <br />
        Location : Japan Fukuoka <br />
        Language : Python, Typescript, Go <br />
        Frontend : Vue, qwik <br />
        Backend : FastAPI, Laravel, Gin, Graphql <br />
        Database : MySQL <br />
        Infrastructure : Docker, AWS, Cloudflare <br />
      </p>

      <h1 id="works" class="title">
        works
      </h1>
      <p class="c_card_text">
        <a
          class="textlink textlink02"
          href="https://github.com/kenta-afk/discord-bot-with-hono"
        >
          Discord-bot
        </a>{" "}
        <br />
        <a
          class="textlink textlink02"
          href="https://github.com/kenta-afk/phase4-Product"
        >
          受付管理システム
        </a>{" "}
        <br />
        <a
          class="textlink textlink02"
          href="https://github.com/kenta-afk/baseball-app"
        >
          野球スタッツ管理
        </a>{" "}
        <br />
        <a
          class="textlink textlink02"
          href="https://github.com/kenta-afk/Umbrella-App"
        >
          日記
        </a>{" "}
        <br />
      </p>
    </main>
  );
});
