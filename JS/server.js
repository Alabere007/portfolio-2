// TO SHOW HIDE NAV MENU

const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})


const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)






// $(document).ready(function () {
//     $('#menu').click(function () {
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');
//     });
//     $(window).on('scroll load', function () {
//         $('#menu').removeClass('fa-times');
//         $('header').removeClass('toggle');
//         if ($(window).scrollTop() > 0) {
//             $('.top').show();
//         } else {
//             $('.top').hide();
//         }
//     });

//     // smooth scrolling
//     $('a[href*="#"]').on('click', function (e) {
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: $($(this).attr('href')).offset().top,
//         },
//             500,
//             'linear'
//         );
//     });
// });

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// })

// /*SCROLL HOME*/
// sr.reveal('.home__title', {})
// sr.reveal('.home__scroll', { delay: 200 })
// sr.reveal('.home__img', { origin: 'right', delay: 400 })

// /*SCROLL ABOUT*/
// sr.reveal('.about__img', { delay: 500 })
// sr.reveal('.about__subtitle', { delay: 300 })
// sr.reveal('.about__profession', { delay: 400 })
// sr.reveal('.about__text', { delay: 500 })
// sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

// /*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle', {})
// sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
// sr.reveal('.skills__img', { delay: 400 })

// /*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio__img', { interval: 200 })

// /*SCROLL CONTACT*/
// sr.reveal('.contact__subtitle', {})
// sr.reveal('.contact__text', { interval: 200 })
// sr.reveal('.contact__input', { delay: 400 })
// sr.reveal('.contact__button', { delay: 600 })
