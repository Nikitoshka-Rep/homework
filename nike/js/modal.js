import { CLASSES } from "./constans.js";

const modalContainer = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const modalCloseButton = document.querySelector("[data-modal-close]");
const buttonModalBuy = document.querySelector('[data-modal-button="buy"]');
const buttonModalCart = document.querySelector('[data-modal-button="cart"]');


const openModal = () => {
    modalContainer.classList.add(CLASSES.modalOpen);
    modalWindow.classList.add(CLASSES.windowOpen);
    document.body.classList.add(CLASSES.noScroll);
};

const closeModal = () => {
    modalContainer.classList.remove(CLASSES.modalOpen);
    modalWindow.classList.remove(CLASSES.windowOpen);

    const menuOpen = document.querySelector(CLASSES.menuOpen);
    if (!menuOpen) {
        document.body.classList.remove(CLASSES.noScroll);
    }
};

export const modal = () => {
    modalContainer.addEventListener('click',({target})=>{
      if(target.classList.contains('modal')) closeModal()
    })
    modalCloseButton.addEventListener("click", closeModal);
    buttonModalBuy.addEventListener("click", openModal);
    buttonModalCart.addEventListener('click', openModal)
};
