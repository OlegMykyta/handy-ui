async function preload() {
    try {
        const response = await fetch("http://193.108.58.129/api/global?populate=*");
        const data = await response.json();

        if (data && data.data) {
            const brand = data.data;
            const url = "http://193.108.58.129" + brand.logo.url;
            const imgResponse = await fetch(url);
            const blob = await imgResponse.blob();

            const reader = new FileReader();
            reader.onloadend = function () {
                localStorage.setItem("brand-logo", reader.result);
            };
            reader.readAsDataURL(blob);
            localStorage.setItem("brand-name", brand.name);
            localStorage.setItem("brand-url", brand.url);
        }
    } catch (error) {
        console.error("Error fetching brand data:", error);
    }
}

function populate(){
    const logo = localStorage.getItem("brand-logo");
    const name = localStorage.getItem("brand-name");
    const url = localStorage.getItem("brand-url");

    document.getElementById("brand-url").href = url;
    document.getElementById("brand-name").href = url;
    document.getElementById("brand-name").textContent = name;

    if (logo) {
        document.getElementById("brand-logo").src = logo;
    }
    document.getElementById("copyright").textContent = `© Copyright 2025 ${name} - All Rights Reserved`;
}