import { Router } from "express";
import {
  createTask,
  getTasks,
  completeTask,
  removeTask,
} from "../controllers/taskController";

const router = Router();

router.post("/tasks", createTask);
router.get("/tasks", getTasks);
router.patch("/tasks/:id/complete", completeTask);
router.delete("/tasks/:id", removeTask);

export default router;
