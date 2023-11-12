function dictionary(arr) {
    let dict = [];

    for (let el of arr) {

        let parsed = JSON.parse(el);
        let word = Object.keys(parsed).shift();
        let description = Object.values(parsed).shift();
        let found = dict.find(found => found.word == word);

        if (found) {
           found.description = description;
        } else {
        dict.push({ word: word, description: description });
        }
    }

    dict.sort((a, b) => a.word.localeCompare(b.word));

    for (let el of dict) {
        console.log(`Term: ${el.word} => Definition: ${el.description}`);
    }
}