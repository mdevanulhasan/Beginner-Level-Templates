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
	$(".top_header_area a.logo_area img").click(function(){$("nav ul li a").removeClass("actives"),$("nav ul li:first-child a").addClass("actives")});
	// OWL CAROUSEL SLIDER
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		margin: 15,
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 10000,
		autoplayHoverPause: false,
		autoplaySpeed: false,
		dragEndSpeed: false,
		freeDrag: false,
		dots: true,
		nav: true,
		startPosition: 3,
		responsiveClass: true,
		responsiveRefreshRate: true
	});
	// Scroll Up Effect
	$(function () {
	  $.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: 'Scroll to top', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	  });
	});
});