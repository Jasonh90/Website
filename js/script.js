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

/* ===================================== 
                Portfolio
======================================== */
$(window).on('load', function () {
    // Initialize isotope plugin
    $("#isotope-container").isotope({

    });

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});


/* ===================================== 
                Magnifier
======================================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', //child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true // adds buttons to view all the images
        }
    });
});












