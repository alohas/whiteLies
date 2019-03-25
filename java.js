function showHide() {
    var navList = document.getElementById("nav-lists");

    if (navList.className == 'menus') {
        navList.classList.add("menus-show");
    } else {
        navList.classList.remove("menus-show");
    }

}
