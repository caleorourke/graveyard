/*
 * load.js
 *
 * Updated 2015.12.20
 * Code and documentation licensed under the MIT license
 *
 */

// Preloader
$(window).load(function() {
  $('.preloader').fadeOut(2000);
});

$(function() {
  // Wow
  wow = new WOW({
    mobile: false
  });
  wow.init();

  // Responsive Menu
  $('.navbar-collapse a').click(function() { // Hide mobile menu
    $(".navbar-collapse").collapse('hide');
  });

  // Lightbox
  $('.iso-box-section a').nivoLightbox({
    effect: 'fadeScale'
  });

  // Slideshow
  /*
  $(function() {
    jQuery(document).ready(function() {
      $('#home').backstretch([
        "public/img/home-bg-slideshow1.jpg",
        "public/img/home-bg-slideshow2.jpg"], {
          duration: 2000,
          fade:     750
        });
    });
  })*/
  $(function() {
    jQuery(document).ready(function() {
      $('#home').backstretch([
        "public/img/home-bg-slideshow1.jpg"], {
          duration: 2000,
          fade:     750
        });
    });
  })
});