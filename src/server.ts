import app from "./app";
import { testConnection } from "./db";
import { seedAdmin } from "./modules/admin/createAdmin";

const PORT = Number(process.env.PORT) || 5000;

(async () => {
    try {
        await testConnection();
        await seedAdmin(); 
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
})();