function repeatString(str, repeats) {
    let result = ''
    for (let i = 1; i <= repeats; i++) {
        result += str;
    }
    return result;
}

repeatString("abc", 3);
repeatString("String", 2);