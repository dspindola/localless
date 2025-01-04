import type { ServerWebSocket } from "bun";

export function attach(_request: Request) {
  // attach contextual data to the ws.data
  return { foo: "foo" }; // ws.data.foo
}

export function message(_ws: ServerWebSocket, message: string) {
  // a message is received
  console.log(message);
}

export function open(_ws: ServerWebSocket) {
  // a socket is opened
  console.log("open");
}

export function close(_ws: ServerWebSocket) {
  // a socket is closed
  console.log("close");
}

export function drain(_ws: ServerWebSocket) {
  // the socket is ready to receive more data
  console.log("drain");
}
