document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("http://193.108.58.129:1337/api/social");
        const data = await response.json();

        if (data && data.data) {
            const social = data.data;
            document.getElementById("header-telegram").href = "tg://resolve?domain=" + social.telegram;
            document.getElementById("header-wa").href = "https://wa.me/" + social.whatsapp;
            document.getElementById("header-viber").href = "viber://chat?number=" + social.viber;

            document.querySelectorAll(".footer-wa").forEach(element => {
                element.href = "https://wa.me/" + social.whatsapp;
            });
            document.querySelectorAll(".footer-telegram").forEach(element => {
                element.href = "tg://resolve?domain=" + social.telegram;
            });
            document.querySelectorAll(".footer-viber").forEach(element => {
                element.href = "viber://chat?number=" + social.viber;
            });
            document.querySelectorAll(".footer-email").forEach(element => {
                element.href = "mailto:" + social.email;
            });
            document.querySelectorAll(".footer-phone").forEach(element => {
                element.href = "tel:" + social.phone;
            });
        }
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
});