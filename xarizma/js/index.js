import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { swiperMain, swiperThumb,swiperMainMobile,swiperThumbMobile} from "./swiper.js";


try {
    new BurgerMenu(
        {
            BURGER: "burger",
            BURGER_OPEN: "burger--open",
            HEADER_MENU: "header__menu",
            HEADER_MENU_OPEN: "header__menu--open",
            lABEL: {
                OPEN: "Открыть меню",
                CLOSE: "Закрыть меню",
            },
            PAGE_BODY: "page__body",
            PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
            MENU_LINK: "menu__link",
            BREAKPOINT: 992,
            MAIN: "main",
            OVERLAY: "overlay",
        },
        // headerFixed,
    );

    

    new Modal({
        PAGE_BODY: "page__body",
        PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    });

} catch (error) {
    console.error(error);
}
