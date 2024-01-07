let burgerBtn = document.querySelector('.header--burger');
let nav = document.querySelector('.nav');
burgerBtn.addEventListener('click', function () {
    nav.classList.toggle('_active')
});
nav.addEventListener('click', function (e) {
    if (e.target.closest('.nav--link')) {
        nav.classList.remove('_active')
    }
});
document.addEventListener('click', function (e) {
    if (!e.target.closest('.header')) {
        nav.classList.remove('_active')
    }
});