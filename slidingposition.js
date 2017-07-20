(function($){
		function title()	{
			if(position<15)	{
				$('#title').replaceWith("<span id='title'>Section 1</span>");
			} else if(position>20 && position<39)	{							// Percentage position on the page
				$('#title').replaceWith("<span id='title'>Section 2</span>");
			} else if(position>40 && position<59)	{
				$('#title').replaceWith("<span id='title'>Section 3</span>");
			}else if(position>60 && position<79)	{
				$('#title').replaceWith("<span id='title'>Section 4</span>");
			}else if(position>80 && position<100)	{
				$('#title').replaceWith("<span id='title'>Section 5</span>");
			};
	};
var height = $(window).height();
height=height*5;					// 5 is my number of sections
		setInterval(function(){
		 position = $('.header').offset().top;
		position	=	(position/height)*125;
		$('#progres-bar').css({width: position+'%'});
		if(position>1)	{
			$('.header').animate({backgroundColor : 'rgba(0, 0, 0, 1)'},300);
						} else	{
			$('.header').animate({backgroundColor : 'rgba(0, 0, 0, 0.2)'},200);
						};

		title();
		}, 300);


})(jQuery);
