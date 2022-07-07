import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../errors/AppErros";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
	constructor(private usersRepository: IUsersRepository) { }

	async execute({ name, email, password }: ICreateUserDTO) {
		const userAlreadyExists = await this.usersRepository.findByEmail(email);

		if (userAlreadyExists) {
			throw new AppError("User already exists");
		}

		await this.usersRepository.create({ name, email, password });
	}
}

export { CreateUserUseCase };