$(function() {

    // Fixed Header
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    CheckScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        console.log(scrollOffset > introH)
        CheckScroll(scrollOffset);
    })

    function CheckScroll(scrollOffset) {
        if (scrollOffset > introH) {
            $("#header").addClass("fixed");
        }
        else {
            $("#header").removeClass("fixed");
        }
    }

    // Nav toggle
    $("#burger").on("click", function() {
        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    })

    // Smooth scrolling
    $("[data-scroll]").on("click", function() {
        
        if ($(this).data("scroll") == "#menu") {
            var offsetTop = $($(this).data("scroll")).offset().top - 45;
        }
        else {
            var offsetTop = $($(this).data("scroll")).offset().top;
        }
        
        

        $("html, body").animate({
            scrollTop: offsetTop,
        })

        $("#nav").removeClass("active");
        $("#burger").removeClass("active");
    })
})