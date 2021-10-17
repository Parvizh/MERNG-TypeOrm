import "reflect-metadata";
import { startServer } from "./app";

async function main() {
  const app = await startServer();
  app.listen(2000);
  console.log("Server on port 2000");
}

main();