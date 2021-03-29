// window.alert("Don't mind some of the images used here. Just a demo.")
const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },

    960: {
        items: 3
    }
}
$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    // Click event on toggle Menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');

    });

    //Owl-Carousel for blog-post home page
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //Click to scroll top. Landing page
    $('.move-up span').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000)
        })
        //Animation on scroll instance
    AOS.init();


});