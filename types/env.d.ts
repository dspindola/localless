export type Merge<B = {}> = B extends import("bun").Env
  ? B
  : Env<import("bun").Env & B>;

declare namespace ServerEnv {
  export type BaseEnv = {
    readonly DATABASE_URL: string;
  };
  export interface Env extends Merge<BaseEnv> {}
}

declare namespace RuntimeEnv {
  export type BaseEnv = {};
  export interface Env extends Merge<BaseEnv> {}
}

declare namespace ClientEnv {
  export type BaseEnv = {};
  export interface Env extends Merge<BaseEnv> {}
}

export declare type Env = {
  server: ServerEnv.Env & { _tag: "server" };
  runtime: RuntimeEnv.Env & { _tag: "runtime" };
  client: ClientEnv.Env & { _tag: "client" };
};
