const productsGrid = document.getElementById("productsGrid");
console.log("productsGrid:", productsGrid);

const params = new URLSearchParams(window.location.search);
const categoryId = params.get("id");

console.log("categoryId:", categoryId);

if (!categoryId) {
    console.warn("No category id provided");
} else {
    fetch(`http://localhost:5000/products/category/${categoryId}`)
        .then(res => {
            if (!res.ok) throw new Error("Error fetching products");
            return res.json();
        })
        .then(products => {
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "product-card";

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <strong>$${product.base_price}</strong>
                `;

                productsGrid.appendChild(card);
            });
        })
        .catch(err => console.error(err));
}
