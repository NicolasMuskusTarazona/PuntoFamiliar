import { Request, Response } from "express"
import { ProductsDTO } from "../DTOs/products.dto"
import * as service from "../services/products.service"
import * as extrasService from "../services/extras.service"

// CREATE
export const create = async (req: Request, res: Response) => {
    try {
        const { extras, ...rawProductData } = req.body

        const productData = ProductsDTO.create(rawProductData)
        const product = await service.createProducts(productData)

        if (Array.isArray(extras)) {
            for (const extra of extras) {
                if (!extra.name || extra.price == null) {
                    return res.status(400).json({message: "Extras name and price are required"})
                }

                await extrasService.createExtras({
                    name: extra.name,
                    price: extra.price,
                    product_id: product.id
                })
            }
        }

        res.status(201).json({message: "Product created correctly",product})
    } catch (error: any) {
        res.status(400).json({message: error.message || "Invalid data"})
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const products = await service.getProducts()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            message: "Error fetching products"
        })
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }

        const product = await service.getProductsById(id)

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: "Error fetching product"})
    }
}

// GET PRODUCTS BY CATEGORY
export const getProductsByCategoryController = async (req: Request,res: Response) => {
    try {
        const { id } = req.params;
        const categoryId = Number(id);
        if (isNaN(categoryId)) {
            return res.status(400).json({message: "Category id invalido"});
        }
        const products = await service.getProductsByCategory(categoryId);
        res.json(products);
    } catch (error) {
        res.status(500).json({message: "Error obteniendo productos por categoria"});
    }
};

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }

        const productData = ProductsDTO.update(req.body)
        const product = await service.updateProducts(id, productData)

        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json({
            message: "Product updated correctly",
            product
        })
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Error updating product"
        })
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ message: "Invalid ID" })
        }

        const deletedProduct = await service.deleteProducts(id)

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json({
            message: "Product deleted correctly",
            product: deletedProduct
        })
    } catch (error) {
        res.status(500).json({
            message: "Error deleting product"
        })
    }
}
