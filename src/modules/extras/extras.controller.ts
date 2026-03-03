import { Request, Response } from "express"
import { ExtraDTO } from "./extras.dto"
import * as service from "./extras.service"

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const extraData = ExtraDTO.create(req.body)
        const extra = await service.createExtras(extraData)

        return res.status(201).json({message: "Extra created correctly",extra
        })
    } catch (error: any) {
        return res.status(400).json({message: error.message || "Invalid data"})
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const extras = await service.getExtras()
        return res.json(extras)
    } catch (error) {
        return res.status(500).json({message: "Error fetching extras"})
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const extra = await service.getExtrasById(id)

        if (!extra) {
            return res.status(404).json({message: "Extra not found"})
        }

        return res.json(extra)
    } catch (error) {
        return res.status(500).json({message: "Error fetching extra"})
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const extraData = ExtraDTO.update(req.body)

        const updatedExtra = await service.updateExtras(id, extraData)

        if (!updatedExtra) {
            return res.status(404).json({message: "Extra not found"
            })
        }
        return res.status(200).json({message: "Extra updated correctly",extra: updatedExtra
        })
    } catch (error: any) {
        return res.status(400).json({message: error.message || "Error updating extra"})
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const deletedExtra = await service.deleteExtras(id)

        if (!deletedExtra) {
            return res.status(404).json({message: "Extra not found"})
        }
        return res.json({message: "Extra deleted correctly",extra: deletedExtra})
    } catch (error) {
        return res.status(500).json({ message: "Error deleting extra"})
    }
}