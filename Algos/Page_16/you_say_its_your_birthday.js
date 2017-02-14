var day = 5;
var month = 15;

function bDay (x, y) {
	if (x == day && y == month || y == day && x == month) {
		console.log('How did you know?')
	}
	else {
		console.log('Just another day.')
	}
}
