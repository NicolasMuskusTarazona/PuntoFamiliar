import { z } from "zod"

export class CategorieDTO {
    static create(data: unknown) {
        const schema = z.object({
            name: z.string().min(1, "Required name"),
        })

        const result = schema.safeParse(data)

        if (!result.success) {
            throw new Error("Invalid fields in categorie")
        }

        return result.data
    }

    static update(data: unknown) {
        const schema = z.object({
            name: z.string().min(1).optional(),
        })

        const result = schema.safeParse(data)

        if (!result.success) {
            throw new Error("Invalid fields for updating categorie")
        }

        return result.data
    }
}
