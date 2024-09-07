import { Application } from "https://deno.land/x/oak@v17.0.0/mod.ts";
// import { swaggerDoc } from "https://deno.land/x/deno_swagger_doc@releavev2.0.1/mod.ts";

import { router } from "./routers/forward-routes.ts";

const port = Deno.env.get("PORT") || 5000;

// const swaggerDefinition = {
//   info: {
//     // API informations (required)
//     title: "Cors proxy", // Title (required)
//     version: "1.0.0", // Version (required)
//     description: "A sample API", // Description (optional)
//   },
//   host: `localhost:${port}`, // Host (optional)
//   basePath: "/", // Base path (optional)
//   swagger: "2.0", // Swagger version (optional)
// };

// // Options for the swagger docs
// const options = {
//   // Import swaggerDefinitions
//   swaggerDefinition,
//   // Path to the API docs
//   // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
//   apis: ["./routers/forward-routes.ts"],
// };

// // Initialize swagger-jsdoc -> returns validated swagger spec in json format
// const swaggerSpec = swaggerDoc(options);

const app = new Application();

// app.use(async (context, next) => {
//   if (context.request.url.pathname === "/swagger.json") {
//     context.response.headers.set("Content-Type", "application/json");
//     context.response.status = 200;
//     context.response.body = swaggerSpec;
//   } else {
//     await next();
//   }
// });

router.use(router.routes());

app.use(router.routes());

console.log(`Server running on port ${port}`);

await app.listen({ port: +port });
