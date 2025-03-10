 async function populateMenu() {
    try {
        const response = await fetch("http://193.108.58.129/api/menu?populate=*");
        const data = await response.json();

        if (data && data.data) {
            const menu = data.data;
            document.getElementById("first").textContent = menu.first;
            document.getElementById("second").textContent = menu.second;
            document.getElementById("third").textContent = menu.third;
            document.getElementById("fourh").textContent = menu.fourth;
        }
    } catch (error) {
        console.error("Error fetching menu data:", error);
    }
}