import { Request, Response, NextFunction } from "express"

export const validateId = (req: Request,res: Response,next: NextFunction) => {
    const id = Number(req.params.id)
    // Validar que sea numero entero positivo
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid ID. It must be a positive integer."
        })
    }
    next()
}