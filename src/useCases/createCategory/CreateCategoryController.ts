import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUseCase) { }

	handle = async (request: Request, response: Response): Promise<Response> => {
		const { label, type } = request.body;

		await this.createCategoryUseCase.execute({ label, type });

		return response.status(201).send();
	}
}

export { CreateCategoryController };