/*
 #  Indexing
 #  A simple on-page TOC/index generator for whatever header you'd like
 #
 #  Copyright © SoftLayer, an IBM Company
 #  Code and documentation licensed under MIT
 */

(function($) {
    $.fn.indexing = function (options) {
        headers = $("h1").filter(function() {
            return this.id;
        });
        output = $(this);

        if (!headers.length || headers.length < 1 || !output.length) {
            return;
        }

        get_level = function(ele) {
            return parseInt(ele.nodeName.replace("H", ""), 10);
        };

        level = get_level(headers[0]);
        this_level = void 0;
        html = "";

        headers.on("click", function() {
            window.location.hash = this.id;
        })
            .each(function(_, header) {
            this_level = get_level(header);

            if (this_level === level) {
                html += "<li><a href='#" + header.id + "'>" + header.innerHTML + "</a>";
            }
            level = this_level;
        });

        output.html(html);
    };
})(jQuery);
