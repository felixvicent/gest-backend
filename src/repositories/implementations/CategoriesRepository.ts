import { Category } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
	async create({ label, type }: ICreateCategoryDTO): Promise<void> {
		await prismaClient.category.create({
			data: {
				label,
				type
			}
		})
	}

	async findByLabel(label: string): Promise<Category | null> {
		const category = await prismaClient.category.findUnique({
			where: {
				label: label
			}
		});

		return category;
	}

	async list(): Promise<Category[]> {
		const categories = await prismaClient.category.findMany();

		return categories;
	}

	async update(id: string, { label, type }: ICreateCategoryDTO): Promise<void> {
		await prismaClient.category.update({
			data: {
				label,
				type
			},
			where: {
				id
			}
		});
	}

	async findById(id: string): Promise<Category | null> {
		const category = await prismaClient.category.findUnique({
			where: {
				id
			}
		})

		return category;
	}

	async delete(id: string): Promise<void> {
		await prismaClient.category.delete({
			where: {
				id
			}
		})
	}
}

export { CategoriesRepository };