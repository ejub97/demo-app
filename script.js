document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector(".header .menu-btn");
    const menu = document.querySelector(".header .menu");

    function toggleMenu() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("open");
    }

    function closeMenu(event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menuBtn.classList.remove("active");
            menu.classList.remove("open");
        }
    }

    menuBtn.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);
});
