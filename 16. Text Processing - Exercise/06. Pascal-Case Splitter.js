function pascal(str) {
    let buffer = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] >= 'A' && str[i] <= 'Z' && i != 0) {
            buffer += ', ';
        }

        buffer += str[i];
        
    }

    console.log(buffer.trim());
}

pascal('SplitMeIfYouCanHaHaYouCantOrYouCan');