// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.
// Bonus (Only If You Have Time):
//
// Make sure it works for negative numbers
// If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
// If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3)

function printRange (x, y, z) {
	if (x, y, z) {
		for (var i = x; i < y; i += z) {
			console.log(i)
		}
	}
	else if (x, y) {
		for (var i = x; i < y; i++) {
			console.log(i)
		}
	}
	else if (x) {
		for (var i = 0; i < x; i++) {
			console.log(i)
		}
	}
}

// Not quite sure how I would account for negative numbers
