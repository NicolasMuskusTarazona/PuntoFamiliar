import { prisma } from "../../config/prisma"

// GET ALL
export const findAll = async () => {
    return await prisma.category.findMany()
}

// GET BY ID
export const findById = async (id: number) => {
    return await prisma.category.findUnique({
        where: { id }
    })
}

// CREATE
export const create = async (data: { name: string; image: string }) => {
    return await prisma.category.create({
        data
    })
}

// UPDATE
export const update = async (id: number, data: { name?: string; image?: string }) => {
    return await prisma.category.update({
        where: { id },
        data
    })
}

// DELETE
export const remove = async (id: number) => {
    return await prisma.category.delete({
        where: { id }
    })
}