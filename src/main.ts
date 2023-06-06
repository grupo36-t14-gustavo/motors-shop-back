import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./errors";
import { userRouter } from "./routes";

const app: Application = express();
app.use(express.json());
app.use(handlreErrors);
app.use("/register", userRouter);