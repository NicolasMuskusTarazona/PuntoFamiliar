import { Request, Response } from "express"
import { CategorieDTO } from "../DTOs/categories.dto"
import * as service from "../services/categories.service"

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const categorieData = CategorieDTO.create(req.body)
        const categorie = await service.createCategories(categorieData)
        res.status(201).json({message: "Categorie created correctly",categorie})
    } catch (error: any) {
        res.status(400).json({message: error.message || "Invalid data"})
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const categories = await service.getCategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message: "Error fetching categories"})
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }
        const categorie = await service.getCategoriesById(id)
        if (!categorie) {
            return res.status(404).json({ message: "Categorie not found" })
        }
        res.status(200).json(categorie)
    } catch (error) {
        res.status(500).json({message: "Error fetching categorie"})
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }
        const categorieData = CategorieDTO.update(req.body)
        const categorie = await service.updateCategories(id, categorieData)
        if (!categorie) {
            return res.status(404).json({ message: "Categorie not found" })
        }
        res.status(200).json({message: "Categorie updated correctly",categorie})
    } catch (error: any) {
        res.status(400).json({message: error.message || "Error updating categorie"})
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }
        const deletedCategorie = await service.deleteCategories(id)
        if (!deletedCategorie) {
            return res.status(404).json({ message: "Categorie not found" })
        }
        res.status(200).json({message: "Categorie deleted correctly",categorie: deletedCategorie})
    } catch (error) {
        res.status(500).json({message: "Error deleting categorie"})
    }
}
