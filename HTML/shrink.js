$(document).ready(function() {
  $(this).scrollTop(0);


	$(window).scroll(function() {
     // $(window).resize(function() {
        if($(window).width() > 580) {
  	if($(document).scrollTop() > 15) {
    	$('#navigation').addClass('shrink');
    }
    else {
    $('#navigation').removeClass('shrink');
  }
    }

// });
  });


});
