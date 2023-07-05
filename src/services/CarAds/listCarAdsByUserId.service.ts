import { paginateCarAdsWithIdUtil } from "../../utils/paginateCarAds.util";

export const listCarAdsByUserIdService = async (
    page: number,
    userId: string
) => {
    const paginatedCarAdList = await paginateCarAdsWithIdUtil(page, userId);
    return paginatedCarAdList;
};
