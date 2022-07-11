import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { UpdateCategoryController } from "./updateCategoryController";
import { UpdateCategoryUseCase } from "./updateCategoryUseCase";

const categoriesRepository = new CategoriesRepository;
const updateCategoryUseCase = new UpdateCategoryUseCase(categoriesRepository);
const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase);

export { updateCategoryController };