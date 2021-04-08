$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    mobileFirst: true,
     responsive: [
        {
           breakpoint: 1023,
           settings: "unslick"
        }
     ]
  });