const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");

const taskRoute = require("./routes/tasks");

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/tasks", taskRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
