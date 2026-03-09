import { prisma } from "../../config/prisma"

// GET ALL
export const findAll = async () => {
    return await prisma.product.findMany({
        include: {
            category: true
        }
    })
}

// GET BY ID
export const findById = async (id: number) => {
    return await prisma.product.findUnique({
        where: { id },
        include: {
            category: true
        }
    })
}

// GET BY CATEGORY
export const findByCategory = async (categoryId: number) => {
    return await prisma.product.findMany({
        where: { categoryId },
        include: {
            category: true
        }
    })
}

// CREATE
export const create = async (data: {
    name: string
    base_price: number
    image: string
    description?: string
    categoryId: number
}) => {
    return await prisma.product.create({
        data
    })
}

// UPDATE
export const update = async (
    id: number,
    data: {
        name?: string
        base_price?: number
        image?: string
        description?: string
        categoryId?: number
    }
) => {
    return await prisma.product.update({
        where: { id },
        data
    })
}

// DELETE
export const remove = async (id: number) => {
    return await prisma.product.delete({
        where: { id }
    })
}