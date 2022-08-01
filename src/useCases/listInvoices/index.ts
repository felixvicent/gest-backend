import { InvoicesRepository } from "../../repositories/implementations/InvoicesRepository";
import { ListInvoicesController } from "./ListInvoicesController";
import { ListInvoicesUseCase } from "./ListInvoicesUseCase";

const invoicesRepository = new InvoicesRepository();
const listInvoicesUseCase = new ListInvoicesUseCase(invoicesRepository);
const listInvoiceController = new ListInvoicesController(listInvoicesUseCase)

export { listInvoiceController };