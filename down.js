(function($){

		$('a[href*=#]:not([href=#carousel])').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 700);

    return false;
});

})(jQuery);
