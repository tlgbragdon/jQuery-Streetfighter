$(document).ready(function() {
   $('.ryu').mouseenter(function() {
   		$('.ryu-still').hide();
   		$('.ryu-ready').show();
   		
   })			// omit ; for chaining...
   .mouseleave(function() {
   		$('.ryu-ready').hide();
   	    $('.ryu-still').show();
   })
   .mousedown(function() {
   		playHadouken();
   		$('.ryu-ready').hide();
   		$('.ryu-throwing').show();
   		$('.hadouken').show().animate(
   			{'left': '1020px'},  // move to this position
   			500,  				// over this time frame (in ms)
   			function() {		//callback function when animation completed
   				$('.hadouken').hide();
   				// set left property back to original state
   				$('.hadouken').css('left', '520px');
   			}
   		);
   		//play hadouken sound
   })
   .mouseup(function() {
   		$('.ryu-thowing').hide();
   		$('.ryu-ready').show();
   		
   });


});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}