function letters(text) {
	
	let positions = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z:26 }
	
	let arr = text.split(' ').filter(x => x.length > 1);
	let sum = 0;
	
	for (let el of arr) {
		let num = Number(el.substring(1, el.length - 1))
		let letter1 = el.substring(0, 1)
		let letter2 = el.substring(el.length - 1)
		
		if (letter1.toLowerCase() === letter1) {
			num *= positions[letter1.toLowerCase()];
		} else {
			num /= positions[letter1.toLowerCase()];
		}
		
		if (letter2.toLowerCase() === letter2) {
			num += positions[letter2.toLowerCase()];
		} else {
			num -= positions[letter2.toLowerCase()];
		}
		sum += num;
	}
	
	console.log(sum.toFixed(2));
	
}