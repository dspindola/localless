namespace ChromeOriginTrials {
    export interface Register {
        readonly FileSystemObserver: {
            key: 'CHROME_FS_OBSERVER_TOKEN';
            readonly type: string;
        };
        readonly PromptAPI: {
            key: 'CHROME_FS_PROMPT_API_TOKEN';
            readonly type: string;
        };
    }

    export type Key<T extends Register> = keyof Register;

    export interface ImportMetaEnv<T extends object> {
        readonly env: T;
    }
}

declare const Register: {
    FileSystemObserver: {
        key: 'CHROME_FS_OBSERVER_TOKEN';
        type: 'string';
    };
    PromptAPI: {
        key: 'CHROME_FS_PROMPT_API_TOKEN';
        type: 'boolean';
    };
};

type Env = ChromeOriginTrials.ImportMetaEnv<typeof Register>;

type Key = keyof Env['env'];

type Value<T extends Key> = Env['env'][T];

export default function Chrome(): {
    env: {
        [K in Value<Key>['key']]: (typeof Register)[Key]['type'] extends 'string'
            ? string
            : (typeof Register)[Key]['type'] extends 'boolean'
              ? boolean
              : any;
    };
} {
    return import.meta as any;
}
