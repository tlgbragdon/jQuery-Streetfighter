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
   })
   .mouseup(function() {
   		$('.ryu-throwing').hide();
   		$('.ryu-ready').show();
   		
   });


    $(document).keydown(function() {
        if (event.which == 88) {
   	       // either image might be showing
   	       $('.ryu-still').hide();
   	       $('.ryu-ready').hide();
   	     
   	       $('.ryu-cool').show();
   	    }
 
     })
        .keyup(function() {
        if (event.which == 88) {
   	       $('.ryu-cool').hide();
   	       // always go back to still even if mouse is in area
   	       $('.ryu-still').show();
   	    }
 
     });
 });



function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}