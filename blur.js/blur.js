/*
 #  Blur
 #  Visual distortion effect for the image while scrolling
 #
 #  Copyright © SoftLayer, an IBM Company
 #  Code and documentation licensed under MIT
 */

$(function(){

    $window = $(window);
    $body   = $("body");
    $bgBlur = $(".bg-blur");

    var bgBlurHeight     = $bgBlur.height();
    var scrollFlag       = false;
    var scrollThreshold  = 0.25;    // debounces pointer events
    var blurWhenReach    = 3;       // blur factor, "3" means the image will blur when you scroll 1/3 of the div

    $window.on("scroll", function(event){

        var scrollTop = $window.scrollTop();

        if(!scrollFlag){
            scrollFlag = true;
            $body.addClass("disable-pointer-events");
        }

        debouncePointerEvents();

        if(scrollTop < bgBlurHeight){
            var _alpha = (scrollTop / bgBlurHeight) * blurWhenReach;
            if(_alpha > 1){ _alpha = 1; }
            setInterval.set($bgBlur, {alpha: _alpha });
        }
    });

    function debouncePointerEvents(){
        setInterval.killDelayedCallsTo(addPointerEvents);
        setInterval.delayedCall(scrollThreshold, addPointerEvents);
    }

    function addPointerEvents(){
        scrollFlag = false;
        $body.removeClass("disable-pointer-events");
    }
});
