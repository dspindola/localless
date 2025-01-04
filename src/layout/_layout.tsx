import { token } from "@/styled-system/tokens";
import { bodyCss } from "~/components/base/body.css";

export const meta: JSX.HTMLAttributes<HTMLMetaElement>[] = [
  {
    name: "theme-color",
    content: token("colors.primary"),
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
];

export const links: JSX.HTMLAttributes<HTMLLinkElement>[] = [
  { rel: "manifest", href: "/manifest.webmanifest" },
  {
    rel: "shortcut icon",
    href: "/localless.svg",
  },
];

export function Title() {
  return <title id="title">{process.env.PUBLIC_APP_TITLE}</title>;
}

export const styles = {
  body: bodyCss,
};
