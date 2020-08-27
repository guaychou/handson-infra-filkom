import { Context } from "https://deno.land/x/oak/mod.ts";
import { time } from "https://deno.land/x/time.ts@v2.0.1/mod.ts";

export const logging = async(context: Context, next: Function) => {
    await next();
    let log = JSON.stringify({
        timestamp: time().tz(Deno.env.get("TZ")).toString(),
        method: context.request.method,
        URL: context.request.url.pathname,
        code: context.response.status,
        visitor: context.request.ip
    })
    console.log(log)
}