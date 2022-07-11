import { AppError } from "../../errors/AppErros";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class DeleteCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) { }

	async execute(id: string): Promise<void> {
		const categoryExists = await this.categoriesRepository.findById(id);

		if (!categoryExists) {
			throw new AppError("Category not exists");
		}

		await this.categoriesRepository.delete(id);
	}
}

export { DeleteCategoryUseCase };