export default async function* Meta(props: {
  for: JSX.HTMLAttributes<HTMLMetaElement>[];
}) {
  for (const child of props.for)
    yield <meta name={child.name} content={child.content} />;
}
