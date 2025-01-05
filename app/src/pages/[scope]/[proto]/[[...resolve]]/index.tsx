import type { MatchedBrisaRoute, RequestContext } from "brisa";

type RouteParams<T extends object> = { params: T };

function useRoute<P extends object>({ route }: RequestContext) {
  return route as MatchedBrisaRoute & RouteParams<P>;
}

type Params = {
  scope: string;
  proto: string;
  resolve: string[];
};

export default function Route({}, ctx: RequestContext) {
  const route = useRoute<Params>(ctx);
  const { scope, proto, resolve } = route.params;
  return (
    <div>
      {scope}/{proto}/{resolve.join("/")}
    </div>
  );
}
