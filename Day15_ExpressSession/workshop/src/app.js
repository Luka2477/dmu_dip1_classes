import express from "express";
import morgan from "morgan";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

export default app;
