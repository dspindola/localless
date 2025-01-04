export default async function* Links(props: {
  for: JSX.HTMLAttributes<HTMLLinkElement>[];
}) {
  for (const child of props.for) yield <link {...child} />;
}
