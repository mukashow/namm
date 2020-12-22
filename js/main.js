$(function() {

    $('.intro__slider-wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: "<img src='../img/popular/back.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../img/popular/next.svg' class='next' alt='2'>",
        })

    $('.str__slider').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,

            responsive: [
                {
                  breakpoint: 426,
                  settings:"unslick"
                }]
        })


    $('.popular__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<img src='../img/popular/back.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../img/popular/next.svg' class='next' alt='2'>",

            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]

        })


    $('.news__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<img src='../img/popular/back.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../img/popular/next.svg' class='next' alt='2'>",

            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                  }
                }
            ]
        })

    $('.reviews__slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: "<img src='../img/popular/back.svg' class='prev' alt='1'>",
            nextArrow: "<img src='../img/popular/next.svg' class='next' alt='2'>",

            responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
                }]
        })

    $(".insta__grid-item").magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });


    $(".intro__img").magnificPopup({
        type : 'image',
        gallery : {
            enabled : false
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    $(".certification__item").magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });


        $(".popular__shopbg").click(function() {
      var $price = $(".sidebar__num1");
      $price.val(parseInt($price.val()) + 1);
      $price.change();
    });


        $(".popular__shop-stat").click(function() {
      var $price = $(".sidebar__num2");
      $price.val(parseInt($price.val()) + 1);
      $price.change();
    });


})

        var clicks = 0;
            function onClick() {
            clicks += 1;
            document.getElementById("shop__clicks").innerHTML = clicks;
        };


    (function () {
        const burgerItem = document.querySelector('.popular__shopbg');
        const menu = document.querySelector('.sidebar__subbtn-shop');
        const num = document.querySelector('.sidebar__num1');
        burgerItem.addEventListener("click", function() {
            menu.classList.add('sidebar__subbtn-shop-active');
            num.classList.add('sidebar__num1-active');
      });

    }());


    (function () {
    const questionsWrite = document.querySelector('.questions__write');
    const form = document.querySelector('.questions__form-wrapper');
    const formClose = document.querySelector('.questions__close');
    const black = document.querySelector('.questions__black');
    questionsWrite.addEventListener('click', () => {
        form.classList.add('questions__form-wrapper-active');
        black.classList.add('questions__black-active');
    });
    formClose.addEventListener('click', () =>{
        form.classList.remove('questions__form-wrapper-active');
        black.classList.remove('questions__black-active');
    });

    black.addEventListener('click', () =>{
        form.classList.remove('questions__form-wrapper-active');
        black.classList.remove('questions__black-active');
    });

    const popularSticker = document.querySelector('.popular__sticker');
    const popularDiscount = document.querySelector('.popular__discount');
    const popularDiscountClose = document.querySelector('.popular__discount-close');

    popularSticker.addEventListener('click', () => {
        popularDiscount.classList.add('popular__discount-active');
    });

    popularDiscountClose.addEventListener('click', () => {
        popularDiscount.classList.remove('popular__discount-active');
    });

        function addHandlers(count) {
          var minus = count.querySelector(".popular__minus");
          var number = count.querySelector(".popular__count-num");
          var plus = count.querySelector(".popular__plus");
          plus.addEventListener("click", function() {
            number.innerText++;
          });
          minus.addEventListener("click", function() {
            number.innerText--;
          });
        }

        var counts = document.querySelectorAll(".popular__counter");
        counts.forEach(addHandlers);

        const toTop = document.querySelector('.to__top');
    window.onscroll = () => {
        if (window.pageYOffset > 800) {
            toTop.classList.add('to__top-active')
        } else{
            toTop.classList.remove('to__top-active')
        }
    };

        const anchors = document.querySelectorAll('a[href*="#"]')

        for (let anchor of anchors) {
            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                const blockID = anchor.getAttribute('href')
                document.querySelector('' + blockID).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            })
        }


        $('.sidebar__button-menu').on('click', function() {
            $('.menu__catalog').toggleClass('menu__catalog-active');
            $('.wrapper').toggleClass('wrapper__active');
            $('.sidebar').toggleClass('sidebar__active');
            $('.sidebar__button-menu').toggleClass('sidebar__button-menu-active');
        })




        $('.sidebar__button-search').on('click', function() {
            $('.menu__search').toggleClass('menu__search-active');
            $('.wrapper').toggleClass('wrapper__active');
            $('.sidebar').toggleClass('sidebar__active');
            $('.sidebar__button-search').toggleClass('sidebar__button-search-active');
        })


        $('.sidebar__button-shop').on('click', function() {
            $('.menu__shop').toggleClass('menu__shop-active');
            $('.wrapper').toggleClass('wrapper__active');
            $('.sidebar').toggleClass('sidebar__active');
            $('.sidebar__button-shop').toggleClass('sidebar__button-shop-active');
        })



        $('.sidebar__button-sign-in').on('click', function() {
            $('.menu__sign-in').toggleClass('menu__sign-in-active');
            $('.wrapper').toggleClass('wrapper__active');
            $('.sidebar').toggleClass('sidebar__active');
            $('.sidebar__button-sign-in').toggleClass('sidebar__button-sign-in-active');
        })




        $('.sidebar__button-menu').on('click', function() {
            $('.sidebar__subbtn').toggleClass('sidebar__subbtn-active');
        })

        $('.sidebar__button-search').on('click', function() {
            $('.sidebar__subbtn').toggleClass('sidebar__subbtn-active');
        })

        $('.sidebar__button-shop').on('click', function() {
            $('.sidebar__subbtn').toggleClass('sidebar__subbtn-active');
        })

        $('.sidebar__button-sign-in').on('click', function() {
            $('.sidebar__subbtn').toggleClass('sidebar__subbtn-active');
        })



        (function () {
            const close = document.querySelector('.menu__catalog-close');
            const menuCatalog = document.querySelector('.menu__catalog');
            close.addEventListener("click", function() {
                menuCatalog.classList.remove('menu__catalog-active')
          });

            const searchClose = document.querySelector('.menu__search-close');
            const menuSearch = document.querySelector('.menu__search');
            searchClose.addEventListener("click", function() {
                menuSearch.classList.remove('menu__search-active')
          });

            const signClose = document.querySelector('.menu__sign-in-close');
            const signProfile = document.querySelector('.menu__sign-in');
            signClose.addEventListener("click", function() {
                signProfile.classList.remove('menu__sign-in-active')
          });

            const headerDots = document.querySelector('.header__dots');
            const headerContacts = document.querySelector('.header__contacts-item');
            headerDots.addEventListener("click", function() {
                headerContacts.classList.add('header__contacts-item-active');
          });

            (function () {
            const headerClose = document.querySelector('.header__contacts-item-close')
            const headerContacts = document.querySelector('.header__contacts-item');
            headerClose.addEventListener('click', () => {
                headerContacts.classList.remove('header__contacts-item-active');
            });
        }());


                (function () {
                const buttonTel = document.querySelector('.sidebar__button-tel')
                const headerContacts = document.querySelector('.header__contacts-item');
                buttonTel.addEventListener('click', () => {
                    headerContacts.classList.add('header__contacts-item-active');
                });
            }());





        }());
}());

new Swiper('.insta__grid');




