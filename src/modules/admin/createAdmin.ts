import bcrypt from "bcrypt";
import { db } from "../../db";

export const seedAdmin = async () => {
    const username = "Admin";
    const password = "12345";

    const [rows]: any = await db.query(
        "SELECT id FROM Admin WHERE username = ?",
        [username]
    );

    if (rows.length > 0) {
        console.log("Admin already exists");
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
        "INSERT INTO Admin (username, password) VALUES (?, ?)",
        [username, hashedPassword]
    );

    console.log("Admin created automatically");
};
