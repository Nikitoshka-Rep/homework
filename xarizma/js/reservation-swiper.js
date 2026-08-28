export const reservationSwiper = new Swiper(".reservation__swiper", {
    loop: false,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: true,
    navigation: {
        nextEl: `[data-button-reservation-slide-next]`,
        prevEl: `[data-button-reservation-slide-prev]`,
        disabledClass: "navigation-button--disabled",
    },
    spaceBetween: 88,   // значение по умолчанию
    initialSlide: 2,
    breakpoints: {
        0: {
            spaceBetween: 40,   // на мобилке
            initialSlide: 0,
        },
        576: {
            spaceBetween: 60,
            initialSlide: 2,
        },
        768: {
            spaceBetween: 70,
        },
        1024: {
            spaceBetween: 88,   // на десктопе
        },
    },
});


// СЧЁТЧИК 
function initCounter(slider) {
    const counterContainer = document.querySelector(
        `[data-reservation-navigation-counter]`,
    );

    if (!counterContainer) return;

    const currentEl = counterContainer.querySelector(".navigation__current");
    const totalEl = counterContainer.querySelector(".navigation__total");

    if (currentEl && totalEl) {
        totalEl.textContent = 9;

        function updateCounter() {
            currentEl.textContent = slider.activeIndex + 1;
        }

        updateCounter();
        slider.on("slideChange", updateCounter);
    }
}
initCounter(reservationSwiper);
