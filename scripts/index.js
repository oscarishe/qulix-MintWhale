const MOBILE_RES = 768;

const burgerButton = document.querySelector('.header-burger');
const headerNav = document.querySelector('.header-nav');
const backdrop = document.querySelector('.backdrop');
const closeButton = document.querySelector('.header-nav__close-button');
const navLinks = document.querySelectorAll('.header-nav__link');
const headerTogglers = [burgerButton, backdrop, closeButton, ...navLinks];
headerTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        if (window.innerWidth < MOBILE_RES) {
            headerNav.classList.toggle('active');
            backdrop.classList.toggle('active');
            document.body.classList.toggle('scroll-y-disabled');
        }
    })
})