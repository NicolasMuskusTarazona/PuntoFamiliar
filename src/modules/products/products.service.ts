import { Products } from "./products.model"
import * as repository from "./products.repository"
import { ProductsDTO } from "./products.dto"

// GET ALL
export const getProducts = async (): Promise<Products[]> => {
    return await repository.findAll()
}

// GET BY ID
export const getProductsById = async (id: number): Promise<Products | null> => {
    return await repository.findById(id)
}

// GET PRODUCTS BY CATEGORY
export const getProductsByCategory = async (categoryId: number): Promise<Products[]> => {
    return await repository.findByCategory(categoryId)
}

// CREATE
export const createProducts = async (data: unknown): Promise<Products> => {
    const validData = ProductsDTO.create(data)
    const { category_id, ...rest } = validData
    if (!category_id) throw new Error("category_id is required")
    const prismaData = { ...rest, categoryId: category_id }
    return await repository.create(prismaData)
}

// UPDATE
export const updateProducts = async (id: number, data: unknown): Promise<Products> => {
    const validData = ProductsDTO.update(data)
    const { category_id, ...rest } = validData
    const prismaData = category_id !== undefined ? { ...rest, categoryId: category_id } : rest

    const existing = await repository.findById(id)
    if (!existing) throw new Error("Products not found")
    
    return await repository.update(id, prismaData)
}

// DELETE
export const deleteProducts = async (id: number): Promise<Products | null> => {
    const existing = await repository.findById(id)
    if (!existing) return null
    await repository.remove(id)
    return existing
}