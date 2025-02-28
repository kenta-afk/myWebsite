import { component$ } from "@builder.io/qwik";

interface WorkProps {
  name?: string;
}

export const Work = component$<WorkProps>((props) => {
  return (
    <div class="work">
      <a href={`https://github.com/kenta-afk/${props.name}`} target="_blank">
        {props.name}
      </a>
    </div>
  );
});
