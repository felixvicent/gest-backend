import { Request, Response } from "express";
import { CreateInvoiceUseCase } from "./CreateInvoiceUseCase";

class CreateInvoiceController {
	constructor(private createInvoiceUseCase: CreateInvoiceUseCase) { }

	handle = async (request: Request, response: Response): Promise<Response> => {
		const { description, category_id, value, reference } = request.body;
		const user_id = request.user.id;

		await this.createInvoiceUseCase.execute({ description, category_id, value, reference, user_id });
		return response.status(201).send();
	}
}

export { CreateInvoiceController };