$(window).scroll(function() {
    const scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    if (scrollPercentage > 5) {
      $('header').css('background-color', 'white');
      $('header').css('transition', '0.3s');
    } else {
      $('header').css('background-color', 'white');
    }
  });

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".about-image-box");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        images.forEach(img => img.classList.add("show"));
        observer.unobserve(entry.target); // 一度だけ実行
      }
    });
  }, { threshold: 0.3 }); // 30%見えたら発火

  const aboutSection = document.querySelector("#about");
  observer.observe(aboutSection);
});
