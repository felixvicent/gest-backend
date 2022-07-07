
import { Router } from "express";
import { createUserController } from "../useCases/createUser";

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
