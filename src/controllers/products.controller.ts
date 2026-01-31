import { Request, Response } from "express";
import * as service from "../services/products.service";


// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const products = await service.createProducts(req.body);
        res.status(201).json(products);
    }catch (error: any) {
    console.error(error); // 👈 CLAVE

    res.status(500).json({
        message: "Error creating products",
        error: error.message || error
    });
}

}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const products = await service.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const products = await service.getProductsById(id);
        if (!products) {
            res.status(404).json({ message: "Products not found" });
            return;
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const products = await service.updateProducts(id, req.body);
        if (!products) {
            res.status(404).json({ message: "Products not found" });
            return;
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error updating products", error });
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const deletedProducts = await service.deleteProducts(id);

        if (!deletedProducts) {
            res.status(404).json({ message: "Products not found" });
            return;
        }
        res.json(deletedProducts);
    } catch (error) {
        res.status(500).json({ message: "Error deleting products", error });
    }
}
