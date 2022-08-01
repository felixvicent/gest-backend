import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { listInvoiceController } from "../useCases/listInvoices";
import { createInvoiceController } from "../useCases/createInvoice";

const invoicesRoutes = Router();

invoicesRoutes.get("/", ensureAuthenticated, listInvoiceController.handle);
invoicesRoutes.post("/", ensureAuthenticated, createInvoiceController.handle);

export { invoicesRoutes };