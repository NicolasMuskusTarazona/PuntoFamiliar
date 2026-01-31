import { Request, Response } from "express";
import { CategorieDTO } from "../DTOs/categories.dto"
import * as service from "../services/categories.service";


// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const categorieData = CategorieDTO.create(req.body)
        const categorie = await service.createCategories(categorieData)

        res.status(201).json({
            message: "Categorie created correctly",
            categorie
        })
    } catch (error: any) {
        res.status(400).json({message: error.message || "Invalid data"})
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
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({message: "Invalid ID"})
        }
        const CategorieData = CategorieDTO.update(req.body)
        const categorie = await service.updateCategories(id, CategorieData)

        if (!categorie) {
            return res.status(404).json({message: "Categorie not found"})
        }
        res.status(200).json({message: "Categorie updated correctly",categorie})
    } catch (error: any) {
        res.status(400).json({message: error.message || "Error updating categorie"})
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
