import { Request, Response } from "express";
import { listCarAdsByUserIdService } from "../../services/CarAds/listCarAdsByUserId.service";
import { statusSuccess } from "../../constants";

export const listAdsByUserIdController = async (
    req: Request,
    res: Response
) => {
    const page = Number(req.query.page);
    const userId = req.params.userId;

    if (userId) {
        const carAdListFromAnotherUser = await listCarAdsByUserIdService(
            page,
            userId
        );

        return res.status(statusSuccess.OK).json(carAdListFromAnotherUser);
    }

    const carAdListFromSignedUser = await listCarAdsByUserIdService(
        page,
        req.user.id
    );

    return res.status(statusSuccess.OK).json(carAdListFromSignedUser);
};
