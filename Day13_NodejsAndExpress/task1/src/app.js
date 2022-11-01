import express from "express";

import fileRouter from "./routes/fileRoutes.js";

const app = express();

app.use("/api/v1/files", fileRouter);

export default app;
