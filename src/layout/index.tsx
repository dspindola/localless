import { links, meta, styles, Title } from "./_layout";
import Links from "~/components/links";
import Meta from "~/components/meta";
import "~/styles/styles.css";

export const Head = ({ children }: { children?: JSX.Element }) => {
  return <head>{children}</head>;
};

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en" data-color-mode="dark">
      <Head>
        <Links for={links} />
        <Meta for={meta} />
        <Title />
      </Head>
      <body class={styles.body}>{children}</body>
    </html>
  );
}
