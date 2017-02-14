// Let's play the slots!
//
// Make a function that takes a number of quarters (1 quarter = 1 game).
//
// There is a 1 in 100 chance to win the slot machine (which will give you between 50 - 100 coins - use Math.random and Math.floor to pick a random number of coins).
//
// While the user still has quarters, use Math.random to determine if they won.
//
// If they ever win, return the number of quarters (ex: they had 50 remaining quarters and won 90, so it should return 140).
//
// Return 0 if all the quarters were wasted.
//
// Bonus (Only If You Have Time):
//
// Let the user pass the number they are willing to leave with
// (ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins)

// Math.floor((Math.random() * 100) + 1);


function slot (quarters, x) {
	if (x) {
		while (quarters > x) {
			if (Math.floor((Math.random() * 100) + 1) == 10) {
				console.log("You won");
				quarters += Math.floor((Math.random() * 50) + 1);
				console.log(quarters)
				break;
			}
			else {
				console.log("you lost")
			}
			quarters -= 1;
		}
	}
	else {
		while (quarters > 0) {
			if (Math.floor((Math.random() * 100) + 1) == 10) {
				console.log("You won");
				quarters += Math.floor((Math.random() * 50) + 1);
				console.log(quarters)
				break;
			}
			else {
				console.log("you lost");
			}
			quarters -= 1;
		}
	}

}
slot(10);
