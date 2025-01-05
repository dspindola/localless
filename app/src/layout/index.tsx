import Links from '~/components/links';
import Meta from '~/components/meta';
import '~/styles/styles.css';
import { token } from '@/styled-system/tokens';
import { bodyCss } from '~/components/base/body.css';

const meta: JSX.HTMLAttributes<HTMLMetaElement>[] = [
    {
        name: 'theme-color',
        content: token('colors.primary'),
    },
    {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
    },
];

const links: JSX.HTMLAttributes<HTMLLinkElement>[] = [
    // { rel: 'manifest', href: '/manifest.webmanifest' },
    {
        rel: 'shortcut icon',
        href: '/localless.svg',
    },
];

function Title() {
    return <title id="title">{process.env.PUBLIC_APP_TITLE}</title>;
}

const styles = {
    body: bodyCss,
};

const Head = ({ children }: { children?: JSX.Element }) => {
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
