function calculator(num1, op, num2) {

    let result = 0;

    if (op == '+') {
        result = num1 + num2;
    } else if (op == '-') {
        result = num1 - num2;
    } else if (op == '*') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }

    console.log(result.toFixed(2));
}

calculator(5,
    '+',
    10
    )