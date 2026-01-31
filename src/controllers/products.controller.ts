import { Request, Response } from "express";
import * as service from "../services/products.service";
import * as extrasService from "../services/extras.service";

export const create = async (req: Request, res: Response) => {
    try {
        const { extras, ...productData } = req.body;
        const product = await service.createProducts(productData);
        if (Array.isArray(extras)) {
            for (const extra of extras) {
                if (!extra.name || extra.price == null) {
                    return res.status(400).json({
                        message: "Si hay extras, name y price son obligatorios"
                    });
                }
                await extrasService.createExtras({name: extra.name,price: extra.price,product_id: product.id
                });
            }
        }
        res.status(201).json({
            message: "Producto creado correctamente",
            product
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message || error
        });
    }
};

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
