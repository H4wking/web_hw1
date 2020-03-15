function maxTotal(arr) {
	if (arr.length != 10) return "Array must have exactly 10 numbers."
	arr.sort(function(a, b){return a - b});
	var sum = 0;
	for (var i = 5; i < 10; i++) {
		sum += arr[i]
	}
	return sum;
}
