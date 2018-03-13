$(document).ready(function() {
  $(this).scrollTop(0);
	$(window).scroll(function() {
  	if($(document).scrollTop() > 15) {
    	$('#navigation').addClass('shrink');
    }
    else {
    $('#navigation').removeClass('shrink');
    }
  });
});
