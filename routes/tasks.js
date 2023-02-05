const router = require("express").Router();
import {
  createTaskValidation,
  taskValidation,
} from "../middleware/taskRequestValidation.js";
const tasks = [];
let id = 0;

//Create a task
router.post("/tasks", createTaskValidation, (req, res) => {
  try {
    const { title, description } = req.body;
    const task = {
      title: title,
      description: description,
      id: id + 1,
    };
    tasks.push(task);
    id++;
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all tasks
router.get("/tasks", (req, res) => {
    try {
        if(tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json("Empty task list");
        }
    } catch (err) {
      res.status(500).json(err);
    }
});

//Get a specific task
router.get("/task/:id", taskValidation, (req, res) => {
  const id = req.params.id;
  const task = tasks.find((task) => task.id == id);
  if (task) {
    return res.status(200).json({ task: task });
  } else {
    return res.status(404).json("Task not found");
  }
});

//Edit a specific task
router.put("/tasks/:id", taskValidation, (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const task = tasks.find((task) => task.id == id);
    if (task) {
      if (title) {
        task.title = title;
      }
      if (description) {
        task.description = description;
      }
      return res.status(200).json(task);
    } else {
      return res.status(404).json("Task not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a specific task
router.delete("/tasks/:id", taskValidation, (req, res) => {
  try {
    const id = req.params.id;
    const task = tasks.find((task) => task.id == id);
    if (task) {
      tasks.splice(tasks.indexOf(task), 1);
      return res.status(200).json(task.title  + " removed successfully");
    } else {
      return res.status(404).json("Task not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


