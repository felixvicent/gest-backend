require('dotenv/config');

import "express-async-errors";

import cors from 'cors';
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { AppError } from "./errors/AppErros";

const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({ message: err.message });
	}

	return response.status(500).json({
		status: "error",
		message: `Internal server error - ${err.message}`,
	});
});

app.listen(process.env.PORT, () => console.log(`Server is runnig in port ${process.env.PORT}`));