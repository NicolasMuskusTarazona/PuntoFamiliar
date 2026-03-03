import { Request, Response } from "express"
import { CategorieDTO } from "./categories.dto"
import * as service from "./categories.service"

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const categorieData = CategorieDTO.create(req.body)
        const categorie = await service.createCategories(categorieData)

        return res.status(201).json({message: "Category created correctly",category: categorie})
    } catch (error: any) {
        return res.status(400).json({message: error.message || "Invalid data"})
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const categories = await service.getCategories()

        return res.status(200).json(categories)
    } catch (error) {
        console.error("ERROR EN getAll:", error)
        return res.status(500).json({ message: "Error fetching categories", error })
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const category = await service.getCategoriesById(id)

        if (!category) {
            return res.status(404).json({message: "Category not found"})
        }

        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json({message: "Error fetching category"})
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const categorieData = CategorieDTO.update(req.body)

        const updatedCategory = await service.updateCategories(id, categorieData)

        if (!updatedCategory) {
            return res.status(404).json({message: "Category not found"})
        }

        return res.status(200).json({message: "Category updated correctly",category: updatedCategory})
    } catch (error: any) {
        return res.status(400).json({message: error.message || "Error updating category"})
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const deletedCategory = await service.deleteCategories(id)

        if (!deletedCategory) {
            return res.status(404).json({message: "Category not found"})
        }

        return res.status(200).json({message: "Category deleted correctly",category: deletedCategory})
    } catch (error) {
        return res.status(500).json({message: "Error deleting category"})
    }
}