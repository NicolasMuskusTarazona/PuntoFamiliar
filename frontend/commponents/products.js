const productsGrid = document.getElementById("productsGrid");

const params = new URLSearchParams(window.location.search);
const categoryId = params.get("id");

const renderProducts = (products) => {
    productsGrid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>${product.description}</p>
            <strong>$${product.base_price}</strong>
        `;

        productsGrid.appendChild(card);
    });
};

const fetchAllProducts = () => {
    fetch("http://localhost:5000/products")
        .then(res => {
            if (!res.ok) throw new Error("Error fetching all products");
            return res.json();
        })
        .then(renderProducts)
        .catch(err => console.error(err));
};

if (categoryId) {
    fetch(`http://localhost:5000/products/category/${categoryId}`)
        .then(res => {
            if (!res.ok) throw new Error("Error fetching category products");
            return res.json();
        })
        .then(products => {
            if (products.length === 0) {
                console.warn("Categoria inexistente, mostrando todos");
                fetchAllProducts();
            } else {
                renderProducts(products);
            }
        })
        .catch(err => {
            console.error("Category fetch failed:", err);
            fetchAllProducts();
        });
} else {
    fetchAllProducts();
}
