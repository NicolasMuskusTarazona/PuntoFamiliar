import {Products} from "../models/products.model"
import { db } from "../db";

let products: Products[] = []

// GET ALL
export const getProducts = async (): Promise<Products[]> => {
    const [rows] = await db.query('SELECT * FROM products');
    return rows as Products[];
}

// GET BY ID
export const getProductsById = async (id: number): Promise<Products | null> => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return (rows as Products[])[0] || null;
}

// CREATE
export const createProducts = async (product: Omit<Products, "id">): Promise<Products> => {
    const [result] = await db.execute(
        `INSERT INTO products (name, category_id, base_price, description)VALUES (?, ?, ?, ?)`,
        [product.name, product.category_id, product.base_price,product.description ?? null ]
    );
    const insertId = (result as any).insertId;
    return {id: insertId,...product};
};


// UPDATE
export const updateProducts = async (id: number, data: Partial<Products>): Promise<Products | null> => {
    await db.execute(
        'UPDATE products SET name = ?, category_id = ?, base_price = ?, description = ?  WHERE id = ?',
        [data.name,data.category_id,data.base_price,data.description, id]
    );
    return getProductsById(id);
}

// DELETE
export const deleteProducts = async (id: number): Promise<Products | null> => {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    const products = (rows as Products[])[0];
    if (!products) return null;
    await db.execute('DELETE FROM products WHERE id = ?', [id]);
    return products;
}
