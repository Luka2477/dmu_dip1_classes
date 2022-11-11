import express from "express";
import sessions from "express-session";
import morgan from "morgan";

import productsRouter from "./routes/products.js";

const app = express();

app.set("view engine", "pug");
app.set("views", "src/views");

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
app.use(
  sessions({
    secret: "secret",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 20 },
    resave: false,
  })
);
app.use(express.json());

app.get("/", (req, res) => res.status(200).redirect("/products"));

app.use("/products", productsRouter);

export default app;
