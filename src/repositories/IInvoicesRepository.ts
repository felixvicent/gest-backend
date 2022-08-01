import { Invoice } from "@prisma/client";
import { ICreateInvoiceDTO } from "../dtos/ICreateInvoiceDTO";

interface IInvoicesRepository {
	list(user_id: string, reference?: string): Promise<Invoice[]>

	create(data: ICreateInvoiceDTO): Promise<void>
}

export { IInvoicesRepository }