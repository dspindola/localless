import type { WebContext } from 'brisa';

export default function FsClient({}, web: WebContext) {
    web.onMount(() => {
        if ('FileSystemObserver' in web.self) {
            // The File System Observer API is supported.
            console.log('File System Observer API is supported.');
        }
    });

    return <div></div>;
}
