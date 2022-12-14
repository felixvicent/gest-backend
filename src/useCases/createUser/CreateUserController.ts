import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) { }

	handle = async (request: Request, response: Response): Promise<Response> => {
		const { name, email, password } = request.body;

		await this.createUserUseCase.execute({ name, email, password });

		return response.status(201).send();
	}
}

export { CreateUserController };