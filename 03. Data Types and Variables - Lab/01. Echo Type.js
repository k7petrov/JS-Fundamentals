function echo(input) {

    let type = typeof (input);
    console.log(type)

    if (type == 'number' || type == 'string') {
        console.log(input)
    } else {
        console.log('Parameter is not suitable for printing')
    }
}

echo('Hello, JavaScript!');