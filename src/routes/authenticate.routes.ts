import { Router } from "express";

import { authenticateUserController } from "../useCases/authenticateUser";

const authenticateRoutes = Router();

authenticateRoutes.post("/", authenticateUserController.handle);

export { authenticateRoutes };