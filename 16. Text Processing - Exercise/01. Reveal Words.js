function replace(words, str) {
	
	let wordsArr = words.split(', ');
	let result = '';
	
	for (let word of wordsArr) {
		let forReplace = '*'.repeat(word.length);
	 result = 	str.replace(forReplace, word);
	 str = result;
	}
	console.log(result)
}