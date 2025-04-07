import { component$ } from "@builder.io/qwik";
import { Works } from "../work/works";

export const Main = component$(() => {
  return (
    <main>
      <h1 id="about" class="title">
        about
      </h1>
      <p class="c_card_text">
        Name : Kenta-afk <br />
        Location : Japan Fukuoka <br />
        Language : Python, Typescript, rust, Go <br />
        Frontend : qwik, react <br />
        Backend : FastAPI, Laravel, grpc, Graphql <br />
        Database : MySQL, PostgreSQL<br />
        Infrastructure : Docker, AWS, Cloudflare <br />
      </p>
      <Works />
    </main>
  );
});
