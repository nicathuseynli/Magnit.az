$(document).ready(function(){
	$(".slider").slick({
    arrows: true,
    dots: false,
    slidesToShow: 6,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});


