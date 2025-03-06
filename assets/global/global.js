document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("http://193.108.58.129/api/global?populate=*");
        const data = await response.json();

        if (data && data.data) {
            const brand = data.data;
            document.getElementById("brand-url").href = brand.url;
            document.getElementById("brand-name").href = brand.url;
            document.getElementById("brand-name").textContent = brand.name;

            if (brand.logo) {
                document.getElementById("brand-logo").src = "http://193.108.58.129" + brand.logo.url;
            }

            document.getElementById("copyright").textContent = `© Copyright 2025 ${brand.name} - All Rights Reserved`;
        }
    } catch (error) {
        console.error("Error fetching brand data:", error);
    }
});