import bcrypt from "bcrypt";
import { db } from "../db";

const createAdmin = async () => {
    const username = "admin";
    const password = "12345";

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
        "INSERT INTO admins (username, password) VALUES (?, ?)",
        [username, hashedPassword]
    );

    console.log("Admin successfully created");
    process.exit();
};

createAdmin();
