import { Context} from "https://deno.land/x/oak/mod.ts";
export const healthCheck = async(context: Context) => {
        context.response.body = {
                                  "status" : 200, 
                                  "Message": "I'm Healthy"
                                }
        context.response.status = 200
  }