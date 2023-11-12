function censored(str, word) {

    let result = str.split(word).join('*'.repeat(word.length));
    console.log(result)
}