import { Request, Response } from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  markTaskCompleted,
} from "../models/taskModel";

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const task = await addTask({ title, completed: false });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

export const completeTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task = await markTaskCompleted(Number(id));
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to mark task as completed" });
  }
};

export const removeTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTask(Number(id));
    res.status(204).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
