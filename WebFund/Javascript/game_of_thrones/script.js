$('img').click(function(){
	$(this).parent().effect('bounce')
	$.get("http://anapioficeandfire.com/api/houses/"+$(this).attr('idx'), function(res){
		$('#results').html("<h2>Name</h2><h4>"+ res.name +"</h4><h2>Region</h2><h4>"+res.region+"</h4><h2>Coat of Arms</h2><h4>"+res.coatOfArms+"</h4><h2>Words</h2><h4>"+res.words+"</h4>")
		$('#results').children().hide();
		$('#results').children().show('puff');
	}, 'json')


})
