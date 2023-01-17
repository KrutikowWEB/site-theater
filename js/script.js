$(document).ready(function(){
    $('.promo__slick').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/promo/Arrow_left.png">Пред</button>',
        nextArrow: '<button type="button" class="slick-next">след <img src="icons/promo/Arrow_right.png"></button>'
    });
  });

  $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
    });

    $(document).ready(function(){
      $('.production__slick').slick({
          speed: 800,
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: '<button type="button" class="slick-prev"><img src="icons/promo/Arrow_left.png">Пред</button>',
          nextArrow: '<button type="button" class="slick-next">след <img src="icons/promo/Arrow_right.png"></button>',
          responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 0.3+1,
                slidesToScroll: 1
              }
            } 
          ]
      });
    });

    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});