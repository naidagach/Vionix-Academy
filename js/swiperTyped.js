
let typedInstance;

const startTypedInActiveSlide = () => {
const activeSlide = document.querySelector(".swiper-slide-active");
if (!activeSlide) return;

const textSpan = activeSlide.querySelector(".typed-text");
const textData = activeSlide.getAttribute("data-text");

if (!textSpan || !textData) return;

const strings = JSON.parse(textData);

if (typedInstance) {
    typedInstance.destroy();
}

typedInstance = new Typed(textSpan, {
    strings: strings,
    typeSpeed: 85,
    backSpeed: 30,
    backDelay: 1500,
    //    loop: true,
    //    showCursor: true,
});
};

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
// pagination: {
//    el: ".swiper-pagination",
//    clickable: true,
// },
// navigation: {
//    nextEl: ".swiper-button-next",
//    prevEl: ".swiper-button-prev",
// },
on: {
    init: startTypedInActiveSlide,
    slideChangeTransitionStart: startTypedInActiveSlide,
    autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
},
});

window.addEventListener("DOMContentLoaded", startTypedInActiveSlide);