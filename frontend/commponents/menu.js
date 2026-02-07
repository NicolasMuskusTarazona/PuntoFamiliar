const menuGrid = document.getElementById("menuGrid");

fetch("http://localhost:5000/categories")
    .then(res => {
        if (!res.ok) throw new Error("Error fetching categories");
        return res.json();
    })
    .then(categories => {
        categories.forEach(category => {
            const card = document.createElement("div");
            card.className = "menu-card";

            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
                <span>${category.name}</span>
            `;

            card.addEventListener("click", () => {
                window.location.href = `/menu.html?id=${category.id}`;
            });

            menuGrid.appendChild(card);
        });

        // ===== EXPLORE MENU =====
        const explore = document.createElement("div");
        explore.className = "ExploreMenu";
        explore.innerHTML = `
            <span>EXPLORE</span>
            <button>FULL MENU</button>
        `;

        explore.addEventListener("click", () => {
            window.location.href = "/menu.html";
        });

        menuGrid.appendChild(explore);
    })
    .catch(error => {
        console.error("Error loading menu:", error);
    });
