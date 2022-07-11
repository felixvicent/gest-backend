import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";

class DeleteCategoryController {
	constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) { }

	handle = async (request: Request, response: Response): Promise<Response> => {
		const { id } = request.params;

		await this.deleteCategoryUseCase.execute(id);

		return response.send(204);
	}
}

export { DeleteCategoryController };