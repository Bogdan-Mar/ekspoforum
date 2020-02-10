$(document).ready(function () {
    //preloader
    $('body').addClass('loaded');

    //animation
    var wow = new WOW();
    wow.init();

    //fixed nav bar
    var yourNavigation = $(".top_menu");
    var stickyDiv      = "sticky";
    var yourHeader     = $(".top_menu").height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > yourHeader) {
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }
    });

    $('.burger').on('click', function() {
        if( $("body").hasClass("mmenu_active") ) {
            $("body").removeClass("mmenu_active") ;
        } else {
            $("body").addClass("mmenu_active") ;
        }             
    });


   

});

