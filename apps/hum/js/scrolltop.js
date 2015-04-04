/*
 * Copyright © Rasp by SoftLayer, an IBM Company
 *
 * scrolltop.js
 * Rasp's scrolltop.js script shows and hides the "back to top" button whenever it reaches the page
 * threshold (200). When clicked, it'll scroll users to the top of the page.
 *
 */

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

  Math.easeInOutQuad = function(t, b, c, d) { t /= d / 2;
    if (t < 1) { return c / 2 * t * t + b; }
    t--; return -c / 2 * (t * (t - 2) - 1) + b; };

  animateScroll();
};

window.onscroll = function() {
  if (pageYOffset >= 200) {
    document.getElementById('button-top').style.visibility = 'visible';
  }
  else {
    document.getElementById('button-top').style.visibility = 'hidden';
    return;
  }
  document.getElementById('button-top').onclick = function() {
    scrollTo(document.body, 0, 0);
  };
};
