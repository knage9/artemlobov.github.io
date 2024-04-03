// $(document).ready(function() {
//     // Плавная прокрутка при использовании колеса мыши
//     $(window).on('wheel', function(e) {
//         e.preventDefault();
//         var delta = e.originalEvent.deltaY;
//         var scrollTime = 1000; // время прокрутки в миллисекундах
//         var scrollDistance = 200; // дистанция прокрутки в пикселях
//         $('html, body').stop().animate({
//             scrollTop: $(window).scrollTop() + (delta > 0 ? scrollDistance : -scrollDistance)
//         }, scrollTime, 'easeOutQuint'); // 'easeOutQuint' - функция замедления
//     });
// });
$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.5;			//Scroll time
	var scrollDistance = 250;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});