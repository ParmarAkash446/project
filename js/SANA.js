
$(document).ready(function () {
  $('.logo-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576:{
        items:2
      },
      768:{
        items:4
      },
      992:{
        items:4
      },
      1000: {
        items: 5
      }
    }
  })
})
$(document).ready(function () {
  $('.owl-carousel-portfolio').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1
      },
      768:{
        items:2
      },
      992:{
        items:2
      },
      1000: {
        items: 2
      }

    }
  })
})
$(document).ready(function () {
  $('.team-coment-menslider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})
var btn=$("#body-scrol-button");
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });