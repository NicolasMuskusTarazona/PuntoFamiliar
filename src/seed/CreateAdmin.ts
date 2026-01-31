import bcrypt from "bcrypt";
import { db } from "../db";

const createAdmin = async () => {
    const username = "Nicolas";
    const password = "1234"; 
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute(
        "INSERT INTO admins (username, password) VALUES (?, ?)",
        [username, hashedPassword]
    );

    console.log("Admin creado correctamente");
    process.exit();
};

createAdmin();
