import request from "supertest";
import { app } from "../../index";

describe("Task routes", () => {
  it("should create a new task", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task", completed: false });
    expect(response.status).toBe(201);
  });

  it("should return a list of tasks", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.status).toBe(200);
  });

  it("should update a task", async () => {
    const response = await request(app).patch("/api/tasks/1/complete");
    expect(response.status).toBe(200);
  });

  it("should delete a task", async () => {
    const response = await request(app).delete("/api/tasks/1");
    expect(response.status).toBe(204);
  });
});
