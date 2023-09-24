function LowerOrUpper(letter) {

    if (letter.charCodeAt() >= 97) {
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}

LowerOrUpper('f');