import { ICreateInvoiceDTO } from "../../dtos/ICreateInvoiceDTO";
import { IInvoicesRepository } from "../../repositories/IInvoicesRepository";

class CreateInvoiceUseCase {
	constructor(private categoriesRepository: IInvoicesRepository) { }

	async execute(data: ICreateInvoiceDTO) {
		await this.categoriesRepository.create(data);
	}
}

export { CreateInvoiceUseCase };