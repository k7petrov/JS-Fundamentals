function negativeOrPositive(arr) {

    let result = [];

    for (let current of arr) {
        let num = Number(current);
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(result.join('\n'))

}

negativeOrPositive(['7', '-2', '8', '9']);