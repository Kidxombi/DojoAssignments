function shift (arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1];
	}
	arr[arr.length-1] = 0;
	return arr;
}
console.log(shift([1, 2, 5, 2, 90, 45, 7]));
