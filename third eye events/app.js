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

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
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
        delay:2000,
        disableOnInteraction: false,
    },
  });