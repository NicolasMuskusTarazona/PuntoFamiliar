USE PuntoFamiliar;

INSERT INTO categories (name, image)VALUES
('Hamburguesas', 'img/Food/Categories/hamburguesa.png'),
('Perro Caliente', 'img/Food/Categories/perro-caliente.png'),
('Papas', 'img/Food/Categories/salchipapa.png');

/* Hamburguesas */
INSERT INTO products (category_id, name, base_price, description, image) VALUES
(1,'Hamburguesa Clasica',12000,'Pan tradicional, carne de hamburguesa, huevo, tocineta, queso fundido, cebolla grille, tomate, papa fosforito, salsas','img/Food/Products/1.png'),
(1,'Hamburguesa Pollo',14000,'Pan tradicional, pechuga de pollo asada, tocineta, huevo, queso doble crema, papa fosforito, cebolla grille, tomate, salsas','img/Food/Products/2.png'),
(1,'Hamburguesa Doble Carne',17000,'Pan brioche, doble carne de hamburguesa, queso doble crema, tocineta, huevo, papa fosforito, cebolla grille, tomate, salsas','img/Food/Products/3.png'),
(1,'Hamburguesa Carne Desmechada',18000,'Pan brioche, 150 gr carne desmechada, doble tocineta, doble queso fundido, huevo, papa fosforito, cebolla grille, tomate, salsas','img/Food/Products/4.png'),
(1,'Hamburguesa Mixta',17000,'Pan brioche, carne de hamburguesa, pechuga de pollo asada, huevo, tocineta, queso, papa fosforito, cebolla grille, tomate, salsas','img/Food/Products/5.png'),
(1,'Hamburguesa Ranchera',17000,'Pan brioche, carne de hamburguesa, chorizo ranchero, tocineta, queso fundido, papa fosforito, cebolla grille, tomate, salsas de la casa','img/Food/Products/6.png'),
(1,'Hamburguesa Chuleta de Cerdo Ahumada',16000,'Pan brioche, chuleta de cerdo ahumada, tocineta, queso doble crema, huevo, papa fosforito, cebolla grille, tomate, salsas','img/Food/Products/7.png');

/* Perros */ 
INSERT INTO products (category_id, name, base_price, description, image) VALUES
(2,'Perro Clasico',6300,'Pan clasico, salchicha de pollo, queso fundido o rallado, papa fosforito, cebolla cruda, salsas, incluye un vaso de gaseosa para retirar en el punto. Precio 5.000 para retirar sin incluir precio del icoport','img/Food/Products/8.png'),
(2,'Perro Doble Salchicha',7300,'Pan tradicional, doble salchicha de pollo, queso fundido o rallado, papa fosforito, cebolla cruda, papas a la francesa, salsas (mostaza, tartara, roja, pina)','img/Food/Products/9.png'),
(2,'ChoriPerro',11000,'Pan parmesano, chorizo ranchero, papa fosforito, cebolla cruda, doble queso fundido (rallado opcional), tocineta, salsas (mostaza, tartara, roja, pina)','img/Food/Products/10.png'),
(2,'Perro con Salchicha Americana',11000,'Pan parmesano, salchicha tipo americano Zenu, tocineta, doble queso fundido (rallado opcional), cebolla cruda, papa fosforito, salsas (mostaza, tartara, roja, pina)','img/Food/Products/11.png'),
(2,'Pepito Mixto con Papa',30000,'Pan brioche de 30 cms, carne lomo de res, pechuga de pollo asada, chorizo ranchero, papa fosforito, triple queso fundido, doble tocineta, cebolla grille, tomate, salsas. Valor del icoport incluido','img/Food/Products/12.png');

/* Papas */ 
INSERT INTO products (category_id, name, base_price, description, image) VALUES
(3,'Salchipapa',13000,'Papas a la francesa, salchicha de pollo, queso rallado, salsas. Valor del icoport incluido','img/Food/Products/13.png'),
(3,'Choripapa',14000,'Papas a la francesa, chorizo ranchero, queso rallado, salsas. Valor del icoport incluido','img/Food/Products/14.png'),
(3,'Papas Locas',22000,'Papas a la francesa, maiz tierno, pollo desmechado, chorizo ranchero, cubierta de triple queso fundido, salsas. Valor del icoport incluido','img/Food/Products/15.png'),
(3,'Salchicarne Mixto',40000,'Papas a la francesa, carne de lomo de res, pechuga de pollo asada, chorizo ranchero, salchicha de pollo, queso fundido, maiz tierno, cebolla grille, salsas. Valor del icoport incluido','img/Food/Products/16.png');

/* Extras */ 
INSERT INTO extras (name, price)VALUES
('Papas a la Francesa', 4000),
('Queso rallado',3000);

