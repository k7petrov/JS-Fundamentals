function replace(str) {
    let output = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] != str[i+1]) {
            output += str[i]
        }
    }

    console.log(output)

}

replace('aaaaabbbbbcdddeeeedssaa')