function amazing(num) {

    let numbers = String(num);
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }

    sum % 10 == 9 ? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`)
}

amazing(1233)