import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

const usersRepository = new UsersRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository)
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserController };