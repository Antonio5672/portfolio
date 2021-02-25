(function () {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
})();

AOS.init({
    duration: 1700
})

var Swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    cssMode: true,
    mousewheel: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

const images = document.querySelectorAll('.imageSlide');
images.forEach(image => {
    if (window.outerWidth > 1200) {
        image.src = '/mockUps/Blog/mockUpWhitePc.png'
    }

    if (window.outerWidth < 1200) {
        image.src = '/mockUps/Blog/mockUpWhiteTablet.png';
    }

    if (window.outerWidth < 920) {
        image.src = '/mockUps/Blog/mockUpWhitePhone.png';
        // image.style.width = '100%';
    }

    if (window.outerWidth < 600) {
        image.style.width = '100%'
    }

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