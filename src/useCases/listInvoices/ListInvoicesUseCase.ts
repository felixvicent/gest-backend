import { Invoice } from "@prisma/client";
import { InvoicesRepository } from "../../repositories/implementations/InvoicesRepository";

class ListInvoicesUseCase {
	constructor(private invoicesRepository: InvoicesRepository) { }

	async execute(user_id: string, reference: string): Promise<Invoice[]> {
		const categories = await this.invoicesRepository.list(user_id, reference);

		return categories;
	}
}

export { ListInvoicesUseCase }