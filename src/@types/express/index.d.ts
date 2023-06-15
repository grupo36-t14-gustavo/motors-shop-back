import { TreturnIdCarAdds } from "../../interfaces/CarAds/carAds.interface";

declare global {
    namespace Express {
        interface Request {
            user: {
                id: string;
                cars: TreturnIdCarAdds[];
            };
        }
    }
}
export {};
