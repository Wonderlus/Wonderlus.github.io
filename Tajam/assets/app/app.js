$(function() {
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("nav");
    console.log(introH);
    scrollCheck(scrollPos, introH)

    // Fixed Header
    $(window).on("scroll resize", function() {

        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();

        scrollCheck(scrollPos, introH);

    });

    function scrollCheck(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else { 
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700);
    });


    // Nav toggle
    $("#navToggle").on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });


    // Slider
    let slider = $("#testimonialsSlider");
    
    
    slider.slick({
        arrows: true,
        prevArrow: ".testimonials__arrow__left",
        nextArrow: ".testimonials__arrow__right",
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: "#sliderText"
      });

    $("#sliderText").slick({
        
        infinite: true,
        asNavFor: slider,
        arrows: false,
        slidesToShow: 1,
        sliderToScroll: 1,
        draggable: false,
    });

    $("#sliderIntro").slick({
        sliderToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        dots: true,
        appendDots: $(".intro__dots .container")
    });
})