
for (var b = 100; b >= 0; b--) {
	if (b >= 30) {
		console.log("No! A whole", b, "more days untill my birthday...")
	}
	else if (b < 30 && b > 5) {
		console.log("Yay, only", b, "more days untill my birthday!")
	}
	else if (b <= 5 && b > 0) {
		console.log("ONLY", b, "MORE DAYS UNTILL MY BIRTHDAY!!")
	}
	else if (b == 0) {
		console.log("ITS MY BIRTHDAY! PARTY TIME!")
	}
}
