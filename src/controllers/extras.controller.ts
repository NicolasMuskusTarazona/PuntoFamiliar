import { Request, Response } from "express";
import * as service from "../services/extras.service";

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const extras = await service.createExtras(req.body);
        res.status(201).json(extras);
    } catch (error) {
        res.status(500).json({ message: "Error creating extras", error });
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
        const id = Number(req.params.id);
        const extras = await service.updateExtras(id, req.body);
        if (!extras) {
            res.status(404).json({ message: "Extras not found" });
            return;
        }
        res.json(extras);
    } catch (error) {
        res.status(500).json({ message: "Error updating extras", error });
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
