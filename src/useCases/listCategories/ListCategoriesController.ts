import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
	constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

	handle = async (request: Request, response: Response): Promise<Response> => {
		const categories = await this.listCategoriesUseCase.execute();

		return response.json(categories);
	}
}

export { ListCategoriesController }