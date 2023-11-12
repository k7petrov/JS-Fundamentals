function print(start, end) {

    let buffer = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        buffer += i + ' ';
        sum += i;
    }

    console.log(buffer);
    console.log(`Sum: ${sum}`)
}