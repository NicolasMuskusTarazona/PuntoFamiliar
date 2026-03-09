import { Request, Response } from "express"
import { ProductsDTO } from "../products/products.dto"
import * as service from "../products/products.service"
import * as extrasService from "../extras/extras.service"

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
                } as any)
            }
        }

        return res.status(201).json({message: "Product created correctly",product})

    } catch (error: any) {
        return res.status(400).json({message: error.message || "Invalid data"})
    }
}

// GET ALL
export const getAll = async (_req: Request, res: Response) => {
    try {
        const products = await service.getProducts()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({message: "Error fetching products"})
    }
}

// GET BY ID
export const getById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const product = await service.getProductsById(id)

        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }

        return res.status(200).json(product)

    } catch (error) {
        return res.status(500).json({message: "Error fetching product"})
    }
}

// GET PRODUCTS BY CATEGORY
export const getProductsByCategoryController = async (
    req: Request,
    res: Response
) => {
    try {
        const categoryId = Number(req.params.id)

        const products = await service.getProductsByCategory(categoryId)

        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json({message: "Error fetching products by category"})
    }
}

// UPDATE
export const update = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const productData = ProductsDTO.update(req.body)
        const updatedProduct = await service.updateProducts(id, productData)

        if (!updatedProduct) {
            return res.status(404).json({message: "Product not found"})
        }

        return res.status(200).json({message: "Product updated correctly",product: updatedProduct})

    } catch (error: any) {
        return res.status(400).json({message: error.message || "Error updating product"})
    }
}

// DELETE
export const remove = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const deletedProduct = await service.deleteProducts(id)

        if (!deletedProduct) {
            return res.status(404).json({message: "Product not found"})
        }

        return res.status(200).json({message: "Product deleted correctly",product: deletedProduct
        })

    } catch (error) {
        return res.status(500).json({message: "Error deleting product"})
    }
}