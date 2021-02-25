import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    cssMode: true,
    mousewheel: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});

const images = document.querySelectorAll('.imageSlide');
images.forEach(image => {
    if (window.outerWidth > 1200) {
        image.src = require('../css/icons/mockUpWhitePc.png')
    }

    if (window.outerWidth < 1199) {
        image.src = require('../css/icons/mockUpWhiteTablet.png')
    }

    if (window.outerWidth < 900) {
        image.src = require('../css/icons/mockUpWhitePhone.png')
        image.style.width = 'auto'
    }

    if (window.outerWidth < 600) {
        image.style.width = '100%'
    }
    console.log(image.src)
})

// AOS ANIMATION LIBRARY
AOS.init({
    duration: 1700
})

const goOn = document.querySelector('.goOn');
goOn.addEventListener('click', e => {
    window.location.href = '#landingPage'
})

const whySite = document.querySelector('.whySite');
whySite.addEventListener('click', e => {
    window.location.href = '#web'
})

const buttonsTalks = document.querySelectorAll('.talkWithMe');
buttonsTalks.forEach(btn => {
    btn.addEventListener('click', e => {
        window.location.href = 'mailto:antoniodesign00@gmail.com'
    })
})