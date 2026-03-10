# Punto Familiar 🍔

Punto Familiar es una aplicación web desarrollada para un restaurante de comidas rápidas.

El objetivo del proyecto es ofrecer un menú digital atractivo y accesible, permitiendo a los clientes consultar fácilmente los productos disponibles, conocer los precios y explorar las opciones del restaurante desde cualquier dispositivo.

## Propósito del proyecto

El propósito de **Punto Familiar** es desarrollar una solución web para un restaurante de comidas rápidas que permita mostrar su menú de forma digital mediante una interfaz atractiva y fácil de usar.

El sistema busca mejorar la presencia digital del restaurante, permitiendo a los clientes consultar los productos disponibles, sus precios y la información del menú desde cualquier dispositivo.

## Tecnologías Utilizadas

El proyecto **Punto Familiar** fue desarrollado utilizando las siguientes tecnologías:

- **TypeScript** – lenguaje utilizado para el desarrollo del backend con mayor seguridad en el manejo de tipos.
- **Node.js** – entorno de ejecución para el backend de la aplicación.
- **Prisma** – ORM utilizado para gestionar la comunicación entre el backend y la base de datos.
- **PostgreSQL** – sistema de base de datos utilizado para almacenar la información del menú y productos.
- **Docker** – contenedorización del proyecto para facilitar el despliegue y la configuración del entorno.

## Estado del Proyecto 🚧

Este proyecto actualmente se encuentra en desarrollo. Se están realizando mejoras en el backend y frontend.

# Pasos para ejecutar el proyecto

Sigue estos pasos para ejecutar **Punto Familiar** en tu entorno local.


## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/NicolasMuskusTarazona/PuntoFamiliar
cd PuntoFamiliar
```

## 2️⃣ Levantar los contenedores Docker

```bash
cd .devcontainer
docker compose up -d
cd ..
```

## 3️⃣ Entrar al contenedor de la aplicación

```bash
docker exec -it devcontainer-app-1 bash
```

## 4️⃣ Limpiar dependencias

```bash
rm -rf node_modules package-lock.json
```

## 5️⃣ Instalar dependencias

```bash
npm install
```

## 6️⃣ Configurar variables de entorno
Crea un archivo **.env** en la raíz del proyecto con el siguiente contenido: ( Visual Studio Code ).

```bash
DB_HOST=db
DB_USER=root
DB_PASS=root
DB_NAME=puntofamiliar
DB_PORT=3306
JWT_SECRET=supersecreto123
DATABASE_URL="mysql://root:root@db:3306/puntofamiliar"
```


## 7️⃣ Crear la base de datos con Prisma

```bash
npx prisma migrate reset
```

Cuando el sistema lo solicite, escribe:

```bash
y
```

## 8️⃣ Ejecutar el servidor

```bash
npm run dev
```

## Resultado esperado
Si todo funciona correctamente, deberías ver algo similar a:

```bash
Conectado a MySQL
Admin already exists
Server running on port 5000
```

# Flujo completo resumido

```bash
git clone https://github.com/NicolasMuskusTarazona/PuntoFamiliar
cd PuntoFamiliar
cd .devcontainer
docker compose up -d
cd ..
docker exec -it devcontainer-app-1 bash
rm -rf node_modules package-lock.json
npm install
npx prisma migrate reset
npm run dev
```