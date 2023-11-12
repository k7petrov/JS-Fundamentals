function reverse(input) {

    let buffer = ''
    for (let i = input.length - 1; i >= 0; i--) {
        buffer += input[i] + ' ';
    }

    console.log(buffer)
}

reverse(['a', 'b', 'c', 'd', 'e'])