function solve(arr) {

    let occurrences = {};
    let output = {};

    for (let word of arr) {
        let currentWord = arr.filter((x) => x == word);
        let count = Number(currentWord.length);
        occurrences[word] = count;
    }

    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);
    
    for (let el of sorted) {
        output[el[0]] = el[1];
    }

    for (let word in output) {
        console.log(`${word} -> ${output[word]} times`)
    }
}