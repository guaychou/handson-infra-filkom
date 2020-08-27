import { Context} from "https://deno.land/x/oak/mod.ts";
export const helloworld = async(context: Context) => {
        context.response.body = `Hello World from Deno ${Deno.version.deno}`
        context.response.status = 200
}