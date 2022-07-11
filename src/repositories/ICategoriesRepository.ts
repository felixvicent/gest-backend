import { Category } from "@prisma/client";
import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";

interface ICategoriesRepository {
	create({ label, type }: ICreateCategoryDTO): Promise<void>

	findByLabel(label: string): Promise<Category | null>

	list(): Promise<Category[]>

	update(id: string, { label, type }: ICreateCategoryDTO): Promise<void>

	findById(id: string): Promise<Category | null>

	delete(id: string): Promise<void>
}

export { ICategoriesRepository }