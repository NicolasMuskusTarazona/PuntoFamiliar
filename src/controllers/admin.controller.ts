import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { findByUsername } from "../services/admin.service";

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    //Buscar admin en la base de datos
    const admin = await findByUsername(username);
    if (!admin) {
        return res.status(401).json({ message: "Credenciales invalidas" });
    }
    //Comparar password ingresado con el hash
    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: "Credenciales invalidas" });
    }
    //Generar JWT
    const token = jwt.sign(
        { role: "admin", id: admin.id },
        process.env.JWT_SECRET as string, // JWT_SECRET "Firma" de un token no falsificante
        { expiresIn: "2h" }
    );
    res.json({ token });
};
