/*
 * filter.js
 *
 * Updated 2015.12.20
 * Code and documentation licensed under the MIT license
 *
 */

jQuery(document).ready(function($) {
  if ($('.iso-box-wrapper').length > 0 ) {
    var $container  = $('.iso-box-wrapper'),
        $imgs       = $('.iso-box img');

    $container.imagesLoaded(function () {
      $container.isotope({
        layoutMode:   'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function() {
        $container.isotope('reLayout');
      })
    });

    $('.filter-wrapper li a').click(function() { // Filter items on click
      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration:  750,
          easing:   'linear',
          queue:    false,
        }
      });

      if ( $this.hasClass('selected') ) { // Do not proceed if already selected
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });
  }
});