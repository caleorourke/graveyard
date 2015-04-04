/*
 * Copyright © Rasp by SoftLayer, an IBM Company
 *
 * metabar.js
 * Rasp's metabar.js script adds and removes classes that animate the tucking and
 * untucking of the entire metabar while scolling up and down.
 *
 */

jQuery(document).ready(function($) {
  var MQL = 1170;

  if ($(window).width() > MQL) {
    var headerHeight = $('.metabar').height();
    $(window).on('scroll', {
        previousTop: 0
      },

      function() {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
          if (currentTop > 0 && $('.metabar').hasClass('affixed')) { // Detect if user is scrolling up
            $('.metabar').addClass('visible'); // If scrolling up...
          } else {
            $('.metabar').removeClass('visible affixed');
          }
        } else {
          $('.metabar').removeClass('visible'); // If scrolling down...
          if (currentTop > headerHeight && !$('.metabar').hasClass('affixed')) $('.metabar').addClass('affixed');
        }
        this.previousTop = currentTop;
      });
  }
});
