import {Categories} from "../models/categories.model"
import { db } from "../db";

let categories: Categories[] = []

// GET ALL
export const getCategories = async (): Promise<Categories[]> => {
    const [rows] = await db.query('SELECT * FROM categories');
    return rows as Categories[];
}

// GET BY ID
export const getCategoriesById = async (id: number): Promise<Categories | null> => {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    return (rows as Categories[])[0] || null;
}

// CREATE
export const createCategories = async (categories: Omit<Categories, 'id'>): Promise<Categories> => {
    const [result] = await db.execute(
        'INSERT INTO categories (name,image) VALUES (?,?)',
        [categories.name,categories.image]
    );
    const insertId = (result as any).insertId;
    return { id: insertId, ...categories };
}

// UPDATE
export const updateCategories = async (id: number, data: Partial<Categories>): Promise<Categories | null> => {
    await db.execute(
        'UPDATE categories SET name = ?, image = ? WHERE id = ?',
        [data.name,data.image, id]
    );
    return getCategoriesById(id);
}

// DELETE
export const deleteCategories = async (id: number): Promise<Categories | null> => {
    const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
    const categories = (rows as Categories[])[0];
    if (!categories) return null;
    await db.execute('DELETE FROM categories WHERE id = ?', [id]);
    return categories;
}
