import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
});

export async function testConnection() {
    try {
        const conn = await db.getConnection();
        console.log("Conectado a MySQL");
        conn.release();
    } catch (error) {
        console.error("Error conectando a MySQL:", error);
    }
}
