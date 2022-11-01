import express from "express";
import morgan from "morgan";

import fileRouter from "./routes/fileRoutes.js";

const app = express();

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

app.use("/api/v1/files", fileRouter);

export default app;
