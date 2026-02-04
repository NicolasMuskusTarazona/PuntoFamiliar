const menuGrid = document.getElementById("menuGrid");

fetch("http://192.168.1.5:5000/categories")
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

            menuGrid.appendChild(card);
        });

        // Card extra
        const explore = document.createElement("div");
        explore.className = "ExploreMenu";
        explore.innerHTML = `
            <span>EXPLORE</span>
            <button>FULL MENU</button>
        `;
        menuGrid.appendChild(explore);
    })
    .catch(error => {
        console.error("Error loading menu:", error);
    });
