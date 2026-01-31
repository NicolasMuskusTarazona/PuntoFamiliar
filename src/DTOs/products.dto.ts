import { z } from "zod"

export class ProductsDTO {
    static create(data: unknown) {
        const schema = z.object({
            name: z.string().min(1, "Required name"),
            category_id: z.number().int().positive(),
            base_price: z.number().positive(),
            description: z.string().optional()
        })

        const result = schema.safeParse(data)

        if (!result.success) {
            throw new Error("Invalid fields in product")
        }

        return result.data
    }

    static update(data: unknown) {
        const schema = z.object({
            name: z.string().min(1).optional(),
            category_id: z.number().int().positive().optional(),
            base_price: z.number().positive().optional(),
            description: z.string().optional()
        })

        const result = schema.safeParse(data)

        if (!result.success) {
            throw new Error("Invalid fields for updating product")
        }

        return result.data
    }
}
