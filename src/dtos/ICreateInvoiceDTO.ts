interface ICreateInvoiceDTO {
	category_id: string;
	user_id: string;
	value: number;
	reference: string;
	description: string;
}

export { ICreateInvoiceDTO }