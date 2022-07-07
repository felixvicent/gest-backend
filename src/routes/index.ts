import Router from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { invoicesRoutes } from "./invoices.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/authenticate", authenticateRoutes);
router.use("/invoices", invoicesRoutes);

export { router };