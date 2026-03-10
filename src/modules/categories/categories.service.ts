import { Categories } from "./categories.model"
import * as repository from "./categories.repository"

// GET ALL
export const getCategories = async (): Promise<Categories[]> => {
    return await repository.findAll()
}

// GET BY ID
export const getCategoriesById = async (id: number): Promise<Categories | null> => {
    return await repository.findById(id)
}

// CREATE
export const createCategories = async (data: Omit<Categories, 'id'>): Promise<Categories> => {
    return await repository.create(data)
}

// UPDATE
export const updateCategories = async (id: number, data: Partial<Categories>): Promise<Categories> => {
    const existing = await repository.findById(id)
    if (!existing) throw new Error("Category not found")

    // Prisma devuelve el objeto actualizado directamente
    return await repository.update(id, data)
}

// DELETE
export const deleteCategories = async (id: number): Promise<Categories | null> => {
    const existing = await repository.findById(id)
    if (!existing) return null

    await repository.remove(id)
    return existing
}