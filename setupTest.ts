// setupTest.ts
import { app } from "./src";
import db from "./src/db/knex";
import { Server } from "http";
require("dotenv").config({ path: ".env.test" });

let server: Server;

beforeAll(() => {
  // Only start the server if we are in a route/controller test
  if (process.env.TEST_TYPE === "integration") {
    server = app.listen(0, () => {
      const address = server.address();
      console.log(`Test server running on port ${(address as any).port}`);
    });
  }
});

afterAll(async () => {
  // Only close the server if it was started
  if (process.env.TEST_TYPE === "integration") {
    await db.destroy();
    server.close();
  }
});
