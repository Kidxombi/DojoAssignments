function biggie (arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			arr[i] = "big";
		}
	}
	return arr;
}
console.log(biggie([1, 2, 3, -4, -5, -6]));
