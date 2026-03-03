import { Extras } from "./extras.model"
import * as repository from "./extras.repository"

// GET ALL
export const getExtras = async (): Promise<Extras[]> => {
    return await repository.findAll()
}

// GET BY ID
export const getExtrasById = async (id: number): Promise<Extras | null> => {
    return await repository.findById(id)
}

// CREATE
export const createExtras = async (data: Omit<Extras, "id">): Promise<Extras> => {
    if (data.price == null) {
        throw new Error("Extra price is required")
    }

    return await repository.create(data)
}

// UPDATE
export const updateExtras = async (id: number, data: Partial<Extras>): Promise<Extras> => {
    const existing = await repository.findById(id)
    if (!existing) throw new Error("Extra not found")
    
    // Prisma devuelve el objeto actualizado directamente
    return await repository.update(id, data)
}

// DELETE
export const deleteExtras = async (id: number): Promise<Extras | null> => {
    const existing = await repository.findById(id)
    if (!existing) return null

    await repository.remove(id)

    return existing
}