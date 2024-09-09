import db from "../db/knex";

interface Task {
  id?: number;
  title: string;
  completed: boolean;
}

export const addTask = async (task: Task) => {
  return await db("tasks").insert(task).returning("*");
};

export const getAllTasks = async () => {
  return await db("tasks").select("*");
};

export const markTaskCompleted = async (id: number) => {
  return await db("tasks")
    .where({ id })
    .update({ completed: db.raw("NOT completed") })
    .returning("*");
};

export const deleteTask = async (id: number) => {
  return await db("tasks").where({ id }).del();
};
