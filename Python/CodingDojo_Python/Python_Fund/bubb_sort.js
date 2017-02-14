function bubble_sort(arr){
	for (var i = arr.length-1; arr >= 0; i--){
		for (var n = 0; n <= i; n++){
			if(arr[n] > arr[n+1]){
				var temp = arr[n];
				var arr[n] = arr[n+1];
				var arr[n+1] = temp;
			}
		}
	}
	return arr;
}
console.log(bubble_sort([10,9,8,7,6,5,4,3,2,1]))
