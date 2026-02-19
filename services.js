document.addEventListener("DOMContentLoaded", function () {

    // Coffee Shops Page
    if (document.getElementById("shopContainer")) {
        renderShops(coffeeShops);

        document.getElementById("districtFilter").addEventListener("change", function () {
            let filtered = this.value === "all"
                ? coffeeShops
                : coffeeShops.filter(shop => shop.district === this.value);

            renderShops(filtered);
        });

        document.getElementById("searchInput").addEventListener("input", function () {
            let results = coffeeShops.filter(shop =>
                shop.name.toLowerCase().includes(this.value.toLowerCase())
            );
            renderShops(results);
        });
    }

    // Beans
    if (document.getElementById("beanContainer")) {
        renderGeneric(coffeeBeans, "beanContainer");
    }

    // Brewing
    if (document.getElementById("brewContainer")) {
        renderGeneric(brewingGuides, "brewContainer");
    }

    // Types
    if (document.getElementById("typeContainer")) {
        renderGeneric(coffeeTypes, "typeContainer");
    }
});

function renderShops(shops) {
    shopContainer.innerHTML = "";

    if (shops.length === 0) {
        shopContainer.innerHTML = "<p>No coffee shops found.</p>";
        return;
    }

    shops.forEach(shop => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${shop.image}" alt="${shop.name}">
            <h3>${shop.name}</h3>
            <p>${shop.description}</p>
            <p><strong>District:</strong> ${shop.district}</p>
            <a href="${shop.website}" class="visit-btn" target="_blank" rel="noopener noreferrer" aria-label="Visit website of ${shop.name}">Visit Website</a>
        `;

        shopContainer.appendChild(card);
    });
}


function renderGeneric(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    data.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <h3>${item.name || item.method}</h3>
                <p>${item.description || item.flavor}</p>
            </div>
        `;
    });
}
