function replace(string, char, string2) {

    let word = '';

    for (let i = 0; i < string.length; i++) {

        if (string[i] != '_') {
            word += string[i];
        } else {
            word += char
        }
    }

    if (word == string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

replace('Str_ng', 'i',

    'String')