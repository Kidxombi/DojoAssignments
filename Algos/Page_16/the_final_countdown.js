function flexCount(count, start, end, ignore) {
	for (var i = start; i >= end; i -= count) {
		if (i % ignore != 0) {
			console.log(i)
		}
	}
}
flexCount(1, 65, 3, 9)
