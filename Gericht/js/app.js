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
console.log(header)
window.addEventListener("scroll", () => {
    header.style.background = "#0C0C0C";
    header.style.paddingTop = "15px";
    header.style.borderBottom = "1px solid rgba(220, 202, 135, 0.2)";
})