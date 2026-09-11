const sizesList = document.querySelector('[data-sizes="list"]');
const sizesListToOrder = document.querySelector('[data-sizes="to-order"]');

const CLASSES = {
    button: "product__sizes-button",
    buttonActive: "product__sizes-button--active",
};

const sizeAvailable = [38, 40, 41, 42, 44, 45];
const sizeToOrder = [36, 37, 43, 46, 47];

const createButtonElement = (size, activeClass, isAvailable = true) => {
    const buttonElement = document.createElement("button");
    if (isAvailable) {
        buttonElement.title = "выбрать размер";
        buttonElement.setAttribute("aria-label", "выбрать размер");
    }else{
        buttonElement.disabled = true
    }

    if (activeClass) {
        buttonElement.classList.add(activeClass);
    }
    buttonElement.classList.add(CLASSES.button);
    
    buttonElement.textContent = size;
    return buttonElement;
};

const getSizesFromLocalStorage = () => {
    return localStorage.getItem("size");
};

const setSizesFromLocalStorage = (size) => {
    localStorage.setItem("size", size);
};

const renderButtonSize = () => {
    const sizeSave = getSizesFromLocalStorage() || "41";
    sizeAvailable.forEach((size) => {
        if (size === +sizeSave) {
            sizesList.append(createButtonElement(size, CLASSES.buttonActive));
        } else {
            sizesList.append(createButtonElement(size));
        }
    });
    sizeToOrder.forEach((size) =>{
        sizesListToOrder.append(createButtonElement(size,"",false))
    })
};

export const sizes = () => {
    sizesList.addEventListener("click", ({ target }) => {
        if (!target.classList.contains(CLASSES.button)) return;

        const buttons = sizesList.querySelectorAll(`.${CLASSES.button}`);
        buttons.forEach((button) => {
            button.classList.remove(CLASSES.buttonActive);
        });
        target.classList.add(CLASSES.buttonActive);
        setSizesFromLocalStorage(target.textContent);
    });

    addEventListener("DOMContentLoaded", renderButtonSize);
};
