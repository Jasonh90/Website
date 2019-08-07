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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            /* breakpoint from 0 up */
            0: {
                items: 1
            },
            /* breakpoint from 480 up*/
            480: {
                items: 2
            }

        }
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
            }, 2222);
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
    
    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});

/* ===================================== 
                Navigation
======================================== */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show White Nav
            $("nav").addClass("white-nav-top");

            // Show Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {

            // Hide White Nav
            $("nav").removeClass("white-nav-top");

            // Show Normal Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }

});


/* Smooth Scrolling */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo");

    });
});

/* ===================================== 
                Animation
======================================== */

/* animate on scroll */
$(function () {
    new WOW().init();
});

$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    //    $("#home-heading h1 span").addClass("animated fadeInRight");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});


/* ===================================== 
                Mobile Menu
======================================== */
$(function () {
    
    // Show mobile nav
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
        
    });
    
    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
        
    });
});

/* ===================================== 
                Contact
======================================== */
function resetForm() {
  document.getElementById("contactForm").reset();
}

var submitted = false; 

function submitForm() {
    // Clear Form
    document.getElementById("contactForm").reset();
    
    // Display Message
    if (submitted) {
        alert('Thank you so much for reaching out! I will reply shortly. If you would like to send another message, you can do so below. Have a great day!');
    }
}




