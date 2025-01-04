import type { RequestContext } from "brisa";

export async function GET(request: RequestContext) {
  return new Response(request.id);
}
