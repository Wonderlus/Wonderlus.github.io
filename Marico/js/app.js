$(function() {

    let headerHeight = $("#headerFixed").innerHeight() - 20;
    let scrollOffset = $(window).scrollTop();

    CheckScroll(headerHeight, scrollOffset);


    // Toggle Burger
    $("#navToggle").on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    // Fixed Header
    $(window).on("scroll", function() {

        let scrollOffset = $(this).scrollTop();
        CheckScroll(headerHeight, scrollOffset);


    });

    function CheckScroll(headerHeight, scrollOffset) {
        
        if (headerHeight < scrollOffset) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed");
        }
    }


    // Smooth scroll
    $(".logoHome").on("click", function() {

        $("html, body").animate({
            scrollTop: 0,
        });

    });
})