import type { Configuration, ExtendPlugins, Integration } from "brisa";
import type { EnvId, Modes, TLSConfig, Plugin } from "@/types/brisa/config";
import mdx from "@mdx-js/esbuild";
import pandaCSS from "brisa-pandacss";

const id: any = process.env.NODE_ENV ?? "development";
const mode: EnvId = id;

const plugins = [mdx({ jsxImportSource: "brisa" }) as unknown] as Plugin[];
const useHttps = Number(process.env.TLS) || mode === "production";

const tls: TLSConfig<Modes> = {
  development: useHttps
    ? {
        key: Bun.file(process.env.TLS_KEY_PATH),
        cert: Bun.file(process.env.TLS_CERT_PATH),
      }
    : {},
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
