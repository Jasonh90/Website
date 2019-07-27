/* ===================================== 
                Preloader
======================================== */
$(window).on('load', function () { //window object (monitor load event)
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/* ===================================== 
                Team
======================================== */
$(function () { //short form of above.
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700, //milliseconds
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ===================================== 
                Progress Bars
======================================== */
$(function () {

    $("#progress-elements").waypoint(function () {
        $('.progress-bar').each(function () {
            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            }, 1000);
        });
        this.destroy(); /* Only Appear once */
    }, {
        offset: 'bottom-in-view'
    });
});












