import { Request, Response } from "express"
import { ExtraDTO } from "../DTOs/extras.dto"
import * as service from "../services/extras.service"

export const create = async (req: Request, res: Response) => {
    try {
        const extraData = ExtraDTO.create(req.body)
        const extra = await service.createExtras(extraData)

        res.status(201).json({
            message: "Extra created correctly",
            extra
        })
    } catch (error: any) {
        res.status(400).json({message: error.message || "Invalid data"})
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const extras = await service.getExtras();
        res.json(extras);
    } catch (error) {
        res.status(500).json({ message: "Error fetching extras", error });
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const extras = await service.getExtrasById(id);
        if (!extras) {
            res.status(404).json({ message: "Extras not found" });
            return;
        }
        res.json(extras);
    } catch (error) {
        res.status(500).json({ message: "Error fetching extras", error });
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({message: "Invalid ID"})
        }
        const extraData = ExtraDTO.update(req.body)
        const extra = await service.updateExtras(id, extraData)

        if (!extra) {
            return res.status(404).json({message: "Extra not found"})
        }
        res.status(200).json({message: "Extra updated correctly",extra})
    } catch (error: any) {
        res.status(400).json({message: error.message || "Error updating extra"})
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const deletedExtras = await service.deleteExtras(id);

        if (!deletedExtras) {
            res.status(404).json({ message: "Extras not found" });
            return;
        }
        res.json(deletedExtras);
    } catch (error) {
        res.status(500).json({ message: "Error deleting extras", error });
    }
}
