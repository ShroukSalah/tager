$(document).ready(function () {
    // ============== ===================== 
    $('.qty-plus').click(function () {
        $(this).next().val(+$(this).next().val() + 1);
    });
    $('.qty-minus ').click(function () {
        if ($(this).prev().val() > 1) $(this).prev().val(+$(this).prev().val() - 1);
    });
});
// ================================================
$(function () {
    'use strict';

    // sticky navbar
    $(window).scroll(function () {
        var sc = $(this).scrollTop();
        if (sc > 50) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }

    })

    // toggle form header
    $(".search-toggler").click(function () {
        $(".header-form").toggle();
    });



    $('#filter-price').on('click', function () {
        change_button_icon('#filter-price');
    });
    $('#filter-new').on('click', function () {
        change_button_icon('#filter-new');
    })
    $('#filter-alpha').on('click', function () {
        change_button_icon('#filter-alpha');
    })

    function change_button_icon(id) {
        var $el = $(id);
        $el.find('i.fas').toggleClass('fa-chevron-down fa-chevron-up');
    }


    // owl carwsol >team section

    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:false,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })




});



// ================= productsSlider =====================
var swiper = new Swiper("#productsSlider", {
    slidesPerView: 2,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {

        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
});

// ======================== product-details==================
var swiper = new Swiper("#productDetailsSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
// ========================= product details slider 2 =====================
var swiper = new Swiper("#product-details-Slider", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper("#product-details-Slider2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});