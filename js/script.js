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

/* ===================================== 
                Testimonial
======================================== */
$(function () { //short form of above.
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700, //milliseconds
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ===================================== 
                Services
======================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/* ===================================== 
                Stats
======================================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* ===================================== 
                Google Map
======================================== */
$(window).on('load', function () {

    // Map Variables
    var addressString = 'The Greater New York Area, NYC';
    var myLatlng = {
        lat: 40.757026,
        lng: -73.986123
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/* ===================================== 
                Navigation
======================================== */

/* Show & Hide White Navigation */
$(function () {
    
    // show/hide nav on page load
    showHideNav();
    
    $(window).scroll(function() {
        
        // show/hide nav on window's scroll
        showHideNav();
        
    });
    
    function showHideNav() {
        
        if( $(window).scrollTop() > 50 ) {
            
            // Show White Nav
            $("nav").addClass("white-nav-top");
            
            // Show Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        } else {
            
            // Hide White Nav
            $("nav").removeClass("white-nav-top");
            
            // Show Normal Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
        }
    }
    
});






















