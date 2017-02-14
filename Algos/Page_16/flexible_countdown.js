function countDown (start, end, count) {
	for (var i = start; i >= end; i -= count) {
		console.log(i)
	}
}
countDown(100, 17, 3)
