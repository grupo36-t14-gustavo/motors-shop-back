import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./errors";
import carRouter from "./routes/CarAds/carAds.routes";
import userRouter from "./routes/index";

export const app: Application = express();
app.use(express.json());

app.use("", userRouter);
app.use("",carRouter);


app.use(handlreErrors);