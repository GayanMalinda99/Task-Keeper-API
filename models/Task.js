const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    taskId: {
      type: String,
      required: true,
    },
    taskName: {
        type: String,
        required: true,
        max: 200,
    },
    taskDesc: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);