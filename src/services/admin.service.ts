import { db } from "../db";
import { Admin } from "../models/admin.model";

export const findByUsername = async (
    username: string
): Promise<Admin | null> => {
    const [rows] = await db.query(
        "SELECT * FROM admins WHERE username = ?",
        [username]
    );

    return (rows as Admin[])[0] || null;
};
