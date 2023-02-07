import express from 'express';
const app = express();
import bodyParser from "body-parser";
import cors from "cors";

import taskRoute from './routes/tasks.js';

app.use("/tasks", taskRoute);

app.listen(8800, () => {
  console.log("Backend server is running in port 8800");
});
