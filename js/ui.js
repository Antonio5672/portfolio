const images = document.querySelectorAll('.img');
images.forEach(image => {
    console.log(image.src);

    if (window.outerWidth > 1001) {
        image.src = "/mockUps/Blog/mockUpWhitePc.png";
    }
    if (window.outerWidth < 1000) {
        image.src = "/mockUps/Blog/mockUpWhiteTablet.png";
    }
    if (window.outerWidth < 500) {
        image.src = "/mockUps/Blog/mockUpWhitePhone.png";
    }
})

const upgradeWithMe = document.querySelector('.upgradeWithme');
upgradeWithMe.addEventListener('click', e => {
    window.location.href = 'mailto:antoniosalzano9325@gmail.com'
})