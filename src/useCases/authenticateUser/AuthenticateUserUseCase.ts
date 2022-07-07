import { sign } from "jsonwebtoken";

import { AppError } from "../../errors/AppErros";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IResponse {
	user: {
		name: string;
		email: string;
	};
	token: string;
}

interface IRequest {
	email: string;
	password: string;
}

class AuthenticateUserUseCase {
	constructor(private usersRepository: IUsersRepository) { }

	async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.usersRepository.findByEmail(email);

		if (!user) {
			throw new AppError("Email or password incorrect");
		}

		if (user.password !== password) {
			throw new AppError("Email or password incorrect");
		}

		const token = sign({}, "43b5438670f5b0f8a77b7d53bae428fa", {
			subject: user.id,
			expiresIn: "1d",
		});

		const tokenReturn = {
			token,
			user: {
				name: user.name,
				email: user.email
			}
		}

		return tokenReturn;
	}
}

export { AuthenticateUserUseCase };