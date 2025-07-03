import { addTask } from "../../models/taskModel";
const db = require("knex")({ client: "pg" });

jest.mock("knex", () =>
  jest.fn(() => ({
    insert: jest.fn().mockReturnThis(),
    returning: jest
      .fn()
      .mockResolvedValue([{ id: 1, title: "Test Task", completed: false }]),
  }))
);

describe("addTask model", () => {
  it("should insert a task into the database and return the task", async () => {
    const task = { title: "Test Task", completed: false };
    const result = await addTask(task);

    expect(db).toHaveBeenCalledWith("tasks");
    expect(db().insert).toHaveBeenCalledWith(task);
    expect(db().returning).toHaveBeenCalledWith("*");
    expect(result).toEqual([{ id: 1, title: "Test Task", completed: false }]);
  });
}