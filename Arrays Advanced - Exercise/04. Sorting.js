function sort(arr) {
	
	let sorted = arr.sort((a, b) => a - b);
	let reversed = sorted.slice().reverse();
	let result = [];
	
	for (let i = 0; i < arr.length / 2; i++) {
		
		result.push(reversed[i]);
		result.push(sorted[i]);
	}
	
	if (arr.length % 2 != 0) {
			result.pop()
		}
	console.log(result.join(' '));
}