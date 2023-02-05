// Inititalize animations on scroll
AOS.init({
    once: true
});


// Slider pagination
let sliderItems = document.getElementsByClassName("intro-slider_item");


for (let i = 0; i < sliderItems.length; i++) {
    let elem = sliderItems[i];
    elem.addEventListener("click", () => {
        for (let j = 0; j < sliderItems.length; j++) {
            sliderItems[j].classList.remove("active");
        }

        elem.classList.add("active");
    });
}


let pages = document.getElementById("pages");
let navPages = document.getElementsByClassName("nav-pages")[0];

pages.addEventListener("click", (event) => {

    if (pages.hasAttribute("open")) {
        pages.removeAttribute("open");
        pages.setAttribute("close", "");
        pages.addEventListener("animationend", () => {
            pages.removeAttribute("close");
        });
    } else {
        pages.setAttribute("open", "");
    }
    
    
})



window.addEventListener("click", (event) => {
    const isClosest = event.target.closest("#pages");
    if (!isClosest && pages.hasAttribute("open")) {
        pages.removeAttribute("open");
        pages.setAttribute("close", "");
        pages.addEventListener("animationend", () => {
            pages.removeAttribute("close");
        });
    }
}) 


let header = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", () => {
    header.style.background = "#0C0C0C";
    header.style.paddingTop = "15px";
    header.style.borderBottom = "1px solid rgba(220, 202, 135, 0.2)";
})

let entry = document.querySelectorAll(".header-sign div");

let loginModal = document.querySelector(".modal-login");
let registrationModal = document.querySelector(".modal-registration");
let modal = document.querySelector("#modal");



for (elem of entry) {
    console.log(elem);
    elem.addEventListener("click", (event) => {
        if (event.target == entry[0]) {
            loginModal.style.display = "flex";
            registrationModal.style.display = "none";
            modal.showModal();
        } else {
            registrationModal.style.display = "flex";
            loginModal.style.display = "none";
            modal.showModal();
        }
        
    })
}

modal.addEventListener("click", (event) => {
    if (!event.target.closest(".modal-login") && !event.target.closest(".modal-registration")) {

        modal.setAttribute("closing", "");
        modal.addEventListener("animationend", () => {
            modal.removeAttribute("closing");
        })
        
        modal.close();
    }
})

