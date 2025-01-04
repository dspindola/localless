import { css } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";

export default function Home() {
  return (
    <a
      href={"/"}
      class={css({
        p: 2,
        display: "inline-block",
        borderStyle: "dotted",
        borderWidth: 2,
        shadowColor: "purple.600",
        shadow: "-5px 5px 0 var(--colors-secondary)",
        _hover: {
          shadow: "5px -5px 0 var(--colors-secondary)",
          transform: "translateY(10px)",
          transition: "all",
          transitionDuration: "0.2s",
          bg: "primary",
        },
      })}
    >
      <h1
        class={container({
          fontSize: "larger",
          fontFamily: "monospace",
          textTransform: "uppercase",
          fontStretch: "expanded",
          fontWeight: "bold",
          lineHeight: "1.25",
          fontKerning: "none",
          fontOpticalSizing: "none",
          fontSynthesis: "small-caps",
          fontSmoothing: "subpixel-antialiased",
        })}
      >
        {process.env.PUBLIC_APP_TITLE}
      </h1>
    </a>
  );
}
