function x (arr, n) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > n) {
			count++;
		}
	}
	return count;
}
console.log(x([1, 2, 3, 4, 5, 6, 7, 8, 9,  10], 5));
