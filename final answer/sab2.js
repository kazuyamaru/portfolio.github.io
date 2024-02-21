$(window).scroll(function() {
    const scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    if (scrollPercentage > 10) {
      $('header').css('background-color', '#210148');
      $('header').css('transition', '0.3s');
    } else {
      $('header').css('background-color', 'transparent');
    }
  });

  $(window).scroll(function() {
    const scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    if (scrollPercentage > 2) {
      $('.circle').css('background-color', 'white');
      $('.circle').css('transition', '0.5s');
      $('.circle').css('border', 'solid 1px black');
    } else {
      $('.circle').css('background-color', 'transparent');
      $('.circle').css('border', 'transparent');
    }
  });