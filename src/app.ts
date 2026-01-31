import express from "express"
import categoriesRoutes from "./routes/categories.routes"
import extrasRoutes from "./routes/extras.routes"
import productsRoutes from "./routes/products.routes"
import adminRoutes from "./routes/admin.routes";


const app = express()

app.use(express.json())

app.use("/categories", categoriesRoutes)
app.use("/extras", extrasRoutes)
app.use("/products", productsRoutes)
app.use("/admin", adminRoutes);


export default app
