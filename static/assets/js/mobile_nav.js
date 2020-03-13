'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

let split = document.getElementsByClassName('split-2')[0];
var isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox == true) {
  split.classList.add("split-2-firefox");
}
