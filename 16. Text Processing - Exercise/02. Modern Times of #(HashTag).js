function hashTag(str) {

    let array = str.split(' ');
    let onlyLetters = true;

    for (let word of array) {
        if (word.length > 1) {
            if (word[0] == '#') {
                for (let char of word) {
                    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' || char == '#') {
                    } else {
                        onlyLetters = false;
                        break;
                    }
                }
                if (onlyLetters == true) {
                    console.log(word.substring(1, word.length));
                } else {
                    onlyLetters = true;
                }
                
            }
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #specia-l word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')