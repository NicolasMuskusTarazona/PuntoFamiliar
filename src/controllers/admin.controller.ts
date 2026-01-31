import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (
        username !== process.env.ADMIN_USERNAME ||
        password !== process.env.ADMIN_PASSWORD
    ) {
        return res.status(401).json({ message: "Credenciales invalidas" });
    }

    const token = jwt.sign(
        { role: "admin" },
        process.env.JWT_SECRET as string,
        { expiresIn: "2h" }
    );

    res.json({ token });
};
