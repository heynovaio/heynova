$(document).ready(function() {
	if($(window).width() >= 1024){

		var s = $(".sticker");
		var s2 = $(".sticker2");
		var pos = s.position();
		var pos2 = s2.position();

		$(window).scroll(function() {
			var windowpos = $(window).scrollTop();
			var windowHeight = $(window).height();
			var whatHeight = $(".what-we-do").outerHeight();
			var whyHeight = $(".why-we-do").outerHeight();

			var stickPosition2 = whyHeight + whatHeight + windowHeight + 70;

			if (windowpos >= windowHeight & windowpos <=2200) {
				s.addClass("stick");
			} else {
				s.removeClass("stick");
			}
			if (windowpos >= stickPosition2 & windowpos <=4800) {
				s2.addClass("stick");
			} else {
				s2.removeClass("stick");
			}
		});

	}
});
