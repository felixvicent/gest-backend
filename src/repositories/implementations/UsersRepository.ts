import { User } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
	async create({ name, email, password }: ICreateUserDTO): Promise<void> {
		await prismaClient.user.create({
			data: {
				name,
				email,
				password
			}
		});
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = await prismaClient.user.findUnique({
			where: {
				email
			}
		});

		return user;
	}

	async findById(id: string): Promise<User | null> {
		const user = await prismaClient.user.findUnique({
			where: {
				id
			}
		});

		return user;
	}
}

export { UsersRepository };