import { InvoicesRepository } from "../../repositories/implementations/InvoicesRepository";
import { CreateInvoiceController } from "../createInvoice/CreateInvoiceController";
import { CreateInvoiceUseCase } from "./CreateInvoiceUseCase";

const invoicesRepository = new InvoicesRepository();
const createInvoiceUseCase = new CreateInvoiceUseCase(invoicesRepository);
const createInvoiceController = new CreateInvoiceController(createInvoiceUseCase);

export { createInvoiceController };