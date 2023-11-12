function solve(word, text) {

    let array = text.toLowerCase().split(' ');

    if (array.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}