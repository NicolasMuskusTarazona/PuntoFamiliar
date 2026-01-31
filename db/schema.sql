USE PuntoFamiliar;

INSERT INTO categories (name)
VALUES ('Hamburguesas'),('Perro Caliente'),('Papas');

INSERT INTO products (category_id, name, base_price, description) VALUES
(1,'Hamburguesa Clasica',12000,'Pan tradicional, carne de hamburguesa, huevo, tocineta, queso fundido, cebolla grille, tomate, papa fosforito, salsas'),
(1,'Hamburguesa Pollo',14000,'Pan tradicional, pechuga de pollo asada, tocineta, huevo, queso doble crema, papa fosforito, cebolla grille, tomate, salsas'),
(1,'Hamburguesa Doble Carne',17000,'Pan brioche, doble carne de hamburguesa, queso doble crema, tocineta, huevo, papa fosforito, cebolla grille, tomate, salsas'),
(1,'Hamburguesa Carne Desmechada',18000,'Pan brioche, 150 gr carne desmechada, doble tocineta, doble queso fundido, huevo, papa fosforito, cebolla grille, tomate, salsas'),
(1,'Hamburguesa Mixta',17000,'Pan brioche, carne de hamburguesa, pechuga de pollo asada, huevo, tocineta, queso, papa fosforito, cebolla grille, tomate, salsas'),
(1,'Hamburguesa Ranchera',17000,'Pan brioche, carne de hamburguesa, chorizo ranchero, tocineta, queso fundido, papa fosforito, cebolla grille, tomate, salsas de la casa'),
(1,'Hamburguesa Chuleta de Cerdo Ahumada',16000,'Pan brioche, chuleta de cerdo ahumada, tocineta, queso doble crema, huevo, papa fosforito, cebolla grille, tomate, salsas');

INSERT INTO products (category_id, name, base_price, description) VALUES
(2,'Perro Clasico',6300,'Pan clasico, salchicha de pollo, queso fundido o rallado, papa fosforito, cebolla cruda, salsas, incluye un vaso de gaseosa para retirar en el punto. Precio 5.000 para retirar sin incluir precio del icoport'),
(2,'Perro Doble Salchicha',7300,'Pan tradicional, doble salchicha de pollo, queso fundido o rallado, papa fosforito, cebolla cruda, papas a la francesa, salsas (mostaza, tartara, roja, pina)'),
(2,'ChoriPerro',11000,'Pan parmesano, chorizo ranchero, papa fosforito, cebolla cruda, doble queso fundido (rallado opcional), tocineta, salsas (mostaza, tartara, roja, pina)'),
(2,'Perro con Salchicha Americana',11000,'Pan parmesano, salchicha tipo americano Zenu, tocineta, doble queso fundido (rallado opcional), cebolla cruda, papa fosforito, salsas (mostaza, tartara, roja, pina)'),
(2,'Pepito Mixto con Papa',30000,'Pan brioche de 30 cms, carne lomo de res, pechuga de pollo asada, chorizo ranchero, papa fosforito, triple queso fundido, doble tocineta, cebolla grille, tomate, salsas. Valor del icoport incluido');

INSERT INTO products (category_id, name, base_price, description) VALUES
(3,'Salchipapa',13000,'Papas a la francesa, salchicha de pollo, queso rallado, salsas. Valor del icoport incluido'),
(3,'Choripapa',14000,'Papas a la francesa, chorizo ranchero, queso rallado, salsas. Valor del icoport incluido'),
(3,'Papas Locas',22000,'Papas a la francesa, maiz tierno, pollo desmechado, chorizo ranchero, cubierta de triple queso fundido, salsas. Valor del icoport incluido'),
(3,'Salchicarne Mixto',40000,'Papas a la francesa, carne de lomo de res, pechuga de pollo asada, chorizo ranchero, salchicha de pollo, queso fundido, maiz tierno, cebolla grille, salsas. Valor del icoport incluido');

INSERT INTO extras (name, price)VALUES
('Papas a la Francesa', 4000),
('Queso rallado',3000);

INSERT INTO admins (username, password)
VALUES ('Admin','Hol1234');
