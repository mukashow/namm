$(function(){$(".intro__slider-wrapper").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:"<img src='../img/popular/back.svg' class='prev' alt='1'>",nextArrow:"<img src='../img/popular/next.svg' class='next' alt='2'>"}),$(".str__slider").slick({infinite:!0,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:426,settings:"unslick"}]}),$(".popular__slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,prevArrow:"<img src='../img/popular/back.svg' class='prev' alt='1'>",nextArrow:"<img src='../img/popular/next.svg' class='next' alt='2'>",responsive:[{breakpoint:1025,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".news__slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,prevArrow:"<img src='../img/popular/back.svg' class='prev' alt='1'>",nextArrow:"<img src='../img/popular/next.svg' class='next' alt='2'>",responsive:[{breakpoint:1025,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".reviews__slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,prevArrow:"<img src='../img/popular/back.svg' class='prev' alt='1'>",nextArrow:"<img src='../img/popular/next.svg' class='next' alt='2'>",responsive:[{breakpoint:1025,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".insta__grid-item").magnificPopup({type:"image",gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"}),$(".intro__img").magnificPopup({type:"image",gallery:{enabled:!1},removalDelay:300,mainClass:"mfp-fade"}),$(".certification__item").magnificPopup({type:"image",gallery:{enabled:!0},removalDelay:300,mainClass:"mfp-fade"}),$(".popular__shopbg").click(function(){var e=$(".sidebar__num1");e.val(parseInt(e.val())+1),e.change()}),$(".popular__shop-stat").click(function(){var e=$(".sidebar__num2");e.val(parseInt(e.val())+1),e.change()})});var clicks=0;function onClick(){clicks+=1,document.getElementById("shop__clicks").innerHTML=clicks}!function(){const e=document.querySelector(".popular__shopbg"),t=document.querySelector(".sidebar__subbtn-shop"),s=document.querySelector(".sidebar__num1");e.addEventListener("click",function(){t.classList.add("sidebar__subbtn-shop-active"),s.classList.add("sidebar__num1-active")})}(),function(){const e=document.querySelector(".questions__write"),t=document.querySelector(".questions__form-wrapper"),s=document.querySelector(".questions__close"),i=document.querySelector(".questions__black");e.addEventListener("click",()=>{t.classList.add("questions__form-wrapper-active"),i.classList.add("questions__black-active")}),s.addEventListener("click",()=>{t.classList.remove("questions__form-wrapper-active"),i.classList.remove("questions__black-active")}),i.addEventListener("click",()=>{t.classList.remove("questions__form-wrapper-active"),i.classList.remove("questions__black-active")});const o=document.querySelector(".popular__sticker"),c=document.querySelector(".popular__discount"),n=document.querySelector(".popular__discount-close");o.addEventListener("click",()=>{c.classList.add("popular__discount-active")}),n.addEventListener("click",()=>{c.classList.remove("popular__discount-active")}),document.querySelectorAll(".popular__counter").forEach(function(e){var t=e.querySelector(".popular__minus"),s=e.querySelector(".popular__count-num");e.querySelector(".popular__plus").addEventListener("click",function(){s.innerText++}),t.addEventListener("click",function(){s.innerText--})});const a=document.querySelector(".to__top");window.onscroll=(()=>{window.pageYOffset>800?a.classList.add("to__top-active"):a.classList.remove("to__top-active")});const r=document.querySelectorAll('a[href*="#"]');for(let e of r)e.addEventListener("click",function(t){t.preventDefault();const s=e.getAttribute("href");document.querySelector(""+s).scrollIntoView({behavior:"smooth",block:"start"})});$(".sidebar__button-menu").on("click",function(){$(".menu__catalog").toggleClass("menu__catalog-active"),$(".wrapper").toggleClass("wrapper__active"),$(".sidebar").toggleClass("sidebar__active"),$(".sidebar__button-menu").toggleClass("sidebar__button-menu-active")}),$(".sidebar__button-search").on("click",function(){$(".menu__search").toggleClass("menu__search-active"),$(".wrapper").toggleClass("wrapper__active"),$(".sidebar").toggleClass("sidebar__active"),$(".sidebar__button-search").toggleClass("sidebar__button-search-active")}),$(".sidebar__button-shop").on("click",function(){$(".menu__shop").toggleClass("menu__shop-active"),$(".wrapper").toggleClass("wrapper__active"),$(".sidebar").toggleClass("sidebar__active"),$(".sidebar__button-shop").toggleClass("sidebar__button-shop-active")}),$(".sidebar__button-sign-in").on("click",function(){$(".menu__sign-in").toggleClass("menu__sign-in-active"),$(".wrapper").toggleClass("wrapper__active"),$(".sidebar").toggleClass("sidebar__active"),$(".sidebar__button-sign-in").toggleClass("sidebar__button-sign-in-active")}),$(".sidebar__button-menu").on("click",function(){$(".sidebar__subbtn").toggleClass("sidebar__subbtn-active")}),$(".sidebar__button-search").on("click",function(){$(".sidebar__subbtn").toggleClass("sidebar__subbtn-active")}),$(".sidebar__button-shop").on("click",function(){$(".sidebar__subbtn").toggleClass("sidebar__subbtn-active")}),$(".sidebar__button-sign-in").on("click",function(){$(".sidebar__subbtn").toggleClass("sidebar__subbtn-active")})(function(){const e=document.querySelector(".menu__catalog-close"),t=document.querySelector(".menu__catalog");e.addEventListener("click",function(){t.classList.remove("menu__catalog-active")});const s=document.querySelector(".menu__search-close"),i=document.querySelector(".menu__search");s.addEventListener("click",function(){i.classList.remove("menu__search-active")});const o=document.querySelector(".menu__sign-in-close"),c=document.querySelector(".menu__sign-in");o.addEventListener("click",function(){c.classList.remove("menu__sign-in-active")});const n=document.querySelector(".header__dots"),a=document.querySelector(".header__contacts-item");n.addEventListener("click",function(){a.classList.add("header__contacts-item-active")}),function(){const e=document.querySelector(".header__contacts-item-close"),t=document.querySelector(".header__contacts-item");e.addEventListener("click",()=>{t.classList.remove("header__contacts-item-active")})}(),function(){const e=document.querySelector(".sidebar__button-tel"),t=document.querySelector(".header__contacts-item");e.addEventListener("click",()=>{t.classList.add("header__contacts-item-active")})}()}())}(),new Swiper(".insta__grid");