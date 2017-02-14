$('#a-button').click(function(){
	$('#a').toggle();
});

$('#b-buttonHide').click(function(){
	$('#b').hide();
});

$('#b-buttonShow').click(function(){
	$('#b').show();
});

$('#c').hover(function(){
	$(this).slideUp(5000)
}, function(){
	$(this).slideDown(5000)
});

$('#d-toggle').click(function(){
	$('#d').slideToggle()
});

$('#e').hover(function(){
	$(this).fadeOut(3000)
}, function(){
	$(this).fadeIn(3000)
});

$('#f-button').click(function(){
	$('#f').addClass('red');
});
$('#f-button2').click(function(){
	$('#f').removeClass('red')
});

$('#g-span1').click(function(){
	$(this).before('<b>Testing </b>')
});

$('#g-span2').click(function(){
	$(this).after('<b>Testing </b>')
});

$('#h-button').click(function(){
	$('#h').append(' I am coding!')
});

$('#i-button').click(function(){
	$('#i').html("This is a test!")
})

$('#j-button').click(function(){
	$('#j').attr('height', '600');
	$('#j').attr('frameborder', '100');
});


$('#inp-button').click(function(){
	$('#inp-1').val('Make America Great Again!!!')
});

$('#k-button').click(function(){
	$('#k').text('This is the new text.')
});

$('#attach').click(function(){
	$('#dataTest').data('class', 'testClass')
});

$('#retrieve').click(function(){
	alert($('#dataTest').data('class'));
});
