import express, { Application } from "express";
import "express-async-errors";
import { errorHandlerUtil } from "../src/utils/errorHandler.util";
import adRoutes from "./routes/CarAds/carAds.routes";
import userRouter from "./routes/User/user.routes";

export const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/cars", adRoutes);



app.use(errorHandlerUtil);