/*
 #  Toggle
 #  Enables sliding/collapsing behavior for navigation
 #
 #  Copyright © Michael O'Rourke (@caleorourke)
 #  Code and documentation licensed under MIT
 */

body          = document.body;
arrowElement  = document.getElementById('arrow-element');
dateElement   = document.getElementById('date-element');
navElement    = document.getElementById('nav-element');
toggleElement = document.getElementById('toggle-element');

toggleElement.onclick = function() {
  classie.toggle(body, 'push');
  classie.toggle(navElement, 'pull');
  classie.toggle(toggleElement, 'fixed');
  if (typeof(dateElement) !== undefined && dateElement !== null) {
    classie.toggle(dateElement, 'out');
  }
  if (typeof(arrowElement) !== undefined && arrowElement !== null) {
    classie.toggle(arrowElement, 'out');
  }
};
