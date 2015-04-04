/*
 #  Sidebar
 #  An on-page TOC generator for whatever heading you'd like
 #
 #  Copyright © Softlayer, an IBM Company
 #  Code and documentation licensed under MIT
 */

(function($) {
  $.fn.index = function() {
    headings = $('h1').filter(function() {
      return this.id;
    });
    output = $(this);

    if (!headings.length || headings.length < 1 || !output.length) {
      return;
    }

    get_level = function(ele) {
      return parseInt(ele.nodeName.replace('H', ''), 10);
    };

    level = get_level(headings[0]);
    this_level = void 0;
    html = '';

    headings.on('click', function() {
        window.location.hash = this.id;
      })
      .each(function(_, heading) {
        this_level = get_level(heading);

        if (this_level === level) {
          html += '<li><a href="#' + heading.id + '">' + heading.innerHTML + '</a>';
        }
        level = this_level;
      });

    output.html(html);
  };
})(jQuery);
