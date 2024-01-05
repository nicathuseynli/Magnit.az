$(document).ready(function () {
  $(".product-details-slider-big").slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    verticalSwiping: true,
    asNavFor: ".product-details-slider",
    focusOnSelect: true,
    adaptiveHeight:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // mobileFirst: true,
  });
  $(".product-details-slider").slick({
    arrows: false,
    fade: true,
    asNavFor: ".product-details-slider-big",
  });
});
