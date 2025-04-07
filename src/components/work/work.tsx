import { component$ } from "@builder.io/qwik";

interface WorkProps {
  name?: string;
}

export const Work = component$<WorkProps>((props) => {
  const getLink = (name?: string) => {
    if (name === "binary-mahjong") {
      return "https://topaz.dev/projects/bdce75df1dd2bdcee0a7";
    } else if (name === "setsuna") {
      return "https://topaz.dev/projects/575f49eb3bc26cf370b1"
    }
    return `https://github.com/kenta-afk/${name}`;
  };

  const getDisplayName = (name?: string) => {
    if (name === "binary-mahjong") {
      return "バイナリ麻雀";
    }
    return name;
  };

  return (
    <div class="work">
      <a href={getLink(props.name)} target="_blank">
        {getDisplayName(props.name)}
      </a>
    </div>
  );
});
