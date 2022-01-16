import { Server } from "https://deno.land/std@0.121.0/http/server.ts";

const port = 4505;
const handler = (request: Request) => {
  const body = `Your user-agent is:\n\n${request.headers.get(
  "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
};

const server = new Server({ port, handler });


console.log(`http://localhost:${port}/`); 

await server.listenAndServe();
