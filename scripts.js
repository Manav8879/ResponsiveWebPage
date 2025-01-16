function toggleMenu() {
    var leftMenu = document.getElementById("leftMenu");
    var menuItems = leftMenu.getElementsByTagName("li");

    if (leftMenu.style.width === "250px" || leftMenu.style.width === "") {
        leftMenu.style.width = "0";  // Menu disappears
        for (let item of menuItems) {
            item.style.visibility = "hidden";  // Hide menu items
        }
    } else {
        leftMenu.style.width = "250px";  // Menu appears
        for (let item of menuItems) {
            item.style.visibility = "visible";  // Show menu items
        }
    }
}
