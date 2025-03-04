document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("https://strapi-production-9858.up.railway.app/api/global?populate=*");
        const data = await response.json();

        if (data && data.data) {
            const brand = data.data;
            document.getElementById("brand-url").href = brand.url;
            document.getElementById("brand-name").href = brand.url;
            document.getElementById("brand-name").textContent = brand.name;

            if (brand.logo) {
                document.getElementById("brand-logo").src = "https://strapi-production-9858.up.railway.app" + brand.logo.url;
            }

            document.getElementById("copyright").textContent = `© Copyright 2025 ${brand.name} - All Rights Reserved`;
        }
    } catch (error) {
        console.error("Error fetching brand data:", error);
    }
});