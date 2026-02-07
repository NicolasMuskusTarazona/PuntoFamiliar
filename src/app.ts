import express from "express"
import path from "path"

import categoriesRoutes from "./routes/categories.routes"
import extrasRoutes from "./routes/extras.routes"
import productsRoutes from "./routes/products.routes"
import adminRoutes from "./routes/admin.routes"

const app = express()

app.use(express.json())

// FRONTEND
const frontendPath = path.join(__dirname, "..", "frontend")
app.use(express.static(frontendPath))

// API routes
app.use("/categories", categoriesRoutes)
app.use("/extras", extrasRoutes)
app.use("/products", productsRoutes)
app.use("/admin", adminRoutes)


export default app
