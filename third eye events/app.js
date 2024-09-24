var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay:2000,
      disableOnInteraction: false,
  },
});

var reviewSwiper = new Swiper(".review-slider", {
  spaceBetween: 20,  // Adjusted space between slides
  grabCursor: true,
  centeredSlides: false,  
  slidesPerView: 1,  // Default to 1 slide
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

  // JavaScript to toggle mobile menu
  const menuBar = document.getElementById('menu-bar');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');
  
  menuBar.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
  });
  
  closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
  });
  