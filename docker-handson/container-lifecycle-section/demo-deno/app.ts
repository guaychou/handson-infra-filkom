import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// importing the controllers
import {healthCheck} from './controllers/healthCheck.ts';
import {helloworld} from './controllers/helloworld.ts';
import {logging} from './logger/logger.ts'

const router = new Router();
const app = new Application();
const PORT = parseInt(Deno.env.get("PORT") || "3000");

// ROUTES
app.use(logging)
router
.get("/_/healthz", healthCheck)
.get("/",helloworld)

// Starting the server
app.use(router.routes());
app.use(router.allowedMethods());
app.addEventListener('listen', () => {
    console.log("Server started in port :" + PORT);
})
await app.listen({port: PORT});