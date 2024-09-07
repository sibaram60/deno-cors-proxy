import { Application } from "https://deno.land/x/oak@v17.0.0/mod.ts";

import { router } from "./routers/forward-routes.ts";

const port = Deno.env.get("PORT") || 5000;

const app = new Application();

router.use(router.routes());

app.use(router.routes());

console.log(`Server running on port ${port}`);

await app.listen({ port: +port });
