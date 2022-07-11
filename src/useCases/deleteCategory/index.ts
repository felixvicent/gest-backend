import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { DeleteCategoryController } from "./deleteCategoryController";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";

const categoriesRepository = new CategoriesRepository;
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoriesRepository);
const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase);

export { deleteCategoryController };