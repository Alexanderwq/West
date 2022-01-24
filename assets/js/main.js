 let places = ["Поклонная гора", "Москва Сити", "Матвеевский лес", "Район раменки"];
 
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
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: ".promo-slider__next",
          prevEl: ".promo-slider__prev",
        },
});