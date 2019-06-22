/* ===================================== 
                Preloader
======================================== */
$(window).on('load', function () { //window object (monitor load event)
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});