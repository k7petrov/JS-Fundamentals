function intOrFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let int = '';

    if (sum % 1 != 0) {
        int = 'Float';
    } else {
        int = 'Integer';
    }

    console.log(`${sum} - ${int}`)
}

intOrFloat(100, 200, 303)