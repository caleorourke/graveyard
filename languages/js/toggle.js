/*
#  Toggle
#  Enables sliding/collapsing behavior for navigation and switching between page modes
#
#  Copyright (c) SoftLayer, an IBM Company
#  Code and documentation licensed under MIT
*/

body = document.body;
navToggle = document.getElementById("nav-toggle");
invertToggle = document.getElementById("invert-toggle");
expandToggle = document.getElementById("expand-toggle");

footerElement = document.getElementById("context");
navElement = document.getElementById("sidenav");
pageElement = document.getElementById("layout");
subnavElement = document.getElementById("index"); 
topElement = document.getElementById("top");

// Toggle for navigation
// ------------------------------

navToggle.onclick = function() {
  unclassy.toggle(body, "pushed-right");
  unclassy.toggle(navElement, "opened");
  unclassy.toggle(navToggle, "fixed");
  unclassy.toggle(subnavElement, "hidden");
  unclassy.toggle(invertToggle, "hidden");
  unclassy.toggle(expandToggle, "hidden");
};

// Toggle for color invert
// ------------------------------

invertToggle.onclick = function() {
  unclassy.toggle(body, "invert");
  unclassy.toggle(navToggle, "hidden");
  unclassy.toggle(footerElement, "hidden");
  unclassy.toggle(expandToggle, "hidden");
};

// Toggle for distraction-free layout
// ------------------------------

expandToggle.onclick = function() {
  unclassy.toggle(invertToggle, "hidden");
  unclassy.toggle(navToggle, "hidden");
  unclassy.toggle(footerElement, "hidden");
  unclassy.toggle(subnavElement, "hidden");
  unclassy.toggle(topElement, "hidden");
  unclassy.toggle(pageElement, "nowhitespace");
  unclassy.toggle(body, "expand");
};
