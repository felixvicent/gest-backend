import { Request, Response } from "express";
import { UpdateCategoryUseCase } from "./updateCategoryUseCase";

class UpdateCategoryController {
	constructor(private updateCategoryUseCase: UpdateCategoryUseCase) { }

	handle = async (request: Request, response: Response) => {
		const { label, type } = request.body;
		const { id } = request.params;

		await this.updateCategoryUseCase.execute(id, { label, type });

		return response.send(204);
	}
}

export { UpdateCategoryController };