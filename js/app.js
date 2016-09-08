$(document).ready(function() {
   $('.ryu').mouseenter(function() {
   		$('.ryu-still').hide();
   		$('.ryu-ready').show();
   		
   })
   .mouseleave(function() {
   		$('.ryu-ready').hide();
   	    $('.ryu-still').show();
   })
   .mousedown(function() {
   		console.log("mousedown");
   		$('.ryu-ready').hide();
   		$('.ryu-throwing').show();
   		$('.hadouken').show();
   		//  hadouken animate to right of screen
   		//play hadouken sound
   })
   .mouseup(function() {
   		console.log('mouseup');
   		$('.ryu-thowing').hide();
   		$('.ryu-ready').show();
   		
   });


});