document.addEventListener("DOMContentLoaded", () => {
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    openPopup.addEventListener("click", () => {
        popup.style.display = "block";
        overlay.style.display = "block";
    });
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
    overlay.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});