import type { BunPlugin, TLSOptions } from "bun";

export type Modes = ["development", "production"];

export type TLSConfig<Modes extends string[]> = {
  [K in Modes[number]]: TLSOptions;
};

export type EnvId = Modes[number];

export type Plugin<T = BunPlugin> = T;
