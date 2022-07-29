$(document).ready(function () {
      // ===================== delete item from cart ====================
      $(".delete").on('click', function () {
        $(this).parent().closest(".order").remove();


    });
    // ============== ===================== 
    $('.qty-plus').click(function () {
        $(this).next().val(+$(this).next().val() + 1);
    });
    $('.qty-minus ').click(function () {
        if ($(this).prev().val() > 1) $(this).prev().val(+$(this).prev().val() - 1);
    });
    // ================================= rate box ====================
    $("#rateBox").rate({
        length: 5,
        value: 3.5,
        readonly: false,
        size: '48px',
        selectClass: 'fxss_rate_select',
        incompleteClass: 'fxss_rate_no_all_select',
        customClass: 'custom_class',
        callback: function (object) {
            console.log(object)
        }
    });
    //  ============================ list-reviews ====================

    //blocksit define
    // $(window).load(function () {
    //     $('#list-reviews').BlocksIt({
    //         numOfCol: 2,
    //         offsetX: 8,
    //         offsetY: 8
    //     });
    // });

    //window resize
    // var currentWidth = 1100;
    // $(window).resize(function () {
    var winWidth = $(window).width();
    // var conWidth;
    if (winWidth < 660) {
        // conWidth = 440;
        // col = 2
        $('#list-reviews').BlocksIt({
            numOfCol: 1,
            offsetX: 8,
            offsetY: 8
        });
    } else if (winWidth < 880) {
        // conWidth = 660;
        // col = 2
        $('#list-reviews').BlocksIt({
            numOfCol: 2,
            offsetX: 8,
            offsetY: 8
        });
    } else {
        // conWidth = 1100;
        // col = 4;
        $('#list-reviews').BlocksIt({
            numOfCol: 2,
            offsetX: 8,
            offsetY: 8
        });
    }

    // if (conWidth != currentWidth) {
    //     currentWidth = conWidth;
    //     $('#list-reviews').width(conWidth);
    //     $('#list-reviews').BlocksIt({
    //         numOfCol: col,
    //         offsetX: 8,
    //         offsetY: 8
    //     });
    // }
    // });
    //  ============================ grid-reviews ====================
    //blocksit define
    // $(window).load(function () {
    //     $('#grid-reviews').BlocksIt({
    //         numOfCol: 4,
    //         offsetX: 8,
    //         offsetY: 8
    //     });
    // });

    //window resize
    // var currentWidth = 1100;
    // $(window).resize(function () {
    var winWidth = $(window).width();

    if (winWidth < 660) {
        $('#grid-reviews').BlocksIt({
            numOfCol: 2,
            offsetX: 8,
            offsetY: 8
        });
    } else if (winWidth < 880) {
        $('#grid-reviews').BlocksIt({
            numOfCol: 2,
            offsetX: 8,
            offsetY: 8
        });
    } else if (winWidth < 1100) {
        $('#grid-reviews').BlocksIt({
            numOfCol: 3,
            offsetX: 8,
            offsetY: 8
        });
    } else {
        $('#grid-reviews').BlocksIt({
            numOfCol: 4,
            offsetX: 8,
            offsetY: 8
        });
    }

    // if (conWidth != currentWidth) {
    //     currentWidth = conWidth;
    //     $('#grid-reviews').width(conWidth);
    //     $('#grid-reviews').BlocksIt({
    //         numOfCol: col,
    //         offsetX: 8,
    //         offsetY: 8
    //     });
    // }
    // });
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
// ======================== categoriesSlider2 ================
var swiper = new Swiper("#categoriesSlider2", {
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
// ======================== categoriesSlider3 ================
var swiper = new Swiper("#categoriesSlider3", {
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


// =================================== timer =========================
let hourVal = document.querySelector(".timer .count .hour"),
    minuteVal = document.querySelector(".timer .count .minute"),
    secondVal = document.querySelector(".timer .count .second");

var myTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 5400; //Initially set to 1 hour

    function myClock() {
        --c
        var seconds = c % 60; // Seconds that cannot be written in minutes
        var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
        var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
        var hours = (secondsInMinutes - minutes) / 60;
        // Now in hours, minutes and seconds, you have the time you need.
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        if (secondsInMinutes < 10) {
            secondsInMinutes = `0${secondsInMinutes}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (hours < 10) {
            hours = `0${hours}`;
        }
        hourVal.innerHTML = hours;
        minuteVal.innerHTML = minutes;
        secondVal.innerHTML = seconds;
        if (c == 0) {
            clearInterval(myTimer);
        }
    }
}
clock();
// =========================== FlipDown Timer  ===========================
document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)

        // Start the countdown
        .start()

        // Do something when the countdown ends
        .ifEnded(() => {
            console.log('The countdown has ended!');
        });

    // Show version number
    // var ver = document.getElementById('ver');
    // ver.innerHTML = flipdown.version;
});