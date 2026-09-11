import { CLASSES } from "./constans.js";

const burgerElement = document.querySelector(".burger");
const menuElement = document.querySelector(".header__menu");

const handleOutsideClick = (e) => {
    const clickInsideMenu = menuElement.contains(e.target);
    const clickOnBurger = burgerElement.contains(e.target);

    if (!clickInsideMenu && !clickOnBurger) {
        closeMenu();
    }
};

const closeMenu = () => {
    if (!menuElement.classList.contains(CLASSES.menuOpen)) return;
    burgerElement.classList.remove(CLASSES.burgerOpen);
    menuElement.classList.remove(CLASSES.menuOpen);

    const modalOpen = document.querySelector(CLASSES.modalOpen);
    if (!modalOpen) {
        document.body.classList.remove(CLASSES.noScroll);
    }

    document.removeEventListener("click", handleOutsideClick);
};

const openMenu = () => {
    if (menuElement.classList.contains(CLASSES.menuOpen)) return;

    burgerElement.classList.add(CLASSES.burgerOpen);
    menuElement.classList.add(CLASSES.menuOpen);
    document.body.classList.add(CLASSES.noScroll);
    document.addEventListener("click", handleOutsideClick);
};

export const burgerMenu = () => {
    burgerElement.addEventListener("click", () => {
        if (menuElement.classList.contains(CLASSES.menuOpen)) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuElement.addEventListener("click", ({ target }) => {
        if (target.closest(".menu__link")) closeMenu();
    });
};
