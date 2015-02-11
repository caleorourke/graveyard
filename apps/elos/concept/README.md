# Prototype

Artifacts and components that went into creating this prototype.

## Plugins

Each jQuery/JavaScript plugin is located in [softlayer-engineering.js](https://raw.githubusercontent.com/caleorourke/elos/gh-pages/build/js/softlayer-engineering.js).

### GitHub API Callback

Fetches repository count from GitHub's API.

~~~js
$.ajax({
    url: "https://api.github.com/orgs/softlayer?callback?",
    dataType: "jsonp",
    success: function (json) {
        numRepos = json.data;
        $("#github-repos").text(numRepos.public_repos);
    }
});
~~~

### Transition Effects

Simple transitions effects for elements.

~~~js
+ function(e) {
    function t() {
        var e = document.createElement("open");
        var t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition:    "transitionend",
            OTransition:      "oTransitionEnd otransitionend",
            transition:       "transitionend"
        };
        for (var n in t) {
            if (e.style[n] !== undefined) {
                return {
                    end: t[n]
                };
            }
        }
        return false;
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = false;
        var r = this;
        e(this).one("openTransitionEnd", function() {
            n = true;
        });
        var i = function() {
            if (!n) e(r).trigger(e.support.transition.end);
        };
        setTimeout(i, t);
        return this;
    };
    e(function() {
        e.support.transition = t();
        if (!e.support.transition) return;
        e.event.special.openTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
            }
        };
    });
}(jQuery);
~~~

### Collapse

Swaps classes to collapse the navbar while scrolling.

~~~js
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("nav-collapse-top");
    } else {
        $(".navbar-fixed-top").removeClass("nav-collapse-top");
    }
});
~~~

### Smooth Scrolling

Slow animation effects for page scrolling.

~~~js
$(function() {
    $("a.smooth").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });
});
~~~

### Button Controls

Thresholds for showing and hiding the "top" button.
 
~~~js
pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
scrollTo = function(element, to, duration) {
    start         = element.scrollTop;
    change        = to - start;
    currentTime   = 0;
    increment     = 20;
    animateScroll = function() {
        currentTime += increment;
        val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    animateScroll();
};

window.onscroll = function() {
    if (pageYOffset >= 400) {
        document.getElementById("top").style.visibility = "visible";
    } else {
        document.getElementById("top").style.visibility = "hidden";
        return;
    }
    document.getElementById("top").onclick = function() {
        scrollTo(document.body, 0, 0);
    };
};
~~~

## jQuery Libraries

`jQuery` and `jQuery-Easing` libraries are bootstrapped from Cloudflare's CDN.

~~~html
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
~~~

## Google Analytics

Copy of the script we use, minus our UA number. This script also tracks page scrolls. 

~~~html
<script>
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
</script>
~~~

## Shivs

`html5shiv` is bootstrapped from Cloudflare's CDN.

~~~html
<!--[if lt IE 9]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->
~~~
