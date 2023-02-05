const router = require("express").Router();
const Task = require("../models/Task");
const tasks = [];

//Create a task
router.post("/tasks", async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all tasks
router.get("/tasks", async (req, res) => {
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
router.get("/task/:id", async (req, res) => {
    try {
      const task = await tasks.findById(req.params.id);
      res.status(200).json(task);
    } catch (err) {
      res.status(404).json("Task not found");
    }
});

//Edit a task
router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await tasks.findById(req.params.id);
    if (task.taskId === req.body.taskId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The task has been updated");
    } else {
      res.status(404).json("You can not update this task. Please try again");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a specific task
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await tasks.findById(req.params.id);
    if (task.taskId === req.body.taskId) {
      await task.deleteOne();
      res.status(200).json("The task has been deleted");
    } else {
      res.status(404).json("Task can not delete");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

