import { TreturnIdCarAdds } from "../../interfaces/Car/interfaceAdsCars";

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
