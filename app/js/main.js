$(function () {

  $(".latest__inner").slick({
    slidesToShow: 2,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="./images/prev.svg" alt="prev"></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="./images/next.svg" alt="next"></button>',
    responsive: [
      {
        breakpoint: 1051,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".bestsellers__inner").slick({
    slidesToShow: 3,
    prevArrow:
      '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="./images/prev.svg" alt="prev"></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="./images/next.svg" alt="next"></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 571,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".menu-toggle").on("click", function () {
    $(".menu").toggleClass("show");
  });

});
