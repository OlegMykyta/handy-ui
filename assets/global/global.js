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

function waitForImagesToLoad(container) {
    const images = container.querySelectorAll('img');

    const imagePromises = Array.from(images).map(img => {
        return new Promise((resolve, reject) => {
            if (img.complete) {
                resolve();
            } else {
                img.addEventListener('load', resolve);
            }
        });
    });

    return Promise.all(imagePromises);
}

async function waitLoading() {

    const container = document.getElementById("main-img");
    await waitForImagesToLoad(container);

    waitForImagesToLoad(container).then(() => {
        const spinner = document.getElementById('spinner');
        const sections = document.querySelectorAll('section');
        spinner.style.display = 'none';
        sections.forEach((section) => {
            section.style.display = 'block';
        });
    }).catch((error) => {
        console.error('An error occurred while loading images:', error);
    });
}