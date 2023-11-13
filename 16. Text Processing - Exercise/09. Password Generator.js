function generator([str1, str2, str3]) {
	
	let concat = str1 + str2;
	let array = [];
	let output = '';
	
	for (let char of concat) {
		
		if (array.length < 1) {
			array = str3.split('');
		}
		
		if (char == 'a' || char == 'o' || char == 'e' || char == 'i' || char == 'u') {
			output += array.shift().toUpperCase();
		} else {
			output += char;
		}
	}
	
	let password = output.split('').reverse().join('');
	console.log(`Your generated password is ${password}`);
	
}