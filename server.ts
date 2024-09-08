import { Application } from 'https://deno.land/x/oak@v17.0.0/mod.ts';
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts';
import { router } from './routers/forward-routes.ts';

const port = Deno.env.get('PORT') || 5000;

const app = new Application();

app.use(
	oakCors({
		origin: '*', // Allow all origins, you can specify specific origins here
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
	}),
);

router.use(router.routes());

app.use(router.routes());

console.log(`Server running on port ${port}`);

await app.listen({ port: +port });
