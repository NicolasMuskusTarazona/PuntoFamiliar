import { prisma } from "../../config/prisma"

export const create = async (data: any) => {
    return await prisma.admin.create({
        data
    })
}

export const findById = async (id: number) => {
    return await prisma.admin.findUnique({
        where: { id }
    })
}

export const deleteById = async (id: number) => {
    return await prisma.admin.delete({
        where: { id }
    })
}

export const findByUsername = async (username: string) => {
    return await prisma.admin.findUnique({
        where: { username }
    })
}