import app from "./app";
import { testConnection } from "./db";

const PORT = 5000;

(async () => {
    await testConnection(); 
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})();