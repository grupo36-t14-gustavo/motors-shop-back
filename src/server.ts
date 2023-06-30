import * as dotenv from "dotenv";
import { app } from "./main";
import { BACKUP_PORT } from "./constants";

dotenv.config();

const port = process.env.PORT || BACKUP_PORT;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
