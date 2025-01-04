import { container } from "@/styled-system/patterns";
import HomeLink from "~/components/ui/links/home";

export default function Homepage() {
  return (
    <>
      <section
        class={container({
          bgGradient: "to-b",
          py: 12,
          _dark: {
            color: "white",
            gradientTo: "primary",
            gradientFrom: "#141414",
            gradientVia: "#1F1F1F",
          },
        })}
      >
        <HomeLink />
      </section>
    </>
  );
}
