import Swiper from "../node_modules/swiper/swiper-bundle.esm.browser.min.js"

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    speed: 700,
    allowTouchMove: true,
    pagination: {
        el: ".intro-slider_wrapper",
        type: "custom",

        
        bulletClass: "intro-slider_item",
        bulletActiveClass: "active",
        clickable: true,
        dynamicBullets: true,
    },

    on: {
        slideChange: () => {
            let cur = swiper.activeIndex;
            let arr = document.getElementsByClassName("intro-slider_item");

            for (let i = 0; i < arr.length; i++) {
                arr[i].classList.remove("active");
            }
            arr[cur].classList.add("active");
            
       }
    },

    autoplay: {
        delay: 2000,
    },
    
});
