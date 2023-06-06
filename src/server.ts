import "dotenv/config";

import { app } from "./main";

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 3000;

app.listen(port, () => {

    console.log(`Servidor rodando em http://localhost:${port}`);
});
