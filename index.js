import express from 'express';
const app = express();
import helmet from 'helmet';
import morgan from 'morgan';

import taskRoute from './routes/tasks.js';

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/", taskRoute);

app.listen(8800, () => {
  console.log("Backend server is running in port 8800!");
});
