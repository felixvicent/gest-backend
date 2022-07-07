import { PrismaClient } from "@prisma/client";
import { fieldEncryptionMiddleware } from "prisma-field-encryption";

const prismaClient = new PrismaClient();

prismaClient.$use(fieldEncryptionMiddleware());

export { prismaClient };