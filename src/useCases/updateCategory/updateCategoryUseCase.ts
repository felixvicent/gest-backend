import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { AppError } from "../../errors/AppErros";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class UpdateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) { }

	async execute(id: string, { label, type }: ICreateCategoryDTO): Promise<void> {
		const categoriesExists = await this.categoriesRepository.findById(id);

		if (!categoriesExists) {
			throw new AppError("Category not exists");
		}

		await this.categoriesRepository.update(id, { label, type });
	}
}

export { UpdateCategoryUseCase };