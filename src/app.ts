import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";

import productsRoutes from "./modules/products/products.routes";
import categoriesRoutes from "./modules/categories/categories.routes";
import extrasRoutes from "./modules/extras/extras.routes";
import adminRoutes from "./modules/admin/admin.routes";

const app = express();

// Middlewares 
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/extras", extrasRoutes);
app.use("/admin", adminRoutes);

app.use(express.static(path.join(__dirname, "../frontend")));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

export default app;