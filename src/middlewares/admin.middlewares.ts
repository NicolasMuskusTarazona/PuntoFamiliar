import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const adminOnly = (
    req: Request & { admin?: any },
    res: Response,
    next: NextFunction
) => {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({ message: "Token requerido" });
    }

    const token = auth.split(" ")[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as any;

        if (decoded.role !== "admin") {
            return res.status(403).json({ message: "Acceso denegado" });
        }

        req.admin = decoded;
        next();
    } catch {
        return res.status(401).json({ message: "Token invalido" });
    }
};
