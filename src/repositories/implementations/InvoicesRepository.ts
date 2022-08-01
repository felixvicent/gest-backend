import { Invoice } from "@prisma/client";
import { request } from "express";
import { prismaClient } from "../../database/prismaClient";
import { ICreateInvoiceDTO } from "../../dtos/ICreateInvoiceDTO";
import { IInvoicesRepository } from "../IInvoicesRepository";

class InvoicesRepository implements IInvoicesRepository {
	async create({ description, category_id, value, reference, user_id }: ICreateInvoiceDTO): Promise<void> {
		await prismaClient.invoice.create({
			data: {
				description,
				user_id,
				category_id,
				value,
				reference
			}
		})
	}

	async list(user_id: string, reference?: string): Promise<Invoice[]> {
		if (!reference) {
			const ano = new Date().getFullYear().toString();
			const mes = "0" + (new Date().getMonth() + 1).toString().slice(-2);
			reference = ano + '-' + mes;
		}

		const invoices = await prismaClient.invoice.findMany({
			where: {
				reference,
				user_id
			}
		});

		return invoices;
	}

}

export { InvoicesRepository };