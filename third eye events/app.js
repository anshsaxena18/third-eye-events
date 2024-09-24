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
  grabCursor: true,  // Shows grab cursor for dragging
  centeredSlides: true,  // Keep slides centered
  slidesPerView: 2,  // Start with 2 slides per view
  loop: true,  // Enable infinite looping
  loopFillGroupWithBlank: false,  // Prevent Swiper from adding blank slides
  breakpoints: {
    0: {
      slidesPerView: 1,  // On small screens, show 1 slide
    },
    700: {
      slidesPerView: 2,  // On medium screens, show 2 slides
    },
    1050: {
      slidesPerView: 3,  // On larger screens, show 3 slides
    },
  },
  allowTouchMove: true,  // Allow manual dragging/swiping
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
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
  

  function initMap() {
    const location = { lat: 28.367, lng: 79.415 }; // Coordinates for Bareilly, Uttar Pradesh, India
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
