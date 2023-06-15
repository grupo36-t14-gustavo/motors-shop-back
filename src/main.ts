import "express-async-errors";
import cors from "cors";
import express, { Application } from "express";
import { errorHandlerUtil } from "../src/utils/errorHandler.util";
import adRoutes from "./routes/CarAds/carAds.routes";
import userRouter from "./routes/User/user.routes";

export const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/cars", adRoutes);

app.use(errorHandlerUtil);
