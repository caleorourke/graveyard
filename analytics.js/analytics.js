/*
 #  Google Analytics
 #  Generates detailed statistics about a website's traffic and sources
 #
 #  Copyright © Google, Inc.
 #  http://www.google.com/intl/en/policies/terms (April 14, 2014)
 */

(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","//www.google-analytics.com/analytics.js","ga");

ga("create", "{{site.google.id}}", "auto");
ga("send", "pageview");

// Tracks page scroll event for Universal Analytics
$(function() {
    var isDuplicateScrollEvent,
    scrollTimeStart = new Date(),
    $window         = $(window),
    $document       = $(document),scrollPercent;

    $window.scroll(function() {
        scrollPercent = Math.round(100 * ($window.height() + $window.scrollTop()) / $document.height());
        if (scrollPercent > 70 && !isDuplicateScrollEvent) { // page scroll to 70%
            isDuplicateScrollEvent = 1;ga("send","event","scroll","Window: " + $window.height() + "px; Document: " + $document.height() + "px; Time: " + Math.round((new Date() - scrollTimeStart) / 1000, 1) + "s");
        }
    });
});
