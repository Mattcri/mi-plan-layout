const mobileMenu = document.querySelector('.mb-menu');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('activo')
});

var swiper = new Swiper('.swiper-container', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'swiper-active',
  },
});

