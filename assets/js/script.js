$(function(){
    'use strict';

    // sticky navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }

    })

    // toggle form header
    $(".search-toggler").click(function(){
        $(".header-form").toggle();
    });



    $('#filter-price').on('click', function() {
        change_button_icon('#filter-price');
    });
    $('#filter-new').on('click', function() {
        change_button_icon('#filter-new');
    })
    $('#filter-alpha').on('click', function() {
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