import { prisma } from "../../config/prisma"

// GET ALL
export const findAll = async () => {
    return await prisma.extra.findMany()
}

// GET BY ID
export const findById = async (id: number) => {
    return await prisma.extra.findUnique({
        where: { id }
    })
}

// CREATE
export const create = async (data: { name: string; price: number }) => {
    return await prisma.extra.create({
        data
    })
}

// UPDATE
export const update = async (id: number, data: { name?: string; price?: number }) => {
    return await prisma.extra.update({
        where: { id },
        data
    })
}

// DELETE
export const remove = async (id: number) => {
    return await prisma.extra.delete({
        where: { id }
    })
}