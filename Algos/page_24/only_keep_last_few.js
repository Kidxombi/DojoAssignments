function last_few(arr, n){
	arr = arr.slice(arr.length - n, arr.length);
	return arr;
}
console.log(last_few([1, 2, 3, 4,  5,  6, 7,  8,  9, 10], 3));
