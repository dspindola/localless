import { css } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";

export default function Home() {
  const slug = process.env.PUBLIC_APP_TITLE;
  const local = slug.slice(0, -4);
  const less = slug.slice(-4);
  const symbol = "⏎";
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
          boxPack: "justify",
          animation: "pulse",
          animationComposition: "replace",
          animationFillMode: "none",
          animationTimeline: "auto",
          animationDirection: "alternate-reverse",
          bg: "primary",
          [`& #symbol`]: {
            direction: "rtl",
          },
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
        {[local, less, symbol].map((item) => (
          <div
            key={item}
            id={item === symbol ? "symbol" : item}
            class={css({
              display: "inline-block",
              px: 0.5,
            })}
          >
            {item}
          </div>
        ))}
      </h1>
    </a>
  );
}
