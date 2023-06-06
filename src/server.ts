import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import express from "express";
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

// eslint-disable-next-line no-magic-numbers
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
