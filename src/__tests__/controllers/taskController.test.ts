import { createTask } from "../../controllers/taskController";
import * as taskModel from "../../models/taskModel";
import { Request, Response } from "express";
import { mock } from "jest-mock-extended";

describe("createTask controller", () => {
  it("should call addTask model and return success", async () => {
    const mockTask = { title: "test", completed: false };
    const mockReq = { body: mockTask } as Request;
    const mockRes = mock<Response>();

    jest.spyOn(taskModel, "addTask").mockResolvedValue([mockTask]);

    await createTask(mockReq, mockRes);

    expect(taskModel.addTask).toHaveBeenCalledWith(mockTask);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(mockTask);
  });
});