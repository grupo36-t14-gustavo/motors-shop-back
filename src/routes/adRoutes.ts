import express from "express";
import { deleteAdByAdIdController, listAdsByUserIdController } from "../controllers/Ads/AdController";

const router = express.Router();

router.get("/ads/:userId", listAdsByUserIdController);
router.delete("/ads/:carId/", deleteAdByAdIdController);

export default router;
