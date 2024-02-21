$(window).scroll(function() {
    const scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    if (scrollPercentage > 16) {
      $('header').css('background-color', '#b0e0e6');
      $('header').css('transition', '0.3s');
      $('header').css('z-index', '1000');
    } else {
      $('header').css('background-color', 'transparent');
    }
  });