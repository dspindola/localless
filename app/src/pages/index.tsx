import { container, flex, grid } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import HomeLink from '~/components/ui/links/home';

type RouteProps = {
    title: string;
    description: string;
    meta: JSX.HTMLAttributes<HTMLMetaElement>;
    to: string;
    params: [number, string][];
    resolve: (route: RouteProps) => string;
    label?: string;
};

function resolveRoute(route: RouteProps) {
    const { params } = route;
    return params.map(([_, p]) => p).join('/');
}

function Section() {
    return (
        <section
            class={container({
                bgGradient: 'to-b',
                py: 12,
            })}
        >
            <HomeLink slug={process.env.PUBLIC_APP_TITLE} />
        </section>
    );
}

const routes: RouteProps[] = [
    {
        title: 'Documentation',
        description: 'Learn how to use localless',
        meta: {},
        to: '/abc-123/abc-123/abc-123',
        params: [
            [0, '@'],
            [1, 'localhost:'],
            [2, 'docs'],
        ],
        resolve: resolveRoute,
        label: 'more 🖇️',
    },
    {
        title: 'Blog',
        description: 'Read more about localless',
        meta: {},
        to: '/abc-123/abc-123/abc-123',
        params: [
            [0, '@'],
            [1, 'localhost:'],
            [2, 'blog'],
        ],
        resolve: resolveRoute,

        label: 'more 🖇️',
    },
];

function ResourcesGrid() {
    return (
        <div
            class={grid({
                gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)'],
            })}
        >
            {routes.map(({ title, description, label, resolve, to, params, meta }) => (
                <div
                    key={title}
                    class={container({
                        py: 8,
                        _dark: {
                            bg: '#141414',
                            borderWidth: 0.5,
                            borderColor: 'black',
                            borderStyle: 'ridge',
                            w: 'full',
                            rounded: 'xs',
                        },
                        _hover: {
                            scale: 1.005,
                            transition: 'all',
                            transitionBehavior: 'allow-discrete',
                            transformOrigin: 'center',
                            transitionTimingFunction: 'linear',
                        },
                    })}
                >
                    <div class={flex({ gap: 2, flexDirection: 'column' })}>
                        <span
                            class={css({
                                w: 'full',
                                rounded: 'md',
                                py: 2,
                            })}
                        >
                            <h1
                                class={css({
                                    fontSize: 'lg',
                                    fontWeight: 'medium',
                                    fontFamily: 'mono',
                                    color: 'white',
                                })}
                            >
                                {title}
                            </h1>
                        </span>
                        <p>{description}</p>
                        <div>
                            <a
                                href={resolve({
                                    title,
                                    description,
                                    resolve,
                                    params,
                                    to,
                                    label,
                                    meta,
                                })}
                                class={css({
                                    color: 'secondary',
                                    _hover: {
                                        textDecoration: 'underline',
                                    },
                                })}
                            >
                                {label ?? title}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Homepage() {
    return (
        <>
            {/* {process.env.NODE_ENV === 'development' && <span>dev</span>} */}
            <Section />
            <main class={container({})}>
                <ResourcesGrid />
            </main>
        </>
    );
}
