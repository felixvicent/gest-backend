import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { createCategoryController } from "../useCases/createCategory";
import { listCategoriesController } from "../useCases/listCategories";
import { updateCategoryController } from "../useCases/updateCategory";
import { deleteCategoryController } from "../useCases/deleteCategory";

const categoriesRoutes = Router();

categoriesRoutes.get('/', ensureAuthenticated, listCategoriesController.handle);
categoriesRoutes.post('/', ensureAuthenticated, createCategoryController.handle);
categoriesRoutes.put('/:id', ensureAuthenticated, updateCategoryController.handle);
categoriesRoutes.delete('/:id', ensureAuthenticated, deleteCategoryController.handle);

export { categoriesRoutes };