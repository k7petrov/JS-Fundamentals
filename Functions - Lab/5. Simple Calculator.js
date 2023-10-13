function calculator(x, y, op) {
    let sum = {
        'multiply': (x, y) => x * y,
        'divide': (x, y) => x / y,
        'add': (x, y) => x + y,
        'subtract': (x, y) => x - y
    };

    let result = sum[op];
    return result(x, y, op);
}

calculator(5,
    5,
    'multiply'
)