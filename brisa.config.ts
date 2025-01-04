import type { Configuration, ExtendPlugins, Integration } from "brisa";
import type { EnvId, Modes, TLSConfig, Plugin } from "@/types/brisa/config";
import mdx from "@mdx-js/esbuild";
import pandaCSS from "brisa-pandacss";

const id: any = process.env.NODE_ENV ?? "development";
const mode: EnvId = id;

const plugins = [mdx({ jsxImportSource: "brisa" }) as unknown] as Plugin[];

const tls: TLSConfig<Modes> = {
  development: {
    key: Bun.file("./.config/certs/localhost-key.pem"),
    cert: Bun.file("./.config/certs/localhost.pem"),
  },
  production: {},
};

const integrations: Integration[] = [pandaCSS()];

const extendPlugins: ExtendPlugins = (brisaPlugins) => [
  ...plugins,
  ...brisaPlugins,
];

export default {
  integrations,
  extendPlugins,
  ...(Number(process.env.TLS) ? { tls: tls[mode] } : {}),
} satisfies Configuration;
