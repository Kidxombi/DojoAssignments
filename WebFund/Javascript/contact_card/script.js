
function addClick(){
	$('.card').click(function(){
		$(this).children().toggle();
	});

};


$('form').submit(function(){
	addClick();
	$('#sec-2').append("<div class='card'><h2>"+ $('#first_name').val() +"</h2><h2>"+ $('#last_name').val() +"</h2><p class='d'>"+ $('#desc').val() +"</p></div>");
	$('.d').hide();
	addClick();
	return false;
});
