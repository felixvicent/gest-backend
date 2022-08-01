import { Request, Response } from "express";
import { ListInvoicesUseCase } from "./ListInvoicesUseCase";

class ListInvoicesController {
	constructor(private listInvoicesUseCase: ListInvoicesUseCase) { }

	handle = async (request: Request, response: Response): Promise<Response> => {
		const { reference } = request.body;
		const user_id = request.user.id;

		const categories = await this.listInvoicesUseCase.execute(user_id, reference);

		return response.json(categories);
	}
}

export { ListInvoicesController }