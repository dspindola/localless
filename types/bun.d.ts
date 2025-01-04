declare module "bun" {
  interface Env {
    readonly MODE: string;
    readonly TLS: string;
    readonly HOSTNAME: string;
    readonly PORT: string;
    readonly CERT_STORE: string;
    readonly TLS_KEY_PATH: string;
    readonly TLS_CERT_PATH: string;
    readonly PROTOCOL: "http" | "https";
    readonly PUBLIC_APP_TITLE: string;
    readonly APP_DOMAIN: string;
  }
}
