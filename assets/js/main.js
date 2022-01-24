
 
 var placesSlider = new Swiper(".places-slider", {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
          nextEl: ".places-slider__next",
          prevEl: ".places-slider__prev",
        },
      });


var promoSlider = new Swiper(".promo-slider", {
        slidesPerView: 1.7,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".promo-slider__next",
          prevEl: ".promo-slider__prev",
        },
});