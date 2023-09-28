function reverse(n, array) {

    let buffer = ''

    for (let i = n; i > 0; i--) {
        buffer += array[i - 1] + ' ';
    }

    console.log(buffer)
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);