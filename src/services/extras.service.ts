import {Extras} from "../models/extras.model"
import { db } from "../db";

let extras: Extras[] = []

// GET ALL
export const getExtras = async (): Promise<Extras[]> => {
    const [rows] = await db.query('SELECT * FROM extras');
    return rows as Extras[];
}

// GET BY ID
export const getExtrasById = async (id: number): Promise<Extras | null> => {
    const [rows] = await db.query('SELECT * FROM extras WHERE id = ?', [id]);
    return (rows as Extras[])[0] || null;
}

// CREATE
export const createExtras = async (extras: Omit<Extras, 'id'>): Promise<Extras> => {
    const [result] = await db.execute(
        'INSERT INTO extras (name,price) VALUES (?,?)',
        [extras.name,extras.price]
    );
    const insertId = (result as any).insertId;
    return { id: insertId, ...extras };
}

// UPDATE
export const updateExtras = async (id: number, data: Partial<Extras>): Promise<Extras | null> => {
    await db.execute(
        'UPDATE extras SET name = ?, price = ?  WHERE id = ?',
        [data.name,data.price, id]
    );
    return getExtrasById(id);
}

// DELETE
export const deleteExtras = async (id: number): Promise<Extras | null> => {
    const [rows] = await db.query('SELECT * FROM extras WHERE id = ?', [id]);
    const extras = (rows as Extras[])[0];
    if (!extras) return null;
    await db.execute('DELETE FROM extras WHERE id = ?', [id]);
    return extras;
}
