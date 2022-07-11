import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { AppError } from "../../errors/AppErros";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
	constructor(private categoriesRepository: ICategoriesRepository) { }

	async execute({ label, type }: ICreateCategoryDTO) {
		const categoryAlreadyExists = await this.categoriesRepository.findByLabel(label);

		if (categoryAlreadyExists) {
			throw new AppError("Category already exists");
		}

		await this.categoriesRepository.create({ label, type });
	}
}

export { CreateCategoryUseCase };