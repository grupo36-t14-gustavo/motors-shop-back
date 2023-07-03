import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errorHandler.util";
import { statusError } from "../../constants";

const prisma = new PrismaClient();

export const listAllCarAdsService = async (page: number) => {
    const defaultPerPageNum = 12,
        noExistentPageNum = 0,
        existentPageNum = 1;

    const perPageNum = defaultPerPageNum;

    const validatePageNum = page === noExistentPageNum;
    if (validatePageNum) {
        throw new AppError("Invalid page number", statusError.BAD_REQUEST);
    }

    const pageNum = page ? page : existentPageNum;

    const validateNextPageList = await prisma.car.findMany({
        skip: perPageNum * pageNum,
        take: perPageNum,
    });

    const allCarAdList = await prisma.car.findMany();

    const filteredCarAdList = await prisma.car.findMany({
        skip:
            perPageNum * (pageNum - existentPageNum) ||
            perPageNum * (existentPageNum - existentPageNum),
        take: perPageNum,
    });

    const baseUrl = "http://localhost:3001/cars/ads/";
    const previousPageValidation =
        pageNum - existentPageNum > noExistentPageNum
            ? `${baseUrl}?page=${pageNum - existentPageNum}`
            : null;

    const nextPageValidation =
        validateNextPageList.length !== noExistentPageNum
            ? `${baseUrl}?page=${pageNum + existentPageNum}`
            : null;

    const paginatedCarAdList = {
        prevPage: previousPageValidation,
        nextPage: nextPageValidation,
        count: allCarAdList.length,
        data: filteredCarAdList,
    };

    return paginatedCarAdList;
};
