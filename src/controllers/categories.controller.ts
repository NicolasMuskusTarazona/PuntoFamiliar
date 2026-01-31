import { Request, Response } from "express";
import * as service from "../services/categories.service";


// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const categories = await service.createCategories(req.body);
        res.status(201).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error creating categories", error });
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const categories = await service.getCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error });
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const categories = await service.getCategoriesById(id);
        if (!categories) {
            res.status(404).json({ message: "Categorie not found" });
            return;
        }
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error });
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const categories = await service.updateCategories(id, req.body);
        if (!categories) {
            res.status(404).json({ message: "Categories not found" });
            return;
        }
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: "Error updating categories", error });
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const deletedCategories = await service.deleteCategories(id);

        if (!deletedCategories) {
            res.status(404).json({ message: "Categories not found" });
            return;
        }
        res.json(deletedCategories);
    } catch (error) {
        res.status(500).json({ message: "Error deleting categories", error });
    }
}
