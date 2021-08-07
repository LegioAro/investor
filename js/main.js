$(document).ready(function () {

    if ($(window).width() < 500) {
        $('.result__description').slick({
            slidesToShow: 1,
            arrows: false,
            autoplay: true,
            dots: true,
        });
    }

    $(window).resize(function () {
        if ($(window).width() < 500) {
            $('.result__description').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
            });
        } else {
            $('.result__description').filter('.slick-initialized').slick('unslick');
        }
    })

});