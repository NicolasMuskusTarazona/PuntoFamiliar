// src/modules/admin/admin.controller.ts
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { loginAdmin } from "./admin.service";

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        // Usamos el service para validar usuario y password
        const admin = await loginAdmin(username, password);

        // Generamos JWT
        const token = jwt.sign(
            { role: "admin", id: admin.id },
            process.env.JWT_SECRET as string, // clave secreta
            { expiresIn: "2h" }
        );

        res.json({ token });
    } catch (error) {
        // Error genérico para no filtrar info sensible
        res.status(401).json({ message: "Credenciales invalidas" });
    }
};