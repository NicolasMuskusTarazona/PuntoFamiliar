import { z } from "zod"

export class ExtraDTO {
    static create(data: unknown) {
        const schema = z.object({
            name: z.string().min(1, "Required name"),
            price: z.number().positive(),
        })

        const result = schema.safeParse(data)

        if (!result.success) {
            throw new Error("Invalid fields in extra")
        }

        return result.data
    }

    static update(data: unknown) {
        const schema = z.object({
            name: z.string().min(1).optional(),
            price: z.number().positive().optional(),
        })

        const result = schema.safeParse(data)

        if (!result.success) {
            throw new Error("Invalid fields for updating extra")
        }

        return result.data
    }
}
