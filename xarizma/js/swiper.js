export const swiperThumbMobile = new Swiper(".halls__thumb-slider-mobile", {
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: true,
    freeModeMomentum: true,
    freeModeSticky: true,
    threshold: 10,
    watchSlidesProgress: true,
});

export const swiperMainMobile = new Swiper(".halls__main-slider-mobile", {
    spaceBetween: 0,
    freeMode: false,
    slidesPerView: 1,
    loop: false,
    navigation: {
        nextEl: `[data-button-halls-slide-next="mobile"]`,
        prevEl: `[data-button-halls-slide-prev="mobile"]`,
        disabledClass: "navigation-button--disabled",
    },
    thumbs: {
        swiper: swiperThumbMobile,
    },

    pagination: {
        el: ".halls__tabs-mobile",
        clickable: true,
        renderBullet: function (index, className) {
            if (index === 3) {
                return `<span class="${className}" style="display: none;"></span>`;
            }
            // Всегда index + 1, но для индекса 4 даёт 5
            const hallNumber = index + 1;
            return `<button class="${className} halls__tabs-tab-mobile" aria-lable="показать ${hallNumber} зал">hall№ ${hallNumber}</button>`;
        },
    },
});

export const swiperThumb = new Swiper(".halls__thumb-slider", {
    slidesPerView: 5,
    spaceBetween: 0,
    freeMode: true,
    freeModeMomentum: true,
    watchSlidesProgress: true,
});

export const swiperMain = new Swiper(".halls__main-slider", {
    spaceBetween: 0,
    freeMode: false,
    slidesPerView: 1,
    loop: false,
    navigation: {
        nextEl: `[data-button-halls-slide-next="desktop"]`,
        prevEl: `[data-button-halls-slide-prev="desktop"]`,
        disabledClass: "navigation-button--disabled",
    },
    thumbs: {
        swiper: swiperThumb,
    },

    pagination: {
        el: ".halls__tabs",
        clickable: true,
        renderBullet: function (index, className) {
            if (index === 3) {
                return `<span class="${className}" style="display: none;"></span>`;
            }
            // Всегда index + 1, но для индекса 4 даёт 5
            const hallNumber = index + 1;
            return `<button class="${className} halls__tabs-tab" aria-lable="показать ${hallNumber} зал">hall№ ${hallNumber}</button>`;
        },
    },
});

function initCounter(slider, scope) {
    const counterContainer = document.querySelector(
        `[data-navigation-counter="${scope}"]`,
    );

    if (!counterContainer) return;

    const currentEl = counterContainer.querySelector(".navigation__current");
    const totalEl = counterContainer.querySelector(".navigation__total");

    if (currentEl && totalEl) {
        totalEl.textContent = 17;

        function updateCounter() {
            currentEl.textContent = slider.activeIndex + 1;
        }

        updateCounter();
        slider.on("slideChange", updateCounter);
    }
}

initCounter(swiperMain, "desktop");
initCounter(swiperMainMobile, "mobile");
