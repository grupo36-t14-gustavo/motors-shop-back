import { Request, Response } from "express";
import { listAllCarAdsService } from "../../services/CarAds/listAllCarAds.service";
import { statusSuccess } from "../../constants";

export const listAllCarAdsController = async (req: Request, res: Response) => {
    const pageNum = Number(req.query.page);
    const paginatedCarAds = await listAllCarAdsService(pageNum);

    return res.status(statusSuccess.OK).json(paginatedCarAds);
};
