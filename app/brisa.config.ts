import type { Configuration } from 'brisa';
import mdx from '@mdx-js/esbuild';
import pandaCSS from 'brisa-pandacss';
import type { BunPlugin } from 'bun';
import { WORKSPACE_ROOT } from '@moonrepo/dev';

export default {
    integrations: [pandaCSS()],
    extendPlugins: (brisaPlugins) => [mdx({ jsxImportSource: 'brisa' }) as unknown as BunPlugin, ...brisaPlugins],
    tls: {
        key: Bun.file(`${WORKSPACE_ROOT}/.config/certs/localhost-key.pem`),
        cert: Bun.file(`${WORKSPACE_ROOT}/.config/certs/localhost.pem`),
    },
} satisfies Configuration;
