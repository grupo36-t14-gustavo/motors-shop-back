import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./errors";
import userRouter from "./routes/index";
import adRoutes from "./routes/adRoutes";

export const app: Application = express();
app.use(express.json());

app.use("", userRouter);
app.use("/cars", adRoutes);



app.use(handlreErrors);