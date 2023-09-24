function sumOfDigits(num) {

    let str = String(num);
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    console.log(sum)
}

sumOfDigits(245678)