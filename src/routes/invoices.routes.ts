import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const invoicesRoutes = Router();

invoicesRoutes.get("/", ensureAuthenticated, () => { console.log('OPA') });

export { invoicesRoutes };