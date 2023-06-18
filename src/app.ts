import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
export const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import dotenv from "dotenv";
import path from "path";
console.log(path.join(process.cwd(), ".evn"));

dotenv.config({ path: path.join(process.cwd(), ".evn") });

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

export default app;
