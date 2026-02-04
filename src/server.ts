import app from "./app";
import { testConnection } from "./db";
import { seedAdmin } from "./seed/createAdmin";

const PORT = 5000;

(async () => {
    await testConnection();
    await seedAdmin();
    app.listen(PORT, () => {
        console.log(` Server running on port ${PORT}`);
    });
})();

// OBTENER DATOS DESDE EL CELULAR
// TENGO QUE ACTUALIZAR EL GET CON UN PUERTO, NO CON UN LOCALHOST LO MISMO EN MENU.JS
/*(async () => {
    await testConnection();
    await seedAdmin();
    app.listen(PORT, "0.0.0.0", () => {
        console.log("Servidor corriendo en puerto 5000");
    });

})();
*/