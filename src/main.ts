import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./errors";
import userRouter from "./routes/index";

export const app: Application = express();
app.use(express.json());

app.use("/register", userRouter);



app.use(handlreErrors);