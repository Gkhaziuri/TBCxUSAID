document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper", {

    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
      loop: true,
      speed: 800,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  });

function toggleAccordion(header) {
    var content = header.nextElementSibling;
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';

    var arrowImage = header.querySelector('img');
    if (arrowImage) {
        arrowImage.classList.toggle('rotate');
    } 
};

// document.addEventListener('DOMContentLoaded', function () {
//   var hamburgerMenu = document.getElementById('hamburger-menu');
//   var navMenu = document.getElementById('nav-menu');

//   hamburgerMenu.addEventListener('click', function () {
//     navMenu.classList.toggle('show-menu');
//     hamburgerMenu.classList.toggle('open');
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  var hamburgerMenu = document.getElementById('hamburger-menu');
  var navMenu = document.getElementById('nav-menu');
  var closeBtn = document.getElementById('close-btn');

  hamburgerMenu.addEventListener('click', function () {
      navMenu.classList.toggle('show-menu');
  });

  closeBtn.addEventListener('click', function () {
      navMenu.classList.remove('show-menu');
  });
});