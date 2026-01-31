import { Request, Response } from "express";
import * as adminService from "../services/admin.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const admin = await adminService.findByUsername(username);
        if (!admin) {
            return res.status(401).json({ message: "Credenciales invalidas" });
        }

        const valid = await bcrypt.compare(password, admin.password);
        if (!valid) {
            return res.status(401).json({ message: "Credenciales invalidas" });
        }

        const token = jwt.sign(
            { id: admin.id, role: "admin" },
            process.env.JWT_SECRET as string,
            { expiresIn: "2h" }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error en login", error });
    }
};
