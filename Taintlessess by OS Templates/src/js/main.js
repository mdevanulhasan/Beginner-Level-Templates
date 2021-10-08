// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Our Custom Javascript or jQuery Codes is given below.
$(document).ready(function(){
	// ACTIVE CLASS
	$("nav ul li a").click(function(){$("nav ul li a").removeClass("actives"),$(this).addClass("actives")}),
	$(".top_header a.logo_area img").click(function(){$("nav ul li a").removeClass("actives"),$("nav ul li:first-child a").addClass("actives")});
});