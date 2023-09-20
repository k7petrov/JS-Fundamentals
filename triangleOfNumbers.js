function triangleOfNumbers(n) {

    let buffer = '';

    for (let i = 1; i <= n; i++) {
        for (let c = 1; c <= i; c++) {
            buffer += i + " "
        }

        console.log(buffer);
        buffer = ''
    }
}