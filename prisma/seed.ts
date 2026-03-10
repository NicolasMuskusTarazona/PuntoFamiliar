// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // 1️⃣ Categorías
    await prisma.category.createMany({
        data: [
            { name: "Hamburguesas", image: "img/Food/Categories/hamburguesa.png" },
            { name: "Perro Caliente", image: "img/Food/Categories/perro-caliente.png" },
            { name: "Papas", image: "img/Food/Categories/salchipapa.png" }
        ],
        skipDuplicates: true, // evita errores si ya existen
    });

    // 2️⃣ Productos
    await prisma.product.createMany({
        data: [
            // Hamburguesas
            { categoryId: 1, name: "Hamburguesa Clasica", base_price: 12000, description: "Pan tradicional, carne de hamburguesa, huevo, tocineta, queso fundido, cebolla grille, tomate, papa fosforito, salsas", image: "img/Food/Products/1.png" },
            { categoryId: 1, name: "Hamburguesa Pollo", base_price: 14000, description: "Pan tradicional, pechuga de pollo asada, tocineta, huevo, queso doble crema, papa fosforito, cebolla grille, tomate, salsas", image: "img/Food/Products/2.png" },
            { categoryId: 1, name: "Hamburguesa Doble Carne", base_price: 17000, description: "Pan brioche, doble carne de hamburguesa, queso doble crema, tocineta, huevo, papa fosforito, cebolla grille, tomate, salsas", image: "img/Food/Products/3.png" },
            { categoryId: 1, name: "Hamburguesa Carne Desmechada", base_price: 18000, description: "Pan brioche, 150 gr carne desmechada, doble tocineta, doble queso fundido, huevo, papa fosforito, cebolla grille, tomate, salsas", image: "img/Food/Products/4.png" },
            { categoryId: 1, name: "Hamburguesa Mixta", base_price: 17000, description: "Pan brioche, carne de hamburguesa, pechuga de pollo asada, huevo, tocineta, queso, papa fosforito, cebolla grille, tomate, salsas", image: "img/Food/Products/5.png" },
            { categoryId: 1, name: "Hamburguesa Ranchera", base_price: 17000, description: "Pan brioche, carne de hamburguesa, chorizo ranchero, tocineta, queso fundido, papa fosforito, cebolla grille, tomate, salsas de la casa", image: "img/Food/Products/6.png" },
            { categoryId: 1, name: "Hamburguesa Chuleta de Cerdo Ahumada", base_price: 16000, description: "Pan brioche, chuleta de cerdo ahumada, tocineta, queso doble crema, huevo, papa fosforito, cebolla grille, tomate, salsas", image: "img/Food/Products/7.png" },

            // Perros calientes
            { categoryId: 2, name: "Perro Clasico", base_price: 6300, description: "Pan clasico, salchicha de pollo, queso fundido o rallado, papa fosforito, cebolla cruda, salsas, incluye un vaso de gaseosa para retirar en el punto", image: "img/Food/Products/8.png" },
            { categoryId: 2, name: "Perro Doble Salchicha", base_price: 7300, description: "Pan tradicional, doble salchicha de pollo, queso fundido o rallado, papa fosforito, cebolla cruda, papas a la francesa, salsas (mostaza, tartara, roja, pina)", image: "img/Food/Products/9.png" },
            { categoryId: 2, name: "ChoriPerro", base_price: 11000, description: "Pan parmesano, chorizo ranchero, papa fosforito, cebolla cruda, doble queso fundido (rallado opcional), tocineta, salsas (mostaza, tartara, roja, pina)", image: "img/Food/Products/10.png" },
            { categoryId: 2, name: "Perro con Salchicha Americana", base_price: 11000, description: "Pan parmesano, salchicha tipo americano Zenu, tocineta, doble queso fundido (rallado opcional), cebolla cruda, papa fosforito, salsas (mostaza, tartara, roja, pina)", image: "img/Food/Products/11.png" },
            { categoryId: 2, name: "Pepito Mixto con Papa", base_price: 30000, description: "Pan brioche de 30 cms, carne lomo de res, pechuga de pollo asada, chorizo ranchero, papa fosforito, triple queso fundido, doble tocineta, cebolla grille, tomate, salsas. Valor del icoport incluido", image: "img/Food/Products/12.png" },

            // Papas
            { categoryId: 3, name: "Salchipapa", base_price: 13000, description: "Papas a la francesa, salchicha de pollo, queso rallado, salsas. Valor del icoport incluido", image: "img/Food/Products/13.png" },
            { categoryId: 3, name: "Choripapa", base_price: 14000, description: "Papas a la francesa, chorizo ranchero, queso rallado, salsas. Valor del icoport incluido", image: "img/Food/Products/14.png" },
            { categoryId: 3, name: "Papas Locas", base_price: 22000, description: "Papas a la francesa, maiz tierno, pollo desmechado, chorizo ranchero, cubierta de triple queso fundido, salsas. Valor del icoport incluido", image: "img/Food/Products/15.png" },
            { categoryId: 3, name: "Salchicarne Mixto", base_price: 40000, description: "Papas a la francesa, carne de lomo de res, pechuga de pollo asada, chorizo ranchero, salchicha de pollo, queso fundido, maiz tierno, cebolla grille, salsas. Valor del icoport incluido", image: "img/Food/Products/16.png" },
        ],
        skipDuplicates: true,
    });

    // 3️⃣ Extras
    await prisma.extra.createMany({
        data: [
            { name: "Papas a la Francesa", price: 4000 },
            { name: "Queso rallado", price: 3000 },
        ],
        skipDuplicates: true,
    });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });